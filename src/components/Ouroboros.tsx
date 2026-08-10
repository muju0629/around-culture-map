import { useEffect, useRef } from "react";

/*
  동글동글 우로보로스 마스코트 = 챗 런처.
  평소엔 ASK 버튼 자리(우하단)에 말려 잔다 — 투명해진 .chat-fab의 시각을 대신한다.
  가끔 산책을 나가고, 산책 중 만지면 챗이 열린다("around:chat-open" 이벤트).
  스펙: docs/superpowers/specs/2026-08-10-ouroboros-mascot-design.md (v2: 라운드·챗봇)
*/
const SEGMENTS = 12;
const SPACING = 7; // 세그먼트 간 몸 간격(px)
const SPEED = 95; // px/s
const TURN = 4.2; // 최대 회전(rad/s)
const HEAD_R = 7.5;
const TAIL_R = 3;
const COIL_R = 14; // 말릴 때 반지름
const FAB_OFFSET = 49; // 우하단 앵커 = chat-fab 중심 (right/bottom 20 + 29)
const WALK_EVERY: [number, number] = [45000, 90000];
const WALK_FOR: [number, number] = [8000, 14000];
const TONGUE_MS = 800;
const SIGNAL = "#e61919"; // 유일한 색 — 혀

type P = { x: number; y: number };
type Phase = "rest" | "walk" | "return" | "coil";

const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const pick = ([lo, hi]: [number, number]) => rand(lo, hi);
const dist = (a: P, b: P) => Math.hypot(a.x - b.x, a.y - b.y);

export function Ouroboros() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const dark = () => Boolean(document.querySelector(".page--home"));
    const bodyColor = () => (dark() ? "#f1f0ec" : "#11110f");
    const backColor = () => (dark() ? "#0d0d0b" : "#f1f0ec");

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const anchor = (): P => ({
      x: canvas!.width - FAB_OFFSET,
      y: canvas!.height - FAB_OFFSET,
    });

    // 몸은 머리 궤적을 그대로 따라온다 — 말리면 자동으로 감기고, 풀면 자동으로 풀린다
    let head: P = anchor();
    let angle = Math.PI;
    let trail: P[] = [];
    let phase: Phase = "rest";
    let phaseUntil = 0;
    let waypoint: P = anchor();
    let coilAngle = 0;
    let coiled = 0; // 감은 각도 누적
    let tongueUntil = 0;
    let rafId = 0;
    let running = false;
    let last = 0;
    let walkTimer = 0;

    // 머리 궤적을 등간격으로 샘플링해 세그먼트 위치를 얻는다
    function segmentPositions(): P[] {
      const points: P[] = [head];
      let need = SPACING;
      let prev = head;
      for (const p of trail) {
        let d = dist(prev, p);
        while (d >= need && points.length < SEGMENTS) {
          const t = need / d;
          const q = {
            x: prev.x + (p.x - prev.x) * t,
            y: prev.y + (p.y - prev.y) * t,
          };
          points.push(q);
          prev = q;
          d = dist(prev, p);
          need = SPACING;
        }
        if (points.length >= SEGMENTS) break;
        need -= d;
        prev = p;
      }
      while (points.length < SEGMENTS) points.push(prev);
      return points;
    }

    function steerToward(target: P, dt: number) {
      const desired = Math.atan2(target.y - head.y, target.x - head.x);
      let diff = desired - angle;
      while (diff > Math.PI) diff -= Math.PI * 2;
      while (diff < -Math.PI) diff += Math.PI * 2;
      const max = TURN * dt;
      angle += Math.max(-max, Math.min(max, diff));
      head = {
        x: head.x + Math.cos(angle) * SPEED * dt,
        y: head.y + Math.sin(angle) * SPEED * dt,
      };
      trail.unshift({ ...head });
      if (trail.length > 240) trail.length = 240;
    }

    function edgeWaypoint(): P {
      const w = canvas!.width;
      const h = canvas!.height;
      const band = 0.16;
      const side = Math.floor(rand(0, 4));
      if (side === 0) return { x: rand(30, w - 30), y: rand(24, h * band) };
      if (side === 1)
        return { x: rand(30, w - 30), y: rand(h * (1 - band), h - 24) };
      if (side === 2) return { x: rand(24, w * band), y: rand(30, h - 30) };
      return { x: rand(w * (1 - band), w - 24), y: rand(30, h - 30) };
    }

    function step(now: number, dt: number) {
      if (phase === "walk") {
        if (dist(head, waypoint) < 20) waypoint = edgeWaypoint();
        steerToward(waypoint, dt);
        if (now > phaseUntil) phase = "return";
      } else if (phase === "return") {
        steerToward(anchor(), dt);
        if (dist(head, anchor()) < COIL_R + 12) {
          phase = "coil";
          coiled = 0;
          coilAngle = Math.atan2(head.y - anchor().y, head.x - anchor().x);
        }
      } else if (phase === "coil") {
        // 앵커 둘레를 돌면 궤적이 따라 감긴다
        coilAngle += TURN * 0.75 * dt;
        coiled += TURN * 0.75 * dt;
        const a = anchor();
        steerToward(
          {
            x: a.x + Math.cos(coilAngle) * COIL_R,
            y: a.y + Math.sin(coilAngle) * COIL_R,
          },
          dt,
        );
        // 한 바퀴 반 감았으면 잠들기
        if (coiled > Math.PI * 3) {
          phase = "rest";
          scheduleWalk();
        }
      }
      // rest는 움직이지 않는다
    }

    function scheduleWalk() {
      window.clearTimeout(walkTimer);
      walkTimer = window.setTimeout(() => {
        if (phase === "rest") {
          phase = "walk";
          phaseUntil = performance.now() + pick(WALK_FOR);
          waypoint = edgeWaypoint();
          wake();
        }
      }, pick(WALK_EVERY));
    }

    function drawSnake(now: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const pts = segmentPositions();
      // 스티커 아웃라인 — 사진·다크 어디서든 읽힌다. 꼬리부터 그려 머리가 위로.
      for (let pass = 0; pass < 2; pass += 1) {
        ctx.fillStyle = pass === 0 ? backColor() : bodyColor();
        for (let i = SEGMENTS - 1; i >= 0; i -= 1) {
          const t = i / (SEGMENTS - 1);
          const r = HEAD_R + (TAIL_R - HEAD_R) * t + (pass === 0 ? 1.5 : 0);
          ctx.beginPath();
          ctx.arc(pts[i].x, pts[i].y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // 눈 — 진행 방향 기준 양옆, 흰자 + 동공
      const side = { x: -Math.sin(angle), y: Math.cos(angle) };
      const fwd = { x: Math.cos(angle) * 2.5, y: Math.sin(angle) * 2.5 };
      for (const s of [-1, 1]) {
        ctx.fillStyle = backColor();
        ctx.beginPath();
        ctx.arc(
          pts[0].x + fwd.x + side.x * 3.2 * s,
          pts[0].y + fwd.y + side.y * 3.2 * s,
          2.4,
          0,
          Math.PI * 2,
        );
        ctx.fill();
        ctx.fillStyle = bodyColor();
        ctx.beginPath();
        ctx.arc(
          pts[0].x + fwd.x * 1.3 + side.x * 3.2 * s,
          pts[0].y + fwd.y * 1.3 + side.y * 3.2 * s,
          1.1,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      // 혀 — 만졌을 때 + 산책 중 가끔, 빨강 두 갈래
      const flick =
        now < tongueUntil ||
        (phase === "walk" && Math.floor(now / 1600) % 5 === 0);
      if (flick) {
        ctx.strokeStyle = SIGNAL;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        for (const s of [-1, 1]) {
          ctx.beginPath();
          ctx.moveTo(
            pts[0].x + Math.cos(angle) * HEAD_R,
            pts[0].y + Math.sin(angle) * HEAD_R,
          );
          ctx.lineTo(
            pts[0].x + Math.cos(angle) * (HEAD_R + 5) + side.x * 2 * s,
            pts[0].y + Math.sin(angle) * (HEAD_R + 5) + side.y * 2 * s,
          );
          ctx.stroke();
        }
      }
    }

    function tick(now: number) {
      const dt = Math.min(0.05, last ? (now - last) / 1000 : 0.016);
      last = now;
      step(now, dt);
      drawSnake(now);
      if (phase === "rest" && now > tongueUntil) {
        running = false; // 잠들면 rAF 정지 — scheduleWalk가 깨운다
        last = 0;
        return;
      }
      rafId = requestAnimationFrame(tick);
    }

    function wake() {
      if (running) return;
      running = true;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(tick);
    }

    // 초기 자세: 앵커에 이미 말려 있다 — 궤적을 원으로 미리 깔아둔다
    function coilPose() {
      const a = anchor();
      trail = [];
      let ang = 0;
      for (let i = 0; i < 120; i += 1) {
        ang -= 0.16;
        trail.push({
          x: a.x + Math.cos(ang) * COIL_R,
          y: a.y + Math.sin(ang) * COIL_R,
        });
      }
      head = trail.shift()!;
      angle = Math.atan2(head.y - trail[0].y, head.x - trail[0].x);
    }

    coilPose();
    drawSnake(0);

    if (reduced) {
      // 모션 없음 — 말린 자세 고정. 챗 열기는 투명 fab 버튼이 담당.
      return () => window.removeEventListener("resize", resize);
    }

    scheduleWalk();

    // 산책 중 만지면 챗 열림 — 쉬는 자세 클릭은 그 자리의 투명 fab 버튼이 받는다
    function hit(x: number, y: number) {
      return segmentPositions().some((p) => Math.hypot(x - p.x, y - p.y) < 16);
    }
    function handleDown(event: PointerEvent) {
      if (phase === "rest" || !hit(event.clientX, event.clientY)) return;
      tongueUntil = performance.now() + TONGUE_MS;
      phase = "return"; // 놀라서 집으로
      window.dispatchEvent(new CustomEvent("around:chat-open"));
      wake();
    }
    // 호버 어포던스 — 산책 중 뱀 위에서 포인터 커서
    function handleMove(event: PointerEvent) {
      if (phase === "rest") return;
      document.documentElement.style.cursor = hit(event.clientX, event.clientY)
        ? "pointer"
        : "";
    }
    function handleVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        running = false;
        last = 0;
      } else if (phase !== "rest") wake();
    }

    window.addEventListener("pointerdown", handleDown);
    window.addEventListener("pointermove", handleMove);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(walkTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", handleDown);
      window.removeEventListener("pointermove", handleMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return <canvas ref={canvasRef} className="ouroboros" aria-hidden="true" />;
}

import { useEffect, useRef } from "react";

/*
  픽셀 우로보로스 마스코트 — 스네이크 게임 격자로 기어다니다
  쉴 때 몸을 말아 꼬리를 문다. 스펙: docs/superpowers/specs/2026-08-10-ouroboros-mascot-design.md
*/
const CELL = 8; // 논리 셀 한 변 (px)
const LENGTH = 14; // 세그먼트 수
const STEP_MS = 90; // 한 셀 전진 간격
const FAST_STEP_MS = 45; // 놀랐을 때
const EDGE_BAND = 0.15; // 웨이포인트를 뽑는 가장자리 밴드 비율
const WANDER_MS: [number, number] = [10000, 20000];
const REST_MS: [number, number] = [8000, 12000];
const AWAY_MS: [number, number] = [60000, 120000];
const FIRST_MS: [number, number] = [3000, 9000];
const TONGUE_MS = 700; // 혀 낼름 지속
const SIGNAL = "#e61919"; // 유일한 색 — 혀

type Cell = { x: number; y: number };
type Phase = "away" | "enter" | "wander" | "curl" | "rest" | "leave";

const rand = (lo: number, hi: number) => lo + Math.random() * (hi - lo);
const pick = ([lo, hi]: [number, number]) => rand(lo, hi);

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

    // 다크 홈이면 종이색 몸, 아니면 잉크색 몸 — 등장 시점에 판별
    const bodyColor = () =>
      document.querySelector(".page--home") ? "#f1f0ec" : "#11110f";
    const eyeColor = () =>
      document.querySelector(".page--home") ? "#0d0d0b" : "#f1f0ec";

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const cols = () => Math.floor(canvas!.width / CELL);
    const rows = () => Math.floor(canvas!.height / CELL);

    // 우로보로스 링 — 5×4 직사각 둘레는 정확히 14셀, 전부 직교 인접이라
    // 몸길이와 딱 맞아 머리가 꼬리를 문다 (삼각함수 원은 격자에서 겹치고 대각이 생김)
    function circleCells(cx: number, cy: number): Cell[] {
      const w = 5;
      const h = 4;
      const x0 = Math.max(1, Math.min(cols() - w - 1, cx - 2));
      const y0 = Math.max(1, Math.min(rows() - h - 1, cy - 2));
      const cells: Cell[] = [];
      for (let x = x0; x < x0 + w; x += 1) cells.push({ x, y: y0 });
      for (let y = y0 + 1; y < y0 + h; y += 1) cells.push({ x: x0 + w - 1, y });
      for (let x = x0 + w - 2; x >= x0; x -= 1) cells.push({ x, y: y0 + h - 1 });
      for (let y = y0 + h - 2; y >= y0 + 1; y -= 1) cells.push({ x: x0, y });
      return cells; // 시계 방향 14셀
    }

    if (reduced) {
      // 정적 폴백 — 우하단에 말려서 잠들어 있다 (rAF 0회)
      const ring = circleCells(cols() - 9, rows() - 8);
      ctx.fillStyle = eyeColor();
      for (const c of ring) ctx.fillRect(c.x * CELL - 1, c.y * CELL - 1, CELL + 1, CELL + 1);
      ctx.fillStyle = bodyColor();
      for (const c of ring) ctx.fillRect(c.x * CELL, c.y * CELL, CELL - 1, CELL - 1);
      return () => window.removeEventListener("resize", resize);
    }

    let snake: Cell[] = []; // [0] = 머리
    let phase: Phase = "away";
    let phaseUntil = 0;
    let waypoint: Cell = { x: 0, y: 0 };
    let stepMs = STEP_MS;
    let lastStep = 0;
    let tongueUntil = 0;
    let curlTarget: Cell[] = [];
    let rafId = 0;
    let running = false;

    // 가장자리 밴드에서 웨이포인트 뽑기
    function edgeWaypoint(): Cell {
      const c = cols();
      const r = rows();
      const bandX = Math.max(3, Math.floor(c * EDGE_BAND));
      const bandY = Math.max(3, Math.floor(r * EDGE_BAND));
      const side = Math.floor(rand(0, 4));
      if (side === 0) return { x: Math.floor(rand(1, c - 1)), y: Math.floor(rand(1, bandY)) };
      if (side === 1) return { x: Math.floor(rand(1, c - 1)), y: Math.floor(rand(r - bandY, r - 1)) };
      if (side === 2) return { x: Math.floor(rand(1, bandX)), y: Math.floor(rand(1, r - 1)) };
      return { x: Math.floor(rand(c - bandX, c - 1)), y: Math.floor(rand(1, r - 1)) };
    }

    function enter(now: number) {
      // 화면 밖 왼쪽/오른쪽에서 들어온다
      const fromLeft = Math.random() < 0.5;
      const y = Math.floor(rand(2, rows() - 2));
      const x = fromLeft ? -LENGTH : cols() + LENGTH;
      snake = Array.from({ length: LENGTH }, (_, i) => ({
        x: x + (fromLeft ? -i : i),
        y,
      }));
      waypoint = edgeWaypoint();
      phase = "wander";
      phaseUntil = now + pick(WANDER_MS);
      stepMs = STEP_MS;
    }

    // 머리를 웨이포인트 쪽으로 한 셀 (축 하나씩 — 스네이크 게임 감각)
    function stepToward(target: Cell) {
      const head = snake[0];
      const dx = target.x - head.x;
      const dy = target.y - head.y;
      const next = { ...head };
      if (Math.abs(dx) >= Math.abs(dy) && dx !== 0) next.x += Math.sign(dx);
      else if (dy !== 0) next.y += Math.sign(dy);
      else if (dx !== 0) next.x += Math.sign(dx);
      snake.unshift(next);
      snake.pop();
    }

    function step(now: number) {
      if (phase === "wander") {
        const head = snake[0];
        if (head.x === waypoint.x && head.y === waypoint.y) {
          waypoint = edgeWaypoint();
        }
        stepToward(waypoint);
        stepMs = now < tongueUntil ? FAST_STEP_MS : STEP_MS;
        if (now > phaseUntil) {
          // 지금 자리 근처에 말리기
          curlTarget = circleCells(head.x, head.y);
          phase = "curl";
        }
      } else if (phase === "curl") {
        // 머리가 원 경로를 차례로 밟으면 몸이 원이 된다
        const idx = curlTarget.findIndex(
          (c) => c.x === snake[0].x && c.y === snake[0].y,
        );
        const target =
          idx === -1 ? curlTarget[0] : curlTarget[(idx + 1) % LENGTH];
        stepToward(target);
        // 꼬리가 원 위에 다 올라오면 휴식
        const onCircle = snake.every((s) =>
          curlTarget.some((c) => c.x === s.x && c.y === s.y),
        );
        if (onCircle) {
          phase = "rest";
          phaseUntil = now + pick(REST_MS);
        }
      } else if (phase === "rest") {
        if (now > phaseUntil) {
          phase = "leave";
          const exitLeft = snake[0].x < cols() / 2;
          waypoint = { x: exitLeft ? -LENGTH - 2 : cols() + LENGTH + 2, y: snake[0].y };
        }
      } else if (phase === "leave") {
        stepToward(waypoint);
        const offscreen = snake.every((s) => s.x < -1 || s.x > cols() + 1);
        if (offscreen) {
          phase = "away";
          phaseUntil = now + pick(AWAY_MS);
          stop(); // 화면 밖 — rAF 정지, setTimeout으로 재등장
          window.setTimeout(start, phaseUntil - now);
        }
      }
    }

    function draw(now: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (phase === "away") return;
      // 스티커 아웃라인 — 어떤 배경(사진·다크) 위에서도 읽히게 반대색 1px
      ctx.fillStyle = eyeColor();
      for (const s of snake) {
        ctx.fillRect(s.x * CELL - 1, s.y * CELL - 1, CELL + 1, CELL + 1);
      }
      ctx.fillStyle = bodyColor();
      for (const s of snake) {
        ctx.fillRect(s.x * CELL, s.y * CELL, CELL - 1, CELL - 1);
      }
      // 머리 눈 1픽셀
      const head = snake[0];
      ctx.fillStyle = eyeColor();
      ctx.fillRect(head.x * CELL + 2, head.y * CELL + 2, 2, 2);
      // 혀 — 놀랐을 때 + 배회 중 가끔, 진행 방향으로 2픽셀
      const flick =
        now < tongueUntil ||
        (phase === "wander" && Math.floor(now / 1400) % 4 === 0);
      if (flick && snake.length > 1) {
        const dx = Math.sign(head.x - snake[1].x);
        const dy = Math.sign(head.y - snake[1].y);
        ctx.fillStyle = SIGNAL;
        ctx.fillRect(
          (head.x + dx) * CELL + (dx === 0 ? 3 : dx > 0 ? -3 : CELL - 4),
          (head.y + dy) * CELL + (dy === 0 ? 3 : dy > 0 ? -3 : CELL - 4),
          2,
          3,
        );
      }
    }

    function tick(now: number) {
      if (now - lastStep >= stepMs) {
        lastStep = now;
        step(now);
      }
      draw(now);
      if (running) rafId = requestAnimationFrame(tick);
    }

    function start() {
      if (running || document.hidden) return;
      running = true;
      enter(performance.now());
      rafId = requestAnimationFrame(tick);
    }

    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
      ctx?.clearRect(0, 0, canvas!.width, canvas!.height);
    }

    // 만지면 반응 — 캔버스는 클릭을 안 가로채고 window에서 수동 히트테스트
    function handleDown(event: PointerEvent) {
      if (phase === "away") return;
      const hit = snake.some(
        (s) =>
          Math.abs(event.clientX - (s.x * CELL + CELL / 2)) < CELL * 1.5 &&
          Math.abs(event.clientY - (s.y * CELL + CELL / 2)) < CELL * 1.5,
      );
      if (!hit) return;
      const now = performance.now();
      tongueUntil = now + TONGUE_MS;
      if (phase === "rest" || phase === "curl") {
        // 깨어나 다시 기어간다
        phase = "wander";
        phaseUntil = now + pick(WANDER_MS) / 2;
        waypoint = edgeWaypoint();
      }
    }

    function handleVisibility() {
      if (document.hidden) stop();
    }

    window.addEventListener("pointerdown", handleDown);
    document.addEventListener("visibilitychange", handleVisibility);
    const firstTimer = window.setTimeout(start, pick(FIRST_MS));

    return () => {
      stop();
      window.clearTimeout(firstTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", handleDown);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="ouroboros" aria-hidden="true" />;
}

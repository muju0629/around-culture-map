import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/language";
import { INTRO_FONTS, loadedFonts, type IntroFont } from "../lib/introFonts";

const CYCLE_MS = 1000;
const DOT_GAP = 28;
const DOT_BASE = 0.14;
const GLOW_RADIUS = 100;
const GLOW_MAX = 0.34;
const ATTACK_MS = 350;
const DECAY_MS = 900;
const BULGE_PUSH = 6;

export function IntroHero() {
  const { copy } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  // 시작은 Sora 하나 — 로드가 확인되는 대로 풀이 자란다 (FOUT 방지)
  const [pool, setPool] = useState<IntroFont[]>([INTRO_FONTS[0]]);
  const [fontIndex, setFontIndex] = useState(0);
  const [inView, setInView] = useState(true);
  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 렌더와 무관한 값들 — state로 두면 프레임마다 리렌더된다
  const pointer = useRef({ x: 0, y: 0, strength: 0, active: false });
  const rafId = useRef(0);

  useEffect(() => {
    let cancelled = false;
    Promise.allSettled(
      // 서브셋이 U+41뿐이라 "A"로 조회해야 로드 판정이 된다
      INTRO_FONTS.map((font) =>
        document.fonts.load(`16px "${font.family}"`, "A"),
      ),
    ).then((results) => {
      if (!cancelled) setPool(loadedFonts(INTRO_FONTS, results));
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) =>
      setInView(entry.isIntersecting),
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas || !section) return;
      // 창을 다른 배율 모니터로 옮기는 경우가 있어 매번 새로 읽는다
      const dpr = window.devicePixelRatio || 1;
      canvas.width = section.clientWidth * dpr;
      canvas.height = section.clientHeight * dpr;
      draw();
    }

    function draw() {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gap = DOT_GAP * dpr;
      const { x, y, strength } = pointer.current;
      for (let cy = gap / 2; cy < canvas.height; cy += gap) {
        for (let cx = gap / 2; cx < canvas.width; cx += gap) {
          let alpha = DOT_BASE;
          let radius = 1.1 * dpr;
          let dotX = cx;
          let dotY = cy;
          if (strength > 0) {
            const dx = cx - x * dpr;
            const dy = cy - y * dpr;
            const dist = Math.hypot(dx, dy);
            const linear = Math.max(0, 1 - dist / (GLOW_RADIUS * dpr));
            // smoothstep — 가장자리 경계가 지지 않게 완만한 곡선으로
            const falloff = linear * linear * (3 - 2 * linear);
            const swell = falloff * strength;
            alpha += (GLOW_MAX - DOT_BASE) * swell;
            // 볼록 렌즈 — 가까운 도트일수록 커지고 살짝 바깥으로 밀린다
            radius += 0.8 * dpr * swell;
            if (dist > 0) {
              const push = (BULGE_PUSH * dpr * swell) / dist;
              dotX += dx * push;
              dotY += dy * push;
            }
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(dotX, dotY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let last = 0;
    function tick(now: number) {
      const dt = last ? now - last : 16;
      last = now;
      if (pointer.current.active) {
        // 켜질 때도 즉시가 아니라 서서히 차오른다
        pointer.current.strength = Math.min(
          1,
          pointer.current.strength + dt / ATTACK_MS,
        );
      } else {
        pointer.current.strength = Math.max(
          0,
          pointer.current.strength - dt / DECAY_MS,
        );
      }
      draw();
      if (pointer.current.active || pointer.current.strength > 0) {
        rafId.current = requestAnimationFrame(tick);
      } else {
        last = 0;
      }
    }

    function wake() {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(tick);
    }

    // 호버·터치 공통 — 포인터가 섹션 위에 있으면 글로우가 따라온다
    function handleMove(event: PointerEvent) {
      if (!event.isPrimary) return; // 멀티터치는 첫 포인터만
      const rect = section!.getBoundingClientRect();
      // strength는 건드리지 않는다 — tick이 ATTACK_MS에 걸쳐 차오르게 한다
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
      pointer.current.active = true;
      wake();
    }

    function handleUp(event: PointerEvent) {
      if (!event.isPrimary) return;
      // 마우스는 손을 떼도 아직 올려져 있다 — 끄는 건 pointerleave가 한다
      if (event.pointerType === "mouse") return;
      pointer.current.active = false;
    }

    function handleLeave(event: PointerEvent) {
      if (!event.isPrimary) return;
      pointer.current.active = false;
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      // pointerdown도 move 핸들러로 — 터치는 down이 첫 좌표다
      section.addEventListener("pointerdown", handleMove);
      section.addEventListener("pointermove", handleMove);
      section.addEventListener("pointerleave", handleLeave);
      // 섹션 밖에서 놓아도 잡도록 release는 window에서 듣는다 —
      // 캡처를 쓰면 click이 섹션으로 리타겟되어 힌트 버튼이 죽는다
      window.addEventListener("pointerup", handleUp);
      window.addEventListener("pointercancel", handleUp);
    }
    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointerdown", handleMove);
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerleave", handleLeave);
      window.removeEventListener("pointerup", handleUp);
      window.removeEventListener("pointercancel", handleUp);
      cancelAnimationFrame(rafId.current);
    };
    // reducedMotion은 마운트 시 고정값이라 의존성 불필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!inView) {
      cancelAnimationFrame(rafId.current);
      pointer.current.strength = 0;
      pointer.current.active = false;
    }
  }, [inView]);

  useEffect(() => {
    if (reducedMotion || !inView || pool.length < 2) return;
    const id = window.setInterval(
      () => setFontIndex((index) => index + 1),
      CYCLE_MS,
    );
    return () => window.clearInterval(id);
  }, [reducedMotion, inView, pool.length]);

  const font = pool[fontIndex % pool.length];

  function scrollPast() {
    sectionRef.current?.nextElementSibling?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  }

  return (
    <section ref={sectionRef} className="intro-hero" aria-label="AROUND">
      <canvas ref={canvasRef} className="intro-hero__canvas" aria-hidden="true" />
      <span
        className="intro-hero__letter"
        style={{ fontFamily: font.css }}
        aria-hidden="true"
      >
        A
      </span>
      <button
        type="button"
        className="intro-hero__hint"
        onClick={scrollPast}
        aria-label={copy.home.scrollHint}
      >
        <span aria-hidden="true">SCROLL ↓</span>
      </button>
    </section>
  );
}

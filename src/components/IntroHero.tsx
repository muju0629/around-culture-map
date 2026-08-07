import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/language";
import { INTRO_FONTS, loadedFonts, type IntroFont } from "../lib/introFonts";

const CYCLE_MS = 1000;
const DOT_GAP = 28;
const DOT_BASE = 0.06;
const GLOW_RADIUS = 120;
const GLOW_MAX = 0.5;
const DECAY_MS = 600;

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
          if (strength > 0) {
            const dist = Math.hypot(cx - x * dpr, cy - y * dpr);
            const falloff = Math.max(0, 1 - dist / (GLOW_RADIUS * dpr));
            alpha += (GLOW_MAX - DOT_BASE) * falloff * strength;
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(cx, cy, 1.1 * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    let last = 0;
    function tick(now: number) {
      const dt = last ? now - last : 16;
      last = now;
      if (!pointer.current.active) {
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

    function handleDown(event: PointerEvent) {
      if (!event.isPrimary) return; // 멀티터치는 첫 포인터만
      const rect = section!.getBoundingClientRect();
      pointer.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        strength: 1,
        active: true,
      };
      wake();
    }

    function handleMove(event: PointerEvent) {
      if (!event.isPrimary || !pointer.current.active) return;
      const rect = section!.getBoundingClientRect();
      pointer.current.x = event.clientX - rect.left;
      pointer.current.y = event.clientY - rect.top;
    }

    function handleUp(event: PointerEvent) {
      if (!event.isPrimary) return;
      pointer.current.active = false;
    }

    resize();
    window.addEventListener("resize", resize);
    if (!reducedMotion) {
      section.addEventListener("pointerdown", handleDown);
      section.addEventListener("pointermove", handleMove);
      // 섹션 밖에서 놓아도 잡도록 release는 window에서 듣는다 —
      // 캡처를 쓰면 click이 섹션으로 리타겟되어 힌트 버튼이 죽는다
      window.addEventListener("pointerup", handleUp);
      window.addEventListener("pointercancel", handleUp);
    }
    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointerdown", handleDown);
      section.removeEventListener("pointermove", handleMove);
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

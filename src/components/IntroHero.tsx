import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/language";
import { INTRO_FONTS, loadedFonts, type IntroFont } from "../lib/introFonts";

const CYCLE_MS = 1000;

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

  useEffect(() => {
    let cancelled = false;
    Promise.allSettled(
      INTRO_FONTS.map((font) => document.fonts.load(`16px "${font.family}"`)),
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

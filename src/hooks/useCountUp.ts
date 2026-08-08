import { useEffect, useRef, useState } from "react";

// ease-out — 마지막에 감속해야 숫자가 멈추는 느낌이 난다
export function countUpValue(from: number, to: number, t: number): number {
  const eased = 1 - (1 - t) ** 3;
  return Math.round(from + (to - from) * eased);
}

export function useCountUp(target: number, durationMs = 400): number {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);
  const displayRef = useRef(target);

  useEffect(() => {
    displayRef.current = display;
  }, [display]);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const from = fromRef.current;
    if (reduced || from === target) {
      fromRef.current = target;
      setDisplay(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setDisplay(countUpValue(from, target, t));
      if (t < 1) raf = requestAnimationFrame(tick);
      else fromRef.current = target;
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      fromRef.current = displayRef.current;
    };
  }, [target, durationMs]);

  return display;
}

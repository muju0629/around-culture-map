# 인트로 히어로 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 홈 최상단에 풀뷰포트 다크 인트로 섹션 — 1초마다 폰트가 바뀌는 A + 터치에 반응하는 도트 캔버스. 스크롤이 곧 진입.

**Architecture:** `IntroHero` 컴포넌트 하나를 `HomePage`의 `<main>` 첫 자식으로 삽입. 폰트 풀 로직만 `src/lib/introFonts.ts`로 분리해 단위 테스트. 도트는 캔버스 1장.

**Tech Stack:** React 19, vite, vitest. 새 의존성 없음. 구글폰트 4종은 `text=A` 서브셋으로 로드.

**Spec:** `docs/superpowers/specs/2026-08-07-intro-hero-design.md`

## Global Constraints

- 760px가 기존 모바일 분기점 — 새 분기점을 만들지 않는다 (styles.css:4560 주석 참조)
- 커밋은 로컬만, 푸쉬하지 않는다 (사용자 결정 대기 중)
- 배경 `#0d0d0b`, 도트 기본 rgba(255,255,255,0.06), 터치 반경 120px, 최대 밝기 0.5, 감쇠 600ms, 격자 간격 28px, 폰트 교체 1000ms — 전부 스펙 값
- `prefers-reduced-motion`: 폰트 순환 정지(Sora 고정), 도트는 정적 그리드
- 히어로가 뷰포트 밖이면 인터벌·rAF 정지

---

### Task 1: 폰트 풀 로직 + 구글폰트 로드

**Files:**
- Create: `src/lib/introFonts.ts`
- Test: `src/lib/introFonts.test.ts`
- Modify: `index.html` (구글폰트 `<link>` 1줄 추가, 기존 Sora/Inter link 바로 아래)

**Interfaces:**
- Produces: `INTRO_FONTS: IntroFont[]` (Sora가 [0]), `IntroFont = { family: string; css: string }`, `loadedFonts(fonts, results): IntroFont[]`
- 주의: `document.fonts.load()`는 모르는 폰트여도 **reject하지 않고 빈 배열로 resolve**한다. 그래서 fulfilled 여부가 아니라 `value.length > 0`으로 판정한다.

- [ ] **Step 1: 실패하는 테스트 작성**

```ts
// src/lib/introFonts.test.ts
import { describe, expect, it } from "vitest";
import { INTRO_FONTS, loadedFonts } from "./introFonts";

describe("인트로 폰트 풀", () => {
  it("로드가 확인된 폰트만 풀에 들어간다", () => {
    // document.fonts.load는 모르는 폰트면 빈 배열로 resolve한다 — reject가 아니라
    const results: PromiseSettledResult<readonly unknown[]>[] = [
      { status: "fulfilled", value: [{}] }, // Sora — 로드됨
      { status: "fulfilled", value: [] }, // Playfair — 미로드
      { status: "rejected", reason: new Error("network") }, // Unifraktur
      { status: "fulfilled", value: [{}] }, // Space Mono — 로드됨
      { status: "fulfilled", value: [{}] }, // Archivo — 로드됨
    ];
    const pool = loadedFonts(INTRO_FONTS, results);
    expect(pool.map((f) => f.family)).toEqual([
      "Sora",
      "Space Mono",
      "Archivo Black",
    ]);
  });

  it("전부 실패하면 Sora 하나로 버틴다", () => {
    const results: PromiseSettledResult<readonly unknown[]>[] =
      INTRO_FONTS.map(() => ({ status: "fulfilled", value: [] }));
    expect(loadedFonts(INTRO_FONTS, results)).toEqual([INTRO_FONTS[0]]);
  });
});
```

- [ ] **Step 2: 실패 확인**

Run: `npx vitest run src/lib/introFonts.test.ts`
Expected: FAIL — "Cannot find module './introFonts'"

- [ ] **Step 3: 최소 구현**

```ts
// src/lib/introFonts.ts
export interface IntroFont {
  family: string;
  css: string;
}

// [0]은 Sora — 이미 사이트 전역에서 로드하는 폰트라 순환의 시드가 된다
export const INTRO_FONTS: IntroFont[] = [
  { family: "Sora", css: '"Sora", sans-serif' },
  { family: "Playfair Display", css: '"Playfair Display", serif' },
  { family: "UnifrakturMaguntia", css: '"UnifrakturMaguntia", serif' },
  { family: "Space Mono", css: '"Space Mono", monospace' },
  { family: "Archivo Black", css: '"Archivo Black", sans-serif' },
];

/**
 * document.fonts.load 결과에서 실제 로드된 폰트만 골라낸다.
 * load()는 모르는 폰트여도 빈 배열로 resolve하므로 length로 판정한다.
 * 전부 비면 Sora로 폴백 — 풀이 빈 채 순환이 도는 일은 없다.
 */
export function loadedFonts(
  fonts: IntroFont[],
  results: PromiseSettledResult<readonly unknown[]>[],
): IntroFont[] {
  const pool = fonts.filter((_, i) => {
    const result = results[i];
    return result?.status === "fulfilled" && result.value.length > 0;
  });
  return pool.length > 0 ? pool : [fonts[0]];
}
```

- [ ] **Step 4: 통과 확인**

Run: `npx vitest run src/lib/introFonts.test.ts`
Expected: PASS (2 tests)

- [ ] **Step 5: index.html에 폰트 링크 추가**

기존 Sora/Inter `<link rel="stylesheet">` 바로 아래에:

```html
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display&family=Space+Mono&family=UnifrakturMaguntia&text=A&display=swap"
    />
```

`text=A`가 각 폰트를 글자 A 하나로 서브셋한다 (폰트당 1~2KB).

- [ ] **Step 6: 커밋**

```bash
git add src/lib/introFonts.ts src/lib/introFonts.test.ts index.html
git commit -m "feat: add intro font pool with load-gated cycling"
```

---

### Task 2: IntroHero 컴포넌트 — A 순환 + 스크롤 힌트 + 홈 통합

**Files:**
- Create: `src/components/IntroHero.tsx`
- Modify: `src/pages/HomePage.tsx:96-97` (`<main>` 첫 자식으로 삽입)
- Modify: `src/i18n/language.ts` (ko/en `home`에 `scrollHint` 키 추가)
- Modify: `src/styles.css` (home-hero 섹션 근처에 `.intro-hero` 블록 추가)

**Interfaces:**
- Consumes: `INTRO_FONTS`, `loadedFonts`, `IntroFont` (Task 1)
- Produces: `IntroHero` 컴포넌트 (props 없음). Task 3이 이 파일에 캔버스를 더한다.
- `copy.home.scrollHint: string` — ko `"아래로 스크롤"`, en `"Scroll down"`

- [ ] **Step 1: i18n 키 추가**

`src/i18n/language.ts`의 ko `home` 객체 (`cta` 줄 다음)에:

```ts
      scrollHint: "아래로 스크롤",
```

en `home` 객체의 같은 위치에:

```ts
      scrollHint: "Scroll down",
```

- [ ] **Step 2: 컴포넌트 작성**

```tsx
// src/components/IntroHero.tsx
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
```

- [ ] **Step 3: HomePage에 삽입**

`src/pages/HomePage.tsx` — import 목록에 `import { IntroHero } from "../components/IntroHero";` 추가, `<main>` 바로 다음 줄(97, `<section className="home-hero">` 앞)에 `<IntroHero />`.

- [ ] **Step 4: CSS 추가**

`src/styles.css`의 `.home-hero` 블록 앞에:

```css
/* Intro hero — 폰트가 바뀌는 A, 터치에 반응하는 도트 */
.intro-hero {
  position: relative;
  height: calc(100svh - var(--header-height));
  overflow: hidden;
  background: #0d0d0b;
  /* touch-action을 막지 않는다 — 스와이프 스크롤이 진입 수단이다.
     스크롤이 시작되면 pointercancel이 오고 글로우는 알아서 감쇠한다 */
}

.intro-hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.intro-hero__letter {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--paper);
  font-size: 40vh;
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.intro-hero__hint {
  position: absolute;
  right: 0;
  bottom: 26px;
  left: 0;
  margin: 0 auto;
  padding: 12px;
  border: 0;
  background: none;
  color: rgba(241, 240, 236, 0.55);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.18em;
  cursor: pointer;
}
```

- [ ] **Step 5: 타입·테스트·빌드 확인**

Run: `npx tsc -b && npx vitest run`
Expected: 타입 에러 0, 기존 18개 + 신규 2개 테스트 전부 PASS

- [ ] **Step 6: 브라우저 확인**

Run: `npm run dev` 후 devtools 390px 뷰포트에서 `/` 접속.
Expected: 다크 풀뷰포트 섹션, 가운데 A가 1초마다 폰트 변경(로드 직후엔 Sora 고정이다가 풀이 자라며 순환 시작), 하단 SCROLL ↓ 탭 시 기존 home-hero로 부드럽게 스크롤.

- [ ] **Step 7: 커밋**

```bash
git add src/components/IntroHero.tsx src/pages/HomePage.tsx src/i18n/language.ts src/styles.css
git commit -m "feat: add intro hero with font-cycling A"
```

---

### Task 3: 도트 캔버스 — 터치 반응

**Files:**
- Modify: `src/components/IntroHero.tsx` (Task 2에서 만든 파일에 캔버스 추가)

**Interfaces:**
- Consumes: Task 2의 `IntroHero` 구조 (`sectionRef`, `inView`, `reducedMotion`)
- Produces: 없음 — 내부 구현. 외부 인터페이스 변화 없음.

- [ ] **Step 1: 캔버스 로직 추가**

`IntroHero.tsx`에 다음을 추가한다. 상수는 컴포넌트 밖:

```tsx
const DOT_GAP = 28;
const DOT_BASE = 0.06;
const GLOW_RADIUS = 120;
const GLOW_MAX = 0.5;
const DECAY_MS = 600;
```

컴포넌트 안 (기존 state 아래):

```tsx
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // 렌더와 무관한 값들 — state로 두면 프레임마다 리렌더된다
  const pointer = useRef({ x: 0, y: 0, strength: 0, active: false });
  const rafId = useRef(0);
```

캔버스 effect (IntersectionObserver effect 아래):

```tsx
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas || !section) return;
      canvas.width = section.clientWidth * dpr;
      canvas.height = section.clientHeight * dpr;
      draw();
    }

    function draw() {
      if (!canvas || !ctx) return;
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
      section.addEventListener("pointerup", handleUp);
      section.addEventListener("pointercancel", handleUp);
    }
    return () => {
      window.removeEventListener("resize", resize);
      section.removeEventListener("pointerdown", handleDown);
      section.removeEventListener("pointermove", handleMove);
      section.removeEventListener("pointerup", handleUp);
      section.removeEventListener("pointercancel", handleUp);
      cancelAnimationFrame(rafId.current);
    };
    // reducedMotion은 마운트 시 고정값이라 의존성 불필요
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
```

`inView`가 false로 바뀌면 rAF 정지 (별도 effect):

```tsx
  useEffect(() => {
    if (!inView) {
      cancelAnimationFrame(rafId.current);
      pointer.current.strength = 0;
      pointer.current.active = false;
    }
  }, [inView]);
```

JSX — `<span className="intro-hero__letter">` 앞에:

```tsx
      <canvas ref={canvasRef} className="intro-hero__canvas" aria-hidden="true" />
```

- [ ] **Step 2: 타입·테스트·빌드 확인**

Run: `npx tsc -b && npx vitest run`
Expected: 타입 에러 0, 전부 PASS

- [ ] **Step 3: 브라우저 확인**

Run: `npm run dev`, devtools 390px 뷰포트 + 터치 시뮬레이션.
Expected: 기본 도트가 은은하게 깔리고, 드래그 지점 반경 ~120px가 밝아지며 따라옴. 손 떼면 ~0.6초에 걸쳐 어두워짐. 정지 상태에선 rAF가 돌지 않음 (Performance 패널에서 idle 확인). `prefers-reduced-motion: reduce` 에뮬레이션 시 도트 정적, A는 Sora 고정.

- [ ] **Step 4: 커밋**

```bash
git add src/components/IntroHero.tsx
git commit -m "feat: make intro hero dots react to touch"
```

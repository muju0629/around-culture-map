# 트렌디 패스 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 스펙 `docs/superpowers/specs/2026-08-08-trendy-pass-design.md`의 5갈래 — View Transitions, 살아있는 숫자, 무드 틴트, 큐레이터 노트 승격, 손맛 디테일.

**Architecture:** 기존 컴포넌트에 표면 단위로 붙는 독립 태스크 5개. 공유 인프라는 카운트업 훅 하나뿐.

**Tech Stack:** React 19, react-router-dom 7 (viewTransition 내장), vite, vitest. 새 의존성 없음.

## Global Constraints

- 새 의존성 금지. 760px 외 새 CSS 분기점 금지. 한글에 자간·대문자 트릭 금지.
- `--signal` 빨강이 화면의 유일한 색 — 무드 틴트는 종이 온도 편차만 (스펙의 7개 헥스 그대로).
- `prefers-reduced-motion`이면 모든 신규 모션 즉시 교체/정지.
- 커밋은 로컬만, 푸쉬는 컨트롤러가 한다.
- 한국어 주석이 하우스 스타일.

---

### Task 1: View Transitions — 카드 → 상세 포스터 모프

**Files:**
- Modify: `src/components/EventCard.tsx` (상세로 가는 `<Link>`들에 `viewTransition` prop, 포스터 래퍼에 `viewTransitionName` 스타일)
- Modify: `src/pages/EventDetailPage.tsx:207` (`<Poster event={event} priority />` 래퍼에 같은 이름)
- Modify: `src/components/Poster.tsx` (루트 요소가 스타일 prop을 받을 수 있는지 확인, 필요시 `style?: CSSProperties` prop 추가)
- Modify: `src/styles.css` (view-transition 크로스페이드 규칙, 파일 끝 모션 섹션 근처)

**Interfaces:**
- Produces: 포스터 공유 요소 이름 규약 `poster-<event.id>` (CSS ident 안전: id에 콜론 등이 있으면 `poster-` + id의 영숫자/하이픈만 남긴 형태 사용 — 헬퍼 `posterTransitionName(id)` 를 Poster.tsx에서 export)
- Consumes: 없음

- [ ] **Step 1: EventCard에서 상세로 가는 모든 `<Link to={/events/...}>` 찾기** — grid/list/feature 세 레이아웃 전부. 각 Link에 `viewTransition` prop 추가.
- [ ] **Step 2: 이름 헬퍼와 스타일 부여**

Poster.tsx에:
```tsx
// view-transition-name은 CSS ident여야 한다 — id의 안전 문자만 남긴다
export function posterTransitionName(id: string) {
  return `poster-${id.replace(/[^a-zA-Z0-9-]/g, "")}`;
}
```
카드 쪽 포스터 래퍼와 EventDetailPage의 포스터 래퍼에
`style={{ viewTransitionName: posterTransitionName(event.id) }}`.
주의: 목록에 같은 스팟이 두 번 나오지 않는지 확인 (같은 이름 중복이면 전환이 스킵된다 — 관련 목록 등에서 중복되면 카드 쪽은 탐색 목록에만 이름을 준다).

- [ ] **Step 3: CSS**

```css
/* View transitions — 카드 포스터가 상세 헤더로 이어진다 */
@media (prefers-reduced-motion: no-preference) {
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation-duration: 180ms;
  }
}
@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

- [ ] **Step 4: 검증** — `npx tsc --noEmit -p tsconfig.app.json` 0 에러, `npx vitest run` 전부 PASS. 실브라우저: 탐색 목록 카드 클릭 → 포스터가 상세로 모프하는지 (Chrome), `document.startViewTransition` 미지원 시뮬(주석 처리 불가하니 코드 리뷰로 갈음 — router가 알아서 저하시킴).
- [ ] **Step 5: 커밋** `feat: morph card posters into the detail page`

---

### Task 2: 살아있는 숫자 — 카운트업 + 무드 스냅

**Files:**
- Create: `src/hooks/useCountUp.ts`
- Test: `src/hooks/useCountUp.test.ts`
- Modify: `src/pages/ExplorePage.tsx` (PLACES FOUND 값에 훅 적용 — `placesFound` 카피가 렌더되는 곳)
- Modify: `src/components/MoodIndex.tsx` (선택 시 라벨 스냅 클래스 재생)
- Modify: `src/styles.css` (스냅 keyframes)

**Interfaces:**
- Produces: `useCountUp(target: number, durationMs?: number): number` — 값이 바뀌면 이전 표시값에서 target까지 rAF로 보간(기본 400ms), reduced-motion이면 즉시 target.
- Consumes: 없음

- [ ] **Step 1: 실패하는 테스트** — 순수 보간 함수를 분리해 테스트: `countUpValue(from, to, t)` (t 0~1, 정수 반올림, t=1이면 정확히 to). reduced-motion 분기는 훅 내부라 테스트는 보간 함수만.

```ts
import { describe, expect, it } from "vitest";
import { countUpValue } from "./useCountUp";

describe("카운트업 보간", () => {
  it("끝값에 정확히 도달한다", () => {
    expect(countUpValue(3, 17, 1)).toBe(17);
  });
  it("중간값은 정수다", () => {
    const v = countUpValue(0, 10, 0.5);
    expect(Number.isInteger(v)).toBe(true);
    expect(v).toBeGreaterThan(0);
    expect(v).toBeLessThan(10);
  });
  it("역방향도 된다", () => {
    expect(countUpValue(17, 3, 1)).toBe(3);
  });
});
```

- [ ] **Step 2: 구현**

```ts
import { useEffect, useRef, useState } from "react";

// ease-out — 마지막에 감속해야 숫자가 멈추는 느낌이 난다
export function countUpValue(from: number, to: number, t: number): number {
  const eased = 1 - (1 - t) ** 3;
  return Math.round(from + (to - from) * eased);
}

export function useCountUp(target: number, durationMs = 400): number {
  const [display, setDisplay] = useState(target);
  const fromRef = useRef(target);

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
      fromRef.current = target;
    };
  }, [target, durationMs]);

  return display;
}
```

- [ ] **Step 3: ExplorePage 적용** — placesFound 숫자 렌더 지점에서 원시 count 대신 `useCountUp(count)`.
- [ ] **Step 4: 무드 스냅** — MoodIndex에서 선택된 행 라벨에 key 재생 트릭 (`key={selected === mood.id ? "on-" + mood.id : mood.id}`) + CSS:

```css
@media (prefers-reduced-motion: no-preference) {
  .mood-row.is-active .mood-row__label {
    animation: mood-snap 240ms var(--ease-out-soft);
  }
  @keyframes mood-snap {
    from {
      opacity: 0.35;
      transform: translateY(2px);
    }
  }
}
```
(실제 클래스명은 MoodIndex 마크업에 맞춘다 — 라벨 요소가 다른 이름이면 그걸 쓴다.)

- [ ] **Step 5: 검증** — tsc, vitest (신규 3), 실브라우저: 필터 전환 시 숫자가 흐르는지.
- [ ] **Step 6: 커밋** `feat: animate the found count and mood selection`

---

### Task 3: 무드 틴트

**Files:**
- Modify: `src/data/moods.ts` (Mood에 `paper: string` 추가 + 스펙 헥스 7개)
- Modify: `src/pages/ExplorePage.tsx` (`.explore-layout` 컨테이너 스타일에 `"--mood-paper": <hex>` 주입)
- Modify: `src/styles.css` (무드 레일·시트·툴바 배경을 `var(--mood-paper, var(--paper))` 기반으로, `transition: background 400ms ease`)

**Interfaces:**
- Produces: `Mood.paper: string`
- 스펙 헥스 그대로: sound-at-night #eff0f2 · strange-by-day #f0f1ef · crowded-day #f4efe8 · wordless-hours #f2f0eb · two-stops-for-bread #f5f1e6 · dusty-things #f2efe7 · low-sun-street #f5f0e9

- [ ] **Step 1: moods.ts에 paper 필드 + 값 7개.**
- [ ] **Step 2: ExplorePage** — activeMood로 해당 Mood를 찾아 layout 컨테이너 `style={{ "--mood-paper": mood.paper } as CSSProperties}`.
- [ ] **Step 3: CSS** — 탐색 크롬 배경 3곳(모바일 툴바 rgba 배경은 유지하되 불투명 배경들만)을 `var(--mood-paper, var(--paper))`로 교체 + transition. 지도 타일·마커는 손대지 않는다.
- [ ] **Step 4: 검증** — tsc·vitest, 실브라우저에서 무드 전환 시 배경 온도가 400ms에 걸쳐 미세하게 도는지. 스크린샷 2장(두 무드) 비교.
- [ ] **Step 5: 커밋** `feat: tilt the explore chrome toward the active mood`

---

### Task 4: 큐레이터 노트 승격

**Files:**
- Modify: `src/pages/EventDetailPage.tsx` (`detail-hero__intro` p 아래에 노트 블록 — 216행 근처)
- Modify: `src/styles.css` (풀쿼트 스타일)
- Modify: `src/i18n/language.ts` (ko/en `event`에 `curatorNote: "큐레이터 노트" / "Curator's note"` — 이미 있으면 재사용)

**Interfaces:**
- Consumes: `Spot.curatorNote?: string` (기존)

- [ ] **Step 1: 마크업**

```tsx
{event.curatorNote && (
  <figure className="detail-curator-note">
    <span className="eyebrow">{copy.event.curatorNote}</span>
    <blockquote>{event.curatorNote}</blockquote>
  </figure>
)}
```

- [ ] **Step 2: CSS** — 왼쪽 룰선 + 큰 인용 타이포 (기존 detail 섹션 스타일 문법에 맞춰):

```css
.detail-curator-note {
  margin: 28px 0 0;
  padding: 4px 0 4px 20px;
  border-left: 2px solid var(--black);
}

.detail-curator-note blockquote {
  margin: 8px 0 0;
  font-size: 21px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.45;
}
```

- [ ] **Step 3: 노트 없는 스팟 목록 리포트** — `grep -c curatorNote` 대비 전체 스팟 수를 세서 몇/몇 인지 보고에 남긴다 (콘텐츠 집필은 사용자 몫, 코드로 채우지 않는다).
- [ ] **Step 4: 검증** — tsc·vitest, 실브라우저에서 노트 있는 스팟(예: 리움 관련 id) 상세 확인.
- [ ] **Step 5: 커밋** `feat: raise the curator's note into the detail hero`

---

### Task 5: 손맛 — selection·커서·OG·404

**Files:**
- Modify: `src/styles.css` (`::selection`, 지도 crosshair, 404 도트 배경)
- Modify: `index.html` (OG/트위터 메타)
- Create: `public/brand/og.png` (1200×630 — 아래 스크립트로 생성해 커밋)
- Modify: `src/pages/NotFoundPage.tsx` (숫자 404 디스플레이 추가)

- [ ] **Step 1: CSS**

```css
::selection {
  color: var(--paper);
  background: var(--ink);
}

.explore-map-panel .leaflet-container {
  cursor: crosshair;
}

.page--not-found .not-found {
  background-image: radial-gradient(
    rgba(17, 17, 15, 0.14) 1.1px,
    transparent 1.1px
  );
  background-size: 28px 28px;
}
```

- [ ] **Step 2: 404 마크업** — eyebrow 위에 `<span className="not-found__number" aria-hidden="true">404</span>` + CSS `font-family: var(--font-display); font-size: clamp(96px, 24vw, 220px); line-height: 1;`. 기존 h1은 유지.
- [ ] **Step 3: OG 메타** (index.html `<title>` 위):

```html
    <meta property="og:type" content="website" />
    <meta property="og:title" content="AROUND — Seoul Culture Map" />
    <meta property="og:description" content="알려지지 않은 장소의 발견, 무드로 짜는 서울 문화 지도" />
    <meta property="og:image" content="https://around-culture-map.vercel.app/brand/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
```
(도메인은 `vercel.json`/프로젝트의 프로덕션 도메인을 확인해 실제 값으로 — 확인 불가하면 상대경로 대신 프로덕션 URL 추정치를 쓰고 보고에 명시.)

- [ ] **Step 4: og.png 생성** — 스크래치패드에 1200×630 HTML(배경 #0d0d0b, 28px 도트 그리드 radial-gradient rgba(255,255,255,0.14), 중앙 Archivo Black급 A 400px 종이색, 좌하단 AROUND 워드마크 + `SEOUL / CULTURE MAP` eyebrow)을 만들고 pt_env Playwright(channel="chrome", viewport 1200×630)로 스크린샷 → `public/brand/og.png`. 생성 스크립트는 커밋하지 않는다 (1회성).
- [ ] **Step 5: 검증** — tsc·vitest, 404 페이지 실브라우저 스크린샷, og.png 파일 크기 확인 (<300KB).
- [ ] **Step 6: 커밋** `feat: add taste details — selection, cursor, OG image, 404`

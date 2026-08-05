# 무드 기반 탐색과 코스 빌더 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 무드로 서울을 훑고, 고른 장소를 순서 있는 도보 코스로 묶어 링크로 공유하는 Explore 화면을 만든다.

**Architecture:** 기존 `CultureEvent`를 `Spot`으로 넓혀 상설 장소와 기간 행사를 한 타입에 담고, 탐색 축을 카테고리에서 무드로 옮긴다. Explore는 목차(무드) · 지도 · 코스 트랙 3단이 되고, 코스 상태는 이미 있는 `useItinerary`의 순서 있는 id 배열을 그대로 쓴다. 도보 시간과 경로선은 Mapbox Directions 한 번의 호출에서 나오는 `legs[]`로 채운다.

**Tech Stack:** React 19 · TypeScript · Vite 6 · react-leaflet 5 · Mapbox (Raster Tiles / Directions / Optimization) · vitest

## Global Constraints

- 바탕 `#f1f0ec` · 잉크 `#11110f` · 메타 `#5a5a5a` · 비활성 `#9c9b96` · 헤어라인 `rgba(17,17,15,.10)`
- 색 강조 없음. 검정 면은 화면당 두 곳까지 — 선택된 목차 줄, 코스(마커 · 번호 · 경로선). `#e61919`은 종료 임박 표시 전용
- 전환은 `180ms cubic-bezier(0.22, 1, 0.36, 1)`. 그림자 없음. radius는 두 단계 — 면(선택된 목차 행 · 지도 컨테이너 · 카드류)은 `--radius-card: 16px`, 알약(버튼 · 마커 · 배지)은 `9999px`. 레일과 헤어라인은 직선. 둥근 행에는 행간 헤어라인을 두지 않는다
- 폰트 스택 `"Sora", "Pretendard Variable", Pretendard, "Apple SD Gothic Neo", sans-serif` — Sora/Inter에 한글 글리프가 없어 글리프 단위로 Pretendard에 대체된다
- 메타 레이블 — 라틴 11px `0.18em` uppercase weight 500 / 한글 11px `0.14em` uppercase 없음 weight 500
- 지도 타일 필터 `grayscale(1) contrast(.82) brightness(1.1)` + `mix-blend-mode: multiply` 유지
- 체류 시간 기본값 — `kind: "place"` 20분, `kind: "event"` 60분
- 도보 전용. Mapbox는 대중교통을 지원하지 않는다
- 무드는 한 번에 하나만 선택된다
- 각 태스크 끝에서 `npm run build`가 통과해야 한다

## 이 계획에서 제외한 것

- **기존 5개 화면 재도색** (Home · 상세 · 찜 · 아카이브 · 404) — 별도 계획. 이 계획은 토큰을 심고 Explore에만 적용한다
- **수집한 19곳 병합** — `enriched.json`이 저장소에 없어 시작할 수 없다. 데이터 작업이며 코드와 독립적이다. 이 계획은 기존 43개로 동작하고, 데이터가 없는 무드는 목차에 `—`로 남는다
- AI 코스 추천, 사용자 발행

## 파일 구조

**새로 만든다**

| 파일 | 책임 |
| --- | --- |
| `src/data/moods.ts` | `MoodId` 타입과 무드 일곱 개의 정의. 카테고리 → 무드 기본 매핑 |
| `src/lib/course.ts` | 순수 로직. URL 직렬화 · 재정렬 · 직선거리 · 체류 시간 합산 |
| `src/lib/course.test.ts` | 위의 단위 테스트 |
| `src/lib/directions.ts` | Mapbox Directions · Optimization 호출과 실패 시 대체 계산 |
| `src/components/MoodIndex.tsx` | 좌측 목차 레일 |
| `src/components/CourseTrack.tsx` | 우측 코스 트랙 |

**고친다**

| 파일 | 무엇을 |
| --- | --- |
| `src/types.ts` | `CultureEvent` → `Spot`, `kind` · `moods` 추가, 날짜를 선택으로 |
| `src/data/events.ts` · `events.en.ts` | 타입명 교체, 43개에 `kind` · `moods` 채우기 |
| `src/hooks/useItinerary.ts` | `reorder` · `clear` 추가 |
| `src/components/AbstractMap.tsx` | 마커 4상태, 무드 필터, 경로선 |
| `src/pages/ExplorePage.tsx` | 3단 레이아웃과 배선 |
| `src/styles.css` | 토큰과 새 컴포넌트 스타일 |
| `index.html` | Sora · Inter 로드 |
| `src/components/EventCard.tsx` · `Poster.tsx` · `MiniMap.tsx` · `src/data/mapMarkers.ts` | 타입명 교체만 |

---

### Task 1: `CultureEvent`를 `Spot`으로 바꾼다

서점과 빵집이 `CultureEvent`에 담기게 되므로 이름을 먼저 정리한다. 기계적 치환이고 타입 검사기가 누락을 잡는다.

**Files:**
- Modify: `src/types.ts`, `src/data/events.ts`, `src/data/mapMarkers.ts`, `src/components/AbstractMap.tsx`, `src/components/EventCard.tsx`, `src/components/MiniMap.tsx`, `src/components/Poster.tsx`, `src/pages/ExplorePage.tsx`

**Interfaces:**
- Consumes: 없음
- Produces: `Spot` — 이후 모든 태스크가 쓰는 타입 이름

- [ ] **Step 1: 치환 전 참조 수를 센다**

```bash
grep -rc "CultureEvent" src/ | grep -v ":0"
```

기록해 둔다. 치환 후 0이 되어야 한다.

- [ ] **Step 2: 전 파일 치환**

```bash
grep -rl "CultureEvent" src/ | xargs sed -i '' 's/CultureEvent/Spot/g'
```

- [ ] **Step 3: 남은 참조가 없는지 확인**

```bash
grep -rn "CultureEvent" src/ ; echo "exit=$?"
```

Expected: 출력 없음, `exit=1`

- [ ] **Step 4: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 5: 커밋**

```bash
git add src/
git commit -m "refactor: rename CultureEvent to Spot"
```

---

### Task 2: `Spot`을 넓히고 무드를 정의한다

**Files:**
- Create: `src/data/moods.ts`
- Modify: `src/types.ts:41-75` (`Spot` 인터페이스), `src/data/events.ts`

**Interfaces:**
- Consumes: `Spot` (Task 1)
- Produces:
  - `type MoodId = "sound-at-night" | "strange-by-day" | "crowded-day" | "wordless-hours" | "two-stops-for-bread" | "dusty-things" | "low-sun-street"`
  - `interface Mood { id: MoodId; label: string; subtitle: string }`
  - `const MOODS: Mood[]`
  - `Spot`에 `kind: "place" | "event"`, `moods: MoodId[]`, `startDate?: string`, `endDate?: string`

- [ ] **Step 1: `src/data/moods.ts`를 만든다**

```ts
export type MoodId =
  | "sound-at-night"
  | "strange-by-day"
  | "crowded-day"
  | "wordless-hours"
  | "two-stops-for-bread"
  | "dusty-things"
  | "low-sun-street";

export interface Mood {
  id: MoodId;
  label: string;
  subtitle: string;
}

export const MOODS: Mood[] = [
  { id: "sound-at-night", label: "소리에 잠기는 밤", subtitle: "공연·리스닝바" },
  { id: "strange-by-day", label: "낯선 것과 마주 서는 낮", subtitle: "전시" },
  { id: "crowded-day", label: "사람 많은 게 좋은 날", subtitle: "축제·마켓" },
  { id: "wordless-hours", label: "아무 말 없이 오래", subtitle: "카페·바" },
  { id: "two-stops-for-bread", label: "빵 하나에 두 정거장", subtitle: "빵집" },
  { id: "dusty-things", label: "먼지 앉은 것들 사이", subtitle: "음반·헌책" },
  { id: "low-sun-street", label: "해가 낮게 드는 길", subtitle: "산책" },
];
```

- [ ] **Step 2: `src/types.ts`의 `Spot`을 넓힌다**

`category` 아래에 두 필드를 더한다.

```ts
  kind: "place" | "event";
  moods: MoodId[];
```

**`startDate`와 `endDate`는 필수로 둔다.** 선택으로 바꾸면 9개 파일 37곳이 깨진다 — `AbstractMap` · `ChatWidget` · `EventCard` · `ArchivePage` · `EventDetailPage` · `ExplorePage` · `HomePage` · `SavedPage`, 그리고 `events.ts`의 날짜 헬퍼가 전부 `.startDate`를 non-null로 읽는다.

지금 43개는 `문화공간` 4곳까지 전부 날짜를 갖고 있어 선택으로 만들 이유가 없다. 날짜 없는 항목은 수집한 19곳과 함께 들어오며, 그때 "날짜 없는 장소를 어떻게 정렬하고 무엇으로 표기할지"라는 실제 요구사항을 갖고 9개 파일을 고치는 것이 맞다. 그 작업은 병합 계획에 속한다.

이 계획의 어떤 태스크도 선택적 날짜를 필요로 하지 않는다. Task 9가 쓰는 `daysUntilEnd`는 시그니처가 `string | undefined`라 필수 필드를 받아도 그대로 동작한다.

파일 맨 위에 임포트를 더한다.

```ts
import type { MoodId } from "./data/moods";
```

- [ ] **Step 3: 43개 항목에 `kind`와 `moods`를 채운다**

`src/data/events.ts`에서 카테고리별로 채운다. 아래 매핑을 쓴다.

| `category` | `kind` | `moods` |
| --- | --- | --- |
| `음악` | `"event"` | `["sound-at-night"]` |
| `전시` | `"event"` | `["strange-by-day"]` |
| `축제` | `"event"` | `["crowded-day"]` |
| `문화공간` | `"place"` | `["wordless-hours"]` |

`문화공간` 4곳은 기본값이 `wordless-hours`다. 실제로 무엇인지 확인해 필요하면 손으로 고친다 — 서점이면 `dusty-things`, 산책로면 `low-sun-street`가 맞다.

기계적 부분은 스크립트로 처리한다.

```bash
python3 - <<'PY'
import re
p = "src/data/events.ts"
s = open(p, encoding="utf-8").read()
M = {
    "음악":     ('"event"', '["sound-at-night"]'),
    "전시":     ('"event"', '["strange-by-day"]'),
    "축제":     ('"event"', '["crowded-day"]'),
    "문화공간": ('"place"', '["wordless-hours"]'),
}
def sub(m):
    kind, moods = M[m.group(1)]
    return f'category: "{m.group(1)}",\n    kind: {kind},\n    moods: {moods},'
s, n = re.subn(r'category: "([^"]+)",', sub, s)
open(p, "w", encoding="utf-8").write(s)
print("patched", n)
PY
```

Expected: `patched 43`

- [ ] **Step 4: 빌드로 검증한다**

Run: `npm run build`
Expected: 통과. 실패하면 `moods` 임포트 누락이나 채우지 못한 항목이 있다는 뜻이다.

- [ ] **Step 5: `문화공간` 4곳을 눈으로 확인한다**

```bash
grep -B6 'kind: "place"' src/data/events.ts | grep -E 'venue|title|moods'
```

서점·음반가게면 `moods`를 `["dusty-things"]`로, 산책로면 `["low-sun-street"]`로 고친다.

- [ ] **Step 6: 커밋**

```bash
git add src/types.ts src/data/moods.ts src/data/events.ts
git commit -m "feat: add kind and moods to Spot, define seven moods"
```

---

### Task 3: 코스 순수 로직과 테스트

**Files:**
- Create: `src/lib/course.ts`, `src/lib/course.test.ts`
- Modify: `package.json`

**Interfaces:**
- Consumes: `Spot` (Task 1)
- Produces:
  - `serializeCourse(ids: string[]): string`
  - `parseCourse(param: string | null, known: Set<string>): string[]`
  - `reorder<T>(list: T[], from: number, to: number): T[]`
  - `haversineMeters(a: LatLng, b: LatLng): number` where `interface LatLng { latitude: number; longitude: number }`
  - `walkSeconds(meters: number): number`
  - `dwellMinutes(kind: Spot["kind"]): number`
  - `courseTotalMinutes(kinds: Array<Spot["kind"]>, legSeconds: number[]): number`
  - `daysUntilEnd(endDate: string | undefined, today: Date): number | undefined`

- [ ] **Step 1: vitest를 넣는다**

```bash
npm install -D vitest
npm pkg set scripts.test="vitest run"
```

- [ ] **Step 2: 실패하는 테스트를 쓴다**

`src/lib/course.test.ts`

```ts
import { describe, expect, it } from "vitest";
import {
  courseTotalMinutes,
  daysUntilEnd,
  dwellMinutes,
  haversineMeters,
  parseCourse,
  reorder,
  serializeCourse,
  walkSeconds,
} from "./course";

describe("URL 직렬화", () => {
  it("왕복하면 같은 배열이다", () => {
    const ids = ["a", "b", "c"];
    const known = new Set(ids);
    expect(parseCourse(serializeCourse(ids), known)).toEqual(ids);
  });

  it("모르는 id는 건너뛴다", () => {
    expect(parseCourse("a,zzz,b", new Set(["a", "b"]))).toEqual(["a", "b"]);
  });

  it("중복은 첫 번째만 남긴다", () => {
    expect(parseCourse("a,b,a", new Set(["a", "b"]))).toEqual(["a", "b"]);
  });

  it("빈 값과 null은 빈 배열이다", () => {
    expect(parseCourse(null, new Set(["a"]))).toEqual([]);
    expect(parseCourse("", new Set(["a"]))).toEqual([]);
  });
});

describe("reorder", () => {
  it("앞에서 뒤로 옮긴다", () => {
    expect(reorder(["a", "b", "c"], 0, 2)).toEqual(["b", "c", "a"]);
  });

  it("뒤에서 앞으로 옮긴다", () => {
    expect(reorder(["a", "b", "c"], 2, 0)).toEqual(["c", "a", "b"]);
  });

  it("제자리로 옮기면 그대로다", () => {
    expect(reorder(["a", "b", "c"], 1, 1)).toEqual(["a", "b", "c"]);
  });

  it("범위 밖 인덱스는 원본을 돌려준다", () => {
    expect(reorder(["a", "b"], 5, 0)).toEqual(["a", "b"]);
    expect(reorder(["a", "b"], 0, 9)).toEqual(["a", "b"]);
  });

  it("원본을 바꾸지 않는다", () => {
    const list = ["a", "b", "c"];
    reorder(list, 0, 2);
    expect(list).toEqual(["a", "b", "c"]);
  });
});

describe("직선거리 대체 계산", () => {
  it("신촌 두 지점이 300m 부근이다", () => {
    const m = haversineMeters(
      { latitude: 37.5573, longitude: 126.9366 },
      { latitude: 37.5559, longitude: 126.9395 },
    );
    expect(m).toBeGreaterThan(200);
    expect(m).toBeLessThan(500);
  });

  it("같은 지점은 0m다", () => {
    const p = { latitude: 37.5, longitude: 127 };
    expect(haversineMeters(p, p)).toBeCloseTo(0, 5);
  });

  it("시속 4km로 환산한다", () => {
    expect(walkSeconds(1000)).toBeCloseTo(900, 0);
  });
});

describe("체류 시간 합산", () => {
  it("장소는 20분, 행사는 60분이다", () => {
    expect(dwellMinutes("place")).toBe(20);
    expect(dwellMinutes("event")).toBe(60);
  });

  it("도보 시간과 체류 시간을 더한다", () => {
    // 장소 3곳(60분) + 구간 6분 · 7분(780초)
    expect(courseTotalMinutes(["place", "place", "place"], [360, 420])).toBe(73);
  });

  it("빈 코스는 0분이다", () => {
    expect(courseTotalMinutes([], [])).toBe(0);
  });
});

describe("종료 임박", () => {
  const today = new Date("2026-08-05T00:00:00Z");

  it("사흘 뒤 끝나면 3을 준다", () => {
    expect(daysUntilEnd("2026-08-08", today)).toBe(3);
  });

  it("상설 장소는 undefined다", () => {
    expect(daysUntilEnd(undefined, today)).toBeUndefined();
  });

  it("이미 끝났으면 음수다", () => {
    expect(daysUntilEnd("2026-08-01", today)).toBe(-4);
  });
});
```

- [ ] **Step 3: 테스트를 돌려 실패를 확인한다**

Run: `npx vitest run src/lib/course.test.ts`
Expected: FAIL — `Failed to resolve import "./course"`

- [ ] **Step 4: `src/lib/course.ts`를 쓴다**

```ts
import type { Spot } from "../types";

export interface LatLng {
  latitude: number;
  longitude: number;
}

const WALK_METERS_PER_SECOND = 4000 / 3600;

export function serializeCourse(ids: string[]): string {
  return ids.join(",");
}

export function parseCourse(param: string | null, known: Set<string>): string[] {
  if (!param) return [];
  const seen = new Set<string>();
  return param
    .split(",")
    .map((id) => id.trim())
    .filter((id) => {
      if (!known.has(id) || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

export function reorder<T>(list: T[], from: number, to: number): T[] {
  if (
    from < 0 ||
    to < 0 ||
    from >= list.length ||
    to >= list.length ||
    from === to
  ) {
    return list.slice();
  }
  const next = list.slice();
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

export function haversineMeters(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.latitude - a.latitude);
  const dLng = toRad(b.longitude - a.longitude);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.latitude)) *
      Math.cos(toRad(b.latitude)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

export function walkSeconds(meters: number): number {
  return meters / WALK_METERS_PER_SECOND;
}

export function dwellMinutes(kind: Spot["kind"]): number {
  return kind === "place" ? 20 : 60;
}

export function courseTotalMinutes(
  kinds: Array<Spot["kind"]>,
  legSeconds: number[],
): number {
  const dwell = kinds.reduce((sum, kind) => sum + dwellMinutes(kind), 0);
  const walk = legSeconds.reduce((sum, s) => sum + s, 0) / 60;
  return Math.round(dwell + walk);
}

const DAY_MS = 24 * 60 * 60 * 1000;

export function daysUntilEnd(
  endDate: string | undefined,
  today: Date,
): number | undefined {
  if (!endDate) return undefined;
  const end = Date.parse(`${endDate}T00:00:00Z`);
  if (Number.isNaN(end)) return undefined;
  const start = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
  );
  return Math.round((end - start) / DAY_MS);
}
```

- [ ] **Step 5: 테스트를 돌려 통과를 확인한다**

Run: `npx vitest run src/lib/course.test.ts`
Expected: PASS — 18 tests

- [ ] **Step 6: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 7: 커밋**

```bash
git add package.json package-lock.json src/lib/course.ts src/lib/course.test.ts
git commit -m "feat: add course logic for ordering, sharing and timing"
```

---

### Task 4: `useItinerary`에 재정렬과 비우기를 더한다

**Files:**
- Modify: `src/hooks/useItinerary.ts:41-58`

**Interfaces:**
- Consumes: `reorder` (Task 3)
- Produces: `useItinerary()`가 `{ itinerary, isPlanned, toggleItinerary, reorderItinerary, clearItinerary, setItinerary }`를 돌려준다
  - `reorderItinerary(from: number, to: number): void`
  - `clearItinerary(): void`
  - `setItinerary(ids: string[]): void` — Task 8의 순서 최적화와 Task 11의 링크 복원이 쓴다

- [ ] **Step 1: 훅을 고친다**

`src/hooks/useItinerary.ts`의 `useItinerary` 함수를 아래로 바꾸고, 파일 위에 임포트를 더한다.

```ts
import { reorder } from "../lib/course";
```

```ts
export function useItinerary() {
  const itinerary = useSyncExternalStore(subscribe, getSnapshot, () => []);

  const toggleItinerary = useCallback((spotId: string) => {
    const current = getSnapshot();
    writeItinerary(
      current.includes(spotId)
        ? current.filter((id) => id !== spotId)
        : [...current, spotId],
    );
  }, []);

  const reorderItinerary = useCallback((from: number, to: number) => {
    writeItinerary(reorder(getSnapshot(), from, to));
  }, []);

  const clearItinerary = useCallback(() => {
    writeItinerary([]);
  }, []);

  const setItinerary = useCallback((ids: string[]) => {
    writeItinerary(ids);
  }, []);

  return {
    itinerary,
    isPlanned: (spotId: string) => itinerary.includes(spotId),
    toggleItinerary,
    reorderItinerary,
    clearItinerary,
    setItinerary,
  };
}
```

- [ ] **Step 2: 저장 형태가 그대로인지 확인한다**

`writeItinerary`는 여전히 `string[]`을 넣는다. 기존 사용자의 `around:itinerary` 값이 그대로 읽힌다. 코드에서 확인한다.

```bash
grep -n "JSON.stringify\|JSON.parse" src/hooks/useItinerary.ts
```

Expected: `stringify(ids)`와 `parse(stored) as string[]` 두 줄만 나온다

- [ ] **Step 3: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 4: 커밋**

```bash
git add src/hooks/useItinerary.ts
git commit -m "feat: add reorder, clear and set to useItinerary"
```

---

### Task 5: 시각 언어 토큰을 심는다

이후 UI 태스크가 전부 이 토큰을 쓴다. 기존 화면이 깨지지 않도록 **기존 토큰 이름은 남기고** 새 토큰을 더한다. 기존 5개 화면의 재도색은 별도 계획이다.

**Files:**
- Modify: `index.html:16-20`, `src/styles.css:1-21`

**Interfaces:**
- Consumes: 없음
- Produces: CSS 변수 `--font-display` · `--font-body` · `--muted` · `--faint` · `--rule` · `--ease-gesso` · `--fast`

- [ ] **Step 1: Sora와 Inter를 로드한다**

`index.html`의 Pretendard `<link>` 바로 아래에 더한다.

```html
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
    />
```

- [ ] **Step 2: `:root`에 토큰을 더한다**

`src/styles.css`의 `:root` 블록 안, `--header-height` 줄 위에 더한다.

```css
  --font-display: "Sora", "Pretendard Variable", Pretendard,
    "Apple SD Gothic Neo", sans-serif;
  --font-body: "Inter", "Pretendard Variable", Pretendard,
    "Apple SD Gothic Neo", sans-serif;
  --muted: #5a5a5a;
  --faint: #9c9b96;
  --rule: rgba(17, 17, 15, 0.1);
  --rule-soft: rgba(17, 17, 15, 0.055);
  --ease-gesso: cubic-bezier(0.22, 1, 0.36, 1);
  --fast: 180ms;
```

- [ ] **Step 3: 메타 레이블 유틸리티를 더한다**

`src/styles.css` 맨 아래에 더한다.

```css
/* 메타 레이블 — 라틴은 대문자 0.18em, 한글은 0.14em */
.meta-latin {
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
}

.meta-ko {
  font-size: 11px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.14em;
  color: var(--muted);
}

/* 숫자는 디스플레이 서체로 */
.numeral {
  font-family: var(--font-display);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}
```

- [ ] **Step 4: 브라우저에서 Sora가 실제로 걸리는지 확인한다**

Run: `npm run dev`

브라우저에서 <http://localhost:5173> 을 열고 개발자 도구 콘솔에 붙여넣는다.

```js
document.fonts.check('700 16px Sora')
```

Expected: `true`

- [ ] **Step 5: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 6: 커밋**

```bash
git add index.html src/styles.css
git commit -m "feat: add typography and motion tokens"
```

---

### Task 6: 목차 레일

**Files:**
- Create: `src/components/MoodIndex.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `MOODS` · `MoodId` (Task 2), `Spot` (Task 1)
- Produces: `<MoodIndex spots={Spot[]} selected={MoodId} onSelect={(id: MoodId) => void} />`

- [ ] **Step 1: 컴포넌트를 만든다**

`src/components/MoodIndex.tsx`

```tsx
import { MOODS, type MoodId } from "../data/moods";
import type { Spot } from "../types";

interface MoodIndexProps {
  spots: Spot[];
  selected: MoodId;
  onSelect: (id: MoodId) => void;
}

export function MoodIndex({ spots, selected, onSelect }: MoodIndexProps) {
  const counts = new Map<MoodId, number>();
  spots.forEach((spot) => {
    spot.moods.forEach((mood) => {
      counts.set(mood, (counts.get(mood) ?? 0) + 1);
    });
  });

  return (
    <nav className="mood-index" aria-label="무드">
      <p className="meta-ko mood-index__head">지금 서울</p>
      <ul>
        {MOODS.map((mood) => {
          const count = counts.get(mood.id) ?? 0;
          const isEmpty = count === 0;
          return (
            <li key={mood.id}>
              <button
                type="button"
                className={`mood-row${
                  mood.id === selected ? " is-selected" : ""
                }${isEmpty ? " is-empty" : ""}`}
                onClick={() => onSelect(mood.id)}
                disabled={isEmpty}
                aria-pressed={mood.id === selected}
              >
                <span className="mood-row__label">{mood.label}</span>
                <span className="mood-row__lead" aria-hidden="true" />
                <span className="mood-row__sub">{mood.subtitle}</span>
                <span className="mood-row__count numeral">
                  {isEmpty ? "—" : String(count).padStart(2, "0")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
```

- [ ] **Step 2: 스타일을 더한다**

`src/styles.css` 맨 아래에 더한다.

```css
.mood-index {
  border-right: 1px solid var(--rule);
  padding: 26px 0 16px;
}

.mood-index__head {
  padding: 0 22px 18px;
}

.mood-index ul {
  margin: 0;
  padding: 0 10px;
  list-style: none;
}

.mood-row {
  display: flex;
  align-items: baseline;
  gap: 10px;
  width: 100%;
  padding: 13px 12px;
  border: 0;
  border-radius: var(--radius-card);
  color: var(--black);
  background: transparent;
  text-align: left;
  cursor: pointer;
  transition: background var(--fast) var(--ease-gesso);
}

.mood-row__label {
  font-size: 15px;
  letter-spacing: -0.005em;
  white-space: nowrap;
}

.mood-row__lead {
  flex: 1;
  border-bottom: 1px dotted var(--rule);
  transform: translateY(-3px);
}

.mood-row__sub {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.14em;
  color: var(--muted);
  white-space: nowrap;
}

.mood-row__count {
  font-size: 15px;
}

.mood-row.is-selected {
  color: var(--paper);
  background: var(--black);
}

.mood-row.is-selected .mood-row__sub {
  color: rgba(241, 240, 236, 0.6);
}

.mood-row.is-selected .mood-row__lead {
  border-bottom-color: rgba(241, 240, 236, 0.35);
}

.mood-row.is-empty {
  color: var(--faint);
  cursor: default;
}

.mood-row.is-empty .mood-row__sub {
  color: var(--faint);
}

.mood-row:focus-visible {
  outline: 2px solid var(--black);
  outline-offset: -2px;
}
```

- [ ] **Step 3: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 4: 커밋**

```bash
git add src/components/MoodIndex.tsx src/styles.css
git commit -m "feat: add mood index rail"
```

---

### Task 7: 지도 마커 4상태와 무드 필터

**Files:**
- Modify: `src/components/AbstractMap.tsx`, `src/styles.css:969-1024`

**Interfaces:**
- Consumes: `MoodId` (Task 2)
- Produces: `AbstractMapProps`에 `activeMood: MoodId` · `course: string[]` 추가. `events` prop 이름은 `spots`로 바꾼다

> **주의** — Task 1의 치환은 타입 이름만 바꿨다. `RenderCluster`와 `MarkerGroup`의 **필드 이름은 여전히 `events`다.** 아래 코드에서 `cluster.events`를 쓰는 이유다. 필드까지 바꾸려 들지 말 것.

- [ ] **Step 1: props를 넓힌다**

`AbstractMapProps`를 아래로 바꾼다.

```ts
interface AbstractMapProps {
  spots: Spot[];
  activeMood: MoodId;
  course: string[];
  selectedId?: string;
  hoveredId?: string;
  onSelect: (spotId: string) => void;
  onHover?: (spotId?: string) => void;
  userLocation?: UserLocation;
  radiusKm?: number;
  onViewportChange?: (bounds: MapBounds) => void;
}
```

그리고 `AbstractMap`과 `ClusterLayer`의 **prop 이름만** `events` → `spots`로 바꾼다. `RenderCluster.events`와 `MarkerGroup.events` 필드는 건드리지 않는다. 바꿀 곳을 먼저 확인한다.

```bash
grep -n "events={\|events,\|events\.\|events:" src/components/AbstractMap.tsx
```

`ClusterLayer`에 `activeMood`와 `course`를 내려보내도록 `ClusterLayerProps`에도 두 필드를 더한다.

```ts
  activeMood: MoodId;
  course: string[];
```

파일 위에 임포트를 더한다.

```ts
import type { MoodId } from "../data/moods";
```

- [ ] **Step 2: 마커를 4상태로 바꾼다**

`ClusterLayer` 안의 `divIcon` 생성 블록을 아래로 바꾼다. 기존 `markerLabel` · `markerSize` 계산을 대체한다.

**클러스터를 원소 하나로 판정하면 안 된다.** 마커는 줌마다 46px 근접도로 여러 장소를 묶는다. 기존 코드가 `isSelected`와 `isHovered`를 `cluster.events.some(...)`로 판정하는 것과 같은 이유로, 무드와 코스도 구성원 전체를 봐야 한다. 세 곳이 뭉친 마커에서 두 번째만 코스에 담겨 있어도 그 마커는 코스 마커여야 한다.

우선순위는 **코스 > 무드 안 > 무드 밖**이다. 번호는 구성원 중 가장 이른 방문 순서를 쓴다.

```tsx
const courseIndices = cluster.events
  .map((spot) => course.indexOf(spot.id))
  .filter((index) => index >= 0);
const courseIndex = courseIndices.length
  ? Math.min(...courseIndices)
  : -1;
const inCourse = courseIndex >= 0;
const inMood = cluster.events.some((spot) =>
  spot.moods.includes(activeMood),
);

const state = inCourse
  ? "in-course"
  : inMood
    ? "available"
    : "out-of-mood";

const markerSize = inCourse ? 32 : inMood ? 11 : 5;
const markerLabel = inCourse ? String(courseIndex + 1).padStart(2, "0") : "";

const icon = divIcon({
  className: `culture-marker is-${state}${
    isSelected ? " is-selected" : ""
  }${isHovered ? " is-hovered" : ""}`,
  html: `<span aria-hidden="true">${markerLabel}</span><span class="marker-a11y">${escapeHtml(
    markerA11yLabel,
  )}</span>`,
  iconAnchor: [markerSize / 2, markerSize / 2],
  iconSize: [markerSize, markerSize],
});
```

`isCluster` · `markerTitle` · `markerA11yLabel` 계산과 `<Marker>`의 `eventHandlers` · `<Tooltip>` 은 그대로 둔다. 클러스터를 누르면 구성원 목록이 열리는 동작(`onOpenCluster`)이 사라지면 여러 장소가 겹친 마커를 열 수 없다. `is-cluster` 클래스만 더는 쓰지 않는다 — 새 마커 체계는 형태가 아니라 상태로 구분한다.

무드 밖 마커는 `pointer-events: none`이므로 클릭이 지도로 통과한다. 이는 의도된 동작이다.

- [ ] **Step 3: 마커 스타일을 4상태로 다시 쓴다**

`src/styles.css`의 `.culture-marker` 블록(약 969행부터 `.culture-marker.is-cluster`까지)을 아래로 바꾼다.

```css
.culture-marker {
  display: grid !important;
  place-items: center;
  border-radius: 9999px;
  box-shadow: none;
  cursor: pointer;
  transition:
    transform var(--fast) var(--ease-gesso),
    background var(--fast) var(--ease-gesso);
}

.culture-marker.is-out-of-mood {
  border: 0;
  background: rgba(17, 17, 15, 0.26);
  cursor: default;
  pointer-events: none;
}

.culture-marker.is-available {
  border: 1.5px solid var(--black);
  background: var(--white);
}

.culture-marker.is-in-course {
  border: 0;
  color: var(--paper);
  background: var(--black);
}

/*
  숫자는 자식 span에 있고, 기존 `.culture-marker span`이 8px을 직접 잡는다.
  상속은 요소 자신에게 매칭되는 규칙이 없을 때만 적용되므로 부모에 적는 크기는
  무효가 된다. 8px은 34px 마커에 `01+3` 같은 긴 라벨을 넣던 시절 값이다.
*/
.culture-marker.is-in-course span {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
}

.culture-marker.is-available:hover,
.culture-marker.is-in-course:hover,
.culture-marker.is-available.is-hovered,
.culture-marker.is-in-course.is-hovered {
  transform: scale(1.08);
}

.culture-marker.is-selected::after {
  position: absolute;
  inset: -7px;
  border: 1px solid var(--black);
  border-radius: 9999px;
  content: "";
}
```

- [ ] **Step 4: 빌드**

Run: `npm run build`
Expected: 통과. `ExplorePage`가 아직 옛 prop 이름을 쓰고 있으면 여기서 잡힌다 — Task 10에서 배선하므로 임시로 `spots={visibleEvents} activeMood="strange-by-day" course={[]}` 를 넘겨 통과시킨다.

- [ ] **Step 5: 커밋**

```bash
git add src/components/AbstractMap.tsx src/pages/ExplorePage.tsx src/styles.css
git commit -m "feat: give map markers four states driven by mood and course"
```

---

### Task 8: Directions 연동과 경로선

**Files:**
- Create: `src/lib/directions.ts`
- Modify: `src/components/AbstractMap.tsx`

**Interfaces:**
- Consumes: `haversineMeters` · `walkSeconds` · `LatLng` (Task 3)
- Produces:
  - `interface Leg { seconds: number; meters: number; estimated: boolean }`
  - `interface Route { legs: Leg[]; line: Array<[number, number]> }` — `line`은 `[lat, lng]` 순서로, react-leaflet `Polyline`에 그대로 넣는다
  - `fetchWalkingRoute(points: LatLng[]): Promise<Route>`
  - `fetchOptimalOrder(points: LatLng[]): Promise<number[]>` — 방문 순서 인덱스

- [ ] **Step 1: `src/lib/directions.ts`를 쓴다**

```ts
import { haversineMeters, walkSeconds, type LatLng } from "./course";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export interface Leg {
  seconds: number;
  meters: number;
  estimated: boolean;
}

export interface Route {
  legs: Leg[];
  line: Array<[number, number]>;
}

function coords(points: LatLng[]): string {
  return points.map((p) => `${p.longitude},${p.latitude}`).join(";");
}

function straightLineFallback(points: LatLng[]): Route {
  const legs: Leg[] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const meters = haversineMeters(points[i], points[i + 1]);
    legs.push({ meters, seconds: walkSeconds(meters), estimated: true });
  }
  return {
    legs,
    line: points.map((p) => [p.latitude, p.longitude]),
  };
}

export async function fetchWalkingRoute(points: LatLng[]): Promise<Route> {
  if (points.length < 2) return { legs: [], line: [] };
  if (!TOKEN) return straightLineFallback(points);

  try {
    const url =
      `https://api.mapbox.com/directions/v5/mapbox/walking/${coords(points)}` +
      `?access_token=${TOKEN}&geometries=geojson&overview=full`;
    const response = await fetch(url);
    if (!response.ok) return straightLineFallback(points);

    const data = await response.json();
    const route = data.routes?.[0];
    if (!route) return straightLineFallback(points);

    return {
      legs: route.legs.map((leg: { duration: number; distance: number }) => ({
        seconds: leg.duration,
        meters: leg.distance,
        estimated: false,
      })),
      line: route.geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng] as [number, number],
      ),
    };
  } catch {
    return straightLineFallback(points);
  }
}

export async function fetchOptimalOrder(points: LatLng[]): Promise<number[]> {
  const identity = points.map((_, i) => i);
  if (points.length < 3 || points.length > 12 || !TOKEN) return identity;

  try {
    const url =
      `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/${coords(points)}` +
      `?access_token=${TOKEN}&source=first&destination=last&roundtrip=false`;
    const response = await fetch(url);
    if (!response.ok) return identity;

    const data = await response.json();
    if (data.code !== "Ok" || !Array.isArray(data.waypoints)) return identity;

    const order = data.waypoints.map(
      (w: { waypoint_index: number }) => w.waypoint_index,
    );
    return order.length === points.length ? order : identity;
  } catch {
    return identity;
  }
}
```

- [ ] **Step 2: 지도에 경로선을 그린다**

`AbstractMap.tsx`에 `Polyline`을 임포트에 더한다.

```ts
import { Circle, CircleMarker, MapContainer, Marker, Polyline, TileLayer, Tooltip, ZoomControl, useMap, useMapEvents } from "react-leaflet";
```

`AbstractMapProps`에 한 줄 더한다.

```ts
  routeLine?: Array<[number, number]>;
```

`<ZoomControl position="bottomleft" />` 바로 위에 넣는다.

```tsx
{routeLine && routeLine.length > 1 && (
  <Polyline
    positions={routeLine}
    pathOptions={{ color: "#11110f", weight: 1.75, opacity: 1 }}
    interactive={false}
  />
)}
```

- [ ] **Step 3: 실제 응답으로 확인한다**

Run:

```bash
TOKEN=$(grep VITE_MAPBOX_TOKEN .env.local | cut -d= -f2)
curl -s "https://api.mapbox.com/directions/v5/mapbox/walking/126.9366,37.5573;126.9395,37.5559;126.9421,37.5588?access_token=$TOKEN&geometries=geojson&overview=full" \
  | python3 -c "import json,sys; r=json.load(sys.stdin)['routes'][0]; print([(round(l['duration']),round(l['distance'])) for l in r['legs']])"
```

Expected: `[(360, 467), (420, 583)]` 부근의 두 구간

- [ ] **Step 4: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 5: 커밋**

```bash
git add src/lib/directions.ts src/components/AbstractMap.tsx
git commit -m "feat: fetch walking legs and draw the course line"
```

---

### Task 9: 코스 트랙

**Files:**
- Create: `src/components/CourseTrack.tsx`
- Modify: `src/styles.css`

**Interfaces:**
- Consumes: `Leg` (Task 8), `courseTotalMinutes` · `serializeCourse` (Task 3), `Spot` (Task 1)
- Produces: `<CourseTrack spots={Spot[]} legs={Leg[]} onOptimise={() => void} onRemove={(id: string) => void} busy={boolean} />` — `spots`는 코스 순서대로 정렬된 상태로 받는다

- [ ] **Step 1: 컴포넌트를 만든다**

`src/components/CourseTrack.tsx`

```tsx
import { useState } from "react";
import {
  courseTotalMinutes,
  daysUntilEnd,
  serializeCourse,
} from "../lib/course";
import type { Leg } from "../lib/directions";
import type { Spot } from "../types";

interface CourseTrackProps {
  spots: Spot[];
  legs: Leg[];
  onOptimise: () => void;
  onRemove: (id: string) => void;
  busy?: boolean;
}

export function CourseTrack({
  spots,
  legs,
  onOptimise,
  onRemove,
  busy,
}: CourseTrackProps) {
  const [copied, setCopied] = useState(false);
  const total = courseTotalMinutes(
    spots.map((spot) => spot.kind),
    legs.map((leg) => leg.seconds),
  );

  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.pathname = "/course";
    url.search = `?s=${serializeCourse(spots.map((spot) => spot.id))}`;
    await navigator.clipboard.writeText(url.toString());
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  if (spots.length === 0) {
    return (
      <aside className="course-track" aria-label="내 코스">
        <div className="course-track__head">
          <span className="meta-latin">My course</span>
        </div>
        <p className="course-track__empty">
          지도에서 장소를 눌러 코스를 짜보세요.
        </p>
      </aside>
    );
  }

  return (
    <aside className="course-track" aria-label="내 코스">
      <div className="course-track__head">
        <span className="meta-latin">My course</span>
        <span className="numeral course-track__total">
          {String(spots.length).padStart(2, "0")} · {total}′
        </span>
      </div>

      <ol className="course-track__list">
        {spots.map((spot, index) => {
          const leg = legs[index];
          return (
            <li key={spot.id}>
              <div className="course-stop">
                <span className="numeral course-stop__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4>{spot.title}</h4>
                  <span className="meta-ko course-stop__sub">
                    {spot.region} · {spot.category}
                  </span>
                  {(() => {
                    const left = daysUntilEnd(spot.endDate, new Date());
                    if (left === undefined || left < 0 || left > 7) return null;
                    return (
                      <span className="course-stop__ending">
                        {left === 0 ? "오늘 종료" : `${left}일 뒤 종료`}
                      </span>
                    );
                  })()}
                </div>
                <button
                  type="button"
                  className="course-stop__remove"
                  onClick={() => onRemove(spot.id)}
                  aria-label={`${spot.title} 코스에서 빼기`}
                >
                  ×
                </button>
              </div>
              {leg && (
                <p className="meta-ko course-leg">
                  {leg.estimated ? "약 " : ""}도보 {Math.round(leg.seconds / 60)}
                  ′ · {Math.round(leg.meters)}m
                </p>
              )}
            </li>
          );
        })}
      </ol>

      <div className="course-track__actions">
        <button
          type="button"
          className="course-btn"
          onClick={onOptimise}
          disabled={busy || spots.length < 3}
        >
          순서 최적화
        </button>
        <button
          type="button"
          className="course-btn is-solid"
          onClick={copyLink}
        >
          {copied ? "복사됨" : "링크 복사"}
        </button>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: 스타일을 더한다**

`src/styles.css` 맨 아래에 더한다.

```css
.course-track {
  border-left: 1px solid var(--rule);
  padding: 26px 22px 18px;
}

.course-track__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--rule);
}

.course-track__total {
  font-size: 15px;
  color: var(--black);
}

.course-track__empty {
  margin: 18px 0 0;
  font-size: 13px;
  color: var(--muted);
}

.course-track__list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.course-stop {
  display: grid;
  grid-template-columns: 34px 1fr auto;
  gap: 14px;
  align-items: start;
  padding-top: 18px;
}

.course-stop__num {
  font-size: 26px;
  line-height: 1;
  letter-spacing: -0.03em;
}

.course-stop h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.005em;
}

.course-stop__sub {
  display: block;
  margin-top: 6px;
}

/* 화면에서 유일하게 색을 쓰는 곳 */
.course-stop__ending {
  display: inline-block;
  margin-top: 6px;
  padding: 2px 8px;
  border: 1px solid var(--signal);
  border-radius: 9999px;
  color: var(--signal);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.course-stop__remove {
  border: 0;
  padding: 0 2px;
  color: var(--muted);
  background: transparent;
  font-size: 15px;
  line-height: 1;
  cursor: pointer;
  transition: color var(--fast) var(--ease-gesso);
}

.course-stop__remove:hover {
  color: var(--black);
}

.course-leg {
  margin: 14px 0 0;
  padding-left: 48px;
  font-variant-numeric: tabular-nums;
}

.course-track__actions {
  display: flex;
  gap: 8px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--rule);
}

.course-btn {
  flex: 1;
  padding: 13px 10px;
  border: 1px solid var(--rule);
  border-radius: 9999px;
  color: var(--black);
  background: transparent;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.005em;
  cursor: pointer;
  transition: transform var(--fast) var(--ease-gesso);
}

.course-btn.is-solid {
  border-color: var(--black);
  color: var(--paper);
  background: var(--black);
}

.course-btn:disabled {
  color: var(--faint);
  cursor: default;
}

.course-btn:not(:disabled):active {
  transform: scale(0.98);
}
```

- [ ] **Step 3: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 4: 커밋**

```bash
git add src/components/CourseTrack.tsx src/styles.css
git commit -m "feat: add course track with legs, totals and share"
```

---

### Task 10: Explore를 3단으로 배선한다

**Files:**
- Modify: `src/pages/ExplorePage.tsx:358-370`, `src/styles.css`

**Interfaces:**
- Consumes: `MoodIndex` (Task 6), `CourseTrack` (Task 9), `fetchWalkingRoute` · `fetchOptimalOrder` (Task 8), `useItinerary` (Task 4)
- Produces: 없음 — 화면 조립

- [ ] **Step 1: 상태와 효과를 더한다**

`ExplorePage` 함수 안, 기존 상태 선언 옆에 더한다.

```tsx
const [activeMood, setActiveMood] = useState<MoodId>("strange-by-day");
const [route, setRoute] = useState<Route>({ legs: [], line: [] });
const [optimising, setOptimising] = useState(false);
const { itinerary, toggleItinerary, setItinerary } = useItinerary();

const courseSpots = itinerary
  .map((id) => events.find((spot) => spot.id === id))
  .filter((spot): spot is Spot => Boolean(spot));

useEffect(() => {
  if (courseSpots.length < 2) {
    setRoute({ legs: [], line: [] });
    return;
  }
  const points = courseSpots.map((spot) => ({
    latitude: spot.latitude,
    longitude: spot.longitude,
  }));
  const timer = window.setTimeout(() => {
    fetchWalkingRoute(points).then(setRoute);
  }, 300);
  return () => window.clearTimeout(timer);
}, [itinerary.join(",")]);

const handleOptimise = async () => {
  setOptimising(true);
  const order = await fetchOptimalOrder(
    courseSpots.map((spot) => ({
      latitude: spot.latitude,
      longitude: spot.longitude,
    })),
  );
  setItinerary(order.map((i) => courseSpots[i].id));
  setOptimising(false);
};
```

임포트를 더한다. `ExplorePage`는 지금 `filterEvents` 등 헬퍼만 가져오고 **원본 `events` 배열은 안 가져온다.** 그래서 `events`를 명시적으로 더해야 한다.

```tsx
import { useEffect } from "react";
import { MoodIndex } from "../components/MoodIndex";
import { CourseTrack } from "../components/CourseTrack";
import { fetchOptimalOrder, fetchWalkingRoute, type Route } from "../lib/directions";
import { useItinerary } from "../hooks/useItinerary";
import type { MoodId } from "../data/moods";
import type { Spot } from "../types";
```

그리고 기존 `../data/events` 임포트 블록에 `events`를 더한다.

```tsx
import {
  events,
  filterEvents,
  filterOptions,
  getDistanceKm,
  getRegions,
  regions,
} from "../data/events";
```

- [ ] **Step 2: 레이아웃을 3단으로 바꾼다**

`<div className="explore-layout">` 안, `<section className="explore-map-panel">` 앞에 목차를 넣고 지도 props를 갱신한다.

```tsx
<MoodIndex
  spots={events}
  selected={activeMood}
  onSelect={setActiveMood}
/>
<section className="explore-map-panel">
  <AbstractMap
    spots={visibleEvents}
    activeMood={activeMood}
    course={itinerary}
    routeLine={route.line}
    selectedId={selectedId}
    hoveredId={hoveredId}
    onSelect={toggleItinerary}
    onHover={setHoveredId}
    userLocation={userLocation}
    radiusKm={radiusKm}
    onViewportChange={handleViewportChange}
  />
```

기존 `explore-list-panel` 뒤에 트랙을 더한다.

```tsx
<CourseTrack
  spots={courseSpots}
  legs={route.legs}
  onOptimise={handleOptimise}
  onRemove={toggleItinerary}
  busy={optimising}
/>
```

- [ ] **Step 3: 3단 그리드와 반응형을 더한다**

`src/styles.css` 맨 아래에 더한다.

```css
@media (min-width: 761px) {
  .explore-layout {
    display: grid;
    grid-template-columns: 290px minmax(0, 1fr) 270px;
  }

  /* 지도는 둥근 카드 — 종이 바탕 위에 얹힌 면 */
  .explore-map-panel {
    padding: 10px;
    border-right: 0;
  }

  .explore-map-panel .abstract-map {
    border-radius: var(--radius-card);
    overflow: hidden;
  }
}

/* 760px는 기존 모바일 분기점이다 (styles.css:1984). 새 분기점을 만들지 않는다 */
@media (max-width: 760px) {
  .mood-index {
    border-right: 0;
    border-bottom: 1px solid var(--rule);
    padding: 16px 0 0;
    overflow-x: auto;
  }

  .mood-index__head {
    display: none;
  }

  .mood-index ul {
    display: flex;
  }

  .mood-row {
    border-bottom: 0;
    border-right: 1px solid var(--rule-soft);
    white-space: nowrap;
  }

  .mood-row__lead,
  .mood-row__sub {
    display: none;
  }

  .course-track {
    border-left: 0;
    border-top: 1px solid var(--rule);
  }
}
```

- [ ] **Step 4: 브라우저에서 확인한다**

Run: `npm run dev`

<http://localhost:5173/explore> 를 열고 확인한다.

1. 목차에서 「낯선 것과 마주 서는 낮」이 선택돼 있고 개수가 `17`이다
2. 「먼지 앉은 것들 사이」와 「해가 낮게 드는 길」은 흐리고 `—`이며 눌리지 않는다
3. 지도에서 흰 원을 누르면 검은 번호 마커 `01`이 된다
4. 두 곳을 담으면 지도에 검은 경로선이 그려지고 트랙에 「도보 N′ · Nm」이 뜬다
5. 세 곳을 담으면 「순서 최적화」가 눌린다
6. 「링크 복사」를 누르면 「복사됨」으로 바뀐다

- [ ] **Step 5: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 6: 커밋**

```bash
git add src/pages/ExplorePage.tsx src/styles.css
git commit -m "feat: wire explore into index, map and course track"
```

---

### Task 11: 공유 링크 복원

**Files:**
- Modify: `src/App.tsx`, `src/pages/ExplorePage.tsx`

**Interfaces:**
- Consumes: `parseCourse` (Task 3), `setItinerary` (Task 4)
- Produces: `/course?s=id1,id2,id3` 경로가 코스를 복원하고 Explore로 보낸다

- [ ] **Step 1: 라우트를 더한다**

`src/App.tsx`의 `<Routes>` 안에 더한다.

```tsx
<Route path="/course" element={<ExplorePage />} />
```

- [ ] **Step 2: Explore에서 쿼리를 읽어 복원한다**

`ExplorePage`는 이미 `useSearchParams`를 임포트하고 `searchParams` · `setSearchParams`를 48행에서 쓰고 있다. **다시 선언하지 말고 있는 것을 쓴다.**

기존 코드(215행 부근)가 `new URLSearchParams(searchParams)`로 사본을 만들어 쓰는 패턴을 따른다. `searchParams`를 직접 변형하면 안 된다.

`ExplorePage` 안에 더한다.

```tsx
useEffect(() => {
  const shared = searchParams.get("s");
  if (!shared) return;
  const known = new Set(events.map((spot) => spot.id));
  const restored = parseCourse(shared, known);
  if (restored.length > 0) {
    setItinerary(restored);
  }
  const next = new URLSearchParams(searchParams);
  next.delete("s");
  setSearchParams(next, { replace: true });
  // 마운트 시 한 번만. searchParams를 의존성에 넣으면 무한 루프가 된다
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

임포트를 더한다.

```tsx
import { parseCourse } from "../lib/course";
```

- [ ] **Step 3: 왕복을 확인한다**

Run: `npm run dev`

1. `/explore`에서 세 곳을 담고 「링크 복사」를 누른다
2. 브라우저 콘솔에서 `await navigator.clipboard.readText()` 로 값을 확인한다 — `/course?s=a,b,c` 꼴이어야 한다
3. 새 탭에서 그 주소를 연다
4. 코스 세 곳이 같은 순서로 복원되고, 주소창에서 `?s=`가 사라진다
5. 없는 id를 섞어 `/course?s=zzz,a,b` 를 열면 `a`, `b` 두 곳만 복원된다

- [ ] **Step 4: 테스트 전체를 돌린다**

Run: `npm test`
Expected: PASS — 18 tests

- [ ] **Step 5: 빌드**

Run: `npm run build`
Expected: 통과

- [ ] **Step 6: 커밋**

```bash
git add src/App.tsx src/pages/ExplorePage.tsx
git commit -m "feat: restore a shared course from the url"
```

---

## 이 계획을 끝내면 남는 것

- **별도 계획 A — 기존 5개 화면 재도색.** Home · 상세 · 찜 · 아카이브 · 404에 Task 5의 토큰을 적용하고, `box-shadow` 10곳 제거, radius 7 · 12 · 14 · 18px 정리, `--ease-out-soft` → `--ease-gesso` 교체
- **별도 계획 B — 19곳 병합.** `enriched.json`이 저장소에 들어온 뒤. 설명문 재작성과 출처 판단이 선행 조건이다
- 무드 `dusty-things` · `low-sun-street`는 데이터가 들어올 때까지 목차에 `—`로 남는다

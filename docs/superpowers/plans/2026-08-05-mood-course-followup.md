# 무드 코스 빌더 — 최종 리뷰 후속 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 최종 전체 리뷰가 남긴 네 건을 마무리해 브랜치를 병합 가능한 상태로 만든다.

**Architecture:** 앞선 11개 태스크가 만든 구조는 그대로 두고, 태스크 경계에서 끊긴 봉합선만 잇는다. 모바일 레이아웃, 지도와 필터의 관계, 링크 복원 시맨틱, 다국어 — 네 가지 모두 사용자 결정을 받았다.

**Tech Stack:** React 19 · TypeScript · Vite 6 · react-leaflet 5

## Global Constraints

- 색은 `#e61919` 하나뿐이며 코스 트랙의 종료 임박 배지 전용. 검정이 강조이고 화면당 채운 면 두 개까지
- radius — 면 `--radius-card: 16px`, 버튼·마커·배지 `9999px`, 레일과 헤어라인은 직선
- 브레이크포인트는 430 · 760/761 · 1100/1101px. 새 분기점을 만들지 않는다
- 한글 메타는 11px `0.14em` uppercase 없음 / 라틴 메타는 11px `0.18em` uppercase
- 마커 번호는 **방문 순서**를 뜻한다. 이 의미가 흔들리는 변경은 하지 않는다
- 각 태스크 끝에서 `npm run build`와 `npx vitest run` (18/18) 이 통과해야 한다

## 이 계획에서 제외한 것

최종 리뷰의 Minor 11건은 전부 이월한다 — 고아가 된 `@keyframes marker-pulse`, 키보드로 닿는 무드 밖 마커, 메모이즈 안 된 `courseSpots`, 안 쓰이는 `--font-body`, `.course-track` 오버플로, 클러스터 어포던스, 11px 탭 타겟, 복사 버튼 aria-live와 catch, `reorderItinerary` 미배선, 검정 면 3개, 토큰 램프 중복.

---

### Task 1: 코스 마커를 필터와 무관하게 항상 보이게

목차는 전체 43개로 세는데 지도는 `visibleEvents`만 받는다. 카테고리 필터를 켜면 코스에 담긴 장소가 지도에서 사라지면서 남은 마커 번호가 `01`·`03`처럼 끊긴다. 번호가 방문 순서를 뜻한다는 것이 이 재설계의 핵심이므로 끊기면 안 된다.

**Files:**
- Modify: `src/pages/ExplorePage.tsx`

**Interfaces:**
- Consumes: `visibleEvents`, `itinerary`, `events`
- Produces: 없음

- [ ] **Step 1: 지도에 넘길 배열을 합친다**

`courseSpots` 선언 아래에 더한다.

```tsx
// 코스에 담긴 곳은 필터와 무관하게 지도에 남는다.
// 사라지면 마커 번호가 끊겨 방문 순서를 읽을 수 없다.
const mapSpots = useMemo(() => {
  const seen = new Set(visibleEvents.map((spot) => spot.id));
  return [...visibleEvents, ...courseSpots.filter((spot) => !seen.has(spot.id))];
}, [visibleEvents, itinerary.join(",")]);
```

`useMemo`가 임포트에 없으면 더한다.

- [ ] **Step 2: 지도에 넘긴다**

`<AbstractMap spots={visibleEvents}` 를 `spots={mapSpots}` 로 바꾼다.

- [ ] **Step 3: 검증**

Run: `npm run build` · `npx vitest run`
Expected: 빌드 통과, 18/18

- [ ] **Step 4: 커밋**

```bash
git add src/pages/ExplorePage.tsx
git commit -m "fix: keep course spots on the map regardless of filters"
```

---

### Task 2: 공유 링크가 덮어쓰기 전에 확인받는다

`?s=` 링크를 열면 확인 없이 `setItinerary(restored)`로 기존 코스를 지운다. 코스가 비어 있을 때는 그냥 복원하고, 이미 있을 때만 묻는다.

**Files:**
- Modify: `src/pages/ExplorePage.tsx`, `src/i18n/language.ts`

**Interfaces:**
- Consumes: `parseCourse`, `setItinerary`, `copy`
- Produces: 없음

- [ ] **Step 1: 문구를 추가한다**

`src/i18n/language.ts`의 ko `explore` 블록에 더한다.

```ts
      sharedCourseConfirm:
        "공유된 코스를 여시면 지금 짜고 있는 코스가 사라집니다. 계속할까요?",
```

en `explore` 블록에도 같은 키로 더한다.

```ts
      sharedCourseConfirm:
        "Opening a shared course will replace the one you are building. Continue?",
```

- [ ] **Step 2: 복원 이펙트에 확인을 넣는다**

`ExplorePage.tsx`의 복원 이펙트에서 `setItinerary` 호출부를 바꾼다.

```tsx
    if (restored.length > 0) {
      // 짜던 코스가 있을 때만 묻는다. 비어 있으면 잃을 것이 없다.
      const hasCourse = itineraryRef.current.length > 0;
      if (!hasCourse || window.confirm(copy.explore.sharedCourseConfirm)) {
        setItinerary(restored);
      }
    }
```

`?s=` 를 주소창에서 지우는 부분은 그대로 둔다 — 취소했더라도 링크는 이미 소비됐다.

- [ ] **Step 3: 검증**

Run: `npm run build` · `npx vitest run`
Expected: 빌드 통과, 18/18

- [ ] **Step 4: 커밋**

```bash
git add src/pages/ExplorePage.tsx src/i18n/language.ts
git commit -m "fix: confirm before a shared link replaces a course in progress"
```

---

### Task 3: 새 UI 다국어

`MoodIndex`와 `CourseTrack`이 한국어 하드코딩이다. 앱에는 EN/KO 스위치가 있으므로 영어 사용자는 이 화면만 한국어로 본다.

무드 문구는 한국어의 장면 감각을 살려 지은 것이라 직역하지 않고 같은 결의 영어로 새로 쓴다.

**Files:**
- Modify: `src/i18n/language.ts`, `src/data/moods.ts`, `src/components/MoodIndex.tsx`, `src/components/CourseTrack.tsx`

**Interfaces:**
- Consumes: `useLanguage()` → `{ locale, copy }`
- Produces: `MOODS` 항목이 `label`/`subtitle` 대신 `labelKo`/`labelEn`/`subtitleKo`/`subtitleEn` 을 갖는다

- [ ] **Step 1: 무드 정의를 이중 언어로 바꾼다**

`src/data/moods.ts`의 `Mood` 인터페이스와 `MOODS` 를 바꾼다.

```ts
export interface Mood {
  id: MoodId;
  labelKo: string;
  labelEn: string;
  subtitleKo: string;
  subtitleEn: string;
}

export const MOODS: Mood[] = [
  {
    id: "sound-at-night",
    labelKo: "소리에 잠기는 밤",
    labelEn: "A night to sink into sound",
    subtitleKo: "공연·리스닝바",
    subtitleEn: "Live · listening bars",
  },
  {
    id: "strange-by-day",
    labelKo: "낯선 것과 마주 서는 낮",
    labelEn: "A day facing something strange",
    subtitleKo: "전시",
    subtitleEn: "Exhibitions",
  },
  {
    id: "crowded-day",
    labelKo: "사람 많은 게 좋은 날",
    labelEn: "A day for crowds",
    subtitleKo: "축제·마켓",
    subtitleEn: "Festivals · markets",
  },
  {
    id: "wordless-hours",
    labelKo: "아무 말 없이 오래",
    labelEn: "A long while without speaking",
    subtitleKo: "카페·바",
    subtitleEn: "Cafés · bars",
  },
  {
    id: "two-stops-for-bread",
    labelKo: "빵 하나에 두 정거장",
    labelEn: "Two stops for one loaf",
    subtitleKo: "빵집",
    subtitleEn: "Bakeries",
  },
  {
    id: "dusty-things",
    labelKo: "먼지 앉은 것들 사이",
    labelEn: "Among dusty things",
    subtitleKo: "음반·헌책",
    subtitleEn: "Records · used books",
  },
  {
    id: "low-sun-street",
    labelKo: "해가 낮게 드는 길",
    labelEn: "Streets where the sun sits low",
    subtitleKo: "산책",
    subtitleEn: "Walks",
  },
];
```

- [ ] **Step 2: 화면 문구를 i18n에 넣는다**

`src/i18n/language.ts`의 ko 블록에 새 섹션을 더한다.

```ts
    course: {
      indexHead: "지금 서울",
      moodNavLabel: "무드",
      trackLabel: "내 코스",
      trackTitle: "MY COURSE",
      empty: "지도에서 장소를 눌러 코스를 짜보세요.",
      optimise: "순서 최적화",
      copyLink: "링크 복사",
      copied: "복사됨",
      removeSuffix: "코스에서 빼기",
      walk: "도보",
      about: "약 ",
      endsToday: "오늘 종료",
      endsInDays: "일 뒤 종료",
    },
```

en 블록에도 같은 키로 더한다.

```ts
    course: {
      indexHead: "Seoul right now",
      moodNavLabel: "Moods",
      trackLabel: "My course",
      trackTitle: "MY COURSE",
      empty: "Tap a place on the map to start a course.",
      optimise: "Optimise order",
      copyLink: "Copy link",
      copied: "Copied",
      removeSuffix: "remove from course",
      walk: "Walk",
      about: "about ",
      endsToday: "Ends today",
      endsInDays: " days left",
    },
```

- [ ] **Step 3: `MoodIndex`를 배선한다**

`useLanguage`를 임포트하고 컴포넌트 안에서 꺼낸다.

```tsx
import { useLanguage } from "../i18n/language";
```

```tsx
  const { locale, copy } = useLanguage();
```

하드코딩 문구를 바꾼다.

- `aria-label="무드"` → `aria-label={copy.course.moodNavLabel}`
- `지금 서울` → `{copy.course.indexHead}`
- `{mood.label}` → `{locale === "ko" ? mood.labelKo : mood.labelEn}`
- `{mood.subtitle}` → `{locale === "ko" ? mood.subtitleKo : mood.subtitleEn}`

부제의 자간 클래스도 언어에 따라 바꾼다 — 한글은 `0.14em`, 라틴은 `0.18em` uppercase다. `.mood-row__sub` 는 한글 기준이므로 영어일 때 `meta-latin` 을 함께 준다.

```tsx
className={`mood-row__sub${locale === "ko" ? "" : " meta-latin"}`}
```

- [ ] **Step 4: `CourseTrack`을 배선한다**

같은 방식으로 `useLanguage`를 쓰고 하드코딩 문구를 바꾼다.

- `aria-label="내 코스"` → `{copy.course.trackLabel}` (두 분기 모두)
- `My course` → `{copy.course.trackTitle}`
- `지도에서 장소를 눌러 코스를 짜보세요.` → `{copy.course.empty}`
- `순서 최적화` → `{copy.course.optimise}`
- `{copied ? "복사됨" : "링크 복사"}` → `{copied ? copy.course.copied : copy.course.copyLink}`
- `aria-label={`${spot.title} 코스에서 빼기`}` → `` aria-label={`${spot.title} ${copy.course.removeSuffix}`} ``
- 구간 문구 `` {leg.estimated ? "약 " : ""}도보 {분}′ · {m}m `` → `` {leg.estimated ? copy.course.about : ""}{copy.course.walk} {분}′ · {m}m ``
- 배지 `` {left === 0 ? "오늘 종료" : `${left}일 뒤 종료`} `` → `` {left === 0 ? copy.course.endsToday : `${left}${copy.course.endsInDays}`} ``

정류 부제(`{spot.region} · {spot.category}`)는 데이터가 한국어뿐이므로 그대로 둔다.

- [ ] **Step 5: 검증**

Run: `npm run build` · `npx vitest run`
Expected: 빌드 통과, 18/18. 타입 검사기가 `mood.label` 잔존을 잡는다.

- [ ] **Step 6: 커밋**

```bash
git add src/i18n/language.ts src/data/moods.ts src/components/MoodIndex.tsx src/components/CourseTrack.tsx
git commit -m "feat: translate the mood index and course track"
```

---

### Task 4: 모바일에서 코스 트랙을 하단 시트로

모바일에서 `.explore-layout`은 블록 흐름이고 지도가 남은 뷰포트를 다 차지해 트랙이 화면 밖으로 밀린다. 스펙 §4.4가 지시한 대로 기존 `.mobile-panel-handle` 시트를 재사용해 목록과 코스를 탭으로 나눈다.

**Files:**
- Modify: `src/pages/ExplorePage.tsx`, `src/styles.css`, `src/i18n/language.ts`

**Interfaces:**
- Consumes: `panelSnap`, `CourseTrack`
- Produces: 없음

- [ ] **Step 1: 탭 문구를 추가한다**

ko `course` 블록에 더한다.

```ts
      tabList: "목록",
      tabCourse: "내 코스",
```

en `course` 블록에 더한다.

```ts
      tabList: "List",
      tabCourse: "My course",
```

- [ ] **Step 2: 시트 래퍼로 감싼다**

`ExplorePage.tsx`에서 `.explore-list-panel` 과 `<CourseTrack>` 을 하나의 래퍼로 묶는다. 데스크톱에서는 래퍼가 `display: contents` 라 그리드가 트랙을 3열째로 직접 본다.

탭 상태를 더한다.

```tsx
const [sheetTab, setSheetTab] = useState<"list" | "course">("list");
```

JSX를 이렇게 바꾼다 — 기존 `.explore-list-panel` 전체와 `<CourseTrack>` 을 `.explore-sheet` 안으로 옮긴다.

```tsx
<div className="explore-sheet">
  <div className="explore-sheet__tabs" role="tablist">
    <button
      type="button"
      role="tab"
      aria-selected={sheetTab === "list"}
      className={sheetTab === "list" ? "is-active" : ""}
      onClick={() => setSheetTab("list")}
    >
      {copy.course.tabList}
    </button>
    <button
      type="button"
      role="tab"
      aria-selected={sheetTab === "course"}
      className={sheetTab === "course" ? "is-active" : ""}
      onClick={() => setSheetTab("course")}
    >
      {copy.course.tabCourse}
      {itinerary.length > 0 && (
        <span className="numeral"> {String(itinerary.length).padStart(2, "0")}</span>
      )}
    </button>
  </div>

  <section
    className={`explore-list-panel is-${panelSnap}${
      sheetTab === "course" ? " is-hidden-tab" : ""
    }`}
    ...기존 속성 그대로
  >
    ...기존 내용 그대로
  </section>

  <div className={sheetTab === "list" ? "is-hidden-tab" : ""}>
    <CourseTrack
      spots={courseSpots}
      legs={route.legs}
      onOptimise={handleOptimise}
      onRemove={toggleItinerary}
      busy={optimising}
    />
  </div>
</div>
```

- [ ] **Step 3: 데스크톱에서 래퍼를 투명하게 만든다**

`src/styles.css`의 `@media (min-width: 1101px)` 블록 안에 더한다.

```css
  .explore-sheet {
    display: contents;
  }

  .explore-sheet__tabs {
    display: none;
  }

  /* 데스크톱에서는 탭이 없으므로 트랙 래퍼도 투명해야 그리드 3열이 된다 */
  .explore-sheet > div {
    display: contents;
  }

  .explore-sheet .is-hidden-tab {
    display: contents;
  }
```

- [ ] **Step 4: 모바일 시트를 만든다**

`@media (max-width: 1100px)` 블록 안에 더한다.

```css
  .explore-sheet {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 30;
    display: flex;
    flex-direction: column;
    height: min(62svh, 590px);
    border-top: 1px solid var(--black);
    background: var(--paper);
    transition: transform 240ms cubic-bezier(0.22, 0.8, 0.24, 1);
  }

  .explore-sheet__tabs {
    display: flex;
    flex: none;
    gap: 0;
    border-bottom: 1px solid var(--rule);
  }

  .explore-sheet__tabs button {
    flex: 1;
    padding: 12px 8px;
    border: 0;
    border-bottom: 2px solid transparent;
    color: var(--muted);
    background: transparent;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -0.005em;
    cursor: pointer;
  }

  .explore-sheet__tabs button.is-active {
    border-bottom-color: var(--black);
    color: var(--black);
  }

  .explore-sheet .is-hidden-tab {
    display: none;
  }

  .explore-sheet > div {
    min-height: 0;
    overflow-y: auto;
  }

  .explore-sheet .explore-list-panel {
    position: static;
    height: auto;
    min-height: 0;
    flex: 1;
    border-top: 0;
    transform: none;
  }

  .course-track {
    border-left: 0;
    border-top: 0;
  }
```

기존 `@media (max-width: 760px)` 안의 `.explore-list-panel` 절대 배치 규칙(`position: absolute` · `transform: translateY(...)` 세 스냅 상태)은 이제 래퍼가 대신하므로, 그 블록에서 `.explore-list-panel` 관련 규칙을 `.explore-sheet` 로 옮긴다. 스냅 클래스는 `.explore-sheet.is-collapsed` 처럼 래퍼에 붙이도록 `panelSnap` 클래스를 래퍼로 옮긴다.

- [ ] **Step 5: 브라우저에서 확인한다**

Run: `npm run dev`

개발자 도구에서 폭을 390px로 줄이고 확인한다.

1. 하단 시트에 「목록」·「내 코스」 두 탭이 보인다
2. 핸들을 끌면 시트가 세 단계로 접히고 펼쳐진다
3. 「내 코스」 탭을 누르면 트랙이 보이고, 코스가 비었으면 안내 문구가 보인다
4. 코스에 담으면 탭 이름 옆에 개수가 붙는다
5. 폭을 1200px로 늘리면 탭이 사라지고 3열로 돌아간다

- [ ] **Step 6: 검증**

Run: `npm run build` · `npx vitest run`
Expected: 빌드 통과, 18/18

- [ ] **Step 7: 커밋**

```bash
git add src/pages/ExplorePage.tsx src/styles.css src/i18n/language.ts
git commit -m "feat: put the course track in the mobile sheet beside the list"
```

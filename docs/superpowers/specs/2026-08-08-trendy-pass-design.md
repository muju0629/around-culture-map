# 트렌디 패스 — 전환·숫자·틴트·큐레이터·손맛

2026-08-08. "더 좋고 더 트렌디하게"에 대한 5갈래 실행. 원칙: 유행을 얹지 않고
기존 에디토리얼 정체성(종이+잉크, 룰선, 넘버링)을 깊게 판다. 새 의존성 0.

## 1. View Transitions — 카드 → 상세 연속 전환

- react-router 7의 `<Link viewTransition>` / `navigate(..., { viewTransition: true })` 사용.
- 카드의 포스터와 상세 페이지 포스터에 같은 `view-transition-name: poster-<id>`를 부여해
  공유 요소 모프. 이름은 스타일 prop으로 (동적 id).
- CSS: `::view-transition-old/new(root)` 크로스페이드 180ms, 포스터 모프는 기본 브라우저 보간.
- 미지원 브라우저·`prefers-reduced-motion`은 조용히 즉시 전환 (기능 저하 없음).

## 2. 살아있는 숫자 — 인트로 히어로의 감각을 확산

- 탐색 화면 `PLACES FOUND` 카운트가 필터·무드 변경으로 바뀔 때 이전 값 → 새 값으로
  ~400ms 카운트업/다운. `tabular-nums`는 이미 전역이라 자리 흔들림 없음.
- 무드 선택 시 선택된 무드 라벨이 한 번 스냅(짧은 fade+shift 재생). 한글이므로
  자간·대문자 트릭 금지 — opacity/translate만.
- `prefers-reduced-motion`: 둘 다 즉시 값 교체.

## 3. 무드 틴트 — 모노크롬 규율 안의 온도

- **색상환 도입 금지.** `--signal` 빨강이 화면의 유일한 색이라는 규칙 유지.
- 무드별로 종이색(`--paper` #f1f0ec)의 온도만 미세 편차 (`--mood-paper`):
  soundatnight #eaecf2(밤의 한기) · strangebyday #eef0ea(중성) · crowdedday #f6ece0(온기) ·
  wordlesshours #f2efe6(기본 근처) · twostopsforbread #f7f0dd(크림) ·
  dustythings #f1ecdd(바랜 종이) · lowsunstreet #f7eede(낮은 해).
  1차 값은 실기에서 안 보여 2배 강화 (2026-08-08).
- 적용 면: 탐색 화면의 크롬(무드 레일·시트·툴바 배경). Mapbox 타일은 건드리지 않는다
  (CSS filter 틴트는 탁해짐). 전환 400ms ease.

## 4. 큐레이터의 목소리 승격

- `curatorNote`는 이미 타입·데이터(8곳)·EventCard 렌더가 있다. 발명이 아니라 승격:
  - 상세 페이지 description 아래 풀쿼트로 (eyebrow "CURATOR'S NOTE" + 큰 인용 타이포).
  - 노트 없는 스팟은 섹션 자체가 안 뜬다.
- 나머지 스팟의 노트 집필은 사용자 몫 (직접 큐레이션 원칙 — 기계가 지어내지 않는다).
  빈 스팟 목록만 리포트로 남긴다.

## 5. 손맛 디테일

- `::selection` — 잉크 배경 + 종이 글자.
- 지도 위 커서 `crosshair` (탐색 감각). 커스텀 커서 이미지는 안 한다 (김믹 리스크).
- OG 메타 (`og:title/description/image`, twitter card) + `public/brand/og.png` 1200×630
  정적 생성 (도트 그리드 + A + AROUND 워드마크, 헤드리스 크롬 스크린샷으로 1회 생성해 커밋).
- 404 페이지에 인트로의 도트 그리드 언어 재사용 — CSS `radial-gradient` 패턴 배경
  (캔버스 재사용은 YAGNI) + 디스플레이 서체 큰 404.

## 하지 않는 것

다크모드 전환 · 스크롤재킹 · 패럴랙스 · 3D · 새 의존성 · Mapbox 타일 틴트.

## 검증

- 카운트업 훅 로직 단위 테스트 1개 (타깃 값 도달·reduced-motion 즉시 교체).
- 나머지는 실브라우저 확인 (View Transition은 Chrome, 저하 경로는 기능 플래그 강제로).

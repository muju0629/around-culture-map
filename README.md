# AROUND

서울의 음악, 전시, 축제와 문화공간을 지도와 AI 큐레이터로 탐색하는
반응형 웹 프로토타입입니다.

## 주요 기능

- Leaflet과 OpenStreetMap 기반 행사 지도
- 날짜, 가격, 카테고리 필터
- 공식 출처가 확인된 행사만 추천하는 Groq 기반 AI 큐레이터
- 행사 상세 에디토리얼, 공식 이미지, 위치와 관람 정보
- localStorage 기반 찜 기능

## 실행

```bash
npm install
npm run dev
```

## 검증

```bash
npm run lint
npm run build
```

## 환경 변수

Vercel 또는 로컬 API 실행 환경에 다음 값을 설정해야 합니다.

```bash
GROQ_API_KEY=...
```

행사 데이터와 이미지는 프로젝트 내부에서 관리합니다. 지도는 OpenStreetMap
타일을 사용하며, AI 큐레이터는 `sourceLabel`과 `sourceUrl`이 있는 공식 확인
행사만 추천합니다.

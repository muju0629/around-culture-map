import {
  createContext,
  useContext,
} from "react";
import type { Locale } from "../types";

export const uiCopy = {
  ko: {
    header: {
      homeLabel: "AROUND 홈",
      navLabel: "주요 메뉴",
      explore: "EXPLORE",
      weekly: "WEEKLY",
      languageLabel: "언어 선택",
    },
    home: {
      title: ["오늘 주변에서", "발견할 문화"],
      intro: ["음악, 전시, 축제와 새로운 공간.", "지금 서울에서 열리는 장면을 모았습니다."],
      exploreMap: "지도에서 둘러보기",
      weekend: "이번 주말",
      weekendIntro: ["에디터가 고른 세 개의 장면.", "가까운 곳부터 천천히 살펴보세요."],
      openNow: "지금 열리는 곳",
      viewAll: "전체 보기",
      area: "지역으로 찾기",
      areaIntro: "익숙한 동네를 새롭게 보는 여섯 개의 시작점.",
      cta: ["가까운 장면부터", "발견해보세요."],
    },
    explore: {
      title: "문화 지도",
      placesFound: "PLACES FOUND",
      listLabel: "행사 목록",
      places: "개의 장소",
    },
    detail: {
      back: "돌아가기",
      copied: "링크를 복사했습니다.",
      copyFailed: "주소창의 링크를 복사해주세요.",
      relatedImages: "관련 이미지",
      galleryIntro: "포스터 바깥의 인물과 작품을 함께 보면 이번 행사의 맥락이 더 선명해집니다.",
      sourceNotice: "일정, 가격, 관람 조건은 변경될 수 있습니다. 이미지와 정보는 연결된 공식 페이지를 기준으로 확인했으며, 실제 서비스 공개 전에는 각 이미지의 사용 권한을 별도로 확보해야 합니다.",
      fallbackHeading: "장소와 시간 사이에 놓인 하나의 장면.",
      eventTags: "행사 태그",
      related: "함께 둘러볼 곳",
      viewMap: "지도에서 보기",
    },
    event: {
      selectOnMap: "지도에서 선택",
      selected: "선택됨",
      save: "찜",
      unsave: "찜 해제",
      details: "상세 보기",
      officialPoster: "공식 포스터",
      poster: "포스터",
      free: "무료",
    },
    map: {
      label: "서울 문화 지도",
      loading: "지도를 불러오는 중",
      selected: "SELECTED",
      details: "상세 보기",
    },
    chat: {
      greeting: "안녕하세요, AROUND 문화 큐레이터예요. 원하는 날짜, 지역, 가격과 문화 유형을 말해주세요.",
      suggestions: [
        "이번 주말 전시 추천해줘",
        "곧 열리는 내한 공연 알려줘",
        "종로에서 볼 전시가 있어?",
      ],
      open: "큐레이터 챗봇 열기",
      dialog: "문화 큐레이터",
      heading: "무엇을 찾으세요?",
      close: "닫기",
      closeLabel: "큐레이터 챗봇 닫기",
      suggestionLabel: "추천 질문",
      loading: "공식 행사에서 찾는 중…",
      placeholder: "예: 이번 주말 종로 전시",
      inputLabel: "메시지 입력",
      send: "보내기",
      error: "죄송해요, 지금 답을 가져오지 못했어요. 잠시 후 다시 시도해주세요.",
    },
    notFound: {
      title: "이 장면은 아직 없습니다.",
      home: "홈으로 돌아가기",
    },
  },
  en: {
    header: {
      homeLabel: "AROUND home",
      navLabel: "Primary navigation",
      explore: "EXPLORE",
      weekly: "WEEKLY",
      languageLabel: "Select language",
    },
    home: {
      title: ["Culture to discover", "around you today"],
      intro: ["Music, exhibitions, festivals and new spaces.", "A selection of scenes unfolding across Seoul now."],
      exploreMap: "Explore the map",
      weekend: "This weekend",
      weekendIntro: ["Three scenes selected by our editors.", "Start nearby and take your time."],
      openNow: "Open now",
      viewAll: "View all",
      area: "Browse by area",
      areaIntro: "Six starting points for seeing familiar neighborhoods differently.",
      cta: ["Start with what is near.", "Discover what is next."],
    },
    explore: {
      title: "Culture map",
      placesFound: "PLACES FOUND",
      listLabel: "Event list",
      places: " places",
    },
    detail: {
      back: "Back",
      copied: "Link copied.",
      copyFailed: "Please copy the link from your address bar.",
      relatedImages: "Related images",
      galleryIntro: "Looking beyond the poster to the people and works makes the context of this event clearer.",
      sourceNotice: "Schedules, prices and admission conditions may change. Images and information were checked against the linked official pages. Image rights must be secured separately before a public service launch.",
      fallbackHeading: "A scene placed between a location and a moment.",
      eventTags: "Event tags",
      related: "Explore nearby",
      viewMap: "View on map",
    },
    event: {
      selectOnMap: "Select on map",
      selected: "selected",
      save: "Save",
      unsave: "Remove from saved",
      details: "View details",
      officialPoster: "official poster",
      poster: "poster",
      free: "Free",
    },
    map: {
      label: "Seoul culture map",
      loading: "Loading map",
      selected: "SELECTED",
      details: "View details",
    },
    chat: {
      greeting: "Hello, I am the AROUND culture curator. Tell me the date, area, price range and type of culture you are looking for.",
      suggestions: [
        "Recommend exhibitions for this weekend",
        "Show me upcoming international concerts",
        "Are there exhibitions in Jongno?",
      ],
      open: "Open curator chatbot",
      dialog: "Culture curator",
      heading: "What are you looking for?",
      close: "Close",
      closeLabel: "Close curator chatbot",
      suggestionLabel: "Suggested questions",
      loading: "Searching verified events…",
      placeholder: "e.g. exhibitions in Jongno this weekend",
      inputLabel: "Message",
      send: "Send",
      error: "Sorry, I could not get an answer just now. Please try again shortly.",
    },
    notFound: {
      title: "This scene is not here yet.",
      home: "Return home",
    },
  },
} as const;

export type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof uiCopy)[Locale];
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return value;
}

import type {
  CultureEvent,
  EventCategory,
  ExploreFilter,
  Locale,
} from "../types";
import { eventEnglishCopy } from "./events.en";

export const events: CultureEvent[] = [
  {
    id: "inside-other-spaces",
    title: "다른 공간 안으로",
    englishTitle: "INSIDE OTHER SPACES: ENVIRONMENTS BY WOMEN ARTISTS 1956–1976",
    category: "전시",
    region: "한남",
    district: "용산구",
    venue: "리움미술관",
    address: "서울 용산구 이태원로55길 60-16",
    startDate: "2026-05-05",
    endDate: "2026-11-29",
    hours: "TUE–SUN 10:00–18:00",
    price: "18,000원",
    isFree: false,
    description:
      "전후 현대미술사에서 오랫동안 누락되어 온 여성 작가 11인의 선구적인 환경 작업을 재조명하는 국제기획전입니다. 작품과 관람자의 신체, 빛과 색, 공간이 함께 작동하는 공감각적 장면을 만날 수 있습니다.",
    tags: ["ENVIRONMENT", "WOMEN ARTISTS", "INSTALLATION"],
    poster: "environment",
    posterImage: "/posters/inside-other-spaces.jpg",
    posterCredit: "LEEUM OFFICIAL",
    latitude: 37.5385,
    longitude: 126.9991,
    sourceLabel: "LEEUM",
    sourceUrl: "https://www.leeumhoam.org/leeum/exhibition/93?params=Y",
    featured: true,
  },
  {
    id: "damien-hirst-mmca",
    title: "데이미언 허스트",
    englishTitle: "DAMIEN HIRST: NOTHING IS TRUE, EVERYTHING IS POSSIBLE",
    category: "전시",
    region: "삼청",
    district: "종로구",
    venue: "국립현대미술관 서울",
    address: "서울 종로구 삼청로 30",
    startDate: "2026-03-20",
    endDate: "2026-06-28",
    hours: "MON–SUN 10:00–18:00 / WED·SAT –21:00",
    price: "8,000원",
    isFree: false,
    description:
      "데이미언 허스트의 초기작부터 근작까지 설치, 조각, 회화를 폭넓게 소개하는 아시아 최초의 대규모 개인전입니다. 삶과 죽음, 과학과 믿음, 예술과 시장을 둘러싼 작가의 질문을 따라갑니다.",
    tags: ["DAMIEN HIRST", "SCULPTURE", "MMCA"],
    poster: "spots",
    posterImage: "/posters/damien-hirst.png",
    posterCredit: "MMCA OFFICIAL",
    latitude: 37.5786,
    longitude: 126.9804,
    sourceLabel: "MMCA",
    sourceUrl:
      "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
    featured: true,
  },
  {
    id: "hyundai-super-concert-28",
    title: "현대카드 슈퍼콘서트 28 위켄드",
    englishTitle: "HYUNDAI CARD SUPER CONCERT 28 THE WEEKND",
    category: "음악",
    region: "고양",
    district: "일산서구",
    venue: "고양종합운동장 주경기장",
    address: "경기 고양시 일산서구 중앙로 1601",
    startDate: "2026-10-07",
    endDate: "2026-10-08",
    hours: "WED–THU 19:45 / OPENING 18:45",
    price: "145,000–469,000원 · 매진",
    isFree: false,
    description:
      "위켄드가 8년 만에 한국 관객과 다시 만나는 현대카드 슈퍼콘서트입니다. ‘After Hours Til Dawn’ 스타디움 투어의 연장선으로 열리며, 크리피 너츠가 오프닝 무대에 오릅니다.",
    tags: ["THE WEEKND", "STADIUM", "SOLD OUT"],
    poster: "eclipse",
    posterImage: "/posters/hyundai-super-concert-28.jpg",
    posterCredit: "HYUNDAI CARD DIVE",
    latitude: 37.6764,
    longitude: 126.7451,
    locationLabel: "GOYANG / GYEONGGI",
    sourceLabel: "HYUNDAI CARD DIVE",
    sourceUrl:
      "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
  },
  {
    id: "silica-gel-ballad-of-you",
    title: "실리카겔: Ballad of You",
    englishTitle: "SILICA GEL ASIA TOUR SYN.THE.SIZE: BALLAD OF YOU",
    category: "음악",
    region: "올림픽공원",
    district: "송파구",
    venue: "KSPO DOME",
    address: "서울 송파구 올림픽로 424",
    startDate: "2026-09-26",
    endDate: "2026-09-27",
    hours: "SAT 18:00 / SUN 17:00",
    price: "110,000–143,000원",
    isFree: false,
    description:
      "실리카겔의 첫 아시아 투어 서울 공연입니다. 9월 26일과 27일 이틀간 KSPO DOME에서 열리며, 스탠딩과 지정석으로 구성됩니다.",
    tags: ["SILICA GEL", "ASIA TOUR", "LIVE"],
    poster: "synthesis",
    posterImage: "/posters/silica-gel-ballad-of-you.gif",
    posterCredit: "NOL TICKET OFFICIAL",
    latitude: 37.5192,
    longitude: 127.1274,
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://tickets.interpark.com/goods/26007703",
  },
  {
    id: "post-malone-seoul",
    title: "포스트 말론 내한공연",
    englishTitle: "POST MALONE PRESENTS THE BIG STADIUM WORLD TOUR IN SEOUL",
    category: "음악",
    region: "고양",
    district: "일산서구",
    venue: "고양종합운동장 주경기장",
    address: "경기 고양시 일산서구 중앙로 1601",
    startDate: "2026-10-02",
    endDate: "2026-10-02",
    hours: "FRI 20:00",
    price: "99,000–520,000원",
    isFree: false,
    description:
      "포스트 말론이 2023년 첫 내한 이후 3년 만에 스타디움 월드 투어로 돌아옵니다. 고양종합운동장 주경기장에서 열리며 Don Toliver가 스페셜 게스트로 참여합니다. 본 공연은 만 19세 이상 관람가입니다.",
    tags: ["POST MALONE", "STADIUM", "LIVE"],
    poster: "type",
    posterImage: "/posters/post-malone-seoul.gif",
    posterCredit: "NOL TICKET OFFICIAL",
    latitude: 37.6764,
    longitude: 126.7451,
    locationLabel: "GOYANG / GYEONGGI",
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://nol.yanolja.com/ticket/products/26004944",
  },
  {
    id: "javier-sola-one-year",
    title: "자비 솔라 특별전",
    englishTitle: "XEVI SOLÀ: ONE YEAR — SCENES IN TIME",
    category: "전시",
    region: "서초",
    district: "서초구",
    venue: "예술의전당 서예박물관",
    address: "서울 서초구 남부순환로 2406",
    startDate: "2026-07-10",
    endDate: "2026-10-17",
    hours: "TUE–SUN 10:00–19:00 / LAST ENTRY 18:00",
    price: "일반 15,000원 · 얼리버드 9,000원(8/30까지)",
    isFree: false,
    description:
      "스페인 작가 자비 솔라의 회화를 소개하는 특별전 ‘어느 한 해 - 완벽한 날들’입니다. 일상의 장면과 인물을 강렬한 색채와 회화적 질감으로 기록한 작업을 만날 수 있습니다.",
    tags: ["XEVI SOLÀ", "PAINTING", "EARLY BIRD"],
    poster: "frame",
    posterImage: "/posters/javier-sola.gif",
    posterCredit: "NOL TICKET OFFICIAL",
    latitude: 37.47833,
    longitude: 127.01185,
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://nol.yanolja.com/ticket/products/26008092",
  },
  {
    id: "dialogue-in-the-dark-bukchon",
    title: "어둠속의대화",
    englishTitle: "DIALOGUE IN THE DARK — BUKCHON",
    category: "전시",
    region: "북촌",
    district: "종로구",
    venue: "북촌 어둠속의대화",
    address: "서울 종로구 북촌로 71",
    startDate: "2026-05-01",
    endDate: "2026-06-30",
    hours: "WED–SUN 10:00–19:00 / EVERY 15 MIN",
    price: "청소년 22,000원 · 성인 33,000원",
    isFree: false,
    description:
      "빛이 완전히 차단된 공간을 전문 안내자와 함께 이동하며 시각 이외의 감각과 대화를 경험하는 체험형 전시입니다. 회차당 최대 8명이 100분 동안 참여합니다.",
    tags: ["IMMERSIVE", "DIALOGUE", "BUKCHON"],
    poster: "void",
    posterImage: "/posters/dialogue-in-the-dark.gif",
    posterCredit: "NOL TICKET OFFICIAL",
    latitude: 37.5824,
    longitude: 126.9849,
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://nol.yanolja.com/ticket/products/26002802",
  },
  {
    id: "big-naughty-icn-ntg",
    title: "ICN > NTG : BIG Naughty Concert",
    englishTitle: "ICN TO NTG: BIG NAUGHTY CONCERT",
    category: "음악",
    region: "장충",
    district: "중구",
    venue: "장충체육관",
    address: "서울 중구 동호로 241",
    startDate: "2026-07-11",
    endDate: "2026-07-11",
    hours: "SAT 17:00 / 180 MIN",
    price: "88,000–165,000원",
    isFree: false,
    description:
      "BIG Naughty가 장충체육관에서 여는 단독 콘서트입니다. 공항과 탑승을 모티프로 한 ‘ICN > NTG’ 콘셉트 아래 스탠딩과 지정석으로 진행됩니다.",
    tags: ["BIG NAUGHTY", "HIP-HOP", "LIVE"],
    poster: "column",
    posterImage: "/posters/big-naughty-concert.jpg",
    posterCredit: "MELON TICKET OFFICIAL",
    latitude: 37.5584,
    longitude: 127.0068,
    sourceLabel: "MELON TICKET",
    sourceUrl: "https://ticket.melon.com/performance/index.htm?prodId=213406",
  },
  {
    id: "seoul-sound-archive",
    title: "서울 사운드 아카이브",
    englishTitle: "SEOUL SOUND ARCHIVE",
    category: "음악",
    region: "성수",
    district: "성동구",
    venue: "레이어 41",
    address: "서울 성동구 아차산로9길 41",
    startDate: "2026-06-11",
    endDate: "2026-06-14",
    hours: "THU–SUN 18:00–23:00",
    price: "25,000원",
    isFree: false,
    description:
      "서울의 독립 레이블과 사운드 아티스트를 한 공간에서 만나는 나흘간의 리스닝 페스티벌. 라이브 셋, 아카이브 청음, 소규모 토크가 시간대별로 이어집니다.",
    tags: ["LIVE", "LISTENING", "NIGHT"],
    poster: "orbit",
    latitude: 37.5445,
    longitude: 127.0557,
  },
  {
    id: "material-after-image",
    title: "물질 이후의 이미지",
    englishTitle: "IMAGE AFTER MATERIAL",
    category: "전시",
    region: "한남",
    district: "용산구",
    venue: "팩토리 한남",
    address: "서울 용산구 이태원로 246",
    startDate: "2026-05-29",
    endDate: "2026-07-05",
    hours: "TUE–SUN 11:00–19:00",
    price: "무료",
    isFree: true,
    description:
      "디지털 이미지가 다시 물성과 공간을 획득하는 과정을 살피는 그룹전. 설치, 프린트, 움직이는 조각을 통해 이미지의 경계를 탐색합니다.",
    tags: ["MEDIA", "INSTALLATION", "FREE"],
    poster: "split",
    latitude: 37.5367,
    longitude: 127.0017,
  },
  {
    id: "eulji-open-studio",
    title: "을지 오픈 스튜디오",
    englishTitle: "EULJI OPEN STUDIO",
    category: "축제",
    region: "을지로",
    district: "중구",
    venue: "을지로 일대",
    address: "서울 중구 창경궁로5길 18",
    startDate: "2026-06-13",
    endDate: "2026-06-14",
    hours: "SAT–SUN 12:00–20:00",
    price: "무료",
    isFree: true,
    description:
      "을지로의 작업실과 작은 가게가 문을 여는 동네 축제. 인쇄, 금속, 사진, 음악 작업을 가까이에서 만나고 제작자의 이야기를 들을 수 있습니다.",
    tags: ["LOCAL", "OPEN STUDIO", "WALK"],
    poster: "grid",
    latitude: 37.5662,
    longitude: 126.9925,
    featured: true,
  },
  {
    id: "slow-frequency",
    title: "느린 주파수",
    englishTitle: "SLOW FREQUENCY",
    category: "음악",
    region: "문래",
    district: "영등포구",
    venue: "스페이스 문",
    address: "서울 영등포구 도림로128가길 13",
    startDate: "2026-06-12",
    endDate: "2026-06-12",
    hours: "FRI 20:00",
    price: "18,000원",
    isFree: false,
    description:
      "앰비언트와 실험 전자음악을 위한 늦은 저녁의 라이브 세션. 세 팀의 공연과 함께 공간 전체를 사용하는 조명 연출이 진행됩니다.",
    tags: ["AMBIENT", "ELECTRONIC", "LIVE"],
    poster: "wave",
    latitude: 37.5148,
    longitude: 126.8972,
  },
  {
    id: "museum-without-walls",
    title: "벽 없는 미술관",
    englishTitle: "MUSEUM WITHOUT WALLS",
    category: "전시",
    region: "서촌",
    district: "종로구",
    venue: "보안1942",
    address: "서울 종로구 효자로 33",
    startDate: "2026-06-04",
    endDate: "2026-06-28",
    hours: "TUE–SUN 12:00–18:00",
    price: "5,000원",
    isFree: false,
    description:
      "전시장과 도시의 경계를 허무는 여섯 작가의 프로젝트. 건물 안팎과 서촌 골목에 놓인 작업을 하나의 동선으로 감상합니다.",
    tags: ["ART", "WALK", "ARCHITECTURE"],
    poster: "frame",
    latitude: 37.5804,
    longitude: 126.9734,
  },
  {
    id: "concrete-garden",
    title: "콘크리트 가든",
    englishTitle: "CONCRETE GARDEN",
    category: "문화공간",
    region: "망원",
    district: "마포구",
    venue: "콘크리트 가든",
    address: "서울 마포구 월드컵로13길 19",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    hours: "WED–SUN 12:00–21:00",
    price: "공간 이용 무료",
    isFree: true,
    description:
      "출판, 식물, 디자인 오브제를 함께 소개하는 작은 복합문화공간. 주말에는 독립 출판 토크와 짧은 워크숍이 열립니다.",
    tags: ["BOOK", "DESIGN", "SPACE"],
    poster: "column",
    latitude: 37.5555,
    longitude: 126.9066,
  },
  {
    id: "night-museum",
    title: "나이트 뮤지엄 06",
    englishTitle: "NIGHT MUSEUM 06",
    category: "축제",
    region: "동대문",
    district: "중구",
    venue: "DDP 디자인랩",
    address: "서울 중구 을지로 281",
    startDate: "2026-06-13",
    endDate: "2026-06-13",
    hours: "SAT 19:00–24:00",
    price: "무료",
    isFree: true,
    description:
      "늦은 밤까지 이어지는 디자인 전시와 퍼포먼스 프로그램. 짧은 상영, 디제이 셋, 야간 도슨트가 순차적으로 진행됩니다.",
    tags: ["NIGHT", "DESIGN", "PERFORMANCE"],
    poster: "signal",
    latitude: 37.5665,
    longitude: 127.0092,
  },
  {
    id: "paper-city",
    title: "종이로 만든 도시",
    englishTitle: "A CITY MADE OF PAPER",
    category: "전시",
    region: "연희",
    district: "서대문구",
    venue: "페이지룸8",
    address: "서울 서대문구 연희맛로 17-21",
    startDate: "2026-06-06",
    endDate: "2026-06-21",
    hours: "WED–SUN 13:00–19:00",
    price: "무료",
    isFree: true,
    description:
      "종이라는 재료를 건축적 단위로 바라보는 소규모 기획전. 접고, 자르고, 쌓아 만든 가상의 도시 풍경을 소개합니다.",
    tags: ["PAPER", "OBJECT", "FREE"],
    poster: "fold",
    latitude: 37.5688,
    longitude: 126.9302,
  },
  {
    id: "the-listening-room",
    title: "더 리스닝 룸",
    englishTitle: "THE LISTENING ROOM",
    category: "문화공간",
    region: "해방촌",
    district: "용산구",
    venue: "더 리스닝 룸",
    address: "서울 용산구 신흥로 95-9",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    hours: "THU–SUN 16:00–23:00",
    price: "음료 주문",
    isFree: false,
    description:
      "음악을 천천히 듣기 위한 24석 규모의 공간. 매주 하나의 앨범을 선정해 전곡을 감상하는 세션을 운영합니다.",
    tags: ["VINYL", "BAR", "LISTENING"],
    poster: "void",
    latitude: 37.5437,
    longitude: 126.9876,
  },
  {
    id: "city-body-movement",
    title: "도시, 몸, 움직임",
    englishTitle: "CITY BODY MOVEMENT",
    category: "축제",
    region: "노들",
    district: "용산구",
    venue: "노들섬",
    address: "서울 용산구 양녕로 445",
    startDate: "2026-06-14",
    endDate: "2026-06-14",
    hours: "SUN 14:00–21:00",
    price: "12,000원",
    isFree: false,
    description:
      "도시의 움직임을 주제로 한 야외 퍼포먼스와 워크숍. 한강변을 따라 세 개의 무대와 참여형 프로그램이 펼쳐집니다.",
    tags: ["DANCE", "OUTDOOR", "WORKSHOP"],
    poster: "type",
    latitude: 37.5175,
    longitude: 126.9583,
  },
];

export const filterOptions: ExploreFilter[] = [
  "전체",
  "오늘",
  "이번 주말",
  "무료",
  "음악",
  "전시",
  "축제",
  "문화공간",
];

export const regions = ["성수", "을지로", "한남", "문래", "서촌", "망원"];

const regionEnglish: Record<string, string> = {
  성수: "Seongsu",
  을지로: "Euljiro",
  한남: "Hannam",
  문래: "Mullae",
  서촌: "Seochon",
  망원: "Mangwon",
};

const categoryEnglish: Record<EventCategory, string> = {
  음악: "Music",
  전시: "Exhibition",
  축제: "Festival",
  문화공간: "Culture space",
};

const filterEnglish: Record<ExploreFilter, string> = {
  전체: "All",
  오늘: "Today",
  "이번 주말": "This weekend",
  무료: "Free",
  음악: "Music",
  전시: "Exhibition",
  축제: "Festival",
  문화공간: "Culture space",
};

export function localizeEvent(
  event: CultureEvent,
  locale: Locale,
): CultureEvent {
  if (locale === "ko") {
    return event;
  }

  const translation = eventEnglishCopy[event.id];
  return translation ? { ...event, ...translation } : event;
}

export function getEvents(locale: Locale = "ko") {
  return locale === "ko"
    ? events
    : events.map((event) => localizeEvent(event, locale));
}

export function getEventById(id: string, locale: Locale = "ko") {
  const event = events.find((candidate) => candidate.id === id);
  return event ? localizeEvent(event, locale) : undefined;
}

export function getCategoryLabel(category: EventCategory, locale: Locale) {
  return locale === "en" ? categoryEnglish[category] : category;
}

export function getFilterLabel(filter: ExploreFilter, locale: Locale) {
  return locale === "en" ? filterEnglish[filter] : filter;
}

export function getRegions(locale: Locale) {
  return locale === "en"
    ? regions.map((region) => regionEnglish[region] ?? region)
    : regions;
}

export function formatDateRange(
  startDate: string,
  endDate: string,
  locale: Locale = "ko",
) {
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T00:00:00`);
  const format = new Intl.DateTimeFormat(locale === "ko" ? "ko-KR" : "en-GB", {
    month: "2-digit",
    day: "2-digit",
  });

  if (startDate === endDate) {
    return format.format(start).replace(/\.$/, "");
  }

  return `${format.format(start).replace(/\.$/, "")} — ${format
    .format(end)
    .replace(/\.$/, "")}`;
}

export function isActiveOn(event: CultureEvent, date: string) {
  return event.startDate <= date && event.endDate >= date;
}

export function isActiveDuring(
  event: CultureEvent,
  startDate: string,
  endDate: string,
) {
  return event.startDate <= endDate && event.endDate >= startDate;
}

export function getTodayInSeoul(reference = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(reference);
  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value]),
  );
  return `${values.year}-${values.month}-${values.day}`;
}

function addDays(date: string, amount: number) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}

export function getCurrentWeekend(today = getTodayInSeoul()) {
  const day = new Date(`${today}T00:00:00Z`).getUTCDay();

  if (day === 0) {
    return { start: addDays(today, -1), end: today };
  }
  if (day === 6) {
    return { start: today, end: addDays(today, 1) };
  }

  const daysUntilSaturday = 6 - day;
  const start = addDays(today, daysUntilSaturday);
  return { start, end: addDays(start, 1) };
}

export function filterEvents(filter: ExploreFilter, locale: Locale = "ko") {
  const today = getTodayInSeoul();
  const weekend = getCurrentWeekend(today);
  let matches: CultureEvent[];

  if (filter === "전체") {
    matches = events;
  } else if (filter === "오늘") {
    matches = events.filter((event) => isActiveOn(event, today));
  } else if (filter === "이번 주말") {
    matches = events.filter((event) =>
      isActiveDuring(event, weekend.start, weekend.end),
    );
  } else if (filter === "무료") {
    matches = events.filter((event) => event.isFree);
  } else {
    matches = events.filter((event) => event.category === filter);
  }

  return locale === "ko"
    ? matches
    : matches.map((event) => localizeEvent(event, locale));
}

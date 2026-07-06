import type {
  CultureEvent,
  EventCategory,
  ExploreFilter,
  Locale,
  UserLocation,
} from "../types";
import { eventEnglishCopy } from "./events.en";

export const CATALOG_UPDATED_AT = "2026-07-06";

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
    id: "cortis-put-your-phone-down-incheon",
    title: "2026 CORTIS TOUR 〈PUT YOUR PHONE DOWN〉 IN INCHEON",
    englishTitle: "2026 CORTIS TOUR PUT YOUR PHONE DOWN IN INCHEON",
    category: "음악",
    region: "영종도",
    district: "인천 중구",
    venue: "인스파이어 아레나",
    address: "인천 중구 공항문화로 127",
    startDate: "2026-07-18",
    endDate: "2026-07-19",
    hours: "SAT 18:00 / SUN 17:00",
    price: "스탠딩·지정석 143,000원",
    isFree: false,
    description:
      "CORTIS의 첫 투어가 인천 인스파이어 아레나에서 이틀간 시작됩니다. 5인조 크리에이터 크루의 음악, 퍼포먼스와 영상 감각을 대형 아레나 무대로 확장하는 공연입니다.",
    tags: ["CORTIS", "FIRST TOUR", "INCHEON"],
    poster: "grid",
    posterImage: "/posters/cortis-tour.gif",
    posterCredit: "BIGHIT MUSIC · NOL TICKET",
    latitude: 37.46678,
    longitude: 126.39064,
    locationLabel: "YEONGJONG / INCHEON",
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://tickets.interpark.com/goods/26007886",
    verifiedAt: "2026-06-11",
  },
  {
    id: "sienna-spiro-my-house-seoul",
    title: "시에나 스파이로 첫 내한공연",
    englishTitle: "SIENNA SPIRO: MY HOUSE TOUR IN SEOUL",
    category: "음악",
    region: "영등포",
    district: "영등포구",
    venue: "명화라이브홀",
    address: "서울 영등포구 버드나루로 30",
    startDate: "2027-01-07",
    endDate: "2027-01-07",
    hours: "THU 20:00",
    price: "스탠딩·지정석 110,000원",
    isFree: false,
    description:
      "영국 싱어송라이터 시에나 스파이로가 ‘My House Tour’로 처음 한국을 찾습니다. 복고적인 소울과 재즈의 질감, 피아노 중심의 편곡과 강한 보컬을 가까운 라이브홀 무대에서 만나는 단독 공연입니다.",
    tags: ["SIENNA SPIRO", "FIRST KOREA", "MY HOUSE TOUR"],
    poster: "frame",
    posterImage: "/posters/sienna-spiro.gif",
    posterCredit: "LIVE NATION KOREA · NOL TICKET",
    latitude: 37.52155,
    longitude: 126.91239,
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://tickets.interpark.com/goods/26008451",
    verifiedAt: "2026-06-11",
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
    id: "to-alexa",
    title: "알렉사에게",
    englishTitle: "TO ALEXA",
    category: "전시",
    region: "평창",
    district: "종로구",
    venue: "서울시립 미술아카이브",
    address: "서울 종로구 평창문화로 101",
    startDate: "2026-03-26",
    endDate: "2026-07-26",
    hours: "TUE–FRI 10:00–20:00 / WEEKEND 10:00–19:00",
    price: "무료",
    isFree: true,
    description:
      "정보를 찾고 전달하는 인터페이스가 달라진 오늘, 동시대 미술이 기술과 대화하는 방식을 살펴보는 전시입니다. 여덟 작가의 작업을 통해 질문하고 응답하는 행위의 의미를 다시 생각합니다.",
    tags: ["INTERFACE", "ARCHIVE", "FREE"],
    poster: "signal",
    latitude: 37.6054993,
    longitude: 126.9663636,
    sourceLabel: "SeMA",
    sourceUrl:
      "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1513028",
    verifiedAt: "2026-06-11",
  },
  {
    id: "foundation-of-technology",
    title: "기술의 저변: 경계에 선 장면들",
    englishTitle: "THE FOUNDATION OF TECHNOLOGY: SCENES AT THE BOUNDARY",
    category: "전시",
    region: "정동",
    district: "중구",
    venue: "서울시립미술관 서소문본관",
    address: "서울 중구 덕수궁길 61",
    startDate: "2026-04-16",
    endDate: "2026-11-22",
    hours: "TUE–THU 10:00–20:00 / FRI –21:00 / WEEKEND –19:00",
    price: "무료",
    isFree: true,
    description:
      "가나아트컬렉션을 중심으로 1970년대부터 1990년대까지 산업화, 도시화, 매체 변화가 한국 사회의 풍경과 미술에 남긴 장면을 살펴봅니다.",
    tags: ["GANA ART COLLECTION", "KOREAN ART", "FREE"],
    poster: "grid",
    latitude: 37.5641598,
    longitude: 126.9738078,
    sourceLabel: "SeMA",
    sourceUrl:
      "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1509709",
    verifiedAt: "2026-06-11",
  },
  {
    id: "the-art-of-writing",
    title: "글짓, 쓰는 예술",
    englishTitle: "THE ART OF WRITING",
    category: "전시",
    region: "중계",
    district: "노원구",
    venue: "서울시립 북서울미술관",
    address: "서울 노원구 동일로 1238",
    startDate: "2026-04-23",
    endDate: "2026-07-12",
    hours: "TUE–THU 10:00–20:00 / FRI –21:00 / WEEKEND –19:00",
    price: "무료",
    isFree: true,
    description:
      "쓰기를 예술의 핵심 언어로 바라보는 전시입니다. 열 팀의 작가가 텍스트, 소리, 드로잉, 설치, 영상을 오가며 글을 짓고 읽는 새로운 방식을 제안합니다.",
    tags: ["WRITING", "TEXT ART", "FREE"],
    poster: "type",
    latitude: 37.6408003,
    longitude: 127.0667787,
    sourceLabel: "SeMA",
    sourceUrl:
      "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1521429",
    verifiedAt: "2026-06-11",
  },
  {
    id: "filipp-jenikae-lucky",
    title: "필립 예니카 기획전: 럭키 럭키 럭키",
    englishTitle: "FILIPP JENIKÄE: LUCKY, LUCKY? LUCKY!",
    category: "전시",
    region: "홍대",
    district: "마포구",
    venue: "띠아트뮤지엄 홍대",
    address: "서울 마포구 양화로16길 14-16",
    startDate: "2026-06-19",
    endDate: "2026-09-19",
    hours: "DAILY 10:30–19:00 / LAST ENTRY 18:00",
    price: "얼리버드 10,000원 · 일반 20,000원",
    isFree: false,
    description:
      "강렬한 색과 에너지로 행운의 다섯 가지 비밀을 풀어낸 필립 예니카의 국내 첫 기획전입니다. 6월 18일까지 얼리버드 티켓을 판매합니다.",
    tags: ["FILIPP JENIKÄE", "FIRST IN KOREA", "EARLY BIRD"],
    poster: "orbit",
    latitude: 37.5527986,
    longitude: 126.9200241,
    sourceLabel: "MELON TICKET",
    sourceUrl:
      "https://ticket.melon.com/performance/index.htm?prodId=213358",
    verifiedAt: "2026-06-11",
  },
  {
    id: "audeum",
    title: "오디움",
    englishTitle: "AUDEUM — MUSEUM OF SOUND",
    category: "문화공간",
    region: "양재",
    district: "서초구",
    venue: "오디움",
    address: "서울 서초구 헌릉로8길 6",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    hours: "THU–SAT 10:00–17:30 · LAST ENTRY 17:00",
    price: "무료 · 사전 예약",
    isFree: true,
    description:
      "19세기 이후의 희귀 음향 재생 장비를 보존하고 연구하는 오디오 박물관입니다. 쿠마 켄고가 설계한 건축 안에서 상설전 《정음: 소리를 찾아서》와 예약제 리스닝 투어를 운영합니다.",
    tags: ["SOUND", "AUDIO", "KENGO KUMA"],
    poster: "signal",
    posterImage: "/posters/audeum.png",
    posterCredit: "AUDEUM OFFICIAL",
    latitude: 37.4569698,
    longitude: 127.0591039,
    locationLabel: "SEOCHO / SEOUL",
    sourceLabel: "AUDEUM",
    sourceUrl: "https://audeum.org/",
    verifiedAt: "2026-06-12",
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

export function addDays(date: string, amount: number) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + amount);
  return value.toISOString().slice(0, 10);
}

export function differenceInDays(fromDate: string, toDate: string) {
  const from = new Date(`${fromDate}T00:00:00Z`).getTime();
  const to = new Date(`${toDate}T00:00:00Z`).getTime();
  return Math.round((to - from) / 86_400_000);
}

export function getEventStatus(
  event: CultureEvent,
  locale: Locale = "ko",
  today = getTodayInSeoul(),
) {
  if (event.endDate < today) {
    return locale === "ko" ? "종료" : "Ended";
  }

  if (isActiveOn(event, today)) {
    const daysLeft = differenceInDays(today, event.endDate);
    if (daysLeft === 0) {
      return locale === "ko" ? "오늘 종료" : "Ends today";
    }
    if (daysLeft <= 7) {
      return locale === "ko"
        ? `${daysLeft}일 후 종료`
        : `Ends in ${daysLeft}d`;
    }
    return locale === "ko" ? "진행 중" : "Open now";
  }

  const daysUntil = differenceInDays(today, event.startDate);
  return `D-${daysUntil}`;
}

export function getTicketStatus(event: CultureEvent, locale: Locale = "ko") {
  if (
    event.tags.some((tag) => tag.toUpperCase() === "SOLD OUT") ||
    event.price.includes("매진")
  ) {
    return locale === "ko" ? "매진" : "Sold out";
  }
  if (event.sourceUrl) {
    return locale === "ko" ? "공식 정보 확인" : "Official source";
  }
  return locale === "ko" ? "정보 확인 필요" : "Needs verification";
}

export function getVerificationDate(event: CultureEvent) {
  return event.verifiedAt ?? CATALOG_UPDATED_AT;
}

export function getDistanceKm(
  origin: UserLocation,
  destination: Pick<CultureEvent, "latitude" | "longitude">,
) {
  const toRadians = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const latitudeDelta = toRadians(destination.latitude - origin.latitude);
  const longitudeDelta = toRadians(destination.longitude - origin.longitude);
  const originLatitude = toRadians(origin.latitude);
  const destinationLatitude = toRadians(destination.latitude);
  const a =
    Math.sin(latitudeDelta / 2) ** 2 +
    Math.cos(originLatitude) *
      Math.cos(destinationLatitude) *
      Math.sin(longitudeDelta / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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

export function getCurrentWeek(today = getTodayInSeoul()) {
  const day = new Date(`${today}T00:00:00Z`).getUTCDay();
  const daysSinceMonday = day === 0 ? 6 : day - 1;
  const start = addDays(today, -daysSinceMonday);
  return { start, end: addDays(start, 6) };
}

export function filterEvents(
  filter: ExploreFilter,
  locale: Locale = "ko",
  region?: string,
) {
  const today = getTodayInSeoul();
  const weekend = getCurrentWeekend(today);
  const currentEvents = events.filter((event) => event.endDate >= today);
  let matches: CultureEvent[];

  if (filter === "전체") {
    matches = currentEvents;
  } else if (filter === "오늘") {
    matches = currentEvents.filter((event) => isActiveOn(event, today));
  } else if (filter === "이번 주말") {
    matches = currentEvents.filter((event) =>
      isActiveDuring(event, weekend.start, weekend.end),
    );
  } else if (filter === "무료") {
    matches = currentEvents.filter((event) => event.isFree);
  } else {
    matches = currentEvents.filter((event) => event.category === filter);
  }

  if (region) {
    matches = matches.filter((event) => event.region === region);
  }

  return locale === "ko"
    ? matches
    : matches.map((event) => localizeEvent(event, locale));
}

import type {
  CultureEvent,
  EventCategory,
  ExploreFilter,
  Locale,
  UserLocation,
} from "../types";
import { eventEnglishCopy } from "./events.en";

export const CATALOG_UPDATED_AT = "2026-07-23";

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
      "여성 작가 11명이 1956–1976년에 만든 설치 환경을 직접 걷고 통과하는 전시입니다. 빛과 색, 소리와 신체가 한 공간에서 맞물립니다.",
    curatorNote: "리움의 블랙박스를 작품처럼 걷게 만드는 전시.",
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
    posterImage: "/editorial/to-alexa/cover.jpg",
    posterCredit: "SEOUL MUSEUM OF ART OFFICIAL",
    posterImageType: "installationPhoto",
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
    posterImage: "/editorial/foundation-of-technology/cover.jpg",
    posterCredit: "SEOUL MUSEUM OF ART OFFICIAL",
    posterImageType: "officialPoster",
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
    posterImage: "/editorial/the-art-of-writing/cover.jpg",
    posterCredit: "SEOUL MUSEUM OF ART OFFICIAL",
    posterImageType: "officialPoster",
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
    price: "일반 20,000원",
    isFree: false,
    description:
      "행운을 다섯 가지 이야기로 풀어낸 필립 예니카의 국내 첫 기획전입니다. 강한 색과 빠른 붓질로 완성한 회화를 한자리에 모았습니다.",
    tags: ["FILIPP JENIKÄE", "FIRST IN KOREA", "PAINTING"],
    poster: "orbit",
    posterImage: "/editorial/filipp-jenikae/cover.jpg",
    posterCredit: "THART MUSEUM · MOMENT CULTURE OFFICIAL",
    posterImageType: "officialPoster",
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
      "쿠마 켄고가 설계한 공간에서 희귀 오디오를 직접 듣는 무료 박물관입니다. 상설전 《정음: 소리를 찾아서》와 예약제 리스닝 투어를 운영합니다.",
    curatorNote: "기기를 아는 사람보다 오래 듣고 싶은 사람에게 권하고 싶은 곳.",
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
  {
    id: "yoo-youngkuk-retrospective",
    title: "유영국: 산은 내 안에 있다",
    englishTitle: "YOO YOUNGKUK — THE MOUNTAIN IS IN ME",
    category: "전시",
    region: "정동",
    district: "중구",
    venue: "서울시립미술관 서소문본관",
    address: "서울 중구 덕수궁길 61",
    startDate: "2026-05-19",
    endDate: "2026-10-25",
    hours: "TUE–FRI 10:00–20:00 · WEEKEND 10:00–19:00",
    price: "무료 · 사전 예약",
    isFree: true,
    description:
      "미공개작을 포함한 회화·부조·사진·드로잉 170여 점을 모은 유영국 최대 규모 회고전입니다. 1935년 도쿄의 추상 실험부터 생애 후반 작업까지 60여 년의 궤적을 살핍니다.",
    curatorNote: "익숙한 산의 화가를 훨씬 더 넓게 다시 보는 회고전.",
    tags: ["ABSTRACT", "KOREAN MODERN", "RETROSPECTIVE"],
    poster: "fold",
    posterImage: "/editorial/yoo-youngkuk/sema.jpg",
    posterCredit: "OLLIE PALMER · WIKIMEDIA COMMONS",
    posterImageType: "venuePhoto",
    latitude: 37.564,
    longitude: 126.9737,
    sourceLabel: "SEMA",
    sourceUrl: "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1529410",
    verifiedAt: "2026-07-06",
    featured: true,
  },
  {
    id: "jo-sook-jin-namseoul",
    title: "조숙진",
    englishTitle: "SOOK JIN JO — SCULPTURE AND BEYOND",
    category: "전시",
    region: "사당",
    district: "관악구",
    venue: "서울시립 남서울미술관",
    address: "서울 관악구 남부순환로 2076",
    startDate: "2026-07-29",
    endDate: "2026-11-15",
    hours: "TUE–FRI 10:00–20:00 · WEEKEND 10:00–18:00",
    price: "무료",
    isFree: true,
    description:
      "1988년 뉴욕으로 건너가 국제적으로 활동해 온 조각가 조숙진의 연례 조각가 개인전입니다. 초기 부조 시리즈부터 뉴욕 시기의 설치, 퍼포먼스, 건축 프로젝트와 드로잉까지 버려진 나무에 새 생명을 불어넣어 온 작업 세계를 종합적으로 소개합니다.",
    curatorNote: "남서울미술관의 오래된 건축과 버려진 나무가 만나는 전시.",
    tags: ["SCULPTURE", "WOOD", "NEW YORK"],
    poster: "column",
    posterImage: "/editorial/jo-sook-jin/cover.jpg",
    posterCredit: "SEOUL MUSEUM OF ART OFFICIAL",
    posterImageType: "officialPoster",
    latitude: 37.476,
    longitude: 126.9795,
    sourceLabel: "SEMA",
    sourceUrl:
      "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1556711",
    verifiedAt: "2026-07-06",
  },
  {
    id: "oh-yoon-collection",
    title: "오윤 컬렉션",
    englishTitle: "OH YOON COLLECTION",
    category: "전시",
    region: "평창",
    district: "종로구",
    venue: "서울시립 미술아카이브",
    address: "서울 종로구 평창문화로 101",
    startDate: "2026-08-27",
    endDate: "2027-02-21",
    hours: "TUE–SUN 10:00–18:00 · MON CLOSED",
    price: "무료",
    isFree: true,
    description:
      "1980년대 민중미술을 대표하는 판화가 오윤의 작고 40주기를 맞아 여는 소장자료 기획전입니다. 2024년 수집한 오윤 아카이브를 통해 민중의 삶을 보듬고 위로하며 미술의 역할을 고민한 그의 작품 세계와 창작 과정을 재조명합니다.",
    curatorNote: "작품보다 먼저 남겨진 생각과 손의 흔적을 읽는 아카이브 전시.",
    tags: ["MINJUNG ART", "PRINTMAKING", "ARCHIVE"],
    poster: "frame",
    posterImage: "/editorial/oh-yoon/cover.jpg",
    posterCredit: "SEOUL MUSEUM OF ART ART ARCHIVE",
    posterImageType: "artistPhoto",
    latitude: 37.6055,
    longitude: 126.9664,
    sourceLabel: "SEMA AA",
    sourceUrl: "https://sema.seoul.go.kr/semaaa/front/main.do",
    verifiedAt: "2026-07-06",
  },
  {
    id: "koo-jeong-a-leeum",
    title: "구정아 개인전",
    englishTitle: "KOO JEONG A",
    category: "전시",
    region: "한남",
    district: "용산구",
    venue: "리움미술관 M2",
    address: "서울 용산구 이태원로55길 60-16",
    startDate: "2026-09-05",
    endDate: "2026-12-27",
    hours: "TUE–SUN 10:00–18:00",
    price: "리움 공식 예매 공지 예정",
    isFree: false,
    description:
      "향과 자력처럼 눈에 보이지 않는 감각을 설치로 다루는 구정아의 대규모 개인전입니다. 제60회 베니스 비엔날레 한국관 대표 작가의 작업을 M2 전관에서 만납니다.",
    tags: ["CONTEMPORARY", "INSTALLATION", "VENICE BIENNALE"],
    poster: "void",
    posterImage: "/editorial/koo-jeong-a/leeum-stair.jpg",
    posterCredit: "LUMOPLANK · WIKIMEDIA COMMONS",
    posterImageType: "venuePhoto",
    latitude: 37.5385,
    longitude: 126.9991,
    sourceLabel: "LEEUM",
    sourceUrl: "https://www.leeumhoam.org/leeum/exhibition/94",
    verifiedAt: "2026-07-06",
  },
  {
    id: "sema-seoseoul",
    title: "서울시립 서서울미술관",
    englishTitle: "SEMA SEO-SEOUL — NEW MEDIA MUSEUM",
    category: "문화공간",
    region: "독산",
    district: "금천구",
    venue: "서울시립 서서울미술관",
    address: "서울 금천구 시흥대로79길 65",
    startDate: "2026-03-12",
    endDate: "2026-12-31",
    hours: "TUE–FRI 10:00–20:00 · WEEKEND 10:00–18:00",
    price: "무료",
    isFree: true,
    description:
      "서남권 최초의 공립 미술관이자 서울시 첫 뉴미디어 특화 미술관입니다. 김찬중(더시스템랩)이 설계한 스트리트형 건축이 금나래공원의 보행로와 이어지며, 개관전 《우리의 시간은 여기서부터》와 뉴미디어 소장품전을 선보입니다.",
    tags: ["NEW MEDIA", "ARCHITECTURE", "OPENING"],
    poster: "synthesis",
    latitude: 37.4578,
    longitude: 126.8956,
    locationLabel: "GEUMCHEON / SEOUL",
    sourceLabel: "SEMA",
    sourceUrl: "https://sema.seoul.go.kr/kr/visit/seoseoul",
    verifiedAt: "2026-07-06",
  },
  {
    id: "yeowoorak-festival-2026",
    title: "2026 여우락 페스티벌",
    englishTitle: "YEOWOORAK FESTIVAL 2026",
    category: "음악",
    region: "장충",
    district: "중구",
    venue: "국립극장 하늘극장 · 달오름극장",
    address: "서울 중구 장충단로 59",
    startDate: "2026-07-03",
    endDate: "2026-07-25",
    hours: "TIMES VARY BY PROGRAM",
    price: "공연별 상이",
    isFree: false,
    description:
      "'여기 우리 음악이 있다'를 내건 국립극장의 대표 여름 음악축제입니다. 예술감독 이한철과 음악감독 유태평양이 이끄는 올해는 총 12개 공연으로, 강산에, 선우정아, 하림, 안예은, 이희문 등이 전통음악과 대중음악의 경계를 허뭅니다.",
    tags: ["GUGAK", "CROSSOVER", "SUMMER FESTIVAL"],
    poster: "wave",
    latitude: 37.5503,
    longitude: 127.0005,
    sourceLabel: "NTOK",
    sourceUrl: "https://www.ntok.go.kr/ntok/pm/prfmng/selectSeasonInfo.do?seasonType=2&mi=21018",
    verifiedAt: "2026-07-06",
  },
  {
    id: "the-neighbourhood-seoul",
    title: "네이버후드 첫 내한공연",
    englishTitle: "THE NEIGHBOURHOOD LIVE IN SEOUL",
    category: "음악",
    region: "광진",
    district: "광진구",
    venue: "예스24 라이브홀",
    address: "서울 광진구 구천면로 20",
    startDate: "2026-07-20",
    endDate: "2026-07-20",
    hours: "MON 20:00",
    price: "139,000원",
    isFree: false,
    description:
      "'Sweater Weather'로 전 세계를 사로잡은 캘리포니아 밴드 네이버후드의 첫 단독 내한공연입니다. 보컬 제시 러더퍼드를 중심으로 한 5인조가 특유의 몽환적이고 어두운 무드의 얼터너티브 팝 사운드를 서울에서 처음 선보입니다.",
    tags: ["ALT POP", "INDIE ROCK", "FIRST VISIT"],
    poster: "eclipse",
    latitude: 37.5457,
    longitude: 127.1081,
    sourceLabel: "YES24 LIVE HALL",
    sourceUrl: "https://yes24livehall.com/",
    verifiedAt: "2026-07-06",
  },
  {
    id: "classic-revolution-2026",
    title: "2026 클래식 레볼루션",
    englishTitle: "CLASSIC REVOLUTION 2026 — ORIGIN",
    category: "음악",
    region: "잠실",
    district: "송파구",
    venue: "롯데콘서트홀",
    address: "서울 송파구 올림픽로 300",
    startDate: "2026-08-28",
    endDate: "2026-09-04",
    hours: "TIMES VARY BY PROGRAM",
    price: "공연별 상이",
    isFree: false,
    description:
      "롯데콘서트홀의 여름 클래식 축제로, 올해 주제는 '뿌리(Origin)'입니다. 안드레이 보레이코가 지휘하는 국립심포니와 첼리스트 키안 솔타니의 개막 공연을 시작으로 카바코스와 게르스타인 듀오 등이 민속음악에서 출발한 클래식 명곡을 조명합니다.",
    tags: ["CLASSICAL", "FESTIVAL", "LOTTE CONCERT HALL"],
    poster: "orbit",
    latitude: 37.5129,
    longitude: 127.1027,
    sourceLabel: "LOTTE CONCERT HALL",
    sourceUrl: "https://www.lotteconcerthall.com/",
    verifiedAt: "2026-07-06",
  },
  {
    id: "seoul-fringe-2026",
    title: "서울프린지페스티벌 2026",
    englishTitle: "SEOUL FRINGE FESTIVAL 2026",
    category: "축제",
    region: "홍대",
    district: "마포구",
    venue: "홍대 일대 소극장 · 거리",
    address: "서울 마포구 서교동 일대",
    startDate: "2026-08-06",
    endDate: "2026-08-23",
    hours: "TIMES VARY BY PROGRAM",
    price: "작품별 상이 · 일부 무료",
    isFree: false,
    description:
      "작품과 예술가에 대한 심사와 선정이 없는 자유참가 원칙의 독립예술축제입니다. 연극, 무용, 음악, 퍼포먼스, 시각예술까지 다양한 장르의 예술가들이 홍대 일대의 소극장과 거리를 무대로 실험적인 작업을 펼칩니다.",
    curatorNote: "완성도보다 지금 막 생겨나는 움직임을 먼저 보고 싶을 때.",
    tags: ["INDIE ARTS", "PERFORMANCE", "OPEN CALL"],
    poster: "spots",
    posterImage: "/editorial/seoul-fringe/zandari-festa.jpg",
    posterCredit: "DAEHANMINDECLINE · WIKIMEDIA COMMONS",
    posterImageType: "referencePhoto",
    latitude: 37.5532,
    longitude: 126.9227,
    sourceLabel: "SEOUL FRINGE",
    sourceUrl: "https://seoulfringefestival.net/",
    verifiedAt: "2026-07-06",
  },
  {
    id: "jamsugyo-ddooddoo-festival",
    title: "차 없는 잠수교 뚜벅뚜벅 축제",
    englishTitle: "CAR-FREE JAMSUGYO DDOODDOO FESTIVAL",
    category: "축제",
    region: "반포",
    district: "서초구",
    venue: "잠수교 · 반포한강공원",
    address: "서울 서초구 반포동 잠수교 일대",
    startDate: "2026-09-06",
    endDate: "2026-10-25",
    hours: "SUN 13:00–21:00",
    price: "무료",
    isFree: true,
    description:
      "매주 일요일 잠수교에서 차를 비우고 보행자에게 다리를 돌려주는 한강 축제의 하반기 시즌입니다. 상반기에만 117만 명이 다녀간 축제로, 미식과 마켓, 거리 공연과 함께 한강 위에서 노을을 맞는 특별한 산책을 제안합니다.",
    tags: ["HAN RIVER", "SUNDAY", "CAR-FREE"],
    poster: "split",
    posterImage: "/editorial/jamsugyo/banpo-bridge.jpg",
    posterCredit: "BRYAN DORROUGH · WIKIMEDIA COMMONS",
    posterImageType: "venuePhoto",
    latitude: 37.5149,
    longitude: 126.9963,
    sourceLabel: "SEOUL FESTA",
    sourceUrl: "http://www.festa-ddooddoo.com/",
    verifiedAt: "2026-07-06",
  },
  {
    id: "do-ho-suh-mmca",
    title: "서도호",
    englishTitle: "DO HO SUH",
    category: "전시",
    region: "삼청",
    district: "종로구",
    venue: "국립현대미술관 서울",
    address: "서울 종로구 삼청로 30",
    startDate: "2026-08-27",
    endDate: "2027-02-09",
    hours: "MON–SUN 10:00–18:00 / WED·SAT –21:00",
    price: "관람료 추후 공지",
    isFree: false,
    description:
      "천으로 지은 집으로 알려진 설치미술가 서도호의 역대 최대 규모 개인전입니다. 대학원 졸업작부터 미공개 신작까지, 그리고 평생에 걸쳐 이어온 드로잉이 국내에서 처음으로 한자리에 공개되며 ‘브릿지 프로젝트’를 비롯한 대형 설치가 서울관을 채웁니다.",
    tags: ["DO HO SUH", "INSTALLATION", "MMCA"],
    poster: "fold",
    posterImage: "/editorial/do-ho-suh/bridging-home.jpg",
    posterCredit: "JULIAN STALLABRASS · WIKIMEDIA COMMONS",
    posterImageType: "relatedWorkPhoto",
    latitude: 37.5786,
    longitude: 126.9804,
    sourceLabel: "MMCA",
    sourceUrl: "https://www.mmca.go.kr/exhibitions/futureProgressList.do",
    verifiedAt: "2026-07-23",
  },
  {
    id: "company-world-affair-piknic",
    title: "컴퍼니: 월드 어페어",
    englishTitle: "COMPANY: WORLD AFFAIR",
    category: "전시",
    region: "회현",
    district: "중구",
    venue: "피크닉",
    address: "서울 중구 퇴계로6가길 30",
    startDate: "2026-04-03",
    endDate: "2026-09-06",
    hours: "TUE–SUN 10:00–18:00 · LAST ENTRY 17:00 · MON CLOSED",
    price: "사전 예매",
    isFree: false,
    description:
      "‘온 세상 만들기의 비밀을 찾아서’를 부제로 내건 디자인 스튜디오 컴퍼니의 전시입니다. 세계 각지의 장인과 협업하며 사물을 만들어 온 여정을 따라, 무엇을 어떻게 만들 것인가라는 질문을 남산 자락의 옛 제약회사 건물에서 펼칩니다.",
    curatorNote: "사물이 만들어지는 방식까지 전시로 보고 싶은 사람에게.",
    tags: ["DESIGN", "CRAFT", "PIKNIC"],
    poster: "synthesis",
    posterImage: "/editorial/company-world-affair/cover.jpg",
    posterCredit: "PHOTO: YUN HO LEE · COURTESY OF COMPANY",
    posterImageType: "installationPhoto",
    latitude: 37.5566,
    longitude: 126.9799,
    sourceLabel: "PIKNIC",
    sourceUrl:
      "https://www.piknic.kr/home/include/board_view.php?SEQ=CATEEXHIBITION0017",
    verifiedAt: "2026-07-23",
  },
  {
    id: "frieze-seoul-2026",
    title: "프리즈 서울 2026",
    englishTitle: "FRIEZE SEOUL 2026",
    category: "축제",
    region: "삼성동",
    district: "강남구",
    venue: "코엑스 C·D홀",
    address: "서울 강남구 영동대로 513",
    startDate: "2026-09-02",
    endDate: "2026-09-05",
    hours: "WED INVITE ONLY / THU 15:00– GENERAL / FRI–SAT 11:00–19:00",
    price: "70,000–90,000원 · 학생 55,000원",
    isFree: false,
    description:
      "30개국 125개 이상 갤러리가 참여하는 아트페어입니다. 재료와 공예를 다루는 ‘머티리얼 프랙티스’와 20세기 작가를 소개하는 ‘스포트라이트’를 운영하며, 같은 기간 코엑스 A·B홀에서 키아프 서울도 열립니다.",
    tags: ["ART FAIR", "FRIEZE WEEK", "KIAF"],
    poster: "grid",
    latitude: 37.5115,
    longitude: 127.0595,
    sourceLabel: "FRIEZE",
    sourceUrl: "https://www.frieze.com/fairs/frieze-seoul/about",
    verifiedAt: "2026-07-23",
  },
  {
    id: "ddp-vacance-music-festival",
    title: "DDP 바캉스: 뮤직페스티벌",
    englishTitle: "DDP VACANCE: MUSIC FESTIVAL",
    category: "축제",
    region: "동대문",
    district: "중구",
    venue: "DDP 어울림광장",
    address: "서울 중구 을지로 281",
    startDate: "2026-07-31",
    endDate: "2026-08-02",
    hours: "FRI–SUN 16:00–23:00",
    price: "무료 · 먹거리 별도",
    isFree: true,
    description:
      "DDP 광장에서 재즈·클래식·포크 공연을 듣고 마켓과 휴식존도 즐기는 무료 야간 축제입니다. 사흘 동안 오후 4시부터 밤 11시까지 열립니다.",
    tags: ["DDP", "OUTDOOR", "FREE"],
    poster: "wave",
    posterImage: "/editorial/ddp-vacance/ddp-night.jpg",
    posterCredit: "LUMOPLANK · WIKIMEDIA COMMONS",
    posterImageType: "venuePhoto",
    latitude: 37.5665,
    longitude: 127.0092,
    sourceLabel: "DDP",
    sourceUrl: "https://ddp.or.kr/?menuno=241",
    verifiedAt: "2026-07-23",
  },
  {
    id: "hangang-bridge-film-festival",
    title: "한강 다리밑 영화제",
    englishTitle: "HANGANG UNDER-THE-BRIDGE FILM FESTIVAL",
    category: "축제",
    region: "여의도",
    district: "영등포구",
    venue: "여의도·뚝섬·광나루한강공원",
    address: "서울 영등포구 여의동로 330 여의도한강공원",
    startDate: "2026-08-08",
    endDate: "2026-08-22",
    hours: "SAT 20:00",
    price: "무료",
    isFree: true,
    description:
      "다리 아래 그늘을 극장으로 삼아 8월의 토요일 저녁마다 한강공원에서 열리는 야외 상영회입니다. 장편 상영과 함께 시민이 직접 찍어 보낸 숏폼 영상 ‘한강 모먼트’ 본선작이 큰 화면에 걸립니다.",
    tags: ["OPEN AIR", "CINEMA", "HAN RIVER"],
    poster: "frame",
    posterImage: "/editorial/hangang-film/yeouido-park.jpg",
    posterCredit: "KALLERNA · WIKIMEDIA COMMONS",
    posterImageType: "venuePhoto",
    latitude: 37.5285,
    longitude: 126.9327,
    sourceLabel: "FUN SEOUL",
    sourceUrl: "https://festival.seoul.go.kr/",
    verifiedAt: "2026-07-23",
  },
  {
    id: "official-hige-dandism-seoul",
    title: "오피셜히게단디즘 아시아 투어 2026 in SEOUL",
    englishTitle: "OFFICIAL HIGE DANDISM ASIA TOUR 2026 IN SEOUL",
    category: "음악",
    region: "올림픽공원",
    district: "송파구",
    venue: "KSPO DOME",
    address: "서울 송파구 올림픽로 424",
    startDate: "2026-08-08",
    endDate: "2026-08-09",
    hours: "SAT–SUN 19:00",
    price: "132,000–165,000원",
    isFree: false,
    description:
      "2년 만에 한국을 다시 찾는 오피셜히게단디즘의 아시아 투어 서울 공연입니다. KSPO DOME에서 이틀간 열리며 스탠딩과 지정석으로 나뉘어 운영됩니다.",
    tags: ["HIGEDAN", "J-POP", "ASIA TOUR"],
    poster: "orbit",
    latitude: 37.5202,
    longitude: 127.1247,
    sourceLabel: "NOL TICKET",
    sourceUrl: "https://tickets.interpark.com/contents/genre/concert",
    verifiedAt: "2026-07-23",
  },
  {
    id: "jack-white-seoul-2026",
    title: "잭 화이트 내한공연",
    englishTitle: "JACK WHITE LIVE 2026 IN SEOUL",
    category: "음악",
    region: "광장동",
    district: "광진구",
    venue: "예스24 라이브홀",
    address: "서울 광진구 구천면로 20",
    startDate: "2026-08-17",
    endDate: "2026-08-17",
    hours: "MON 18:00",
    price: "132,000원",
    isFree: false,
    description:
      "그래미를 12번 받은 잭 화이트가 4년 만에 단독 내한합니다. 화이트 스트라입스 시절의 곡부터 솔로 작업까지, 기타 한 대로 밀어붙이는 로큰롤을 예스24 라이브홀에서 만납니다.",
    curatorNote: "큰 경기장보다 작은 라이브홀에서 봐야 더 선명한 기타 사운드.",
    tags: ["JACK WHITE", "ROCK", "LIVE"],
    poster: "signal",
    posterImage: "/editorial/jack-white/jack-white.jpg",
    posterCredit: "GMCZK · WIKIMEDIA COMMONS",
    posterImageType: "artistPhoto",
    latitude: 37.547,
    longitude: 127.1035,
    sourceLabel: "LIVE NATION KOREA",
    sourceUrl:
      "https://www.livenation.kr/event/jack-white-live-2026-in-seoul-seoul-tickets-edp1672337",
    verifiedAt: "2026-07-23",
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
    posterImage: "/editorial/material-after-image/cover.jpg",
    posterCredit: "AROUND EDITORIAL IMAGE · AI-GENERATED",
    posterImageType: "editorialImage",
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
    posterImage: "/editorial/museum-without-walls/cover.jpg",
    posterCredit: "AROUND EDITORIAL IMAGE · AI-GENERATED",
    posterImageType: "editorialImage",
    latitude: 37.5804,
    longitude: 126.9734,
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
    posterImage: "/editorial/paper-city/cover.jpg",
    posterCredit: "AROUND EDITORIAL IMAGE · AI-GENERATED",
    posterImageType: "editorialImage",
    latitude: 37.5688,
    longitude: 126.9302,
  },
  {
    id: "seoul-photo-festival-comeback-home",
    title: "2026 서울사진축제: 컴백홈",
    englishTitle: "2026 SEOUL PHOTO FESTIVAL: COMEBACK HOME",
    category: "축제",
    region: "창동",
    district: "도봉구",
    venue: "서울시립 사진미술관",
    address: "서울 도봉구 마들로13길 68",
    startDate: "2026-04-09",
    endDate: "2026-06-14",
    hours: "TUE–FRI 10:00–20:00 / WEEKEND 10:00–19:00",
    price: "무료",
    isFree: true,
    description:
      "5년 만에 돌아온 서울사진축제입니다. 스물세 명의 작가가 사진, 설치, 영상으로 집을 관계와 기억, 이동이 교차하는 장소로 다시 바라봅니다.",
    tags: ["PHOTOGRAPHY", "23 ARTISTS", "FREE"],
    poster: "frame",
    latitude: 37.6624476,
    longitude: 127.0448598,
    sourceLabel: "SeMA",
    sourceUrl:
      "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1515171",
    verifiedAt: "2026-06-11",
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

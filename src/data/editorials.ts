import type { Locale } from "../types";
import { eventEditorialsEn } from "./editorials.en";

export interface EditorialFact {
  label: string;
  value: string;
}

export interface EditorialTimelineItem {
  marker: string;
  title: string;
  description: string;
}

export interface EditorialHighlight {
  label: string;
  title: string;
  meta?: string;
  description: string;
  url?: string;
}

export interface EditorialImage {
  src: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl: string;
}

export interface EditorialNote {
  label: string;
  title: string;
  description: string;
}

export interface EditorialSource {
  label: string;
  url: string;
}

export interface EventEditorial {
  typeLabel: string;
  heading: string;
  introduction: string;
  facts: EditorialFact[];
  timelineLabel: string;
  timeline: EditorialTimelineItem[];
  highlightsLabel: string;
  highlights: EditorialHighlight[];
  gallery?: EditorialImage[];
  locationNote: string;
  notes: EditorialNote[];
  sources: EditorialSource[];
}

export const eventEditorials: Record<string, EventEditorial> = {
  "inside-other-spaces": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "눈으로 보는 전시에서, 몸으로 통과하는 환경으로.",
    introduction:
      "이 전시는 조각이나 회화를 독립된 물체로 바라보는 대신, 관람자가 직접 들어가고 움직이며 완성하는 ‘환경’에 주목합니다. 1956년부터 1976년 사이 여성 작가 11인이 만든 선구적 작업을 통해 빛, 색, 소리와 신체가 하나의 작품이 되는 순간을 다시 살핍니다.",
    facts: [
      { label: "ARTISTS", value: "여성 작가 11인" },
      { label: "HISTORICAL RANGE", value: "1956–1976" },
      { label: "FORMAT", value: "환경 · 설치 · 공감각" },
      { label: "VENUE", value: "블랙박스 · 그라운드갤러리" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1956–1976",
        title: "환경 작업의 실험",
        description:
          "작품과 전시장의 경계를 지우고 관람자의 신체를 작업 안으로 끌어들이는 시도가 이어졌습니다.",
      },
      {
        marker: "NOW",
        title: "미술사에서 비껴난 이름들",
        description:
          "오랫동안 충분히 조명받지 못한 여성 작가들의 실천을 동시대의 시선으로 다시 연결합니다.",
      },
      {
        marker: "2026",
        title: "리움에서 재구성",
        description:
          "블랙박스와 그라운드갤러리를 오가며 작품, 건축, 관람자의 움직임이 만드는 관계를 경험합니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / BODY",
        title: "관람자의 신체",
        description:
          "작품 앞에 멈추는 대신 내부로 들어가고, 둘러 걷고, 시점을 바꾸며 공간의 일부가 되어보세요.",
      },
      {
        label: "02 / SENSE",
        title: "색과 빛의 밀도",
        description:
          "형태뿐 아니라 빛의 변화, 표면의 반사, 거리와 방향에 따라 달라지는 감각을 관찰합니다.",
      },
      {
        label: "03 / HISTORY",
        title: "누락된 미술사",
        description:
          "왜 이 작업들이 기존 미술사 서술에서 오래 비껴 있었는지 전시의 시대적 배경과 함께 읽어볼 수 있습니다.",
      },
    ],
    locationNote:
      "리움미술관 블랙박스와 그라운드갤러리에서 열립니다. 공간을 직접 통과하는 작품이 포함돼 있어 여유 있는 관람 시간을 잡는 편이 좋습니다.",
    notes: [
      {
        label: "RESERVATION",
        title: "사전 예약 확인",
        description:
          "리움 공식 예매 페이지에서 관람일과 회차를 확인하세요. 현장 상황에 따라 입장이 제한될 수 있습니다.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description:
          "관람 시간은 화요일부터 일요일 오전 10시부터 오후 6시까지입니다.",
      },
    ],
    sources: [
      {
        label: "LEEUM EXHIBITION",
        url: "https://www.leeumhoam.org/leeum/exhibition/93?params=Y",
      },
    ],
  },
  "hyundai-super-concert-28": {
    typeLabel: "ARTIST PROFILE",
    heading: "어두운 R&B에서 스타디움 팝의 중심으로.",
    introduction:
      "위켄드(The Weeknd)는 R&B를 기반으로 전자음악, 팝, 힙합의 경계를 넓혀 온 캐나다 싱어송라이터이자 프로듀서입니다. 극적인 캐릭터와 영상 서사, 거대한 무대 연출을 앨범 단위로 연결하며 동시대 팝의 가장 영향력 있는 이름 가운데 하나가 됐습니다.",
    facts: [
      { label: "KOREA", value: "두 번째 내한 · 8년 만" },
      { label: "SHOWS", value: "2026.10.07–08 · 2회" },
      { label: "OPENING", value: "Creepy Nuts · 18:45" },
      { label: "AGE", value: "만 19세 이상" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2011",
        title: "초기 믹스테이프 3부작",
        description:
          "어둡고 영화적인 얼터너티브 R&B 사운드로 익명에 가까운 방식으로 주목받기 시작했습니다.",
      },
      {
        marker: "2015",
        title: "글로벌 팝으로의 확장",
        description:
          "언더그라운드 R&B의 어두운 감각을 선명한 팝 멜로디와 결합하며 세계적인 청중에게 도달했습니다.",
      },
      {
        marker: "2019–2020",
        title: "After Hours 시대",
        description:
          "신스팝과 비극적 캐릭터 서사를 결합해 커리어를 대표하는 시대를 만들었습니다.",
      },
      {
        marker: "2025",
        title: "Hurry Up Tomorrow",
        description:
          "정규 6집을 발표하며 ‘위켄드’라는 캐릭터 이후의 커리어 전환을 예고했습니다.",
      },
      {
        marker: "2026",
        title: "두 번째 한국 공연",
        description:
          "2018년 첫 내한 이후 8년 만에 고양종합운동장 스타디움 무대로 돌아옵니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2019",
        title: "Blinding Lights",
        url: "https://music.apple.com/kr/album/blinding-lights/1505683705?i=1505683988",
        meta: "After Hours",
        description:
          "80년대 신스팝의 질감과 즉각적인 멜로디를 결합한 위켄드의 대표곡입니다.",
      },
      {
        label: "TRACK / 2016",
        title: "Starboy",
        url: "https://music.apple.com/kr/album/starboy-feat-daft-punk/1677005169?i=1677005489",
        meta: "Starboy",
        description:
          "Daft Punk와의 협업으로 팝스타라는 자신의 이미지와 욕망을 날카롭게 재구성했습니다.",
      },
      {
        label: "TRACK / 2015",
        title: "Can’t Feel My Face",
        url: "https://music.apple.com/kr/album/cant-feel-my-face/1440826239?i=1440826389",
        meta: "Beauty Behind the Madness",
        description:
          "마이클 잭슨을 연상시키는 팝 훅과 어두운 은유가 동시에 작동하는 전환점 같은 싱글입니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/the-weeknd/weeknd.jpg",
        alt: "브라이언 지프가 촬영한 위켄드 포트레이트",
        caption: "The Weeknd",
        credit: "Image: Brian Ziff · Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:The_Weeknd_Portrait_by_Brian_Ziff.jpg",
      },
      {
        src: "/editorial/the-weeknd/stage.jpg",
        alt: "붉은 조명 아래 무대에 선 위켄드",
        caption: "After Hours Til Dawn의 극적인 스타디움 연출",
        credit: "Image: Hyundai Card DIVE",
        sourceUrl:
          "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
      },
    ],
    locationNote:
      "고양종합운동장 주경기장에서 열리는 야외 스타디움 공연입니다. 대화역 3번 출구에서 도보로 이동할 수 있으며, 공연 종료 뒤 혼잡을 고려해 귀가 동선을 미리 정하는 편이 좋습니다.",
    notes: [
      {
        label: "KOREA RETURN",
        title: "8년 만의 두 번째 내한",
        description:
          "2018년 첫 한국 공연 이후 열리는 두 번째 내한 무대입니다. 이번에는 이틀간 스타디움 규모로 진행됩니다.",
      },
      {
        label: "RUNNING ORDER",
        title: "크리피 너츠 18:45 / 위켄드 19:45",
        description:
          "오프닝 아티스트 공연이 본 공연보다 한 시간 먼저 시작됩니다. 입장과 보안 검색 시간을 넉넉히 잡으세요.",
      },
      {
        label: "TICKET",
        title: "공식 페이지 기준 매진",
        description:
          "비공식 재판매 경로의 가격과 좌석 정보는 신뢰하기 어렵습니다. 변경·추가 판매는 공식 예매처 공지를 확인하세요.",
      },
    ],
    sources: [
      {
        label: "HYUNDAI CARD DIVE",
        url: "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
      },
    ],
  },
  "silica-gel-ballad-of-you": {
    typeLabel: "ARTIST PROFILE",
    heading: "소리와 이미지를 함께 설계하는 네 명의 창작 집단.",
    introduction:
      "실리카겔은 김한주, 김춘추, 김건재, 최웅희로 구성된 한국의 사이키델릭 록 밴드입니다. 대학 동문들의 시청각 프로젝트에서 출발한 만큼 음악, 영상, 무대 연출을 분리하지 않고 하나의 감각으로 설계해 왔습니다.",
    facts: [
      { label: "MEMBERS", value: "4인조 밴드" },
      { label: "START", value: "2013년 프로젝트 시작" },
      { label: "TOUR", value: "첫 아시아 투어" },
      { label: "SEOUL", value: "KSPO DOME · 2회" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2015–2017",
        title: "데뷔와 올해의 신인",
        description:
          "첫 EP와 정규 1집을 발표하고 EBS 헬로루키 대상, 한국대중음악상 올해의 신인을 수상했습니다.",
      },
      {
        marker: "2020",
        title: "Kyo181로 복귀",
        description:
          "군 복무에 따른 공백 뒤 4인조로 재편해 새로운 사운드의 출발을 알렸습니다.",
      },
      {
        marker: "2021–2023",
        title: "두 번째 정규 앨범으로의 확장",
        description:
          "연속된 싱글과 협업, 시청각 작업을 통해 두 번째 정규 앨범의 세계와 밴드의 대중적 기반을 넓혔습니다.",
      },
      {
        marker: "2024",
        title: "한국대중음악상 올해의 음악인",
        description:
          "장르적 실험과 대중적 확장을 동시에 인정받으며 올해의 음악인에 선정됐습니다.",
      },
      {
        marker: "2026",
        title: "첫 아시아 투어",
        description:
          "밴드의 첫 아시아 투어를 KSPO DOME 서울 공연에서 시작합니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2022",
        title: "NO PAIN",
        url: "https://music.apple.com/kr/album/no-pain/1865062012?i=1865062183",
        meta: "최우수 모던록 노래",
        description:
          "질주하는 밴드 사운드와 선언적인 후렴이 결합된 곡으로 실리카겔의 대중적 전환점이 됐습니다.",
      },
      {
        label: "TRACK / 2023",
        title: "Tik Tak Tok",
        url: "https://music.apple.com/kr/album/tik-tak-tok-feat-so-yoon/1836310183?i=1836310305",
        meta: "feat. So!YoON!",
        description:
          "날카로운 기타 리프와 황소윤의 목소리가 교차하며 밴드의 리듬 감각과 확장성을 보여줍니다.",
      },
      {
        label: "TRACK / 2021",
        title: "Desert Eagle",
        url: "https://music.apple.com/kr/album/desert-eagle/1703562324?i=1703562329",
        meta: "최우수 모던록 노래",
        description:
          "공백기 이후 달라진 4인조 실리카겔의 응축된 연주와 사이키델릭한 전개를 들을 수 있습니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/silica-gel/group-2026.jpg",
        alt: "푸른 하늘을 배경으로 선 실리카겔 네 멤버",
        caption: "Silica Gel, 2026",
        credit: "Image: CAM",
        sourceUrl: "https://v.daum.net/v/20260602164500893",
      },
      {
        src: "/editorial/silica-gel/live-2025.jpg",
        alt: "푸른 조명과 대형 비주얼 앞에서 연주하는 실리카겔",
        caption: "Syn.THE.Size X, 2025",
        credit: "Image: Silica Gel Official",
        sourceUrl: "https://www.youtube.com/watch?v=KaYT_O0CwLE",
      },
    ],
    locationNote:
      "올림픽공원 KSPO DOME에서 이틀간 열립니다. 스탠딩과 지정석의 입장 방식이 다를 수 있으므로 예매한 권종의 번호와 입장 공지를 확인하세요.",
    notes: [
      {
        label: "FIRST TOUR",
        title: "실리카겔의 첫 아시아 투어",
        description:
          "서울 공연은 단독 공연을 넘어 이후 아시아 도시로 이어지는 투어의 출발점입니다.",
      },
      {
        label: "TWO NIGHTS",
        title: "토요일 18:00 / 일요일 17:00",
        description:
          "날짜별 시작 시간이 다릅니다. 모바일 티켓과 입장 대기 시간을 포함해 방문 일정을 확인하세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26007703",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/kr/artist/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94/1031084591",
      },
      {
        label: "KOREAN MUSIC AWARDS",
        url: "https://koreanmusicawards.com/project/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94silica-gel-no-pain/",
      },
    ],
  },
  "cortis-put-your-phone-down-incheon": {
    typeLabel: "ARTIST PROFILE",
    heading: "무대 안팎의 제작 과정에 직접 참여하는 다섯 명의 크리에이터 크루.",
    introduction:
      "CORTIS는 MARTIN, JAMES, JUHOON, SEONGHYEON, KEONHO로 구성된 BIGHIT MUSIC의 5인조 그룹입니다. 멤버 전원이 음악, 안무와 영상 제작에 참여하며 정해진 역할보다 공동 창작을 그룹의 중심에 둡니다. 이번 인천 공연은 데뷔 후 처음 여는 투어의 출발점입니다.",
    facts: [
      { label: "MEMBERS", value: "5인조 · 공동 창작" },
      { label: "DEBUT", value: "2025년" },
      { label: "TOUR", value: "첫 헤드라인 투어" },
      { label: "AGE", value: "9세 이상" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2025",
        title: "BIGHIT MUSIC에서 데뷔",
        description:
          "음악과 퍼포먼스, 영상 제작에 멤버가 직접 참여하는 크리에이터 크루의 방향을 선보였습니다.",
      },
      {
        marker: "2025",
        title: "첫 EP로 확장",
        description:
          "거친 기타와 힙합 프로덕션, 밝은 팝 훅을 한 앨범 안에 결합하며 팀의 넓은 제작 스펙트럼을 드러냈습니다.",
      },
      {
        marker: "2026",
        title: "글로벌 무대로의 이동",
        description:
          "해외 대형 무대와 두 번째 EP를 거치며 데뷔 첫해의 에너지를 더 큰 공연 형식으로 넓혔습니다.",
      },
      {
        marker: "2026.07",
        title: "첫 투어 개막",
        description:
          "인천 이틀 공연을 시작으로 북미와 일본까지 이어지는 첫 헤드라인 투어에 나섭니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2025",
        title: "What You Want",
        url: "https://music.apple.com/kr/album/what-you-want/1832031331?i=1832031341",
        meta: "COLOR OUTSIDE THE LINES",
        description:
          "사이키델릭 록의 기타와 묵직한 트랩 비트를 결합해 CORTIS의 장르 혼합 방식을 선명하게 보여줍니다.",
      },
      {
        label: "TRACK / 2026",
        title: "REDRED",
        url: "https://music.apple.com/kr/album/redred/1887671065?i=1887671067",
        meta: "GREENGREEN",
        description:
          "반복적인 훅과 빠른 에너지, 직접적인 퍼포먼스 감각이 두 번째 활동기의 색을 압축합니다.",
      },
      {
        label: "TRACK / 2026",
        title: "TNT",
        url: "https://music.apple.com/kr/album/tnt/1887671065?i=1887671066",
        meta: "GREENGREEN",
        description:
          "멤버들의 제작 참여와 시각적 연출이 음악의 속도감과 맞물리는 곡입니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/cortis/greengreen.png",
        alt: "CORTIS의 두 번째 EP GREENGREEN 이미지",
        caption: "GREENGREEN, 2026",
        credit: "Image: Apple Music",
        sourceUrl: "https://music.apple.com/kr/artist/cortis/1831651635",
      },
    ],
    locationNote:
      "인스파이어 아레나는 인천 영종도에 있는 대형 공연장입니다. 공항철도와 리조트 셔틀, 공연 전용 셔틀의 운행 시간과 마지막 귀가편을 함께 확인하는 편이 좋습니다.",
    notes: [
      {
        label: "TICKET OPEN",
        title: "일반예매 2026년 6월 18일 20:00",
        description:
          "국내 선예매는 6월 15일, 일반예매는 6월 18일에 시작합니다. 일정 변경 여부는 공식 예매 페이지에서 다시 확인하세요.",
      },
      {
        label: "ENTRY",
        title: "모바일 티켓 · 얼굴패스 적용",
        description:
          "실물 티켓은 제공되지 않으며 예매자와 관람자 정보 확인이 필요합니다. 공연장 이동 전에 모바일 티켓을 미리 열어두는 편이 안전합니다.",
      },
      {
        label: "ACCESS",
        title: "영종도 귀가 동선 확인",
        description:
          "토요일과 일요일의 시작 시간이 다릅니다. 셔틀 판매와 대중교통 막차 시간까지 포함해 방문 일정을 잡으세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26007886",
      },
      {
        label: "BIGHIT MUSIC TOUR",
        url: "https://ibighit.com/en/cortis/tour/",
      },
      {
        label: "BIGHIT MUSIC PROFILE",
        url: "https://ibighit.com/en/cortis/profile/",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/kr/artist/cortis/1831651635",
      },
    ],
  },
  "sienna-spiro-my-house-seoul": {
    typeLabel: "ARTIST PROFILE",
    heading: "오래된 소울의 질감을 지금의 언어로 밀어붙이는 목소리.",
    introduction:
      "시에나 스파이로는 런던 출신 싱어송라이터로, 재즈와 소울의 프레이징을 현대적인 팝 송라이팅과 연결합니다. 절제된 피아노에서 시작해 스트링과 보컬이 크게 확장되는 드라마틱한 구성이 강점이며, ‘My House Tour’ 서울 공연은 그의 첫 한국 단독 무대입니다.",
    facts: [
      { label: "KOREA", value: "첫 내한공연" },
      { label: "FROM", value: "London · 2005" },
      { label: "FORMAT", value: "My House Tour" },
      { label: "AGE", value: "전체관람가" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2021",
        title: "온라인에서 시작한 자작곡",
        description:
          "자작곡과 커버 영상을 공개하며 허스키한 음색과 정교한 보컬 프레이징으로 이름을 알리기 시작했습니다.",
      },
      {
        marker: "2024",
        title: "정식 데뷔와 영국 차트 진입",
        description:
          "첫 싱글을 발표한 뒤 두 번째 싱글로 영국 오피셜 싱글 차트 톱 50에 진입했습니다.",
      },
      {
        marker: "2025",
        title: "첫 EP와 글로벌 돌파",
        description:
          "절제된 편곡과 감정적인 송라이팅을 담은 첫 EP 이후 영국과 미국 차트에서 빠르게 존재감을 넓혔습니다.",
      },
      {
        marker: "2026",
        title: "첫 정규 앨범과 월드 투어",
        description:
          "첫 스튜디오 앨범 발표를 앞두고 북미, 아시아, 호주와 유럽을 잇는 가장 큰 규모의 투어를 발표했습니다.",
      },
      {
        marker: "2027.01",
        title: "서울 첫 단독 공연",
        description:
          "명화라이브홀에서 한국 관객과 처음 만나는 단독 공연을 엽니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2025",
        title: "Die On This Hill",
        url: "https://music.apple.com/kr/album/die-on-this-hill/1841769601?i=1841769602",
        meta: "UK TOP 10",
        description:
          "피아노와 스트링이 점차 커지는 구성 위로 거친 음색과 폭발적인 후반부가 겹치는 대표곡입니다.",
      },
      {
        label: "TRACK / 2026",
        title: "The Visitor",
        url: "https://music.apple.com/kr/album/the-visitor/6769552402?i=6769552688",
        meta: "VISITOR",
        description:
          "정교한 프레이징과 절제된 긴장감으로 첫 정규 앨범의 방향을 보여주는 싱글입니다.",
      },
      {
        label: "TRACK / 2024",
        title: "MAYBE.",
        url: "https://music.apple.com/kr/album/maybe/1793196922?i=1793197040",
        meta: "SINK NOW, SWIM LATER",
        description:
          "초기 활동기의 섬세한 감정 표현과 재즈 보컬의 영향을 가장 가까이 들을 수 있는 곡입니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/sienna-spiro/profile.jpg",
        alt: "분홍색 재킷을 입은 시에나 스파이로 공식 포트레이트",
        caption: "Sienna Spiro",
        credit: "Image: Sienna Spiro official",
        sourceUrl: "https://www.officialsiennaspiro.com/",
      },
      {
        src: "/editorial/sienna-spiro/apple.png",
        alt: "2026년 시에나 스파이로 공식 아티스트 이미지",
        caption: "Sienna Spiro, 2026",
        credit: "Image: Apple Music artist profile",
        sourceUrl:
          "https://music.apple.com/us/artist/sienna-spiro/1745678083",
      },
    ],
    locationNote:
      "명화라이브홀은 영등포시장역과 신길역 사이에 있는 라이브 공연장입니다. 스탠딩과 지정석의 입장 동선이 다를 수 있어 예매한 권종과 현장 번호표 안내를 확인해야 합니다.",
    notes: [
      {
        label: "FIRST KOREA SHOW",
        title: "시에나 스파이로의 첫 한국 단독 공연",
        description:
          "페스티벌이나 합동 무대가 아닌 단독 투어 일정으로 한국 관객을 처음 만나는 공연입니다.",
      },
      {
        label: "TICKET OPEN",
        title: "일반예매 2026년 6월 18일 10:00",
        description:
          "아티스트 선예매는 6월 16일, 일반예매는 6월 18일에 시작하며 1인 4매까지 예매할 수 있습니다.",
      },
      {
        label: "SEATING",
        title: "스탠딩석 · 지정석 동일가",
        description:
          "두 권종 모두 110,000원이며 전체관람가입니다. 세부 입장 순서와 좌석 배치는 공식 예매 공지를 확인하세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET OPEN NOTICE",
        url: "https://tickets.interpark.com/contents/notice/detail/14159",
      },
      {
        label: "NOL TICKET",
        url: "https://tickets.interpark.com/goods/26008451",
      },
      {
        label: "SIENNA SPIRO OFFICIAL",
        url: "https://www.officialsiennaspiro.com/",
      },
      {
        label: "APPLE MUSIC ARTIST PROFILE",
        url: "https://music.apple.com/us/artist/sienna-spiro/1745678083",
      },
    ],
  },
  "post-malone-seoul": {
    typeLabel: "ARTIST PROFILE",
    heading: "힙합, 팝, 록, 컨트리를 한 목소리 안에 겹치는 스타.",
    introduction:
      "포스트 말론은 장르의 경계를 느슨하게 넘나드는 보컬과 멜로디로 세계적인 대중성을 만든 미국의 싱어송라이터입니다. 2024년에는 ‘F-1 Trillion’을 통해 컨트리 음악으로 활동 반경을 넓혔고, 이번 스타디움 투어는 그 변화와 기존 히트곡을 한 무대에 연결합니다.",
    facts: [
      { label: "KOREA", value: "2023년 이후 3년 만" },
      { label: "GUEST", value: "Don Toliver" },
      { label: "AGE", value: "만 19세 이상" },
      { label: "FORMAT", value: "스타디움 월드 투어" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2015",
        title: "데뷔 싱글의 돌파",
        description:
          "느슨한 보컬과 힙합 프로덕션을 결합한 데뷔 싱글로 빠르게 이름을 알렸습니다.",
      },
      {
        marker: "2016",
        title: "Stoney",
        description:
          "힙합과 록, 팝의 정서를 뒤섞은 첫 정규 앨범으로 장르 혼합의 방향을 확립했습니다.",
      },
      {
        marker: "2018–2019",
        title: "두 장의 앨범으로 확장",
        description:
          "힙합에서 팝 록까지 넓어진 멜로디와 협업으로 글로벌 팝의 중심에 자리 잡았습니다.",
      },
      {
        marker: "2024",
        title: "F-1 Trillion",
        description:
          "컨트리 뮤지션들과 협업한 정규 앨범으로 음악적 문법과 라이브 무대의 폭을 넓혔습니다.",
      },
      {
        marker: "2026",
        title: "한국 재방문",
        description:
          "2023년 첫 내한에서 약 3만 명의 관객을 만난 뒤 3년 만에 스타디움 공연으로 돌아옵니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2015",
        title: "White Iverson",
        url: "https://music.apple.com/kr/album/white-iverson/1440888125?i=1440888729",
        meta: "Stoney",
        description:
          "포스트 말론 특유의 나른한 멜로디와 랩의 경계를 처음 대중에게 각인한 데뷔곡입니다.",
      },
      {
        label: "TRACK / 2018",
        title: "Sunflower",
        url: "https://music.apple.com/kr/album/sunflower-spider-man-into-the-spider-verse/1445949265?i=1445949267",
        meta: "with Swae Lee",
        description:
          "가볍고 선명한 멜로디로 세대와 장르를 넘어 사랑받은 대표적인 팝 협업곡입니다.",
      },
      {
        label: "TRACK / 2019",
        title: "Circles",
        url: "https://music.apple.com/kr/album/circles/1477880265?i=1477880561",
        meta: "Hollywood’s Bleeding",
        description:
          "기타 중심의 부드러운 팝 록 사운드가 포스트 말론의 넓은 음악적 스펙트럼을 보여줍니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/post-malone/f1-trillion.jpg",
        alt: "호수에 수직으로 잠긴 픽업트럭이 보이는 앨범 이미지",
        caption: "F-1 Trillion, 2024",
        credit: "Image: Post Malone official",
        sourceUrl: "https://www.postmalone.com/",
      },
    ],
    locationNote:
      "고양종합운동장 주경기장은 3호선 대화역 3번 출구에서 도보 약 4분 거리입니다. 대형 공연 당일에는 역과 출구가 혼잡할 수 있습니다.",
    notes: [
      {
        label: "KOREA RETURN",
        title: "첫 내한 이후 3년 만",
        description:
          "2023년 첫 한국 공연에서 약 3만 명을 만난 뒤 규모를 스타디움으로 넓혀 돌아옵니다.",
      },
      {
        label: "SPECIAL GUEST",
        title: "Don Toliver 참여",
        description:
          "투어의 스페셜 게스트로 Don Toliver가 함께합니다. 세부 러닝 오더는 공연 전 공식 공지를 확인하세요.",
      },
      {
        label: "AGE LIMIT",
        title: "만 19세 이상 관람가",
        description:
          "입장 시 본인 확인과 연령 확인이 진행될 수 있으므로 예매처의 신분증 규정을 반드시 확인하세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26004944",
      },
      {
        label: "POST MALONE OFFICIAL",
        url: "https://www.postmalone.com/",
      },
      {
        label: "NOL WORLD GUIDE",
        url: "https://world.nol.com/en/content/festas/019d3ceb-1b8a-7935-a619-d60f6618d1dc",
      },
    ],
  },
  "javier-sola-one-year": {
    typeLabel: "ARTIST PROFILE",
    heading: "사진에서 출발해, 인물의 침묵과 기분을 다시 그리는 화가.",
    introduction:
      "자비 솔라(Xevi Solà)는 패션 화보, 머그샷, 영화 장면처럼 이미 존재하는 이미지를 조합해 새로운 인물과 상황을 만드는 스페인 화가입니다. 정확한 닮음보다 작은 몸짓과 표정, 비어 있는 배경이 만드는 심리적 긴장에 집중합니다.",
    facts: [
      { label: "BORN", value: "1969 · 스페인" },
      { label: "BASED", value: "Girona" },
      { label: "EDUCATION", value: "University of Barcelona · 2007" },
      { label: "MEDIUM", value: "Oil · Acrylic on canvas" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "1969",
        title: "Santa Coloma de Farners 출생",
        description:
          "스페인 카탈루냐 지역에서 태어나 현재 지로나를 기반으로 작업합니다.",
      },
      {
        marker: "2007",
        title: "바르셀로나대학교 미술대학 졸업",
        description:
          "회화적 재현과 인물의 심리를 탐구하는 작업의 기반을 다졌습니다.",
      },
      {
        marker: "2010",
        title: "Biennale d’Art of Girona",
        description:
          "지로나 비엔날레에 작품이 소개되며 전시 활동의 범위를 넓혔습니다.",
      },
      {
        marker: "2014",
        title: "Young Art Award",
        description:
          "Taipei Contemporary Art Fair에서 Young Art Award를 수상했습니다.",
      },
      {
        marker: "2026",
        title: "어느 한 해 — 완벽한 날들",
        description:
          "서울에서 일상의 장면과 인물에 축적된 시간과 감정을 소개합니다.",
      },
    ],
    highlightsLabel: "SELECTED WORKS",
    highlights: [
      {
        label: "WORK / 2024",
        title: "Desert",
        meta: "Acrylic on canvas · 180 × 220 cm",
        description:
          "수영장 주변의 인물과 열린 공간을 낯선 색채로 재구성해 평범한 장면에 불안한 서사를 만듭니다.",
      },
      {
        label: "WORK / 2024",
        title: "Behind the Curtains",
        meta: "Acrylic on canvas · 130 × 162 cm",
        description:
          "붉은 바닥과 인물들의 애매한 관계가 사건 직전이나 직후 같은 심리적 긴장을 남깁니다.",
      },
      {
        label: "WORK / 2025",
        title: "Bro",
        meta: "Acrylic on canvas · 116 × 89 cm",
        description:
          "현실적인 인물과 돌연한 동물 이미지를 결합해 친밀함과 낯섦을 동시에 끌어냅니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/xevi-sola/studio.jpg",
        alt: "지로나 작업실에 앉아 있는 자비 솔라",
        caption: "Xevi Solà in his studio, Girona, 2025",
        credit: "© Enrique Palacio / Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/desert.jpg",
        alt: "수영장 주변 인물이 그려진 자비 솔라의 회화",
        caption: "Desert, 2024",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/behind-curtain.jpg",
        alt: "붉은 공간에 여러 인물이 있는 자비 솔라의 회화",
        caption: "Behind the Curtains, 2024",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
      {
        src: "/editorial/xevi-sola/bro.jpg",
        alt: "인물과 개코원숭이를 그린 자비 솔라의 회화",
        caption: "Bro, 2025",
        credit: "Image: Opera Gallery",
        sourceUrl: "https://www.operagallery.com/artist/xevi-sola",
      },
    ],
    locationNote:
      "예술의전당 서예박물관에서 열립니다. 마지막 입장은 오후 6시이며 매주 월요일은 휴관합니다.",
    notes: [
      {
        label: "EARLY BIRD",
        title: "8월 30일까지 9,000원",
        description:
          "공식 예매 페이지 기준 얼리버드 가격이며 이후 일반 관람료는 15,000원입니다.",
      },
      {
        label: "VIEWING POINT",
        title: "표정 대신 몸짓을 보기",
        description:
          "인물의 시선, 손의 위치, 서로 사이의 거리와 비어 있는 배경을 연결해 장면의 이야기를 상상해보세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26008092",
      },
      {
        label: "OPERA GALLERY ARTIST PROFILE",
        url: "https://www.operagallery.com/artist/xevi-sola",
      },
    ],
  },
  "big-naughty-icn-ntg": {
    typeLabel: "ARTIST PROFILE",
    heading: "랩과 멜로디 사이, 낭만을 자기 언어로 만드는 뮤지션.",
    introduction:
      "BIG Naughty는 힙합의 리듬 위에 R&B와 팝의 멜로디, 일상적인 감정을 유연하게 얹는 싱어송라이터입니다. ‘ICN > NTG’는 공항과 탑승의 이미지를 콘서트 전체의 이야기로 확장한 장충체육관 단독 공연입니다.",
    facts: [
      { label: "SHOW", value: "단독 콘서트" },
      { label: "DURATION", value: "180분" },
      { label: "AGE", value: "8세 이상" },
      { label: "TICKET", value: "모바일 티켓" },
    ],
    timelineLabel: "CAREER",
    timeline: [
      {
        marker: "2019",
        title: "Show Me the Money 8",
        description:
          "개성 있는 랩과 멜로디 감각을 알리며 대중의 주목을 받기 시작했습니다.",
      },
      {
        marker: "2021",
        title: "Bucket List",
        description:
          "첫 정규 앨범에서 힙합, R&B, 팝을 오가는 송라이팅과 협업의 폭을 보여줬습니다.",
      },
      {
        marker: "2022",
        title: "낭만",
        description:
          "사랑과 청춘의 감정을 전면에 둔 앨범으로 BIG Naughty 특유의 서정성을 분명히 했습니다.",
      },
      {
        marker: "2026",
        title: "ICN > NTG",
        description:
          "장충체육관을 하나의 출발 터미널처럼 구성한 3시간 규모의 단독 공연을 엽니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK",
        title: "10시 반 크리스피 앞",
        url: "https://music.apple.com/kr/album/10%EC%8B%9C-%EB%B0%98-%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%94%BC-%EC%95%9E-feat-%EB%8B%A4%EC%9D%B4%EB%82%98%EB%AF%B9-%EB%93%80%EC%98%A4/6771244767?i=6771244768",
        meta: "feat. 다이나믹 듀오",
        description:
          "구체적인 장소와 시간에서 출발하는 서사에 선배 듀오의 호흡을 더한 곡입니다.",
      },
      {
        label: "TRACK",
        title: "Vancouver",
        url: "https://music.apple.com/kr/album/vancouver/1622167330?i=1622167332",
        description:
          "여행지의 이름과 관계의 기억을 감각적인 멜로디로 연결한 대표곡입니다.",
      },
      {
        label: "TRACK",
        title: "Lovey Dovey",
        url: "https://music.apple.com/kr/album/lovey-dovey-feat-meenoi/1622167330?i=1622167331",
        meta: "Solo Ver.",
        description:
          "가볍고 친근한 후렴 안에 BIG Naughty의 보컬과 팝 감각이 선명하게 드러납니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/big-naughty/profile.jpg",
        alt: "조명이 흐릿한 공간에서 카메라를 바라보는 BIG Naughty",
        caption: "BIG Naughty",
        credit: "Image: H1GHR MUSIC",
        sourceUrl: "https://en.h1ghrmusic.com/bignaughty",
      },
      {
        src: "/editorial/big-naughty/portrait.jpg",
        alt: "검은 의상을 입은 BIG Naughty 공식 프로필",
        caption: "BIG Naughty official profile",
        credit: "Image: H1GHR MUSIC",
        sourceUrl: "https://en.h1ghrmusic.com/bignaughty",
      },
    ],
    locationNote:
      "장충체육관에서 오후 5시에 시작하는 180분 공연입니다. 스탠딩과 지정석 동선이 나뉠 수 있어 모바일 티켓의 게이트 안내를 확인하세요.",
    notes: [
      {
        label: "TICKET OPEN",
        title: "2026년 6월 15일 20:00",
        description:
          "현재 기준 일반 예매 오픈 예정 시각입니다. 예매 일정이 변경될 수 있으므로 멜론티켓 공지를 확인하세요.",
      },
      {
        label: "MOBILE ONLY",
        title: "모바일 티켓으로 운영",
        description:
          "공연 당일 사용할 기기의 배터리와 로그인 상태, 본인 확인에 필요한 정보를 미리 준비하세요.",
      },
      {
        label: "CONCEPT",
        title: "공항과 탑승을 모티프로 한 3시간",
        description:
          "포스터와 공연명이 제시하는 이동의 서사가 무대 구성과 세트리스트에 어떻게 연결되는지가 관람 포인트입니다.",
      },
    ],
    sources: [
      {
        label: "MELON TICKET",
        url: "https://ticket.melon.com/performance/index.htm?prodId=213406",
      },
      {
        label: "H1GHR MUSIC ARTIST PROFILE",
        url: "https://en.h1ghrmusic.com/bignaughty",
      },
    ],
  },
  audeum: {
    typeLabel: "SPACE / EXHIBITION PROFILE",
    heading: "기기를 보는 박물관에서, 좋은 소리를 직접 듣는 공간으로.",
    introduction:
      "오디움은 19세기 이후의 희귀 음향 재생 장비를 보존하고 연구하는 오디오 박물관입니다. 상설전 《정음: 소리를 찾아서》는 원음에 가까운 재생을 뜻하는 하이파이에서 출발해 ‘좋은 소리란 무엇인가’를 묻고, 각자의 청취 경험으로 답을 찾도록 이끕니다.",
    facts: [
      { label: "FORMAT", value: "Audio museum · Listening tour" },
      { label: "EXHIBITION", value: "정음: 소리를 찾아서 · 상설" },
      { label: "ARCHITECT", value: "Kengo Kuma" },
      { label: "ENTRY", value: "무료 · 사전 예약제" },
    ],
    timelineLabel: "COLLECTION CONTEXT",
    timeline: [
      {
        marker: "19C–",
        title: "음향 재생 기술의 역사",
        description:
          "에디슨 축음기부터 초기 영화관과 가정용 하이파이 시스템까지 소리를 재현해 온 장비를 수집하고 보존합니다.",
      },
      {
        marker: "1920S",
        title: "극장과 공공 공간의 대형 혼 스피커",
        description:
          "Western Electric의 대형 혼 시스템은 전기 증폭 초기의 극장과 야외 공간에 강하고 선명한 소리를 전달했습니다.",
      },
      {
        marker: "1957",
        title: "JBL Paragon",
        description:
          "곡면 반사판과 목재 캐비닛을 결합한 일체형 스테레오 시스템이 가정용 오디오와 가구 디자인의 경계를 넓혔습니다.",
      },
      {
        marker: "NOW",
        title: "정음: 소리를 찾아서",
        description:
          "소장품의 역사와 구조를 듣는 경험으로 연결해, 한 가지 정답이 아닌 각자의 ‘좋은 소리’를 탐색합니다.",
      },
    ],
    highlightsLabel: "COLLECTION NOTES",
    highlights: [
      {
        label: "SYSTEM / WESTERN ELECTRIC",
        title: "Horn Speaker 11A",
        meta: "Straight horn · 555 driver",
        description:
          "Western Electric의 대형 직선형 혼 가운데 하나로, 높은 출력과 명료한 전달력을 갖춘 초기 전문 음향 시스템입니다.",
      },
      {
        label: "SYSTEM / LANSING",
        title: "Iconic",
        meta: "Early compact Hi-Fi",
        description:
          "극장에 머물던 고해상도 재생 기술을 더 작은 공간으로 옮기며 가정용 하이파이 발전의 출발점이 된 스피커입니다.",
      },
      {
        label: "SYSTEM / JBL",
        title: "Paragon",
        meta: "Integrated stereo · 1957",
        description:
          "곡면 음향 반사판으로 넓은 위치에서 균형 잡힌 스테레오 이미지를 만들며, 하나의 정교한 가구처럼 설계된 시스템입니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/audeum/architecture.jpg",
        alt: "수직 금속 파이프 외피와 유리 입구가 보이는 오디움 건축",
        caption: "Audeum Audio Museum",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/about",
      },
      {
        src: "/editorial/audeum/western-electric-11a.jpg",
        alt: "여덟 개의 대형 혼으로 구성된 Western Electric 11A 시스템",
        caption: "Western Electric Horn Speaker 11A",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/exhibitions/1",
      },
      {
        src: "/editorial/audeum/jbl-paragon.jpg",
        alt: "곡선형 목재 캐비닛으로 제작된 JBL Paragon 스피커",
        caption: "JBL Paragon Speaker, 1957",
        credit: "Image: Audeum",
        sourceUrl: "https://audeum.org/exhibitions/1",
      },
    ],
    locationNote:
      "오디움은 청계산을 바라보는 서초구 주거 지역에 있습니다. 탑성마을·서초포레스타입구 정류장에서 도보 약 2분, 청계산입구역에서는 도보 약 20분 거리입니다.",
    notes: [
      {
        label: "NEXT RESERVATION",
        title: "2026년 6월 16일 14:00 오픈",
        description:
          "6월 18·19·20일과 25·26·27일 상설전 예약이 열릴 예정입니다. 취소표는 공식 예약 페이지에 수시로 반영됩니다.",
      },
      {
        label: "OPENING HOURS",
        title: "목–토 10:00–17:30",
        description:
          "마지막 입장은 17:00이며 전 일정 사전 예약제로 운영됩니다.",
      },
      {
        label: "ENTRY",
        title: "1인 1매 · QR 티켓 입장",
        description:
          "예약 완료 뒤 발급된 QR 티켓이 있어야 입장할 수 있습니다. 공식 사이트 이외의 유료 예약 경로는 이용하지 마세요.",
      },
    ],
    sources: [
      {
        label: "AUDEUM",
        url: "https://audeum.org/",
      },
      {
        label: "CURRENT EXHIBITION",
        url: "https://audeum.org/exhibitions/1",
      },
      {
        label: "VISIT / ARCHITECTURE",
        url: "https://audeum.org/about",
      },
      {
        label: "RESERVATION",
        url: "https://audeum.org/booking",
      },
    ],
  },
  "yoo-youngkuk-retrospective": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "산의 형태가 아니라, 산을 바라보던 마음을 그린 화가.",
    introduction:
      "유영국은 평생 산을 그렸지만 산의 풍경을 재현한 적은 없습니다. 선과 면, 강렬한 원색으로 응축된 그의 추상은 자연을 마주한 감정 그 자체였습니다. 탄생 110주년을 맞아 서울시립미술관이 새로 시작하는 '한국 근대 거장전' 시리즈의 첫 자리에서, 미공개작을 포함한 170여 점으로 60여 년의 화업 전체를 통과합니다.",
    facts: [
      { label: "ANNIVERSARY", value: "탄생 110주년" },
      { label: "WORKS", value: "회화 · 부조 · 드로잉 · 아카이브 170여 점" },
      { label: "SERIES", value: "한국 근대 거장전 no.1" },
      { label: "ADMISSION", value: "무료 · 사전 예약" },
    ],
    timelineLabel: "LIFE & WORK",
    timeline: [
      {
        marker: "1935",
        title: "도쿄에서 시작된 추상 실험",
        description:
          "일본 유학 시기 전위 그룹 활동과 함께 사진, 부조 등 매체를 넘나드는 초기 추상 실험이 시작됩니다.",
      },
      {
        marker: "1960s–",
        title: "산이라는 평생의 주제",
        description:
          "귀국 후 산을 모티프로 색과 형태를 응축하는 독자적 추상 언어를 완성해 갑니다.",
      },
      {
        marker: "2026",
        title: "역대 최대 규모의 회고전",
        description:
          "생애 후반의 심상 추상까지, 서소문본관 전관에서 화업 전체를 조망합니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / COLOR",
        title: "원색의 밀도",
        description:
          "빨강, 파랑, 노랑의 강렬한 원색이 캔버스 위에서 어떻게 긴장과 균형을 만드는지 가까이에서 살펴보세요.",
      },
      {
        label: "02 / MOUNTAIN",
        title: "재현이 아닌 응축",
        description:
          "산의 윤곽을 찾기보다, 능선과 골짜기가 선과 면으로 응축되는 과정을 시기별로 비교해 보세요.",
      },
      {
        label: "03 / ARCHIVE",
        title: "미공개작과 기록",
        description:
          "처음 공개되는 작품과 아카이브 자료가 화가의 작업실과 시대를 증언합니다.",
      },
    ],
    locationNote:
      "덕수궁 돌담길 옆 서울시립미술관 서소문본관 1층 전시장에서 열립니다. 시청역과 덕수궁, 정동길 산책과 자연스럽게 이어집니다.",
    notes: [
      {
        label: "RESERVATION",
        title: "무료 · 사전 예약 권장",
        description:
          "서울시립미술관 공식 홈페이지에서 관람일을 예약할 수 있습니다. 현장 입장은 혼잡 시 제한될 수 있습니다.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description:
          "평일은 오후 8시까지, 주말은 오후 7시까지 운영합니다. 금요일 야간 관람과 함께 계획해 보세요.",
      },
    ],
    sources: [
      {
        label: "SEMA EXHIBITION",
        url: "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1529410",
      },
      {
        label: "SEOUL NEWS",
        url: "https://news.seoul.go.kr/culture/archives/532952",
      },
    ],
  },
  "jo-sook-jin-namseoul": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "버려진 나무에서 시작해, 공간 전체를 조각으로.",
    introduction:
      "조숙진은 1988년 뉴욕으로 건너간 이후 버려진 나무와 오브제를 모아 부조와 설치, 건축적 프로젝트로 확장해 온 조각가입니다. 서울시립 남서울미술관의 연례 조각가 개인전으로 마련된 이번 전시는 초기 부조 시리즈부터 퍼포먼스와 드로잉까지, 국내에서 온전히 보기 어려웠던 작업 세계를 종합적으로 소개합니다.",
    facts: [
      { label: "ARTIST", value: "조숙진 (Sook Jin Jo)" },
      { label: "BASE", value: "뉴욕 · 1988년 이후" },
      { label: "FORMAT", value: "부조 · 설치 · 퍼포먼스 · 드로잉" },
      { label: "ADMISSION", value: "무료" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1988",
        title: "뉴욕으로",
        description:
          "서울에서 뉴욕으로 활동 무대를 옮겨 버려진 목재를 이용한 부조 작업을 심화합니다.",
      },
      {
        marker: "1990s–",
        title: "설치와 건축 프로젝트",
        description:
          "벽면 부조를 넘어 공간 전체를 감싸는 설치와 공공 건축 프로젝트로 작업을 확장합니다.",
      },
      {
        marker: "2026",
        title: "남서울미술관 개인전",
        description:
          "옛 벨기에영사관 건축 안에서 초기작부터 근작까지를 한자리에 모읍니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / MATERIAL",
        title: "나무의 시간",
        description:
          "칠이 벗겨지고 결이 드러난 폐목재의 표면에서 재료가 살아온 시간을 읽어보세요.",
      },
      {
        label: "02 / SPACE",
        title: "건축과의 대화",
        description:
          "1900년대 초 지어진 옛 벨기에영사관의 목조 계단, 회랑과 작품이 만드는 관계를 함께 살펴보세요.",
      },
      {
        label: "03 / GESTURE",
        title: "수행으로서의 조각",
        description:
          "재료를 줍고, 다듬고, 쌓는 반복적 행위가 남긴 흔적에서 작가의 수행적 태도를 발견할 수 있습니다.",
      },
    ],
    locationNote:
      "사당역 6번 출구 앞, 옛 벨기에영사관을 이전 복원한 서울시립 남서울미술관에서 열립니다. 등록문화재 건축 자체가 전시의 일부처럼 작동합니다.",
    notes: [
      {
        label: "OPENING",
        title: "7월 29일 개막",
        description:
          "전시는 7월 29일 시작해 11월 15일까지 이어집니다. 개막 직후 주말은 혼잡할 수 있습니다.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description:
          "평일은 오후 8시, 주말은 오후 6시까지 운영합니다. 관람은 무료입니다.",
      },
    ],
    sources: [
      {
        label: "SEMA",
        url: "https://sema.seoul.go.kr/",
      },
      {
        label: "SEMA 2026 PROGRAM",
        url: "https://sema.seoul.go.kr/kr/bbs/611333/getBbsDetail?bbsNo=1478706",
      },
    ],
  },
  "oh-yoon-collection": {
    typeLabel: "ARCHIVE PROFILE",
    heading: "칼끝으로 새긴 민중의 얼굴, 40년 만의 재회.",
    introduction:
      "오윤(1946–1986)은 목판의 거친 칼맛으로 민중의 삶과 한, 신명을 새긴 1980년대 민중미술의 상징적 판화가입니다. 작고 40주기를 맞아 서울시립 미술아카이브가 2024년 수집한 오윤 아카이브를 처음으로 본격 공개하며, 완성작 너머의 밑그림과 기록을 통해 창작의 과정 자체를 들여다봅니다.",
    facts: [
      { label: "ARTIST", value: "오윤 (1946–1986)" },
      { label: "OCCASION", value: "작고 40주기" },
      { label: "COLLECTION", value: "2024년 수집 오윤 아카이브" },
      { label: "ADMISSION", value: "무료" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1980s",
        title: "민중미술의 한복판",
        description:
          "현실과 발언 동인으로 활동하며 판화를 통해 시대의 얼굴을 기록했습니다.",
      },
      {
        marker: "1986",
        title: "마흔의 이른 작고",
        description:
          "첫 개인전을 연 해에 세상을 떠나며 짧지만 강렬한 작업 세계를 남겼습니다.",
      },
      {
        marker: "2026",
        title: "아카이브로 다시 읽기",
        description:
          "밑그림, 스케치, 기록 자료를 통해 완성작 이전의 고민과 과정을 추적합니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / KNIFE",
        title: "칼맛의 언어",
        description:
          "매끈함 대신 거칠게 남긴 칼자국이 인물의 감정과 힘을 어떻게 증폭하는지 살펴보세요.",
      },
      {
        label: "02 / PROCESS",
        title: "완성작 이전",
        description:
          "아카이브 전시답게 스케치와 습작, 메모에서 하나의 판화가 태어나는 경로를 따라가 보세요.",
      },
      {
        label: "03 / PEOPLE",
        title: "민중이라는 주어",
        description:
          "도깨비와 탈춤, 장터의 사람들. 오윤이 평생 그린 주인공들이 지금 우리와 어떻게 겹치는지 생각해 볼 수 있습니다.",
      },
    ],
    locationNote:
      "북한산 자락 평창동의 서울시립 미술아카이브에서 열립니다. 미술 자료 전문 기관 특유의 차분한 열람 환경에서 전시를 볼 수 있습니다.",
    notes: [
      {
        label: "OPENING",
        title: "8월 27일 개막",
        description:
          "전시는 2027년 2월 21일까지 이어지는 장기 기획전입니다. 가을 평창동 산책과 함께 계획해 보세요.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description: "관람은 무료이며 화요일부터 일요일까지 운영합니다.",
      },
    ],
    sources: [
      {
        label: "SEMA ART ARCHIVES",
        url: "https://sema.seoul.go.kr/semaaa/front/main.do",
      },
      {
        label: "SEMA 2026 PROGRAM",
        url: "https://sema.seoul.go.kr/kr/bbs/611333/getBbsDetail?bbsNo=1478706",
      },
    ],
  },
  "koo-jeong-a-leeum": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "보이지 않지만 분명히 존재하는 것들의 미술.",
    introduction:
      "구정아의 작업은 종종 놓치기 쉽습니다. 희미한 빛, 옅은 향, 미세한 진동처럼 감각의 문턱 근처에서 작동하기 때문입니다. 제60회 베니스 비엔날레 한국관에서 향으로 한국을 담아냈던 작가가 이번에는 리움 M2 전관을 무대로, 자력과 에너지의 흐름처럼 보이지 않는 존재들을 공간 전체의 경험으로 바꿔 놓습니다.",
    facts: [
      { label: "ARTIST", value: "구정아 (Koo Jeong A)" },
      { label: "VENICE", value: "제60회 베니스 비엔날레 한국관" },
      { label: "VENUE", value: "리움미술관 M2 전관" },
      { label: "OPENING", value: "2026년 9월 5일" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1990s–",
        title: "감각의 문턱에서",
        description:
          "파리와 런던을 오가며 빛, 향, 온도처럼 비물질적 요소를 다루는 독자적 설치 언어를 구축했습니다.",
      },
      {
        marker: "2024",
        title: "베니스의 향기",
        description:
          "베니스 비엔날레 한국관에서 한국의 기억을 향으로 번역한 《오도라마 시티》로 주목받았습니다.",
      },
      {
        marker: "2026",
        title: "리움 M2 전관",
        description:
          "국내에서 보기 드문 대규모 개인전으로 작가의 세계를 집약합니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / SLOW",
        title: "천천히, 오래",
        description:
          "작품이 잘 보이지 않는다면 그것이 의도입니다. 걸음을 늦추고 공기와 빛의 변화에 감각을 열어보세요.",
      },
      {
        label: "02 / SENSE",
        title: "시각 너머",
        description:
          "냄새, 온도, 진동처럼 시각 밖의 감각이 언제 어디서 개입하는지 알아차려 보세요.",
      },
      {
        label: "03 / ENERGY",
        title: "에너지의 흐름",
        description:
          "자력처럼 보이지 않는 힘이 공간의 분위기를 어떻게 바꾸는지, 전시장 사이의 이동에서도 느껴보세요.",
      },
    ],
    locationNote:
      "한남동 리움미술관 M2에서 열립니다. 같은 시기 그라운드갤러리의 《다른 공간 안으로》와 함께 보면 '공간을 경험하는 미술'이라는 하나의 흐름으로 이어집니다.",
    notes: [
      {
        label: "TICKETS",
        title: "예매 공지 예정",
        description:
          "관람권과 예매 일정은 리움 공식 홈페이지를 통해 공지될 예정입니다. 공식 채널에서 확인하세요.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description: "관람 시간은 화요일부터 일요일 오전 10시부터 오후 6시까지입니다.",
      },
    ],
    sources: [
      {
        label: "LEEUM UPCOMING",
        url: "https://www.leeumhoam.org/leeum/exhibition/94",
      },
      {
        label: "LEEUM",
        url: "https://www.leeumhoam.org/leeum",
      },
    ],
  },
  "sema-seoseoul": {
    typeLabel: "SPACE PROFILE",
    heading: "공원 위에 놓인 스트리트형 미술관, 서남권의 새 거점.",
    introduction:
      "서울시립 서서울미술관은 두 가지 '처음'을 안고 문을 열었습니다. 서남권 최초의 공립 미술관이자, 서울시 첫 뉴미디어 특화 미술관이라는 점입니다. 김찬중(더시스템랩)이 설계한 건물은 금나래공원의 보행로를 그대로 끌어들여, 공원을 걷다 자연스럽게 미술관 안으로 흘러드는 개방적 경험을 제안합니다.",
    facts: [
      { label: "OPENED", value: "2026년 3월 12일" },
      { label: "FOCUS", value: "뉴미디어 · 청소년" },
      { label: "ARCHITECT", value: "김찬중 · 더시스템랩" },
      { label: "ADMISSION", value: "무료" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "2026.03",
        title: "개관",
        description:
          "개관특별전 《우리의 시간은 여기서부터》로 서남권 지역의 시간과 기억을 조명하며 문을 열었습니다.",
      },
      {
        marker: "NOW",
        title: "개관 시즌",
        description:
          "퍼포먼스 《호흡》, 뉴미디어 소장품전 등 개관 프로그램이 이어지고 있습니다.",
      },
      {
        marker: "AHEAD",
        title: "서남권의 문화 거점으로",
        description:
          "학교와 가족 단위 관람객을 위한 뉴미디어 교육 프로그램이 함께 운영됩니다.",
      },
    ],
    highlightsLabel: "HOW TO ENJOY",
    highlights: [
      {
        label: "01 / STREET",
        title: "길이 되는 미술관",
        description:
          "공원 보행로와 이어지는 스트리트형 동선을 따라 걸으며 안과 밖의 경계가 흐려지는 순간을 즐겨보세요.",
      },
      {
        label: "02 / NEW MEDIA",
        title: "뉴미디어 소장품",
        description:
          "영상, 인터랙티브 설치 등 스크린 세대를 위한 소장품전이 상설로 운영됩니다.",
      },
      {
        label: "03 / PARK",
        title: "금나래공원과 함께",
        description:
          "관람 전후로 공원 산책을 곁들이면 반나절 나들이 코스로 충분합니다.",
      },
    ],
    locationNote:
      "금천구 독산동 금나래중앙공원 위에 자리합니다. 1호선 독산역에서 도보로 닿을 수 있어 서남권에서 가장 가까운 시립 미술관입니다.",
    notes: [
      {
        label: "ADMISSION",
        title: "무료 관람",
        description:
          "상설 프로그램은 무료입니다. 일부 교육 프로그램은 사전 신청이 필요할 수 있습니다.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관",
        description: "평일은 오후 8시, 주말은 오후 6시까지 운영합니다.",
      },
    ],
    sources: [
      {
        label: "SEMA SEO-SEOUL",
        url: "https://sema.seoul.go.kr/kr/visit/seoseoul",
      },
      {
        label: "OPENING EXHIBITION",
        url: "https://sema.seoul.go.kr/kr/whatson/exhibition/detail?exNo=1498975",
      },
    ],
  },
  "yeowoorak-festival-2026": {
    typeLabel: "FESTIVAL PROFILE",
    heading: "여기, 우리 음악이 있다 — 열여섯 번째 여름.",
    introduction:
      "여우락은 '여기 우리 음악이 있다'의 준말입니다. 국립극장이 매년 여름 전통음악의 가장 대담한 확장을 실험해 온 이 축제가 올해는 예술감독 이한철, 음악감독 유태평양 체제로 열립니다. '누구나 즐길 수 있는 우리 음악'을 내걸고 강산에, 선우정아, 하림, 안예은, 이희문까지 장르의 경계를 넘는 만남 12편을 준비했습니다.",
    facts: [
      { label: "PERIOD", value: "7월 3일 – 7월 25일" },
      { label: "PROGRAM", value: "총 12개 공연" },
      { label: "DIRECTORS", value: "이한철 · 유태평양" },
      { label: "VENUE", value: "하늘극장 · 달오름극장" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "2010",
        title: "첫 여우락",
        description:
          "전통음악과 동시대 음악의 만남을 내건 국립극장의 여름 축제가 시작됐습니다.",
      },
      {
        marker: "2026",
        title: "이한철 × 유태평양",
        description:
          "대중음악과 국악을 대표하는 두 음악가가 감독으로 만나 '누구나 즐기는 우리 음악'을 설계합니다.",
      },
      {
        marker: "JUL",
        title: "12개의 무대",
        description:
          "3주간 하늘극장과 달오름극장에서 서로 다른 조합의 협업 무대가 이어집니다.",
      },
    ],
    highlightsLabel: "HOW TO ENJOY",
    highlights: [
      {
        label: "01 / CROSSOVER",
        title: "경계 없는 협업",
        description:
          "국악 명인과 대중음악가가 한 무대에서 만나는 여우락 특유의 일회성 조합을 눈여겨보세요.",
      },
      {
        label: "02 / PICK",
        title: "라인업 고르기",
        description:
          "강산에, 선우정아, 안예은 등 익숙한 이름에서 시작해 낯선 전통 무대로 넓혀가는 동선을 추천합니다.",
      },
      {
        label: "03 / NIGHT",
        title: "남산의 여름밤",
        description:
          "공연 전후 남산 자락 국립극장 앞마당에서 여름밤 공기를 즐겨보세요.",
      },
    ],
    locationNote:
      "장충동 국립극장 하늘극장과 달오름극장에서 열립니다. 동대입구역에서 남산 방향으로 도보 또는 순환버스로 이동할 수 있습니다.",
    notes: [
      {
        label: "TICKETS",
        title: "공연별 예매",
        description:
          "공연마다 일정과 가격이 다릅니다. 국립극장 공식 홈페이지에서 회차별로 확인하세요.",
      },
      {
        label: "PACKAGE",
        title: "패키지 티켓",
        description:
          "여러 공연을 묶은 패키지 티켓이 운영됩니다. 두 편 이상 볼 계획이라면 먼저 확인해 보세요.",
      },
    ],
    sources: [
      {
        label: "NTOK YEOWOORAK",
        url: "https://www.ntok.go.kr/ntok/pm/prfmng/selectSeasonInfo.do?seasonType=2&mi=21018",
      },
    ],
  },
  "the-neighbourhood-seoul": {
    typeLabel: "CONCERT PROFILE",
    heading: "스웨터 웨더의 밴드, 13년 만의 첫 서울.",
    introduction:
      "'Sweater Weather'가 스포티파이에서 44억 회 넘게 재생되는 동안, 네이버후드는 한 번도 한국 무대에 서지 않았습니다. 캘리포니아 특유의 나른함과 어두운 R&B 무드를 섞은 이 밴드의 첫 단독 내한이 예스24 라이브홀에서 성사됩니다. 데뷔 초부터 기다려온 팬이라면 놓치기 어려운 단 한 번의 밤입니다.",
    facts: [
      { label: "DATE", value: "7월 20일 (월) 20:00" },
      { label: "VENUE", value: "예스24 라이브홀" },
      { label: "PRICE", value: "139,000원 · 스탠딩" },
      { label: "FIRST", value: "첫 단독 내한" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "2013",
        title: "I Love You. 데뷔",
        description:
          "데뷔 앨범 수록곡 'Sweater Weather'가 빌보드 얼터너티브 차트 1위에 오르며 단숨에 주목받았습니다.",
      },
      {
        marker: "2020",
        title: "다시 온 전성기",
        description:
          "SNS를 타고 'Sweater Weather'가 역주행하며 새로운 세대의 사운드트랙이 됐습니다.",
      },
      {
        marker: "2026",
        title: "첫 서울 무대",
        description:
          "재결성 이후 아시아 투어의 한 축으로 서울을 처음 찾습니다.",
      },
    ],
    highlightsLabel: "BEFORE YOU GO",
    highlights: [
      {
        label: "01 / SETLIST",
        title: "예습 리스트",
        description:
          "'Sweater Weather', 'Daddy Issues', 'Softcore'까지 대표곡의 라이브 버전을 미리 들어보세요.",
      },
      {
        label: "02 / STANDING",
        title: "스탠딩 공연",
        description:
          "라이브홀 특성상 전 구역 스탠딩입니다. 입장 순서는 예매 번호 기준이니 일찍 도착하는 편이 좋습니다.",
      },
      {
        label: "03 / MOOD",
        title: "어두운 무드의 미학",
        description:
          "흑백의 비주얼과 몽환적 사운드가 만드는 밴드 특유의 공기를 현장에서 느껴보세요.",
      },
    ],
    locationNote:
      "광나루역 인근 예스24 라이브홀(구 악스코리아)에서 열립니다. 2호선 강변역과 5호선 광나루역 사이, 도보 10분 거리입니다.",
    notes: [
      {
        label: "TICKETS",
        title: "공식 예매처 이용",
        description:
          "예스24 티켓이 공식 예매처입니다. 양도 티켓 거래는 입장이 거부될 수 있습니다.",
      },
      {
        label: "AGE",
        title: "관람 연령 확인",
        description: "관람 등급과 입장 정책은 공연 공지를 따릅니다.",
      },
    ],
    sources: [
      {
        label: "YES24 LIVE HALL",
        url: "https://yes24livehall.com/",
      },
    ],
  },
  "classic-revolution-2026": {
    typeLabel: "FESTIVAL PROFILE",
    heading: "클래식의 뿌리를 찾아가는 8일간의 여정.",
    introduction:
      "올해 클래식 레볼루션의 주제는 '뿌리(Origin)'입니다. 코다이와 바르톡, 드보르작처럼 민속음악에서 출발해 클래식의 정전이 된 음악들을 8일에 걸쳐 집중적으로 조명합니다. 안드레이 보레이코가 지휘하는 국립심포니와 첼리스트 키안 솔타니의 개막 무대부터 카바코스와 게르스타인의 듀오 리사이틀까지, 여름의 끝을 채우는 밀도 높은 라인업입니다.",
    facts: [
      { label: "PERIOD", value: "8월 28일 – 9월 4일" },
      { label: "THEME", value: "뿌리 (Origin)" },
      { label: "OPENING", value: "보레이코 × 국립심포니 × 키안 솔타니" },
      { label: "VENUE", value: "롯데콘서트홀" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "2020",
        title: "축제의 시작",
        description:
          "롯데콘서트홀이 여름 시즌을 채우는 자체 기획 축제로 클래식 레볼루션을 시작했습니다.",
      },
      {
        marker: "2026",
        title: "개관 10주년",
        description:
          "홀의 개관 10주년과 맞물려 어느 해보다 무게 있는 라인업이 꾸려졌습니다.",
      },
      {
        marker: "AUG–SEP",
        title: "8일간의 집중",
        description:
          "오케스트라, 체임버, 듀오 리사이틀이 교차하며 하나의 주제를 다층적으로 파고듭니다.",
      },
    ],
    highlightsLabel: "HOW TO ENJOY",
    highlights: [
      {
        label: "01 / OPENING",
        title: "개막 공연",
        description:
          "코다이 '갈란타 무곡', 드보르작 첼로 협주곡, 바르톡 '오케스트라를 위한 협주곡'까지 주제를 압축한 프로그램입니다.",
      },
      {
        label: "02 / DUO",
        title: "카바코스 × 게르스타인",
        description:
          "당대 최고의 바이올리니스트와 피아니스트가 만나는 듀오 리사이틀은 축제의 또 다른 정점입니다.",
      },
      {
        label: "03 / HALL",
        title: "홀의 음향",
        description:
          "빈야드 스타일 롯데콘서트홀의 음향을 고려해 무대 뒤편 합창석에서 듣는 선택지도 시도해 보세요.",
      },
    ],
    locationNote:
      "잠실 롯데월드몰 8층의 롯데콘서트홀에서 열립니다. 2호선 잠실역과 바로 연결되어 접근이 편리합니다.",
    notes: [
      {
        label: "TICKETS",
        title: "공연별 예매",
        description:
          "공연마다 가격과 좌석 등급이 다릅니다. 롯데콘서트홀 공식 홈페이지에서 회차별로 확인하세요.",
      },
      {
        label: "TIME",
        title: "공연 시간 확인",
        description:
          "평일 저녁과 주말 공연 시간이 다를 수 있으니 예매 시 시작 시간을 확인하세요.",
      },
    ],
    sources: [
      {
        label: "LOTTE CONCERT HALL",
        url: "https://www.lotteconcerthall.com/",
      },
    ],
  },
  "seoul-fringe-2026": {
    typeLabel: "FESTIVAL PROFILE",
    heading: "심사도 선정도 없이, 예술가가 직접 여는 무대.",
    introduction:
      "서울프린지페스티벌의 원칙은 단순합니다. 작품과 예술가를 심사하지 않고, 선정하지 않는 것. 그래서 이 축제에는 다른 어디에서도 볼 수 없는 날것의 실험이 모입니다. 연극, 무용, 음악, 퍼포먼스, 시각예술까지 — 8월의 홍대 일대가 독립예술가들의 자유로운 무대가 됩니다.",
    facts: [
      { label: "PERIOD", value: "8월 6일 – 8월 23일" },
      { label: "PRINCIPLE", value: "자유참가 · 무심사" },
      { label: "GENRES", value: "연극 · 무용 · 음악 · 퍼포먼스 · 시각" },
      { label: "AREA", value: "홍대 일대 소극장 · 거리" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "1998",
        title: "독립예술제로 출발",
        description:
          "대학로 중심의 제도권 무대 바깥에서 독립예술가들의 자생적 축제로 시작했습니다.",
      },
      {
        marker: "SINCE",
        title: "홍대라는 토양",
        description:
          "홍대 앞 소극장과 클럽, 거리의 인프라와 함께 성장하며 한국 독립예술의 관문이 됐습니다.",
      },
      {
        marker: "2026",
        title: "여름 3주간",
        description:
          "8월 6일부터 23일까지, 올여름도 수백 명의 예술가가 자발적으로 무대를 엽니다.",
      },
    ],
    highlightsLabel: "HOW TO ENJOY",
    highlights: [
      {
        label: "01 / RANDOM",
        title: "우연에 맡기기",
        description:
          "프린지의 묘미는 계획 없는 발견입니다. 시간표만 들고 홍대를 걷다 끌리는 공연에 들어가 보세요.",
      },
      {
        label: "02 / STREET",
        title: "거리 공연",
        description:
          "티켓 없이 만나는 거리 퍼포먼스는 축제의 가장 열린 입구입니다.",
      },
      {
        label: "03 / TALK",
        title: "예술가와의 거리",
        description:
          "소극장 공연 후 예술가와 직접 대화할 수 있는 가까운 거리감이 프린지의 특권입니다.",
      },
    ],
    locationNote:
      "서교동을 중심으로 한 홍대 일대 소극장과 거리 곳곳에서 열립니다. 공연별 장소는 공식 홈페이지의 시간표에서 확인하세요.",
    notes: [
      {
        label: "TICKETS",
        title: "작품별 예매",
        description:
          "유료 공연과 무료 공연이 섞여 있습니다. 7월 티켓 오픈 이후 공식 홈페이지에서 예매할 수 있습니다.",
      },
      {
        label: "SCHEDULE",
        title: "시간표 확인",
        description:
          "3주간 수백 개의 공연이 열리므로, 방문 전 날짜별 시간표를 확인하는 것이 좋습니다.",
      },
    ],
    sources: [
      {
        label: "SEOUL FRINGE FESTIVAL",
        url: "https://seoulfringefestival.net/",
      },
    ],
  },
  "jamsugyo-ddooddoo-festival": {
    typeLabel: "FESTIVAL PROFILE",
    heading: "일요일마다 차가 비켜서고, 다리가 광장이 된다.",
    introduction:
      "잠수교는 한강에서 수면과 가장 가까운 다리입니다. 매주 일요일, 이 다리에서 차가 사라지면 900미터의 강 위 산책로가 열립니다. 상반기 시즌에만 117만 명이 다녀간 뚜벅뚜벅 축제가 9월부터 하반기 시즌을 시작합니다. 미식과 마켓, 거리 공연, 그리고 한강 위에서 맞는 노을까지 — 서울에서 가장 낮은 눈높이로 강을 만나는 방법입니다.",
    facts: [
      { label: "PERIOD", value: "9월 6일 – 10월 25일 · 매주 일요일" },
      { label: "HOURS", value: "13:00 – 21:00" },
      { label: "VISITORS", value: "상반기 누적 117만 명" },
      { label: "ADMISSION", value: "무료" },
    ],
    timelineLabel: "CONTEXT",
    timeline: [
      {
        marker: "2023",
        title: "차 없는 다리 실험",
        description:
          "주말 잠수교를 보행자 전용으로 여는 실험이 서울의 대표 한강 프로그램으로 자리잡았습니다.",
      },
      {
        marker: "2026.04",
        title: "상반기 시즌",
        description:
          "4월부터 6월까지 8주간 117만 명이 찾으며 전년 대비 13% 성장했습니다.",
      },
      {
        marker: "2026.09",
        title: "하반기 시즌",
        description:
          "9월 6일부터 10월 25일까지, 가을의 한강과 노을이 배경이 됩니다.",
      },
    ],
    highlightsLabel: "HOW TO ENJOY",
    highlights: [
      {
        label: "01 / SUNSET",
        title: "노을 시간 맞추기",
        description:
          "해질 무렵 다리 위는 축제의 절정입니다. 일몰 30분 전에 도착해 서쪽 하늘을 확보하세요.",
      },
      {
        label: "02 / FOOD",
        title: "미식과 마켓",
        description:
          "시즌마다 바뀌는 푸드트럭과 마켓 라인업이 다리 위에 늘어섭니다.",
      },
      {
        label: "03 / WALK",
        title: "반포에서 이촌까지",
        description:
          "잠수교를 건너 이촌한강공원까지 이어 걸으면 강북과 강남을 잇는 완주 코스가 됩니다.",
      },
    ],
    locationNote:
      "잠수교와 반포한강공원 일대에서 열립니다. 고속터미널역 8-1번 출구에서 반포한강공원 방향으로 도보 15분입니다.",
    notes: [
      {
        label: "SUNDAY ONLY",
        title: "일요일에만",
        description:
          "축제는 매주 일요일 낮 1시부터 밤 9시까지만 열립니다. 우천 시 일부 프로그램이 축소될 수 있습니다.",
      },
      {
        label: "FREE",
        title: "무료 입장",
        description:
          "입장은 무료이며 일부 체험 프로그램은 현장 선착순으로 운영됩니다.",
      },
    ],
    sources: [
      {
        label: "DDOODDOO FESTA",
        url: "http://www.festa-ddooddoo.com/",
      },
      {
        label: "FUN SEOUL",
        url: "https://festival.seoul.go.kr/festival/main/festivalView.do?festacode=402",
      },
    ],
  },
  "damien-hirst-mmca": {
    typeLabel: "ARTIST / EXHIBITION PROFILE",
    heading: "죽음, 믿음, 가치. 허스트가 반복해서 꺼내 온 질문들.",
    introduction:
      "데이미언 허스트의 초기작부터 근작까지 설치, 조각, 회화를 한 자리에서 살피는 아시아 최초 대규모 개인전입니다. 포름알데히드 수조, 약장, 스팟과 스핀 페인팅, 다이아몬드 해골을 따라가면 생명과 죽음뿐 아니라 과학과 종교, 예술과 시장의 관계가 함께 드러납니다.",
    facts: [
      { label: "SCALE", value: "아시아 최초 대규모 개인전" },
      { label: "MEDIA", value: "설치 · 조각 · 회화" },
      { label: "KEY THEMES", value: "죽음 · 영생 · 믿음 · 시장" },
      { label: "ADMISSION", value: "8,000원" },
    ],
    timelineLabel: "SELECTED CHRONOLOGY",
    timeline: [
      {
        marker: "1986",
        title: "스팟 페인팅",
        description:
          "규칙적인 색점과 제작 시스템을 통해 작가의 손, 반복, 예술 생산의 구조를 질문합니다.",
      },
      {
        marker: "1990",
        title: "천 년",
        description:
          "탄생과 죽음이 실제 생물학적 순환으로 반복되는 유리 진열장 설치입니다.",
      },
      {
        marker: "1991",
        title: "살아있는 자의 마음 속 죽음의 물리적 불가능성",
        description:
          "포름알데히드 수조 속 상어를 통해 죽음을 보면서도 완전히 상상할 수 없는 상태를 마주하게 합니다.",
      },
      {
        marker: "2007",
        title: "신의 사랑을 위하여",
        description:
          "백금과 다이아몬드, 실제 인간의 치아로 만든 해골이 영원성과 사치, 예술의 가격을 동시에 드러냅니다.",
      },
      {
        marker: "2026",
        title: "MMCA 서울",
        description:
          "대표작과 ‘벚꽃’ 연작 이후 미공개 최신작까지 작가의 작업 전반을 연결합니다.",
      },
    ],
    highlightsLabel: "SELECTED WORKS",
    highlights: [
      {
        label: "WORK / 1991",
        title: "살아있는 자의 마음 속 죽음의 물리적 불가능성",
        meta: "유리 · 철 · 상어 · 포름알데히드 수용액",
        description:
          "허스트의 ‘자연사’ 연작을 대표하는 작품으로, 실제 죽음의 물질성과 관람자의 심리적 거리를 충돌시킵니다.",
      },
      {
        label: "WORK / 2007",
        title: "신의 사랑을 위하여",
        meta: "백금 · 다이아몬드 · 인간의 치아",
        description:
          "죽음을 상징하는 해골을 극단적인 귀금속으로 덮어 영원성에 대한 욕망과 시장의 논리를 압축합니다.",
      },
      {
        label: "WORK / 2000",
        title: "사랑의 취약성",
        meta: "비치볼 · 칼 · 송풍기",
        description:
          "칼날 위에 공중 부양한 비치볼이 균형과 불안, 삶의 취약성을 단순하고 긴장감 있게 보여줍니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/damien-hirst/shark.jpg",
        alt: "포름알데히드 수조에 설치된 상어 작품",
        caption: "살아있는 자의 마음 속 죽음의 물리적 불가능성, 1991",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/diamond-skull.jpg",
        alt: "다이아몬드로 덮인 해골 작품",
        caption: "신의 사랑을 위하여, 2007",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/vitrine.jpg",
        alt: "유리 진열장 안에 오브제가 놓인 설치 작품",
        caption: "삶과 죽음, 과학과 믿음을 다루는 진열장 설치",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
      {
        src: "/editorial/damien-hirst/beach-ball.jpg",
        alt: "칼날 위에 비치볼이 떠 있는 설치 작품",
        caption: "사랑의 취약성, 2000",
        credit: "© Damien Hirst and Science Ltd. / Image: MMCA",
        sourceUrl:
          "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
    ],
    locationNote:
      "서울관 지하 1층과 3·4·5전시실, 2층 MMCA 스튜디오, 서울박스까지 여러 층에 걸쳐 이어지는 전시입니다. 한 공간만 보고 끝나지 않도록 전시장 동선을 확인하세요.",
    notes: [
      {
        label: "CONTENT NOTE",
        title: "실제 동물 표본과 생물학적 소재",
        description:
          "포름알데히드에 보존된 동물과 죽음을 직접적으로 다룬 작품이 포함됩니다. 소재에 민감하다면 관람 전 작품 정보를 확인하세요.",
      },
      {
        label: "AUDIO GUIDE",
        title: "20개 항목의 공식 오디오 가이드",
        description:
          "MMCA 공식 페이지에서 전시 인사말과 주요 작품별 오디오 가이드를 확인할 수 있습니다.",
      },
      {
        label: "LAST DATE",
        title: "2026년 6월 28일 종료",
        description:
          "종료일이 가까운 전시입니다. 수요일과 토요일은 오후 9시까지 연장 운영합니다.",
      },
    ],
    sources: [
      {
        label: "MMCA EXHIBITION",
        url: "https://www.mmca.go.kr/exhibitions/exhibitionsDetail.do?exhFlag=2&exhId=202601060002023",
      },
    ],
  },
  "dialogue-in-the-dark-bukchon": {
    typeLabel: "EXPERIENCE PROFILE",
    heading: "보지 않는 100분 동안, 다른 감각과 타인을 신뢰하는 법.",
    introduction:
      "‘어둠속의대화’는 빛이 완전히 차단된 공간을 전문 안내자와 함께 이동하는 체험입니다. 전시물을 바라보는 대신 소리, 촉감, 냄새, 거리감과 대화를 통해 일상적인 공간을 새롭게 인식하게 합니다.",
    facts: [
      { label: "DURATION", value: "100분" },
      { label: "GROUP", value: "회차당 최대 8명" },
      { label: "INTERVAL", value: "15분 간격" },
      { label: "CONDITION", value: "완전한 어둠" },
    ],
    timelineLabel: "EXPERIENCE FLOW",
    timeline: [
      {
        marker: "BEFORE",
        title: "15분 전 도착",
        description:
          "안내와 소지품 정리를 위해 시작 시간보다 일찍 도착해야 합니다. 지각 시 중간 입장이 어렵습니다.",
      },
      {
        marker: "100 MIN",
        title: "로드마스터와 이동",
        description:
          "최대 8명이 한 팀이 되어 전문 안내자의 목소리를 따라 여러 일상적 환경을 통과합니다.",
      },
      {
        marker: "AFTER",
        title: "감각과 대화 돌아보기",
        description:
          "시각이 사라졌을 때 공간과 타인을 어떻게 인식했는지 밝은 공간에서 다시 정리합니다.",
      },
    ],
    highlightsLabel: "WHAT CHANGES",
    highlights: [
      {
        label: "01 / SOUND",
        title: "소리의 거리",
        description:
          "목소리와 발소리, 주변의 반향만으로 방향과 공간의 크기를 추측하게 됩니다.",
      },
      {
        label: "02 / TOUCH",
        title: "촉감의 정보",
        description:
          "손과 발로 만나는 재질, 온도, 경사가 시각을 대신해 공간의 지도가 됩니다.",
      },
      {
        label: "03 / TRUST",
        title: "안내자와 동행자",
        description:
          "빠르게 이동하는 것보다 목소리를 듣고 서로의 위치를 확인하는 과정이 체험의 중심입니다.",
      },
    ],
    locationNote:
      "북촌로 71의 전용 체험 공간에서 진행됩니다. 정시 입장이 중요한 프로그램이라 주변 관광 일정보다 회차 도착 시간을 우선해 잡는 편이 좋습니다.",
    notes: [
      {
        label: "ARRIVAL",
        title: "시작 15분 전 도착",
        description:
          "체험이 시작되면 중간 입장이 불가능합니다. 교통과 북촌 일대의 보행 시간을 고려하세요.",
      },
      {
        label: "RESTRICTION",
        title: "촬영·녹음 및 발광 기기 사용 불가",
        description:
          "완전한 어둠을 유지해야 하므로 휴대전화와 빛이 나는 기기는 안내에 따라 보관합니다.",
      },
      {
        label: "HEALTH NOTE",
        title: "밀폐된 어둠에 대한 사전 확인",
        description:
          "폐소공포나 어둠에 대한 불안, 이동 보조가 필요한 경우 공식 예매처의 참여 조건을 먼저 확인하세요.",
      },
    ],
    sources: [
      {
        label: "NOL TICKET",
        url: "https://nol.yanolja.com/ticket/products/26002802",
      },
    ],
  },
  "do-ho-suh-mmca": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "집을 지고 다니는 방법에 대하여.",
    introduction:
      "서도호는 살았던 집을 반투명한 천으로 다시 지어 왔습니다. 벽과 문고리, 배관까지 옮겨 담은 그 집은 접어서 가방에 넣을 수 있습니다. 서울에서 뉴욕으로, 다시 런던으로 옮겨 다닌 삶에서 집은 고정된 건축물이 아니라 몸에 남는 기억의 치수였습니다. 국립현대미술관 서울이 작가의 역대 최대 규모 개인전으로 그 치수를 펼칩니다.",
    facts: [
      { label: "SCALE", value: "작가 최대 규모 개인전" },
      { label: "RANGE", value: "대학원 졸업작 – 미공개 신작" },
      { label: "FIRST SHOWN", value: "평생의 드로잉 국내 최초 공개" },
      { label: "KEY WORK", value: "브릿지 프로젝트" },
    ],
    timelineLabel: "TRAJECTORY",
    timeline: [
      {
        marker: "1999",
        title: "서울 집 / L.A. 집",
        description:
          "서울의 한옥을 로스앤젤레스에 옮겨 놓은 초기작으로, 이주와 기억이라는 주제가 처음 형태를 얻습니다.",
      },
      {
        marker: "2013",
        title: "집 속의 집 속의 집",
        description:
          "시간과 지리를 달리하는 거주지들을 겹쳐, 하나의 집 안에 여러 집이 들어앉는 구조를 만듭니다.",
      },
      {
        marker: "2026",
        title: "서울관을 통과하는 집",
        description:
          "관람자가 직접 걸어 들어가는 방과 복도의 연쇄, 그리고 미래를 향한 브릿지 프로젝트가 전시장을 채웁니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / FABRIC",
        title: "천으로 재는 치수",
        description:
          "손잡이와 콘센트, 스위치까지 실측해 옮긴 디테일을 보세요. 집을 기억하는 단위가 무엇인지 드러납니다.",
      },
      {
        label: "02 / DRAWING",
        title: "처음 공개되는 드로잉",
        description:
          "완성된 설치보다 먼저 존재한 사유의 흔적입니다. 작품이 되기 전의 생각을 따라가 보세요.",
      },
      {
        label: "03 / PASSAGE",
        title: "통과하는 작품",
        description:
          "‘네스트’ 계열의 방과 복도는 바라보는 것이 아니라 지나가는 작품입니다. 걷는 속도를 바꿔 보세요.",
      },
    ],
    gallery: [
      {
        src: "/editorial/do-ho-suh/bridging-home.jpg",
        alt: "리버풀의 벽돌 건물 사이에 끼워 넣은 한옥, 서도호의 브리징 홈",
        caption: "Do Ho Suh, Bridging Home, 2010 · Liverpool",
        credit: "Image: Julian Stallabrass · Wikimedia Commons (CC BY 2.0)",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Do_Ho_Suh-_5759-sm_(5133451420).jpg",
      },
      {
        src: "/editorial/do-ho-suh/bridging-home-detail.jpg",
        alt: "벽돌벽에 파묻힌 한옥의 기와지붕과 창호를 올려다본 모습",
        caption: "기와와 벽돌이 맞붙는 자리",
        credit: "Image: Julian Stallabrass · Wikimedia Commons (CC BY 2.0)",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Do_Ho_Suh-_5756-sm_(5133449116).jpg",
      },
    ],
    locationNote:
      "경복궁 동쪽 삼청로의 국립현대미술관 서울에서 열립니다. 수요일과 토요일은 오후 9시까지 열려, 해가 진 뒤 소격동 골목과 이어 걷기 좋습니다.",
    notes: [
      {
        label: "ADMISSION",
        title: "관람료 추후 공지",
        description:
          "개막 시점에 국립현대미술관 공식 채널에서 관람권 정보가 안내됩니다. 수·토 야간개장(18–21시)은 무료입니다.",
      },
      {
        label: "CLOSED",
        title: "임시 휴관일 확인",
        description:
          "9월과 12월 첫째 주 화요일은 임시 휴관합니다. 장기 전시인 만큼 방문 전 일정 확인을 권합니다.",
      },
    ],
    sources: [
      {
        label: "MMCA",
        url: "https://www.mmca.go.kr/exhibitions/futureProgressList.do",
      },
      {
        label: "MARIE CLAIRE KOREA",
        url: "https://www.marieclairekorea.com/culture/2026/07/dohosuh/",
      },
    ],
  },
  "company-world-affair-piknic": {
    typeLabel: "EXHIBITION PROFILE",
    heading: "무엇을 만들 것인가보다, 누구와 만들 것인가.",
    introduction:
      "컴퍼니는 세계 여러 지역의 장인을 찾아다니며 물건을 만들어 온 디자인 스튜디오입니다. 도면을 보내고 결과물을 받는 방식 대신, 그 지역의 손과 재료가 이미 알고 있는 것에서 출발합니다. ‘온 세상 만들기의 비밀을 찾아서’라는 부제는 그 여정의 기록이자 질문입니다.",
    facts: [
      { label: "SUBTITLE", value: "온 세상 만들기의 비밀을 찾아서" },
      { label: "PRACTICE", value: "장인 협업 · 지역 재료" },
      { label: "VENUE", value: "남산 자락의 옛 제약회사 건물" },
      { label: "RUN", value: "04.03 – 09.06" },
    ],
    timelineLabel: "METHOD",
    timeline: [
      {
        marker: "TRAVEL",
        title: "먼저 찾아간다",
        description:
          "스튜디오에서 완성한 도면을 보내는 대신, 만드는 사람이 있는 곳으로 직접 이동하는 데서 작업이 시작됩니다.",
      },
      {
        marker: "MATERIAL",
        title: "그곳의 재료로 배운다",
        description:
          "지역에 축적된 기술과 재료의 성질이 형태를 결정합니다. 디자인은 통제가 아니라 번역에 가까워집니다.",
      },
      {
        marker: "OBJECT",
        title: "만들어진 것이 남긴 질문",
        description:
          "완성된 사물은 결과이면서 동시에 만들기의 조건을 다시 묻는 자료가 됩니다.",
      },
    ],
    highlightsLabel: "HOW TO LOOK",
    highlights: [
      {
        label: "01 / HAND",
        title: "손의 흔적",
        description:
          "기계로 낼 수 없는 편차를 찾아보세요. 균일하지 않은 표면이 협업의 증거입니다.",
      },
      {
        label: "02 / ORIGIN",
        title: "어디서 왔는가",
        description:
          "사물마다 붙은 지역과 재료의 출처를 따라 읽으면 전시가 한 장의 지도로 정리됩니다.",
      },
      {
        label: "03 / BUILDING",
        title: "건물도 전시의 일부",
        description:
          "1970년대 제약회사 사옥을 고쳐 쓴 공간입니다. 계단과 창의 위치가 동선을 만드는 방식을 함께 보세요.",
      },
    ],
    locationNote:
      "서울역과 회현 사이, 남산 자락으로 오르는 언덕에 있습니다. 관람 후 옥상에서 도심 쪽 전망을 보고 내려오는 동선을 권합니다.",
    notes: [
      {
        label: "BOOKING",
        title: "사전 예매 권장",
        description:
          "네이버, 29CM, 카카오, 현장 발권으로 입장할 수 있습니다. 주말은 예매분이 먼저 소진되는 편입니다.",
      },
      {
        label: "CLOSED",
        title: "월요일 휴관 · 입장 마감 17시",
        description:
          "화요일부터 일요일까지 오전 10시에 열고 오후 6시에 닫습니다. 마지막 입장은 오후 5시입니다.",
      },
    ],
    sources: [
      {
        label: "PIKNIC",
        url: "https://piknic.kr/home/sub01/exhibition.php?cate=EXHIBITION",
      },
    ],
  },
  "frieze-seoul-2026": {
    typeLabel: "ART FAIR PROFILE",
    heading: "9월 첫 주, 도시 전체가 전시장이 되는 나흘.",
    introduction:
      "프리즈 서울이 다섯 번째 회차를 맞습니다. 30개국 125개 이상의 갤러리가 코엑스 C·D홀에 모이고, 같은 기간 A·B홀에서는 키아프 서울이 열립니다. 하지만 이 주간의 진짜 규모는 코엑스 바깥에 있습니다. 을지로와 한남, 청담과 삼청의 갤러리들이 밤늦게까지 문을 열며 도시의 지도가 잠시 다시 그려집니다.",
    facts: [
      { label: "EDITION", value: "다섯 번째" },
      { label: "GALLERIES", value: "30개국 125곳 이상" },
      { label: "ASIA-PACIFIC", value: "참가 갤러리의 70% 이상" },
      { label: "CO-LOCATED", value: "키아프 서울 · 코엑스 A·B홀" },
    ],
    timelineLabel: "THE WEEK",
    timeline: [
      {
        marker: "08.31–09.03",
        title: "프리즈 위크 · 동네의 밤",
        description:
          "을지로, 한남, 청담, 삼청에서 갤러리 나이트가 이어지며 미술관 기획전도 이 주간에 맞춰 문을 엽니다.",
      },
      {
        marker: "09.02",
        title: "초대장 소지자 전용",
        description:
          "첫날은 초대장을 가진 관람객에게만 열립니다. 오전 11시부터 오후 7시까지 운영합니다.",
      },
      {
        marker: "09.03–09.05",
        title: "일반 관람",
        description:
          "3일 오후 3시부터 일반 입장이 시작되고, 이후 이틀간 오전 11시부터 오후 7시까지 이어집니다.",
      },
    ],
    highlightsLabel: "SECTIONS",
    highlights: [
      {
        label: "01 / MATERIAL PRACTICE",
        title: "재료와 손의 자리",
        description:
          "물성과 한국 전통 공예를 축으로 삼은 섹션입니다. 아트페어에서 가장 느리게 봐야 하는 구역입니다.",
      },
      {
        label: "02 / SPOTLIGHT",
        title: "다시 보는 20세기",
        description:
          "서구 미술사에서 충분히 다뤄지지 않은 20세기 작가들을 개인전 형식으로 소개합니다.",
      },
      {
        label: "03 / FOCUS",
        title: "2014년 이후의 갤러리",
        description:
          "설립 10년 안팎의 신생 갤러리들이 아시아를 넘어 확장하는 흐름을 보여 줍니다.",
      },
    ],
    locationNote:
      "코엑스 3층 C홀과 D홀에서 열립니다. 삼성역과 봉은사역 양쪽에서 진입할 수 있고, 관람 후 청담 갤러리 거리로 이동하기 좋습니다.",
    notes: [
      {
        label: "TICKET",
        title: "시간대별로 가격이 다릅니다",
        description:
          "오후 3시 이전 입장(퍼스트 액세스) 90,000원, 이후 입장(애프터눈 액세스) 70,000원, 만 7–19세 학생 55,000원입니다.",
      },
      {
        label: "PLAN",
        title: "하루에 둘 다는 어렵습니다",
        description:
          "프리즈와 키아프는 티켓이 별도이며 홀도 다릅니다. 한 회차에 하나씩 나눠 보는 편이 낫습니다.",
      },
    ],
    sources: [
      {
        label: "FRIEZE SEOUL",
        url: "https://www.frieze.com/fairs/frieze-seoul/about",
      },
      {
        label: "COEX",
        url: "https://www.coexcenter.com/events/frieze-seoul-2026/",
      },
    ],
  },
  "jack-white-seoul-2026": {
    typeLabel: "CONCERT PROFILE",
    heading: "기타 한 대와 앰프 하나로 충분하다는 증명.",
    introduction:
      "잭 화이트는 화이트 스트라입스에서 베이스 없이 기타와 드럼만으로 밴드를 굴렸습니다. 부족한 편성을 채우는 대신 그 결핍을 소리의 성격으로 만들었고, 그래미를 열두 번 받는 동안에도 그 방식은 크게 달라지지 않았습니다. 4년 만의 단독 내한이 예스24 라이브홀에서 열립니다.",
    facts: [
      { label: "GRAMMY", value: "12회 수상" },
      { label: "LAST SOLO SHOW", value: "약 4년 만" },
      { label: "VENUE", value: "예스24 라이브홀" },
      { label: "TICKET", value: "스탠딩 · 지정석 132,000원" },
    ],
    timelineLabel: "TRAJECTORY",
    timeline: [
      {
        marker: "2000s",
        title: "화이트 스트라입스",
        description:
          "기타와 드럼, 빨강·하양·검정의 규칙만으로 2000년대 개러지 록의 기준을 다시 세웁니다.",
      },
      {
        marker: "2012–",
        title: "솔로와 서드맨",
        description:
          "솔로 활동과 함께 자신의 레이블 서드맨 레코드를 통해 아날로그 제작 방식을 고집스럽게 이어 갑니다.",
      },
      {
        marker: "2026",
        title: "4년 만의 단독 공연",
        description:
          "2024년 페스티벌 헤드라이너 이후 2년, 단독 공연으로는 약 4년 만에 서울 무대에 섭니다.",
      },
    ],
    highlightsLabel: "WHAT TO EXPECT",
    highlights: [
      {
        label: "01 / SETLIST",
        title: "고정되지 않는 구성",
        description:
          "매 공연 셋리스트를 바꾸는 것으로 알려져 있습니다. 같은 곡도 그날의 편곡으로 다르게 들립니다.",
      },
      {
        label: "02 / SOUND",
        title: "아날로그를 고집하는 이유",
        description:
          "잡음과 왜곡을 지우지 않는 사운드입니다. 라이브홀 규모에서 그 질감이 가장 잘 드러납니다.",
      },
      {
        label: "03 / VENUE",
        title: "스탠딩의 밀도",
        description:
          "돔이나 아레나가 아닌 라이브홀입니다. 무대와 객석의 거리가 짧아 소리의 압력이 그대로 옵니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/jack-white/jack-white.jpg",
        alt: "파리 라 시갈 무대에서 기타를 연주하는 잭 화이트",
        caption: "Jack White, No Name Tour · La Cigale, Paris, 2025",
        credit: "Image: Gmczk · Wikimedia Commons (CC0)",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Jack_White_la_Cigale_Paris_2025.jpg",
      },
    ],
    locationNote:
      "광나루역과 아차산역 사이 구천면로에 있습니다. 공연 종료 후 5호선 막차 시간을 미리 확인해 두세요.",
    notes: [
      {
        label: "TIME",
        title: "월요일 저녁 6시 시작",
        description:
          "평일 이른 시간에 시작합니다. 퇴근 후 이동 시간을 넉넉히 잡는 편이 안전합니다.",
      },
      {
        label: "TICKET",
        title: "스탠딩 · 지정석 동일가",
        description:
          "132,000원 단일가로 운영됩니다. 예매는 예스24와 NOL 티켓에서 진행됐습니다.",
      },
    ],
    sources: [
      {
        label: "LIVE NATION KOREA",
        url: "https://www.livenation.kr/event/jack-white-live-2026-in-seoul-seoul-tickets-edp1672337",
      },
    ],
  },
};

export function getEventEditorial(id: string, locale: Locale = "ko") {
  return locale === "en" ? eventEditorialsEn[id] : eventEditorials[id];
}

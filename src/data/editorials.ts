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
        title: "Beauty Behind the Madness",
        description:
          "‘Can’t Feel My Face’와 ‘The Hills’를 통해 언더그라운드의 감각을 글로벌 팝의 중심으로 옮겼습니다.",
      },
      {
        marker: "2019–2020",
        title: "Blinding Lights / After Hours",
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
        meta: "After Hours",
        description:
          "80년대 신스팝의 질감과 즉각적인 멜로디를 결합한 위켄드의 대표곡입니다.",
      },
      {
        label: "TRACK / 2016",
        title: "Starboy",
        meta: "Starboy",
        description:
          "Daft Punk와의 협업으로 팝스타라는 자신의 이미지와 욕망을 날카롭게 재구성했습니다.",
      },
      {
        label: "TRACK / 2015",
        title: "Can’t Feel My Face",
        meta: "Beauty Behind the Madness",
        description:
          "마이클 잭슨을 연상시키는 팝 훅과 어두운 은유가 동시에 작동하는 전환점 같은 싱글입니다.",
      },
    ],
    gallery: [
      {
        src: "/editorial/the-weeknd/profile.jpg",
        alt: "흰 배경 앞에 선 위켄드 공식 프로필",
        caption: "The Weeknd",
        credit: "Image: Hyundai Card DIVE",
        sourceUrl:
          "https://dive.hyundaicard.com/web/content/contentView.hdc?contentId=20366",
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
        title: "Desert Eagle에서 POWER ANDRE 99까지",
        description:
          "‘Desert Eagle’, ‘NO PAIN’, ‘Tik Tak Tok’으로 연이어 주목받으며 두 번째 정규 앨범의 세계를 완성했습니다.",
      },
      {
        marker: "2024",
        title: "한국대중음악상 올해의 음악인",
        description:
          "장르적 실험과 대중적 확장을 동시에 인정받으며 올해의 음악인에 선정됐습니다.",
      },
      {
        marker: "2026",
        title: "Ballad of You",
        description:
          "밴드의 첫 아시아 투어를 KSPO DOME 서울 공연에서 시작합니다.",
      },
    ],
    highlightsLabel: "ESSENTIAL TRACKS",
    highlights: [
      {
        label: "TRACK / 2022",
        title: "NO PAIN",
        meta: "최우수 모던록 노래",
        description:
          "질주하는 밴드 사운드와 선언적인 후렴이 결합된 곡으로 실리카겔의 대중적 전환점이 됐습니다.",
      },
      {
        label: "TRACK / 2023",
        title: "Tik Tak Tok",
        meta: "feat. So!YoON!",
        description:
          "날카로운 기타 리프와 황소윤의 목소리가 교차하며 밴드의 리듬 감각과 확장성을 보여줍니다.",
      },
      {
        label: "TRACK / 2021",
        title: "Desert Eagle",
        meta: "최우수 모던록 노래",
        description:
          "공백기 이후 달라진 4인조 실리카겔의 응축된 연주와 사이키델릭한 전개를 들을 수 있습니다.",
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
        title: "White Iverson",
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
        title: "beerbongs & bentleys / Hollywood’s Bleeding",
        description:
          "‘rockstar’, ‘Sunflower’, ‘Circles’가 이어지며 글로벌 팝의 중심에 자리 잡았습니다.",
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
        meta: "Stoney",
        description:
          "포스트 말론 특유의 나른한 멜로디와 랩의 경계를 처음 대중에게 각인한 데뷔곡입니다.",
      },
      {
        label: "TRACK / 2018",
        title: "Sunflower",
        meta: "with Swae Lee",
        description:
          "가볍고 선명한 멜로디로 세대와 장르를 넘어 사랑받은 대표적인 팝 협업곡입니다.",
      },
      {
        label: "TRACK / 2019",
        title: "Circles",
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
        meta: "feat. 다이나믹 듀오",
        description:
          "구체적인 장소와 시간에서 출발하는 서사에 선배 듀오의 호흡을 더한 곡입니다.",
      },
      {
        label: "TRACK",
        title: "Vancouver",
        description:
          "여행지의 이름과 관계의 기억을 감각적인 멜로디로 연결한 대표곡입니다.",
      },
      {
        label: "TRACK",
        title: "Lovey Dovey",
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
};

export function getEventEditorial(id: string) {
  return eventEditorials[id];
}

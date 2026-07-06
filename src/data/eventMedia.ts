export interface MediaArtist {
  name: string;
  role: string;
  note?: string;
  noteEn?: string;
  photo?: string;
  credit?: string;
  sourceUrl?: string;
}

export interface EventMedia {
  appleMusicUrl?: string;
  appleMusicLabel?: string;
  lineup?: MediaArtist[];
}

// Search deep links always resolve to the correct artist, so we avoid
// guessing brittle Apple Music catalog IDs.
const appleSearch = (term: string) =>
  `https://music.apple.com/kr/search?term=${encodeURIComponent(term)}`;

export const eventMedia: Record<string, EventMedia> = {
  "hyundai-super-concert-28": {
    appleMusicUrl: appleSearch("The Weeknd"),
    appleMusicLabel: "The Weeknd",
    lineup: [
      {
        name: "The Weeknd",
        role: "HEADLINER",
        note: "캐나다 출신 싱어송라이터·프로듀서(본명 에이벨 테스파예). 어두운 R&B에서 출발해 스타디움 팝의 중심에 섰다.",
        noteEn:
          "Canadian singer, songwriter and producer Abel Tesfaye moved from dark R&B into the center of stadium pop.",
        photo: "/editorial/the-weeknd/weeknd.jpg",
        credit: "Brian Ziff · Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:The_Weeknd_Portrait_by_Brian_Ziff.jpg",
      },
      {
        name: "Creepy Nuts",
        role: "OPENING",
        note: "DJ 마츠나가와 R-지정의 일본 힙합 듀오. ‘Bling-Bang-Bang-Born’으로 2024년 세계적 인기를 얻었다.",
        noteEn:
          "Japanese hip-hop duo DJ Matsunaga and R-Shitei reached a global audience in 2024.",
        photo: "/editorial/the-weeknd/creepy-nuts.jpg",
        credit: "Newsen · Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Creepy_Nuts_at_the_1st_Asia_Star_Entertainer_Awards,_April_10,_2024_(cropped).jpg",
      },
    ],
  },
  "post-malone-seoul": {
    appleMusicUrl: appleSearch("Post Malone"),
    appleMusicLabel: "Post Malone",
    lineup: [
      {
        name: "Post Malone",
        role: "HEADLINER",
        note: "미국의 싱어송라이터(본명 오스틴 포스트). 힙합·팝·록을 넘나들며 2024년 컨트리 앨범 ‘F-1 Trillion’까지 영역을 넓혔다.",
        noteEn:
          "American singer-songwriter Austin Post crosses hip-hop, pop and rock, expanding into country in 2024.",
        photo: "/editorial/post-malone/portrait.jpg",
        credit: "Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/Category:Post_Malone",
      },
      {
        name: "Don Toliver",
        role: "SPECIAL GUEST",
        note: "미국 휴스턴 출신 래퍼·싱어. Travis Scott의 레이블 Cactus Jack 소속으로 ‘No Idea’로 이름을 알렸다.",
        noteEn:
          "Houston rapper and singer associated with Cactus Jack, known for his melodic and atmospheric production.",
        photo: "/editorial/post-malone/don-toliver.jpg",
        credit: "Sanchez Productions · Wikimedia Commons",
        sourceUrl:
          "https://commons.wikimedia.org/wiki/File:Don_Toliver_by_Sanchez_Productions.jpg",
      },
    ],
  },
  "silica-gel-ballad-of-you": {
    appleMusicUrl:
      "https://music.apple.com/kr/artist/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94/1031084591",
    appleMusicLabel: "실리카겔",
    lineup: [
      {
        name: "김춘추",
        role: "GUITAR · VOCAL",
        note: "기타와 보컬을 맡았다.",
      },
      {
        name: "김한주",
        role: "VOCAL · KEYBOARD",
        note: "보컬과 키보드를 맡았다.",
      },
      {
        name: "김건재",
        role: "DRUMS",
        note: "드럼을 맡았다.",
      },
      {
        name: "최웅희",
        role: "BASS",
        note: "베이스를 맡았다.",
      },
    ],
  },
  "cortis-put-your-phone-down-incheon": {
    appleMusicUrl: "https://music.apple.com/kr/artist/cortis/1831651635",
    appleMusicLabel: "CORTIS",
    lineup: [
      {
        name: "CORTIS",
        role: "GROUP",
        photo: "/editorial/cortis/group-official.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
      {
        name: "MARTIN",
        role: "MEMBER / CREATOR",
        photo: "/editorial/cortis/martin.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
      {
        name: "JAMES",
        role: "MEMBER / CREATOR",
        photo: "/editorial/cortis/james.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
      {
        name: "JUHOON",
        role: "MEMBER / CREATOR",
        photo: "/editorial/cortis/juhoon.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
      {
        name: "SEONGHYEON",
        role: "MEMBER / CREATOR",
        photo: "/editorial/cortis/seonghyeon.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
      {
        name: "KEONHO",
        role: "MEMBER / CREATOR",
        photo: "/editorial/cortis/keonho.jpg",
        credit: "BIGHIT MUSIC",
        sourceUrl: "https://ibighit.com/en/cortis/profile/",
      },
    ],
  },
  "sienna-spiro-my-house-seoul": {
    appleMusicUrl:
      "https://music.apple.com/us/artist/sienna-spiro/1745678083",
    appleMusicLabel: "Sienna Spiro",
    lineup: [
      {
        name: "Sienna Spiro",
        role: "HEADLINER",
        note: "런던 출신 싱어송라이터. 소울과 재즈의 질감, 절제된 피아노 편곡, 폭발적인 보컬을 함께 들려준다.",
        noteEn:
          "A London singer-songwriter combining soul and jazz texture, restrained piano arrangements and an explosive vocal range.",
        photo: "/editorial/sienna-spiro/profile.jpg",
        credit: "Sienna Spiro official",
        sourceUrl: "https://www.officialsiennaspiro.com/",
      },
    ],
  },
  "big-naughty-icn-ntg": {
    appleMusicUrl: appleSearch("BIG Naughty 빅나티"),
    appleMusicLabel: "BIG Naughty",
    lineup: [
      {
        name: "BIG Naughty (서동현)",
        role: "HEADLINER",
        note: "2019년 ‘쇼미더머니8’에서 3위로 주목받은 싱잉 랩 중심의 래퍼·싱어송라이터. 하이어 뮤직 소속.",
        noteEn:
          "A rapper and singer-songwriter known for melodic rap, first widely recognized through Show Me the Money 8.",
        photo: "/editorial/big-naughty/portrait.jpg",
        credit: "H1GHR MUSIC",
        sourceUrl: "https://en.h1ghrmusic.com/bignaughty",
      },
    ],
  },
};

export function getEventMedia(id: string): EventMedia | undefined {
  return eventMedia[id];
}

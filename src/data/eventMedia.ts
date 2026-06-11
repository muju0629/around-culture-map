export interface MediaArtist {
  name: string;
  role: string;
  note?: string;
  photo?: string;
  credit?: string;
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
        photo: "/editorial/the-weeknd/weeknd.jpg",
        credit: "Brian Ziff · Wikimedia Commons",
      },
      {
        name: "Creepy Nuts",
        role: "OPENING",
        note: "DJ 마츠나가와 R-지정의 일본 힙합 듀오. ‘Bling-Bang-Bang-Born’으로 2024년 세계적 인기를 얻었다.",
        photo: "/editorial/the-weeknd/creepy-nuts.jpg",
        credit: "Wikimedia Commons",
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
        photo: "/editorial/post-malone/portrait.jpg",
        credit: "Wikimedia Commons",
      },
      {
        name: "Don Toliver",
        role: "SPECIAL GUEST",
        note: "미국 휴스턴 출신 래퍼·싱어. Travis Scott의 레이블 Cactus Jack 소속으로 ‘No Idea’로 이름을 알렸다.",
        photo: "/editorial/post-malone/don-toliver.jpg",
        credit: "Wikimedia Commons",
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
  "big-naughty-icn-ntg": {
    appleMusicUrl: appleSearch("BIG Naughty 빅나티"),
    appleMusicLabel: "BIG Naughty",
    lineup: [
      {
        name: "BIG Naughty (서동현)",
        role: "HEADLINER",
        note: "2019년 ‘쇼미더머니8’에서 3위로 주목받은 싱잉 랩 중심의 래퍼·싱어송라이터. 하이어 뮤직 소속.",
        photo: "/editorial/big-naughty/portrait.jpg",
        credit: "H1GHR MUSIC",
      },
    ],
  },
};

export function getEventMedia(id: string): EventMedia | undefined {
  return eventMedia[id];
}

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
        photo: "/editorial/the-weeknd/profile.jpg",
        credit: "Hyundai Card DIVE",
      },
      {
        name: "Creepy Nuts",
        role: "OPENING",
        photo: "/editorial/the-weeknd/creepy-nuts.jpg",
        credit: "Wikimedia Commons",
        note: "‘Bling-Bang-Bang-Born’으로 알려진 일본의 힙합 듀오. 본 공연 한 시간 전 오프닝 무대.",
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
        photo: "/editorial/post-malone/portrait.jpg",
        credit: "Wikimedia Commons",
      },
      {
        name: "Don Toliver",
        role: "SPECIAL GUEST",
        photo: "/editorial/post-malone/don-toliver.jpg",
        credit: "Wikimedia Commons",
        note: "‘No Idea’·‘Bandit’로 알려진 미국 휴스턴 출신 래퍼·싱어.",
      },
    ],
  },
  "silica-gel-ballad-of-you": {
    appleMusicUrl:
      "https://music.apple.com/kr/artist/%EC%8B%A4%EB%A6%AC%EC%B9%B4%EA%B2%94/1031084591",
    appleMusicLabel: "실리카겔",
    lineup: [
      { name: "김한주", role: "DRUMS" },
      { name: "김춘추", role: "VOCAL · GUITAR" },
      { name: "김건재", role: "GUITAR · VOCAL" },
      { name: "최웅희", role: "BASS" },
    ],
  },
  "big-naughty-icn-ntg": {
    appleMusicUrl: appleSearch("BIG Naughty 빅나티"),
    appleMusicLabel: "BIG Naughty",
    lineup: [
      {
        name: "BIG Naughty (서동현)",
        role: "HEADLINER",
        photo: "/editorial/big-naughty/portrait.jpg",
        credit: "H1GHR MUSIC",
      },
    ],
  },
};

export function getEventMedia(id: string): EventMedia | undefined {
  return eventMedia[id];
}

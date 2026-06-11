export interface MediaTrack {
  title: string;
  note?: string;
}

export interface MediaArtist {
  name: string;
  role: string;
  note?: string;
  photo?: string;
}

export interface EventMedia {
  appleMusicUrl?: string;
  appleMusicLabel?: string;
  tracks?: MediaTrack[];
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
    tracks: [
      { title: "Blinding Lights" },
      { title: "Starboy" },
      { title: "Save Your Tears" },
      { title: "The Hills" },
    ],
    lineup: [
      {
        name: "The Weeknd",
        role: "HEADLINER",
        note: "에이벨 테스파예. ‘After Hours’와 ‘Dawn FM’으로 이어진 신스팝·R&B의 정점.",
        photo: "/editorial/the-weeknd/profile.jpg",
      },
      {
        name: "Creepy Nuts",
        role: "OPENING",
        note: "‘Bling-Bang-Bang-Born’으로 알려진 일본 힙합 듀오. 이번 공연 오프닝 무대.",
      },
    ],
  },
  "post-malone-seoul": {
    appleMusicUrl: appleSearch("Post Malone"),
    appleMusicLabel: "Post Malone",
    tracks: [
      { title: "Sunflower" },
      { title: "Rockstar" },
      { title: "Circles" },
      { title: "Congratulations" },
    ],
    lineup: [
      {
        name: "Post Malone",
        role: "HEADLINER",
        note: "오스틴 포스트. 힙합·팝·록을 넘나드는 멀티 장르 싱어송라이터.",
        photo: "/editorial/post-malone/f1-trillion.jpg",
      },
      {
        name: "Don Toliver",
        role: "SPECIAL GUEST",
        note: "‘No Idea’·‘Bandit’의 미국 래퍼. 이번 공연 스페셜 게스트.",
      },
    ],
  },
  "silica-gel-ballad-of-you": {
    appleMusicUrl: appleSearch("실리카겔 Silica Gel"),
    appleMusicLabel: "실리카겔",
    tracks: [{ title: "Tik Tak Tok" }, { title: "NO PAIN" }, { title: "Desert Eagle" }],
    lineup: [
      { name: "김춘추", role: "VOCAL · GUITAR" },
      { name: "김건재", role: "GUITAR · VOCAL" },
      { name: "최웅희", role: "BASS" },
      { name: "김율", role: "DRUMS" },
    ],
  },
  "big-naughty-icn-ntg": {
    appleMusicUrl: appleSearch("BIG Naughty 서동현"),
    appleMusicLabel: "BIG Naughty",
    tracks: [{ title: "정043 (Vancouver)" }, { title: "호불호" }],
    lineup: [
      {
        name: "BIG Naughty (서동현)",
        role: "HEADLINER",
        note: "고등래퍼 출신 싱어송라이터 래퍼. 멜로딕한 랩과 미성을 오가는 무대가 강점.",
        photo: "/editorial/big-naughty/portrait.jpg",
      },
    ],
  },
};

export function getEventMedia(id: string): EventMedia | undefined {
  return eventMedia[id];
}

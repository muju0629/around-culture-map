export type MoodId =
  | "sound-at-night"
  | "strange-by-day"
  | "crowded-day"
  | "wordless-hours"
  | "two-stops-for-bread"
  | "dusty-things"
  | "low-sun-street";

export interface Mood {
  id: MoodId;
  label: string;
  subtitle: string;
}

export const MOODS: Mood[] = [
  { id: "sound-at-night", label: "소리에 잠기는 밤", subtitle: "공연·리스닝바" },
  { id: "strange-by-day", label: "낯선 것과 마주 서는 낮", subtitle: "전시" },
  { id: "crowded-day", label: "사람 많은 게 좋은 날", subtitle: "축제·마켓" },
  { id: "wordless-hours", label: "아무 말 없이 오래", subtitle: "카페·바" },
  { id: "two-stops-for-bread", label: "빵 하나에 두 정거장", subtitle: "빵집" },
  { id: "dusty-things", label: "먼지 앉은 것들 사이", subtitle: "음반·헌책" },
  { id: "low-sun-street", label: "해가 낮게 드는 길", subtitle: "산책" },
];

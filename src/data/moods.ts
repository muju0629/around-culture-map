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
  labelKo: string;
  labelEn: string;
  subtitleKo: string;
  subtitleEn: string;
}

export const MOODS: Mood[] = [
  {
    id: "sound-at-night",
    labelKo: "소리에 잠기는 밤",
    labelEn: "A night to sink into sound",
    subtitleKo: "공연·리스닝바",
    subtitleEn: "Live · listening bars",
  },
  {
    id: "strange-by-day",
    labelKo: "낯선 것과 마주 서는 낮",
    labelEn: "A day facing something strange",
    subtitleKo: "전시",
    subtitleEn: "Exhibitions",
  },
  {
    id: "crowded-day",
    labelKo: "사람 많은 게 좋은 날",
    labelEn: "A day for crowds",
    subtitleKo: "축제·마켓",
    subtitleEn: "Festivals · markets",
  },
  {
    id: "wordless-hours",
    labelKo: "아무 말 없이 오래",
    labelEn: "A long while without speaking",
    subtitleKo: "카페·바",
    subtitleEn: "Cafés · bars",
  },
  {
    id: "two-stops-for-bread",
    labelKo: "빵 하나에 두 정거장",
    labelEn: "Two stops for one loaf",
    subtitleKo: "빵집",
    subtitleEn: "Bakeries",
  },
  {
    id: "dusty-things",
    labelKo: "먼지 앉은 것들 사이",
    labelEn: "Among dusty things",
    subtitleKo: "음반·헌책",
    subtitleEn: "Records · used books",
  },
  {
    id: "low-sun-street",
    labelKo: "해가 낮게 드는 길",
    labelEn: "Streets where the sun sits low",
    subtitleKo: "산책",
    subtitleEn: "Walks",
  },
];

export type EventCategory = "음악" | "전시" | "축제" | "문화공간";

export type PosterVariant =
  | "orbit"
  | "split"
  | "grid"
  | "type"
  | "wave"
  | "frame"
  | "signal"
  | "fold"
  | "column"
  | "void"
  | "environment"
  | "spots"
  | "eclipse"
  | "synthesis";

export interface CultureEvent {
  id: string;
  title: string;
  englishTitle: string;
  category: EventCategory;
  region: string;
  district: string;
  venue: string;
  address: string;
  startDate: string;
  endDate: string;
  hours: string;
  price: string;
  isFree: boolean;
  description: string;
  tags: string[];
  poster: PosterVariant;
  posterImage?: string;
  posterCredit?: string;
  latitude: number;
  longitude: number;
  locationLabel?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  featured?: boolean;
}

export type ExploreFilter =
  | "전체"
  | "오늘"
  | "이번 주말"
  | "무료"
  | EventCategory;

export interface SearchCriteria {
  category: EventCategory | null;
  when: "today" | "weekend" | null;
  free: boolean | null;
  location: string | null;
  keywords: string[];
}

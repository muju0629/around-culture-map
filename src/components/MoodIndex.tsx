import { MOODS, type MoodId } from "../data/moods";
import type { Spot } from "../types";

interface MoodIndexProps {
  spots: Spot[];
  selected: MoodId;
  onSelect: (id: MoodId) => void;
}

export function MoodIndex({ spots, selected, onSelect }: MoodIndexProps) {
  const counts = new Map<MoodId, number>();
  spots.forEach((spot) => {
    spot.moods.forEach((mood) => {
      counts.set(mood, (counts.get(mood) ?? 0) + 1);
    });
  });

  return (
    <nav className="mood-index" aria-label="무드">
      <p className="meta-ko mood-index__head">지금 서울</p>
      <ul>
        {MOODS.map((mood) => {
          const count = counts.get(mood.id) ?? 0;
          const isEmpty = count === 0;
          return (
            <li key={mood.id}>
              <button
                type="button"
                className={`mood-row${
                  mood.id === selected ? " is-selected" : ""
                }${isEmpty ? " is-empty" : ""}`}
                onClick={() => onSelect(mood.id)}
                disabled={isEmpty}
                aria-pressed={mood.id === selected}
              >
                <span className="mood-row__label">{mood.label}</span>
                <span className="mood-row__lead" aria-hidden="true" />
                <span className="mood-row__sub">{mood.subtitle}</span>
                <span className="mood-row__count numeral">
                  {isEmpty ? "—" : String(count).padStart(2, "0")}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

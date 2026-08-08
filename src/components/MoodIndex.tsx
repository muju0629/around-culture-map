import { MOODS, type MoodId } from "../data/moods";
import { useLanguage } from "../i18n/language";
import type { Spot } from "../types";

interface MoodIndexProps {
  spots: Spot[];
  selected: MoodId;
  onSelect: (id: MoodId) => void;
}

export function MoodIndex({ spots, selected, onSelect }: MoodIndexProps) {
  const { locale, copy } = useLanguage();
  const counts = new Map<MoodId, number>();
  spots.forEach((spot) => {
    spot.moods.forEach((mood) => {
      counts.set(mood, (counts.get(mood) ?? 0) + 1);
    });
  });

  return (
    <nav
      className={`mood-index${locale === "ko" ? "" : " is-latin"}`}
      aria-label={copy.course.moodNavLabel}
    >
      <p className="meta-ko mood-index__head">{copy.course.indexHead}</p>
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
                <span
                  key={selected === mood.id ? "on-" + mood.id : mood.id}
                  className="mood-row__label"
                >
                  {locale === "ko" ? mood.labelKo : mood.labelEn}
                </span>
                <span className="mood-row__lead" aria-hidden="true" />
                <span
                  className={`mood-row__sub${locale === "ko" ? "" : " meta-latin"}`}
                >
                  {locale === "ko" ? mood.subtitleKo : mood.subtitleEn}
                </span>
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

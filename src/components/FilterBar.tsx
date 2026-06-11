import { filterOptions, getFilterLabel } from "../data/events";
import { useLanguage } from "../i18n/language";
import type { ExploreFilter } from "../types";

interface FilterBarProps {
  activeFilter: ExploreFilter;
  onChange: (filter: ExploreFilter) => void;
}

export function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  const { locale } = useLanguage();

  return (
    <div
      className="filter-bar"
      aria-label={locale === "ko" ? "행사 필터" : "Event filters"}
    >
      {filterOptions.map((filter) => (
        <button
          type="button"
          key={filter}
          className={filter === activeFilter ? "is-active" : ""}
          onClick={() => onChange(filter)}
          aria-pressed={filter === activeFilter}
        >
          {getFilterLabel(filter, locale)}
        </button>
      ))}
    </div>
  );
}

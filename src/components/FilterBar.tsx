import { filterOptions } from "../data/events";
import type { ExploreFilter } from "../types";

interface FilterBarProps {
  activeFilter: ExploreFilter;
  onChange: (filter: ExploreFilter) => void;
}

export function FilterBar({ activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="filter-bar" aria-label="행사 필터">
      {filterOptions.map((filter) => (
        <button
          type="button"
          key={filter}
          className={filter === activeFilter ? "is-active" : ""}
          onClick={() => onChange(filter)}
          aria-pressed={filter === activeFilter}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

import { type FormEvent, useEffect, useMemo, useState } from "react";
import { AbstractMap } from "../components/AbstractMap";
import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { filterEvents, searchEvents } from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import type { CultureEvent, ExploreFilter, SearchCriteria } from "../types";

export function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState<ExploreFilter>("전체");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<CultureEvent[] | null>(
    null,
  );
  const [searchStatus, setSearchStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  const visibleEvents = useMemo(
    () => searchResults ?? filterEvents(activeFilter),
    [searchResults, activeFilter],
  );
  const [selectedId, setSelectedId] = useState(visibleEvents[0]?.id);
  const [panelExpanded, setPanelExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!selectedId) {
      return;
    }

    const selectedElement = document.getElementById(
      `event-list-${selectedId}`,
    );
    const listElement = selectedElement?.closest(".explore-list");

    if (!(selectedElement instanceof HTMLElement) ||
        !(listElement instanceof HTMLElement)) {
      return;
    }

    const selectedRect = selectedElement.getBoundingClientRect();
    const listRect = listElement.getBoundingClientRect();

    if (selectedRect.top < listRect.top || selectedRect.bottom > listRect.bottom) {
      listElement.scrollTo({
        top:
          listElement.scrollTop +
          selectedRect.top -
          listRect.top -
          (listRect.height - selectedRect.height) / 2,
        behavior: "smooth",
      });
    }
  }, [selectedId]);

  function handleFilterChange(filter: ExploreFilter) {
    const nextEvents = filterEvents(filter);
    setActiveFilter(filter);
    setSearchResults(null);
    setQuery("");
    setSearchStatus("idle");
    setSelectedId(nextEvents[0]?.id);
  }

  async function handleSearch(formEvent: FormEvent) {
    formEvent.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) {
      return;
    }
    setSearchStatus("loading");
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ query: trimmed }),
      });
      if (!response.ok) {
        throw new Error("search failed");
      }
      const criteria = (await response.json()) as SearchCriteria;
      const results = searchEvents(criteria);
      setSearchResults(results);
      setSelectedId(results[0]?.id);
      setSearchStatus("idle");
    } catch {
      setSearchStatus("error");
    }
  }

  function clearSearch() {
    setQuery("");
    setSearchResults(null);
    setSearchStatus("idle");
    setSelectedId(filterEvents(activeFilter)[0]?.id);
  }

  return (
    <div className="page page--explore">
      <Header />
      <main className="explore-main">
        <div className="explore-toolbar">
          <div className="explore-toolbar__title">
            <span className="eyebrow">SEOUL / THU 11 JUN</span>
            <h1>문화 지도</h1>
          </div>
          <div className="explore-controls">
            <form className="explore-search" role="search" onSubmit={handleSearch}>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="예: 이번 주말 성수 무료 전시"
                aria-label="자연어로 문화행사 검색"
              />
              {searchResults !== null ? (
                <button
                  type="button"
                  className="explore-search__clear"
                  onClick={clearSearch}
                >
                  해제
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={searchStatus === "loading" || !query.trim()}
                >
                  {searchStatus === "loading" ? "검색 중" : "검색"}
                </button>
              )}
            </form>
            {searchStatus === "error" && (
              <span className="explore-search__status">
                검색을 불러오지 못했어요. 잠시 후 다시 시도해주세요.
              </span>
            )}
            <FilterBar
              activeFilter={activeFilter}
              onChange={handleFilterChange}
            />
          </div>
          <p className="explore-toolbar__count">
            <strong>{String(visibleEvents.length).padStart(2, "0")}</strong>
            <span>PLACES FOUND</span>
          </p>
        </div>

        <div className="explore-layout">
          <section className="explore-map-panel">
            <AbstractMap
              events={visibleEvents}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
          </section>

          <section
            className={`explore-list-panel${
              panelExpanded ? " is-expanded" : " is-collapsed"
            }`}
            aria-label="행사 목록"
          >
            <button
              type="button"
              className="mobile-panel-handle"
              onClick={() => setPanelExpanded((expanded) => !expanded)}
              aria-expanded={panelExpanded}
            >
              <span />
              {visibleEvents.length}개의 장소
            </button>
            <div className="explore-list-panel__header">
              <span>INDEX</span>
              <div className="source-directory">
                <a
                  href="https://nol.yanolja.com/ticket/genre/exhibition"
                  target="_blank"
                  rel="noreferrer"
                >
                  NOL EXHIBITION ↗
                </a>
                <a
                  href="https://ticket.melon.com/concert/index.htm?genreType=GENRE_CON"
                  target="_blank"
                  rel="noreferrer"
                >
                  MELON CONCERT ↗
                </a>
              </div>
            </div>
            <div className="explore-list">
              {visibleEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  layout="list"
                  isSelected={selectedId === event.id}
                  onSelect={setSelectedId}
                  isFavorite={isFavorite(event.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AbstractMap } from "../components/AbstractMap";
import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import {
  filterEvents,
  getRegions,
  regions,
} from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";
import type { ExploreFilter } from "../types";

export function ExplorePage() {
  const { locale, copy } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedRegion = searchParams.get("area");
  const activeRegion = regions.includes(requestedRegion ?? "")
    ? requestedRegion ?? undefined
    : undefined;
  const activeRegionIndex = activeRegion
    ? regions.indexOf(activeRegion)
    : -1;
  const activeRegionLabel =
    activeRegionIndex >= 0
      ? getRegions(locale)[activeRegionIndex]
      : undefined;
  const todayLabel = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Seoul",
    weekday: "short",
    day: "2-digit",
    month: "short",
  })
    .format(new Date())
    .replace(",", "")
    .toUpperCase();
  const [activeFilter, setActiveFilter] = useState<ExploreFilter>("전체");
  const visibleEvents = useMemo(
    () => filterEvents(activeFilter, locale, activeRegion),
    [activeFilter, activeRegion, locale],
  );
  const [selectedId, setSelectedId] = useState(visibleEvents[0]?.id);
  const [panelExpanded, setPanelExpanded] = useState(false);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (
      selectedId &&
      visibleEvents.some((event) => event.id === selectedId)
    ) {
      return;
    }
    setSelectedId(visibleEvents[0]?.id);
  }, [selectedId, visibleEvents]);

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
    const nextEvents = filterEvents(filter, locale, activeRegion);
    setActiveFilter(filter);
    setSelectedId(nextEvents[0]?.id);
  }

  return (
    <div className="page page--explore">
      <Header />
      <main className="explore-main">
        <div className="explore-toolbar">
          <div className="explore-toolbar__title">
            <span className="eyebrow">SEOUL / {todayLabel}</span>
            <div className="explore-toolbar__heading-line">
              <h1>{copy.explore.title}</h1>
              {activeRegionLabel && (
                <button
                  type="button"
                  className="active-area"
                  onClick={() => {
                    const next = new URLSearchParams(searchParams);
                    next.delete("area");
                    setSearchParams(next);
                  }}
                  aria-label={copy.explore.clearArea}
                >
                  AREA / {activeRegionLabel} ×
                </button>
              )}
            </div>
          </div>
          <FilterBar
            activeFilter={activeFilter}
            onChange={handleFilterChange}
          />
          <p className="explore-toolbar__count">
            <strong>{String(visibleEvents.length).padStart(2, "0")}</strong>
            <span>{copy.explore.placesFound}</span>
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
            aria-label={copy.explore.listLabel}
          >
            <button
              type="button"
              className="mobile-panel-handle"
              onClick={() => setPanelExpanded((expanded) => !expanded)}
              aria-expanded={panelExpanded}
            >
              <span />
              {visibleEvents.length}
              {copy.explore.places}
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

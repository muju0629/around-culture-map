import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import {
  AbstractMap,
  type MapBounds,
} from "../components/AbstractMap";
import { EventCard } from "../components/EventCard";
import { FilterBar } from "../components/FilterBar";
import { Header } from "../components/Header";
import { CrosshairIcon } from "../components/Icons";
import {
  filterEvents,
  getDistanceKm,
  getRegions,
  regions,
} from "../data/events";
import { getMarkerLabels } from "../data/mapMarkers";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";
import type {
  CultureEvent,
  ExploreFilter,
  ExploreSort,
  UserLocation,
} from "../types";

type PanelSnap = "collapsed" | "half" | "expanded";

function isInsideBounds(event: CultureEvent, bounds: MapBounds) {
  return (
    event.latitude <= bounds.north &&
    event.latitude >= bounds.south &&
    event.longitude <= bounds.east &&
    event.longitude >= bounds.west
  );
}

export function ExplorePage() {
  const { locale, copy } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedRegion = searchParams.get("area");
  const requestedEventId = searchParams.get("event") ?? undefined;
  const requestedIds = searchParams.get("ids")?.split(",").filter(Boolean);
  const showSavedOnly = searchParams.get("saved") === "1";
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
  const [sort, setSort] = useState<ExploreSort>("recommended");
  const [selectedId, setSelectedId] = useState(requestedEventId);
  const [hoveredId, setHoveredId] = useState<string>();
  const [panelSnap, setPanelSnap] = useState<PanelSnap>("collapsed");
  const [dragOffset, setDragOffset] = useState(0);
  const [userLocation, setUserLocation] = useState<UserLocation>();
  const [locationStatus, setLocationStatus] = useState<
    "idle" | "loading" | "error"
  >("idle");
  const [radiusKm, setRadiusKm] = useState<number>();
  const [pendingBounds, setPendingBounds] = useState<MapBounds>();
  const [appliedBounds, setAppliedBounds] = useState<MapBounds>();
  const dragStartY = useRef(0);
  const dragged = useRef(false);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

  const visibleEvents = useMemo(() => {
    let matches = filterEvents(activeFilter, locale, activeRegion);

    if (requestedIds?.length) {
      const requestedSet = new Set(requestedIds);
      matches = matches.filter((event) => requestedSet.has(event.id));
    }
    if (showSavedOnly) {
      matches = matches.filter((event) => favorites.includes(event.id));
    }
    if (userLocation && radiusKm) {
      matches = matches.filter(
        (event) => getDistanceKm(userLocation, event) <= radiusKm,
      );
    }
    if (appliedBounds) {
      matches = matches.filter((event) =>
        isInsideBounds(event, appliedBounds),
      );
    }

    if (sort === "distance" && userLocation) {
      return [...matches].sort(
        (a, b) =>
          getDistanceKm(userLocation, a) -
          getDistanceKm(userLocation, b),
      );
    }
    if (sort === "date") {
      return [...matches].sort((a, b) =>
        a.startDate.localeCompare(b.startDate),
      );
    }
    return matches;
  }, [
    activeFilter,
    activeRegion,
    appliedBounds,
    favorites,
    locale,
    radiusKm,
    requestedIds,
    showSavedOnly,
    sort,
    userLocation,
  ]);
  const markerLabels = useMemo(
    () => getMarkerLabels(visibleEvents),
    [visibleEvents],
  );

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
    if (!requestedEventId) {
      return;
    }
    const exists = visibleEvents.some((event) => event.id === requestedEventId);
    if (exists) {
      setSelectedId(requestedEventId);
    }
  }, [requestedEventId, visibleEvents]);

  useEffect(() => {
    if (!selectedId) {
      return;
    }

    const selectedElement = document.getElementById(
      `event-list-${selectedId}`,
    );
    const listElement = selectedElement?.closest(".explore-list");

    if (
      !(selectedElement instanceof HTMLElement) ||
      !(listElement instanceof HTMLElement)
    ) {
      return;
    }

    const selectedRect = selectedElement.getBoundingClientRect();
    const listRect = listElement.getBoundingClientRect();

    if (
      selectedRect.top < listRect.top ||
      selectedRect.bottom > listRect.bottom
    ) {
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
    setActiveFilter(filter);
    setAppliedBounds(undefined);
    setPendingBounds(undefined);
  }

  function updateSearchParam(key: string, value?: string) {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    setSearchParams(next);
  }

  function requestLocation() {
    if (!navigator.geolocation) {
      setLocationStatus("error");
      return;
    }
    setLocationStatus("loading");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setRadiusKm(5);
        setSort("distance");
        setLocationStatus("idle");
        setAppliedBounds(undefined);
      },
      () => setLocationStatus("error"),
      { enableHighAccuracy: true, timeout: 10_000, maximumAge: 300_000 },
    );
  }

  function handleViewportChange(bounds: MapBounds) {
    setPendingBounds(bounds);
  }

  const snapOrder: PanelSnap[] = ["collapsed", "half", "expanded"];

  function handlePanelPointerDown(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    dragStartY.current = event.clientY;
    dragged.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function handlePanelPointerMove(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }
    const delta = event.clientY - dragStartY.current;
    if (Math.abs(delta) > 6) {
      dragged.current = true;
    }
    setDragOffset(delta);
  }

  function handlePanelPointerUp(
    event: ReactPointerEvent<HTMLButtonElement>,
  ) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    const currentIndex = snapOrder.indexOf(panelSnap);
    if (dragOffset < -45) {
      setPanelSnap(snapOrder[Math.min(currentIndex + 1, 2)]);
    } else if (dragOffset > 45) {
      setPanelSnap(snapOrder[Math.max(currentIndex - 1, 0)]);
    }
    setDragOffset(0);
  }

  function cyclePanel() {
    if (dragged.current) {
      dragged.current = false;
      return;
    }
    const currentIndex = snapOrder.indexOf(panelSnap);
    setPanelSnap(snapOrder[(currentIndex + 1) % snapOrder.length]);
  }

  const panelStyle = {
    "--panel-drag-offset": `${dragOffset}px`,
  } as CSSProperties;

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
                  onClick={() => updateSearchParam("area")}
                  aria-label={copy.explore.clearArea}
                >
                  AREA / {activeRegionLabel} ×
                </button>
              )}
            </div>
          </div>
          <div className="explore-toolbar__controls">
            <FilterBar
              activeFilter={activeFilter}
              onChange={handleFilterChange}
            />
            <div className="explore-toolbar__secondary">
              <button
                type="button"
                className={showSavedOnly ? "is-active" : ""}
                onClick={() =>
                  updateSearchParam("saved", showSavedOnly ? undefined : "1")
                }
              >
                {copy.explore.savedOnly}
              </button>
              <select
                value={sort}
                onChange={(event) =>
                  setSort(event.target.value as ExploreSort)
                }
                aria-label={
                  locale === "ko" ? "정렬 방법" : "Sort event results"
                }
              >
                <option value="recommended">
                  {copy.explore.sortRecommended}
                </option>
                <option value="distance" disabled={!userLocation}>
                  {copy.explore.sortDistance}
                </option>
                <option value="date">{copy.explore.sortDate}</option>
              </select>
            </div>
          </div>
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
              hoveredId={hoveredId}
              onSelect={setSelectedId}
              onHover={setHoveredId}
              userLocation={userLocation}
              radiusKm={radiusKm}
              onViewportChange={handleViewportChange}
            />
            <div className="explore-map-actions">
              <button
                type="button"
                onClick={requestLocation}
                disabled={locationStatus === "loading"}
              >
                <CrosshairIcon />
                {locationStatus === "loading"
                  ? copy.explore.locating
                  : copy.explore.locate}
              </button>
              {userLocation && (
                <div className="radius-control" aria-label={copy.explore.radius}>
                  {[2, 5, 10].map((radius) => (
                    <button
                      type="button"
                      key={radius}
                      className={radiusKm === radius ? "is-active" : ""}
                      onClick={() => {
                        setRadiusKm(radius);
                        setSort("distance");
                      }}
                    >
                      {radius}KM
                    </button>
                  ))}
                  <button
                    type="button"
                    className={!radiusKm ? "is-active" : ""}
                    onClick={() => setRadiusKm(undefined)}
                  >
                    ALL
                  </button>
                </div>
              )}
              {pendingBounds && (
                <button
                  type="button"
                  className="map-search-button"
                  onClick={() => {
                    setAppliedBounds(pendingBounds);
                    setPendingBounds(undefined);
                  }}
                >
                  {copy.explore.searchArea}
                </button>
              )}
              {appliedBounds && (
                <button
                  type="button"
                  className="map-search-button"
                  onClick={() => setAppliedBounds(undefined)}
                >
                  {copy.explore.clearMapArea}
                </button>
              )}
              {locationStatus === "error" && (
                <span className="location-message">
                  {copy.explore.locationError}
                </span>
              )}
            </div>
          </section>

          <section
            className={`explore-list-panel is-${panelSnap}`}
            aria-label={copy.explore.listLabel}
            style={panelStyle}
          >
            <button
              type="button"
              className="mobile-panel-handle"
              onPointerDown={handlePanelPointerDown}
              onPointerMove={handlePanelPointerMove}
              onPointerUp={handlePanelPointerUp}
              onClick={cyclePanel}
              aria-expanded={panelSnap !== "collapsed"}
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
              {visibleEvents.length > 0 ? (
                visibleEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    layout="list"
                    markerLabel={markerLabels.get(event.id)}
                    distanceKm={
                      userLocation
                        ? getDistanceKm(userLocation, event)
                        : undefined
                    }
                    isSelected={selectedId === event.id}
                    onSelect={setSelectedId}
                    onHover={setHoveredId}
                    isFavorite={isFavorite(event.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))
              ) : (
                <div className="explore-empty">{copy.explore.noResults}</div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

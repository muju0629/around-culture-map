import { useEffect, useMemo } from "react";
import { divIcon, latLng, latLngBounds } from "leaflet";
import {
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { Link } from "react-router-dom";
import { formatDateRange } from "../data/events";
import type { CultureEvent } from "../types";
import { ArrowIcon } from "./Icons";

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

interface AbstractMapProps {
  events: CultureEvent[];
  selectedId?: string;
  onSelect: (eventId: string) => void;
}

interface MapViewportProps {
  events: CultureEvent[];
  selectedEvent?: CultureEvent;
}

function MapViewport({ events, selectedEvent }: MapViewportProps) {
  const map = useMap();

  useEffect(() => {
    if (events.length === 0) {
      return;
    }

    if (events.length === 1) {
      map.setView([events[0].latitude, events[0].longitude], 13, {
        animate: true,
      });
      return;
    }

    const bounds = latLngBounds(
      events.map((event) => [event.latitude, event.longitude]),
    );
    map.fitBounds(bounds, {
      animate: true,
      maxZoom: 13,
      paddingTopLeft: [48, 84],
      paddingBottomRight: [48, 150],
    });
  }, [events, map]);

  useEffect(() => {
    if (!selectedEvent) {
      return;
    }

    map.panInside(
      latLng(selectedEvent.latitude, selectedEvent.longitude),
      {
        animate: true,
        padding: [120, 120],
      },
    );
  }, [map, selectedEvent]);

  return null;
}

export function AbstractMap({
  events,
  selectedId,
  onSelect,
}: AbstractMapProps) {
  const selectedEvent =
    events.find((event) => event.id === selectedId) ?? events[0];
  const markerGroups = useMemo(
    () =>
      Array.from(
        events.reduce((groups, event) => {
          const key = `${event.latitude.toFixed(4)}-${event.longitude.toFixed(4)}`;
          groups.set(key, [...(groups.get(key) ?? []), event]);
          return groups;
        }, new Map<string, CultureEvent[]>()),
      ),
    [events],
  );

  return (
    <div className="abstract-map" aria-label="서울 문화 지도">
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={11}
        minZoom={9}
        maxZoom={18}
        className="culture-map"
        preferCanvas
        zoomControl={false}
        placeholder={<div className="map-loading">지도를 불러오는 중</div>}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        <MapViewport events={events} selectedEvent={selectedEvent} />

        {markerGroups.map(([position, group], index) => {
          const isSelected = group.some((event) => event.id === selectedId);
          const selectedIndex = group.findIndex(
            (event) => event.id === selectedId,
          );
          const nextEvent =
            group[(selectedIndex + 1 + group.length) % group.length];
          const markerLabel =
            group.length > 1
              ? `+${group.length}`
              : String(index + 1).padStart(2, "0");
          const markerTitle = group.map((event) => event.title).join(" · ");
          const markerA11yLabel = `${markerTitle}${
            isSelected ? " 선택됨" : ""
          }`;
          const markerSize = isSelected ? 46 : group.length > 1 ? 40 : 34;
          const icon = divIcon({
            className: `culture-marker${isSelected ? " is-selected" : ""}${
              group.length > 1 ? " is-cluster" : ""
            }`,
            html: `<span aria-hidden="true">${markerLabel}</span><span class="marker-a11y">${escapeHtml(markerA11yLabel)}</span>`,
            iconAnchor: [markerSize / 2, markerSize / 2],
            iconSize: [markerSize, markerSize],
          });

          return (
            <Marker
              key={position}
              position={[group[0].latitude, group[0].longitude]}
              icon={icon}
              eventHandlers={{
                click: () => onSelect(nextEvent.id),
              }}
              keyboard
              title={markerTitle}
              zIndexOffset={isSelected ? 1000 : 0}
            >
              <Tooltip direction="top" offset={[0, -18]}>
                {group.length > 1
                  ? markerTitle
                  : group[0].title}
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>

      <div className="map-caption">
        <span>LIVE MAP / SEOUL METRO</span>
        <span>OPENSTREETMAP</span>
      </div>

      {selectedEvent && (
        <div className="map-selection" aria-live="polite">
          <span>
            SELECTED / {selectedEvent.category.toUpperCase()}
          </span>
          <strong>{selectedEvent.title}</strong>
          <small>
            {selectedEvent.venue} ·{" "}
            {formatDateRange(selectedEvent.startDate, selectedEvent.endDate)}
          </small>
          <Link to={`/events/${selectedEvent.id}`}>
            상세 보기 <ArrowIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

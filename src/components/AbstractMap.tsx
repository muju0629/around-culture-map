import { useEffect, useRef, useState } from "react";
import { divIcon, latLng, latLngBounds } from "leaflet";
import {
  Circle,
  CircleMarker,
  MapContainer,
  Marker,
  TileLayer,
  Tooltip,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Link } from "react-router-dom";
import { getMarkerGroups } from "../data/mapMarkers";
import { formatDateRange, getCategoryLabel } from "../data/events";
import { useLanguage } from "../i18n/language";
import type { CultureEvent, UserLocation } from "../types";
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
  hoveredId?: string;
  onSelect: (eventId: string) => void;
  onHover?: (eventId?: string) => void;
  userLocation?: UserLocation;
  radiusKm?: number;
  onViewportChange?: (bounds: MapBounds) => void;
}

export interface MapBounds {
  north: number;
  south: number;
  east: number;
  west: number;
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

function MapInteractionEvents({
  onViewportChange,
}: {
  onViewportChange?: (bounds: MapBounds) => void;
}) {
  const map = useMap();
  const userInitiated = useRef(false);
  const intentTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    const container = map.getContainer();
    const markZoomIntent = () => {
      userInitiated.current = true;
      clearTimeout(intentTimeout.current);
      intentTimeout.current = setTimeout(() => {
        userInitiated.current = false;
      }, 1000);
    };
    const handleControlPress = (event: Event) => {
      if (
        event.target instanceof Element &&
        event.target.closest(".leaflet-control-zoom")
      ) {
        markZoomIntent();
      }
    };

    container.addEventListener(
      "pointerdown",
      handleControlPress,
      true,
    );
    container.addEventListener("mousedown", handleControlPress, true);
    container.addEventListener("wheel", markZoomIntent, { passive: true });
    container.addEventListener("dblclick", markZoomIntent);
    container.addEventListener("keydown", markZoomIntent);

    return () => {
      clearTimeout(intentTimeout.current);
      container.removeEventListener(
        "pointerdown",
        handleControlPress,
        true,
      );
      container.removeEventListener("mousedown", handleControlPress, true);
      container.removeEventListener("wheel", markZoomIntent);
      container.removeEventListener("dblclick", markZoomIntent);
      container.removeEventListener("keydown", markZoomIntent);
    };
  }, [map]);

  useMapEvents({
    dragstart() {
      userInitiated.current = true;
    },
    zoomstart(event) {
      if ("originalEvent" in event && event.originalEvent) {
        userInitiated.current = true;
      }
    },
    dragend(event) {
      if (!userInitiated.current) {
        return;
      }
      const bounds = event.target.getBounds();
      onViewportChange?.({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
      clearTimeout(intentTimeout.current);
      userInitiated.current = false;
    },
    zoomend(event) {
      if (!userInitiated.current) {
        return;
      }
      const bounds = event.target.getBounds();
      onViewportChange?.({
        north: bounds.getNorth(),
        south: bounds.getSouth(),
        east: bounds.getEast(),
        west: bounds.getWest(),
      });
      clearTimeout(intentTimeout.current);
      userInitiated.current = false;
    },
  });
  return null;
}

export function AbstractMap({
  events,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
  userLocation,
  radiusKm,
  onViewportChange,
}: AbstractMapProps) {
  const { locale, copy } = useLanguage();
  const [openClusterKey, setOpenClusterKey] = useState<string>();
  const selectedEvent =
    events.find((event) => event.id === selectedId) ?? events[0];
  const markerGroups = getMarkerGroups(events);
  const openCluster = markerGroups.find(
    (group) => group.key === openClusterKey,
  );

  return (
    <div className="abstract-map" aria-label={copy.map.label}>
      <MapContainer
        center={[37.5665, 126.978]}
        zoom={11}
        minZoom={9}
        maxZoom={18}
        className="culture-map"
        preferCanvas
        zoomControl={false}
        placeholder={<div className="map-loading">{copy.map.loading}</div>}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        <MapViewport events={events} selectedEvent={selectedEvent} />
        <MapInteractionEvents onViewportChange={onViewportChange} />

        {userLocation && (
          <>
            {radiusKm && (
              <Circle
                center={[userLocation.latitude, userLocation.longitude]}
                radius={radiusKm * 1000}
                pathOptions={{
                  color: "#11110f",
                  fillColor: "#11110f",
                  fillOpacity: 0.035,
                  weight: 1,
                }}
                interactive={false}
              />
            )}
            <CircleMarker
              center={[userLocation.latitude, userLocation.longitude]}
              radius={7}
              pathOptions={{
                color: "#f1f0ec",
                fillColor: "#11110f",
                fillOpacity: 1,
                weight: 3,
              }}
            >
              <Tooltip direction="top">
                {locale === "ko" ? "현재 위치" : "Your location"}
              </Tooltip>
            </CircleMarker>
          </>
        )}

        {markerGroups.map((markerGroup) => {
          const group = markerGroup.events;
          const isSelected = group.some((event) => event.id === selectedId);
          const isHovered = group.some((event) => event.id === hoveredId);
          const markerLabel =
            group.length > 1
              ? `${String(markerGroup.index).padStart(2, "0")}+${group.length}`
              : String(markerGroup.index).padStart(2, "0");
          const markerTitle = group.map((event) => event.title).join(" · ");
          const markerA11yLabel = `${markerTitle}${
            isSelected ? ` ${copy.event.selected}` : ""
          }`;
          const markerSize = isSelected ? 46 : group.length > 1 ? 44 : 34;
          const icon = divIcon({
            className: `culture-marker${isSelected ? " is-selected" : ""}${
              group.length > 1 ? " is-cluster" : ""
            }${isHovered ? " is-hovered" : ""}`,
            html: `<span aria-hidden="true">${markerLabel}</span><span class="marker-a11y">${escapeHtml(markerA11yLabel)}</span>`,
            iconAnchor: [markerSize / 2, markerSize / 2],
            iconSize: [markerSize, markerSize],
          });

          return (
            <Marker
              key={markerGroup.key}
              position={[group[0].latitude, group[0].longitude]}
              icon={icon}
              eventHandlers={{
                click: () => {
                  if (group.length > 1) {
                    setOpenClusterKey(markerGroup.key);
                    return;
                  }
                  onSelect(group[0].id);
                },
                mouseover: () => onHover?.(group[0].id),
                mouseout: () => onHover?.(),
              }}
              keyboard
              title={markerTitle}
              zIndexOffset={isSelected ? 1000 : 0}
            >
              <Tooltip
                className="culture-map-preview"
                direction="top"
                offset={[0, -18]}
              >
                {group[0].posterImage && (
                  <img src={group[0].posterImage} alt="" />
                )}
                <span>
                  {group.length > 1
                    ? `${group.length} ${locale === "ko" ? "개 장소" : "places"}`
                    : getCategoryLabel(group[0].category, locale)}
                </span>
                <strong>{group.length > 1 ? markerTitle : group[0].title}</strong>
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>

      <div className="map-caption">
        <span>LIVE MAP / SEOUL METRO</span>
        <span>OPENSTREETMAP</span>
      </div>

      {openCluster && (
        <div className="map-cluster-menu" role="dialog">
          <div>
            <span>
              CLUSTER / {String(openCluster.index).padStart(2, "0")}
            </span>
            <button type="button" onClick={() => setOpenClusterKey(undefined)}>
              ×
            </button>
          </div>
          {openCluster.events.map((event, index) => (
            <button
              type="button"
              key={event.id}
              onClick={() => {
                onSelect(event.id);
                setOpenClusterKey(undefined);
              }}
            >
              <span>{String.fromCharCode(65 + index)}</span>
              <strong>{event.title}</strong>
              <small>{event.venue}</small>
            </button>
          ))}
        </div>
      )}

      {selectedEvent && (
        <div className="map-selection" aria-live="polite">
          <span>
            {copy.map.selected} /{" "}
            {getCategoryLabel(selectedEvent.category, locale).toUpperCase()}
          </span>
          <strong>{selectedEvent.title}</strong>
          <small>
            {selectedEvent.venue} ·{" "}
            {formatDateRange(
              selectedEvent.startDate,
              selectedEvent.endDate,
              locale,
            )}
          </small>
          <Link to={`/events/${selectedEvent.id}`}>
            {copy.map.details} <ArrowIcon />
          </Link>
        </div>
      )}
    </div>
  );
}

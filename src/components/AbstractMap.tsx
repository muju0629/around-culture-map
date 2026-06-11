import { useEffect, useMemo, useRef, useState } from "react";
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
import { getMarkerGroups, getMarkerLabels } from "../data/mapMarkers";
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

interface RenderCluster {
  key: string;
  events: CultureEvent[];
  index: number;
  latitude: number;
  longitude: number;
}

interface ClusterLayerProps {
  events: CultureEvent[];
  selectedId?: string;
  hoveredId?: string;
  clusters: RenderCluster[];
  onClustersChange: (clusters: RenderCluster[]) => void;
  onSelect: (eventId: string) => void;
  onHover?: (eventId?: string) => void;
  onOpenCluster: (key: string) => void;
}

function ClusterLayer({
  events,
  selectedId,
  hoveredId,
  clusters,
  onClustersChange,
  onSelect,
  onHover,
  onOpenCluster,
}: ClusterLayerProps) {
  const { locale, copy } = useLanguage();
  const map = useMap();
  const baseGroups = useMemo(() => getMarkerGroups(events), [events]);
  const labels = useMemo(() => getMarkerLabels(events), [events]);

  useEffect(() => {
    function recompute() {
      const zoom = map.getZoom();
      const projected = baseGroups.map((group) => ({
        group,
        point: map.project(
          [group.events[0].latitude, group.events[0].longitude],
          zoom,
        ),
      }));
      const used = new Array(projected.length).fill(false);
      const next: RenderCluster[] = [];

      for (let i = 0; i < projected.length; i += 1) {
        if (used[i]) {
          continue;
        }
        used[i] = true;
        const members = [projected[i]];
        for (let j = i + 1; j < projected.length; j += 1) {
          if (used[j]) {
            continue;
          }
          if (projected[i].point.distanceTo(projected[j].point) < 46) {
            used[j] = true;
            members.push(projected[j]);
          }
        }
        const memberGroups = members.map((member) => member.group);
        const groupEvents = memberGroups.flatMap((group) => group.events);
        next.push({
          key: memberGroups.map((group) => group.key).join("|"),
          events: groupEvents,
          index: Math.min(...memberGroups.map((group) => group.index)),
          latitude:
            memberGroups.reduce(
              (sum, group) => sum + group.events[0].latitude,
              0,
            ) / memberGroups.length,
          longitude:
            memberGroups.reduce(
              (sum, group) => sum + group.events[0].longitude,
              0,
            ) / memberGroups.length,
        });
      }

      onClustersChange(next);
    }

    recompute();
    map.on("zoomend moveend", recompute);
    return () => {
      map.off("zoomend moveend", recompute);
    };
  }, [map, baseGroups, onClustersChange]);

  return (
    <>
      {clusters.map((cluster) => {
        const isCluster = cluster.events.length > 1;
        const isSelected = cluster.events.some(
          (event) => event.id === selectedId,
        );
        const isHovered = cluster.events.some(
          (event) => event.id === hoveredId,
        );
        const indexLabel = String(cluster.index).padStart(2, "0");
        const markerLabel = isCluster
          ? `${indexLabel}+${cluster.events.length}`
          : labels.get(cluster.events[0].id) ?? indexLabel;
        const markerTitle = cluster.events
          .map((event) => event.title)
          .join(" · ");
        const markerA11yLabel = `${markerTitle}${
          isSelected ? ` ${copy.event.selected}` : ""
        }`;
        const markerSize = isSelected ? 46 : isCluster ? 44 : 34;
        const icon = divIcon({
          className: `culture-marker${isSelected ? " is-selected" : ""}${
            isCluster ? " is-cluster" : ""
          }${isHovered ? " is-hovered" : ""}`,
          html: `<span aria-hidden="true">${markerLabel}</span><span class="marker-a11y">${escapeHtml(
            markerA11yLabel,
          )}</span>`,
          iconAnchor: [markerSize / 2, markerSize / 2],
          iconSize: [markerSize, markerSize],
        });

        return (
          <Marker
            key={cluster.key}
            position={[cluster.latitude, cluster.longitude]}
            icon={icon}
            eventHandlers={{
              click: () => {
                if (isCluster) {
                  onOpenCluster(cluster.key);
                  return;
                }
                onSelect(cluster.events[0].id);
              },
              mouseover: () => onHover?.(cluster.events[0].id),
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
              {cluster.events[0].posterImage && (
                <img src={cluster.events[0].posterImage} alt="" />
              )}
              <span>
                {isCluster
                  ? `${cluster.events.length} ${
                      locale === "ko" ? "개 장소" : "places"
                    }`
                  : getCategoryLabel(cluster.events[0].category, locale)}
              </span>
              <strong>
                {isCluster ? markerTitle : cluster.events[0].title}
              </strong>
            </Tooltip>
          </Marker>
        );
      })}
    </>
  );
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
  const [clusters, setClusters] = useState<RenderCluster[]>([]);
  const selectedEvent =
    events.find((event) => event.id === selectedId) ?? events[0];
  const openCluster = clusters.find(
    (cluster) => cluster.key === openClusterKey,
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

        <ClusterLayer
          events={events}
          selectedId={selectedId}
          hoveredId={hoveredId}
          clusters={clusters}
          onClustersChange={setClusters}
          onSelect={onSelect}
          onHover={onHover}
          onOpenCluster={setOpenClusterKey}
        />
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

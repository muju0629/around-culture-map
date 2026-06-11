import { divIcon } from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import type { CultureEvent } from "../types";

const markerIcon = divIcon({
  className: "mini-map-marker",
  html: "<span></span>",
  iconAnchor: [8, 8],
  iconSize: [16, 16],
});

export function MiniMap({ event }: { event: CultureEvent }) {
  return (
    <div className="mini-map" aria-label={`${event.venue} map`}>
      <MapContainer
        center={[event.latitude, event.longitude]}
        zoom={14}
        zoomControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[event.latitude, event.longitude]}
          icon={markerIcon}
          interactive={false}
        />
      </MapContainer>
      <span>
        {event.latitude.toFixed(4)} N / {event.longitude.toFixed(4)} E
      </span>
    </div>
  );
}

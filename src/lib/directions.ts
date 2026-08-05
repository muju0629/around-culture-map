import { haversineMeters, walkSeconds, type LatLng } from "./course";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export interface Leg {
  seconds: number;
  meters: number;
  estimated: boolean;
}

export interface Route {
  legs: Leg[];
  line: Array<[number, number]>;
}

function coords(points: LatLng[]): string {
  return points.map((p) => `${p.longitude},${p.latitude}`).join(";");
}

function straightLineFallback(points: LatLng[]): Route {
  const legs: Leg[] = [];
  for (let i = 0; i < points.length - 1; i += 1) {
    const meters = haversineMeters(points[i], points[i + 1]);
    legs.push({ meters, seconds: walkSeconds(meters), estimated: true });
  }
  return {
    legs,
    line: points.map((p) => [p.latitude, p.longitude]),
  };
}

export async function fetchWalkingRoute(points: LatLng[]): Promise<Route> {
  if (points.length < 2) return { legs: [], line: [] };
  if (!TOKEN) return straightLineFallback(points);

  try {
    const url =
      `https://api.mapbox.com/directions/v5/mapbox/walking/${coords(points)}` +
      `?access_token=${TOKEN}&geometries=geojson&overview=full`;
    const response = await fetch(url);
    if (!response.ok) return straightLineFallback(points);

    const data = await response.json();
    const route = data.routes?.[0];
    if (!route) return straightLineFallback(points);

    return {
      legs: route.legs.map((leg: { duration: number; distance: number }) => ({
        seconds: leg.duration,
        meters: leg.distance,
        estimated: false,
      })),
      line: route.geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng] as [number, number],
      ),
    };
  } catch {
    return straightLineFallback(points);
  }
}

export async function fetchOptimalOrder(points: LatLng[]): Promise<number[]> {
  const identity = points.map((_, i) => i);
  if (points.length < 3 || points.length > 12 || !TOKEN) return identity;

  try {
    const url =
      `https://api.mapbox.com/optimized-trips/v1/mapbox/walking/${coords(points)}` +
      `?access_token=${TOKEN}&source=first&destination=last&roundtrip=false`;
    const response = await fetch(url);
    if (!response.ok) return identity;

    const data = await response.json();
    if (data.code !== "Ok" || !Array.isArray(data.waypoints)) return identity;

    const order = data.waypoints.map(
      (w: { waypoint_index: number }) => w.waypoint_index,
    );
    return order.length === points.length ? order : identity;
  } catch {
    return identity;
  }
}

import type { Spot } from "../types";

export interface LatLng {
  latitude: number;
  longitude: number;
}

const WALK_METERS_PER_SECOND = 4000 / 3600;

export function serializeCourse(ids: string[]): string {
  return ids.join(",");
}

export function parseCourse(param: string | null, known: Set<string>): string[] {
  if (!param) return [];
  const seen = new Set<string>();
  return param
    .split(",")
    .map((id) => id.trim())
    .filter((id) => {
      if (!known.has(id) || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

export function reorder<T>(list: T[], from: number, to: number): T[] {
  if (
    from < 0 ||
    to < 0 ||
    from >= list.length ||
    to >= list.length ||
    from === to
  ) {
    return list.slice();
  }
  const next = list.slice();
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}

export function haversineMeters(a: LatLng, b: LatLng): number {
  const R = 6371000;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.latitude - a.latitude);
  const dLng = toRad(b.longitude - a.longitude);
  const s =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.latitude)) *
      Math.cos(toRad(b.latitude)) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

export function walkSeconds(meters: number): number {
  return meters / WALK_METERS_PER_SECOND;
}

export function dwellMinutes(kind: Spot["kind"]): number {
  return kind === "place" ? 20 : 60;
}

export function courseTotalMinutes(
  kinds: Array<Spot["kind"]>,
  legSeconds: number[],
): number {
  const dwell = kinds.reduce((sum, kind) => sum + dwellMinutes(kind), 0);
  const walk = legSeconds.reduce((sum, s) => sum + s, 0) / 60;
  return Math.round(dwell + walk);
}

const DAY_MS = 24 * 60 * 60 * 1000;

export function daysUntilEnd(
  endDate: string | undefined,
  today: Date,
): number | undefined {
  if (!endDate) return undefined;
  const end = Date.parse(`${endDate}T00:00:00Z`);
  if (Number.isNaN(end)) return undefined;
  const start = Date.UTC(
    today.getUTCFullYear(),
    today.getUTCMonth(),
    today.getUTCDate(),
  );
  return Math.round((end - start) / DAY_MS);
}

import type { Spot } from "../types";

export interface MarkerGroup {
  key: string;
  events: Spot[];
  index: number;
}

export function getMarkerGroups(events: Spot[]): MarkerGroup[] {
  return Array.from(
    events.reduce((groups, event) => {
      const key = `${event.latitude.toFixed(4)}-${event.longitude.toFixed(4)}`;
      groups.set(key, [...(groups.get(key) ?? []), event]);
      return groups;
    }, new Map<string, Spot[]>()),
  ).map(([key, groupEvents], index) => ({
    key,
    events: groupEvents,
    index: index + 1,
  }));
}

export function getMarkerLabels(events: Spot[]) {
  const labels = new Map<string, string>();
  getMarkerGroups(events).forEach((group) => {
    group.events.forEach((event, eventIndex) => {
      const base = String(group.index).padStart(2, "0");
      labels.set(
        event.id,
        group.events.length > 1
          ? `${base}${String.fromCharCode(65 + eventIndex)}`
          : base,
      );
    });
  });
  return labels;
}

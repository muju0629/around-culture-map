import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "around:itinerary";
const CHANGE_EVENT = "around:itinerary-change";

function readItinerary() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

let cachedValue = "";
let cachedIds: string[] = [];

function getSnapshot() {
  const nextValue = window.localStorage.getItem(STORAGE_KEY) ?? "[]";
  if (nextValue !== cachedValue) {
    cachedValue = nextValue;
    cachedIds = readItinerary();
  }
  return cachedIds;
}

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(CHANGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CHANGE_EVENT, callback);
  };
}

function writeItinerary(ids: string[]) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useItinerary() {
  const itinerary = useSyncExternalStore(subscribe, getSnapshot, () => []);

  const toggleItinerary = useCallback((eventId: string) => {
    const current = getSnapshot();
    writeItinerary(
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId],
    );
  }, []);

  return {
    itinerary,
    isPlanned: (eventId: string) => itinerary.includes(eventId),
    toggleItinerary,
  };
}

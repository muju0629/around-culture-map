import { useCallback, useSyncExternalStore } from "react";
import { reorder } from "../lib/course";

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

  const toggleItinerary = useCallback((spotId: string) => {
    const current = getSnapshot();
    writeItinerary(
      current.includes(spotId)
        ? current.filter((id) => id !== spotId)
        : [...current, spotId],
    );
  }, []);

  const reorderItinerary = useCallback((from: number, to: number) => {
    writeItinerary(reorder(getSnapshot(), from, to));
  }, []);

  const clearItinerary = useCallback(() => {
    writeItinerary([]);
  }, []);

  const setItinerary = useCallback((ids: string[]) => {
    writeItinerary(ids);
  }, []);

  return {
    itinerary,
    isPlanned: (spotId: string) => itinerary.includes(spotId),
    toggleItinerary,
    reorderItinerary,
    clearItinerary,
    setItinerary,
  };
}

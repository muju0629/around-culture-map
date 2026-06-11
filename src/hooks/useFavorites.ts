import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "around:favorites";

function readFavorites() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(readFavorites);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((eventId: string) => {
    setFavorites((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId],
    );
  }, []);

  return {
    favorites,
    isFavorite: (eventId: string) => favorites.includes(eventId),
    toggleFavorite,
  };
}

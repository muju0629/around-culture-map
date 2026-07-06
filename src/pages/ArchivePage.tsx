import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { getEvents, getTodayInSeoul } from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";

export function ArchivePage() {
  const { locale, copy } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const today = getTodayInSeoul();
  const archivedEvents = getEvents(locale)
    .filter((event) => event.endDate < today)
    .sort((a, b) => b.endDate.localeCompare(a.endDate));
  const titleWords = copy.archive.title.split(" ");
  const titleLastWord = titleWords.pop();

  return (
    <div className="page page--archive">
      <Header />
      <main className="saved-main">
        <header className="saved-hero">
          <p className="eyebrow">{copy.archive.eyebrow}</p>
          <h1>
            <span>{titleWords.join(" ")}</span>
            <span>{titleLastWord}</span>
          </h1>
          <p>{copy.archive.intro}</p>
          <strong>
            {archivedEvents.length}
            {copy.archive.endedCount}
          </strong>
        </header>
        <section className="editorial-section">
          {archivedEvents.length === 0 ? (
            <p className="archive-empty">{copy.archive.empty}</p>
          ) : (
            <div className="weekly-grid">
              {archivedEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  isFavorite={isFavorite(event.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <footer className="site-footer">
        <span>AROUND © 2026</span>
      </footer>
    </div>
  );
}

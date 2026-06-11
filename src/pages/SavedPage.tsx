import { Link } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";
import {
  differenceInDays,
  formatDateRange,
  getEvents,
  getTodayInSeoul,
} from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useItinerary } from "../hooks/useItinerary";
import { useLanguage } from "../i18n/language";

export function SavedPage() {
  const { locale, copy } = useLanguage();
  const events = getEvents(locale);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { itinerary, isPlanned, toggleItinerary } = useItinerary();
  const today = getTodayInSeoul();
  const savedEvents = favorites
    .flatMap((id) => {
      const event = events.find((candidate) => candidate.id === id);
      return event ? [event] : [];
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const suggested =
    savedEvents.length === 0
      ? events
          .filter((event) => event.sourceUrl && event.endDate >= today)
          .slice(0, 3)
      : [];
  const plannedEvents = itinerary
    .flatMap((id) => {
      const event = events.find((candidate) => candidate.id === id);
      return event ? [event] : [];
    })
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  const dateCounts = plannedEvents.reduce((counts, event) => {
    counts.set(event.startDate, (counts.get(event.startDate) ?? 0) + 1);
    return counts;
  }, new Map<string, number>());
  const titleWords = copy.saved.title.split(" ");
  const titleLastWord = titleWords.pop();

  return (
    <div className="page page--saved">
      <Header />
      <main className="saved-main">
        <header className="saved-hero">
          <p className="eyebrow">{copy.saved.eyebrow}</p>
          <h1>
            <span>{titleWords.join(" ")}</span>
            <span>{titleLastWord}</span>
          </h1>
          <p>{copy.saved.intro}</p>
          <strong>
            {favorites.length}
            {copy.saved.savedCount}
          </strong>
        </header>

        <section className="saved-section">
          <div className="section-heading section-heading--inline">
            <div>
              <span className="eyebrow">ARCHIVE / 01</span>
              <h2>{copy.saved.favorites}</h2>
            </div>
            <Link className="text-link" to="/explore?saved=1">
              {copy.detail.viewMap} <ArrowIcon />
            </Link>
          </div>

          {savedEvents.length > 0 ? (
            <div className="saved-grid">
              {savedEvents.map((event) => (
                <div className="saved-card-wrap" key={event.id}>
                  <EventCard
                    event={event}
                    isFavorite={isFavorite(event.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                  <button
                    type="button"
                    className={`plan-toggle${isPlanned(event.id) ? " is-active" : ""}`}
                    onClick={() => toggleItinerary(event.id)}
                  >
                    {isPlanned(event.id)
                      ? copy.saved.removePlan
                      : copy.saved.addPlan}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="saved-empty">
              <p>{copy.saved.empty}</p>
              <Link className="button" to="/explore">
                {copy.saved.explore} <ArrowIcon />
              </Link>
              {suggested.length > 0 && (
                <div className="saved-empty__suggestions">
                  <span className="eyebrow">
                    {locale === "ko"
                      ? "이런 전시부터 저장해보세요"
                      : "Try saving these first"}
                  </span>
                  <div className="saved-empty__grid">
                    {suggested.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        isFavorite={isFavorite(event.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        <section className="saved-section saved-section--plan">
          <div className="section-heading">
            <div>
              <span className="eyebrow">ITINERARY / 02</span>
              <h2>{copy.saved.itinerary}</h2>
            </div>
            <p>
              {locale === "ko"
                ? "날짜가 겹치거나 곧 종료되는 일정은 자동으로 표시됩니다."
                : "Same-date plans and events ending soon are flagged automatically."}
            </p>
          </div>

          {plannedEvents.length > 0 ? (
            <ol className="itinerary-list">
              {plannedEvents.map((event, index) => {
                const hasConflict = (dateCounts.get(event.startDate) ?? 0) > 1;
                const daysLeft = differenceInDays(today, event.endDate);
                const endingSoon = daysLeft >= 0 && daysLeft <= 7;
                return (
                  <li key={event.id}>
                    <span className="itinerary-list__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="itinerary-list__date">
                      <strong>
                        {formatDateRange(
                          event.startDate,
                          event.endDate,
                          locale,
                        )}
                      </strong>
                      <span>{event.hours}</span>
                    </div>
                    <Link to={`/events/${event.id}`}>
                      <span className="eyebrow">
                        {event.region} / {event.venue}
                      </span>
                      <h3>{event.title}</h3>
                    </Link>
                    <div className="itinerary-list__flags">
                      {hasConflict && <span>{copy.saved.conflict}</span>}
                      {endingSoon && <span>{copy.saved.endingSoon}</span>}
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleItinerary(event.id)}
                    >
                      {copy.saved.removePlan}
                    </button>
                  </li>
                );
              })}
            </ol>
          ) : (
            <div className="saved-empty">
              <p>{copy.saved.emptyPlan}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

import { Link } from "react-router-dom";
import {
  formatDateRange,
  getCategoryLabel,
  getEventStatus,
  getTicketStatus,
} from "../data/events";
import { useLanguage } from "../i18n/language";
import type { CultureEvent } from "../types";
import { ArrowIcon, BookmarkIcon } from "./Icons";
import { Poster } from "./Poster";

interface EventCardProps {
  event: CultureEvent;
  isSelected?: boolean;
  isFavorite?: boolean;
  onSelect?: (eventId: string) => void;
  onToggleFavorite?: (eventId: string) => void;
  onHover?: (eventId?: string) => void;
  layout?: "grid" | "list" | "feature";
  markerLabel?: string;
  distanceKm?: number;
}

export function EventCard({
  event,
  isSelected = false,
  isFavorite = false,
  onSelect,
  onToggleFavorite,
  onHover,
  layout = "grid",
  markerLabel,
  distanceKm,
}: EventCardProps) {
  const { locale, copy } = useLanguage();
  const category = getCategoryLabel(event.category, locale);

  if (layout === "list") {
    return (
      <article
        id={`event-list-${event.id}`}
        className={`event-card event-card--list${isSelected ? " is-selected" : ""}`}
        onMouseEnter={() => onHover?.(event.id)}
        onMouseLeave={() => onHover?.()}
      >
        <button
          type="button"
          className="event-card__select"
          onClick={() => onSelect?.(event.id)}
          aria-pressed={isSelected}
          aria-label={`${copy.event.selectOnMap}: ${event.title}`}
        >
          <Poster event={event} showLabel={false} />
          <span className="event-card__body">
            <span className="event-card__list-topline">
              {markerLabel && (
                <span className="event-card__marker">{markerLabel}</span>
              )}
              <span className="eyebrow">
                {category} / {event.region}
                {event.sourceLabel ? ` · ${event.sourceLabel}` : ""}
              </span>
            </span>
            <strong>{event.title}</strong>
            <span className="event-card__date">
              {formatDateRange(event.startDate, event.endDate, locale)} ·{" "}
              {event.venue}
            </span>
            {distanceKm !== undefined && (
              <span className="event-card__distance">
                {distanceKm < 1
                  ? `${Math.round(distanceKm * 1000)} M`
                  : `${distanceKm.toFixed(1)} KM`}
              </span>
            )}
          </span>
        </button>
        <div className="event-card__actions">
          <button
            type="button"
            className="icon-button"
            onClick={() => onToggleFavorite?.(event.id)}
            aria-label={`${event.title} ${
              isFavorite ? copy.event.unsave : copy.event.save
            }`}
          >
            <BookmarkIcon filled={isFavorite} />
          </button>
          <Link
            to={`/events/${event.id}`}
            aria-label={`${event.title} ${copy.event.details}`}
          >
            <ArrowIcon />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`event-card event-card--${layout}`}
      onMouseEnter={() => onHover?.(event.id)}
      onMouseLeave={() => onHover?.()}
    >
      <Link to={`/events/${event.id}`} className="event-card__visual">
        <Poster event={event} />
        <span className="event-card__status">
          {getEventStatus(event, locale)}
        </span>
        <span className="event-card__preview">
          <strong>{event.venue}</strong>
          <span>{formatDateRange(event.startDate, event.endDate, locale)}</span>
          <span>{event.price}</span>
          <span>{getTicketStatus(event, locale)}</span>
        </span>
      </Link>
      <div className="event-card__meta">
        <span className="eyebrow">
          {category} / {event.region}
          {event.sourceLabel ? ` · ${event.sourceLabel}` : ""}
        </span>
        <button
          type="button"
          className="icon-button"
          onClick={() => onToggleFavorite?.(event.id)}
          aria-label={`${event.title} ${
            isFavorite ? copy.event.unsave : copy.event.save
          }`}
        >
          <BookmarkIcon filled={isFavorite} />
        </button>
      </div>
      <Link to={`/events/${event.id}`} className="event-card__title">
        <h3>{event.title}</h3>
        <ArrowIcon />
      </Link>
      <p>
        {formatDateRange(event.startDate, event.endDate, locale)} · {event.venue}
      </p>
    </article>
  );
}

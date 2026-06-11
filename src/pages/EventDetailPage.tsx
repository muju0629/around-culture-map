import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import {
  ArrowIcon,
  BookmarkIcon,
  ShareIcon,
} from "../components/Icons";
import { Poster } from "../components/Poster";
import { MiniMap } from "../components/MiniMap";
import { getEventEditorial } from "../data/editorials";
import {
  formatDateRange,
  getCategoryLabel,
  getEventById,
  getEvents,
  getVerificationDate,
  getTodayInSeoul,
} from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useItinerary } from "../hooks/useItinerary";
import { useLanguage } from "../i18n/language";
import { NotFoundPage } from "./NotFoundPage";

export function EventDetailPage() {
  const { locale, copy } = useLanguage();
  const { id = "" } = useParams();
  const events = getEvents(locale);
  const event = getEventById(id, locale);
  const editorial = getEventEditorial(id, locale);
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isPlanned, toggleItinerary } = useItinerary();
  const [shareMessage, setShareMessage] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const today = getTodayInSeoul();

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    function handleKeyDown(keyEvent: KeyboardEvent) {
      if (keyEvent.key === "Escape") {
        setLightboxIndex(null);
      }
      if (!editorial?.gallery?.length) {
        return;
      }
      if (keyEvent.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null
            ? null
            : (current - 1 + editorial.gallery!.length) %
              editorial.gallery!.length,
        );
      }
      if (keyEvent.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null
            ? null
            : (current + 1) % editorial.gallery!.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [editorial?.gallery, lightboxIndex]);

  if (!event) {
    return <NotFoundPage />;
  }

  const relatedCandidates = events.filter(
    (candidate) =>
      candidate.id !== event.id &&
      candidate.endDate >= today &&
      (candidate.district === event.district ||
        candidate.category === event.category),
  );
  const relatedFallbacks = events.filter(
    (candidate) =>
      candidate.id !== event.id &&
      candidate.endDate >= today &&
      !relatedCandidates.some((relatedEvent) => relatedEvent.id === candidate.id),
  );
  const related = [...relatedCandidates, ...relatedFallbacks].slice(0, 3);
  const mediaSources =
    editorial?.sources.filter((source) =>
      /music\.apple|spotify|youtube|youtu\.be/i.test(source.url),
    ) ?? [];
  const verifiedDate = new Intl.DateTimeFormat(
    locale === "ko" ? "ko-KR" : "en-GB",
    { year: "numeric", month: "2-digit", day: "2-digit" },
  ).format(new Date(`${getVerificationDate(event)}T00:00:00`));

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage(copy.detail.copied);
    } catch {
      setShareMessage(copy.detail.copyFailed);
    }
    window.setTimeout(() => setShareMessage(""), 2200);
  }

  return (
    <div className="page page--detail">
      <Header />
      <main>
        <div className="detail-topbar">
          <button type="button" className="text-link" onClick={() => navigate(-1)}>
            <ArrowIcon />
            {copy.detail.back}
          </button>
          <span>
            {getCategoryLabel(event.category, locale).toUpperCase()} /{" "}
            {event.region.toUpperCase()}
          </span>
          <span>
            {event.sourceLabel
              ? `SOURCE — ${event.sourceLabel}`
              : `AROUND INDEX — ${event.id.slice(0, 5).toUpperCase()}`}
          </span>
        </div>

        <nav className="detail-section-nav" aria-label="Detail sections">
          <a href="#info">{copy.detail.navInfo}</a>
          <a href="#profile">
            {editorial ? copy.detail.navProfile : copy.detail.navAbout}
          </a>
          {editorial && <a href="#visit">{copy.detail.navVisit}</a>}
          {editorial && <a href="#sources">{copy.detail.navSources}</a>}
        </nav>

        <section className="detail-hero" id="info">
          <div className="detail-hero__poster">
            <Poster event={event} />
          </div>
          <div className="detail-hero__content">
            <p className="eyebrow">
              {locale === "en"
                ? `${getCategoryLabel(event.category, locale)} / ${event.region}`
                : event.englishTitle}
            </p>
            <h1>{event.title}</h1>
            <p className="detail-hero__intro">{event.description}</p>

            <dl className="detail-facts">
              <div>
                <dt>DATE</dt>
                <dd>
                  {formatDateRange(event.startDate, event.endDate, locale)}
                </dd>
              </div>
              <div>
                <dt>TIME</dt>
                <dd>{event.hours}</dd>
              </div>
              <div>
                <dt>VENUE</dt>
                <dd>{event.venue}</dd>
              </div>
              <div>
                <dt>PRICE</dt>
                <dd>{event.price}</dd>
              </div>
            </dl>

            <div className="detail-actions">
              <button
                type="button"
                className={`button${isFavorite(event.id) ? " is-active" : ""}`}
                onClick={() => toggleFavorite(event.id)}
              >
                <BookmarkIcon filled={isFavorite(event.id)} />
                {isFavorite(event.id) ? "SAVED" : "SAVE"}
              </button>
              <button
                type="button"
                className={`button${isPlanned(event.id) ? " is-active" : ""}`}
                onClick={() => toggleItinerary(event.id)}
              >
                {isPlanned(event.id)
                  ? copy.detail.removePlan
                  : copy.detail.addPlan}
              </button>
              <button type="button" className="button" onClick={handleShare}>
                <ShareIcon />
                SHARE
              </button>
              {event.sourceUrl && (
                <a
                  className="button"
                  href={event.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  OFFICIAL
                  <ArrowIcon />
                </a>
              )}
              <span className="share-message" role="status">
                {shareMessage}
              </span>
            </div>
          </div>
        </section>

        {editorial ? (
          <>
            <section className="editorial-profile" id="profile">
              <div className="detail-section-index">
                <span>PROFILE / 01</span>
              </div>
              <div className="editorial-profile__copy">
                <span className="eyebrow">{editorial.typeLabel}</span>
                <h2>{editorial.heading}</h2>
                <p>{editorial.introduction}</p>
              </div>
              <dl className="editorial-facts">
                {editorial.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {editorial.gallery && (
              <section
                className="editorial-gallery"
                aria-label={copy.detail.relatedImages}
              >
                <div className="editorial-gallery__heading">
                  <span className="eyebrow">IMAGE ESSAY / 02</span>
                  <p>
                    {copy.detail.galleryIntro}
                  </p>
                </div>
                <div
                  className={`editorial-gallery__grid editorial-gallery__grid--${Math.min(
                    editorial.gallery.length,
                    4,
                  )}`}
                >
                  {editorial.gallery.map((image) => (
                    <figure key={image.src}>
                      <button
                        type="button"
                        className="editorial-gallery__open"
                        onClick={() =>
                          setLightboxIndex(
                            editorial.gallery!.findIndex(
                              (candidate) => candidate.src === image.src,
                            ),
                          )
                        }
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </button>
                      <figcaption>
                        <strong>{image.caption}</strong>
                        <a
                          href={image.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {image.credit} ↗
                        </a>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <section className="editorial-story">
              <div className="editorial-story__timeline">
                <div className="section-label">
                  <span>TIMELINE / 03</span>
                  <strong>{editorial.timelineLabel}</strong>
                </div>
                <ol>
                  {editorial.timeline.map((item) => (
                    <li key={`${item.marker}-${item.title}`}>
                      <span>{item.marker}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="editorial-story__highlights">
                <div className="section-label">
                  <span>SELECTED / 04</span>
                  <strong>{editorial.highlightsLabel}</strong>
                </div>
                <div className="highlight-list">
                  {editorial.highlights.map((highlight) => (
                    <article key={`${highlight.label}-${highlight.title}`}>
                      <span>{highlight.label}</span>
                      <h3>{highlight.title}</h3>
                      {highlight.meta && <em>{highlight.meta}</em>}
                      <p>{highlight.description}</p>
                    </article>
                  ))}
                </div>
                {mediaSources.length > 0 && (
                  <div className="detail-media-links">
                    <span className="eyebrow">OFFICIAL LISTENING</span>
                    {mediaSources.map((source) => (
                      <a
                        key={source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {source.label} <ArrowIcon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className="visit-section" id="visit">
              <div className="detail-section-index">
                <span>VISIT / 05</span>
              </div>
              <div className="visit-location">
                <span className="eyebrow">LOCATION</span>
                <h2>{event.venue}</h2>
                <p>{editorial.locationNote}</p>
                <div className="detail-address">
                  <span>ADDRESS</span>
                  <strong>{event.address}</strong>
                  <span>{event.hours}</span>
                </div>
                <a
                  className="button"
                  href={`https://www.openstreetmap.org/?mlat=${event.latitude}&mlon=${event.longitude}#map=16/${event.latitude}/${event.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  MAP
                  <ArrowIcon />
                </a>
                <MiniMap event={event} />
              </div>
              <div className="visit-notes">
                {editorial.notes.map((note) => (
                  <article key={`${note.label}-${note.title}`}>
                    <span>{note.label}</span>
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="detail-sources" id="sources">
              <div>
                <span className="eyebrow">
                  SOURCES / {copy.detail.verified.toUpperCase()} {verifiedDate}
                </span>
                <p>
                  {copy.detail.sourceNotice}
                </p>
              </div>
              <div className="detail-sources__links">
                {editorial.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {source.label}
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            </section>
          </>
        ) : (
          <section className="detail-info" id="profile">
            <div className="detail-info__index">
              <span>ABOUT / 01</span>
            </div>
            <div className="detail-info__copy">
              <h2>{copy.detail.fallbackHeading}</h2>
              <p>{event.description}</p>
              <div className="detail-address">
                <span>ADDRESS</span>
                <strong>{event.address}</strong>
                <span>{event.hours}</span>
              </div>
              <div className="tag-list" aria-label={copy.detail.eventTags}>
                {event.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="fallback-source">
                <span>
                  {copy.detail.verified.toUpperCase()} {verifiedDate}
                </span>
                {event.sourceUrl && (
                  <a
                    href={event.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {event.sourceLabel ?? "OFFICIAL"} <ArrowIcon />
                  </a>
                )}
              </div>
            </div>
            <div className="detail-info__location">
              <div className="detail-info__marker" aria-hidden="true">
                <span>SEOUL</span>
                <strong>{event.region}</strong>
                <span>
                  {event.latitude.toFixed(4)} N /{" "}
                  {event.longitude.toFixed(4)} E
                </span>
              </div>
              <MiniMap event={event} />
            </div>
          </section>
        )}

        <section className="related-section">
          <div className="section-heading section-heading--inline">
            <div>
              <span className="eyebrow">NEARBY / RELATED</span>
              <h2>{copy.detail.related}</h2>
            </div>
            <Link className="text-link" to="/explore">
              {copy.detail.viewMap} <ArrowIcon />
            </Link>
          </div>
          <div className="related-grid">
            {related.map((relatedEvent) => (
              <EventCard
                key={relatedEvent.id}
                event={relatedEvent}
                isFavorite={isFavorite(relatedEvent.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>
      </main>
      <div className="detail-mobile-actions">
        <button
          type="button"
          className={isFavorite(event.id) ? "is-active" : ""}
          onClick={() => toggleFavorite(event.id)}
        >
          <BookmarkIcon filled={isFavorite(event.id)} />
          {isFavorite(event.id) ? "SAVED" : "SAVE"}
        </button>
        <Link to={`/explore?event=${event.id}`}>
          MAP <ArrowIcon />
        </Link>
        {event.sourceUrl && (
          <a href={event.sourceUrl} target="_blank" rel="noreferrer">
            OFFICIAL <ArrowIcon />
          </a>
        )}
      </div>
      {lightboxIndex !== null && editorial?.gallery && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={editorial.gallery[lightboxIndex].caption}
        >
          <button
            type="button"
            className="image-lightbox__close"
            onClick={() => setLightboxIndex(null)}
          >
            {copy.detail.closeGallery}
          </button>
          <button
            type="button"
            className="image-lightbox__previous"
            aria-label={copy.detail.previousImage}
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + editorial.gallery!.length) %
                  editorial.gallery!.length,
              )
            }
          >
            ←
          </button>
          <figure>
            <img
              src={editorial.gallery[lightboxIndex].src}
              alt={editorial.gallery[lightboxIndex].alt}
            />
            <figcaption>
              <strong>{editorial.gallery[lightboxIndex].caption}</strong>
              <span>{editorial.gallery[lightboxIndex].credit}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="image-lightbox__next"
            aria-label={copy.detail.nextImage}
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex + 1) % editorial.gallery!.length,
              )
            }
          >
            →
          </button>
        </div>
      )}
      <footer className="site-footer">
        <span>AROUND © 2026</span>
        <span>SEOUL CULTURE INDEX</span>
        <span>DESIGN PROTOTYPE / VOL.01</span>
      </footer>
    </div>
  );
}

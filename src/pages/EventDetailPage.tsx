import { useEffect, useMemo, useRef, useState } from "react";
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
import {
  getEventEditorial,
  type EditorialImage,
} from "../data/editorials";
import { getEventMedia } from "../data/eventMedia";
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

interface DetailVisual extends EditorialImage {
  role?: string;
  note?: string;
  kind: "artist" | "editorial";
}

export function EventDetailPage() {
  const { locale, copy } = useLanguage();
  const { id = "" } = useParams();
  const events = getEvents(locale);
  const event = getEventById(id, locale);
  const editorial = getEventEditorial(id, locale);
  const media = getEventMedia(id);
  const roster = (media?.lineup ?? []).filter((artist) => !artist.photo);
  const visualImages = useMemo<DetailVisual[]>(() => {
    const images = new Map<string, DetailVisual>();

    for (const artist of media?.lineup ?? []) {
      if (!artist.photo) {
        continue;
      }

      const editorialImage = editorial?.gallery?.find(
        (image) => image.src === artist.photo,
      );
      images.set(artist.photo, {
        src: artist.photo,
        alt: editorialImage?.alt ?? artist.name,
        caption: artist.name,
        credit: artist.credit ?? editorialImage?.credit ?? "Official image",
        sourceUrl:
          artist.sourceUrl ?? editorialImage?.sourceUrl ?? event?.sourceUrl ?? "#",
        role: artist.role,
        note: locale === "en" ? artist.noteEn ?? artist.note : artist.note,
        kind: "artist",
      });
    }

    for (const image of editorial?.gallery ?? []) {
      if (!images.has(image.src)) {
        images.set(image.src, { ...image, kind: "editorial" });
      }
    }

    return [...images.values()];
  }, [editorial, event?.sourceUrl, locale, media]);
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { isPlanned, toggleItinerary } = useItinerary();
  const [shareMessage, setShareMessage] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxOpen = lightboxIndex !== null;
  const today = getTodayInSeoul();

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const restoreTarget = document.activeElement as HTMLElement | null;
    const dialog = lightboxRef.current;
    dialog
      ?.querySelector<HTMLElement>(".image-lightbox__close")
      ?.focus();

    function handleKeyDown(keyEvent: KeyboardEvent) {
      if (keyEvent.key === "Escape") {
        setLightboxIndex(null);
        return;
      }
      if (keyEvent.key === "Tab" && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          "button, a[href]",
        );
        if (focusable.length === 0) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (keyEvent.shiftKey && document.activeElement === first) {
          keyEvent.preventDefault();
          last.focus();
        } else if (!keyEvent.shiftKey && document.activeElement === last) {
          keyEvent.preventDefault();
          first.focus();
        }
        return;
      }
      if (!visualImages.length) {
        return;
      }
      if (keyEvent.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === null
            ? null
            : (current - 1 + visualImages.length) % visualImages.length,
        );
      }
      if (keyEvent.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === null ? null : (current + 1) % visualImages.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      restoreTarget?.focus?.();
    };
  }, [lightboxOpen, visualImages]);

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
                {media?.appleMusicUrl && (
                  <a
                    className="button media-apple"
                    href={media.appleMusicUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    APPLE MUSIC
                    {media.appleMusicLabel ? ` · ${media.appleMusicLabel}` : ""}
                    <ArrowIcon />
                  </a>
                )}
                {roster.length > 0 && (
                  <div className="artist-roster">
                    <span>MEMBERS / ON STAGE</span>
                    <ul>
                      {roster.map((artist) => (
                        <li key={artist.name}>
                          <strong>{artist.name}</strong>
                          <span>{artist.role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

            {visualImages.length > 0 && (
              <section
                className="editorial-gallery"
                aria-label={copy.detail.relatedImages}
              >
                <div className="editorial-gallery__heading">
                  <span className="eyebrow">VISUAL INDEX / 02</span>
                </div>
                <div
                  className={`editorial-gallery__grid editorial-gallery__grid--${Math.min(
                    visualImages.length,
                    4,
                  )}`}
                >
                  {visualImages.map((image) => (
                    <figure
                      className={`editorial-gallery__item editorial-gallery__item--${image.kind}`}
                      key={image.src}
                    >
                      <button
                        type="button"
                        className="editorial-gallery__open"
                        onClick={() =>
                          setLightboxIndex(
                            visualImages.findIndex(
                              (candidate) => candidate.src === image.src,
                            ),
                          )
                        }
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </button>
                      <figcaption>
                        <div>
                          {image.role && <span>{image.role}</span>}
                          <strong>{image.caption}</strong>
                          {image.note && <p>{image.note}</p>}
                        </div>
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
                      {highlight.url && (
                        <a
                          className="highlight-list__link"
                          href={highlight.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          APPLE MUSIC
                          <ArrowIcon />
                        </a>
                      )}
                    </article>
                  ))}
                </div>
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
      {lightboxIndex !== null && visualImages[lightboxIndex] && (
        <div
          className="image-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={visualImages[lightboxIndex].caption}
          ref={lightboxRef}
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
                (lightboxIndex - 1 + visualImages.length) %
                  visualImages.length,
              )
            }
          >
            ←
          </button>
          <figure>
            <img
              src={visualImages[lightboxIndex].src}
              alt={visualImages[lightboxIndex].alt}
            />
            <figcaption>
              <strong>{visualImages[lightboxIndex].caption}</strong>
              <span>{visualImages[lightboxIndex].credit}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="image-lightbox__next"
            aria-label={copy.detail.nextImage}
            onClick={() =>
              setLightboxIndex((lightboxIndex + 1) % visualImages.length)
            }
          >
            →
          </button>
        </div>
      )}
      <footer className="site-footer">
        <span>AROUND © 2026</span>
      </footer>
    </div>
  );
}

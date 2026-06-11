import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import {
  ArrowIcon,
  BookmarkIcon,
  ShareIcon,
} from "../components/Icons";
import { Poster } from "../components/Poster";
import { getEventEditorial } from "../data/editorials";
import { events, formatDateRange, getEventById } from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { NotFoundPage } from "./NotFoundPage";

export function EventDetailPage() {
  const { id = "" } = useParams();
  const event = getEventById(id);
  const editorial = getEventEditorial(id);
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [shareMessage, setShareMessage] = useState("");

  if (!event) {
    return <NotFoundPage />;
  }

  const relatedCandidates = events.filter(
    (candidate) =>
      candidate.id !== event.id &&
      (candidate.district === event.district ||
        candidate.category === event.category),
  );
  const relatedFallbacks = events.filter(
    (candidate) =>
      candidate.id !== event.id &&
      !relatedCandidates.some((relatedEvent) => relatedEvent.id === candidate.id),
  );
  const related = [...relatedCandidates, ...relatedFallbacks].slice(0, 3);

  async function handleShare() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareMessage("링크를 복사했습니다.");
    } catch {
      setShareMessage("주소창의 링크를 복사해주세요.");
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
            돌아가기
          </button>
          <span>
            {event.category.toUpperCase()} / {event.region.toUpperCase()}
          </span>
          <span>
            {event.sourceLabel
              ? `SOURCE — ${event.sourceLabel}`
              : `AROUND INDEX — ${event.id.slice(0, 5).toUpperCase()}`}
          </span>
        </div>

        <section className="detail-hero">
          <div className="detail-hero__poster">
            <Poster event={event} />
          </div>
          <div className="detail-hero__content">
            <p className="eyebrow">{event.englishTitle}</p>
            <h1>{event.title}</h1>
            <p className="detail-hero__intro">{event.description}</p>

            <dl className="detail-facts">
              <div>
                <dt>DATE</dt>
                <dd>{formatDateRange(event.startDate, event.endDate)}</dd>
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
            <section className="editorial-profile">
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
              <section className="editorial-gallery" aria-label="관련 이미지">
                <div className="editorial-gallery__heading">
                  <span className="eyebrow">IMAGE ESSAY / 02</span>
                  <p>
                    포스터 바깥의 인물과 작품을 함께 보면 이번 행사의 맥락이
                    더 선명해집니다.
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
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={image.src} alt={image.alt} loading="lazy" />
                      </a>
                      <figcaption>
                        <strong>{image.caption}</strong>
                        <span>{image.credit}</span>
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
              </div>
            </section>

            <section className="visit-section">
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

            <section className="detail-sources">
              <div>
                <span className="eyebrow">SOURCES / UPDATED 2026.06.11</span>
                <p>
                  일정, 가격, 관람 조건은 변경될 수 있습니다. 이미지와 정보는
                  연결된 공식 페이지를 기준으로 확인했으며, 실제 서비스 공개
                  전에는 각 이미지의 사용 권한을 별도로 확보해야 합니다.
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
          <section className="detail-info">
            <div className="detail-info__index">
              <span>ABOUT / 01</span>
            </div>
            <div className="detail-info__copy">
              <h2>장소와 시간 사이에 놓인 하나의 장면.</h2>
              <p>{event.description}</p>
              <div className="detail-address">
                <span>ADDRESS</span>
                <strong>{event.address}</strong>
                <span>{event.hours}</span>
              </div>
              <div className="tag-list" aria-label="행사 태그">
                {event.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="detail-info__marker" aria-hidden="true">
              <span>SEOUL</span>
              <strong>{event.region}</strong>
              <span>
                {event.latitude.toFixed(4)} N / {event.longitude.toFixed(4)} E
              </span>
            </div>
          </section>
        )}

        <section className="related-section">
          <div className="section-heading section-heading--inline">
            <div>
              <span className="eyebrow">NEARBY / RELATED</span>
              <h2>함께 둘러볼 곳</h2>
            </div>
            <Link className="text-link" to="/explore">
              지도에서 보기 <ArrowIcon />
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
      <footer className="site-footer">
        <span>AROUND © 2026</span>
        <span>SEOUL CULTURE INDEX</span>
        <span>DESIGN PROTOTYPE / VOL.01</span>
      </footer>
    </div>
  );
}

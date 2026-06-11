import { Link } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";
import { Poster } from "../components/Poster";
import {
  getCurrentWeekend,
  getEvents,
  getRegions,
  getTodayInSeoul,
} from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";

export function HomePage() {
  const { locale, copy } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const events = getEvents(locale);
  const regions = getRegions(locale);
  const weekend = getCurrentWeekend(getTodayInSeoul());
  const weekendLabel = `${weekend.start.slice(5).replace("-", ".")}–${weekend.end
    .slice(5)
    .replace("-", ".")}`;
  const featured = events.filter((event) => event.featured);
  const weekly = events
    .filter((event) => !event.featured)
    .slice(0, 4);

  return (
    <div className="page page--home">
      <Header />
      <main>
        <section className="home-hero">
          <div className="home-hero__copy">
            <p className="eyebrow">CURATED CULTURE MAP / SEOUL</p>
            <h1>
              {copy.home.title[0]}
              <br />
              {copy.home.title[1]}
            </h1>
            <div className="home-hero__footer">
              <p>
                {copy.home.intro[0]}
                <br />
                {copy.home.intro[1]}
              </p>
              <Link className="text-link" to="/explore">
                {copy.home.exploreMap} <ArrowIcon />
              </Link>
            </div>
          </div>
          <Link
            to={`/events/${featured[0].id}`}
            className="home-hero__poster"
            aria-label={`${featured[0].title} ${copy.event.details}`}
          >
            <Poster event={featured[0]} />
            <span className="home-hero__number">01</span>
          </Link>
        </section>

        <section className="editorial-section" id="weekly">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED / {weekendLabel}</span>
              <h2>{copy.home.weekend}</h2>
            </div>
            <p>
              {copy.home.weekendIntro[0]}
              <br />
              {copy.home.weekendIntro[1]}
            </p>
          </div>
          <div className="featured-grid">
            {featured.map((event, index) => (
              <div
                className={`featured-grid__item featured-grid__item--${index + 1}`}
                key={event.id}
              >
                <EventCard
                  event={event}
                  layout={index === 0 ? "feature" : "grid"}
                  isFavorite={isFavorite(event.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="manifesto-strip">
          <p>NEARBY</p>
          <p>NOTABLE</p>
          <p>NOW</p>
          <span>AROUND SEOUL CULTURE INDEX</span>
        </section>

        <section className="editorial-section editorial-section--weekly">
          <div className="section-heading section-heading--inline">
            <div>
              <span className="eyebrow">WEEKLY INDEX</span>
              <h2>{copy.home.openNow}</h2>
            </div>
            <Link className="text-link" to="/explore">
              {copy.home.viewAll} <ArrowIcon />
            </Link>
          </div>
          <div className="weekly-grid">
            {weekly.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isFavorite={isFavorite(event.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </section>

        <section className="region-index">
          <div className="section-heading">
            <div>
              <span className="eyebrow">AREA INDEX / 06</span>
              <h2>{copy.home.area}</h2>
            </div>
            <p>{copy.home.areaIntro}</p>
          </div>
          <div className="region-list">
            {regions.map((region, index) => (
              <Link key={region} to="/explore" className="region-list__item">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{region}</strong>
                <span>SEOUL</span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        </section>

        <section className="home-cta">
          <p className="eyebrow">AROUND / CULTURE MAP</p>
          <h2>
            {copy.home.cta[0]}
            <br />
            {copy.home.cta[1]}
          </h2>
          <Link className="button button--light" to="/explore">
            EXPLORE THE MAP <ArrowIcon />
          </Link>
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

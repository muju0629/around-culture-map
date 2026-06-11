import { Link } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";
import { Poster } from "../components/Poster";
import {
  getCurrentWeek,
  getEvents,
  getTodayInSeoul,
} from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";

export function HomePage() {
  const { locale, copy } = useLanguage();
  const { isFavorite, toggleFavorite } = useFavorites();
  const events = getEvents(locale);
  const today = getTodayInSeoul();
  const week = getCurrentWeek(today);
  const weekLabel = `${week.start.slice(5).replace("-", ".")}–${week.end
    .slice(5)
    .replace("-", ".")}`;
  const recommendedIds = [
    "inside-other-spaces",
    "damien-hirst-mmca",
    "dialogue-in-the-dark-bukchon",
  ];
  const activeOfficialExhibitions = events.filter(
    (event) =>
      event.category === "전시" &&
      Boolean(event.sourceUrl) &&
      event.startDate <= week.end &&
      event.endDate >= today,
  );
  const featured = [
    ...recommendedIds
      .map((id) =>
        activeOfficialExhibitions.find((event) => event.id === id),
      )
      .filter((event) => event !== undefined),
    ...activeOfficialExhibitions.filter(
      (event) => !recommendedIds.includes(event.id),
    ),
  ].slice(0, 3);
  const upcomingIds = [
    "javier-sola-one-year",
    "silica-gel-ballad-of-you",
    "post-malone-seoul",
    "hyundai-super-concert-28",
  ];
  const upcoming = upcomingIds.flatMap((id) => {
    const event = events.find((candidate) => candidate.id === id);
    return event && event.endDate >= today ? [event] : [];
  });

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

        <section className="editorial-section" id="selected">
          <div className="section-heading">
            <div>
              <span className="eyebrow">CURATED / {weekLabel}</span>
              <h2>{copy.home.weeklyExhibitions}</h2>
            </div>
            <p>
              {copy.home.weeklyExhibitionsIntro[0]}
              <br />
              {copy.home.weeklyExhibitionsIntro[1]}
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
          {copy.home.manifesto.map((word) => (
            <p key={word}>{word}</p>
          ))}
          <span>AROUND SEOUL CULTURE INDEX</span>
        </section>

        <section className="editorial-section editorial-section--weekly">
          <div className="section-heading section-heading--inline">
            <div>
              <span className="eyebrow">UPCOMING INDEX / 2026</span>
              <h2>{copy.home.upcoming}</h2>
            </div>
            <Link className="text-link" to="/explore">
              {copy.home.viewAll} <ArrowIcon />
            </Link>
          </div>
          <div className="weekly-grid">
            {upcoming.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isFavorite={isFavorite(event.id)}
                onToggleFavorite={toggleFavorite}
              />
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

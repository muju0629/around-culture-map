import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const today = getTodayInSeoul();
  const week = getCurrentWeek(today);
  const weekLabel = `${week.start.slice(5).replace("-", ".")}–${week.end
    .slice(5)
    .replace("-", ".")}`;
  const recommendedIds = [
    "inside-other-spaces",
    "damien-hirst-mmca",
    "to-alexa",
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
  const upcoming = events
    .filter((event) => event.sourceUrl && event.startDate > today)
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .slice(0, 7);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function discoverRandomEvent() {
    const currentEvents = events.filter((event) => event.endDate >= today);
    const event =
      currentEvents[Math.floor(Math.random() * currentEvents.length)];
    if (event) {
      navigate(`/events/${event.id}`);
    }
  }

  return (
    <div className="page page--home">
      <Header />
      <main>
        <section className="home-hero" data-reveal>
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
              <div className="home-hero__links">
                <Link className="text-link" to="/explore">
                  {copy.home.exploreMap} <ArrowIcon />
                </Link>
                <button
                  type="button"
                  className="text-link"
                  onClick={discoverRandomEvent}
                >
                  {copy.home.random} <ArrowIcon />
                </button>
              </div>
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

        <section className="editorial-section" id="selected" data-reveal>
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
            {featured.map((event) => (
              <div className="featured-grid__item" key={event.id}>
                <EventCard
                  event={event}
                  isFavorite={isFavorite(event.id)}
                  onToggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </div>
        </section>

        <section className="manifesto-strip" data-reveal>
          {copy.home.manifesto.map((word) => (
            <p key={word}>{word}</p>
          ))}
          <span>AROUND SEOUL CULTURE INDEX</span>
        </section>

        <section
          className="editorial-section editorial-section--weekly"
          data-reveal
        >
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

        <section className="home-cta" data-reveal>
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

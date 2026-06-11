import { Link } from "react-router-dom";
import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";
import { Poster } from "../components/Poster";
import { events, regions } from "../data/events";
import { useFavorites } from "../hooks/useFavorites";

export function HomePage() {
  const { isFavorite, toggleFavorite } = useFavorites();
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
              오늘 주변에서
              <br />
              발견할 문화
            </h1>
            <div className="home-hero__footer">
              <p>
                음악, 전시, 축제와 새로운 공간.
                <br />
                지금 서울에서 열리는 장면을 모았습니다.
              </p>
              <Link className="text-link" to="/explore">
                지도에서 둘러보기 <ArrowIcon />
              </Link>
            </div>
          </div>
          <Link
            to={`/events/${featured[0].id}`}
            className="home-hero__poster"
            aria-label={`${featured[0].title} 상세 보기`}
          >
            <Poster event={featured[0]} />
            <span className="home-hero__number">01</span>
          </Link>
        </section>

        <section className="editorial-section" id="weekly">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED / 06.11–06.14</span>
              <h2>이번 주말</h2>
            </div>
            <p>
              에디터가 고른 세 개의 장면.
              <br />
              가까운 곳부터 천천히 살펴보세요.
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
              <h2>지금 열리는 곳</h2>
            </div>
            <Link className="text-link" to="/explore">
              전체 보기 <ArrowIcon />
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
              <h2>지역으로 찾기</h2>
            </div>
            <p>익숙한 동네를 새롭게 보는 여섯 개의 시작점.</p>
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
            가까운 장면부터
            <br />
            발견해보세요.
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

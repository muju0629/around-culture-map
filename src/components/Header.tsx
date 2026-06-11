import { Link, NavLink } from "react-router-dom";
import { getRegions, regions } from "../data/events";
import { useFavorites } from "../hooks/useFavorites";
import { useLanguage } from "../i18n/language";
import type { Locale } from "../types";

interface HeaderProps {
  inverted?: boolean;
}

export function Header({ inverted = false }: HeaderProps) {
  const { locale, setLocale, copy } = useLanguage();
  const { favorites } = useFavorites();
  const localizedRegions = getRegions(locale);

  return (
    <header className={`site-header${inverted ? " site-header--inverted" : ""}`}>
      <Link className="wordmark" to="/" aria-label={copy.header.homeLabel}>
        AROUND
        <span className="wordmark__index">SEOUL / 0626</span>
      </Link>
      <nav className="site-nav" aria-label={copy.header.navLabel}>
        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          {copy.header.explore}
        </NavLink>
        <a className="site-nav__curated" href="/#selected">
          {copy.header.curated}
        </a>
        <details className="area-menu">
          <summary>{copy.header.area}</summary>
          <div
            className="area-menu__panel"
            aria-label={copy.header.areaMenuLabel}
          >
            <span className="eyebrow">SEOUL / AREA INDEX</span>
            <div className="area-menu__links">
              <Link
                className="area-menu__all"
                to="/explore"
                onClick={(event) =>
                  event.currentTarget.closest("details")?.removeAttribute("open")
                }
              >
                <span>00</span>
                <strong>{copy.header.allAreas}</strong>
              </Link>
              {regions.map((region, index) => (
                <Link
                  key={region}
                  to={`/explore?area=${encodeURIComponent(region)}`}
                  onClick={(event) =>
                    event.currentTarget.closest("details")?.removeAttribute("open")
                  }
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{localizedRegions[index]}</strong>
                </Link>
              ))}
            </div>
          </div>
        </details>
        <NavLink
          to="/saved"
          className={({ isActive }) =>
            `site-nav__saved${isActive ? " is-active" : ""}`
          }
        >
          {copy.header.saved}
          <span>{String(favorites.length).padStart(2, "0")}</span>
        </NavLink>
        <span className="site-nav__edition">VOL. 01</span>
        <div className="language-switch" aria-label={copy.header.languageLabel}>
          {(["ko", "en"] as Locale[]).map((option) => (
            <button
              type="button"
              key={option}
              className={locale === option ? "is-active" : ""}
              onClick={() => setLocale(option)}
              aria-pressed={locale === option}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

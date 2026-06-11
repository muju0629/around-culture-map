import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/language";
import type { Locale } from "../types";

interface HeaderProps {
  inverted?: boolean;
}

export function Header({ inverted = false }: HeaderProps) {
  const { locale, setLocale, copy } = useLanguage();

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
        <a href="/#weekly">{copy.header.weekly}</a>
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

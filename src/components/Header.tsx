import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  inverted?: boolean;
}

export function Header({ inverted = false }: HeaderProps) {
  return (
    <header className={`site-header${inverted ? " site-header--inverted" : ""}`}>
      <Link className="wordmark" to="/" aria-label="AROUND 홈">
        AROUND
        <span className="wordmark__index">SEOUL / 0626</span>
      </Link>
      <nav className="site-nav" aria-label="주요 메뉴">
        <NavLink
          to="/explore"
          className={({ isActive }) => (isActive ? "is-active" : "")}
        >
          EXPLORE
        </NavLink>
        <a href="/#weekly">WEEKLY</a>
        <span className="site-nav__edition">VOL. 01</span>
      </nav>
    </header>
  );
}

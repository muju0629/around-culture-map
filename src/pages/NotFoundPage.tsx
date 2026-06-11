import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";
import { useLanguage } from "../i18n/language";

export function NotFoundPage() {
  const { copy } = useLanguage();

  return (
    <div className="page page--not-found">
      <Header />
      <main className="not-found">
        <span className="eyebrow">404 / NOT FOUND</span>
        <h1>{copy.notFound.title}</h1>
        <Link className="text-link" to="/">
          {copy.notFound.home} <ArrowIcon />
        </Link>
      </main>
    </div>
  );
}

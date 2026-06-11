import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ArrowIcon } from "../components/Icons";

export function NotFoundPage() {
  return (
    <div className="page page--not-found">
      <Header />
      <main className="not-found">
        <span className="eyebrow">404 / NOT FOUND</span>
        <h1>이 장면은 아직 없습니다.</h1>
        <Link className="text-link" to="/">
          홈으로 돌아가기 <ArrowIcon />
        </Link>
      </main>
    </div>
  );
}

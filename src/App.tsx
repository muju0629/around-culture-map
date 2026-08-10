import {
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { ChatWidget } from "./components/ChatWidget";
import { ArchivePage } from "./pages/ArchivePage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SavedPage } from "./pages/SavedPage";

function Layout() {
  return (
    <>
      {/* 새 이동은 최상단, 뒤로가기는 스크롤 복원 — 라우터 내장 동작 */}
      <ScrollRestoration />
      <Outlet />
      <ChatWidget />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/explore", element: <ExplorePage /> },
      { path: "/course", element: <ExplorePage /> },
      { path: "/events/:id", element: <EventDetailPage /> },
      { path: "/archive", element: <ArchivePage /> },
      { path: "/saved", element: <SavedPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

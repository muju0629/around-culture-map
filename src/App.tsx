import { Outlet, createBrowserRouter, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ChatWidget } from "./components/ChatWidget";
import { ArchivePage } from "./pages/ArchivePage";
import { EventDetailPage } from "./pages/EventDetailPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SavedPage } from "./pages/SavedPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
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

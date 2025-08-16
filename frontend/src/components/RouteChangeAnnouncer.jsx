import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteChangeAnnouncer() {
  const { pathname } = useLocation();
  useEffect(() => {
    const live = document.getElementById("route-change-live-region");
    if (live) live.textContent = `Navigated to ${pathname}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div id="route-change-live-region" aria-live="polite" className="sr-only" />
  );
}

import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

  import { createRoot, hydrateRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  // Prerendered routes ship with markup in #root (scripts/prerender.mjs), so
  // hydrate those; the SPA fallback shell has an empty root and renders fresh.
  const root = document.getElementById("root")!;
  if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }

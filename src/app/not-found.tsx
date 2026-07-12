import Link from "next/link";

import { siteConfig } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section min-h-[70dvh]">
      <div className="page-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="kicker">Page not found</p>
          <h1 className="display mt-5 text-7xl">This path has gone quiet.</h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--graphite)]">
            The page may have moved, but the main SageStone service paths are still available.
          </p>
        </div>
        <div className="panel grid gap-3 p-6">
          <Link href="/services" className="button-primary">
            Explore Services
          </Link>
          <Link href="/contact" className="button-secondary">
            Contact SageStone
          </Link>
          <a href={siteConfig.calendlyUrl} className="button-subtle" target="_blank" rel="noreferrer">
            Book a Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { MobileNav } from "./mobile-nav";
import { TrackedLink } from "./tracked-link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries-we-serve" },
  { label: "Resources", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="nav-glass sticky top-0 z-50 border-b border-[var(--line)]">
      <div className="page-shell relative flex min-h-[76px] items-center justify-between gap-5 py-3">
        <Link href="/" aria-label="SageStone Inc home" className="flex items-center">
          <Image
            src={siteConfig.logo}
            alt="SageStone Inc"
            width={575}
            height={124}
            priority
            className="h-auto w-[min(54vw,245px)]"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-extrabold text-[color-mix(in_oklab,var(--charcoal)_78%,transparent)] transition hover:bg-white/70 hover:text-[var(--deep-sage)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <TrackedLink
            href={siteConfig.calendlyUrl}
            label="Book a Discovery Call"
            location="header"
            event="booking_intent_click"
            className="button-primary hidden sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            Book a Discovery Call
          </TrackedLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

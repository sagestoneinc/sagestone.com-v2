"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { siteConfig } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries-we-serve" },
  { label: "Resources", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-[var(--line)] bg-white/70 text-[var(--charcoal)]"
      >
        {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>
      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-4 top-[76px] rounded-[20px] border border-[var(--line)] bg-[var(--ivory)] p-4 shadow-2xl"
        >
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 font-bold text-[var(--charcoal)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <TrackedLink
              href={siteConfig.calendlyUrl}
              label="Book a Discovery Call"
              location="mobile_nav"
              event="booking_intent_click"
              className="button-primary mt-3 w-full"
              target="_blank"
              rel="noreferrer"
            >
              Book a Discovery Call
            </TrackedLink>
          </div>
        </nav>
      ) : null}
    </div>
  );
}

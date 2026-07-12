import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { TrackedLink } from "./tracked-link";

const services = [
  ["/virtual-assistant-services", "Virtual Assistant Services"],
  ["/customer-support-outsourcing", "Customer Support Outsourcing"],
  ["/ecommerce-virtual-assistant", "E-commerce Virtual Assistant"],
  ["/business-operations-support", "Business Operations Support"],
  ["/web-maintenance-support", "Website Maintenance Support"],
] as const;

const company = [
  ["/about", "About"],
  ["/industries-we-serve", "Industries"],
  ["/case-studies", "Case Studies"],
  ["/blog", "Resources"],
  ["/contact", "Contact"],
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--ivory)]">
      <div className="page-shell grid gap-10 py-14 lg:grid-cols-[1.25fr_0.9fr_0.7fr_0.9fr]">
        <div>
          <Image
            src={siteConfig.darkLogo}
            alt="SageStone Inc"
            width={881}
            height={250}
            className="h-auto w-64"
          />
          <p className="mt-5 max-w-sm text-white/72">
            Premium operations support for founders and growing teams that need scalable capacity without adding chaos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <TrackedLink
              href={siteConfig.calendlyUrl}
              label="Book a Discovery Call"
              location="footer"
              event="booking_intent_click"
              className="button-primary bg-[var(--sage)] text-white hover:bg-white hover:text-[var(--charcoal)]"
              target="_blank"
              rel="noreferrer"
            >
              Book a Discovery Call
            </TrackedLink>
            <TrackedLink href="/services" label="Explore Services" location="footer" className="button-secondary border-white/20 bg-white/5 text-white hover:bg-white/10">
              Explore Services
            </TrackedLink>
          </div>
        </div>
        <FooterColumn title="Services" links={services} />
        <FooterColumn title="Company" links={company} />
        <div>
          <h2 className="text-sm font-black">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneHref} className="hover:text-white">
              {siteConfig.phoneDisplay}
            </a>
            <span>Remote / Worldwide</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-shell flex flex-col gap-3 py-5 text-sm text-white/56 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} SageStone Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly (readonly [string, string])[];
}) {
  return (
    <div>
      <h2 className="text-sm font-black">{title}</h2>
      <ul className="mt-4 grid gap-3 text-sm text-white/70">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

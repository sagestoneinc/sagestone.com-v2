import { ArrowRight, Check, Layers3, Mail, Sprout } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { breadcrumbJsonLd, faqJsonLd, organizationJsonLd, pageJsonLd, websiteJsonLd } from "@/lib/seo";
import { sitemapEntries, siteConfig, type SitePage } from "@/lib/site";
import { ContactForm } from "./contact-form";
import { TrackedLink } from "./tracked-link";

export function JsonLd({ data }: { data: object | null }) {
  if (!data) return null;
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PageView({ page }: { page: SitePage }) {
  const related = sitemapEntries
    .filter((entry) => entry.path !== page.path && entry.kind === page.kind)
    .slice(0, 3);

  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={breadcrumbJsonLd(page)} />
      <JsonLd data={pageJsonLd(page)} />
      <JsonLd data={faqJsonLd(page)} />
      <Hero page={page} />
      <SupportSignals />
      <ContentSections page={page} />
      {page.faqs ? <FaqBlock page={page} /> : null}
      {page.kind === "contact" ? <ContactBlock source={page.path === "/contact" ? "contact" : "assessment"} /> : null}
      {page.kind === "blog" || page.kind === "case-study" ? <EditorialBlock page={page} /> : null}
      {related.length ? <RelatedBlock items={related} /> : null}
      <FinalCta page={page} />
    </>
  );
}

function Hero({ page }: { page: SitePage }) {
  return (
    <section className="relative overflow-hidden">
      <div className="page-shell grid min-h-[calc(100dvh-76px)] gap-10 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <p className="kicker">{page.eyebrow ?? page.primaryKeyword}</p>
          <h1 className="display text-balance mt-5 max-w-4xl text-[clamp(3.7rem,8vw,7.6rem)] text-[var(--charcoal)]">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-[var(--graphite)]">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={page.primaryCta.href}
              label={page.primaryCta.label}
              location={`${page.path}_hero`}
              event={page.primaryCta.event}
              className="button-primary"
              target={page.primaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={page.primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {page.primaryCta.label}
              <ArrowRight size={18} aria-hidden="true" />
            </TrackedLink>
            {page.secondaryCta ? (
              <TrackedLink
                href={page.secondaryCta.href}
                label={page.secondaryCta.label}
                location={`${page.path}_hero`}
                event={page.secondaryCta.event}
                className="button-secondary"
              >
                {page.secondaryCta.label}
              </TrackedLink>
            ) : null}
          </div>
        </div>
        <div className="panel relative p-5 lg:translate-y-8">
          <div className="rounded-[18px] bg-[var(--charcoal)] p-7 text-white">
            <Image
              src={siteConfig.darkLogo}
              alt="SageStone Inc logo on charcoal background"
              width={881}
              height={250}
              priority
              className="h-auto w-full"
            />
            <div className="mt-10 grid gap-4">
              {["Define recurring work", "Document handoffs", "Protect customer care"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                  <Check className="h-5 w-5 text-[var(--sage)]" aria-hidden="true" />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 fine-print">
            A calm, structured support model for the operational work that should not live in a founder&apos;s head.
          </p>
        </div>
      </div>
    </section>
  );
}

function SupportSignals() {
  const signals = [
    ["Flexible support", "Built around your existing tools and workflows."],
    ["Clear ownership", "Scopes are documented so recurring work has a home."],
    ["Human customer care", "Support protects the tone and reliability of your customer experience."],
  ];

  return (
    <section className="border-y border-[var(--line)] bg-white/42">
      <div className="page-shell grid gap-px py-5 md:grid-cols-3">
        {signals.map(([title, body]) => (
          <article key={title} className="p-5">
            <h2 className="font-black">{title}</h2>
            <p className="mt-2 fine-print">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContentSections({ page }: { page: SitePage }) {
  return (
    <section className="section">
      <div className="page-shell grid gap-10">
        {page.sections.map((section, index) => (
          <article
            key={section.heading}
            className={`grid gap-7 ${index % 2 === 0 ? "lg:grid-cols-[0.75fr_1.25fr]" : "lg:grid-cols-[1.25fr_0.75fr]"}`}
          >
            <div className={index % 2 === 0 ? "" : "lg:order-2"}>
              <p className="fine-print">0{index + 1}</p>
              <h2 className="display mt-3 text-balance text-5xl text-[var(--charcoal)]">{section.heading}</h2>
            </div>
            <div className="panel p-6 sm:p-8">
              <p className="text-lg text-[var(--graphite)]">{section.body}</p>
              {section.items ? (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl bg-[var(--mist)] p-4 font-bold">
                      <Sprout className="h-5 w-5 shrink-0 text-[var(--deep-sage)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqBlock({ page }: { page: SitePage }) {
  return (
    <section className="section bg-[var(--mist)]">
      <div className="page-shell max-w-4xl">
        <h2 className="display text-5xl">Questions before you delegate</h2>
        <div className="mt-8 grid gap-4">
          {page.faqs?.map((faq) => (
            <details key={faq.question} className="panel p-5">
              <summary className="cursor-pointer text-lg font-black">{faq.question}</summary>
              <p className="mt-4 text-[var(--graphite)]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBlock({ source }: { source: string }) {
  return (
    <section className="section bg-[var(--mist)]">
      <div className="page-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="display text-5xl">Share the workflow.</h2>
          <p className="mt-5 text-lg text-[var(--graphite)]">
            Your message is used to understand fit and next steps. Do not include passwords or sensitive credentials in this form.
          </p>
          <div className="mt-6 grid gap-3 fine-print">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>
        <ContactForm source={source} />
      </div>
    </section>
  );
}

function EditorialBlock({ page }: { page: SitePage }) {
  return (
    <section className="section bg-white/54">
      <div className="page-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="panel p-6">
          <Layers3 className="h-8 w-8 text-[var(--deep-sage)]" aria-hidden="true" />
          <h2 className="mt-5 text-2xl font-black">Search intent</h2>
          <p className="mt-3 fine-print">{page.primaryKeyword}</p>
        </div>
        <div className="panel p-6">
          <h2 className="display text-4xl">Related terms covered naturally</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {page.secondaryKeywords.map((keyword) => (
              <span key={keyword} className="rounded-xl border border-[var(--line)] bg-[var(--ivory)] px-3 py-2 text-sm font-bold">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RelatedBlock({ items }: { items: SitePage[] }) {
  return (
    <section className="section">
      <div className="page-shell">
        <h2 className="display text-5xl">Related paths</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Link key={item.path} href={item.path} className="panel block p-6 transition hover:-translate-y-1">
              <h3 className="text-xl font-black">{item.h1}</h3>
              <p className="mt-3 fine-print">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta({ page }: { page: SitePage }) {
  return (
    <section className="section">
      <div className="page-shell panel grid gap-8 bg-[var(--charcoal)] p-8 text-white md:grid-cols-[1.2fr_0.8fr] md:items-center md:p-12">
        <div>
          <Mail className="h-8 w-8 text-[var(--sage)]" aria-hidden="true" />
          <h2 className="display mt-5 text-5xl">Create more space to lead.</h2>
          <p className="mt-5 max-w-2xl text-white/74">
            Let SageStone take ownership of recurring operational work so your team can focus on customers, growth, and strategic decisions.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <TrackedLink
            href={page.primaryCta.href}
            label={page.primaryCta.label}
            location={`${page.path}_final_cta`}
            event={page.primaryCta.event}
            className="button-primary bg-[var(--sage)] text-white hover:bg-white hover:text-[var(--charcoal)]"
            target={page.primaryCta.href.startsWith("http") ? "_blank" : undefined}
            rel={page.primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {page.primaryCta.label}
          </TrackedLink>
          <TrackedLink href="/contact" label="Contact SageStone" location={`${page.path}_final_cta`} className="button-secondary border-white/20 bg-white/5 text-white">
            Contact SageStone
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}

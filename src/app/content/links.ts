import { posts } from "virtual:blog";
import { services } from "./site";
import { industryPages } from "./industries";
import { solutionPages } from "./solutions";

/* Slug → link card helpers for internal linking. Unknown slugs are dropped. */

type LinkCard = { to: string; title: string; body?: string };

const pick = <T,>(slugs: string[], all: T[], key: (t: T) => string, card: (t: T) => LinkCard) =>
  slugs.map((slug) => all.find((t) => key(t) === slug)).filter((t): t is T => Boolean(t)).map(card);

export const serviceLinks = (slugs: string[]) =>
  pick(slugs, services, (s) => s.slug, (s) => ({ to: `/services/${s.slug}`, title: s.title, body: s.summary }));

export const industryLinks = (slugs: string[]) =>
  pick(slugs, industryPages, (i) => i.slug, (i) => ({ to: `/industries/${i.slug}`, title: i.name, body: i.pains[0] }));

export const solutionLinks = (slugs: string[]) =>
  pick(slugs, solutionPages, (s) => s.slug, (s) => ({ to: `/solutions/${s.slug}`, title: s.name, body: s.summary }));

/** Latest posts tagged with any of the given service slugs. */
export const postLinksForServices = (slugs: string[], limit = 3): LinkCard[] =>
  posts
    .filter((p) => p.services.some((s) => slugs.includes(s)))
    .slice(0, limit)
    .map((p) => ({ to: `/blog/${p.slug}`, title: p.title, body: p.description }));

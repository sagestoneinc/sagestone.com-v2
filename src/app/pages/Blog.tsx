import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand } from "../components/ui-brand/components";
import { posts, formatPostDate } from "../content/blog";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function Blog() {
  return (
    <>
      <PageHero
        eyebrow="The SageStone Blog"
        title="Guides for calmer, better-run operations."
        description="Practical writing on virtual assistants, customer support, and remote operations, for founders and teams who want support that actually works."
        breadcrumbs={[{ name: "Blog" }]}
      />

      <Section className="pt-0 pb-24 md:pb-32">
        <Container>
          {posts.length === 0 ? (
            <p className="text-[1.1rem] text-slate-olive dark:text-muted-foreground">New articles are on the way.</p>
          ) : (
            <ul className="flex flex-col">
              {posts.map((post) => (
                <li key={post.slug} className="border-t border-border last:border-b">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group grid gap-4 py-10 md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-10"
                  >
                    <div className="flex flex-row gap-3 text-[0.85rem] text-slate-olive dark:text-muted-foreground md:flex-col md:gap-1">
                      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                      <span className="uppercase tracking-[0.16em] text-gold-ink">{post.category}</span>
                    </div>
                    <div>
                      <h2
                        className="text-[1.6rem] leading-tight text-charcoal transition-colors group-hover:text-sage dark:text-chalk md:text-[2rem]"
                        style={serif}
                      >
                        {post.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                        {post.description}
                      </p>
                      <p className="mt-4 text-[0.85rem] text-slate-olive dark:text-muted-foreground">
                        By {post.author} · {post.readingMinutes} min read
                      </p>
                    </div>
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden h-5 w-5 text-sage-ink transition-transform group-hover:translate-x-1 md:block"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

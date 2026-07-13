import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "../components/ui-brand/primitives";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageHero, CTABand } from "../components/ui-brand/components";
import { Seo } from "../components/seo/Seo";
import { pageMeta } from "../content/seo";
import { breadcrumbSchema } from "../components/seo/schema";
import { blogPosts } from "../content/blog";

export function Blog() {
  return (
    <>
      <Seo
        {...pageMeta.blog}
        path="/blog"
        jsonLd={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/blog" },
        ])}
      />
      <PageHero
        eyebrow="Insights"
        title="Guides on outsourcing and remote support."
        description="Practical, no-fluff writing on hiring virtual assistants, outsourcing customer support, and scaling operations with dedicated remote talent."
      />

      <Section className="pt-6 pb-28 md:pb-40">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(34,38,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(34,38,34,0.35)]"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[0.78rem] uppercase tracking-[0.18em] text-gold">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-[1.35rem] leading-snug text-charcoal dark:text-chalk">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-sage">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

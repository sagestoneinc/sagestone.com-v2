import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "../components/ui-brand/primitives";
import { CTABand, PageHero } from "../components/ui-brand/components";
import { blogPosts } from "../content/blog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Virtual assistant and operations insights"
        description="Actionable articles for teams improving customer workflows, operational consistency, and scalable remote support."
      />

      <Section className="pt-6 pb-20 md:pb-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <article key={post.slug} className="overflow-hidden rounded-2xl border border-border bg-card">
                <ImageWithFallback
                  src={post.heroImage}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover"
                  loading="lazy"
                  width={1200}
                  height={750}
                />
                <div className="p-7">
                  <p className="text-[0.78rem] uppercase tracking-[0.16em] text-gold">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <h2 className="mt-3 text-[1.5rem] text-charcoal dark:text-chalk">{post.title}</h2>
                  <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-2 font-medium text-sage"
                  >
                    Read article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand title="Need support with these workflows?" description="Book a consultation to map the right support model for your operations." />
    </>
  );
}

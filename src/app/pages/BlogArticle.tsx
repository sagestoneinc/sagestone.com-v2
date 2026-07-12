import { Navigate, Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Container, Section, Button } from "../components/ui-brand/primitives";
import { CTABand } from "../components/ui-brand/components";
import { blogPostBySlug } from "../content/blog";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogArticle() {
  const { slug } = useParams();
  const post = slug ? blogPostBySlug[slug] : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Section className="pt-40 pb-14 md:pt-48 md:pb-20">
        <Container>
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-[0.95rem] text-slate-olive hover:text-sage">
            <ArrowLeft className="h-4 w-4" /> Back to blog
          </Link>
          <h1 className="max-w-4xl text-[2.7rem] leading-[1.05] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[3.7rem]">
            {post.title}
          </h1>
          <p className="mt-6 max-w-3xl text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            {post.description}
          </p>
          <p className="mt-4 text-[0.85rem] uppercase tracking-[0.16em] text-slate-olive dark:text-muted-foreground">
            Published {new Date(post.publishedAt).toLocaleDateString()} · Updated {new Date(post.modifiedAt).toLocaleDateString()}
          </p>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            <ImageWithFallback
              src={post.heroImage}
              alt={post.title}
              className="aspect-[16/8] w-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={1200}
              height={600}
            />
          </div>
        </Container>
      </Section>

      <Section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-[1.8rem] text-charcoal dark:text-chalk">{section.heading}</h2>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="border-t border-border pt-10">
              <h2 className="text-[1.55rem] text-charcoal dark:text-chalk">Related services</h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {post.relatedServiceLinks.map((link) => (
                  <li key={link.href}>
                    <Button to={link.href} variant="secondary">
                      {link.label}
                    </Button>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Container>
      </Section>

      <CTABand title="Want help applying this in your operations?" />
    </>
  );
}

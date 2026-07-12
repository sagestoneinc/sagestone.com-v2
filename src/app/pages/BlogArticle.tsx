import { Link, Navigate, useParams } from "react-router";
import { Container, Section, Eyebrow } from "../components/ui-brand/primitives";
import { BreadcrumbTrail } from "../components/layout/BreadcrumbTrail";
import { SeoHead } from "../seo/SeoHead";
import { getBlogPostingSchema, getBreadcrumbSchema } from "../seo/schema";
import { BLOG_POST_MAP } from "../../config/blog";

export function BlogArticle() {
  const { slug } = useParams();
  const article = slug ? BLOG_POST_MAP.get(slug) : undefined;

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <SeoHead
        title={article.title}
        description={article.description}
        path={article.path}
        schemas={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: article.title, path: article.path },
          ]),
          getBlogPostingSchema({
            headline: article.title,
            description: article.description,
            path: article.path,
            image: article.image,
            datePublished: article.datePublished,
            dateModified: article.dateModified,
            authorName: "SageStone Inc",
          }),
        ]}
      />

      <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <BreadcrumbTrail items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: article.title }]} />
          <Eyebrow className="mb-6">Article</Eyebrow>
          <h1 className="max-w-4xl text-[2.4rem] leading-[1.06] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[3.3rem]">
            {article.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            {article.description}
          </p>
          <p className="mt-4 text-[0.82rem] uppercase tracking-[0.16em] text-slate-olive dark:text-muted-foreground">
            Published {article.datePublished} · Updated {article.dateModified}
          </p>
        </Container>
      </Section>

      <Section className="py-0 pb-20 md:pb-28">
        <Container>
          <div className="space-y-6">
            {article.sections.map((section) => (
              <article key={section.heading} className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-[1.55rem] text-charcoal dark:text-chalk">{section.heading}</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0 pb-24 md:pb-32">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-7">
            <h2 className="text-[1.4rem] text-charcoal dark:text-chalk">Related services</h2>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {article.relatedServiceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full border border-border px-4 py-2 text-[0.94rem] text-charcoal transition-colors hover:border-sage hover:text-sage dark:text-chalk"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

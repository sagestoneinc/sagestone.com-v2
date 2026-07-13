import { useParams, Navigate, Link } from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow, Button } from "../components/ui-brand/primitives";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { CTABand } from "../components/ui-brand/components";
import { Seo } from "../components/seo/Seo";
import { getPost } from "../content/blog";
import { articleSchema, breadcrumbSchema } from "../components/seo/schema";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function BlogPost() {
  const { slug } = useParams();
  const post = slug ? getPost(slug) : undefined;

  if (!post || !slug) {
    return <Navigate to="/blog" replace />;
  }

  const path = `/blog/${slug}`;
  const dateLabel = new Date(post.datePublished).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Seo
        title={post.metaTitle}
        description={post.description}
        path={path}
        ogType="article"
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Insights", path: "/blog" },
            { name: post.title, path },
          ]),
          articleSchema({
            title: post.title,
            description: post.description,
            path,
            datePublished: post.datePublished,
          }),
        ]}
      />

      <Section className="pt-40 pb-10 md:pt-48">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/blog"
              className="mb-10 inline-flex items-center gap-2 text-[0.9rem] text-slate-olive transition-colors hover:text-sage dark:text-muted-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> All insights
            </Link>
            <Eyebrow className="mb-6">{post.category}</Eyebrow>
            <h1 className="text-[2.4rem] leading-[1.05] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.2rem]">
              {post.title}
            </h1>
            <p className="mt-6 text-[0.9rem] text-slate-olive dark:text-muted-foreground">
              {dateLabel} · {post.readMinutes} min read
            </p>
          </div>
        </Container>
      </Section>

      <Section className="pb-8">
        <Container>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] border border-border">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="aspect-[16/8] w-full object-cover"
            />
          </div>
        </Container>
      </Section>

      <Section className="pb-28 md:pb-40">
        <Container>
          <article className="mx-auto max-w-3xl">
            {post.body.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="mt-12 text-[1.6rem] leading-tight text-charcoal dark:text-chalk md:text-[2rem]"
                    style={serif}
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="mt-6 flex flex-col gap-3">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-[1.08rem] leading-relaxed text-slate-olive dark:text-muted-foreground"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                        {item}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "cta") {
                return (
                  <div
                    key={i}
                    className="mt-12 rounded-2xl border border-border bg-cloud p-8 dark:bg-card"
                  >
                    <p className="text-[1.15rem] text-charcoal dark:text-chalk">{block.text}</p>
                    <Button to={block.to} className="mt-5">
                      {block.label} <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                );
              }
              return (
                <p
                  key={i}
                  className="mt-6 text-[1.15rem] leading-relaxed text-charcoal/90 dark:text-chalk/85"
                >
                  {block.text}
                </p>
              );
            })}
          </article>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

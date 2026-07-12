import { Link } from "react-router";
import { Container, Section, Eyebrow } from "../components/ui-brand/primitives";
import { SeoHead } from "../seo/SeoHead";
import { getBreadcrumbSchema } from "../seo/schema";
import { BLOG_POSTS } from "../../config/blog";

export function Blog() {
  return (
    <>
      <SeoHead
        title="Virtual Assistant and Operations Insights | SageStone Blog"
        description="Read practical insights on virtual assistants, operations support, customer support workflows and process improvement for growing teams."
        path="/blog"
        schemas={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <Section className="pt-40 pb-18 md:pt-48 md:pb-22">
        <Container>
          <Eyebrow className="mb-7">Blog</Eyebrow>
          <h1 className="max-w-4xl text-[2.55rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.8rem]">
            Virtual assistant and operations insights
          </h1>
          <p className="mt-7 max-w-3xl text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            Practical guidance for teams improving operations, support quality and outsourcing workflows.
          </p>
        </Container>
      </Section>

      <Section className="py-0 pb-24 md:pb-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[0.78rem] uppercase tracking-[0.18em] text-gold">{post.datePublished}</p>
                <h2 className="mt-3 text-[1.35rem] text-charcoal dark:text-chalk">
                  <Link to={post.path} className="hover:text-sage">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {post.description}
                </p>
                <Link to={post.path} className="mt-5 inline-flex text-[0.95rem] font-medium text-sage">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

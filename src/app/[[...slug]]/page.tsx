import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageView } from "@/components/page-sections";
import { canonicalUrl, getPageByPath, pathToSlug, sitemapEntries, siteConfig, slugToPath } from "@/lib/site";

type Props = {
  params: Promise<{
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  return sitemapEntries.map((page) => ({
    slug: pathToSlug(page.path),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const path = slugToPath(slug);
  const page = getPageByPath(path);

  if (!page) {
    return {
      title: "Page Not Found | SageStone Inc",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonical = canonicalUrl(page.path);

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: page.kind === "blog" ? "article" : "website",
      url: canonical,
      title: page.title,
      description: page.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 512,
          height: 512,
          alt: "SageStone Inc social preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = getPageByPath(slugToPath(slug));

  if (!page) notFound();

  return <PageView page={page} />;
}

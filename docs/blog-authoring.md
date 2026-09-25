# Writing for the SageStone blog

Posts are Markdown files in `src/content/blog/`. There's no CMS or database: add or edit a file, push, and Vercel builds and prerenders the post, so the full text is in the HTML that search engines crawl.

This guide works for people and for AI assistants drafting posts.

## Publish a post

1. Copy `src/content/blog/_template.md` to `src/content/blog/<slug>.md`. The file name becomes the URL: `/blog/<slug>`. Use lowercase words separated by hyphens.
2. Fill in the frontmatter (see below).
3. Write the post in Markdown.
4. Remove `draft: true` when it's ready. Drafts show in `pnpm dev` but are left out of production builds.
5. Run `pnpm build`. The build fails with a clear message if required fields are missing or the title or description is too long.
6. Open a pull request. Merging to `main` publishes the post, and the sitemap updates automatically.

## Frontmatter

| Field | Required | Notes |
|---|---|---|
| `title` | yes | The H1. Keep it under 50 characters so the title tag (`<title> \| SageStone`) stays under 60. Longer titles are trimmed in the tab title only. |
| `seoTitle` | no | A shorter browser-tab title (under 60 characters, including "\| SageStone") when the headline is too long. |
| `description` | yes | Under 155 characters. Used for the meta description and post cards. |
| `date` | yes | `YYYY-MM-DD`. |
| `updated` | no | `YYYY-MM-DD`. Set it when you make a meaningful edit. |
| `category` | no | One of: Virtual Assistants, Customer Support, Operations, Industry Guides. Defaults to Operations. |
| `tags` | no | `[tag one, tag two]`. Used as schema keywords. |
| `services` | no | Service slugs, for example `[customer-support-outsourcing]`. Drives the "How SageStone can help" links and connects the post to service pages. |
| `author` | no | Defaults to Jesel Cura. The founder byline links to jeselcura.me. |
| `image`, `imageAlt` | no | Put images in `public/blog/`, reference them as `/blog/<file>.webp`, and always write alt text. |
| `draft` | no | `true` keeps the post out of production. |

Service slugs: `virtual-assistant-services`, `customer-support-outsourcing`, `workflow-support`, `back-office-support`, `executive-assistant-services`, `remote-operations-support`.

## Supported Markdown

Headings (`##`, `###`, `####`), paragraphs, `-` and `1.` lists, `**bold**`, `*italic*`, `` `code` ``, links, images, `>` blockquotes, `---` rules, and fenced code blocks. Raw HTML is escaped, not rendered. Don't use `#` in the body, because the title is already the page's H1.

## Writing guidelines

- **Voice:** SageStone's company voice, plain and calm. Write "we" for SageStone.
- **Audience:** founders and operators at growing businesses deciding what to delegate.
- **Be useful first.** Every post should answer a real question fully, then mention how SageStone helps near the end.
- **Internal links:** link at least once to the most relevant service page (`/services/...`) or solution page (`/solutions/...`), and to a related post when one exists.
- **No invented numbers.** Don't publish statistics, client results, or quotes unless they're real and attributable. When in doubt, describe the practice instead of quantifying it.
- **Headings people search for:** make H2s match how people phrase the question, for example "Virtual assistant or executive assistant?"
- **Length:** long enough to answer the question well. Usually 800 to 1,500 words.

## Topic backlog (from the SEO audit)

Published: What does a VA actually handle? · VA vs. executive assistant · How to onboard a remote VA · When should a founder hire a VA? · In-house vs. outsourced support · Customer service QA checklist · How to document repetitive processes · Operations tasks founders should delegate · Real estate VA guide

Still to write:

- Virtual assistants: How much does a virtual assistant cost? (needs real SageStone pricing or ranges) · VA SOP checklist
- Customer support: Customer support outsourcing guide · E-commerce customer support SOP · Shopify customer support outsourcing
- Operations: How to build remote operations systems · Back office outsourcing guide
- Industry guides: E-commerce VA guide · Property management VA guide · Agency operations assistant guide

Every published post has a matching LinkedIn post in `docs/social/linkedin-posts.md`. Add one there when you publish.

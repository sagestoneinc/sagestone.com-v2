// Minimal Markdown → HTML converter for blog posts (no dependencies).
//
// Supports what posts need and nothing more:
//   # – #### headings (h2–h4 get slug ids), paragraphs, blank-line separation
//   - / * unordered lists, 1. ordered lists (single level)
//   > blockquotes, --- horizontal rules, ``` fenced code blocks
//   **bold**, *italic*, `code`, [links](url), ![images](src "caption")
//   | tables | with a | --- | separator row
//   - [x] checklist items (rendered with a check mark)
//   :::tip / :::note / :::takeaways / :::checklist [Optional title] ... :::
//   An image on its own line becomes a <figure>; its "title" is the caption.
// Raw HTML in the source is escaped, never passed through.

const CALLOUT_TITLES: Record<string, string> = {
  tip: "Tip",
  note: "Note",
  takeaways: "Key takeaways",
  checklist: "Checklist",
};

export type Heading = { depth: number; text: string; id: string };

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[`*_[\]()]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const isExternal = (href: string) => /^https?:\/\//.test(href);

function inline(src: string): string {
  // Protect inline code first so its contents aren't formatted.
  const codes: string[] = [];
  let s = src.replace(/`([^`]+)`/g, (_, c) => {
    codes.push(`<code>${escapeHtml(c)}</code>`);
    return `\u0000${codes.length - 1}\u0000`;
  });
  s = escapeHtml(s);
  // Images before links (same bracket syntax).
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g, (_, alt, url, title) =>
    `<img src="${url}" alt="${alt}"${title ? ` title="${title}"` : ""} loading="lazy" decoding="async" />`,
  );
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, url) =>
    isExternal(url)
      ? `<a href="${url}" target="_blank" rel="noopener">${text}</a>`
      : `<a href="${url}">${text}</a>`,
  );
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[Number(i)]);
}

export function markdownToHtml(md: string): { html: string; headings: Heading[]; text: string } {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  const headings: Heading[] = [];
  const usedIds = new Set<string>();
  let para: string[] = [];
  let list: { type: "ul" | "ol"; items: string[] } | null = null;
  let quote: string[] = [];

  const flushPara = () => {
    const img = para.length === 1 ? /^!\[[^\]]*\]\([^)\s]+(?:\s+"([^"]*)")?\)$/.exec(para[0]) : null;
    if (img) {
      const caption = img[1] ? `<figcaption>${inline(img[1])}</figcaption>` : "";
      out.push(`<figure>${inline(para[0].replace(/\s+"[^"]*"\)$/, ")"))}${caption}</figure>`);
    } else if (para.length) out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  };
  const listItem = (item: string) => {
    const task = /^\[( |x|X)\]\s+(.*)$/.exec(item);
    return task
      ? `<li class="task"><span class="task-mark" aria-hidden="true">✓</span><span>${inline(task[2])}</span></li>`
      : `<li>${inline(item)}</li>`;
  };
  const flushList = () => {
    if (list) {
      const isTasks = list.items.every((i) => /^\[( |x|X)\]\s/.test(i));
      out.push(`<${list.type}${isTasks ? ' class="tasks"' : ""}>${list.items.map(listItem).join("")}</${list.type}>`);
    }
    list = null;
  };
  const cells = (row: string) =>
    row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => inline(c.trim()));
  const flushQuote = () => {
    if (quote.length) out.push(`<blockquote><p>${inline(quote.join(" "))}</p></blockquote>`);
    quote = [];
  };
  const flushAll = () => {
    flushPara();
    flushList();
    flushQuote();
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      flushAll();
      const code: string[] = [];
      while (++i < lines.length && !lines[i].trim().startsWith("```")) code.push(lines[i]);
      out.push(`<pre><code>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }
    if (!trimmed) {
      flushAll();
      continue;
    }
    const callout = /^:::(\w+)\s*(.*)$/.exec(trimmed);
    if (callout && CALLOUT_TITLES[callout[1]]) {
      flushAll();
      const inner: string[] = [];
      while (++i < lines.length && lines[i].trim() !== ":::") inner.push(lines[i]);
      const title = callout[2] || CALLOUT_TITLES[callout[1]];
      out.push(
        `<aside class="callout callout-${callout[1]}"><p class="callout-title">${inline(title)}</p>${markdownToHtml(inner.join("\n")).html}</aside>`,
      );
      continue;
    }
    if (trimmed.startsWith("|") && i + 1 < lines.length && /^\|?\s*:?-{3,}/.test(lines[i + 1].trim())) {
      flushAll();
      const head = cells(trimmed);
      const rows: string[][] = [];
      i++; // skip the separator row
      while (i + 1 < lines.length && lines[i + 1].trim().startsWith("|")) rows.push(cells(lines[++i]));
      out.push(
        `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`,
      );
      continue;
    }
    const h = /^(#{1,4})\s+(.*)$/.exec(trimmed);
    if (h) {
      flushAll();
      // A single "#" in a post body is demoted: the page already has the H1.
      const depth = Math.max(2, h[1].length);
      const text = h[2].trim();
      let id = slugify(text) || "section";
      for (let n = 2; usedIds.has(id); n++) id = `${slugify(text)}-${n}`;
      usedIds.add(id);
      headings.push({ depth, text: text.replace(/[*_`]/g, ""), id });
      out.push(`<h${depth} id="${id}">${inline(text)}</h${depth}>`);
      continue;
    }
    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      flushAll();
      out.push("<hr />");
      continue;
    }
    if (trimmed.startsWith(">")) {
      flushPara();
      flushList();
      quote.push(trimmed.replace(/^>\s?/, ""));
      continue;
    }
    const ul = /^[-*]\s+(.*)$/.exec(trimmed);
    const ol = /^\d+[.)]\s+(.*)$/.exec(trimmed);
    if (ul || ol) {
      flushPara();
      flushQuote();
      const type = ul ? "ul" : "ol";
      if (!list || list.type !== type) {
        flushList();
        list = { type, items: [] };
      }
      list.items.push((ul ?? ol)![1]);
      continue;
    }
    // Continuation of a list item (indented line) or paragraph text.
    if (list && /^\s{2,}/.test(line)) {
      list.items[list.items.length - 1] += ` ${trimmed}`;
      continue;
    }
    flushList();
    flushQuote();
    para.push(trimmed);
  }
  flushAll();

  const html = out.join("\n");
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return { html, headings, text };
}

/** Split "---\nkey: value\n---\nbody" into data + body. Values: strings, [a, b] lists. */
export function parseFrontmatter(src: string): { data: Record<string, string | string[]>; body: string } {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(src.replace(/\r\n/g, "\n"));
  if (!m) return { data: {}, body: src };
  const data: Record<string, string | string[]> = {};
  for (const raw of m[1].split("\n")) {
    const kv = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(raw.trim());
    if (!kv) continue;
    let value = kv[2].trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[kv[1]] = value
        .slice(1, -1)
        .split(",")
        .map((v) => v.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
      continue;
    }
    value = value.replace(/^["']|["']$/g, "");
    data[kv[1]] = value;
  }
  return { data, body: m[2] };
}

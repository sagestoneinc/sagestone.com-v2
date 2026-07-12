import keywordMap from "./seo-keywords.json";

export const SEO_KEYWORDS = keywordMap as Record<string, string>;

export function normalizeKeyword(keyword: string): string {
  return keyword.trim().toLowerCase().replace(/\s+/g, " ");
}

export function validateKeywordMap(indexableRoutes: string[]) {
  const errors: string[] = [];
  const seen = new Map<string, string>();

  for (const path of indexableRoutes) {
    const keyword = SEO_KEYWORDS[path];

    if (!keyword) {
      errors.push(`Missing primary keyword for indexable route: ${path}`);
      continue;
    }

    const normalized = normalizeKeyword(keyword);
    const existingPath = seen.get(normalized);

    if (existingPath) {
      errors.push(
        `Duplicate primary keyword \"${keyword}\" assigned to both ${existingPath} and ${path}`,
      );
      continue;
    }

    seen.set(normalized, path);
  }

  for (const [path] of Object.entries(SEO_KEYWORDS)) {
    if (!indexableRoutes.includes(path)) {
      errors.push(`Keyword map contains non-indexable or unknown route: ${path}`);
    }
  }

  return errors;
}

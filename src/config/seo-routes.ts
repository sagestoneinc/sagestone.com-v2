import routeConfig from "./seo-routes.json";

export type SeoRoute = {
  path: string;
  title: string;
  description: string;
  h1: string;
  indexable: boolean;
  type: "home" | "hub" | "service" | "company" | "blog-index" | "blog" | "utility";
};

export const SEO_ROUTES = routeConfig as SeoRoute[];

export const SEO_ROUTE_MAP = new Map(SEO_ROUTES.map((route) => [route.path, route]));

export const INDEXABLE_ROUTES = SEO_ROUTES.filter((route) => route.indexable).map((route) => route.path);

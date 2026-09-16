import { SITE } from "@/data/site";

export type PageSEO = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
};

function absoluteUrl(path: string) {
  const normalized = path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}

function absoluteImage(path: string) {
  return path.startsWith("http") ? path : `${SITE.url}${path}`;
}

/** Builds TanStack Router `head()` meta and links for a page. */
export function pageHead({ title, description, path, keywords, ogImage }: PageSEO) {
  const canonical = absoluteUrl(path);
  const image = absoluteImage(ogImage ?? SITE.defaultOgImage);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(keywords ? [{ name: "keywords", content: keywords }] : []),
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "author", content: SITE.name },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:url", content: canonical },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: SITE.ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: SITE.ogImageAlt },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

export const ROUTES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "monthly", priority: "0.8" },
  { path: "/impact", changefreq: "monthly", priority: "0.7" },
  { path: "/careers", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
] as const;

export function generateSitemapXml(baseUrl: string = SITE.url) {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

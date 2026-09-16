import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const baseUrl = (process.env.VITE_SITE_URL ?? "https://www.sysco.ca").replace(/\/$/, "");
const lastmod = new Date().toISOString().slice(0, 10);

const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/solutions", changefreq: "monthly", priority: "0.8" },
  { path: "/products", changefreq: "monthly", priority: "0.8" },
  { path: "/impact", changefreq: "monthly", priority: "0.7" },
  { path: "/careers", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
];

const urls = routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.path === "/" ? "/" : route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml, "utf8");

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

writeFileSync(resolve(__dirname, "../public/robots.txt"), robots, "utf8");
console.log(`Generated sitemap.xml and robots.txt for ${baseUrl}`);

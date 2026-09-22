import type { MetadataRoute } from "next";
import { getPostsSafe } from "@/lib/payload";

/**
 * Sitemap. Static routes are listed explicitly rather than walked, because this app
 * has no route manifest at runtime; blog URLs come from the CMS, so a post published
 * today is discoverable today rather than at the next deploy.
 *
 * getPostsSafe, not getPosts: a CMS blip must not take down the sitemap for the other
 * pages, which have nothing to do with the blog.
 */
const SITE = "https://rbot.co";

const STATIC_ROUTES = [
  "",
  "/platform",
  "/platform/fleet",
  "/platform/api",
  "/platform/integrations",
  "/solutions",
  "/services",
  "/services/deployment",
  "/services/integration",
  "/services/managed",
  "/services/field-service",
  "/raas",
  "/robots",
  "/robot-finder",
  "/manufacturers",
  "/compare",
  "/assessment",
  "/resources",
  "/resources/guide",
  "/resources/case-studies",
  "/resources/roi-calculator",
  "/company",
  "/company/about",
  "/company/contact",
  "/company/careers",
  "/company/news",
  "/blog",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsSafe();

  return [
    ...STATIC_ROUTES.map((path) => ({
      url: `${SITE}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...posts.map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.updatedAt ? new Date(p.updatedAt) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

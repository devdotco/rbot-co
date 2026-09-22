/**
 * RBOT blog content, read from the shared Payload CMS at payload.dev.co (tenant 41).
 *
 * Bodies are raw sanitized HTML (`bodyStorage: html` for this tenant), which is what
 * lets an article carry its own inline SVG charts. They render with
 * dangerouslySetInnerHTML — that is the documented contract for these tenants.
 */

/** Cache tag purged by `app/api/revalidate/route.ts` when Payload fires its webhook. */
export const POSTS_TAG = 'rbot-posts'

const API = process.env.PAYLOAD_API ?? 'https://payload.dev.co/api'
const TENANT = Number(process.env.PAYLOAD_TENANT_ID ?? 41)

/** Ceiling on staleness if the webhook never arrives (bad secret, dead delivery). */
const REVALIDATE_SECONDS = 900

export type Author = {
  id: number
  name: string
  slug: string
  jobTitle: string | null
  biography: string | null
}

export type Category = { id: number; name: string; slug: string }

export type Post = {
  id: number
  title: string
  slug: string
  fullPath: string | null
  excerpt: string
  bodyHtml: string
  publishedAt: string
  updatedAt: string
  featuredImage: { url: string; alt: string | null } | null
  authors: Author[]
  primaryCategory: Category | null
  seo: { metaTitle: string | null; metaDescription: string | null } | null
}

/** Populated relationships come back as objects at depth>=1 and as bare ids otherwise. */
const isObj = <T,>(v: T | number | null | undefined): v is T =>
  typeof v === 'object' && v !== null

const QUERY =
  `posts?where[tenant][equals]=${TENANT}` +
  '&where[_status][equals]=published' +
  '&depth=1&limit=200&sort=-publishedAt'

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API}/${QUERY}`, {
    headers: { accept: 'application/json' },
    next: { revalidate: REVALIDATE_SECONDS, tags: [POSTS_TAG] },
  })
  if (!res.ok) throw new Error(`Payload returned ${res.status} for rbot.co posts (tenant ${TENANT})`)

  const { docs } = (await res.json()) as { docs: Record<string, unknown>[] }

  return docs
    .filter((d) => d._status === 'published' && d.bodyHtml && !d.excludeFromApi)
    .map((d) => {
      const img = d.featuredImage as { url?: string; alt?: string } | number | null
      return {
        id: d.id as number,
        title: (d.title as string) ?? '',
        slug: (d.slug as string) ?? '',
        fullPath: (d.fullPath as string) ?? null,
        excerpt: (d.excerpt as string) ?? '',
        bodyHtml: (d.bodyHtml as string) ?? '',
        publishedAt: (d.publishedAt as string) ?? '',
        updatedAt: (d.updatedAt as string) ?? '',
        featuredImage:
          isObj<{ url?: string; alt?: string }>(img) && img.url
            ? { url: img.url, alt: img.alt ?? null }
            : null,
        authors: ((d.authors as (Author | number)[]) ?? []).filter(isObj<Author>),
        primaryCategory: isObj<Category>(d.primaryCategory as Category | number)
          ? (d.primaryCategory as Category)
          : null,
        seo: (d.seo as Post['seo']) ?? null,
      }
    })
}

/**
 * Every published post, newest first.
 *
 * Throws on a CMS failure rather than returning [] — an empty blog that looks
 * deliberate is worse than an error, because nobody investigates it.
 */
export async function getPosts(): Promise<Post[]> {
  return fetchPosts()
}

/**
 * Same, but never throws. For surfaces where a CMS blip must not take down a page that
 * is mostly about something else — the sitemap covers the whole site, not just the blog.
 */
export async function getPostsSafe(): Promise<Post[]> {
  try {
    return await fetchPosts()
  } catch {
    return []
  }
}

export async function getPost(slug: string): Promise<Post | undefined> {
  return (await fetchPosts()).find((p) => p.slug === slug)
}

/** Reading time from the rendered body, so it matches what is actually on the page. */
export function readingMinutes(bodyHtml: string): number {
  const words = bodyHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 225))
}

export const formatDate = (iso: string): string =>
  iso
    ? new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : ''

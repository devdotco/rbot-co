import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPost, getPosts, formatDate, readingMinutes } from "@/lib/payload";

/**
 * Article page.
 *
 * dynamicParams stays ON: posts are published continuously from the CMS, so a slug that
 * did not exist at the last build must still render rather than 404 until the next
 * deploy. The prerendered set is only a warm start.
 */
export const dynamicParams = true;

export async function generateStaticParams() {
  try {
    return (await getPosts()).map((p) => ({ slug: p.slug }));
  } catch {
    // A CMS blip must not fail the build; dynamicParams covers everything anyway.
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Not found", robots: { index: false } };

  const title = post.seo?.metaTitle || `${post.title} | RBOT`;
  const description = post.seo?.metaDescription || post.excerpt;
  return {
    title,
    description,
    alternates: { canonical: `https://rbot.co/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || undefined,
      images: post.featuredImage?.url ? [{ url: post.featuredImage.url }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const author = post.authors[0];
  const all = await getPosts();
  const more = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo?.metaDescription || post.excerpt,
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    image: post.featuredImage?.url ? [post.featuredImage.url] : undefined,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          ...(author.jobTitle ? { jobTitle: author.jobTitle } : {}),
          ...(author.biography ? { description: author.biography } : {}),
        }
      : { "@type": "Organization", name: "RBOT" },
    publisher: { "@type": "Organization", name: "RBOT", url: "https://rbot.co" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://rbot.co/blog/${post.slug}` },
  };

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="page-hero">
        <Link href="/blog" className="lbl" style={{ color: "var(--t2)" }}>
          ← The Physical AI Report
        </Link>
        <h1 className="d1" style={{ marginTop: 16 }}>{post.title}</h1>
        {post.excerpt && (
          <p className="body-lg" style={{ maxWidth: 640, marginTop: 20 }}>{post.excerpt}</p>
        )}
        <p className="lbl" style={{ marginTop: 20 }}>
          {author ? `${author.name}${author.jobTitle ? ` · ${author.jobTitle}` : ""} · ` : ""}
          {formatDate(post.publishedAt)} · {readingMinutes(post.bodyHtml)} min read
        </p>
      </div>

      {post.featuredImage?.url && (
        <section className="sec" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            {/* Natural ratio: generated featured images are 1600x840 and carry the brand
                mark in a corner, which a fixed-aspect object-cover box would trim. */}
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              width={1600}
              height={840}
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ width: "100%", height: "auto", border: "1px solid var(--bdr)" }}
              priority
            />
          </div>
        </section>
      )}

      <section className="sec">
        <div className="wrap">
          <div
            className="post-body"
            style={{ maxWidth: 720 }}
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          {author?.biography && (
            <aside
              style={{
                maxWidth: 720,
                marginTop: 56,
                padding: "28px 24px",
                border: "1px solid var(--bdr)",
                background: "var(--bg2, transparent)",
              }}
            >
              <span className="lbl">About the author</span>
              <p style={{ marginTop: 10, fontWeight: 600 }}>
                {author.name}
                {author.jobTitle ? (
                  <span style={{ color: "var(--t2)", fontWeight: 400 }}> — {author.jobTitle}</span>
                ) : null}
              </p>
              {author.biography
                .split(/\n{2,}/)
                .map((para) => para.trim())
                .filter(Boolean)
                .map((para, i) => (
                  <p key={i} style={{ marginTop: 10, color: "var(--t2)", fontSize: 15 }}>
                    {para}
                  </p>
                ))}
            </aside>
          )}
        </div>
      </section>

      {more.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <div className="sec-hd">
              <span className="lbl">Keep reading</span>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 14 }}>
              {more.map((p) => (
                <li key={p.id}>
                  <Link href={`/blog/${p.slug}`} style={{ color: "var(--t1)" }}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}

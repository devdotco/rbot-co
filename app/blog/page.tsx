import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { getPostsSafe, formatDate, readingMinutes } from "@/lib/payload";

export const metadata: Metadata = {
  title: "The Physical AI Report — RBOT Blog",
  description: "Analysis, operations guides, and technology deep-dives on enterprise robotics, physical AI, and the automation of manufacturing and logistics.",
};

const catColors: Record<string, string> = {
  "Industry Analysis": "#0AAEFF",
  "Technology": "#7A7875",
  "Operations": "#22C55E",
  "Manufacturing": "#F59E0B",
  "Warehousing": "#0AAEFF",
};

export default async function BlogPage() {
  // Posts come from the CMS. They used to be a hardcoded array of teasers whose slugs
  // had no detail pages behind them, so every card on this index 404'd.
  const posts = await getPostsSafe();

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Blog</span>
        <h1 className="d1">The Physical AI Report</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginTop: 20 }}>
          Analysis, operations guides, and technology deep-dives on enterprise robotics and
          physical AI — written by the operators and engineers who deploy these systems for a living.
        </p>
      </div>

      {/* Editorial Grid SVG */}
      <section className="sec">
        <div className="wrap">
          <div style={{ overflowX: "auto" }}>
            <svg
              width="460"
              height="200"
              viewBox="0 0 460 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 360 }}
            >
              {/* Featured article left */}
              <rect x="10" y="10" width="200" height="180" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="18" y="18" width="52" height="6" rx="1" fill="#0AAEFF" fillOpacity="0.4" />
              <rect x="18" y="34" width="170" height="8" rx="1" fill="#2C2C2C" />
              <rect x="18" y="46" width="145" height="8" rx="1" fill="#2C2C2C" />
              <rect x="18" y="58" width="160" height="8" rx="1" fill="#2C2C2C" />
              <rect x="18" y="80" width="184" height="4" rx="1" fill="#1A1A1A" />
              <rect x="18" y="88" width="170" height="4" rx="1" fill="#1A1A1A" />
              <rect x="18" y="96" width="178" height="4" rx="1" fill="#1A1A1A" />
              <rect x="18" y="104" width="155" height="4" rx="1" fill="#1A1A1A" />
              {/* Image placeholder */}
              <rect x="18" y="118" width="184" height="52" rx="1" fill="#161616" stroke="#222222" strokeWidth="0.5" />
              <text x="110" y="148" textAnchor="middle" fill="#2C2C2C" fontSize="9" fontFamily="monospace">FEATURED IMAGE</text>
              <text x="18" y="182" fill="#454340" fontSize="7" fontFamily="monospace">Industry Analysis · Aug 15, 2026 · 9 min</text>

              {/* Small articles right column */}
              {[0, 1, 2].map(i => (
                <g key={i}>
                  <rect x="220" y={10 + i * 62} width="230" height="54" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
                  <rect x="228" y={18 + i * 62} width={i === 0 ? 42 : i === 1 ? 52 : 44} height="5" rx="1" fill={i === 0 ? "#22C55E" : i === 1 ? "#F59E0B" : "#0AAEFF"} fillOpacity="0.35" />
                  <rect x="228" y={28 + i * 62} width="210" height="5" rx="1" fill="#2C2C2C" />
                  <rect x="228" y={37 + i * 62} width="190" height="5" rx="1" fill="#2C2C2C" />
                  <rect x="228" y={46 + i * 62} width="60" height="4" rx="1" fill="#1A1A1A" />
                  <text x="228" y={56 + i * 62} fill="#454340" fontSize="7" fontFamily="monospace">
                    {i === 0 ? "Operations" : i === 1 ? "Manufacturing" : "Warehousing"} · {i === 0 ? "7 min" : i === 1 ? "8 min" : "10 min"}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Latest</span>
            <h2 className="d2">From the operations floor.</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "var(--bdr)",
            border: "1px solid var(--bdr)"
          }}>
            {posts.map((post) => (
              <article key={post.slug} style={{ background: "var(--bg)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{
                    fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "2px 8px", border: "1px solid currentColor", borderRadius: 2,
                    color: catColors[post.primaryCategory?.name ?? ""] || "var(--t3)"
                  }}>
                    {post.primaryCategory?.name ?? "Analysis"}
                  </span>
                  <span className="lbl">{readingMinutes(post.bodyHtml)} min read</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.35, flex: "none" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--t1)" }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="body" style={{ fontSize: 13, lineHeight: 1.68, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid var(--bdr)" }}>
                  <span className="lbl" style={{ color: "var(--t3)" }}>{formatDate(post.publishedAt)}</span>
                  <Link href={`/blog/${post.slug}`} style={{ fontSize: 12, color: "var(--acc)", fontFamily: "monospace" }}>
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Topics section */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Topics</span>
            <h2 className="d2">Browse by subject.</h2>
          </div>
          <div className="chips">
            {["Industry Analysis", "Technology", "Operations", "Manufacturing", "Warehousing", "Retail", "Field Service", "Humanoids", "AMRs", "Cobots", "ROI & Business Case", "RaaS", "Integration", "Change Management"].map(t => (
              <Link key={t} href={`/blog?topic=${encodeURIComponent(t)}`} className="ichip">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="sec">
        <div className="wrap">
          <div style={{
            border: "1px solid var(--bdr2)", borderRadius: 3, padding: "56px",
            background: "var(--bg1)", display: "grid",
            gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "center"
          }}>
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 14 }}>Newsletter</span>
              <h2 className="d2" style={{ marginBottom: 16 }}>The Physical AI Report, monthly.</h2>
              <p className="body" style={{ lineHeight: 1.75, maxWidth: 460 }}>
                One email per month. Industry analysis, new case studies, technology coverage, and
                RBOT updates — for operations leaders who want to stay ahead of the automation curve.
                No fluff, no spam, unsubscribe anytime.
              </p>
            </div>
            <NewsletterForm />
            <p className="body" style={{ fontSize: 11.5, textAlign: "center", marginTop: 8 }}>
              ~3,200 operations leaders already subscribed
            </p>
          </div>
        </div>
      </section>

      {/* About the publication */}
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <span className="lbl" style={{ display: "block", marginBottom: 14 }}>About This Publication</span>
            <h2 className="d2" style={{ marginBottom: 20 }}>Written by practitioners, for practitioners.</h2>
            <p className="body" style={{ lineHeight: 1.78, marginBottom: 16 }}>
              The Physical AI Report is written by RBOT's operations, engineering, and commercial teams.
              Every author on this publication has either deployed robots in enterprise environments,
              built the software that runs them, or advised the executive teams making the investment decisions.
              We do not write from the outside looking in.
            </p>
            <p className="body" style={{ lineHeight: 1.78, marginBottom: 16 }}>
              Enterprise robotics is a field with enormous hype and insufficient operational clarity. The
              analyst reports are expensive. The vendor content is conflicted. The academic research is
              years behind the market. Our goal is to produce the kind of clear-eyed, technically grounded,
              operationally focused analysis that we wished existed when we started deploying robots.
            </p>
            <p className="body" style={{ lineHeight: 1.78 }}>
              All content is original and unsponsored. We have no affiliate relationships with robot
              manufacturers or software vendors. If you have a story to tell or a topic you want us to
              cover, reach out at press@rbot.co.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Beyond Reading</span>
          <h2 className="d2">Ready to move from research to deployment?</h2>
          <p className="body-lg">
            Our automation assessment puts a concrete deployment roadmap and ROI model
            behind the analysis you have been reading.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/resources/guide" className="btn btn-g">Download the Deployment Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

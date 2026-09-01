import type { Metadata } from "next";
import Link from "next/link";
import NewsletterForm from "@/components/forms/NewsletterForm";

export const metadata: Metadata = {
  title: "The Physical AI Report — RBOT Blog",
  description: "Analysis, operations guides, and technology deep-dives on enterprise robotics, physical AI, and the automation of manufacturing and logistics.",
};

const posts = [
  {
    category: "Industry Analysis",
    title: "Why 2026 Is the Year Humanoids Enter the Workforce",
    date: "Aug 15, 2026",
    readTime: "9 min read",
    excerpt:
      "The unit economics of humanoid robots crossed a critical threshold this year. We break down the cost, capability, and deployment maturity data that makes 2026 the inflection point — and what it means for enterprise operations teams planning their automation roadmaps.",
    slug: "humanoids-enter-workforce-2026",
  },
  {
    category: "Technology",
    title: "Understanding Robot Payload, Reach, and Cycle Time",
    date: "Aug 8, 2026",
    readTime: "7 min read",
    excerpt:
      "The three most important technical specifications for any robot selection decision — and why operations leaders consistently misinterpret them. We explain what each means in practice and how to use them to filter a robot shortlist.",
    slug: "payload-reach-cycle-time",
  },
  {
    category: "Operations",
    title: "How to Calculate the True ROI of a Robot Deployment",
    date: "Jul 30, 2026",
    readTime: "11 min read",
    excerpt:
      "Most robot ROI calculations undercount costs and overcount benefits. We walk through a rigorous framework — including total cost of ownership, displacement assumptions, integration burden, and the utilization curves that actually drive payback.",
    slug: "true-roi-robot-deployment",
  },
  {
    category: "Manufacturing",
    title: "Cobots vs. Industrial Arms: Which Is Right for Your Line?",
    date: "Jul 22, 2026",
    readTime: "8 min read",
    excerpt:
      "Collaborative robots and traditional industrial arms serve fundamentally different use cases. We break down the trade-offs in payload, speed, safety certification, programming complexity, and cost — with a decision framework for common manufacturing scenarios.",
    slug: "cobots-vs-industrial-arms",
  },
  {
    category: "Warehousing",
    title: "AMR vs. AS/RS: Choosing Your Fulfillment Automation Strategy",
    date: "Jul 14, 2026",
    readTime: "10 min read",
    excerpt:
      "Autonomous Mobile Robots and Automated Storage and Retrieval Systems take fundamentally different approaches to fulfillment automation. We compare capital requirements, throughput ceilings, flexibility, and the facility characteristics that favor each approach.",
    slug: "amr-vs-asrs-fulfillment",
  },
  {
    category: "Technology",
    title: "What ROS2 Means for Enterprise Robotics Buyers",
    date: "Jul 7, 2026",
    readTime: "6 min read",
    excerpt:
      "The Robot Operating System is the software foundation for most modern mobile and collaborative robots. ROS2's architecture has significant implications for integration complexity, vendor lock-in, and long-term maintenance burden — here is what enterprise buyers need to know.",
    slug: "ros2-enterprise-buyers",
  },
  {
    category: "Industry Analysis",
    title: "The Labor Math Behind Physical AI Adoption",
    date: "Jun 28, 2026",
    readTime: "12 min read",
    excerpt:
      "Why is enterprise robotics adoption accelerating now, after decades of incremental growth? We model the labor cost inflation, availability constraints, and turnover economics that are making the automation math work in 2026 for operations that couldn't justify it in 2019.",
    slug: "labor-math-physical-ai",
  },
  {
    category: "Operations",
    title: "Field Service Lessons from 500 Robot Deployments",
    date: "Jun 20, 2026",
    readTime: "9 min read",
    excerpt:
      "After managing the field service operations for over 500 deployed robots, we have a clear picture of what breaks, when it breaks, and how to prevent it. The most valuable lessons are the ones that cost our customers downtime before we learned them.",
    slug: "field-service-lessons-500",
  },
  {
    category: "Manufacturing",
    title: "How to Write an RFP for Robotics Integration",
    date: "Jun 12, 2026",
    readTime: "8 min read",
    excerpt:
      "Most robotics RFPs either under-specify (inviting apples-to-oranges proposals) or over-specify (locking you into a solution before you understand the problem). We provide a template and the reasoning behind each section that will generate useful, comparable vendor responses.",
    slug: "rfp-robotics-integration",
  },
];

const catColors: Record<string, string> = {
  "Industry Analysis": "#0AAEFF",
  "Technology": "#7A7875",
  "Operations": "#22C55E",
  "Manufacturing": "#F59E0B",
  "Warehousing": "#0AAEFF",
};

export default function BlogPage() {
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
            {posts.map(post => (
              <article key={post.slug} style={{ background: "var(--bg)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span style={{
                    fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "2px 8px", border: "1px solid currentColor", borderRadius: 2,
                    color: catColors[post.category] || "var(--t3)"
                  }}>
                    {post.category}
                  </span>
                  <span className="lbl">{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.35, flex: "none" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--t1)" }}>
                    {post.title}
                  </Link>
                </h3>
                <p className="body" style={{ fontSize: 13, lineHeight: 1.68, flex: 1 }}>{post.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 8, borderTop: "1px solid var(--bdr)" }}>
                  <span className="lbl" style={{ color: "var(--t3)" }}>{post.date}</span>
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

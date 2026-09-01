import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RBOT in the News — Press & Media",
  description: "Press releases, media coverage, and announcements from RBOT — the physical AI deployment partner for enterprise operations.",
};

const pressReleases = [
  {
    date: "January 2026",
    headline: "RBOT Raises $45M Series B to Scale Physical AI Deployment",
    source: "TechCrunch",
    summary: "The round, led by Andreessen Horowitz with participation from Tiger Global, will fund national field network expansion and platform development as enterprise robotics demand accelerates.",
    tag: "Funding",
  },
  {
    date: "March 2026",
    headline: "RBOT Named to TIME's 100 Most Influential Companies",
    source: "TIME",
    summary: "TIME recognized RBOT for its role in democratizing enterprise robotics access through its vendor-neutral deployment model and Robotics-as-a-Service subscription offering.",
    tag: "Recognition",
  },
  {
    date: "November 2025",
    headline: "RBOT Deploys 500th Robot Fleet System",
    source: "BusinessWire",
    summary: "The milestone deployment — a 22-unit AMR fleet at a national e-commerce fulfillment center — marks a 4× increase in total fleet deployments over 18 months.",
    tag: "Milestone",
  },
  {
    date: "August 2025",
    headline: "RBOT Expands Field Service Network to 200+ Technicians",
    source: "PR Newswire",
    summary: "The expansion adds 80 manufacturer-certified technicians across 14 new markets, reducing average on-site response times to under 3 hours for managed operations customers.",
    tag: "Operations",
  },
  {
    date: "May 2025",
    headline: "RBOT Platform Achieves 99.1% Uptime Across Enterprise Customers",
    source: "Globe Newswire",
    summary: "The platform's reliability milestone covers over 350 active robots across 40+ enterprise facilities, supported by predictive maintenance algorithms and 24/7 operations center monitoring.",
    tag: "Platform",
  },
  {
    date: "February 2025",
    headline: "RBOT Partners with Figure AI on Humanoid Enterprise Deployments",
    source: "Reuters",
    summary: "The partnership establishes RBOT as the preferred deployment and managed operations partner for Figure AI's enterprise humanoid programs, starting with light manufacturing and kitting applications.",
    tag: "Partnership",
  },
  {
    date: "June 2024",
    headline: "RBOT Closes $22M Series A for Robotics-as-a-Service Expansion",
    source: "Axios",
    summary: "The Series A will fund the build-out of RBOT's subscription-based RaaS model, making enterprise robotics accessible to mid-market manufacturers without large upfront capital requirements.",
    tag: "Funding",
  },
  {
    date: "January 2024",
    headline: "RBOT Launches RaaS Model for Mid-Market Manufacturers",
    source: "Wired",
    summary: "RBOT's Robotics-as-a-Service offering packages hardware, software, integration, and maintenance into a single monthly subscription, lowering the barrier to enterprise robotics adoption.",
    tag: "Product",
  },
];

const tagColors: Record<string, string> = {
  Funding: "#0AAEFF",
  Recognition: "#F59E0B",
  Milestone: "#22C55E",
  Operations: "#7A7875",
  Platform: "#0AAEFF",
  Partnership: "#F59E0B",
  Product: "#22C55E",
};

export default function NewsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Press &amp; Media</span>
        <h1 className="d1">RBOT in the news.</h1>
        <p className="body-lg" style={{ maxWidth: 500, marginTop: 20 }}>
          Press releases, media coverage, and announcements as RBOT builds the infrastructure
          for the physical AI economy.
        </p>
      </div>

      {/* Press collage SVG */}
      <section className="sec">
        <div className="wrap">
          <div style={{ overflowX: "auto" }}>
            <svg
              width="440"
              height="200"
              viewBox="0 0 440 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 340 }}
            >
              {/* Grid background */}
              <rect x="0" y="0" width="440" height="200" fill="#0D0D0D" rx="2" />

              {/* Article thumbnail 1 */}
              <rect x="10" y="10" width="130" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="18" y="18" width="50" height="6" rx="1" fill="#0AAEFF" fillOpacity="0.5" />
              <rect x="18" y="28" width="100" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="36" width="85" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="44" width="95" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="56" width="40" height="5" rx="1" fill="#1A1A1A" />
              <rect x="18" y="65" width="110" height="4" rx="1" fill="#1A1A1A" />
              <rect x="18" y="72" width="90" height="4" rx="1" fill="#1A1A1A" />
              <text x="18" y="88" fill="#454340" fontSize="7" fontFamily="monospace">TechCrunch · Jan 2026</text>

              {/* Article thumbnail 2 */}
              <rect x="150" y="10" width="130" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="158" y="18" width="40" height="6" rx="1" fill="#F59E0B" fillOpacity="0.5" />
              <rect x="158" y="28" width="105" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="36" width="90" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="44" width="100" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="56" width="35" height="5" rx="1" fill="#1A1A1A" />
              <rect x="158" y="65" width="115" height="4" rx="1" fill="#1A1A1A" />
              <rect x="158" y="72" width="80" height="4" rx="1" fill="#1A1A1A" />
              <text x="158" y="88" fill="#454340" fontSize="7" fontFamily="monospace">TIME · Mar 2026</text>

              {/* Article thumbnail 3 */}
              <rect x="290" y="10" width="140" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="298" y="18" width="45" height="6" rx="1" fill="#22C55E" fillOpacity="0.4" />
              <rect x="298" y="28" width="110" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="36" width="95" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="44" width="105" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="56" width="30" height="5" rx="1" fill="#1A1A1A" />
              <rect x="298" y="65" width="120" height="4" rx="1" fill="#1A1A1A" />
              <rect x="298" y="72" width="100" height="4" rx="1" fill="#1A1A1A" />
              <text x="298" y="88" fill="#454340" fontSize="7" fontFamily="monospace">Reuters · Feb 2025</text>

              {/* Article thumbnail 4 */}
              <rect x="10" y="105" width="130" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="18" y="113" width="38" height="6" rx="1" fill="#0AAEFF" fillOpacity="0.35" />
              <rect x="18" y="123" width="105" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="131" width="88" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="139" width="98" height="5" rx="1" fill="#2C2C2C" />
              <rect x="18" y="151" width="28" height="5" rx="1" fill="#1A1A1A" />
              <rect x="18" y="160" width="108" height="4" rx="1" fill="#1A1A1A" />
              <rect x="18" y="167" width="85" height="4" rx="1" fill="#1A1A1A" />
              <text x="18" y="183" fill="#454340" fontSize="7" fontFamily="monospace">Axios · Jun 2024</text>

              {/* Article thumbnail 5 */}
              <rect x="150" y="105" width="130" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="158" y="113" width="44" height="6" rx="1" fill="#22C55E" fillOpacity="0.35" />
              <rect x="158" y="123" width="100" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="131" width="92" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="139" width="106" height="5" rx="1" fill="#2C2C2C" />
              <rect x="158" y="151" width="32" height="5" rx="1" fill="#1A1A1A" />
              <rect x="158" y="160" width="112" height="4" rx="1" fill="#1A1A1A" />
              <rect x="158" y="167" width="88" height="4" rx="1" fill="#1A1A1A" />
              <text x="158" y="183" fill="#454340" fontSize="7" fontFamily="monospace">Wired · Jan 2024</text>

              {/* Article thumbnail 6 */}
              <rect x="290" y="105" width="140" height="85" rx="2" fill="#111111" stroke="#1A1A1A" strokeWidth="1" />
              <rect x="298" y="113" width="42" height="6" rx="1" fill="#F59E0B" fillOpacity="0.35" />
              <rect x="298" y="123" width="115" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="131" width="95" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="139" width="108" height="5" rx="1" fill="#2C2C2C" />
              <rect x="298" y="151" width="35" height="5" rx="1" fill="#1A1A1A" />
              <rect x="298" y="160" width="118" height="4" rx="1" fill="#1A1A1A" />
              <rect x="298" y="167" width="92" height="4" rx="1" fill="#1A1A1A" />
              <text x="298" y="183" fill="#454340" fontSize="7" fontFamily="monospace">PR Newswire · Aug 2025</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Press releases */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Latest Coverage</span>
            <h2 className="d2">Recent press and announcements.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {pressReleases.map(pr => (
              <div key={pr.headline} style={{ background: "var(--bg)", padding: "32px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <span style={{
                    fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "2px 8px", border: "1px solid currentColor", borderRadius: 2,
                    color: tagColors[pr.tag] || "var(--t3)"
                  }}>
                    {pr.tag}
                  </span>
                  <span className="lbl">{pr.date}</span>
                  <span className="lbl" style={{ color: "var(--t2)" }}>via {pr.source}</span>
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 12, lineHeight: 1.3 }}>
                  {pr.headline}
                </h3>
                <p className="body" style={{ maxWidth: 760, lineHeight: 1.68 }}>{pr.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press contact */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start", maxWidth: 860 }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Press Contact</span>
                <h2 className="d2">Media inquiries.</h2>
              </div>
              <p className="body" style={{ lineHeight: 1.72, marginBottom: 24 }}>
                For media inquiries, analyst briefings, interview requests, and speaking opportunities,
                please reach out to our communications team. We typically respond within one business day.
              </p>
              <p className="body" style={{ lineHeight: 1.72, marginBottom: 24 }}>
                For embargoed announcements or exclusive coverage opportunities, contact us directly
                at press@rbot.co to begin the conversation.
              </p>
              <a href="mailto:press@rbot.co" className="btn btn-p">press@rbot.co</a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ border: "1px solid var(--bdr2)", borderRadius: 3, padding: "28px", background: "var(--bg1)" }}>
                <p className="lbl" style={{ marginBottom: 12 }}>Press Kit</p>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 10 }}>
                  Logos, brand assets, and executive bios
                </h3>
                <p className="body" style={{ marginBottom: 16 }}>
                  Download our press kit for high-resolution logos, brand guidelines, executive
                  headshots, and approved company descriptions.
                </p>
                <a href="#" className="btn btn-g btn-sm">Download Press Kit</a>
              </div>
              <div style={{ border: "1px solid var(--bdr2)", borderRadius: 3, padding: "28px", background: "var(--bg1)" }}>
                <p className="lbl" style={{ marginBottom: 12 }}>Analyst Relations</p>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 10 }}>
                  Briefings and research inquiries
                </h3>
                <p className="body" style={{ marginBottom: 16 }}>
                  We work actively with industry analysts covering enterprise robotics, supply chain
                  automation, and physical AI deployment.
                </p>
                <a href="mailto:press@rbot.co" className="btn btn-g btn-sm">Request a Briefing</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Stay Informed</span>
          <h2 className="d2">Follow RBOT&apos;s progress.</h2>
          <p className="body-lg">
            Subscribe to the Physical AI Report for monthly analysis on enterprise robotics trends,
            deployment case studies, and RBOT updates.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/blog" className="btn btn-p">Read the Blog</Link>
            <Link href="/company/contact" className="btn btn-g">Media Inquiries</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

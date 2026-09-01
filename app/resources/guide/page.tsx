import type { Metadata } from "next";
import Link from "next/link";
import GuideForm from "@/components/forms/GuideForm";

export const metadata: Metadata = {
  title: "Enterprise Robotics Deployment Guide — RBOT",
  description: "The complete practical handbook for operations leaders planning an enterprise robotics deployment. Eight chapters covering assessment, vendor selection, integration, and performance optimization.",
};

const chapters = [
  {
    num: "01",
    title: "Assessing Your Automation Readiness",
    desc: "Before selecting a robot, you need a clear picture of your current operation. This chapter walks you through a structured readiness assessment covering process stability, data availability, workforce readiness, facility constraints, and the financial profile of your target workflows. Most failed deployments begin with insufficient upfront assessment — this chapter is designed to prevent that.",
  },
  {
    num: "02",
    title: "Choosing the Right Robot Type",
    desc: "AMRs, cobots, humanoids, autonomous forklifts, gantry systems — the robot landscape is vast and rapidly evolving. This chapter provides a decision framework for matching robot capabilities to workflow requirements, including payload, reach, cycle time, navigation mode, and safety certifications. You will walk away with a clear robot type shortlist for your specific use case.",
  },
  {
    num: "03",
    title: "Building the Business Case",
    desc: "A compelling business case is the foundation of every successful deployment. This chapter covers labor baseline modeling, productivity gain assumptions, total cost of ownership across purchase and RaaS models, payback period calculation, and how to present the case to finance and executive leadership. Includes a worked example with realistic numbers for a mid-size warehousing operation.",
  },
  {
    num: "04",
    title: "Vendor Selection and RFP Process",
    desc: "Selecting the right manufacturer and integration partner is a high-stakes decision with long-term consequences. This chapter provides a structured RFP framework, evaluation criteria, reference check protocols, and red flags to watch for. It also covers how to evaluate a vendor-neutral integrator versus a manufacturer-aligned integrator — a distinction that will significantly affect your outcomes.",
  },
  {
    num: "05",
    title: "Site Preparation Requirements",
    desc: "Physical infrastructure is often the longest lead-time item in a deployment. This chapter covers floor surface requirements, aisle width standards, charging infrastructure, network connectivity, lighting conditions, and the safety perimeter designs required for different robot types. Includes a site prep checklist mapped to each major robot category.",
  },
  {
    num: "06",
    title: "Systems Integration Fundamentals",
    desc: "Most enterprise robotics value is realized through deep integration with WMS, ERP, and labor management systems. This chapter covers integration architecture patterns, API connectivity, data latency requirements, and the most common integration failure modes. It also addresses change management for IT teams who will own the integration layer post-deployment.",
  },
  {
    num: "07",
    title: "Change Management and Training",
    desc: "Technology adoption fails when the people side of the deployment is underinvested. This chapter provides a change management framework for robotics deployments, including stakeholder mapping, communication planning, operator training design, and the specific workforce concerns that arise in manufacturing and logistics environments — including the displacement question.",
  },
  {
    num: "08",
    title: "Measuring and Optimizing Performance",
    desc: "A deployment is not complete at go-live — it is the beginning of an optimization cycle. This chapter covers the KPIs that matter: fleet utilization, task completion rate, throughput per robot-hour, cost per pick, and maintenance burden. It also provides a 90-day post-go-live review framework and the continuous improvement cycle that drives performance upward over time.",
  },
];

const stats = [
  { val: "94%", lbl: "of enterprise robotics projects succeed with proper planning" },
  { val: "18 mo", lbl: "average payback period for well-planned deployments" },
  { val: "72%", lbl: "reduction in deployment time with a structured assessment" },
];

export default function GuidePage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Resources</span>
        <h1 className="d1" style={{ maxWidth: 820 }}>
          The Complete Guide to Enterprise Robotics Deployment
        </h1>
        <p className="body-lg" style={{ maxWidth: 540, marginTop: 20 }}>
          A practical handbook for operations leaders. Eight chapters covering every phase of a
          successful enterprise robotics deployment — from readiness assessment to ongoing optimization.
        </p>
        <div className="btn-row" style={{ marginTop: 28 }}>
          <a href="#download" className="btn btn-p">Download the Guide</a>
          <Link href="/resources/case-studies" className="btn btn-g">Read Case Studies</Link>
        </div>
      </div>

      {/* Book mockup SVG */}
      <section className="sec">
        <div className="wrap">
          <div style={{ overflowX: "auto" }}>
            <svg
              width="540"
              height="300"
              viewBox="0 0 540 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 400 }}
            >
              {/* Book shadow */}
              <rect x="108" y="24" width="330" height="252" rx="3" fill="#0A0A0A" />

              {/* Book spine */}
              <rect x="100" y="20" width="24" height="252" rx="2" fill="#161616" stroke="#222222" strokeWidth="1" />
              <line x1="112" y1="30" x2="112" y2="262" stroke="#1A1A1A" strokeWidth="1" />

              {/* Book cover */}
              <rect x="120" y="20" width="316" height="252" rx="2" fill="#111111" stroke="#222222" strokeWidth="1" />

              {/* Cover top accent line */}
              <rect x="136" y="36" width="284" height="2" fill="#0AAEFF" fillOpacity="0.6" />

              {/* RBOT logo text */}
              <text x="136" y="68" fill="#0AAEFF" fontSize="16" fontWeight="700" fontFamily="monospace" letterSpacing="-0.04em">RBOT</text>
              <text x="186" y="68" fill="#454340" fontSize="10" fontFamily="monospace" letterSpacing="0.08em"> · RESOURCES</text>

              {/* Title */}
              <text x="136" y="102" fill="#EDEAE5" fontSize="18" fontWeight="700" letterSpacing="-0.035em" fontFamily="sans-serif">Enterprise Robotics</text>
              <text x="136" y="124" fill="#EDEAE5" fontSize="18" fontWeight="700" letterSpacing="-0.035em" fontFamily="sans-serif">Deployment Guide</text>

              {/* Subtitle */}
              <text x="136" y="148" fill="#7A7875" fontSize="10" fontFamily="monospace">A Practical Handbook for Operations Leaders</text>

              {/* Divider */}
              <line x1="136" y1="162" x2="384" y2="162" stroke="#222222" strokeWidth="1" />

              {/* Table of contents suggestion */}
              <text x="136" y="178" fill="#454340" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">CONTENTS</text>
              {[0,1,2,3,4,5,6,7].map(i => (
                <g key={i}>
                  <rect x="136" y={188 + i * 7} width={i % 3 === 0 ? 180 : i % 3 === 1 ? 140 : 160} height="4" rx="1" fill="#1A1A1A" />
                  <rect x={360} y={188 + i * 7} width="16" height="4" rx="1" fill="#1A1A1A" />
                </g>
              ))}

              {/* Cover bottom accent */}
              <rect x="136" y="252" width="284" height="2" fill="#0AAEFF" fillOpacity="0.3" />

              {/* Edition */}
              <text x="136" y="264" fill="#454340" fontSize="7" fontFamily="monospace">2026 EDITION · 8 CHAPTERS · 84 PAGES</text>

              {/* Decorative corner marks */}
              <path d="M398 30 L412 30 L412 44" stroke="#0AAEFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              <path x2="120" y2="242" d="M122 252 L122 266 L136 266" stroke="#0AAEFF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sec">
        <div className="wrap">
          <div className="ind-grid">
            {stats.map(s => (
              <div key={s.lbl} className="ind-card" style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.04em",
                  fontFamily: "monospace", color: "var(--acc)", marginBottom: 10
                }}>
                  {s.val}
                </div>
                <p className="body" style={{ fontSize: 13.5, lineHeight: 1.55 }}>{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter summaries */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">What&apos;s Inside</span>
            <h2 className="d2">Eight chapters. Every phase covered.</h2>
            <p className="body-lg" style={{ maxWidth: 540, marginTop: 12 }}>
              The guide is designed for operations leaders, not software engineers. It provides
              the frameworks, checklists, and real-world data you need to make confident decisions.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {chapters.map(ch => (
              <div key={ch.num} style={{
                background: "var(--bg)", padding: "32px",
                display: "grid", gridTemplateColumns: "64px 1fr", gap: "0 28px"
              }}>
                <div style={{
                  fontSize: 28, fontWeight: 700, letterSpacing: "-0.04em",
                  fontFamily: "monospace", color: "var(--bdr3)", lineHeight: 1,
                  paddingTop: 4
                }}>
                  {ch.num}
                </div>
                <div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 10 }}>
                    {ch.title}
                  </h3>
                  <p className="body" style={{ lineHeight: 1.72 }}>{ch.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download form */}
      <section className="sec" id="download">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 480px", gap: 64, alignItems: "center", maxWidth: 1000 }}>
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 14 }}>Download</span>
              <h2 className="d2" style={{ marginBottom: 20 }}>Get the full guide — free.</h2>
              <p className="body" style={{ lineHeight: 1.75, marginBottom: 16 }}>
                The RBOT Enterprise Robotics Deployment Guide is a 84-page practical handbook developed
                from our work across 500+ robot deployments in manufacturing, warehousing, retail, and
                food and beverage operations.
              </p>
              <p className="body" style={{ lineHeight: 1.75, marginBottom: 16 }}>
                It is the resource we wish had existed when we started RBOT. We are sharing it
                freely because the more rigorously enterprise robotics deployments are planned, the
                better outcomes the entire industry achieves.
              </p>
              <p className="body" style={{ lineHeight: 1.75 }}>
                Fill out the form and we will send the PDF immediately. We may follow up with related
                resources — you can opt out at any time.
              </p>
            </div>
            <div style={{ border: "1px solid var(--bdr2)", borderRadius: 3, padding: "40px", background: "var(--bg1)" }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 24 }}>
                Get the Deployment Guide
              </h3>
              <GuideForm />
                <p className="body" style={{ fontSize: 11.5, textAlign: "center", lineHeight: 1.55, marginTop: 8 }}>
                  Free. No spam. Unsubscribe anytime.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Next Step</span>
          <h2 className="d2">Ready to move beyond the guide?</h2>
          <p className="body-lg">
            RBOT can run a structured automation assessment for your operation — delivering a
            concrete deployment roadmap with projected ROI in 2–3 weeks.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/resources/case-studies" className="btn btn-g">Read Case Studies</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

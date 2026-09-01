import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies — RBOT Robotics Deployment Results",
  description: "Real results from RBOT enterprise robotics deployments. Labor cost reductions, throughput gains, and ROI across manufacturing, warehousing, retail, and food and beverage.",
};

const caseStudies = [
  {
    industry: "Warehousing",
    headline: "38% labor cost reduction, 99.1% order accuracy",
    company: "Regional 3PL Operator",
    location: "2 Facilities — Midwest",
    metrics: [
      { label: "Labor Cost Reduction", val: "38%" },
      { label: "Order Accuracy", val: "99.1%" },
      { label: "Payback Period", val: "14 mo" },
    ],
    body: [
      "A regional third-party logistics provider operating two fulfillment centers in the Midwest was struggling with labor retention and accuracy rates that were generating customer chargebacks. After a 6-week RBOT assessment, we identified the goods-to-person workflow as the highest-value automation target: 68% of labor hours were consumed in pick-and-pack operations with a low task complexity profile.",
      "RBOT deployed 8 AMRs across both facilities, integrated with the customer's existing Blue Yonder WMS, and ran a structured 4-week operator training program. Within 90 days of go-live, the customer had eliminated 22% of labor costs through natural attrition (no layoffs), reduced order error rates from 1.8% to 0.9%, and achieved 94% fleet utilization. By month 14, the deployment had paid for itself and the customer was exploring expansion to a third facility.",
    ],
    robots: "8 AMRs (Locus Robotics)",
    tag: "Warehousing",
  },
  {
    industry: "Manufacturing",
    headline: "41% throughput increase, $2.1M/yr in savings",
    company: "Auto Parts Manufacturer",
    location: "1 Facility — Southeast",
    metrics: [
      { label: "Throughput Increase", val: "41%" },
      { label: "Annual Savings", val: "$2.1M" },
      { label: "Fleet Utilization", val: "96.2%" },
    ],
    body: [
      "A Tier 2 auto parts manufacturer serving several OEM assembly lines was running a machine-tending operation with significant labor intensity and ergonomic risk. Operators were performing repetitive arm-reach motions at CNC machines across two shifts, leading to injury rates above the industry average and difficulty maintaining consistent cycle times during peak production.",
      "RBOT deployed 6 Universal Robots UR10e collaborative robots across the CNC line, implementing a cell-layout redesign that RBOT engineers designed to maximize robot reach coverage without major capital modification to the floor. Integration with the manufacturer's Fanuc control systems was completed in week 9 of the program. The cobots now run unsupervised during third shift, allowing the manufacturer to add production capacity without additional headcount. Recordable injury rates in the tended cells fell to zero in the first year.",
    ],
    robots: "6 Cobots (Universal Robots UR10e)",
    tag: "Manufacturing",
  },
  {
    industry: "Retail",
    headline: "55% inventory accuracy improvement",
    company: "National Retailer",
    location: "12 Store Pilot — National",
    metrics: [
      { label: "Inventory Accuracy Gain", val: "55%" },
      { label: "Out-of-Stock Reduction", val: "44%" },
      { label: "Scan Coverage", val: "100%/wk" },
    ],
    body: [
      "A national retailer with 400+ stores was operating with inventory accuracy rates below 70% — a leading cause of lost sales, shrink miscounting, and labor waste in replenishment. Manual shelf scans were performed weekly in only 30% of stores, leaving the inventory system perpetually stale. RBOT was engaged to design and deploy a fully autonomous inventory scanning program across a 12-store pilot.",
      "RBOT selected Simbe Robotics Tally robots for the program and handled all store layout assessment, charging station installation, and system integration with the retailer's SAP IS-Retail instance. RBOT provided a dedicated customer success manager to analyze scan data weekly and surface actionable replenishment recommendations. The pilot stores increased inventory accuracy from 68% to 96% over six months, reduced out-of-stock events by 44%, and generated enough data to build a business case for a chain-wide rollout.",
    ],
    robots: "12 Inventory Robots (Simbe Tally)",
    tag: "Retail",
  },
  {
    industry: "Healthcare",
    headline: "4.2M picks/year at 99.97% accuracy — humanoid pilot",
    company: "Medical Device Distributor",
    location: "1 Facility — Northeast",
    metrics: [
      { label: "Annual Pick Volume", val: "4.2M" },
      { label: "Pick Accuracy", val: "99.97%" },
      { label: "Labor Cost Delta", val: "-31%" },
    ],
    body: [
      "A medical device distributor operating under FDA Part 820 quality system requirements was managing a high-SKU kitting and distribution operation where accuracy was a regulatory requirement, not simply a performance goal. The customer was evaluating a humanoid pilot for mixed-SKU kitting — a task that had historically resisted automation due to product variability and regulatory documentation requirements.",
      "RBOT designed and managed the first enterprise humanoid deployment in the medical device distribution space, working with Figure AI to pilot 2 humanoid units on a defined kitting workflow. RBOT engineered the regulatory documentation layer, including automated pick-and-verify audit trail generation integrated with the customer's QMS. The pilot ran for 8 months, averaged 99.97% accuracy across 1.2M kitted orders, and produced the data package used to submit for FDA acceptance of automated kitting within the customer's quality system.",
    ],
    robots: "2 Humanoid Pilot Units (Figure AI)",
    tag: "Healthcare",
  },
  {
    industry: "Food & Beverage",
    headline: "32% labor cost reduction, zero recordable incidents",
    company: "Regional Food & Beverage Plant",
    location: "1 Facility — Midwest",
    metrics: [
      { label: "Labor Cost Reduction", val: "32%" },
      { label: "Recordable Incidents", val: "0" },
      { label: "OEE Improvement", val: "+18%" },
    ],
    body: [
      "A regional food and beverage manufacturer was managing a palletizing and end-of-line material movement operation that combined high physical demand with a cold environment — producing both elevated injury rates and above-average turnover in those roles. Freezer and cooler environments create particularly unfavorable conditions for human workers performing repetitive lift tasks, and staffing these positions had become a persistent operational challenge.",
      "RBOT deployed 5 mobile robots (2 autonomous forklifts and 3 AMRs for pallet movement) and redesigned the material flow from packaging lines to refrigerated staging. RBOT managed all safety perimeter design and worked with the customer's EH&S team to satisfy OSHA and ANSI/RIA R15.08 requirements for mobile industrial robots. In the 18 months post-deployment, the customer recorded zero operator injuries in the automated zones, reduced labor cost in the affected workflows by 32%, and improved Overall Equipment Effectiveness by 18% through more consistent line replenishment.",
    ],
    robots: "5 Mobile Robots (2 autonomous forklifts, 3 AMRs)",
    tag: "Food & Beverage",
  },
  {
    industry: "E-Commerce",
    headline: "3× throughput during peak season",
    company: "E-Commerce Fulfillment Operator",
    location: "1 Facility — West Coast",
    metrics: [
      { label: "Peak Season Throughput", val: "3×" },
      { label: "Units/Hour (Off-Peak)", val: "+87%" },
      { label: "Fleet Size", val: "22 AMRs" },
    ],
    body: [
      "A growing e-commerce fulfillment operator was facing an acute constraint: their manual pick operation could not scale to meet peak season demand without a labor hiring surge that historically took 8 weeks to execute and resulted in significant quality degradation. The customer needed a throughput solution that was scalable, reversible if needed, and deployable without a multi-year capital commitment.",
      "RBOT structured a RaaS agreement covering 22 AMRs — sized for peak demand — deployed across a 180,000 sq ft fulfillment center. The AMRs were integrated with the customer's proprietary WMS through a RBOT-developed API connector. Off-peak, the fleet runs at 70% capacity and the subscription adjusts through a variable unit mechanism in the RaaS contract. During the first peak season after deployment, the customer processed 3× their prior year peak volume with the same headcount, zero hiring surge, and 99.4% order accuracy — a 1.1-point improvement over their pre-automation baseline.",
    ],
    robots: "22 AMRs (6RIVER Fulfillment)",
    tag: "Warehousing",
  },
];

const filters = ["All", "Manufacturing", "Warehousing", "Retail", "Healthcare", "Food & Beverage"];

const barData = [
  { pct: 32, label: "Food & Bev", color: "#22C55E" },
  { pct: 41, label: "Mfg", color: "#0AAEFF" },
  { pct: 38, label: "Warehousing", color: "#0AAEFF" },
  { pct: 55, label: "Retail", color: "#F59E0B" },
  { pct: 47, label: "Healthcare", color: "#0AAEFF" },
];
const maxBar = 60;

export default function CaseStudiesPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Case Studies</span>
        <h1 className="d1">Results from the field.</h1>
        <p className="body-lg" style={{ maxWidth: 520, marginTop: 20 }}>
          Real deployments. Real numbers. Every case study below reflects an actual RBOT engagement,
          with results verified through our managed operations monitoring platform.
        </p>
      </div>

      {/* ROI Chart SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Labor Cost Reduction by Industry</span>
            <h2 className="d2">The numbers across our customer base.</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <svg
              width="500"
              height="240"
              viewBox="0 0 500 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 360 }}
            >
              {/* Y-axis gridlines */}
              {[0, 20, 40, 60].map((v) => {
                const y = 180 - (v / maxBar) * 140;
                return (
                  <g key={v}>
                    <line x1="60" y1={y} x2="480" y2={y} stroke="#1A1A1A" strokeWidth="1" />
                    <text x="50" y={y + 4} textAnchor="end" fill="#454340" fontSize="8" fontFamily="monospace">{v}%</text>
                  </g>
                );
              })}

              {/* Industry average dotted line at 28% */}
              <line x1="60" y1={180 - (28 / maxBar) * 140} x2="480" y2={180 - (28 / maxBar) * 140} stroke="#7A7875" strokeWidth="1" strokeDasharray="5,4" />
              <text x="484" y={180 - (28 / maxBar) * 140 + 4} fill="#7A7875" fontSize="7" fontFamily="monospace">Avg</text>

              {/* Baseline */}
              <line x1="60" y1="180" x2="480" y2="180" stroke="#2C2C2C" strokeWidth="1.5" />

              {/* Bars */}
              {barData.map((b, i) => {
                const barWidth = 52;
                const x = 80 + i * 84;
                const barHeight = (b.pct / maxBar) * 140;
                const y = 180 - barHeight;
                return (
                  <g key={b.label}>
                    <rect x={x} y={y} width={barWidth} height={barHeight} fill={b.color} fillOpacity="0.2" rx="1" />
                    <rect x={x} y={y} width={barWidth} height="2" fill={b.color} rx="1" />
                    {/* Value */}
                    <text x={x + barWidth / 2} y={y - 6} textAnchor="middle" fill={b.color} fontSize="11" fontWeight="700" fontFamily="monospace">
                      {b.pct}%
                    </text>
                    {/* Label */}
                    <text x={x + barWidth / 2} y="196" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">
                      {b.label}
                    </text>
                  </g>
                );
              })}

              {/* Y axis */}
              <line x1="60" y1="30" x2="60" y2="180" stroke="#2C2C2C" strokeWidth="1" />

              {/* Legend */}
              <line x1="70" y1="220" x2="90" y2="220" stroke="#7A7875" strokeWidth="1" strokeDasharray="4,3" />
              <text x="96" y="224" fill="#7A7875" fontSize="8" fontFamily="monospace">Industry average (28%)</text>
              <rect x="220" y="215" width="10" height="8" fill="#0AAEFF" fillOpacity="0.3" rx="1" />
              <text x="234" y="224" fill="#7A7875" fontSize="8" fontFamily="monospace">RBOT customer result</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Filter chips */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">All Case Studies</span>
            <h2 className="d2">Deployments across every vertical.</h2>
          </div>
          <div className="chips" style={{ marginBottom: 40 }}>
            {filters.map((f, i) => (
              <span
                key={f}
                className="ichip"
                style={i === 0 ? { background: "var(--acc-bg)", border: "1px solid var(--acc-bdr)", color: "var(--acc)" } : {}}
              >
                {f}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {caseStudies.map(cs => (
              <div key={cs.headline} style={{ background: "var(--bg)", padding: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: 9, fontFamily: "monospace", letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "2px 8px", border: "1px solid var(--acc-bdr)", borderRadius: 2, color: "var(--acc)",
                    background: "var(--acc-bg)"
                  }}>
                    {cs.industry}
                  </span>
                  <span className="lbl">{cs.company}</span>
                  <span className="lbl">·</span>
                  <span className="lbl">{cs.location}</span>
                  <span className="lbl">·</span>
                  <span className="lbl">{cs.robots}</span>
                </div>

                <h3 style={{ fontSize: "clamp(18px, 2.2vw, 24px)", fontWeight: 700, letterSpacing: "-0.035em", marginBottom: 24, lineHeight: 1.25 }}>
                  {cs.headline}
                </h3>

                {/* Metrics */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--bdr)", border: "1px solid var(--bdr)", marginBottom: 28 }}>
                  {cs.metrics.map(m => (
                    <div key={m.label} style={{ background: "var(--bg1)", padding: "18px 20px" }}>
                      <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "monospace", color: "var(--t1)", marginBottom: 4 }}>
                        {m.val}
                      </div>
                      <p className="lbl">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Body paragraphs */}
                {cs.body.map((para, i) => (
                  <p key={i} className="body" style={{ lineHeight: 1.75, marginBottom: i < cs.body.length - 1 ? 16 : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Your Results</span>
          <h2 className="d2">What could your numbers look like?</h2>
          <p className="body-lg">
            Start with a free assessment. We will model the ROI for your specific operation —
            workflows, headcount, facility constraints, and all.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/resources/guide" className="btn btn-g">Read the Deployment Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

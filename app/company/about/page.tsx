import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About RBOT — Physical AI Deployment Partner",
  description: "RBOT bridges the gap between robot manufacturers and enterprise operators. We are the vendor-neutral partner for physical AI deployment, integration, and managed operations.",
};

const milestones = [
  { year: "2021", label: "Founded", x: 42 },
  { year: "2022", label: "First RaaS Deploy", x: 125 },
  { year: "2023", label: "Platform Launch", x: 210 },
  { year: "2024", label: "50 Customers", x: 295 },
  { year: "2025", label: "National Field Network", x: 380 },
  { year: "2026", label: "Physical AI Leader", x: 458 },
];

const team = [
  {
    name: "Marcus Webb",
    title: "Chief Executive Officer",
    bg: "MW",
    bio: "Former VP of Robotics Deployment at Amazon Robotics, where he led the rollout of 80,000+ robotic units across North American fulfillment centers. Marcus founded RBOT after seeing firsthand the gap between robot capability and enterprise readiness.",
  },
  {
    name: "Dr. Sora Tanaka",
    title: "Chief Technology Officer",
    bg: "ST",
    bio: "Previously a principal engineer at Figure AI and staff roboticist at Boston Dynamics, where she worked on whole-body control and enterprise mobility platforms. Sora leads RBOT's platform architecture and AI integration stack.",
  },
  {
    name: "Darnell Hughes",
    title: "VP of Deployment",
    bg: "DH",
    bio: "Ten years of industrial automation program management across automotive, food and beverage, and general manufacturing. Darnell built the methodology that drives RBOT's structured deployment framework and 94% first-year utilization rates.",
  },
  {
    name: "Col. (Ret.) Priya Osei",
    title: "VP of Field Operations",
    bg: "PO",
    bio: "Retired U.S. Army colonel with expertise in large-scale logistics, field maintenance operations, and distributed team command. Priya architected RBOT's national field service network and leads our 200+ technician force.",
  },
];

const values = [
  {
    title: "Outcome-Driven",
    desc: "We measure success by fleet utilization, cost reduction, and throughput gains — not tickets closed or robots shipped. Every engagement is scoped around measurable business outcomes.",
  },
  {
    title: "Operator-First",
    desc: "The people who run your floors, manage your warehouses, and maintain your lines are our primary stakeholders. Technology serves operations, not the other way around.",
  },
  {
    title: "Radical Transparency",
    desc: "You will always know what is working, what is underperforming, and what needs to change. We publish utilization data in real time and review it with you monthly.",
  },
  {
    title: "Continuous Improvement",
    desc: "Deployment is not an event — it is an ongoing process. We embed improvement cycles into every managed operation, ratcheting performance upward on a defined cadence.",
  },
];

const stats = [
  { val: "500+", lbl: "Robots Deployed" },
  { val: "94.2%", lbl: "Avg Fleet Utilization" },
  { val: "40+", lbl: "Enterprise Customers" },
  { val: "12", lbl: "Manufacturer Partnerships" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">About RBOT</span>
        <h1 className="d1" style={{ maxWidth: 780 }}>
          We exist to bridge physical AI and enterprise operations.
        </h1>
        <p className="body-lg" style={{ maxWidth: 560, marginTop: 20 }}>
          RBOT is the vendor-neutral partner that takes robotics from the showroom floor to your
          production floor — and keeps it running once it arrives.
        </p>
      </div>

      {/* Timeline SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Our Story</span>
            <h2 className="d2">Built from the operations side up.</h2>
            <p className="body-lg" style={{ maxWidth: 560, marginTop: 12 }}>
              RBOT was founded by operators who had deployed robots at scale and knew the
              gap between manufacturer promise and enterprise reality.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <svg
              width="500"
              height="280"
              viewBox="0 0 500 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 400 }}
            >
              {/* Background grid */}
              {[0,1,2,3].map(i => (
                <line key={i} x1="0" y1={60 + i * 50} x2="500" y2={60 + i * 50} stroke="#1A1A1A" strokeWidth="1" />
              ))}

              {/* Connecting line */}
              <line x1="42" y1="100" x2="458" y2="100" stroke="#2C2C2C" strokeWidth="1.5" />

              {/* Accent progress line */}
              <line x1="42" y1="100" x2="458" y2="100" stroke="#0AAEFF" strokeWidth="1.5" strokeOpacity="0.4" />

              {milestones.map((m, i) => (
                <g key={m.year}>
                  {/* Dot */}
                  <circle cx={m.x} cy="100" r="7" fill={i === milestones.length - 1 ? "#0AAEFF" : "#111111"} stroke={i === milestones.length - 1 ? "#0AAEFF" : "#2C2C2C"} strokeWidth="1.5" />
                  {i === milestones.length - 1 && (
                    <circle cx={m.x} cy="100" r="12" fill="none" stroke="#0AAEFF" strokeWidth="1" strokeOpacity="0.3" />
                  )}

                  {/* Year above */}
                  <text x={m.x} y="82" textAnchor="middle" fill="#0AAEFF" fontSize="9" fontFamily="monospace" fontWeight="500" letterSpacing="0.1em">
                    {m.year}
                  </text>

                  {/* Label below */}
                  <text x={m.x} y="122" textAnchor="middle" fill="#7A7875" fontSize="9" fontFamily="monospace">
                    {m.label.split(" ").map((word, wi) => (
                      <tspan key={wi} x={m.x} dy={wi === 0 ? 0 : 12}>{word}</tspan>
                    ))}
                  </text>

                  {/* Facility icon at key milestones */}
                  {(i === 0 || i === 2 || i === 4) && (
                    <g transform={`translate(${m.x - 8}, 190)`}>
                      <rect x="2" y="6" width="12" height="10" fill="none" stroke="#2C2C2C" strokeWidth="1" />
                      <rect x="5" y="8" width="4" height="8" fill="#1A1A1A" />
                      <line x1="2" y1="6" x2="8" y2="2" stroke="#2C2C2C" strokeWidth="1" />
                      <line x1="14" y1="6" x2="8" y2="2" stroke="#2C2C2C" strokeWidth="1" />
                      <text x="8" y="24" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">{m.year}</text>
                    </g>
                  )}

                  {/* Vertical connector to facility */}
                  {(i === 0 || i === 2 || i === 4) && (
                    <line x1={m.x} y1="107" x2={m.x} y2="196" stroke="#1A1A1A" strokeWidth="1" strokeDasharray="3,3" />
                  )}
                </g>
              ))}

              {/* Labels */}
              <text x="250" y="260" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace" letterSpacing="0.14em">RBOT FOUNDING TIMELINE · 2021–2026</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 680 }}>
            <span className="lbl">Mission</span>
            <h2 className="d2">Why RBOT exists.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, maxWidth: 960 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 14 }}>
                The gap between manufacturer and operator
              </h3>
              <p className="body" style={{ lineHeight: 1.75 }}>
                Robot manufacturers are extraordinarily good at building machines. They are not, by design, experts
                in enterprise change management, ERP integration, shift scheduling, or compliance reporting. The gap
                between "the robot works in the demo" and "the robot is generating ROI in your facility" is
                enormous — and most manufacturers are not resourced to close it. That gap is where RBOT lives.
                We specialize exclusively in the operational side: assessment, selection, integration, deployment,
                and the ongoing management that keeps your fleet productive month after month.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 14 }}>
                Why vendor neutrality is non-negotiable
              </h3>
              <p className="body" style={{ lineHeight: 1.75 }}>
                If your deployment partner sells robots, they will recommend the robots they sell — regardless of
                whether those robots are the best fit for your operation. RBOT does not manufacture or resell
                hardware. We partner with 12+ manufacturers and have deep technical experience with AMRs, cobots,
                humanoids, gantry systems, and specialized inspection platforms. Our selection recommendations
                are based entirely on your workflow requirements, facility constraints, existing systems, and
                total cost of ownership over a three-to-five year horizon. We succeed when your robots succeed.
                That alignment is only possible when we are not also trying to move units.
              </p>
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 14 }}>
                Why full-lifecycle matters
              </h3>
              <p className="body" style={{ lineHeight: 1.75 }}>
                Most deployment failures happen after go-live. A robot that runs at 60% utilization in month
                three — because the integration was shallow, the change management was rushed, or the field
                service response was too slow — is not a robot delivering ROI. RBOT owns the full lifecycle:
                from the assessment that defines your automation readiness, through site preparation, systems
                integration, operator training, and hypercare, into a managed operations model that treats
                your fleet like infrastructure. We staff field service technicians in your region. We monitor
                your robots 24/7. We review performance with you monthly and adjust. This is not a project — it
                is a partnership with a defined accountability structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">How We Work</span>
            <h2 className="d2">Three principles that define every engagement.</h2>
          </div>
          <div className="process">
            <div className="p-step on">
              <div className="p-dot" />
              <h4>Vendor Neutral</h4>
              <p>
                We work with the 12 manufacturers whose hardware best fits enterprise requirements — and we
                recommend based on fit, not margins. Your operation drives the selection.
              </p>
            </div>
            <div className="p-step on">
              <div className="p-dot" />
              <h4>Tech-First Ops</h4>
              <p>
                Software-defined fleet management, deep ERP and WMS integration, real-time telemetry, and
                predictive maintenance — applied to production environments by operators who have run them.
              </p>
            </div>
            <div className="p-step on">
              <div className="p-dot" />
              <h4>Aligned Incentives</h4>
              <p>
                Our managed services contracts are structured around fleet utilization and performance KPIs.
                We succeed financially when your robots perform. There is no other way we want it.
              </p>
            </div>
            <div className="p-step">
              <div className="p-dot" />
              <h4>Rigorous Methodology</h4>
              <p>
                Six-phase deployment framework refined across 500+ robot installs. Assessment, design, staging,
                integration, go-live, and continuous improvement — each with clear gates and deliverables.
              </p>
            </div>
            <div className="p-step">
              <div className="p-dot" />
              <h4>Field Presence</h4>
              <p>
                200+ field service technicians nationally. Response SLAs measured in hours, not days. Local
                knowledge, manufacturer-certified, and embedded in the regions we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Leadership</span>
            <h2 className="d2">Built by operators, for operators.</h2>
            <p className="body-lg" style={{ maxWidth: 540, marginTop: 12 }}>
              Our leadership team brings decades of experience from the most demanding environments in
              robotics, logistics, and enterprise operations.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {team.map(t => (
              <div key={t.name} style={{ background: "var(--bg)", padding: "32px 28px" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 3, background: "var(--bg2)",
                  border: "1px solid var(--bdr2)", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 13, fontWeight: 600,
                  fontFamily: "monospace", color: "var(--acc)", marginBottom: 18
                }}>
                  {t.bg}
                </div>
                <p className="lbl" style={{ marginBottom: 6 }}>{t.title}</p>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.025em", marginBottom: 12 }}>
                  {t.name}
                </h3>
                <p className="body">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Values</span>
            <h2 className="d2">What guides every decision.</h2>
          </div>
          <div className="ind-grid">
            {values.map((v, i) => (
              <div key={v.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">By the Numbers</span>
            <h2 className="d2">Scale that speaks for itself.</h2>
          </div>
          <div className="ind-grid">
            {stats.map(s => (
              <div key={s.lbl} className="ind-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 700, letterSpacing: "-0.04em", fontFamily: "monospace", color: "var(--t1)", marginBottom: 8 }}>
                  {s.val}
                </div>
                <p className="lbl" style={{ fontSize: 11, letterSpacing: "0.12em" }}>{s.lbl}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Get Started</span>
          <h2 className="d2">Ready to deploy physical AI in your operation?</h2>
          <p className="body-lg">
            Start with a no-cost automation assessment. We will map your workflows, identify the highest-value
            automation opportunities, and give you a concrete deployment roadmap.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
            <Link href="/company/contact" className="btn btn-g">Talk to Our Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare Robot Deployment Options — RBOT",
  description: "How does RBOT compare to buying robots directly from manufacturers, building in-house integrations, or hiring a systems integrator? An honest breakdown.",
};

type Mark = "✓" | "✗" | "~";

const tableRows: { feature: string; rbot: Mark; oem: Mark; inhouse: Mark; si: Mark }[] = [
  { feature: "Vendor Neutral",          rbot: "✓", oem: "✗", inhouse: "~", si: "~" },
  { feature: "Managed Operations",      rbot: "✓", oem: "✗", inhouse: "✗", si: "~" },
  { feature: "Fixed Monthly Cost",      rbot: "✓", oem: "✗", inhouse: "✗", si: "✗" },
  { feature: "ERP / WMS Integration",   rbot: "✓", oem: "✗", inhouse: "~", si: "~" },
  { feature: "24/7 Field Service",      rbot: "✓", oem: "~", inhouse: "✗", si: "~" },
  { feature: "Platform Software",       rbot: "✓", oem: "~", inhouse: "✗", si: "✗" },
  { feature: "Financing Options",       rbot: "✓", oem: "✗", inhouse: "✗", si: "✗" },
  { feature: "Multi-Manufacturer Fleet",rbot: "✓", oem: "✗", inhouse: "~", si: "~" },
  { feature: "Assessment Included",     rbot: "✓", oem: "✗", inhouse: "✗", si: "~" },
  { feature: "SLA-Backed Uptime",       rbot: "✓", oem: "✗", inhouse: "✗", si: "~" },
];

const scenarios = [
  {
    label: "When RBOT is right",
    title: "You want robots working, not a robotics project.",
    desc: "RBOT is the right choice when your core business is operations — not robotics engineering. If you want predictable costs, vendor-neutral robot selection, integrated enterprise system connectivity, and a managed service that owns outcomes rather than just delivering hardware, RBOT is built for you. Ideal for 3PLs, distribution centers, manufacturing operations, and multi-facility enterprises that need robots deployed and producing ROI within months, not years.",
  },
  {
    label: "When OEM might work",
    title: "Single-robot-type, single-facility, minimal integration.",
    desc: "Buying directly from a robot manufacturer makes sense when your use case maps cleanly to a single robot type, you have an existing robotics engineering team, your facility has minimal ERP or WMS integration requirements, and you are comfortable with the manufacturer's proprietary software as your management interface. This approach works well for single-facility deployments of a specific OEM's product line where you can accept CapEx exposure and vendor lock-in.",
  },
  {
    label: "When in-house makes sense",
    title: "You are a technology company building a robotics core competency.",
    desc: "Building an in-house robotics integration practice makes sense when robotics is a strategic differentiator for your business — not a back-office efficiency play. E-commerce companies competing on fulfillment speed, logistics companies selling automation as a service, and manufacturers with proprietary process requirements that no standard integration would cover are candidates for an internal team. Expect 18–36 months of ramp time and ongoing engineering investment.",
  },
  {
    label: "When a systems integrator fits",
    title: "A complex, one-time build with long-term internal ownership.",
    desc: "Systems integrators specialize in designing and building automation installations — robotics cells, conveyor systems, AS/RS installations — as capital projects. They are the right choice when you have a defined, bounded problem, a project budget rather than ongoing OpEx, and an internal team ready to own the system after handoff. The risk with SIs is the ongoing cost of system ownership, which often exceeds project expectations once the integrator exits.",
  },
];

export default function ComparePage() {
  const markStyle = (m: Mark): React.CSSProperties => {
    if (m === "✓") return { color: "var(--good)", fontWeight: 700, fontSize: 18 };
    if (m === "✗") return { color: "var(--t3)", fontWeight: 700, fontSize: 18 };
    return { color: "var(--warn)", fontWeight: 700, fontSize: 18 };
  };

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Compare</span>
        <h1 className="d1">How RBOT compares.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          There are four ways companies deploy robots. Each has different cost structures, risk profiles,
          and operational outcomes. Here is an honest comparison.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get a Custom Assessment</Link>
          <Link href="/raas" className="btn btn-g">View RaaS Pricing</Link>
        </div>
      </div>

      {/* Comparison Matrix SVG */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <svg
            viewBox="0 0 540 300"
            width="540"
            height="300"
            style={{ maxWidth: "100%", display: "block", border: "1px solid var(--bdr2)", borderRadius: 4 }}
            aria-label="Comparison matrix: RBOT vs OEM vs Systems Integrator"
          >
            {/* Background */}
            <rect width="540" height="300" style={{ fill: "var(--bg1)" }} />

            {/* Header row */}
            <rect width="540" height="46" style={{ fill: "var(--bg2)" }} />
            <rect y="46" width="540" height="1" style={{ fill: "var(--bdr)" }} />

            {/* Column headers */}
            <text x="16" y="29" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>FEATURE</text>

            {/* RBOT header — highlighted */}
            <rect x="190" y="8" width="100" height="30" rx="2" style={{ fill: "var(--acc-bg)", stroke: "var(--acc)", strokeWidth: 1 }} />
            <text x="228" y="28" fontFamily="monospace" fontSize="11" fontWeight="700" style={{ fill: "var(--acc)" }}>RBOT</text>

            <text x="312" y="29" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Direct OEM</text>
            <text x="422" y="29" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Sys. Integrator</text>

            {/* Row dividers and data */}
            {tableRows.slice(0, 5).map((row, i) => (
              <g key={row.feature}>
                <rect x="0" y={47 + i * 50} width="540" height="50" style={{ fill: i % 2 === 0 ? "var(--bg)" : "var(--bg1)" }} />
                <rect x="0" y={97 + i * 50} width="540" height="1" style={{ fill: "var(--bdr)" }} />
                <text x="16" y={72 + i * 50} fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>{row.feature}</text>
                {/* RBOT cell */}
                <rect x="190" y={47 + i * 50} width="100" height="50" style={{ fill: "rgba(10,174,255,0.05)" }} />
                <text x="232" y={76 + i * 50} fontFamily="monospace" fontSize="16" fontWeight="700" style={{ fill: row.rbot === "✓" ? "var(--good)" : row.rbot === "✗" ? "var(--t3)" : "var(--warn)" }} textAnchor="middle">{row.rbot}</text>
                <text x="340" y={76 + i * 50} fontFamily="monospace" fontSize="16" fontWeight="700" style={{ fill: row.oem === "✓" ? "var(--good)" : row.oem === "✗" ? "var(--t3)" : "var(--warn)" }} textAnchor="middle">{row.oem}</text>
                <text x="456" y={76 + i * 50} fontFamily="monospace" fontSize="16" fontWeight="700" style={{ fill: row.si === "✓" ? "var(--good)" : row.si === "✗" ? "var(--t3)" : "var(--warn)" }} textAnchor="middle">{row.si}</text>
              </g>
            ))}

            {/* Bottom status */}
            <rect x="0" y="297" width="540" height="3" style={{ fill: "var(--acc)" }} />

            {/* Legend */}
            <text x="16" y="282" fontFamily="monospace" fontSize="8" style={{ fill: "var(--good)" }}>✓ Full</text>
            <text x="60" y="282" fontFamily="monospace" fontSize="8" style={{ fill: "var(--warn)" }}>~ Partial</text>
            <text x="114" y="282" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>✗ Not included</text>
          </svg>
        </div>
      </section>

      {/* Intro */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">The Landscape</span>
                <h2 className="d2">Three ways companies deploy robots. One that manages outcomes.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Most enterprise robotic deployments follow one of three patterns: buy robots directly from
                an OEM and manage them internally, hire a systems integrator to design and build a custom
                automation cell, or attempt to build an internal robotics engineering practice. Each approach
                has genuine strengths — and significant hidden costs that rarely surface until after deployment.
                The common thread is that in all three cases, the buyer carries operational risk. The robots
                are purchased or built-to-order; uptime and ROI are the buyer&apos;s problem.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                RBOT was built as a fourth option: a managed robotics deployment model where you pay for
                operational outcomes — task completions, uptime, utilization — not just for hardware or
                project work. This is not a conceptual difference; it changes every aspect of how a robotics
                deployment is structured. Vendor neutrality means RBOT selects the best robot for your
                specific use case, not the robot that any single manufacturer wants to sell. Managed operations
                means RBOT field engineers, not your team, are on-call for maintenance and incident response.
                Fixed monthly pricing means finance can model the investment without worrying about hidden
                upgrade costs, field service hourly rates, or integration project overruns.
              </p>
              <p className="body">
                The tradeoffs are real. If you want full ownership and control — including the ability to
                modify robot firmware, build proprietary software on top of the hardware, or lock in a
                specific OEM relationship — RBOT&apos;s managed model is not for you. If you want robots
                working, integrated, and producing measurable ROI within months rather than years, read on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Comparison Table */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Full Comparison</span>
            <h2 className="d2">Feature-by-feature breakdown.</h2>
          </div>
          <div style={{ marginTop: 40, border: "1px solid var(--bdr2)", borderRadius: 3, overflow: "hidden" }}>
            {/* Table header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 100px 140px 120px 140px",
              gap: 0,
              background: "var(--bg2)",
              borderBottom: "1px solid var(--bdr)",
              padding: "14px 24px",
            }}>
              <span className="lbl">Feature</span>
              <span className="lbl" style={{ textAlign: "center", color: "var(--acc)" }}>RBOT</span>
              <span className="lbl" style={{ textAlign: "center" }}>Direct OEM</span>
              <span className="lbl" style={{ textAlign: "center" }}>In-House</span>
              <span className="lbl" style={{ textAlign: "center" }}>Sys. Integrator</span>
            </div>
            {tableRows.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 100px 140px 120px 140px",
                  gap: 0,
                  background: i % 2 === 0 ? "var(--bg)" : "var(--bg1)",
                  borderBottom: i < tableRows.length - 1 ? "1px solid var(--bdr)" : undefined,
                  padding: "12px 24px",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: 14, color: "var(--t2)" }}>{row.feature}</span>
                <span style={{ textAlign: "center", ...markStyle(row.rbot) }}>{row.rbot}</span>
                <span style={{ textAlign: "center", ...markStyle(row.oem) }}>{row.oem}</span>
                <span style={{ textAlign: "center", ...markStyle(row.inhouse) }}>{row.inhouse}</span>
                <span style={{ textAlign: "center", ...markStyle(row.si) }}>{row.si}</span>
              </div>
            ))}
            <div style={{ padding: "12px 24px", background: "var(--bg2)", borderTop: "1px solid var(--bdr)", display: "flex", gap: 24 }}>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--good)" }}>✓ Full</span>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--warn)" }}>~ Partial / varies</span>
              <span style={{ fontFamily: "monospace", fontSize: 11, color: "var(--t3)" }}>✗ Not included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Scenario Guidance */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Decision Guide</span>
            <h2 className="d2">When to choose each path.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)", marginTop: 48 }}>
            {scenarios.map((s, i) => (
              <div key={s.label} style={{ background: i === 0 ? "var(--acc-bg)" : "var(--bg)", padding: "32px 28px", border: i === 0 ? "1px solid var(--acc-bdr)" : undefined }}>
                <div className="lbl" style={{ marginBottom: 12, color: i === 0 ? "var(--acc)" : undefined }}>{s.label}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-.025em", marginBottom: 12 }}>{s.title}</h3>
                <p className="body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quote */}
      <section className="sec">
        <div className="wrap">
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <span className="lbl" style={{ display: "block", marginBottom: 24 }}>Customer Perspective</span>
            <blockquote style={{
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: "-.02em",
              lineHeight: 1.5,
              color: "var(--t1)",
              marginBottom: 24,
              paddingLeft: 32,
              borderLeft: "3px solid var(--acc)",
              textAlign: "left",
            }}>
              &ldquo;We spent eighteen months evaluating three systems integrators and two OEM direct programs.
              Every proposal came back with massive upfront CapEx, integration costs that ballooned during
              discovery, and maintenance terms that made our finance team nervous. RBOT gave us a single
              monthly number, selected the right AMRs for our Memphis facility, and had us live in eleven weeks.
              We have not looked back.&rdquo;
            </blockquote>
            <p style={{ fontFamily: "monospace", fontSize: 12, color: "var(--t3)", letterSpacing: ".06em" }}>
              VP Operations, National 3PL — 4 facilities, 38 AMRs under management
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Not sure which path is right? Start with an assessment.</h2>
          <p className="body-lg">
            RBOT&apos;s assessment team will evaluate your operation, model the economics of each deployment
            approach, and give you an honest recommendation — even if RBOT is not the best fit.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/raas" className="btn btn-g">View RaaS Model</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

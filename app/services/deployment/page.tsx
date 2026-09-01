import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Site Deployment | RBOT — From Concrete Floor to Robot Fleet",
  description:
    "RBOT manages every phase of physical robot deployment: site preparation, infrastructure, staging, integration testing, pilot operations, and full go-live. Structured 60-day engagement.",
};

const phases = [
  {
    n: "01",
    range: "Days 1–5",
    title: "Site Assessment",
    desc: "RBOT engineers conduct an on-site walkthrough to evaluate floor loading, power infrastructure, network connectivity, lighting, and safety zones. A deployment readiness report is issued before any hardware ships.",
  },
  {
    n: "02",
    range: "Days 6–20",
    title: "Infrastructure Prep",
    desc: "Site modifications are executed: floor markings, anchor points, electrical runs, network drops, edge compute hardware installation, and safety barrier placement. RBOT coordinates with your facilities team throughout.",
  },
  {
    n: "03",
    range: "Days 21–35",
    title: "Robot Staging & Config",
    desc: "Hardware arrives and is staged in a controlled area. Each unit is configured for your specific environment: task profiles, speed limits, obstacle maps, and fleet management credentials are loaded and verified.",
  },
  {
    n: "04",
    range: "Days 36–45",
    title: "Integration Testing",
    desc: "Robots are connected to your ERP, WMS, and MES systems. Task triggers, exception handling, and data outputs are validated end-to-end. RBOT runs a full regression test suite before any live operations begin.",
  },
  {
    n: "05",
    range: "Days 46–55",
    title: "Pilot Operations",
    desc: "The fleet operates in a controlled pilot: limited shifts, supervised by RBOT engineers on-site. Performance data is collected, throughput baselines are established, and final adjustments are made.",
  },
  {
    n: "06",
    range: "Day 60",
    title: "Full Go-Live",
    desc: "The fleet transitions to full production operations. RBOT's remote monitoring is activated. Your team has completed training. The managed operations SLA is now active.",
  },
];

const deliverables = [
  {
    title: "Deployment Readiness Report",
    desc: "Site assessment findings, infrastructure requirements, and a go/no-go evaluation before any hardware commitment.",
  },
  {
    title: "Infrastructure Specification",
    desc: "Detailed drawings and specifications for electrical, network, and structural modifications required for the deployment.",
  },
  {
    title: "Robot Configuration Package",
    desc: "Documented configuration files for each unit: task maps, speed profiles, safety zones, and fleet management credentials.",
  },
  {
    title: "Integration Test Report",
    desc: "Full results of ERP, WMS, and MES integration testing, including test cases executed, pass/fail status, and resolution notes.",
  },
  {
    title: "Training Completion Records",
    desc: "Training materials and completion records for all operator and supervisor staff who will interact with the fleet.",
  },
  {
    title: "Go-Live Handoff Document",
    desc: "Operational runbook, escalation contacts, emergency stop procedures, and the first 90-day performance baseline.",
  },
];

export default function DeploymentPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Site Deployment</span>
        <h1 className="d1">From concrete floor to robot fleet in 60 days.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          RBOT handles every element of the physical deployment: site preparation, infrastructure
          installation, robot staging, integration testing, and operator training — through to
          full go-live under a single structured engagement.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Start with an Assessment</Link>
          <Link href="/services" className="btn btn-g">All Services</Link>
        </div>
      </div>

      {/* Facility SVG Diagram */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Facility Overview</span>
            <h2 className="d2">A structured deployment environment.</h2>
            <p className="body-lg">
              RBOT designs the physical deployment as a engineered system: each zone serves a
              distinct function, cable runs are documented and labeled, and the integration rack is
              positioned for accessibility and airflow. Nothing is improvised on deployment day.
            </p>
          </div>

          <div style={{ overflowX: "auto", marginTop: 48 }}>
            <svg
              width="580"
              height="300"
              viewBox="0 0 580 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 480, width: "100%", maxWidth: 580 }}
              aria-label="Overhead facility deployment diagram showing site prep, robot staging, integration rack, and training zones"
            >
              {/* Outer facility boundary */}
              <rect x="10" y="10" width="560" height="280" rx="3" stroke="var(--bdr3)" strokeWidth="1.5" fill="var(--bg1)" />

              {/* Zone 1: Site Prep (top-left) */}
              <rect x="22" y="22" width="240" height="120" rx="2" stroke="var(--bdr2)" strokeWidth="1" fill="var(--bg2)" />
              <text x="142" y="40" textAnchor="middle" fontSize="9" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">SITE PREP ZONE</text>
              {/* Floor markings - dashed lines */}
              <line x1="60" y1="55" x2="222" y2="55" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="6,4" />
              <line x1="60" y1="75" x2="222" y2="75" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="6,4" />
              <line x1="60" y1="95" x2="222" y2="95" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="6,4" />
              <line x1="60" y1="115" x2="222" y2="115" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="6,4" />
              {/* Power outlet symbols */}
              <rect x="30" y="60" width="12" height="8" rx="1" stroke="var(--acc)" strokeWidth="1" fill="none" />
              <line x1="34" y1="60" x2="34" y2="68" stroke="var(--acc)" strokeWidth="1" />
              <line x1="38" y1="60" x2="38" y2="68" stroke="var(--acc)" strokeWidth="1" />
              <rect x="30" y="80" width="12" height="8" rx="1" stroke="var(--acc)" strokeWidth="1" fill="none" />
              <line x1="34" y1="80" x2="34" y2="88" stroke="var(--acc)" strokeWidth="1" />
              <line x1="38" y1="80" x2="38" y2="88" stroke="var(--acc)" strokeWidth="1" />
              <text x="142" y="130" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">floor markings · power runs · anchors</text>

              {/* Zone 2: Robot Staging (top-right) */}
              <rect x="276" y="22" width="252" height="120" rx="2" stroke="var(--acc-bdr)" strokeWidth="1" fill="var(--acc-bg)" />
              <text x="402" y="40" textAnchor="middle" fontSize="9" fill="var(--acc)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">ROBOT STAGING AREA</text>
              {/* Robot squares */}
              {[320, 355, 390, 425, 460].map((x, i) => (
                <g key={i}>
                  <rect x={x} y="55" width="24" height="24" rx="2" fill="var(--bg2)" stroke="var(--bdr3)" strokeWidth="1" />
                  <circle cx={x + 12} cy="63" r="3" fill="var(--acc)" opacity=".6" />
                  <rect x={x + 5} y="70" width="14" height="4" rx="1" fill="var(--acc)" opacity=".3" />
                </g>
              ))}
              {[320, 355, 390, 425, 460].map((x, i) => (
                <g key={i}>
                  <rect x={x} y="90" width="24" height="24" rx="2" fill="var(--bg2)" stroke="var(--bdr3)" strokeWidth="1" />
                  <circle cx={x + 12} cy="98" r="3" fill="var(--bdr3)" opacity=".6" />
                  <rect x={x + 5} y="105" width="14" height="4" rx="1" fill="var(--bdr3)" opacity=".3" />
                </g>
              ))}
              <text x="402" y="130" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">10 units staged · configured · tested</text>

              {/* Central aisle */}
              <rect x="22" y="152" width="536" height="14" fill="var(--bg3)" stroke="var(--bdr)" strokeWidth="1" />
              <text x="290" y="162" textAnchor="middle" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".12em">MAIN AISLE — 3m CLEARANCE</text>

              {/* Zone 3: Training (bottom-left) */}
              <rect x="22" y="176" width="240" height="102" rx="2" stroke="var(--bdr2)" strokeWidth="1" fill="var(--bg2)" />
              <text x="142" y="194" textAnchor="middle" fontSize="9" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">TRAINING ZONE</text>
              {/* Training tables (rectangles) */}
              <rect x="40" y="205" width="80" height="20" rx="1" stroke="var(--bdr3)" strokeWidth="1" fill="var(--bg3)" />
              <rect x="140" y="205" width="80" height="20" rx="1" stroke="var(--bdr3)" strokeWidth="1" fill="var(--bg3)" />
              {/* People dots */}
              {[55, 75, 95].map((x, i) => <circle key={i} cx={x} cy="238" r="5" fill="var(--bdr3)" />)}
              {[155, 175, 195].map((x, i) => <circle key={i} cx={x} cy="238" r="5" fill="var(--bdr3)" />)}
              <text x="142" y="268" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">operator + supervisor training</text>

              {/* Zone 4: Integration Rack (bottom-right) */}
              <rect x="276" y="176" width="252" height="102" rx="2" stroke="var(--bdr2)" strokeWidth="1" fill="var(--bg2)" />
              <text x="402" y="194" textAnchor="middle" fontSize="9" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">INTEGRATION RACK</text>
              {/* Server rack rectangle */}
              <rect x="340" y="205" width="50" height="60" rx="1" stroke="var(--bdr3)" strokeWidth="1" fill="var(--bg3)" />
              {[210, 217, 224, 231, 238, 245, 252, 259].map((y, i) => (
                <rect key={i} x="344" y={y} width="42" height="4" rx="1" fill={i % 3 === 0 ? "var(--acc)" : "var(--bdr2)"} opacity=".6" />
              ))}
              {/* Network switch */}
              <rect x="405" y="215" width="70" height="20" rx="1" stroke="var(--bdr3)" strokeWidth="1" fill="var(--bg3)" />
              {[412, 420, 428, 436, 444, 452, 460].map((x, i) => (
                <circle key={i} cx={x} cy="225" r="2.5" fill={i < 4 ? "var(--good)" : "var(--bdr3)"} />
              ))}
              {/* Cable runs from rack to staging */}
              <line x1="390" y1="176" x2="390" y2="152" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />
              <line x1="430" y1="176" x2="430" y2="152" stroke="var(--acc)" strokeWidth="1" strokeDasharray="3,3" opacity=".5" />
              <text x="402" y="268" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">edge compute · network · ERP bridge</text>

              {/* Cable runs from site prep to integration */}
              <line x1="142" y1="152" x2="142" y2="176" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="3,3" opacity=".4" />

              {/* Corner labels */}
              <text x="20" y="8" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">RBOT FACILITY DEPLOYMENT — OVERHEAD VIEW</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Challenge section */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div className="sec-hd" style={{ marginBottom: 0 }}>
              <span className="lbl">The Challenge</span>
              <h2 className="d2">Why deploying robots is harder than buying them.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p className="body-lg">
                Purchasing a robot fleet is straightforward. Deploying one into a live production
                environment is not. Facilities require physical modifications — floor anchors, power
                runs, network infrastructure, and safety barriers — that take weeks to plan and
                execute. Most operations teams underestimate this lead time and stall before the
                first robot is powered on.
              </p>
              <p className="body-lg">
                Safety compliance adds another layer. OSHA regulations, ANSI/RIA R15.06 standards,
                and CE marking requirements for imported hardware all impose documentation and
                validation burdens that robot manufacturers do not help customers satisfy. RBOT
                manages this compliance work as part of every deployment — every site leaves with a
                complete safety file.
              </p>
              <p className="body-lg">
                Integration timelines are chronically underestimated. Connecting a robot fleet to
                a live ERP or WMS involves API negotiations, data mapping, exception handling, and
                regression testing that rarely completes in less than three weeks. RBOT builds this
                timeline into the 60-day engagement rather than treating it as an afterthought
                after go-live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Deployment Phases</span>
            <h2 className="d2">A structured 60-day path to live operations.</h2>
            <p className="body-lg">
              Every RBOT deployment follows the same six-phase structure. Phases overlap where safe
              to do so. Each phase has defined entry criteria, exit criteria, and sign-off from both
              RBOT and the customer before the next phase begins.
            </p>
          </div>
          <div className="process" style={{ gridTemplateColumns: "repeat(6,1fr)" }}>
            {phases.map((ph, i) => (
              <div key={ph.n} className={`p-step${i === 0 ? " on" : ""}`}>
                <div className="p-dot" />
                <h4 style={{ fontSize: 13 }}>{ph.title}</h4>
                <p style={{ fontSize: 11.5, color: "var(--acc)", marginBottom: 6, fontFamily: "var(--font-mono,monospace)" }}>{ph.range}</p>
                <p>{ph.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Deliverables</span>
            <h2 className="d2">What you receive at the end of the engagement.</h2>
            <p className="body-lg">
              RBOT produces a documented deliverable at every phase. By go-live, you have a
              complete deployment record that satisfies insurance, compliance, and auditor
              requirements.
            </p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {deliverables.map((d) => (
              <div key={d.title} className="ind-card">
                <h3>{d.title}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 24 }}>
                <span className="lbl">Safety & Compliance</span>
                <h2 className="d2">Every deployment is a compliance deployment.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 20 }}>
                RBOT treats safety compliance as a first-class deliverable, not an afterthought.
                Every deployment includes OSHA 29 CFR 1910.217 compliance review, alignment with
                ANSI/RIA R15.06 robot safety standards, CE marking verification for imported
                hardware, and SEMI S2 compliance documentation for semiconductor facilities where
                applicable. RBOT produces a complete safety file — risk assessments, hazard
                analyses, safeguarding specifications, and training records — that customers retain
                for their own compliance purposes.
              </p>
              <div className="chips">
                {["OSHA 1910.217", "ANSI/RIA R15.06", "CE Marking", "SEMI S2", "ISO 10218", "NFPA 70E"].map((tag) => (
                  <span key={tag} className="ichip">{tag}</span>
                ))}
              </div>
            </div>
            <div
              style={{
                background: "var(--bg2)",
                border: "1px solid var(--bdr2)",
                borderRadius: 3,
                padding: 36,
              }}
            >
              <span className="lbl" style={{ display: "block", marginBottom: 20 }}>Deployment Stats</span>
              {[
                ["60", "days", "Average time from site assessment to full go-live"],
                ["100%", "", "Of deployments receive complete safety file documentation"],
                ["< 4%", "", "Average scope change rate after site assessment is completed"],
                ["97%", "", "On-time go-live rate across all RBOT deployment engagements"],
              ].map(([num, unit, desc]) => (
                <div key={num} style={{ marginBottom: 28 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6 }}>
                    <span style={{ fontSize: 36, fontWeight: 700, letterSpacing: "-.04em", color: "var(--t1)", fontFamily: "var(--font-mono,monospace)" }}>{num}</span>
                    {unit && <span className="lbl">{unit}</span>}
                  </div>
                  <p className="body">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Get Started</span>
          <h2 className="d2">Ready to start your deployment?</h2>
          <p className="body-lg">
            RBOT begins every deployment engagement with a site assessment. We validate feasibility,
            document infrastructure requirements, and produce a deployment plan before any hardware
            is ordered.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Site Assessment</Link>
            <Link href="/services" className="btn btn-g">All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

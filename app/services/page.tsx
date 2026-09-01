import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | RBOT — End-to-End Robotics Deployment",
  description:
    "RBOT delivers the full robotics lifecycle: assessment, robot selection, systems integration, site deployment, managed operations, and field service. One vendor-neutral partner from concept to live fleet.",
};

const services = [
  {
    title: "Robotics Assessment",
    href: "/assessment",
    desc: "Structured facility analysis, workflow mapping, and ROI modeling that identifies where automation produces the highest return. Delivered in five business days.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" stroke="var(--acc)" strokeWidth="1.5" />
        <line x1="3" y1="17" x2="21" y2="17" stroke="var(--bdr3)" strokeWidth="1" />
        <rect x="6" y="10" width="3" height="7" fill="var(--acc)" opacity=".5" />
        <rect x="10.5" y="7" width="3" height="10" fill="var(--acc)" opacity=".7" />
        <rect x="15" y="13" width="3" height="4" fill="var(--acc)" opacity=".4" />
      </svg>
    ),
  },
  {
    title: "Robot Selection",
    href: "/robots",
    desc: "Vendor-neutral matching across 12+ manufacturers. We identify the right hardware for your specific environment, task profile, and total cost of ownership — not our inventory.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="9" rx="1" stroke="var(--acc)" strokeWidth="1.5" />
        <rect x="9" y="5" width="2" height="2" fill="var(--acc)" opacity=".6" />
        <rect x="13" y="5" width="2" height="2" fill="var(--acc)" opacity=".6" />
        <rect x="9" y="8" width="6" height="1.5" rx=".5" fill="var(--acc)" opacity=".4" />
        <rect x="9" y="12" width="6" height="2" stroke="var(--bdr3)" strokeWidth="1" />
        <line x1="10" y1="14" x2="10" y2="20" stroke="var(--bdr3)" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="14" y2="20" stroke="var(--bdr3)" strokeWidth="1.5" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="var(--acc)" strokeWidth="1.5" />
        <circle cx="19" cy="5" r="3" fill="none" stroke="var(--good)" strokeWidth="1.5" />
        <path d="M17.5 5L18.5 6L20.5 4" stroke="var(--good)" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    title: "Systems Integration",
    href: "/services/integration",
    desc: "Full ERP, WMS, MES, and IoT connectivity. RBOT acts as middleware between your robot fleet and your existing enterprise systems so data flows without custom point-to-point work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="var(--acc)" opacity=".7" />
        <circle cx="4" cy="8" r="2" stroke="var(--bdr3)" strokeWidth="1" />
        <circle cx="4" cy="16" r="2" stroke="var(--bdr3)" strokeWidth="1" />
        <circle cx="20" cy="8" r="2" stroke="var(--bdr3)" strokeWidth="1" />
        <circle cx="20" cy="16" r="2" stroke="var(--bdr3)" strokeWidth="1" />
        <line x1="6" y1="8" x2="9" y2="11" stroke="var(--acc)" strokeWidth="1" opacity=".5" />
        <line x1="6" y1="16" x2="9" y2="13" stroke="var(--acc)" strokeWidth="1" opacity=".5" />
        <line x1="18" y1="8" x2="15" y2="11" stroke="var(--acc)" strokeWidth="1" opacity=".5" />
        <line x1="18" y1="16" x2="15" y2="13" stroke="var(--acc)" strokeWidth="1" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Site Deployment",
    href: "/services/deployment",
    desc: "End-to-end installation, commissioning, and training. RBOT manages every element of the physical deployment — from concrete floor prep to full go-live — in a structured 60-day engagement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="12" width="18" height="9" rx="1" stroke="var(--bdr3)" strokeWidth="1.5" />
        <path d="M3 12L12 4L21 12" stroke="var(--acc)" strokeWidth="1.5" />
        <rect x="10" y="16" width="4" height="5" fill="var(--acc)" opacity=".5" />
        <line x1="12" y1="4" x2="12" y2="1" stroke="var(--acc)" strokeWidth="1.5" />
        <circle cx="12" cy="1" r="1.5" fill="var(--acc)" />
      </svg>
    ),
  },
  {
    title: "Managed Operations",
    href: "/services/managed",
    desc: "24/7 remote monitoring, fleet management, task optimization, and incident response. RBOT's operations center keeps your robots productive so your team stays focused on the business.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="1" stroke="var(--bdr3)" strokeWidth="1.5" />
        <circle cx="7" cy="10" r="1.5" fill="var(--good)" />
        <circle cx="12" cy="10" r="1.5" fill="var(--acc)" />
        <circle cx="17" cy="10" r="1.5" fill="var(--bdr3)" />
        <line x1="4" y1="13" x2="20" y2="13" stroke="var(--bdr2)" strokeWidth="1" />
        <rect x="4" y="14" width="4" height="1" fill="var(--good)" opacity=".6" />
        <rect x="4" y="14" width="7" height="1" fill="var(--acc)" opacity=".4" />
        <line x1="9" y1="18" x2="15" y2="18" stroke="var(--bdr3)" strokeWidth="1.5" />
        <line x1="6" y1="18" x2="18" y2="18" stroke="var(--bdr2)" strokeWidth="1" strokeDasharray="2,3" />
      </svg>
    ),
  },
  {
    title: "Field Service",
    href: "/services/field-service",
    desc: "200+ certified technicians across the US, with a 4-hour average on-site response. Preventive maintenance, emergency repairs, parts management, and safety inspections — SLA-backed.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.5 3.5C13 3.5 12 4.5 12 6C12 7 12.5 7.8 13.3 8.2L5 16.5L7.5 19L15.8 10.7C16.2 11.5 17 12 18 12C19.5 12 20.5 11 20.5 9.5C20.5 9 20.3 8.6 20.1 8.2L18.2 10.1L16.9 8.8L18.8 6.9C18.4 6.7 18 6.5 17.5 6.5" stroke="var(--acc)" strokeWidth="1.4" fill="none" />
        <circle cx="7" cy="18" r="1.5" fill="var(--acc)" opacity=".6" />
      </svg>
    ),
  },
];

const process = [
  {
    n: "01",
    title: "Discovery Call",
    desc: "A 30-minute intake to understand your operation, current pain points, team size, and automation ambitions. No slides — just a working conversation.",
  },
  {
    n: "02",
    title: "Facility Assessment",
    desc: "RBOT conducts a structured analysis of your facility, workflows, and labor data. You receive a full assessment report with robot recommendations and ROI model within five days.",
  },
  {
    n: "03",
    title: "Solution Design",
    desc: "We design the complete solution: robot selection, integration architecture, deployment plan, and commercial structure — either purchase or RaaS.",
  },
  {
    n: "04",
    title: "Deployment",
    desc: "Site preparation, robot installation, integration testing, and employee training. RBOT manages every phase through to go-live in a structured 60-day engagement.",
  },
  {
    n: "05",
    title: "Ongoing Operations",
    desc: "After go-live, RBOT's operations center monitors your fleet 24/7, optimizes performance, handles incidents, and dispatches field technicians when needed.",
  },
];

const whyRbot = [
  {
    title: "Vendor Neutral",
    desc: "RBOT holds no hardware inventory and accepts no manufacturer incentives. Our recommendations are driven entirely by what fits your operation. We work with Boston Dynamics, ABB, Fanuc, KUKA, Fetch, Locus, and nine other manufacturers.",
  },
  {
    title: "Full Lifecycle",
    desc: "Most automation vendors handle one part of the process: hardware, software, or service. RBOT manages the entire lifecycle under a single contract, single point of contact, and unified SLA. That means no finger-pointing when something goes wrong.",
  },
  {
    title: "Fixed-Cost RaaS",
    desc: "Through our Robotics-as-a-Service model, enterprises deploy full robot fleets with zero upfront capital. Hardware, software, deployment, integration, maintenance, and support are bundled into a predictable monthly fee that scales with your fleet.",
  },
  {
    title: "Enterprise Grade",
    desc: "RBOT operates with the SOC 2 Type II controls, insurance requirements, and SLA structures that enterprise procurement teams require. Our operations center maintains 99.2% fleet uptime across all managed accounts.",
  },
];

const slas = [
  "99.2% fleet uptime guarantee across all managed operations accounts",
  "4-hour on-site response for critical system failures",
  "5-business-day delivery on the initial robotics assessment report",
  "Same-day remote support for non-critical incidents and monitoring alerts",
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Services</span>
        <h1 className="d1">End-to-end robotics deployment.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          RBOT manages every phase of a robotics program — from the initial facility assessment
          through ongoing managed operations and field service. One partner, one contract, one SLA
          covering the full lifecycle.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Start with an Assessment</Link>
          <Link href="/raas" className="btn btn-g">Explore RaaS Pricing</Link>
        </div>
      </div>

      {/* Lifecycle Diagram */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 620 }}>
            <span className="lbl">The RBOT Lifecycle</span>
            <h2 className="d2">Every step, handled.</h2>
            <p className="body-lg">
              Most enterprises approach robotics as a series of disconnected projects: buy hardware
              from one vendor, hire an integrator, manage software from a third party, and call the
              OEM when something breaks. RBOT collapses that complexity into a single engagement
              that runs from initial discovery through years of live operation.
            </p>
          </div>

          {/* SVG Lifecycle Diagram */}
          <div style={{ overflowX: "auto", marginTop: 48 }}>
            <svg
              width="600"
              height="280"
              viewBox="0 0 600 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 520, width: "100%", maxWidth: 600 }}
              aria-label="RBOT service lifecycle: Assessment, Selection, Integration, Deployment, Managed Operations, Field Service"
            >
              <defs>
                <marker
                  id="svc-arr"
                  viewBox="0 0 10 7"
                  refX="10"
                  refY="3.5"
                  markerWidth="10"
                  markerHeight="7"
                  orient="auto"
                  markerUnits="userSpaceOnUse"
                >
                  <path d="M0,0 L10,3.5 L0,7 Z" fill="var(--acc)" />
                </marker>
              </defs>

              {/* Phase brackets */}
              <line x1="11" y1="30" x2="289" y2="30" stroke="var(--bdr2)" strokeWidth="1" />
              <line x1="11" y1="26" x2="11" y2="34" stroke="var(--bdr2)" strokeWidth="1" />
              <line x1="289" y1="26" x2="289" y2="34" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="150" y="20" textAnchor="middle" fontSize="8.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">PLANNING PHASE</text>

              <line x1="311" y1="30" x2="589" y2="30" stroke="var(--bdr2)" strokeWidth="1" />
              <line x1="311" y1="26" x2="311" y2="34" stroke="var(--bdr2)" strokeWidth="1" />
              <line x1="589" y1="26" x2="589" y2="34" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="450" y="20" textAnchor="middle" fontSize="8.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".1em">OPERATIONS PHASE</text>

              {/* Background track */}
              <line x1="11" y1="122" x2="589" y2="122" stroke="var(--bdr)" strokeWidth="1" strokeDasharray="3,4" />

              {/* Step 1: Assessment */}
              <circle cx="50" cy="58" r="13" fill="var(--bg3)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <text x="50" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--acc)" fontWeight="600">1</text>
              <line x1="50" y1="71" x2="50" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="11" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" rx="2" />
              <text x="50" y="122" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Assessment</text>
              <text x="50" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">Facility + ROI</text>

              {/* Arrow 1→2 */}
              <line x1="89" y1="122" x2="111" y2="122" stroke="var(--acc)" strokeWidth="1.5" markerEnd="url(#svc-arr)" />

              {/* Step 2: Selection */}
              <circle cx="150" cy="58" r="13" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <text x="150" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--t2)" fontWeight="600">2</text>
              <line x1="150" y1="71" x2="150" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="111" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
              <text x="150" y="122" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Selection</text>
              <text x="150" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">12+ Vendors</text>

              {/* Arrow 2→3 */}
              <line x1="189" y1="122" x2="211" y2="122" stroke="var(--acc)" strokeWidth="1.5" markerEnd="url(#svc-arr)" />

              {/* Step 3: Integration */}
              <circle cx="250" cy="58" r="13" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <text x="250" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--t2)" fontWeight="600">3</text>
              <line x1="250" y1="71" x2="250" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="211" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
              <text x="250" y="122" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Integration</text>
              <text x="250" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">ERP · WMS · MES</text>

              {/* Arrow 3→4 */}
              <line x1="289" y1="122" x2="311" y2="122" stroke="var(--acc)" strokeWidth="1.5" markerEnd="url(#svc-arr)" />

              {/* Step 4: Deployment */}
              <circle cx="350" cy="58" r="13" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <text x="350" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--t2)" fontWeight="600">4</text>
              <line x1="350" y1="71" x2="350" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="311" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
              <text x="350" y="122" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Deployment</text>
              <text x="350" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">Site to Live</text>

              {/* Arrow 4→5 */}
              <line x1="389" y1="122" x2="411" y2="122" stroke="var(--acc)" strokeWidth="1.5" markerEnd="url(#svc-arr)" />

              {/* Step 5: Managed Ops */}
              <circle cx="450" cy="58" r="13" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <text x="450" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--t2)" fontWeight="600">5</text>
              <line x1="450" y1="71" x2="450" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="411" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
              <text x="450" y="116" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Managed</text>
              <text x="450" y="130" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Ops</text>
              <text x="450" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">24/7 Monitor</text>

              {/* Arrow 5→6 */}
              <line x1="489" y1="122" x2="511" y2="122" stroke="var(--acc)" strokeWidth="1.5" markerEnd="url(#svc-arr)" />

              {/* Step 6: Field Service */}
              <circle cx="550" cy="58" r="13" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <text x="550" y="58" textAnchor="middle" dy="0.35em" fontSize="10" fill="var(--t2)" fontWeight="600">6</text>
              <line x1="550" y1="71" x2="550" y2="96" stroke="var(--bdr2)" strokeWidth="1" />
              <rect x="511" y="96" width="78" height="52" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" rx="2" />
              <text x="550" y="116" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Field</text>
              <text x="550" y="130" textAnchor="middle" dy="0.35em" fontSize="9" fill="var(--t1)" fontWeight="500">Service</text>
              <text x="550" y="162" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">Repair + PM</text>

              {/* Feedback loop arrow at bottom */}
              <path d="M 589 200 Q 300 240 11 200" stroke="var(--bdr3)" strokeWidth="1" strokeDasharray="4,4" fill="none" />
              <text x="300" y="252" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".06em">CONTINUOUS IMPROVEMENT LOOP</text>
              <polygon points="14,195 8,203 20,203" fill="var(--bdr3)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">What We Do</span>
            <h2 className="d2">Six services, one provider.</h2>
            <p className="body-lg">
              RBOT eliminates the coordination burden of a multi-vendor robotics program. Every
              service below is delivered by the same team, tracked under the same SLA, and billed on
              the same invoice.
            </p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="ind-card" style={{ display: "block" }}>
                <div style={{ marginBottom: 14 }}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">How It Works</span>
            <h2 className="d2">From first call to live fleet.</h2>
            <p className="body-lg">
              RBOT runs a structured engagement process that moves efficiently from discovery through
              go-live. Most clients complete all five phases within 90 days of their first
              conversation.
            </p>
          </div>
          <div className="process">
            {process.map((step, i) => (
              <div key={step.n} className={`p-step${i === 0 ? " on" : ""}`}>
                <div className="p-dot" />
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RBOT */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Why RBOT</span>
            <h2 className="d2">The structural advantage of a neutral integrator.</h2>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(2,1fr)" }}>
            {whyRbot.map((pt) => (
              <div key={pt.title} className="ind-card">
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Commitments */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 24 }}>
                <span className="lbl">SLA Commitments</span>
                <h2 className="d2">Numbers you can put in a contract.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                RBOT publishes its service level commitments rather than burying them in footnotes.
                Every managed operations account is covered by the same baseline SLA, with
                enterprise-specific addenda available on request.
              </p>
              <div className="btn-row">
                <Link href="/assessment" className="btn btn-p">Get a Custom SLA</Link>
              </div>
            </div>
            <div>
              {slas.map((sla, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 16,
                    padding: "20px 0",
                    borderBottom: "1px solid var(--bdr)",
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--acc)",
                      marginTop: 7,
                      flexShrink: 0,
                    }}
                  />
                  <p className="body">{sla}</p>
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
          <h2 className="d2">Ready to build your robot fleet?</h2>
          <p className="body-lg">
            Start with a five-day assessment. RBOT maps your facility, identifies the highest-ROI
            automation opportunities, and delivers a concrete deployment plan — before you commit to
            any hardware.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
            <Link href="/raas" className="btn btn-g">Explore RaaS</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Systems Integration | RBOT — Robots Talking to Your Enterprise Systems",
  description:
    "RBOT connects robot fleets to SAP, Oracle, Salesforce, AWS IoT, Siemens MES, and any enterprise system. Bidirectional, event-driven integration built on the RBOT Platform middleware layer.",
};

const integrationCategories = [
  {
    title: "ERP / Finance",
    desc: "Real-time inventory adjustments, labor posting, and asset tracking fed directly to your financial systems.",
    systems: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "Infor CloudSuite", "NetSuite", "Epicor"],
  },
  {
    title: "WMS / Warehouse",
    desc: "Task triggers, pick confirmation, and put-away events synchronized with warehouse management platforms.",
    systems: ["Manhattan Associates", "Blue Yonder", "SAP EWM", "Oracle WMS", "HighJump", "Korber"],
  },
  {
    title: "MES / Manufacturing",
    desc: "Production order consumption, quality checkpoints, and machine handoff protocols integrated with manufacturing execution systems.",
    systems: ["Siemens Opcenter", "Rockwell FactoryTalk", "GE Digital Proficy", "Apriso", "Plex", "Dassault Apriso"],
  },
  {
    title: "IoT / IIoT",
    desc: "Robot telemetry, sensor data, and fleet metrics published to IoT platforms for broader operational intelligence.",
    systems: ["AWS IoT Core", "Azure IoT Hub", "Google Cloud IoT", "PTC ThingWorx", "Siemens MindSphere", "Bosch IoT Suite"],
  },
  {
    title: "Cloud / Infrastructure",
    desc: "Secure data pipelines, edge-to-cloud synchronization, and audit logging through enterprise cloud infrastructure.",
    systems: ["AWS (S3, Lambda, SQS)", "Azure (Event Hub, ADLS)", "GCP (Pub/Sub, BigQuery)", "Snowflake", "Databricks", "Kafka"],
  },
  {
    title: "Operations / Workflow",
    desc: "Incident notifications, task escalations, and operational reports surfaced in the tools your team already uses.",
    systems: ["Salesforce", "ServiceNow", "Microsoft Teams", "Slack", "Jira Service Mgmt", "PagerDuty"],
  },
];

const architecture = [
  {
    title: "Event-Driven Architecture",
    desc: "RBOT Platform uses an event-driven messaging backbone rather than synchronous API polling. Robot events — task completion, obstacle detection, charge state, error codes — are published as structured events and consumed by downstream systems in real time. This eliminates the polling lag that causes stale data in WMS pick queues and ERP inventory counts.",
  },
  {
    title: "Bidirectional Synchronization",
    desc: "Integration is not one-directional telemetry. The RBOT Platform receives inbound commands from your ERP and WMS — new task assignments, route changes, priority flags — and translates them into robot instructions without custom code on your side. Changes in your enterprise systems propagate to the fleet within seconds.",
  },
  {
    title: "RBOT Platform as Middleware",
    desc: "Rather than building point-to-point integrations between each robot and each enterprise system, RBOT acts as a normalized middleware layer. One integration between your ERP and RBOT gives you access to every robot in the fleet — regardless of manufacturer. When you add a new robot model, the enterprise integration does not change.",
  },
];

const steps = [
  {
    n: "01",
    title: "Integration Discovery",
    desc: "RBOT interviews your IT and operations teams to catalog every system that touches the workflow being automated. We document API availability, authentication requirements, data formats, and latency tolerances.",
  },
  {
    n: "02",
    title: "Architecture Design",
    desc: "We design the integration architecture: data flows, event schemas, error handling, retry policies, and audit logging. You review and approve before any code is written.",
  },
  {
    n: "03",
    title: "Connector Build & Test",
    desc: "RBOT engineers build the required connectors on the RBOT Platform. Integration testing runs against a staging instance of your systems before any production data is touched.",
  },
  {
    n: "04",
    title: "Production Cutover",
    desc: "Connectors are promoted to production in a controlled cutover. RBOT monitors integration health for the first 30 days and responds to any anomalies before handing off to your team.",
  },
];

export default function IntegrationPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Systems Integration</span>
        <h1 className="d1">Your robots, talking to your systems.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          A robot that cannot communicate with your ERP, WMS, and MES is a standalone machine,
          not an integrated operation. RBOT connects your fleet to your enterprise systems — so
          inventory updates, task completions, and exceptions flow automatically.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Discuss Your Integration</Link>
          <Link href="/platform" className="btn btn-g">See the RBOT Platform</Link>
        </div>
      </div>

      {/* Hub-and-Spoke SVG Diagram */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Integration Architecture</span>
            <h2 className="d2">One integration point. Every system.</h2>
            <p className="body-lg">
              Rather than maintaining point-to-point integrations between each robot manufacturer&apos;s
              API and each enterprise system, RBOT Platform acts as a normalized hub. Every robot
              speaks to RBOT Platform; RBOT Platform speaks to every enterprise system. Adding a
              new robot model or a new enterprise system requires changing only one side.
            </p>
          </div>

          <div style={{ overflowX: "auto", marginTop: 48 }}>
            <svg
              width="560"
              height="320"
              viewBox="0 0 560 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 480, width: "100%", maxWidth: 560 }}
              aria-label="Hub-and-spoke integration diagram showing RBOT Platform connecting to SAP ERP, Oracle WMS, Salesforce CRM, AWS IoT, Siemens MES, and Microsoft Teams"
            >
              <defs>
                <marker id="int-arr" viewBox="0 0 8 6" refX="8" refY="3" markerWidth="8" markerHeight="6" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0,0 L8,3 L0,6 Z" fill="var(--acc)" opacity=".6" />
                </marker>
                <marker id="int-arr-rev" viewBox="0 0 8 6" refX="0" refY="3" markerWidth="8" markerHeight="6" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
                  <path d="M8,0 L0,3 L8,6 Z" fill="var(--acc)" opacity=".6" />
                </marker>
              </defs>

              {/* Robot icons on the left */}
              {[80, 140, 200, 260].map((y, i) => (
                <g key={i}>
                  <rect x="18" y={y - 16} width="28" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr3)" strokeWidth="1" />
                  <circle cx="32" cy={y - 6} r="4" fill="var(--acc)" opacity=".5" />
                  <rect x="23" y={y + 2} width="18" height="5" rx="1" fill="var(--acc)" opacity=".25" />
                  {/* Line from robot to hub */}
                  <line x1="46" y1={y} x2="188" y2="160" stroke="var(--acc)" strokeWidth="1" strokeDasharray="4,3" opacity=".4" markerEnd="url(#int-arr)" />
                </g>
              ))}

              {/* Robot label */}
              <text x="32" y="296" textAnchor="middle" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".06em">ROBOT FLEET</text>
              <line x1="10" y1="288" x2="55" y2="288" stroke="var(--bdr2)" strokeWidth="1" />

              {/* Center hub */}
              <circle cx="230" cy="160" r="52" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1.5" />
              <circle cx="230" cy="160" r="42" fill="var(--acc-bg)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <text x="230" y="153" textAnchor="middle" fontSize="11" fill="var(--t1)" fontWeight="700" letterSpacing="-.02em">RBOT</text>
              <text x="230" y="167" textAnchor="middle" fontSize="8.5" fill="var(--acc)" fontFamily="var(--font-mono,monospace)" letterSpacing=".08em">PLATFORM</text>
              <text x="230" y="180" textAnchor="middle" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">middleware layer</text>

              {/* Spoke to SAP ERP (top) */}
              <line x1="230" y1="108" x2="230" y2="48" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="185" y="20" width="90" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="230" y="38" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">SAP ERP</text>

              {/* Spoke to Oracle WMS (top-right) */}
              <line x1="271" y1="120" x2="374" y2="55" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="354" y="28" width="96" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="402" y="46" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">Oracle WMS</text>

              {/* Spoke to Siemens MES (right) */}
              <line x1="282" y1="160" x2="386" y2="160" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="386" y="146" width="104" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="438" y="164" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">Siemens MES</text>

              {/* Spoke to MS Teams (bottom-right) */}
              <line x1="271" y1="200" x2="374" y2="265" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="354" y="264" width="104" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="406" y="282" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">MS Teams</text>

              {/* Spoke to AWS IoT (bottom) */}
              <line x1="230" y1="212" x2="230" y2="272" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="185" y="272" width="90" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="230" y="290" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">AWS IoT</text>

              {/* Spoke to Salesforce CRM (top-left) */}
              <line x1="189" y1="120" x2="115" y2="55" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#int-arr)" />
              <rect x="60" y="28" width="110" height="28" rx="2" fill="var(--bg2)" stroke="var(--bdr2)" strokeWidth="1" />
              <text x="115" y="46" textAnchor="middle" fontSize="9.5" fill="var(--t1)" fontWeight="500">Salesforce CRM</text>

              {/* Legend */}
              <line x1="380" y1="305" x2="410" y2="305" stroke="var(--acc)" strokeWidth="1" strokeDasharray="4,3" opacity=".4" />
              <text x="415" y="309" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">robot → platform</text>
              <line x1="380" y1="315" x2="410" y2="315" stroke="var(--bdr3)" strokeWidth="1.5" strokeDasharray="5,3" />
              <text x="415" y="319" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">platform → enterprise</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 0 }}>
                <span className="lbl">The Challenge</span>
                <h2 className="d2">Integration is where most robotics programs stall.</h2>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p className="body-lg">
                Every major robotics manufacturer exposes a proprietary API. Boston Dynamics&apos;
                API is fundamentally different from Fanuc&apos;s or Fetch&apos;s. If you are running
                a mixed fleet — which most large operations eventually do — building point-to-point
                integrations from each robot API to each enterprise system creates a combinatorial
                maintenance burden that grows with every new hardware model or software upgrade.
                Most IT teams lack the embedded knowledge of robot protocols to maintain these
                integrations without vendor support.
              </p>
              <p className="body-lg">
                Enterprise systems add the complementary complexity. SAP ERP does not expose
                real-time event webhooks in the same way that a cloud-native platform does. Legacy
                WMS systems may require EDI connections rather than REST APIs. Connecting real-time
                robot events to batch-oriented enterprise systems requires buffering, retry logic,
                and careful handling of failed writes — none of which manufacturers document or
                support. RBOT has built and maintained these connectors across dozens of enterprise
                environments and does not treat them as a one-time custom project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Integration Coverage</span>
            <h2 className="d2">Every system category your operation depends on.</h2>
            <p className="body-lg">
              RBOT Platform ships with pre-built connector templates for the systems below. Most
              integrations in each category reach production within the standard deployment timeline
              without custom development work.
            </p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {integrationCategories.map((cat) => (
              <div key={cat.title} className="ind-card">
                <h3>{cat.title}</h3>
                <p style={{ marginBottom: 16 }}>{cat.desc}</p>
                <div className="chips" style={{ gap: 5 }}>
                  {cat.systems.map((sys) => (
                    <span key={sys} className="ichip" style={{ fontSize: 11, padding: "3px 9px" }}>{sys}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Technical Architecture</span>
            <h2 className="d2">Built for production, not for demos.</h2>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {architecture.map((pt) => (
              <div key={pt.title} className="ind-card">
                <h3>{pt.title}</h3>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Implementation</span>
            <h2 className="d2">How we build your integration.</h2>
          </div>
          <div className="process" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
            {steps.map((step, i) => (
              <div key={step.n} className={`p-step${i === 0 ? " on" : ""}`}>
                <div className="p-dot" />
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Get Started</span>
          <h2 className="d2">Ready to connect your fleet?</h2>
          <p className="body-lg">
            RBOT&apos;s integration assessment identifies every system that will interact with your
            robot fleet and maps the data flows before a single connector is built. Start with a
            discovery call.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
            <Link href="/platform" className="btn btn-g">Explore RBOT Platform</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

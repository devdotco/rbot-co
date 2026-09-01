import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Platform Integrations — RBOT Platform",
  description: "RBOT Platform connects to SAP, Oracle, Manhattan Associates, Tableau, and 40+ enterprise systems. Native bidirectional sync for ERP, WMS, MES, and BI.",
};

const categories = [
  {
    label: "ERP & Finance",
    chips: ["SAP S/4HANA", "Oracle ERP Cloud", "NetSuite", "Microsoft Dynamics 365", "Workday", "Infor CloudSuite"],
  },
  {
    label: "WMS & Warehouse",
    chips: ["Manhattan Associates", "Blue Yonder", "Oracle WMS", "SAP EWM", "HighJump", "Körber WMS"],
  },
  {
    label: "MES & Manufacturing",
    chips: ["Siemens Opcenter", "Rockwell FactoryTalk", "GE Proficy", "Dassault DELMIA", "PTC Windchill"],
  },
  {
    label: "Cloud & Infrastructure",
    chips: ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks"],
  },
  {
    label: "IoT & Industrial",
    chips: ["Siemens MindSphere", "PTC ThingWorx", "AWS IoT Core", "Azure IoT Hub", "AVEVA System Platform"],
  },
  {
    label: "BI & Analytics",
    chips: ["Tableau", "Power BI", "Looker", "Grafana", "DataDog", "Splunk"],
  },
];

const steps = [
  { n: "01", title: "Connect", desc: "Authenticate RBOT Platform with your enterprise system using API keys, OAuth2, or certificate-based auth. Most connections are live in under 30 minutes." },
  { n: "02", title: "Normalize", desc: "RBOT's data normalization layer translates between your system's data model and the RBOT canonical schema — no manual mapping required for supported connectors." },
  { n: "03", title: "Sync", desc: "Data flows bidirectionally on a schedule you control. Push task assignments from your WMS to RBOT. Pull utilization data from RBOT into your BI platform. Real-time or batch." },
  { n: "04", title: "Monitor", desc: "Every integration includes a health dashboard showing sync status, error rates, last successful run, and data volume. Integration failures trigger alerts before they impact operations." },
];

export default function IntegrationsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Platform Integrations</span>
        <h1 className="d1">RBOT Platform connects to your entire stack.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          Native bidirectional connectors for ERP, WMS, MES, IoT, cloud infrastructure, and BI — so
          your robotic fleet is woven into your operations, not bolted on the side.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
          <Link href="/platform/api" className="btn btn-g">View API Docs</Link>
        </div>
      </div>

      {/* Integration Map SVG */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="plat-shell">
            <svg
              viewBox="0 0 580 320"
              width="580"
              height="320"
              style={{ maxWidth: "100%", display: "block", borderRadius: 4 }}
              aria-label="Integration map showing enterprise systems connecting to RBOT Platform"
            >
              {/* Background */}
              <rect width="580" height="320" style={{ fill: "var(--bg1)" }} />

              {/* Header */}
              <rect width="580" height="36" style={{ fill: "var(--bg2)" }} />
              <rect y="36" width="580" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="16" y="23" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t1)" }}>Integration Map — RBOT Platform</text>
              <circle cx="536" cy="18" r="5" style={{ fill: "rgba(34,197,94,0.2)", stroke: "var(--good)", strokeWidth: 1 }} />
              <circle cx="536" cy="18" r="3" style={{ fill: "var(--good)" }} />
              <text x="546" y="22" fontFamily="monospace" fontSize="8" style={{ fill: "var(--good)" }}>All Active</text>

              {/* RBOT Platform center box */}
              <rect x="216" y="100" width="148" height="130" rx="3" style={{ fill: "var(--acc-bg)", stroke: "var(--acc)", strokeWidth: 1.5 }} />
              <text x="244" y="128" fontFamily="monospace" fontSize="9" fontWeight="700" style={{ fill: "var(--acc)" }}>RBOT</text>
              <text x="231" y="142" fontFamily="monospace" fontSize="9" fontWeight="700" style={{ fill: "var(--acc)" }}>PLATFORM</text>
              <rect x="228" y="150" width="124" height="1" style={{ fill: "rgba(10,174,255,0.3)" }} />
              <text x="236" y="165" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Fleet Layer</text>
              <text x="236" y="178" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Task Engine</text>
              <text x="236" y="191" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Analytics</text>
              <text x="236" y="204" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Integrations</text>

              {/* Robots feeding in (far left) */}
              <rect x="8" y="70" width="70" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="14" y="85" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>AMR Fleet</text>
              <rect x="8" y="102" width="70" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="14" y="117" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>Robot Arms</text>
              <rect x="8" y="134" width="70" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="14" y="149" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>Humanoids</text>
              <rect x="8" y="166" width="70" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="14" y="181" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>Cobots</text>
              <rect x="8" y="198" width="70" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="14" y="213" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t2)" }}>IoT Sensors</text>
              {/* Robot arrows → RBOT */}
              {[81, 113, 145, 177, 209].map(y => (
                <g key={y}>
                  <line x1="78" y1={y} x2="214" y2={y} style={{ stroke: "var(--acc)", strokeWidth: 0.8, strokeDasharray: "3,3" }} />
                  <polygon points={`210,${y - 3} 216,${y} 210,${y + 3}`} style={{ fill: "var(--acc)" }} />
                </g>
              ))}

              {/* Enterprise inputs (left column) */}
              <text x="90" y="60" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>ENTERPRISE SYSTEMS</text>
              <rect x="90" y="68" width="110" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="98" y="83" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>SAP S/4HANA</text>
              <rect x="90" y="96" width="110" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="98" y="111" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Oracle ERP</text>
              <rect x="90" y="124" width="110" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="98" y="139" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>NetSuite</text>
              <rect x="90" y="152" width="110" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="98" y="167" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Manhattan Assoc.</text>
              <rect x="90" y="180" width="110" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="98" y="195" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Blue Yonder WMS</text>
              {/* ERP arrows → RBOT */}
              {[79, 107, 135, 163, 191].map(y => (
                <g key={y}>
                  <line x1="200" y1={y} x2="214" y2={y} style={{ stroke: "var(--bdr3)", strokeWidth: 0.8 }} />
                  <polygon points={`210,${y - 3} 216,${y} 210,${y + 3}`} style={{ fill: "var(--bdr3)" }} />
                </g>
              ))}

              {/* Output systems (right) */}
              <text x="378" y="60" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>OUTPUT SYSTEMS</text>
              <rect x="378" y="68" width="100" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="386" y="83" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Tableau</text>
              <rect x="378" y="96" width="100" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="386" y="111" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Power BI</text>
              <rect x="378" y="124" width="100" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="386" y="139" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Snowflake</text>
              <rect x="378" y="152" width="100" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="386" y="167" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>DataDog</text>
              <rect x="378" y="180" width="100" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="386" y="195" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Slack / Teams</text>
              {/* RBOT → output arrows */}
              {[79, 107, 135, 163, 191].map(y => (
                <g key={y}>
                  <line x1="364" y1={y} x2="376" y2={y} style={{ stroke: "var(--good)", strokeWidth: 0.8 }} />
                  <polygon points={`372,${y - 3} 378,${y} 372,${y + 3}`} style={{ fill: "var(--good)" }} />
                </g>
              ))}

              {/* Legend */}
              <line x1="16" y1="285" x2="36" y2="285" style={{ stroke: "var(--acc)", strokeWidth: 1, strokeDasharray: "3,3" }} />
              <text x="40" y="289" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Robot telemetry (MQTT)</text>
              <line x1="186" y1="285" x2="206" y2="285" style={{ stroke: "var(--bdr3)", strokeWidth: 1 }} />
              <text x="210" y="289" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>ERP/WMS sync</text>
              <line x1="330" y1="285" x2="350" y2="285" style={{ stroke: "var(--good)", strokeWidth: 1 }} />
              <text x="354" y="289" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Analytics output</text>

              {/* Bottom label */}
              <rect x="0" y="300" width="580" height="20" style={{ fill: "var(--bg2)" }} />
              <rect x="0" y="300" width="580" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="16" y="315" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>40+ pre-built connectors  ·  Custom integrations available  ·  REST API for any system</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Integration Overview</span>
                <h2 className="d2">Robots that fit into your existing operations.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                The single biggest barrier to enterprise robotics adoption is not the robots themselves —
                it is integration. A robotic fleet that cannot receive task assignments from your WMS or report
                utilization data into your BI platform is an island. Operations teams must manually bridge the
                gap, which defeats the purpose of automation. RBOT Platform was designed from the beginning to
                eliminate this problem. Our integration layer acts as the middleware between your robotic fleet
                and every major enterprise system you already run — ERP, WMS, MES, cloud infrastructure, IoT
                platforms, and analytics tools.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                RBOT&apos;s middleware approach means we handle all the complexity of protocol translation,
                schema mapping, and error handling that would otherwise require months of custom engineering.
                We maintain a library of 40+ pre-built connectors, each developed and tested against the
                production systems of enterprise customers. These are not generic webhook integrations —
                they are purpose-built data flows that understand the specific data models, event semantics,
                and operational patterns of each target system. When Manhattan Associates publishes a task
                to RBOT, our connector understands what a pick task means in Manhattan&apos;s schema and translates
                it to the correct RBOT task format with the right priority, deadline, and payload parameters.
              </p>
              <p className="body">
                Data flows bidirectionally in most RBOT integrations. Your WMS sends task assignments to
                RBOT. RBOT sends task completion events back to your WMS. Your ERP pulls cost-per-task
                data from RBOT Analytics for monthly close. RBOT Platform alerts Slack when a robot requires
                maintenance. This bidirectional design means that RBOT is not an isolated robotics system —
                it is a connected node in your existing operational data fabric, as visible and queryable
                as any other enterprise system in your stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Integration Categories</span>
            <h2 className="d2">Connect every layer of your enterprise stack.</h2>
          </div>
          <div className="int-rows">
            {categories.map(cat => (
              <div key={cat.label}>
                <div className="int-row-lbl">{cat.label}</div>
                <div className="chips">
                  {cat.chips.map(chip => (
                    <span key={chip} className="ichip">{chip}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Integration Architecture</span>
            <h2 className="d2">How RBOT integrations work.</h2>
            <p className="body-lg">
              Every RBOT integration follows the same four-step architecture — Connect, Normalize, Sync, Monitor —
              regardless of which enterprise system is on the other end.
            </p>
          </div>
          <div className="process" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
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

      {/* Custom Integrations */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Custom Integrations</span>
            <h2 className="d2">Proprietary systems are not a blocker.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p className="body-lg">
              Enterprise environments often include proprietary or heavily customized systems that do not
              match standard integration templates. Custom ERP configurations, bespoke WMS implementations,
              in-house order management systems, and legacy SCADA systems all present integration challenges
              that a standard connector library cannot solve. RBOT&apos;s solutions engineering team provides a
              custom connector development service that builds integrations to match your exact system
              architecture. Custom connectors are built using the same RBOT Integration SDK used for our
              standard connectors — which means they benefit from the same normalization layer, health
              monitoring, retry logic, and error handling infrastructure as pre-built connectors.
            </p>
            <p className="body-lg">
              The typical timeline for a custom connector is 4–8 weeks, depending on the complexity of
              the target system&apos;s API and data model. RBOT&apos;s integration team begins with a technical
              discovery session to map your system&apos;s event schema and API surface to the RBOT integration
              framework. We then build and test the connector in a staging environment before deploying
              to production with a parallel-run validation period. Custom connectors are owned by RBOT
              and maintained as part of your platform subscription — so when your underlying enterprise
              system releases a major version update, RBOT updates the connector, not you. If your system
              exposes a REST API or SOAP endpoint, we can build an integration. Contact our solutions
              engineering team during your assessment to discuss your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">See how RBOT fits into your stack.</h2>
          <p className="body-lg">
            We&apos;ll map your current enterprise systems to RBOT&apos;s integration library and show you
            exactly what a connected deployment looks like for your operation.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
            <Link href="/platform/api" className="btn btn-g">View API Docs</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

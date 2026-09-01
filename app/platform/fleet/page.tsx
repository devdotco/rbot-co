import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fleet Management — RBOT Platform",
  description: "Monitor every robot across every facility in real time. Status, utilization, battery, location, and task state — unified in one screen.",
};

const capabilities = [
  {
    title: "Real-Time Status",
    desc: "Live heartbeat from every robot in your fleet. RBOT Platform refreshes status every 5 seconds — online, idle, charging, faulted, or in task. No stale data. No guessing.",
  },
  {
    title: "Location Tracking",
    desc: "Zone-level location awareness for AMRs and mobile platforms. Joint-state and end-effector telemetry for industrial arms. Always know where each robot is and what it is doing.",
  },
  {
    title: "Battery Management",
    desc: "Automated charge scheduling with low-battery alerts and depot routing. RBOT Platform dispatches robots to charging stations before they reach critical levels, eliminating unplanned downtime.",
  },
  {
    title: "Utilization Analytics",
    desc: "Track uptime vs. idle ratio and task completion rate for every robot in your fleet. Surface underperforming assets and identify workflow bottlenecks before they erode your ROI.",
  },
  {
    title: "Multi-Facility View",
    desc: "Manage robots across multiple facilities — warehouses, manufacturing lines, distribution centers — from a single unified dashboard. Switch between sites instantly without losing context.",
  },
  {
    title: "Alert Management",
    desc: "Automated incident detection with configurable escalation rules. Route critical alerts to on-call personnel via email, Slack, or SMS. Set severity thresholds and acknowledgment SLAs.",
  },
];

const metrics = [
  { val: "119 / 127", label: "Average Robots Online", sub: "Across RBOT-managed fleets" },
  { val: "94.2%",     label: "Fleet Utilization",     sub: "Average across all customers" },
  { val: "18,492",    label: "Tasks Completed / Day",  sub: "Platform-wide average" },
  { val: "$2.41",     label: "Average Cost per Task",  sub: "Labor-adjusted, all robot types" },
];

export default function FleetPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Fleet Management</span>
        <h1 className="d1">Every robot. Every facility. One screen.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          RBOT Platform gives operations teams a real-time command center for their entire robotic
          workforce — status, location, battery, utilization, and active tasks, all in one place.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
          <Link href="/platform" className="btn btn-g">Platform Overview</Link>
        </div>
      </div>

      {/* Fleet Dashboard SVG Mockup */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="plat-shell" style={{ overflow: "visible" }}>
            <svg
              viewBox="0 0 580 340"
              width="580"
              height="340"
              style={{ maxWidth: "100%", display: "block", borderRadius: 4 }}
              aria-label="Fleet management dashboard mockup"
            >
              {/* Background */}
              <rect width="580" height="340" style={{ fill: "var(--bg1)" }} />

              {/* Top header bar */}
              <rect width="580" height="40" style={{ fill: "var(--bg2)" }} />
              <rect y="40" width="580" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="16" y="26" fontFamily="monospace" fontSize="12" style={{ fill: "var(--t1)" }}>Fleet Management</text>
              <text x="16" y="38" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>RBOT PLATFORM</text>
              {/* Search bar */}
              <rect x="300" y="11" width="160" height="18" rx="2" style={{ fill: "var(--bg3)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="308" y="24" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Search robots…</text>
              {/* Live indicator */}
              <circle cx="496" cy="20" r="4" style={{ fill: "var(--good)" }} />
              <text x="504" y="24" fontFamily="monospace" fontSize="9" style={{ fill: "var(--good)" }}>LIVE</text>
              {/* Menu dots */}
              <circle cx="548" cy="14" r="2" style={{ fill: "var(--t3)" }} />
              <circle cx="556" cy="14" r="2" style={{ fill: "var(--t3)" }} />
              <circle cx="564" cy="14" r="2" style={{ fill: "var(--t3)" }} />

              {/* Left Sidebar */}
              <rect x="0" y="41" width="130" height="299" style={{ fill: "var(--bg)" }} />
              <rect x="130" y="41" width="1" height="299" style={{ fill: "var(--bdr)" }} />

              {/* Sidebar labels */}
              <text x="14" y="62" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>FILTERS</text>
              {/* Filter items */}
              <rect x="8" y="70" width="114" height="22" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--acc)", strokeWidth: 0.5 }} />
              <text x="16" y="85" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t1)" }}>All Robots</text>
              <text x="108" y="85" fontFamily="monospace" fontSize="9" style={{ fill: "var(--acc)" }}>127</text>

              <rect x="8" y="97" width="114" height="22" rx="2" style={{ fill: "var(--bg1)" }} />
              <circle cx="20" cy="108" r="4" style={{ fill: "var(--good)" }} />
              <text x="30" y="113" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>Online</text>
              <text x="106" y="113" fontFamily="monospace" fontSize="9" style={{ fill: "var(--good)" }}>119</text>

              <rect x="8" y="124" width="114" height="22" rx="2" style={{ fill: "var(--bg1)" }} />
              <circle cx="20" cy="135" r="4" style={{ fill: "var(--t3)" }} />
              <text x="30" y="140" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>Idle</text>
              <text x="110" y="140" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>5</text>

              <rect x="8" y="151" width="114" height="22" rx="2" style={{ fill: "var(--bg1)" }} />
              <circle cx="20" cy="162" r="4" style={{ fill: "var(--warn)" }} />
              <text x="30" y="167" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>Maintenance</text>
              <text x="110" y="167" fontFamily="monospace" fontSize="9" style={{ fill: "var(--warn)" }}>3</text>

              {/* Sidebar divider */}
              <rect x="8" y="184" width="114" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="14" y="200" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>FACILITIES</text>
              <text x="14" y="218" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Chicago — DC1</text>
              <text x="14" y="233" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Memphis — WH2</text>
              <text x="14" y="248" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Dallas — MFG</text>
              <text x="14" y="263" fontFamily="monospace" fontSize="10" style={{ fill: "var(--acc)" }}>+ 4 more</text>

              {/* Main content area - Table Header */}
              <rect x="131" y="41" width="449" height="28" style={{ fill: "var(--bg2)" }} />
              <text x="145" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>ROBOT ID</text>
              <text x="235" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>MODEL</text>
              <text x="330" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>STATUS</text>
              <text x="390" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>BATTERY</text>
              <text x="450" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>LOCATION</text>
              <text x="515" y="59" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>TASK</text>
              <rect x="131" y="69" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 1 — Online, in task */}
              <rect x="131" y="70" width="449" height="36" style={{ fill: "var(--bg1)" }} />
              <text x="145" y="90" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0041</text>
              <text x="145" y="102" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>AMR · Fetch Robotics</text>
              <text x="235" y="90" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>FR500</text>
              <rect x="328" y="79" width="46" height="16" rx="2" style={{ fill: "rgba(10,174,255,0.12)" }} />
              <text x="334" y="91" fontFamily="monospace" fontSize="9" style={{ fill: "var(--acc)" }}>● IN TASK</text>
              <rect x="388" y="84" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="84" width="26" height="5" rx="2" style={{ fill: "var(--good)" }} />
              <text x="424" y="90" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>82%</text>
              <text x="450" y="90" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Zone A-12</text>
              <text x="515" y="90" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Putaway</text>
              <rect x="131" y="106" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 2 — Online, in task */}
              <rect x="131" y="107" width="449" height="36" style={{ fill: "var(--bg)" }} />
              <text x="145" y="127" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0042</text>
              <text x="145" y="139" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Arm · Universal Robots</text>
              <text x="235" y="127" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>UR10e</text>
              <rect x="328" y="116" width="40" height="16" rx="2" style={{ fill: "rgba(34,197,94,0.10)" }} />
              <text x="334" y="128" fontFamily="monospace" fontSize="9" style={{ fill: "var(--good)" }}>● ONLINE</text>
              <rect x="388" y="121" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="121" width="30" height="5" rx="2" style={{ fill: "var(--good)" }} />
              <text x="424" y="127" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>94%</text>
              <text x="450" y="127" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Station 3</text>
              <text x="515" y="127" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Assemble</text>
              <rect x="131" y="143" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 3 — Idle */}
              <rect x="131" y="144" width="449" height="36" style={{ fill: "var(--bg1)" }} />
              <text x="145" y="164" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0043</text>
              <text x="145" y="176" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Humanoid · Figure</text>
              <text x="235" y="164" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>Figure-01</text>
              <rect x="328" y="153" width="30" height="16" rx="2" style={{ fill: "rgba(69,67,64,0.2)" }} />
              <text x="334" y="165" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>● IDLE</text>
              <rect x="388" y="158" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="158" width="18" height="5" rx="2" style={{ fill: "var(--warn)" }} />
              <text x="424" y="164" fontFamily="monospace" fontSize="9" style={{ fill: "var(--warn)" }}>55%</text>
              <text x="450" y="164" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Dock B-2</text>
              <text x="515" y="164" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>—</text>
              <rect x="131" y="180" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 4 — In task */}
              <rect x="131" y="181" width="449" height="36" style={{ fill: "var(--bg)" }} />
              <text x="145" y="201" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0044</text>
              <text x="145" y="213" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>AMR · Locus Robotics</text>
              <text x="235" y="201" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>LocusBot</text>
              <rect x="328" y="190" width="46" height="16" rx="2" style={{ fill: "rgba(10,174,255,0.12)" }} />
              <text x="334" y="202" fontFamily="monospace" fontSize="9" style={{ fill: "var(--acc)" }}>● IN TASK</text>
              <rect x="388" y="195" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="195" width="29" height="5" rx="2" style={{ fill: "var(--good)" }} />
              <text x="424" y="201" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>91%</text>
              <text x="450" y="201" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Zone C-05</text>
              <text x="515" y="201" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Pick</text>
              <rect x="131" y="217" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 5 — Maintenance */}
              <rect x="131" y="218" width="449" height="36" style={{ fill: "var(--bg1)" }} />
              <text x="145" y="238" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0045</text>
              <text x="145" y="250" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Cobot · Fanuc</text>
              <text x="235" y="238" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>CRX-10iA</text>
              <rect x="328" y="227" width="60" height="16" rx="2" style={{ fill: "rgba(245,158,11,0.12)" }} />
              <text x="334" y="239" fontFamily="monospace" fontSize="9" style={{ fill: "var(--warn)" }}>● MAINT</text>
              <rect x="388" y="232" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="232" width="10" height="5" rx="2" style={{ fill: "var(--warn)" }} />
              <text x="424" y="238" fontFamily="monospace" fontSize="9" style={{ fill: "var(--warn)" }}>30%</text>
              <text x="450" y="238" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Service Bay</text>
              <text x="515" y="238" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t3)" }}>Offline</text>
              <rect x="131" y="254" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Row 6 — Online in task */}
              <rect x="131" y="255" width="449" height="36" style={{ fill: "var(--bg)" }} />
              <text x="145" y="275" fontFamily="monospace" fontSize="11" fontWeight="600" style={{ fill: "var(--t1)" }}>RBT-0046</text>
              <text x="145" y="287" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>AMR · MiR</text>
              <text x="235" y="275" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t2)" }}>MiR250</text>
              <rect x="328" y="264" width="46" height="16" rx="2" style={{ fill: "rgba(10,174,255,0.12)" }} />
              <text x="334" y="276" fontFamily="monospace" fontSize="9" style={{ fill: "var(--acc)" }}>● IN TASK</text>
              <rect x="388" y="269" width="32" height="5" rx="2" style={{ fill: "var(--bdr2)" }} />
              <rect x="388" y="269" width="24" height="5" rx="2" style={{ fill: "var(--good)" }} />
              <text x="424" y="275" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>76%</text>
              <text x="450" y="275" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Zone D-01</text>
              <text x="515" y="275" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>Transport</text>
              <rect x="131" y="291" width="449" height="1" style={{ fill: "var(--bdr)" }} />

              {/* Bottom status bar */}
              <rect x="0" y="305" width="580" height="35" style={{ fill: "var(--bg2)" }} />
              <rect x="0" y="305" width="580" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="16" y="327" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>FLEET STATUS</text>
              <circle cx="110" cy="322" r="3" style={{ fill: "var(--good)" }} />
              <text x="118" y="326" fontFamily="monospace" fontSize="9" style={{ fill: "var(--good)" }}>119 Online</text>
              <circle cx="190" cy="322" r="3" style={{ fill: "var(--t3)" }} />
              <text x="198" y="326" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>5 Idle</text>
              <circle cx="245" cy="322" r="3" style={{ fill: "var(--warn)" }} />
              <text x="253" y="326" fontFamily="monospace" fontSize="9" style={{ fill: "var(--warn)" }}>3 Maintenance</text>
              <text x="420" y="326" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Last updated: 2s ago</text>
            </svg>
          </div>
        </div>
      </section>

      {/* What Fleet Management Means */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Why It Matters</span>
                <h2 className="d2">Visibility is the foundation of operational excellence.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Fleet management is not just about knowing which robots are online. It is about understanding the
                real-time performance of your entire robotic workforce — and having the information you need to act
                before problems become downtime. Without a centralized fleet view, operations teams are flying blind:
                reacting to failures after the fact, manually tracking utilization in spreadsheets, and missing the
                optimization opportunities hiding in their own data.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                Multi-facility operations multiply this complexity. When robots from three different manufacturers are
                deployed across six facilities, each with its own proprietary software interface, building a unified
                view requires either building custom integrations yourself or accepting fragmented visibility. RBOT
                Platform eliminates that fragmentation. Our manufacturer-agnostic data layer normalizes telemetry
                from Fetch, MiR, Universal Robots, Fanuc, Figure, and 40+ other OEMs into a single, consistent
                data model — so your operations team sees one fleet, not a collection of siloed systems.
              </p>
              <p className="body">
                The cost of not having real-time fleet visibility is measurable and significant. Unplanned downtime
                in a high-throughput warehouse costs $5,000–$15,000 per hour in lost throughput. Underutilized
                robots are capital that is not working. Battery failures mid-task cascade into workflow disruptions
                that human teams must scramble to resolve. RBOT Platform&apos;s proactive alerting and live monitoring
                catch these issues seconds after they emerge — not hours later when a supervisor notices something
                is wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Core Capabilities</span>
            <h2 className="d2">Everything operations teams need to run a robotic fleet.</h2>
          </div>
          <div className="ind-grid">
            {capabilities.map((cap, i) => (
              <div key={cap.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Metrics */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Fleet Benchmarks</span>
            <h2 className="d2">Real numbers from RBOT-managed fleets.</h2>
            <p className="body-lg">
              Across all RBOT customers, these are the utilization and efficiency benchmarks we observe and help
              operations teams reach and sustain.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)", marginTop: 48 }}>
            {metrics.map(m => (
              <div key={m.label} style={{ background: "var(--bg)", padding: "32px 28px" }}>
                <div className="lbl" style={{ marginBottom: 12 }}>{m.label}</div>
                <div className="d2" style={{ color: "var(--acc)", marginBottom: 6 }}>{m.val}</div>
                <div className="body" style={{ fontSize: 12 }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Technical Architecture</span>
            <h2 className="d2">How fleet data flows through the RBOT Platform.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p className="body-lg">
              Each robot in a RBOT-managed fleet runs a lightweight edge agent — a software process that runs on
              the robot&apos;s onboard compute or a nearby edge gateway. This agent establishes a persistent connection
              to the RBOT Platform cloud via MQTT for low-latency telemetry and WebSockets for bidirectional
              command-and-control. Heartbeat payloads are transmitted every 5 seconds and include battery level,
              operational state, current task ID, location coordinates, and any active fault codes. The edge agent
              handles reconnection logic automatically, buffering data locally during network interruptions and
              flushing to the platform when connectivity is restored — ensuring no telemetry is lost even in
              environments with intermittent Wi-Fi coverage.
            </p>
            <p className="body-lg">
              On the platform side, incoming telemetry from different robot manufacturers arrives in dozens of
              proprietary formats — each OEM has its own data schemas, status enumerations, and error codes. RBOT
              Platform runs a real-time normalization layer that translates manufacturer-specific payloads into the
              RBOT canonical data model within milliseconds. This means a UR10e arm and a MiR250 AMR and a Figure-01
              humanoid all appear in the same fleet table, with the same status fields, the same battery percentage
              format, and the same task assignment structure. Operations teams never need to learn multiple interfaces
              or mentally switch contexts between different manufacturer dashboards. The unified model is also what
              powers the RBOT API, enabling your engineering team to query fleet state without worrying about
              manufacturer-level data differences.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">See fleet management in action.</h2>
          <p className="body-lg">
            We&apos;ll walk you through a live RBOT Platform demo with fleet data that matches your robot types and
            facility structure.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
            <Link href="/platform/analytics" className="btn btn-g">View Analytics</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

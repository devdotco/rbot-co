import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Managed Operations | RBOT — 24/7 Fleet Monitoring and Management",
  description:
    "RBOT Managed Operations delivers 24/7 remote monitoring, fleet optimization, task management, and incident response. 99.2% fleet uptime guarantee. Real experts, not just software.",
};

const components = [
  {
    title: "Remote Monitoring",
    desc: "RBOT&apos;s operations center monitors every robot in your fleet around the clock. Battery levels, task queues, error states, and environmental conditions are tracked in real time. Anomalies trigger alerts before they become incidents.",
  },
  {
    title: "Fleet Optimization",
    desc: "Task scheduling, route optimization, and charging cycle management are continuously adjusted to maximize throughput. RBOT analysts review weekly performance data and push configuration updates to improve fleet utilization.",
  },
  {
    title: "Task Management",
    desc: "As your operations change — new SKUs, seasonal volume shifts, layout reconfiguration — RBOT updates task profiles, zone maps, and priority rules without requiring a new deployment engagement.",
  },
  {
    title: "Performance Reporting",
    desc: "Monthly and quarterly reports document fleet utilization, task completion rates, downtime events, and cost-per-unit metrics. Dashboards are available in real time through the RBOT customer portal.",
  },
  {
    title: "Incident Response",
    desc: "When a robot encounters an unrecoverable fault, RBOT responds within SLA — remote diagnosis first, field dispatch if hardware intervention is required. Every incident is documented with root cause and preventive action.",
  },
  {
    title: "Continuous Improvement",
    desc: "RBOT conducts quarterly business reviews with every managed account to identify optimization opportunities, review SLA performance, and plan for operational changes. Your fleet improves over time, not just on go-live day.",
  },
];

const slaRows = [
  {
    level: "Critical",
    levelDesc: "Robot stopped, workflow blocked",
    response: "15 minutes",
    resolution: "4 hours",
    coverage: "24/7/365",
  },
  {
    level: "Major",
    levelDesc: "Degraded throughput, redundancy lost",
    response: "1 hour",
    resolution: "8 hours",
    coverage: "Business hours",
  },
  {
    level: "Minor",
    levelDesc: "Warning state, advisory alert",
    response: "4 hours",
    resolution: "2 business days",
    coverage: "Business hours",
  },
];

export default function ManagedPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Managed Operations</span>
        <h1 className="d1">Your fleet, our responsibility.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          RBOT Managed Operations keeps your robot fleet running at peak performance — 24 hours
          a day, 7 days a week. Real experts monitoring real systems, with SLA-backed response
          times and a 99.2% fleet uptime guarantee.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get a Managed Operations Quote</Link>
          <Link href="/raas" className="btn btn-g">Explore RaaS</Link>
        </div>
      </div>

      {/* NOC Dashboard SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Operations Center</span>
            <h2 className="d2">Always watching. Always optimizing.</h2>
            <p className="body-lg">
              The RBOT Network Operations Center monitors every managed fleet in real time. The
              dashboard below reflects the view our analysts see for each customer account —
              facility-level status panels showing robot utilization, active task counts, and alert
              state across every site.
            </p>
          </div>

          <div style={{ overflowX: "auto", marginTop: 48 }}>
            <svg
              width="520"
              height="280"
              viewBox="0 0 520 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 440, width: "100%", maxWidth: 520 }}
              aria-label="RBOT NOC monitoring dashboard showing 6 facility status panels with fleet health indicators"
            >
              {/* Dashboard outer frame */}
              <rect x="0" y="0" width="520" height="280" rx="3" fill="var(--bg1)" stroke="var(--bdr2)" strokeWidth="1.5" />

              {/* Header bar */}
              <rect x="0" y="0" width="520" height="38" rx="3" fill="var(--bg3)" />
              <rect x="0" y="28" width="520" height="10" fill="var(--bg3)" />
              <text x="18" y="24" fontSize="11" fill="var(--t1)" fontWeight="700" letterSpacing="-.02em" fontFamily="var(--font-mono,monospace)">RBOT NOC</text>
              <text x="90" y="24" fontSize="9" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">— FLEET MONITORING CONSOLE</text>

              {/* Status dots in header */}
              <circle cx="420" cy="19" r="4" fill="var(--good)" />
              <text x="428" y="23" fontSize="8.5" fill="var(--good)" fontFamily="var(--font-mono,monospace)">ALL SYSTEMS OPERATIONAL</text>
              <text x="18" y="34" fontSize="7" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">LAST SYNC: 0.4s AGO  ·  ACTIVE SITES: 6  ·  ROBOTS ONLINE: 47/48</text>

              {/* 6 facility panels: 3 cols × 2 rows */}
              {[
                { x: 12, y: 48, name: "CHICAGO-01", util: 96, tasks: 24, bots: 8, status: "good" },
                { x: 186, y: 48, name: "DALLAS-02", util: 88, tasks: 19, bots: 6, status: "good" },
                { x: 360, y: 48, name: "PHOENIX-03", util: 71, tasks: 14, bots: 9, status: "warn" },
                { x: 12, y: 168, name: "SEATTLE-04", util: 93, tasks: 21, bots: 8, status: "good" },
                { x: 186, y: 168, name: "ATLANTA-05", util: 99, tasks: 28, bots: 8, status: "good" },
                { x: 360, y: 168, name: "BOSTON-06", util: 85, tasks: 17, bots: 8, status: "good" },
              ].map((panel) => (
                <g key={panel.name}>
                  <rect
                    x={panel.x}
                    y={panel.y}
                    width="160"
                    height="108"
                    rx="2"
                    fill="var(--bg2)"
                    stroke={panel.status === "warn" ? "var(--warn)" : "var(--bdr2)"}
                    strokeWidth="1"
                    opacity={panel.status === "warn" ? 0.9 : 1}
                  />
                  {/* Panel header */}
                  <text
                    x={panel.x + 10}
                    y={panel.y + 18}
                    fontSize="8.5"
                    fill={panel.status === "warn" ? "var(--warn)" : "var(--t2)"}
                    fontFamily="var(--font-mono,monospace)"
                    letterSpacing=".06em"
                  >
                    {panel.name}
                  </text>
                  <circle
                    cx={panel.x + 148}
                    cy={panel.y + 14}
                    r="4"
                    fill={panel.status === "warn" ? "var(--warn)" : "var(--good)"}
                    opacity=".8"
                  />
                  {/* Utilization bar */}
                  <text x={panel.x + 10} y={panel.y + 38} fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">UTILIZATION</text>
                  <rect x={panel.x + 10} y={panel.y + 42} width="140" height="6" rx="1" fill="var(--bdr)" />
                  <rect
                    x={panel.x + 10}
                    y={panel.y + 42}
                    width={Math.round(140 * panel.util / 100)}
                    height="6"
                    rx="1"
                    fill={panel.status === "warn" ? "var(--warn)" : "var(--acc)"}
                    opacity=".7"
                  />
                  <text
                    x={panel.x + 152}
                    y={panel.y + 49}
                    fontSize="7.5"
                    fill={panel.status === "warn" ? "var(--warn)" : "var(--acc)"}
                    fontFamily="var(--font-mono,monospace)"
                    textAnchor="end"
                  >
                    {panel.util}%
                  </text>
                  {/* Robot status dots */}
                  <text x={panel.x + 10} y={panel.y + 66} fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">ROBOTS</text>
                  {Array.from({ length: panel.bots }).map((_, ri) => (
                    <circle
                      key={ri}
                      cx={panel.x + 10 + ri * 16}
                      cy={panel.y + 76}
                      r="5"
                      fill={ri === 0 && panel.status === "warn" ? "var(--warn)" : "var(--good)"}
                      opacity=".7"
                    />
                  ))}
                  {/* Task count */}
                  <text x={panel.x + 10} y={panel.y + 98} fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">
                    {panel.tasks} ACTIVE TASKS
                  </text>
                </g>
              ))}

              {/* Bottom stats bar */}
              <rect x="0" y="252" width="520" height="28" fill="var(--bg3)" />
              <text x="18" y="269" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">FLEET UPTIME: 99.4%</text>
              <text x="140" y="269" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">TASKS TODAY: 1,847</text>
              <text x="270" y="269" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">ALERTS: 1 WARN / 0 CRIT</text>
              <text x="420" y="269" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">NOC STAFF: 3 ACTIVE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* What Managed Means */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 24 }}>
                <span className="lbl">What Managed Means</span>
                <h2 className="d2">Not software. Experts running your operations.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 20 }}>
                The phrase &ldquo;managed services&rdquo; is overloaded in the technology industry.
                For some vendors, it means a monitoring dashboard with automated alerts that land in
                your inbox. That is not managed operations — that is a SaaS subscription.
              </p>
              <p className="body-lg" style={{ marginBottom: 20 }}>
                RBOT Managed Operations means human experts in our operations center are
                accountable for the performance of your fleet — not just for alerting you when
                something goes wrong. When a robot enters a fault state at 2 a.m., an RBOT analyst
                diagnoses the issue remotely, attempts recovery, and escalates to field dispatch if
                the fault requires physical intervention. You find out what happened, what was done,
                and how it is being prevented in the future. You are not woken up to troubleshoot.
              </p>
              <p className="body-lg">
                The distinction becomes especially important during peak operational periods —
                end-of-month inventory, holiday warehouse surges, quarter-end manufacturing runs.
                RBOT pre-stages staffing and fleet configuration for known peak events so your
                fleet is optimized before volume hits, not after.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "94.2%", desc: "Average fleet utilization for RBOT managed accounts" },
                { label: "71%", desc: "Industry average fleet utilization without managed services" },
                { label: "99.2%", desc: "Fleet uptime guarantee under the RBOT managed operations SLA" },
                { label: "< 15 min", desc: "Response time for critical incidents — remote diagnosis initiated" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: "var(--bg2)",
                    border: "1px solid var(--bdr2)",
                    borderRadius: 3,
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 700,
                      letterSpacing: "-.04em",
                      color: "var(--acc)",
                      fontFamily: "var(--font-mono,monospace)",
                      flexShrink: 0,
                      minWidth: 80,
                    }}
                  >
                    {stat.label}
                  </div>
                  <p className="body">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Components */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Service Components</span>
            <h2 className="d2">What is included in managed operations.</h2>
            <p className="body-lg">
              Every RBOT Managed Operations account receives all six components below at the same
              SLA level. There are no add-on tiers for basic monitoring features.
            </p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {components.map((c) => (
              <div key={c.title} className="ind-card">
                <h3>{c.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: c.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Service Level Agreement</span>
            <h2 className="d2">Response times you can plan around.</h2>
            <p className="body-lg">
              RBOT publishes its SLA tiers rather than negotiating them case by case. The following
              table represents the baseline SLA included in every managed operations contract.
              Enterprise customers may negotiate enhanced SLA terms for specific sites or workflows.
            </p>
          </div>

          {/* SLA Table */}
          <div
            style={{
              marginTop: 48,
              border: "1px solid var(--bdr2)",
              borderRadius: 3,
              overflow: "hidden",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                background: "var(--bg3)",
                borderBottom: "1px solid var(--bdr2)",
              }}
            >
              {["Service Level", "Response Time", "Resolution Target", "Coverage"].map((h) => (
                <div
                  key={h}
                  style={{
                    padding: "14px 20px",
                    fontSize: 10.5,
                    fontWeight: 500,
                    letterSpacing: ".1em",
                    textTransform: "uppercase",
                    color: "var(--t3)",
                    fontFamily: "var(--font-mono,monospace)",
                    borderRight: "1px solid var(--bdr)",
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {/* Data rows */}
            {slaRows.map((row, i) => (
              <div
                key={row.level}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  borderBottom: i < slaRows.length - 1 ? "1px solid var(--bdr)" : "none",
                  background: i % 2 === 0 ? "var(--bg)" : "var(--bg1)",
                }}
              >
                <div style={{ padding: "18px 20px", borderRight: "1px solid var(--bdr)" }}>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "-.01em",
                      marginBottom: 4,
                      color: row.level === "Critical" ? "var(--t1)" : "var(--t2)",
                    }}
                  >
                    {row.level}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--t3)", lineHeight: 1.4 }}>{row.levelDesc}</div>
                </div>
                <div
                  style={{
                    padding: "18px 20px",
                    borderRight: "1px solid var(--bdr)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      fontFamily: "var(--font-mono,monospace)",
                      color: row.level === "Critical" ? "var(--acc)" : "var(--t1)",
                    }}
                  >
                    {row.response}
                  </span>
                </div>
                <div
                  style={{
                    padding: "18px 20px",
                    borderRight: "1px solid var(--bdr)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: "var(--t1)" }}>
                    {row.resolution}
                  </span>
                </div>
                <div style={{ padding: "18px 20px", display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      fontSize: 12,
                      fontFamily: "var(--font-mono,monospace)",
                      color: row.coverage === "24/7/365" ? "var(--good)" : "var(--t2)",
                    }}
                  >
                    {row.coverage}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Savings */}
      <section className="sec">
        <div className="wrap">
          <div
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--bdr2)",
              borderRadius: 3,
              padding: "56px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
            }}
          >
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 14 }}>Utilization Impact</span>
              <h2 className="d2" style={{ marginBottom: 20 }}>
                The cost of unmanaged operations.
              </h2>
              <p className="body-lg" style={{ marginBottom: 20 }}>
                Managed Operations customers achieve 94.2% average fleet utilization, compared to
                71% for operations running without a managed service layer. At scale, that 23-point
                gap represents millions of dollars in unrealized capacity — robots sitting idle,
                charging unnecessarily, or stuck in fault states that no one diagnosed.
              </p>
              <p className="body">
                The gap also widens over time. Unmanaged fleets tend to degrade as configurations
                drift, task maps become stale, and minor faults go unresolved. RBOT managed accounts
                show consistent improvement in utilization over the first 12 months of operation as
                optimization cycles accumulate.
              </p>
            </div>
            <div>
              {/* Utilization comparison bars */}
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 13, color: "var(--t2)" }}>RBOT Managed Operations</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--acc)", fontFamily: "var(--font-mono,monospace)" }}>94.2%</span>
                </div>
                <div style={{ height: 10, background: "var(--bdr)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: "94.2%", height: "100%", background: "var(--acc)", opacity: 0.7 }} />
                </div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                  <span style={{ fontSize: 13, color: "var(--t2)" }}>Industry Average (no managed services)</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: "var(--t3)", fontFamily: "var(--font-mono,monospace)" }}>71%</span>
                </div>
                <div style={{ height: 10, background: "var(--bdr)", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ width: "71%", height: "100%", background: "var(--bdr3)" }} />
                </div>
              </div>
              <p style={{ fontSize: 12, color: "var(--t3)", lineHeight: 1.6, fontFamily: "var(--font-mono,monospace)" }}>
                Source: RBOT internal data across 38 managed accounts, 12-month average. Industry benchmark from MHI Annual Industry Report 2024.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Get Started</span>
          <h2 className="d2">Let RBOT run your fleet.</h2>
          <p className="body-lg">
            Managed Operations is available as a standalone service or as part of a full RaaS
            engagement. Every account starts with a discovery call to understand your operational
            requirements and produce a custom SLA.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Get a Managed Operations Quote</Link>
            <Link href="/services" className="btn btn-g">All Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

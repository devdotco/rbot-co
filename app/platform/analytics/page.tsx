import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analytics & Reporting — RBOT Platform",
  description: "Prove ROI, identify underperforming robots, and justify fleet expansion with RBOT's built-in analytics and automated reporting.",
};

const reports = [
  {
    title: "Utilization Reports",
    desc: "Daily, weekly, and monthly fleet utilization broken down by robot, zone, and shift. Instantly identify which assets are consistently underperforming and surface shift-level throughput patterns that inform scheduling decisions.",
  },
  {
    title: "Task Performance",
    desc: "Throughput, cycle times, error rates, and task category breakdowns across your entire fleet. Compare task completion rates across robot models, facilities, and time periods to pinpoint operational bottlenecks.",
  },
  {
    title: "Cost Analysis",
    desc: "Cost per task, labor substitution savings, and total fleet cost tracked over time. RBOT links robot activity to financial outcomes — giving finance teams the data they need to validate the investment case.",
  },
  {
    title: "Downtime Analysis",
    desc: "Planned vs. unplanned downtime, root cause categories, and trend analysis over rolling windows. Understand whether downtime is decreasing, which robot types drive the most unplanned stops, and how your SLA coverage is performing.",
  },
  {
    title: "Comparative Benchmarks",
    desc: "Your fleet's performance versus anonymized RBOT customer averages across your industry and robot category. Understand where you are outperforming the market and where there is operational room to improve.",
  },
  {
    title: "Executive Summary",
    desc: "Automated weekly PDF delivered to finance and operations leadership. Includes top-line fleet health, cost savings to date, task volumes, and flagged issues requiring attention — without requiring leaders to log into the platform.",
  },
];

const integrations = [
  "Tableau", "Power BI", "Looker", "Grafana", "DataDog",
  "Snowflake", "Google BigQuery", "AWS Redshift", "Splunk",
];

export default function AnalyticsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Analytics &amp; Reporting</span>
        <h1 className="d1">Data that drives robot ROI.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          RBOT Platform tracks every task, every minute of uptime, and every dollar of cost — and turns that
          data into reports your finance and operations teams can act on.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
          <Link href="/resources/roi-calculator" className="btn btn-g">ROI Calculator Guide</Link>
        </div>
      </div>

      {/* Analytics Dashboard SVG Mockup */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <div className="plat-shell">
            <svg
              viewBox="0 0 600 360"
              width="600"
              height="360"
              style={{ maxWidth: "100%", display: "block", borderRadius: 4 }}
              aria-label="Analytics dashboard mockup"
            >
              {/* Background */}
              <rect width="600" height="360" style={{ fill: "var(--bg1)" }} />

              {/* Header bar */}
              <rect width="600" height="40" style={{ fill: "var(--bg2)" }} />
              <rect y="40" width="600" height="1" style={{ fill: "var(--bdr)" }} />
              <text x="16" y="26" fontFamily="monospace" fontSize="12" style={{ fill: "var(--t1)" }}>Analytics &amp; Reporting</text>
              <text x="430" y="23" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t3)" }}>Period:</text>
              <rect x="462" y="12" width="80" height="18" rx="2" style={{ fill: "var(--bg3)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
              <text x="470" y="25" fontFamily="monospace" fontSize="9" style={{ fill: "var(--t2)" }}>Last 30 days</text>
              <rect x="548" y="12" width="36" height="18" rx="2" style={{ fill: "var(--acc)" }} />
              <text x="556" y="25" fontFamily="monospace" fontSize="9" style={{ fill: "#040404" }}>Export</text>

              {/* KPI Row — 4 cards */}
              <rect x="12" y="52" width="130" height="58" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="22" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>TOTAL ROBOTS</text>
              <text x="22" y="94" fontFamily="monospace" fontSize="22" fontWeight="700" style={{ fill: "var(--t1)" }}>127</text>
              <text x="22" y="105" fontFamily="monospace" fontSize="8" style={{ fill: "var(--good)" }}>↑ 8 this month</text>

              <rect x="152" y="52" width="130" height="58" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="162" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>UTILIZATION</text>
              <text x="162" y="94" fontFamily="monospace" fontSize="22" fontWeight="700" style={{ fill: "var(--acc)" }}>94.2%</text>
              <text x="162" y="105" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>↑ 2.1% vs last period</text>

              <rect x="292" y="52" width="130" height="58" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="302" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>TASKS TODAY</text>
              <text x="302" y="94" fontFamily="monospace" fontSize="22" fontWeight="700" style={{ fill: "var(--t1)" }}>18,492</text>
              <text x="302" y="105" fontFamily="monospace" fontSize="8" style={{ fill: "var(--good)" }}>On track vs. plan</text>

              <rect x="432" y="52" width="156" height="58" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="442" y="70" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>COST / TASK</text>
              <text x="442" y="94" fontFamily="monospace" fontSize="22" fontWeight="700" style={{ fill: "var(--good)" }}>$2.41</text>
              <text x="442" y="105" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>↓ $0.18 vs last month</text>

              {/* Line Chart Area — Utilization over time */}
              <rect x="12" y="122" width="370" height="160" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="22" y="140" fontFamily="monospace" fontSize="9" fontWeight="600" style={{ fill: "var(--t2)" }}>Fleet Utilization — Last 7 Days</text>

              {/* Y-axis labels */}
              <text x="22" y="162" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>100%</text>
              <text x="22" y="194" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>90%</text>
              <text x="22" y="226" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>80%</text>
              <text x="22" y="258" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>70%</text>
              <text x="22" y="272" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>60%</text>

              {/* Grid lines */}
              <line x1="48" y1="157" x2="374" y2="157" style={{ stroke: "var(--bdr)", strokeWidth: 0.5 }} />
              <line x1="48" y1="189" x2="374" y2="189" style={{ stroke: "var(--bdr)", strokeWidth: 0.5 }} />
              <line x1="48" y1="221" x2="374" y2="221" style={{ stroke: "var(--bdr)", strokeWidth: 0.5 }} />
              <line x1="48" y1="253" x2="374" y2="253" style={{ stroke: "var(--bdr)", strokeWidth: 0.5 }} />

              {/* Line chart path: Mon=91%, Tue=94%, Wed=92%, Thu=96%, Fri=93%, Sat=88%, Sun=94% */}
              {/* Y range: 60%-100% = 96px range, 100% at y=157, 60% at y=269 */}
              {/* 91% → y=157+(100-91)/40*112 = 157+25.2 = 182 */}
              <polyline
                points="55,185 103,168 151,178 199,153 247,171 295,202 343,168"
                style={{ fill: "none", stroke: "var(--acc)", strokeWidth: 2 }}
              />
              {/* Area fill */}
              <polygon
                points="55,185 103,168 151,178 199,153 247,171 295,202 343,168 343,269 55,269"
                style={{ fill: "rgba(10,174,255,0.08)" }}
              />
              {/* Data points */}
              <circle cx="55" cy="185" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="103" cy="168" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="151" cy="178" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="199" cy="153" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="247" cy="171" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="295" cy="202" r="3" style={{ fill: "var(--acc)" }} />
              <circle cx="343" cy="168" r="3" style={{ fill: "var(--acc)" }} />

              {/* X-axis labels */}
              <text x="48" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Mon</text>
              <text x="96" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Tue</text>
              <text x="144" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Wed</text>
              <text x="192" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Thu</text>
              <text x="240" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Fri</text>
              <text x="288" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Sat</text>
              <text x="336" y="282" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Sun</text>

              {/* Bar chart — Utilization by Robot Type */}
              <rect x="392" y="122" width="196" height="160" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="402" y="140" fontFamily="monospace" fontSize="9" fontWeight="600" style={{ fill: "var(--t2)" }}>By Robot Type</text>

              {/* Bars — horizontal */}
              {/* Humanoid 91% */}
              <text x="402" y="162" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Humanoid</text>
              <rect x="402" y="166" width="146" height="10" rx="1" style={{ fill: "var(--bdr2)" }} />
              <rect x="402" y="166" width="133" height="10" rx="1" style={{ fill: "var(--acc)", fillOpacity: 0.7 }} />
              <text x="550" y="175" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t2)" }}>91%</text>

              {/* AMR 96% */}
              <text x="402" y="196" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>AMR</text>
              <rect x="402" y="200" width="146" height="10" rx="1" style={{ fill: "var(--bdr2)" }} />
              <rect x="402" y="200" width="140" height="10" rx="1" style={{ fill: "var(--acc)" }} />
              <text x="550" y="209" fontFamily="monospace" fontSize="7" style={{ fill: "var(--acc)" }}>96%</text>

              {/* Arm 89% */}
              <text x="402" y="230" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Arm</text>
              <rect x="402" y="234" width="146" height="10" rx="1" style={{ fill: "var(--bdr2)" }} />
              <rect x="402" y="234" width="130" height="10" rx="1" style={{ fill: "var(--acc)", fillOpacity: 0.65 }} />
              <text x="550" y="243" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t2)" }}>89%</text>

              {/* Cobot 88% */}
              <text x="402" y="264" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Cobot</text>
              <rect x="402" y="268" width="146" height="10" rx="1" style={{ fill: "var(--bdr2)" }} />
              <rect x="402" y="268" width="129" height="10" rx="1" style={{ fill: "var(--acc)", fillOpacity: 0.6 }} />
              <text x="550" y="277" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t2)" }}>88%</text>

              {/* Table header */}
              <rect x="12" y="292" width="576" height="24" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr)", strokeWidth: 1 }} />
              <text x="22" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>ROBOT ID</text>
              <text x="122" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>UPTIME</text>
              <text x="212" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>TASKS</text>
              <text x="292" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>AVG TASK TIME</text>
              <text x="422" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>COST / TASK</text>
              <text x="522" y="308" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>STATUS</text>

              {/* Sample row */}
              <rect x="12" y="316" width="576" height="28" style={{ fill: "var(--bg)" }} />
              <text x="22" y="334" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t1)" }}>RBT-0041</text>
              <text x="122" y="334" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>98.4%</text>
              <text x="212" y="334" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>3,241</text>
              <text x="292" y="334" fontFamily="monospace" fontSize="10" style={{ fill: "var(--t2)" }}>4m 12s</text>
              <text x="422" y="334" fontFamily="monospace" fontSize="10" style={{ fill: "var(--good)" }}>$1.89</text>
              <rect x="510" y="325" width="42" height="14" rx="2" style={{ fill: "rgba(34,197,94,0.1)" }} />
              <text x="517" y="336" fontFamily="monospace" fontSize="8" style={{ fill: "var(--good)" }}>● Online</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Analytics Overview */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Why Analytics Matter</span>
                <h2 className="d2">You can&apos;t optimize what you can&apos;t measure.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Every robotics deployment is an investment with a business case attached to it. Finance teams approved
                the capital or the monthly OpEx based on projections — labor savings, throughput gains, cost per task
                improvements. The problem is that most robotic deployments produce no systematic way to verify those
                projections against reality. Data lives in the robot manufacturer&apos;s proprietary system, separate from
                the WMS, separate from labor records, impossible to reconcile. RBOT Platform closes that gap by
                unifying all fleet telemetry into a single analytics layer that speaks the language of business outcomes,
                not robot sensor readings.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                Identifying underperforming robots is just as important as celebrating high performers. A robot
                operating at 72% utilization in a deployment that assumed 90% represents a significant gap in the
                ROI model. Without analytics, that gap is invisible — a feeling that &apos;something seems off&apos; rather than
                a precise, actionable diagnosis. RBOT&apos;s task performance and utilization reports surface these gaps
                automatically, with drill-down capability to identify whether the root cause is robot health, workflow
                design, integration latency, staffing patterns, or facility layout. Operations leaders can act on
                specific evidence rather than intuition.
              </p>
              <p className="body">
                As fleets grow, the analytics layer becomes the primary tool for fleet expansion justification.
                When a VP of Operations asks &apos;should we deploy 10 more robots in our Memphis facility?&apos;, the answer
                should come from data: current utilization rates, task backlog analysis, throughput constraints, and
                a projected ROI model built on measured performance from the current fleet — not a vendor&apos;s marketing
                estimate. RBOT Platform makes that data available at any time, to any stakeholder, in any format.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Report Types</span>
            <h2 className="d2">Built-in reports for every audience.</h2>
          </div>
          <div className="ind-grid">
            {reports.map((r, i) => (
              <div key={r.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Integrations */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Data Integrations</span>
            <h2 className="d2">Push your fleet data anywhere.</h2>
            <p className="body-lg">
              RBOT Platform can push analytics data to your existing BI infrastructure. Native connectors
              available for the most common enterprise analytics platforms.
            </p>
          </div>
          <div className="chips" style={{ marginTop: 32 }}>
            {integrations.map(name => (
              <span key={name} className="ichip" style={{ fontSize: 14, padding: "10px 20px" }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Tracking */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">ROI Tracking</span>
            <h2 className="d2">Prove and grow your robotics ROI over time.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p className="body-lg">
              RBOT Platform&apos;s ROI dashboard compares your actual fleet performance against the economic model built
              during your initial assessment. For every robot deployed, we track labor hours substituted, tasks
              completed, uptime delivered, and cost per task — and we map that against the projected figures your
              finance team approved. This creates a living, auditable record of robotic ROI that can be presented
              to leadership quarterly, exported for board reporting, or used to justify the next phase of
              automation investment. No more building ROI models in spreadsheets after the fact — the data is
              captured automatically and continuously from day one of deployment.
            </p>
            <p className="body-lg">
              Growing ROI over time requires more than measuring it — it requires acting on the measurement. RBOT&apos;s
              analytics are designed to surface specific, actionable recommendations. When utilization drops below
              a threshold, the platform identifies likely causes and suggests corrective actions. When task cycle
              times drift upward, the system flags it before it becomes a significant performance issue. When a
              facility&apos;s fleet is consistently operating at 95%+ utilization, RBOT generates a capacity warning and
              models the economics of adding additional robots. This continuous feedback loop transforms your
              analytics from a reporting tool into an active operational management system — one that helps you
              get more value out of every robot in your fleet.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">See the analytics in action.</h2>
          <p className="body-lg">
            We&apos;ll show you exactly how RBOT Platform would report on your fleet — with your robot types, your
            facilities, and your business case.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
            <Link href="/resources/roi-calculator" className="btn btn-g">ROI Calculator Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

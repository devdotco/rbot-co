import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Understanding the ROI of Robotic Automation — RBOT Resources",
  description: "A complete guide to calculating the ROI of robot deployments — labor costs, robot costs, integration costs, payback periods, and common mistakes to avoid.",
};

const variables = [
  {
    title: "Headcount Replaced",
    range: "0.5–2.5 FTE per robot",
    desc: "How many full-time equivalent roles the robots substitute. A single AMR handling tote transport on a single shift typically substitutes 0.5–0.8 FTE; an industrial arm running two shifts may substitute 1.5–2.5 FTE. Be conservative: robots do not fully replace human roles in most deployments — they redirect human labor to higher-value tasks.",
  },
  {
    title: "Burden Rate",
    range: "25–40% of base wage",
    desc: "The employer cost on top of base wages: payroll taxes, health insurance, workers' compensation, retirement matching, recruiting costs, and HR overhead. A $22/hr warehouse associate costs the employer approximately $28–$31/hr when burden is included. Always model fully burdened labor cost, not just base wages, or you will understate your savings significantly.",
  },
  {
    title: "Shifts Operated",
    range: "1–3 shifts",
    desc: "One of the most powerful ROI levers in robotics is that robots operate across multiple shifts without incremental labor cost. A single robot operating on two 10-hour shifts produces roughly twice the output — and twice the labor substitution — of the same robot on a single shift. Two-shift operations typically see 1.8–2.2× the ROI of single-shift deployments. Three-shift operations amplify this further.",
  },
  {
    title: "Monthly Robot Cost",
    range: "$3,000–$8,000 per robot (RaaS)",
    desc: "Under RBOT's RaaS model, the monthly cost per robot depends on robot type, size, and included services. AMRs typically run $3,000–$5,000/month all-in; collaborative robots and humanoids range from $5,000–$8,000/month depending on complexity. The RaaS cost includes hardware, software, deployment, integration, maintenance, and support — making it directly comparable to fully burdened labor cost.",
  },
  {
    title: "Integration Cost",
    range: "$50,000–$200,000 one-time",
    desc: "The one-time cost to connect your robotic fleet to your WMS, ERP, and other enterprise systems. Simple deployments with standard connectors may fall below $50K; complex multi-system integrations with custom data models can exceed $200K. This cost should be amortized over your deployment's economic life — typically 5 years — when calculating break-even timelines.",
  },
  {
    title: "Utilization Rate",
    range: "Target 85–95%",
    desc: "The percentage of available operating time the robot is actively performing tasks. A robot with 100 available hours per week operating at 70% utilization produces value for 70 hours. Utilization below 70% is often a break-even threshold at typical RaaS pricing. RBOT's fleet management tools are specifically designed to maximize utilization by minimizing idle time, automating charge scheduling, and optimizing task assignment.",
  },
  {
    title: "Uptime SLA",
    range: "99%+ target; each 1% = ~$15K/yr",
    desc: "Uptime is the percentage of scheduled operating hours during which the robot is available and functional. Planned maintenance, unplanned faults, and integration outages all reduce uptime. At a typical fleet scale, each percentage point of uptime improvement represents approximately $15,000 per year in additional task output value. This is why maintenance SLAs and fleet monitoring are as important as initial deployment quality.",
  },
  {
    title: "Payback Period",
    range: "12–24 months typical",
    desc: "The time required for cumulative labor savings to exceed total deployment cost including hardware (or RaaS commitments), integration, and change management. Well-planned RBOT deployments typically achieve payback in 14–20 months for AMRs and cobots operating two or more shifts. Humanoid and complex arm deployments in more challenging environments may extend to 24–30 months. Payback beyond 36 months generally indicates a mismatched robot selection or underestimated integration complexity.",
  },
];

export default function RoiCalculatorPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Resources · ROI Guide</span>
        <h1 className="d1">Understanding the ROI of Robotic Automation.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          A complete guide to building a defensible robot ROI model — from labor cost analysis to
          integration cost amortization, utilization targets, and payback period calculation.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get a Custom ROI Model</Link>
          <Link href="/raas" className="btn btn-g">View RaaS Pricing</Link>
        </div>
      </div>

      {/* ROI Waterfall SVG */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <svg
            viewBox="0 0 560 300"
            width="560"
            height="300"
            style={{ maxWidth: "100%", display: "block", border: "1px solid var(--bdr2)", borderRadius: 4 }}
            aria-label="ROI waterfall chart showing labor savings versus robot costs"
          >
            {/* Background */}
            <rect width="560" height="300" style={{ fill: "var(--bg1)" }} />

            {/* Header */}
            <rect width="560" height="36" style={{ fill: "var(--bg2)" }} />
            <rect y="36" width="560" height="1" style={{ fill: "var(--bdr)" }} />
            <text x="16" y="23" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t1)" }}>Annual ROI Breakdown — Sample Fleet (10 AMRs, 2 Shifts)</text>

            {/* Y axis labels */}
            <text x="16" y="68" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$1.2M</text>
            <text x="16" y="100" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$1.0M</text>
            <text x="16" y="132" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$800K</text>
            <text x="16" y="164" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$600K</text>
            <text x="16" y="196" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$400K</text>
            <text x="16" y="228" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>$200K</text>

            {/* Y axis line */}
            <line x1="50" y1="55" x2="50" y2="240" style={{ stroke: "var(--bdr2)", strokeWidth: 1 }} />

            {/* Grid lines */}
            {[68, 100, 132, 164, 196, 228].map(y => (
              <line key={y} x1="50" y1={y} x2="540" y2={y} style={{ stroke: "var(--bdr)", strokeWidth: 0.5, strokeDasharray: "3,3" }} />
            ))}

            {/* Bar 1: Total Labor Cost — $1.2M */}
            {/* $1.2M maps to y=62 (top); $0 maps to y=240. Range=178px for $1.2M */}
            {/* Each $100K = 178/12 = ~14.8px */}
            <rect x="70" y="62" width="90" height="178" rx="2" style={{ fill: "rgba(122,120,117,0.3)", stroke: "var(--bdr3)", strokeWidth: 1 }} />
            <text x="115" y="56" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>$1.2M</text>
            <text x="115" y="255" fontFamily="monospace" fontSize="8" textAnchor="middle" style={{ fill: "var(--t3)" }}>Labor Cost</text>
            <text x="115" y="264" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "var(--t3)" }}>(10 workers × 2 shifts)</text>

            {/* Connector line */}
            <line x1="160" y1="240" x2="190" y2="240" style={{ stroke: "var(--bdr2)", strokeWidth: 1, strokeDasharray: "2,2" }} />

            {/* Bar 2: Robot Cost — -$324K (reduction bar, starting from $1.2M) */}
            {/* $324K = 14.8×3.24 = ~47.9px */}
            <rect x="190" y="62" width="90" height="48" rx="2" style={{ fill: "rgba(10,174,255,0.2)", stroke: "var(--acc)", strokeWidth: 1 }} />
            <text x="235" y="56" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--acc)" }}>−$324K</text>
            <text x="235" y="255" fontFamily="monospace" fontSize="8" textAnchor="middle" style={{ fill: "var(--t3)" }}>Robot Cost</text>
            <text x="235" y="264" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "var(--t3)" }}>(RaaS × 10 × 12mo)</text>

            {/* Arrow down indicator */}
            <text x="235" y="104" fontFamily="monospace" fontSize="12" textAnchor="middle" style={{ fill: "var(--acc)" }}>↓</text>

            {/* Connector */}
            <line x1="280" y1="110" x2="310" y2="110" style={{ stroke: "var(--bdr2)", strokeWidth: 1, strokeDasharray: "2,2" }} />

            {/* Bar 3: Net Savings — $876K */}
            {/* $876K = 14.8×8.76 = ~130px above baseline */}
            <rect x="310" y="110" width="90" height="130" rx="2" style={{ fill: "rgba(34,197,94,0.2)", stroke: "var(--good)", strokeWidth: 1.5 }} />
            <text x="355" y="104" fontFamily="monospace" fontSize="10" textAnchor="middle" fontWeight="700" style={{ fill: "var(--good)" }}>$876K</text>
            <text x="355" y="255" fontFamily="monospace" fontSize="8" textAnchor="middle" style={{ fill: "var(--t3)" }}>Net Annual Savings</text>

            {/* X axis */}
            <line x1="50" y1="240" x2="540" y2="240" style={{ stroke: "var(--bdr2)", strokeWidth: 1 }} />

            {/* Payback timeline */}
            <rect x="430" y="70" width="100" height="90" rx="2" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            <text x="480" y="88" fontFamily="monospace" fontSize="8" textAnchor="middle" style={{ fill: "var(--t3)" }}>PAYBACK</text>
            <text x="480" y="108" fontFamily="monospace" fontSize="18" textAnchor="middle" fontWeight="700" style={{ fill: "var(--acc)" }}>14mo</text>
            <text x="480" y="125" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "var(--t3)" }}>Integration: $80K</text>
            <text x="480" y="138" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "var(--t3)" }}>Monthly savings: $73K</text>
            <text x="480" y="151" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "var(--t3)" }}>80K ÷ 73K = 1.1 yr</text>

            {/* Payback timeline bar */}
            <rect x="70" y="270" width="320" height="8" rx="2" style={{ fill: "var(--bdr2)" }} />
            <rect x="70" y="270" width="210" height="8" rx="2" style={{ fill: "var(--acc)", fillOpacity: 0.6 }} />
            <line x1="280" y1="264" x2="280" y2="282" style={{ stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <text x="285" y="290" fontFamily="monospace" fontSize="7" style={{ fill: "var(--acc)" }}>Month 14 — Break-Even</text>
            <text x="70" y="290" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Month 0</text>
            <text x="360" y="290" fontFamily="monospace" fontSize="7" style={{ fill: "var(--t3)" }}>Month 24</text>
          </svg>
        </div>
      </section>

      {/* Guide Intro */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">The Full Cost Model</span>
                <h2 className="d2">Robot ROI is not just hardware versus wages.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                The most common mistake in robot ROI modeling is treating the calculation as simple
                arithmetic: robot monthly cost versus worker monthly wage. This framing misses most of
                what actually determines whether a robotic deployment is financially successful. A complete
                ROI model must account for fully burdened labor cost (not just wages), integration and
                deployment costs amortized over the deployment life, utilization rates that reflect actual
                operating patterns rather than theoretical maximums, uptime SLAs that affect how much
                value the fleet actually delivers, and the shift economics that determine how many hours
                of productive work your investment produces per day.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                Integration costs are the most consistently underestimated line item in robot ROI models.
                The hardware is visible and quotable; the software integration to connect your robots to
                your WMS, ERP, and MES is not. A well-integrated robotic system where task assignments
                flow automatically from your WMS to the fleet is fundamentally more valuable than a
                system that requires manual task entry or operator oversight. But the integration cost
                is real — typically $50,000–$200,000 as a one-time investment — and must be included in
                the payback period calculation or your ROI model will overstate returns in the early years.
              </p>
              <p className="body">
                Financing structure — RaaS versus CapEx versus lease — dramatically affects the financial
                profile of a deployment without changing the underlying economics. A RaaS model converts
                all costs including hardware, integration amortization, and maintenance to a predictable
                monthly OpEx line. CapEx purchase front-loads the investment and creates depreciation
                exposure. The total five-year cost is often similar, but the risk profile, balance sheet
                impact, and flexibility to scale are very different. Finance teams should model both
                structures before committing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Formula */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">The Formula</span>
            <h2 className="d2">How to calculate robot ROI.</h2>
            <p className="body-lg">
              The core ROI calculation involves four formulas. Build them in order — each depends on
              the output of the previous one.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 40 }}>
            {[
              {
                label: "Annual Labor Cost",
                formula: "Headcount × Hourly Wage × (1 + Burden Rate) × Hours/Shift × Shifts/Day × 260 Days",
                note: "Use fully burdened wage. 260 working days assumes a standard operations calendar.",
              },
              {
                label: "Annual Robot Cost",
                formula: "Number of Robots × Monthly RaaS Cost × 12 Months",
                note: "Under RaaS, this is the complete cost — no additional maintenance, software, or service fees.",
              },
              {
                label: "Net Annual Savings",
                formula: "Annual Labor Cost − Annual Robot Cost",
                note: "If this number is negative, the robot type, count, or pricing does not support the use case.",
              },
              {
                label: "Payback Period",
                formula: "One-Time Deployment Cost ÷ Monthly Net Savings",
                note: "Include integration, site prep, and training in one-time cost. Monthly net savings = (Labor Cost − Robot Cost) ÷ 12.",
              },
            ].map(f => (
              <div
                key={f.label}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--bdr2)",
                  borderRadius: 3,
                  padding: "24px 28px",
                }}
              >
                <div className="lbl" style={{ marginBottom: 10 }}>{f.label}</div>
                <div style={{
                  fontFamily: "monospace",
                  fontSize: 14,
                  color: "var(--t1)",
                  background: "var(--bg1)",
                  border: "1px solid var(--bdr)",
                  borderRadius: 2,
                  padding: "12px 16px",
                  marginBottom: 10,
                  overflowX: "auto",
                  whiteSpace: "nowrap",
                }}>
                  {f.formula}
                </div>
                <p style={{ fontFamily: "monospace", fontSize: 11, color: "var(--t3)", lineHeight: 1.6 }}>{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variable Explanations */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Variable Reference</span>
            <h2 className="d2">What each variable means and typical ranges.</h2>
          </div>
          <div className="ind-grid">
            {variables.map((v, i) => (
              <div key={v.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{v.title}</h3>
                <div style={{ fontFamily: "monospace", fontSize: 10, color: "var(--acc)", marginBottom: 10, letterSpacing: ".04em" }}>{v.range}</div>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worked Example */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Worked Example</span>
            <h2 className="d2">A real calculation, step by step.</h2>
            <p className="body-lg">
              Ten AMRs replacing tote transport in a mid-size distribution center running two 10-hour shifts.
            </p>
          </div>
          <div className="calc" style={{ marginTop: 48 }}>
            <div className="calc-in">
              <span className="lbl">Assumptions</span>
              <div className="field">
                <label>Workers replaced per robot</label>
                <input type="text" readOnly value="0.8 FTE (0.4 per shift × 2 shifts)" style={{ cursor: "default" }} />
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Base hourly wage</label>
                  <input type="text" readOnly value="$22.00 / hr" style={{ cursor: "default" }} />
                </div>
                <div className="field">
                  <label>Burden rate</label>
                  <input type="text" readOnly value="32%" style={{ cursor: "default" }} />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Hours / shift</label>
                  <input type="text" readOnly value="10 hours" style={{ cursor: "default" }} />
                </div>
                <div className="field">
                  <label>Shifts / day</label>
                  <input type="text" readOnly value="2 shifts" style={{ cursor: "default" }} />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label>Number of robots</label>
                  <input type="text" readOnly value="10 AMRs" style={{ cursor: "default" }} />
                </div>
                <div className="field">
                  <label>Monthly RaaS cost / robot</label>
                  <input type="text" readOnly value="$4,500" style={{ cursor: "default" }} />
                </div>
              </div>
              <div className="field">
                <label>One-time integration cost</label>
                <input type="text" readOnly value="$80,000" style={{ cursor: "default" }} />
              </div>
            </div>
            <div className="calc-out">
              <span className="lbl">Results</span>
              <div className="out-row">
                <div className="out-lbl">Annual Labor Cost (8 FTE × $29.04/hr × 20hr/day × 260)</div>
                <div className="out-val">$1,208,448</div>
              </div>
              <div className="out-row">
                <div className="out-lbl">Annual Robot Cost (10 × $4,500 × 12)</div>
                <div className="out-val">$540,000</div>
              </div>
              <div className="out-row">
                <div className="out-lbl">Net Annual Savings</div>
                <div className="out-val pos">$668,448</div>
                <div className="out-note">55.3% reduction in labor cost for this workflow</div>
              </div>
              <div className="out-row">
                <div className="out-lbl">Monthly Savings</div>
                <div className="out-val pos">$55,704</div>
              </div>
              <div className="out-row">
                <div className="out-lbl">Payback Period ($80K ÷ $55,704/mo)</div>
                <div className="out-val" style={{ color: "var(--acc)" }}>1.4 months</div>
                <div className="out-note">Integration cost recovered in under 2 months at this scale</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Common Mistakes</span>
            <h2 className="d2">Where ROI models break down in practice.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                The most common ROI modeling mistake is underestimating integration costs — or omitting
                them entirely. A $50,000 integration cost on a deployment that generates $20,000 per month
                in savings adds only 2.5 months to the payback period. But when that cost is not modeled,
                the first invoice comes as a surprise that shakes executive confidence in the deployment.
                Always include integration, site preparation, training, and change management in your
                one-time cost figure. These typically add $50,000–$200,000 to a deployment budget that
                would otherwise look only at robot hardware. They are real costs, and they affect the
                payback period calculation — though they rarely change the fundamental economics of a
                well-planned deployment.
              </p>
              <p className="body">
                A second common mistake is modeling utilization at theoretical maximums. A robot that is
                &apos;capable&apos; of 95% utilization in an ideal environment will rarely reach that in the first 90
                days of a deployment, while teams are still optimizing workflows, task assignment logic,
                and charge scheduling. Model year-one utilization conservatively — 70–80% — and show
                improvement trajectories in years two and three. This produces a more honest payback
                timeline and sets realistic expectations with finance stakeholders who will hold you to
                the model you presented.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                The third common mistake is forgetting change management costs and the productivity dip
                that accompanies any major operational change. When robots are introduced into a warehouse
                or manufacturing environment, workflows change, reporting structures shift, and some workers
                must be retrained or redeployed. The cost of this transition — training time, temporarily
                reduced throughput during the ramp period, supervisor time spent managing the change — is
                real but invisible in most ROI models. Budget three to six months of reduced-efficiency
                operations and include a change management line in your deployment cost estimate. This is
                not pessimism; it is accuracy. Deployments that account for the change management period
                in the model tend to meet or exceed their financial targets because they are prepared for
                the ramp. Deployments that skip this step often disappoint stakeholders during the ramp
                phase even when the long-term economics are sound.
              </p>
              <p className="body">
                Finally, do not model uptime at 100%. Even with RBOT&apos;s 99.9% uptime SLA, planned maintenance
                windows, software updates, and edge cases will reduce available operating hours. Model
                planned downtime explicitly — typically 2–4% of scheduled hours — and treat any performance
                above that baseline as upside. This prevents the situation where every maintenance window
                feels like a deviation from plan, when in reality it was always part of the model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Get a custom ROI model built on your operation.</h2>
          <p className="body-lg">
            RBOT&apos;s assessment team builds a complete, defensible ROI model for every deployment candidate —
            including labor cost analysis, robot selection, integration cost estimation, and a five-year
            financial projection — at no cost, in five business days.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/raas" className="btn btn-g">View RaaS Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

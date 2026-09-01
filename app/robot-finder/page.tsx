import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robot Finder — RBOT",
  description: "Find the right robot for your operation. A guide to humanoid robots, AMRs, industrial arms, cobots, warehouse automation, and inspection systems — with selection criteria.",
};

const robotTypes = [
  {
    id: "humanoid",
    title: "Humanoid Robots",
    tag: "Bipedal / General-Purpose",
    desc: "Humanoid robots — bipedal platforms designed to operate in human-built environments — represent the frontier of physical AI deployment. Figure 01, Agility Robotics' Digit, Tesla Optimus, and Apptronik Apollo are purpose-built for tasks in spaces designed for humans: navigating doorways, operating in tight aisles, loading and unloading shelves, picking from bins, and performing multi-step material handling in unstructured environments. Humanoids are best suited to operations where tasks vary frequently, environmental layouts change, or where the infrastructure to deploy fixed automation does not exist. The tradeoff is higher per-unit cost and longer deployment timelines as the technology matures. RBOT partners with the leading humanoid OEMs and has deployment experience across light manufacturing, logistics receiving, and general warehouse operations.",
    use: ["Light manufacturing", "Receiving / unloading", "Mixed-SKU picking", "General material handling", "Unstructured environments"],
  },
  {
    id: "amr",
    title: "Autonomous Mobile Robots",
    tag: "Flexible Navigation",
    desc: "Autonomous Mobile Robots are the most mature and highest-volume category of deployed robotics in industrial operations. AMRs from Fetch Robotics, MiR, Locus, 6 River Systems, and Boston Dynamics Spot navigate dynamically mapped environments using LiDAR, cameras, and onboard compute — avoiding obstacles, rerouting around congestion, and recharging autonomously. AMRs are ideal for warehousing, distribution, and manufacturing floor material transport: moving goods from receiving to storage, from storage to pack stations, from manufacturing lines to staging areas. They deploy quickly (2–6 weeks for typical environments), require no infrastructure changes, and scale linearly with fleet size. Payload capacities range from 100kg for compact AMRs to 1,000kg+ for heavy-duty platform AMRs. AMRs are the highest-ROI entry point for most first-time robotics deployments.",
    use: ["Goods-to-person delivery", "Floor transport", "Order tote movement", "Inter-zone logistics", "Outbound staging"],
  },
  {
    id: "arm",
    title: "Industrial Arms",
    tag: "High-Precision / Fixed Mount",
    desc: "Industrial robotic arms from FANUC, ABB, Yaskawa, KUKA, and Universal Robots cover the full range of payload, reach, and precision requirements in manufacturing automation. Arms are fixed-mount, 6-axis manipulators optimized for repeatable, high-precision tasks: machine tending, palletizing, welding, assembly, quality inspection, and packaging. Payload capacities range from 3kg collaborative arms designed for benchtop assembly to 1,200kg heavy industrial arms for automotive or steel handling. Industrial arms require carefully engineered end-of-arm tooling (EOAT) matched to the specific task, along with safety fencing or collaborative safety features if humans work nearby. They deliver the highest throughput and repeatability of any robot category but require more site preparation, programming, and integration work than mobile platforms. Arms are highest-ROI in applications with well-defined, repetitive tasks and high cycle time requirements.",
    use: ["Machine tending", "Palletizing / depalletizing", "Welding and assembly", "Quality inspection", "Packaging and kitting"],
  },
  {
    id: "cobot",
    title: "Collaborative Robots",
    tag: "Human-Adjacent / Flexible",
    desc: "Collaborative robots — cobots — are designed to work safely alongside human operators without traditional safety fencing. Built by Universal Robots, FANUC (CRX series), Techman, and OMRON, cobots use force/torque sensing, speed monitoring, and collision detection to operate at reduced speeds in shared workspaces. Their key value is flexibility: cobots can be deployed on a workbench, retasked to a new operation in hours, and require minimal site preparation. They are ideal for light assembly, quality inspection, screwdriving, dispensing, and material handling tasks that require fine motor control and human-robot collaboration. Typical payloads range from 3–20kg. While cobots operate more slowly than full industrial arms, their redeployability and ease of programming make them ideal for operations with frequently changing product mixes, seasonal workflows, or limited floor space for traditional safety-fenced cells.",
    use: ["Bench assembly", "Quality inspection", "Screwdriving / dispensing", "Polishing and finishing", "Lab automation"],
  },
  {
    id: "warehouse",
    title: "Warehouse Automation",
    tag: "Goods-to-Person / Storage / Sortation",
    desc: "Warehouse automation encompasses a broad category of robotics purpose-built for high-volume storage, retrieval, and sortation at scale. AutoStore, Geek+, Hai Robotics, and KNAPP build goods-to-person systems where robots retrieve bins from dense 3D storage grids and deliver them to human pick stations, dramatically reducing travel time and increasing pick rates. Crossbelt sorters and linear induction sortation systems handle high-volume e-commerce parcel sorting. These systems are capital-intensive but deliver transformative throughput improvements for high-SKU-count operations: typical improvements of 3–5× pick-rate compared to traditional manual picking, with reduced error rates and improved inventory accuracy. Warehouse automation requires significant upfront facility planning, racking or grid infrastructure installation, and WMS integration. RBOT can assess whether your order profile and facility configuration support a goods-to-person or sortation deployment.",
    use: ["High-density storage", "Goods-to-person picking", "E-commerce fulfillment", "Returns processing", "Parcel sortation"],
  },
  {
    id: "inspection",
    title: "Inspection & Monitoring",
    tag: "Autonomous Routes / Sensors / Reporting",
    desc: "Inspection robots conduct autonomous inspection routes through industrial environments — monitoring equipment health, detecting leaks, reading gauges, checking safety conditions, and capturing visual and thermal data across large facilities. Platforms from Boston Dynamics (Spot), ANYbotics (ANYmal), and specialized drone systems conduct scheduled and on-demand inspection missions in environments too dangerous or too large for consistent human inspection: oil refineries, power plants, data centers, warehouses, and outdoor infrastructure. Inspection robots dramatically reduce the cost and frequency required for human inspections while improving consistency and data capture. Sensor payloads include thermal cameras, gas detectors, acoustic sensors, visual cameras, and LiDAR. Data is streamed back to the RBOT Platform in real time, with anomaly detection algorithms that flag readings outside normal operating ranges and trigger maintenance work orders automatically.",
    use: ["Facility security rounds", "Equipment health monitoring", "Leak and gas detection", "Thermal anomaly detection", "Compliance documentation"],
  },
];

const criteria = [
  { title: "Payload Capacity", desc: "The maximum weight your robot must handle per cycle. Account for the heaviest product in your SKU mix plus the weight of any tooling. Sizing robots at 80% of max payload provides safety margin and extends component life." },
  { title: "Operating Environment", desc: "Floor surface quality, aisle width, ceiling height, ambient temperature, lighting conditions, and the degree of environmental variability. Some robots require flat, marked floors; others navigate dynamically mapped spaces." },
  { title: "Speed & Throughput", desc: "Required task cycles per hour, shift, or day. Compare robot cycle times against your peak throughput demand with margin for downtime, charging, and maintenance windows." },
  { title: "Integration Complexity", desc: "How deeply does the robot need to interact with your WMS, ERP, or MES? Simple AMRs can operate with minimal integration; complex arms or warehouse automation systems require extensive system connectivity." },
  { title: "Total Cost of Ownership", desc: "Hardware, software, integration, deployment, training, maintenance, and financing. RaaS models shift most of this to OpEx; CapEx purchases front-load the cost with ongoing maintenance exposure." },
  { title: "Manufacturer Support", desc: "OEM support quality varies significantly. Evaluate uptime guarantees, field service response times, parts availability, and the manufacturer's financial stability and long-term roadmap." },
  { title: "Safety Requirements", desc: "Does the robot operate near human workers? Safety standards (ISO 10218, TS 15066, ANSI/RIA) govern collaborative operation, speed limits, and force thresholds. Compliance is non-negotiable." },
  { title: "Scalability", desc: "Can you add units incrementally, or does the system require a full redesign to scale? AMRs and cobots scale linearly; fixed automation systems often require phased infrastructure expansion." },
];

const steps = [
  { n: "01", title: "Assess Requirements", desc: "Document your workflow requirements: tasks, payloads, throughput, environment, integration needs, and financial constraints." },
  { n: "02", title: "Map to Robot Types", desc: "RBOT maps your requirements to the appropriate robot categories based on technical fit, not manufacturer relationships." },
  { n: "03", title: "Evaluate Manufacturers", desc: "Within the right robot type, RBOT evaluates specific OEMs on technical performance, support quality, pricing, and operational track record." },
  { n: "04", title: "Model Economics", desc: "RBOT builds a detailed economic model: labor savings, robot costs, integration costs, deployment timeline, and 5-year ROI projection." },
];

export default function RobotFinderPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Robot Finder</span>
        <h1 className="d1">Find the right robot for your operation.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          Six categories of industrial robots. Dozens of manufacturers. One structured selection process
          that matches your operation to the technology that delivers the best ROI.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get a Robot Recommendation</Link>
          <Link href="/robots" className="btn btn-g">View All Robot Types</Link>
        </div>
      </div>

      {/* Robot Category SVG Mockup */}
      <section style={{ borderTop: "1px solid var(--bdr)", padding: "0 var(--pad)" }}>
        <div className="wrap" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <svg
            viewBox="0 0 520 280"
            width="520"
            height="280"
            style={{ maxWidth: "100%", display: "block", border: "1px solid var(--bdr2)", borderRadius: 4 }}
            aria-label="Robot category selection UI with 6 robot types"
          >
            {/* Background */}
            <rect width="520" height="280" style={{ fill: "var(--bg1)" }} />
            {/* Header */}
            <rect width="520" height="36" style={{ fill: "var(--bg2)" }} />
            <rect y="36" width="520" height="1" style={{ fill: "var(--bdr)" }} />
            <text x="16" y="23" fontFamily="monospace" fontSize="11" style={{ fill: "var(--t1)" }}>Select Robot Category</text>
            <text x="16" y="34" fontFamily="monospace" fontSize="8" style={{ fill: "var(--t3)" }}>Step 1 of 4 — Requirements Matching</text>

            {/* 3x2 robot card grid */}
            {/* Row 1 */}
            {/* Card 1: Humanoid — HIGHLIGHTED */}
            <rect x="14" y="48" width="152" height="108" rx="3" style={{ fill: "var(--acc-bg)", stroke: "var(--acc)", strokeWidth: 1.5 }} />
            {/* Humanoid silhouette: circle head + rect body + legs */}
            <circle cx="90" cy="80" r="14" style={{ fill: "none", stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <rect x="80" y="95" width="20" height="28" rx="2" style={{ fill: "none", stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <line x1="80" y1="100" x2="68" y2="118" style={{ stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <line x1="100" y1="100" x2="112" y2="118" style={{ stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <line x1="84" y1="123" x2="80" y2="143" style={{ stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <line x1="96" y1="123" x2="100" y2="143" style={{ stroke: "var(--acc)", strokeWidth: 1.5 }} />
            <text x="90" y="155" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--acc)" }}>Humanoid</text>
            <rect x="60" y="42" width="60" height="10" rx="2" style={{ fill: "var(--acc)" }} />
            <text x="90" y="51" fontFamily="monospace" fontSize="7" textAnchor="middle" style={{ fill: "#040404" }}>SELECTED</text>

            {/* Card 2: AMR */}
            <rect x="178" y="48" width="152" height="108" rx="3" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            {/* AMR silhouette: low flat rectangle with wheels */}
            <rect x="218" y="88" width="72" height="30" rx="4" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="228" cy="122" r="8" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="272" cy="122" r="8" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <rect x="234" y="82" width="32" height="6" rx="2" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1 }} />
            <text x="254" y="155" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>AMR</text>

            {/* Card 3: Arm */}
            <rect x="342" y="48" width="164" height="108" rx="3" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            {/* Arm silhouette: angled arm segments */}
            <rect x="400" y="120" width="24" height="16" rx="2" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="412" y1="120" x2="400" y2="90" style={{ stroke: "var(--t3)", strokeWidth: 2 }} />
            <line x1="400" y1="90" x2="420" y2="70" style={{ stroke: "var(--t3)", strokeWidth: 2 }} />
            <circle cx="400" cy="90" r="4" style={{ fill: "var(--bdr2)", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="420" cy="70" r="4" style={{ fill: "var(--bdr2)", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="420" y1="70" x2="436" y2="60" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="420" y1="70" x2="430" y2="80" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <text x="424" y="155" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>Industrial Arm</text>

            {/* Row 2 */}
            {/* Card 4: Cobot */}
            <rect x="14" y="168" width="152" height="100" rx="3" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            <rect x="74" y="196" width="32" height="8" rx="2" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="90" y1="196" x2="82" y2="178" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="82" y1="178" x2="94" y2="168" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="82" cy="178" r="3" style={{ fill: "var(--bdr3)", stroke: "var(--t3)", strokeWidth: 1 }} />
            <circle cx="94" cy="168" r="5" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="94" y1="168" x2="110" y2="160" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="110" cy="160" r="5" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <text x="90" y="262" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>Cobot</text>

            {/* Card 5: Warehouse */}
            <rect x="178" y="168" width="152" height="100" rx="3" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            <rect x="218" y="196" width="72" height="40" rx="2" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="224" y1="196" x2="224" y2="180" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="235" y1="196" x2="235" y2="180" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="246" y1="196" x2="246" y2="180" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <rect x="220" y="178" width="68" height="4" rx="1" style={{ fill: "var(--t3)", fillOpacity: 0.3 }} />
            <text x="254" y="262" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>Warehouse Auto.</text>

            {/* Card 6: Inspection */}
            <rect x="342" y="168" width="164" height="100" rx="3" style={{ fill: "var(--bg2)", stroke: "var(--bdr2)", strokeWidth: 1 }} />
            {/* Inspection robot: four-legged */}
            <rect x="394" y="210" width="48" height="16" rx="3" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="400" y1="226" x2="394" y2="242" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="408" y1="226" x2="404" y2="242" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="428" y1="226" x2="432" y2="242" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <line x1="436" y1="226" x2="442" y2="242" style={{ stroke: "var(--t3)", strokeWidth: 1.5 }} />
            <circle cx="418" cy="204" r="6" style={{ fill: "none", stroke: "var(--t3)", strokeWidth: 1 }} />
            <text x="424" y="262" fontFamily="monospace" fontSize="9" textAnchor="middle" style={{ fill: "var(--t2)" }}>Inspection</text>
          </svg>
        </div>
      </section>

      {/* Intro Paragraphs */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <div className="sec-hd">
                <span className="lbl">Why Selection is Complex</span>
                <h2 className="d2">The wrong robot is worse than no robot.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                Robot selection is not a catalog exercise. Choosing the wrong robot type for your operation
                means deploying technology that cannot meet your throughput requirements, cannot safely
                operate in your environment, or requires integration work that overwhelms the value it
                delivers. We have seen companies deploy AMRs where fixed arms would have delivered three
                times the ROI. We have seen industrial arms deployed in spaces that required cobots.
                We have seen warehouse automation systems purchased for operations where the order profiles
                did not justify the infrastructure investment. These mistakes are expensive and slow to unwind.
              </p>
            </div>
            <div>
              <p className="body" style={{ marginBottom: 20 }}>
                Load requirements are the most fundamental selection constraint. A robot that can carry 100kg
                is not a starting point for a task that requires 250kg of payload capacity — and sizing robots
                too large for the task wastes both capital and floor space. Beyond payload, environment
                constraints shape the options significantly: floor surface quality, aisle widths, ceiling
                heights, ambient temperature ranges, and the presence of human workers all determine which
                robot categories are technically viable before any economic analysis begins.
              </p>
              <p className="body">
                Integration requirements — how deeply the robot must connect with your WMS, ERP, or MES —
                are often underestimated in early selection discussions. A robot that is technically ideal
                for your workflow but requires six months of integration engineering to become useful in
                your operation represents a very different investment than a plug-and-play deployment. RBOT&apos;s
                selection process models all of these constraints simultaneously, producing a ranked list
                of viable robot types and specific manufacturer recommendations based on your actual operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Robot Type Guide */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Robot Type Guide</span>
            <h2 className="d2">Six categories. Different problems. Different economics.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 48, border: "1px solid var(--bdr)", borderRadius: 3, overflow: "hidden" }}>
            {robotTypes.map((rt, i) => (
              <div
                key={rt.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "220px 1fr",
                  gap: 0,
                  borderBottom: i < robotTypes.length - 1 ? "1px solid var(--bdr)" : undefined,
                  background: i % 2 === 0 ? "var(--bg)" : "var(--bg1)",
                }}
              >
                <div style={{ padding: "28px 24px", borderRight: "1px solid var(--bdr)" }}>
                  <div className="lbl" style={{ marginBottom: 8 }}>0{i + 1}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-.025em", marginBottom: 6 }}>{rt.title}</h3>
                  <span style={{ fontFamily: "monospace", fontSize: 10, color: "var(--acc)", letterSpacing: ".06em" }}>{rt.tag}</span>
                  <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 4 }}>
                    {rt.use.map(u => (
                      <span key={u} style={{ fontFamily: "monospace", fontSize: 10, color: "var(--t3)", display: "flex", alignItems: "center", gap: 6 }}>
                        <span style={{ color: "var(--acc)" }}>→</span> {u}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "28px 28px" }}>
                  <p className="body">{rt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Criteria */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Selection Criteria</span>
            <h2 className="d2">Eight factors that determine the right robot.</h2>
          </div>
          <div className="ind-grid">
            {criteria.map((c, i) => (
              <div key={c.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How RBOT Selects */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">How RBOT Selects</span>
            <h2 className="d2">A structured selection process, not a catalog browse.</h2>
            <p className="body-lg">
              RBOT&apos;s robot selection is embedded in the assessment process. We follow four steps to arrive
              at a specific recommendation with modeled economics.
            </p>
          </div>
          <div className="process" style={{ gridTemplateColumns: "repeat(4, 1fr)", marginTop: 52 }}>
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

      {/* Assessment CTA Emphasis */}
      <section className="sec">
        <div className="wrap">
          <div style={{
            background: "var(--acc-bg)",
            border: "1px solid var(--acc-bdr)",
            borderRadius: 4,
            padding: "56px 48px",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}>
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 14, color: "var(--acc)" }}>Free Assessment</span>
              <h2 className="d2" style={{ marginBottom: 16 }}>Get a robot recommendation for your specific operation.</h2>
              <p className="body-lg">
                RBOT&apos;s assessment team will analyze your workflows, payloads, environment, and integration
                requirements — and deliver a specific robot type recommendation with a full ROI model,
                in five business days.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link href="/assessment" className="btn btn-p" style={{ whiteSpace: "nowrap", padding: "14px 28px", fontSize: 15 }}>
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">The right robot changes the economics.</h2>
          <p className="body-lg">
            Start with an RBOT assessment and walk away with a vendor-neutral recommendation backed by
            a detailed ROI model built on your actual operation data.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Free Assessment</Link>
            <Link href="/robots" className="btn btn-g">Browse Robot Types</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

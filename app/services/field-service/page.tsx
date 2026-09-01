import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Field Service | RBOT — Expert Technicians for Your Robot Fleet",
  description:
    "200+ certified technicians across the US. 4-hour average on-site response. Preventive maintenance, emergency repairs, parts logistics, and safety inspections — SLA-backed.",
};

const capabilities = [
  {
    title: "Mechanical Repair",
    desc: "Drive unit replacement, joint and actuator service, end-effector repair, structural frame inspection, and hardware-level diagnostics on all major robot platforms.",
  },
  {
    title: "Electronics & Controls",
    desc: "Motor controller replacement, power supply diagnostics, safety relay inspection, sensor calibration, and electrical harness repair using OEM-grade components.",
  },
  {
    title: "Software & Firmware",
    desc: "Firmware version management, on-site software recovery, fleet management agent reinstallation, navigation map correction, and integration layer troubleshooting.",
  },
  {
    title: "Safety Inspection",
    desc: "ANSI/RIA R15.06-compliant safety audits, emergency stop verification, safety scanner recalibration, and annual inspection documentation for compliance records.",
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled PM visits executed on monthly, quarterly, and annual intervals — covering all consumable replacement, lubrication, sensor cleaning, and functional verification.",
  },
  {
    title: "Parts & Logistics",
    desc: "Critical spare parts held at regional depots within 150 miles of every managed site. 48-hour parts guarantee for any component required for non-stocked repairs.",
  },
];

const stats = [
  { value: "200+", label: "Certified technicians across the US" },
  { value: "4 hr", label: "Average on-site response for critical failures" },
  { value: "92%", label: "First-visit resolution rate across all repair types" },
  { value: "48 hr", label: "Parts guarantee for any required component" },
];

const tiers = [
  {
    name: "Standard",
    desc: "Scheduled maintenance and next-business-day response for non-critical repairs.",
    response: "Next business day",
    hours: "8am–6pm, Mon–Fri",
    partsGuarantee: "5 business days",
    pm: "Quarterly PM visits",
    feat: false,
  },
  {
    name: "Priority",
    desc: "4-hour on-site response for critical failures and same-day response for major issues.",
    response: "4 hours (critical)",
    hours: "7am–8pm, Mon–Sat",
    partsGuarantee: "48 hours",
    pm: "Monthly PM visits",
    feat: true,
  },
  {
    name: "Elite",
    desc: "2-hour on-site response, dedicated regional technician, and same-day parts from on-site spares cache.",
    response: "2 hours (critical)",
    hours: "24/7/365",
    partsGuarantee: "On-site spares cache",
    pm: "Monthly PM + quarterly full audit",
    feat: false,
  },
];

export default function FieldServicePage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Field Service</span>
        <h1 className="d1">Expert hands when your robots need them.</h1>
        <p className="body-lg" style={{ maxWidth: 560, marginBottom: 32 }}>
          RBOT deploys 200+ certified technicians across the United States with a 4-hour average
          on-site response. Preventive maintenance, emergency repairs, and parts logistics — all
          under a single SLA with your managed operations contract.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get Field Service Coverage</Link>
          <Link href="/services/managed" className="btn btn-g">Managed Operations</Link>
        </div>
      </div>

      {/* Dispatch Map SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Technician Network</span>
            <h2 className="d2">Coverage where your operations run.</h2>
            <p className="body-lg">
              RBOT maintains regional technician teams in every major US industrial market. When
              a critical fault is diagnosed remotely by the NOC, the nearest certified technician
              is dispatched automatically. Regional parts depots ensure that components arrive
              alongside the technician rather than days later.
            </p>
          </div>

          <div style={{ overflowX: "auto", marginTop: 48 }}>
            <svg
              width="540"
              height="280"
              viewBox="0 0 540 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 460, width: "100%", maxWidth: 540 }}
              aria-label="Technician dispatch map showing coverage from Chicago, Dallas, Atlanta, Phoenix, and Seattle"
            >
              <defs>
                <marker id="fs-arr" viewBox="0 0 8 6" refX="8" refY="3" markerWidth="8" markerHeight="6" orient="auto" markerUnits="userSpaceOnUse">
                  <path d="M0,0 L8,3 L0,6 Z" fill="var(--acc)" opacity=".5" />
                </marker>
              </defs>

              {/* Simplified US map polygon */}
              <polygon
                points="
                  85,32 110,22 160,28 220,25 285,30 355,28 410,38
                  435,52 450,75 445,100 440,120 430,142 415,158
                  400,175 390,200 378,215 365,200 345,185 320,178
                  295,185 270,192 248,200 225,210 200,208 182,198
                  160,185 130,175 100,168 80,150 68,125 65,100
                  70,72 80,50
                "
                fill="var(--bg2)"
                stroke="var(--bdr3)"
                strokeWidth="1.5"
                opacity=".9"
              />

              {/* Gulf coast indent */}
              <polygon
                points="248,200 265,210 282,218 295,210 295,185"
                fill="var(--bg1)"
                stroke="var(--bdr3)"
                strokeWidth="1"
              />

              {/* Great Lakes cutout (rough) */}
              <ellipse cx="350" cy="65" rx="20" ry="10" fill="var(--bg1)" opacity=".7" />
              <ellipse cx="370" cy="72" rx="14" ry="8" fill="var(--bg1)" opacity=".6" />

              {/* Grid lines (subtle) */}
              {[60, 100, 140, 180].map((y) => (
                <line key={y} x1="68" y1={y} x2="450" y2={y} stroke="var(--bdr)" strokeWidth=".5" opacity=".5" />
              ))}
              {[120, 180, 240, 300, 360, 420].map((x) => (
                <line key={x} x1={x} y1="22" x2={x} y2="218" stroke="var(--bdr)" strokeWidth=".5" opacity=".5" />
              ))}

              {/* Central dispatch hub (Kansas City area) */}
              <circle cx="265" cy="115" r="12" fill="var(--acc-bg)" stroke="var(--acc)" strokeWidth="1.5" />
              <circle cx="265" cy="115" r="5" fill="var(--acc)" />
              <text x="265" y="136" textAnchor="middle" fontSize="8" fill="var(--acc)" fontFamily="var(--font-mono,monospace)" letterSpacing=".05em">RBOT NOC</text>

              {/* City: Chicago */}
              <circle cx="350" cy="80" r="7" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <circle cx="350" cy="80" r="3" fill="var(--good)" />
              <text x="362" y="78" fontSize="9" fill="var(--t1)" fontWeight="500">Chicago</text>
              <text x="362" y="88" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">32 techs</text>
              {/* Robot customer site near Chicago */}
              <rect x="388" y="58" width="12" height="12" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <circle cx="394" cy="63" r="2" fill="var(--acc)" opacity=".6" />
              {/* Dispatch line */}
              <line x1="277" y1="115" x2="343" y2="83" stroke="var(--acc)" strokeWidth="1" strokeDasharray="5,4" opacity=".4" markerEnd="url(#fs-arr)" />

              {/* City: Dallas */}
              <circle cx="225" cy="178" r="7" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <circle cx="225" cy="178" r="3" fill="var(--good)" />
              <text x="236" y="176" fontSize="9" fill="var(--t1)" fontWeight="500">Dallas</text>
              <text x="236" y="186" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">28 techs</text>
              {/* Robot customer site */}
              <rect x="200" y="195" width="12" height="12" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <circle cx="206" cy="200" r="2" fill="var(--acc)" opacity=".6" />
              {/* Dispatch line */}
              <line x1="265" y1="127" x2="230" y2="171" stroke="var(--acc)" strokeWidth="1" strokeDasharray="5,4" opacity=".4" markerEnd="url(#fs-arr)" />

              {/* City: Atlanta */}
              <circle cx="385" cy="158" r="7" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <circle cx="385" cy="158" r="3" fill="var(--good)" />
              <text x="395" y="156" fontSize="9" fill="var(--t1)" fontWeight="500">Atlanta</text>
              <text x="395" y="166" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">24 techs</text>
              {/* Robot customer site */}
              <rect x="415" y="142" width="12" height="12" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <circle cx="421" cy="147" r="2" fill="var(--acc)" opacity=".6" />
              {/* Dispatch line */}
              <line x1="275" y1="121" x2="378" y2="157" stroke="var(--acc)" strokeWidth="1" strokeDasharray="5,4" opacity=".4" markerEnd="url(#fs-arr)" />

              {/* City: Phoenix */}
              <circle cx="125" cy="158" r="7" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <circle cx="125" cy="158" r="3" fill="var(--good)" />
              <text x="136" y="156" fontSize="9" fill="var(--t1)" fontWeight="500">Phoenix</text>
              <text x="136" y="166" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">18 techs</text>
              {/* Robot customer site */}
              <rect x="100" y="138" width="12" height="12" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <circle cx="106" cy="143" r="2" fill="var(--acc)" opacity=".6" />
              {/* Dispatch line */}
              <line x1="254" y1="117" x2="132" y2="155" stroke="var(--acc)" strokeWidth="1" strokeDasharray="5,4" opacity=".4" markerEnd="url(#fs-arr)" />

              {/* City: Seattle */}
              <circle cx="115" cy="52" r="7" fill="var(--bg3)" stroke="var(--bdr3)" strokeWidth="1" />
              <circle cx="115" cy="52" r="3" fill="var(--good)" />
              <text x="126" y="50" fontSize="9" fill="var(--t1)" fontWeight="500">Seattle</text>
              <text x="126" y="60" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">22 techs</text>
              {/* Robot customer site */}
              <rect x="90" y="35" width="12" height="12" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <circle cx="96" cy="40" r="2" fill="var(--acc)" opacity=".6" />
              {/* Dispatch line */}
              <line x1="257" y1="104" x2="122" y2="58" stroke="var(--acc)" strokeWidth="1" strokeDasharray="5,4" opacity=".4" markerEnd="url(#fs-arr)" />

              {/* Legend */}
              <rect x="390" y="235" width="135" height="38" rx="2" fill="var(--bg3)" stroke="var(--bdr2)" strokeWidth="1" />
              <circle cx="403" cy="246" r="3" fill="var(--good)" />
              <text x="411" y="250" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">Regional depot</text>
              <rect x="399" y="256" width="8" height="8" rx="1" fill="var(--bg2)" stroke="var(--acc-bdr)" strokeWidth="1" />
              <text x="411" y="263" fontSize="7.5" fill="var(--t3)" fontFamily="var(--font-mono,monospace)">Customer site</text>

              {/* Title */}
              <text x="20" y="268" fontSize="8" fill="var(--t3)" fontFamily="var(--font-mono,monospace)" letterSpacing=".06em">RBOT FIELD SERVICE NETWORK — CONTINENTAL US</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div className="sec-hd" style={{ marginBottom: 0 }}>
              <span className="lbl">The Challenge</span>
              <h2 className="d2">Robots are complex. Downtime is expensive. OEM support is slow.</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <p className="body-lg">
                Modern industrial robots are sophisticated electromechanical systems. A single
                mobile robot may contain a dozen sensors, multiple motor controllers, a real-time
                operating system, and several proprietary software layers — any of which can fail
                in ways that a general maintenance technician cannot diagnose. When a robot stops
                mid-shift, the clock is running: each idle robot in a high-throughput warehouse
                typically represents $400–$1,200 in lost throughput per hour, depending on the
                workflow.
              </p>
              <p className="body-lg">
                OEM field service is the traditional answer, but it comes with structural
                disadvantages. Manufacturer service teams are optimized for installation and
                warranty claims — not for ongoing operational support. Typical OEM response times
                run 48–72 hours for non-emergency service and longer for parts procurement.
                When you are running a multi-manufacturer fleet, you are also managing multiple
                service contracts, multiple escalation paths, and multiple parts suppliers
                simultaneously. RBOT consolidates all of that under a single contract, with a
                single response commitment, regardless of robot brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Service Tiers</span>
            <h2 className="d2">Field service structured around your uptime requirements.</h2>
            <p className="body-lg">
              Every RBOT field service tier includes all six capability areas. The tiers differ by
              response time commitment, coverage hours, and parts logistics model.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 48 }}>
            {tiers.map((tier) => (
              <div key={tier.name} className={`raas-card${tier.feat ? " feat" : ""}`} style={{ borderRadius: 3 }}>
                <div className="raas-lbl">{tier.name}</div>
                <p className="raas-note" style={{ marginBottom: 24 }}>{tier.desc}</p>
                <ul className="raas-feats">
                  <li>Response: <strong>{tier.response}</strong></li>
                  <li>Hours: <strong>{tier.hours}</strong></li>
                  <li>Parts: <strong>{tier.partsGuarantee}</strong></li>
                  <li>{tier.pm}</li>
                </ul>
                <Link href="/assessment" className="btn btn-p btn-sm" style={{ marginTop: 24, display: "inline-flex" }}>
                  Get Coverage
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Capabilities */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 600 }}>
            <span className="lbl">Team Capabilities</span>
            <h2 className="d2">Certified across every layer of the robot stack.</h2>
            <p className="body-lg">
              RBOT field technicians are certified on all major robot platforms and trained across
              the full technical stack — mechanical, electrical, software, and safety. Every
              technician undergoes a minimum 120 hours of platform-specific certification before
              being deployed to customer sites.
            </p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {capabilities.map((cap) => (
              <div key={cap.title} className="ind-card">
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Stats */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)", borderRadius: 3, overflow: "hidden" }}>
            {stats.map((stat) => (
              <div key={stat.value} style={{ background: "var(--bg)", padding: "36px 28px" }}>
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 700,
                    letterSpacing: "-.04em",
                    color: "var(--acc)",
                    fontFamily: "var(--font-mono,monospace)",
                    marginBottom: 10,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <p className="body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive Maintenance */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <div className="sec-hd" style={{ marginBottom: 24 }}>
                <span className="lbl">Preventive Maintenance</span>
                <h2 className="d2">The best repair is the one that never happens.</h2>
              </div>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                RBOT&apos;s preventive maintenance program is built around manufacturer-specified
                intervals and supplemented by data from the remote monitoring platform. Monthly PM
                visits cover consumable replacement — drive wheel inspection and swap as needed,
                battery health testing, safety scanner lens cleaning, lidar calibration verification,
                and end-effector wear assessment. Quarterly visits add a full software audit:
                firmware version verification, navigation map integrity checks, and fleet management
                agent health review. The annual inspection is a comprehensive review that satisfies
                ANSI/RIA R15.06 requirements for a full safety lifecycle check.
              </p>
              <p className="body-lg">
                PM visits are scheduled automatically based on operating hours accumulated since
                the last service event, not just calendar date. A robot running double shifts in a
                high-throughput environment will trigger a monthly PM sooner than its calendar date
                if hour thresholds are reached first. This hour-based triggering is managed by
                RBOT Platform and surfaced to the NOC without requiring customer action.
              </p>
            </div>
            <div>
              <span className="lbl" style={{ display: "block", marginBottom: 20 }}>PM Schedule</span>
              {[
                {
                  interval: "Monthly",
                  items: [
                    "Drive wheel wear inspection and replacement as needed",
                    "Battery health test and cell balance check",
                    "Safety scanner lens cleaning and calibration verification",
                    "Lidar accuracy test against reference targets",
                    "End-effector wear assessment and lubrication",
                    "Software version and security patch verification",
                  ],
                },
                {
                  interval: "Quarterly",
                  items: [
                    "Full software audit: firmware, navigation maps, fleet config",
                    "Mechanical joint torque and backlash measurement",
                    "Emergency stop circuit functional test with documentation",
                    "Full safety sensor sweep and zone verification",
                  ],
                },
                {
                  interval: "Annual",
                  items: [
                    "ANSI/RIA R15.06 full safety lifecycle inspection",
                    "Complete mechanical teardown and inspection of wear components",
                    "Motor winding resistance and insulation testing",
                    "Full compliance documentation update and filing",
                  ],
                },
              ].map((pm) => (
                <div
                  key={pm.interval}
                  style={{
                    marginBottom: 24,
                    paddingBottom: 24,
                    borderBottom: "1px solid var(--bdr)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 10.5,
                      fontFamily: "var(--font-mono,monospace)",
                      letterSpacing: ".1em",
                      textTransform: "uppercase",
                      color: "var(--acc)",
                      display: "block",
                      marginBottom: 12,
                    }}
                  >
                    {pm.interval}
                  </span>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {pm.items.map((item) => (
                      <li
                        key={item}
                        style={{
                          fontSize: 12.5,
                          color: "var(--t2)",
                          lineHeight: 1.55,
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "var(--bdr3)",
                            marginTop: 7,
                            flexShrink: 0,
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Get Coverage</span>
          <h2 className="d2">Expert service when your robots need it.</h2>
          <p className="body-lg">
            Field service is available as part of a full RaaS or Managed Operations contract, or
            as a standalone service agreement for customers who own their hardware. Contact RBOT
            to discuss coverage for your specific fleet and locations.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request Field Service Coverage</Link>
            <Link href="/services/managed" className="btn btn-g">Managed Operations</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

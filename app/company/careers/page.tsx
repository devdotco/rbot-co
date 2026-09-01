import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers at RBOT — Join the Physical AI Team",
  description: "Join RBOT and help build the infrastructure for the robot economy. Open roles in engineering, operations, commercial, and corporate across our national locations.",
};

type Role = {
  title: string;
  dept: string;
  location: string;
  type: string;
};

const roles: Role[] = [
  // Engineering
  { title: "Senior Platform Engineer", dept: "Engineering", location: "Chicago, IL / Remote", type: "Full-time" },
  { title: "Robotics Integration Engineer", dept: "Engineering", location: "Chicago, IL", type: "Full-time" },
  { title: "Staff ML Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  // Operations
  { title: "Regional Deployment Manager", dept: "Operations", location: "Multiple Locations", type: "Full-time" },
  { title: "Field Service Technician — Midwest", dept: "Operations", location: "Chicago, IL", type: "Full-time" },
  { title: "Field Service Technician — Southwest", dept: "Operations", location: "Austin, TX", type: "Full-time" },
  { title: "Field Service Technician — Southeast", dept: "Operations", location: "Atlanta, GA", type: "Full-time" },
  { title: "Operations Analyst", dept: "Operations", location: "Chicago, IL / Remote", type: "Full-time" },
  // Commercial
  { title: "Enterprise Sales Engineer", dept: "Commercial", location: "Remote", type: "Full-time" },
  { title: "Customer Success Manager", dept: "Commercial", location: "Chicago, IL / Remote", type: "Full-time" },
  // Corporate
  { title: "Financial Analyst", dept: "Corporate", location: "Chicago, IL", type: "Full-time" },
  { title: "Technical Recruiter", dept: "Corporate", location: "Chicago, IL / Remote", type: "Full-time" },
];

const deptColors: Record<string, string> = {
  Engineering: "#0AAEFF",
  Operations: "#22C55E",
  Commercial: "#F59E0B",
  Corporate: "#7A7875",
};

const whyRbot = [
  {
    title: "Mission That Matters",
    desc: "Physical AI is the most consequential technological shift in manufacturing and logistics in a generation. You will spend your days accelerating its adoption in real operations, not in sandboxes.",
  },
  {
    title: "Frontier Technology",
    desc: "Humanoids, AMRs, cobots, autonomous forklifts — you will work with the most advanced robotic systems shipping today, and with the software that makes them enterprise-ready.",
  },
  {
    title: "Operator Culture",
    desc: "We are not a research lab. We are a field-operations company. Decisions get made quickly, ownership is real, and the feedback loop between your work and customer outcomes is short.",
  },
  {
    title: "Competitive Comp",
    desc: "Top-of-market base salary, meaningful equity, and a benefits package designed for the long-term. We compete with the biggest names in robotics and tech for talent, and we price accordingly.",
  },
];

const benefits = [
  { title: "Equity", desc: "Meaningful ownership in a category-defining company, with a clear path to liquidity." },
  { title: "Health, Dental & Vision", desc: "100% employer-paid premiums for you, and 80% for dependents. No deductible plans available." },
  { title: "401k + Match", desc: "4% employer match with immediate vesting. Administered through Fidelity." },
  { title: "Remote-Friendly", desc: "Engineering and commercial roles are remote-eligible. We value output over presence." },
  { title: "Robot Budget", desc: "$2,500 annual budget to buy, build, or experiment with personal robotics projects." },
  { title: "Learning Stipend", desc: "$3,000 annual learning stipend for courses, conferences, and certifications." },
];

const depts = ["Engineering", "Operations", "Commercial", "Corporate"];

export default function CareersPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Careers</span>
        <h1 className="d1" style={{ maxWidth: 760 }}>
          Build the infrastructure for the robot economy.
        </h1>
        <p className="body-lg" style={{ maxWidth: 520, marginTop: 20 }}>
          RBOT is hiring operators, engineers, and builders who want to deploy the most
          advanced robotic systems in the world — and keep them running.
        </p>
        <div className="btn-row" style={{ marginTop: 28 }}>
          <a href="#open-roles" className="btn btn-p">View Open Roles</a>
          <Link href="/company/about" className="btn btn-g">About RBOT</Link>
        </div>
      </div>

      {/* Org Chart SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Team Structure</span>
            <h2 className="d2">How we are organized.</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <svg
              width="500"
              height="260"
              viewBox="0 0 500 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 400 }}
            >
              {/* Root: RBOT */}
              <rect x="185" y="10" width="130" height="44" rx="2" fill="#161616" stroke="#2C2C2C" strokeWidth="1" />
              <text x="250" y="28" textAnchor="middle" fill="#EDEAE5" fontSize="11" fontWeight="600" fontFamily="monospace">RBOT</text>
              <text x="250" y="42" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">~180 employees</text>

              {/* Vertical from root */}
              <line x1="250" y1="54" x2="250" y2="74" stroke="#2C2C2C" strokeWidth="1" />
              {/* Horizontal bar */}
              <line x1="60" y1="74" x2="440" y2="74" stroke="#2C2C2C" strokeWidth="1" />

              {/* Engineering */}
              <line x1="60" y1="74" x2="60" y2="94" stroke="#2C2C2C" strokeWidth="1" />
              <rect x="10" y="94" width="100" height="40" rx="2" fill="#0D1A26" stroke="#0AAEFF" strokeWidth="1" strokeOpacity="0.5" />
              <text x="60" y="109" textAnchor="middle" fill="#0AAEFF" fontSize="10" fontWeight="600" fontFamily="monospace">Engineering</text>
              <text x="60" y="122" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">24–32 people</text>

              {/* Engineering sub-boxes */}
              <line x1="35" y1="134" x2="35" y2="150" stroke="#1A2A3A" strokeWidth="1" />
              <rect x="8" y="150" width="54" height="30" rx="2" fill="#0D1A26" stroke="#0AAEFF" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="35" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Platform</text>
              <text x="35" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">12–16</text>

              <line x1="85" y1="134" x2="85" y2="150" stroke="#1A2A3A" strokeWidth="1" />
              <rect x="58" y="150" width="54" height="30" rx="2" fill="#0D1A26" stroke="#0AAEFF" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="85" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Integration</text>
              <text x="85" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">12–16</text>

              {/* Operations */}
              <line x1="185" y1="74" x2="185" y2="94" stroke="#2C2C2C" strokeWidth="1" />
              <rect x="135" y="94" width="100" height="40" rx="2" fill="#0D2010" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.5" />
              <text x="185" y="109" textAnchor="middle" fill="#22C55E" fontSize="10" fontWeight="600" fontFamily="monospace">Operations</text>
              <text x="185" y="122" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">80–100 people</text>

              <line x1="160" y1="134" x2="160" y2="150" stroke="#1A3020" strokeWidth="1" />
              <rect x="133" y="150" width="54" height="30" rx="2" fill="#0D2010" stroke="#22C55E" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="160" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Deployment</text>
              <text x="160" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">20–30</text>

              <line x1="212" y1="134" x2="212" y2="150" stroke="#1A3020" strokeWidth="1" />
              <rect x="185" y="150" width="54" height="30" rx="2" fill="#0D2010" stroke="#22C55E" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="212" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Field Svc.</text>
              <text x="212" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">60–70</text>

              {/* Commercial */}
              <line x1="315" y1="74" x2="315" y2="94" stroke="#2C2C2C" strokeWidth="1" />
              <rect x="265" y="94" width="100" height="40" rx="2" fill="#251A05" stroke="#F59E0B" strokeWidth="1" strokeOpacity="0.5" />
              <text x="315" y="109" textAnchor="middle" fill="#F59E0B" fontSize="10" fontWeight="600" fontFamily="monospace">Commercial</text>
              <text x="315" y="122" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">30–40 people</text>

              <line x1="290" y1="134" x2="290" y2="150" stroke="#2C2010" strokeWidth="1" />
              <rect x="263" y="150" width="54" height="30" rx="2" fill="#251A05" stroke="#F59E0B" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="290" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Sales</text>
              <text x="290" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">16–20</text>

              <line x1="340" y1="134" x2="340" y2="150" stroke="#2C2010" strokeWidth="1" />
              <rect x="313" y="150" width="54" height="30" rx="2" fill="#251A05" stroke="#F59E0B" strokeWidth="0.7" strokeOpacity="0.3" />
              <text x="340" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">CS</text>
              <text x="340" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">14–20</text>

              {/* Corporate */}
              <line x1="440" y1="74" x2="440" y2="94" stroke="#2C2C2C" strokeWidth="1" />
              <rect x="390" y="94" width="100" height="40" rx="2" fill="#181818" stroke="#454340" strokeWidth="1" />
              <text x="440" y="109" textAnchor="middle" fill="#7A7875" fontSize="10" fontWeight="600" fontFamily="monospace">Corporate</text>
              <text x="440" y="122" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">20–28 people</text>

              <line x1="415" y1="134" x2="415" y2="150" stroke="#222222" strokeWidth="1" />
              <rect x="388" y="150" width="54" height="30" rx="2" fill="#181818" stroke="#2C2C2C" strokeWidth="0.7" />
              <text x="415" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">Finance/Legal</text>
              <text x="415" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">10–14</text>

              <line x1="463" y1="134" x2="463" y2="150" stroke="#222222" strokeWidth="1" />
              <rect x="436" y="150" width="54" height="30" rx="2" fill="#181818" stroke="#2C2C2C" strokeWidth="0.7" />
              <text x="463" y="162" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace">People</text>
              <text x="463" y="173" textAnchor="middle" fill="#454340" fontSize="7" fontFamily="monospace">10–14</text>

              <text x="250" y="248" textAnchor="middle" fill="#454340" fontSize="8" fontFamily="monospace" letterSpacing="0.12em">RBOT ORGANIZATIONAL STRUCTURE · 2026</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Why RBOT */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Why RBOT</span>
            <h2 className="d2">Why operators and engineers choose us.</h2>
          </div>
          <div className="ind-grid">
            {whyRbot.map((w, i) => (
              <div key={w.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="sec" id="open-roles">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Open Roles</span>
            <h2 className="d2">Join the team.</h2>
            <p className="body-lg" style={{ maxWidth: 480, marginTop: 12 }}>
              We are a company of operators, engineers, and builders. If that sounds like you,
              we want to hear from you.
            </p>
          </div>

          {depts.map(dept => {
            const deptRoles = roles.filter(r => r.dept === dept);
            return (
              <div key={dept} style={{ marginBottom: 48 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, paddingBottom: 12, borderBottom: "1px solid var(--bdr)" }}>
                  <span style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.14em", textTransform: "uppercase", color: deptColors[dept] }}>
                    {dept}
                  </span>
                  <span className="lbl">· {deptRoles.length} open {deptRoles.length === 1 ? "role" : "roles"}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 1, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
                  {deptRoles.map(r => (
                    <div key={r.title} style={{
                      background: "var(--bg)", padding: "22px 28px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 16, cursor: "pointer", transition: "background 0.14s"
                    }}>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 6 }}>
                          {r.title}
                        </h4>
                        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                          <span className="lbl">{r.location}</span>
                          <span className="lbl">·</span>
                          <span className="lbl">{r.type}</span>
                        </div>
                      </div>
                      <Link href="/company/contact" className="btn btn-g btn-sm" style={{ flexShrink: 0 }}>
                        Apply
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benefits */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Benefits</span>
            <h2 className="d2">We take care of our people.</h2>
          </div>
          <div className="ind-grid">
            {benefits.map((b, i) => (
              <div key={b.title} className="ind-card">
                <div className="ind-idx">0{i + 1}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Apply</span>
          <h2 className="d2">Don&apos;t see a perfect fit?</h2>
          <p className="body-lg">
            We hire for talent and trajectory, not just open headcount. If you believe your skills
            belong at RBOT, send us a note and tell us why.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/company/contact" className="btn btn-p">Send a General Application</Link>
            <Link href="/company/about" className="btn btn-g">Learn About RBOT</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

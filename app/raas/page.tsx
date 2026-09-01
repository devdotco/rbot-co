import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Robotics-as-a-Service",
  description: "Deploy robots without buying them. RBOT bundles hardware, software, deployment, integration, and maintenance into a predictable monthly cost.",
};

const included = [
  "Robot hardware (latest available models)",
  "RBOT Platform software license",
  "Deployment & site preparation",
  "ERP / WMS integration",
  "Employee training",
  "Remote monitoring & fleet management",
  "Preventive maintenance",
  "Software updates",
  "Field service (SLA-backed)",
  "Dedicated customer success manager",
];

const tiers = [
  { name: "Starter",     desc: "1–3 robots",  note: "Ideal for pilots and initial deployments" },
  { name: "Scale",       desc: "4–15 robots", note: "Growing operations with multiple workflows" },
  { name: "Enterprise",  desc: "16+ robots",  note: "Full facility coverage with custom SLAs" },
];

export default function RaaSPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Robotics-as-a-Service</span>
        <h1 className="d1">Robotics without the capital expenditure.</h1>
        <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
          RBOT bundles hardware, software, deployment, integration, maintenance, and support into a
          single predictable monthly payment. No upfront capital. No depreciation risk.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Get RaaS Pricing</Link>
          <Link href="#included" className="btn btn-g">See What&apos;s Included</Link>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div className="raas-card">
              <div className="raas-lbl">Traditional Automation</div>
              <div className="raas-price mono">$250,000+</div>
              <div className="raas-note">Upfront capital expenditure per robot system</div>
              <ul className="raas-feats">
                {["Large upfront CapEx", "5–7 year depreciation", "Integration costs separate", "Maintenance extra", "Upgrade cycles expensive", "Full risk on buyer"].map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
            <div className="raas-card feat">
              <div className="raas-lbl">RBOT RaaS</div>
              <div className="raas-price mono">OpEx Only</div>
              <div className="raas-note">Fixed monthly cost per robot, all-inclusive</div>
              <ul className="raas-feats">
                {["No upfront capital", "Hardware included", "Software included", "Deployment included", "Maintenance included", "Scale up or down anytime"].map(f => <li key={f}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="included">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">What&apos;s Included</span>
            <h2 className="d2">Everything in one monthly price.</h2>
          </div>
          <div className="chips" style={{ gap: 10 }}>
            {included.map(item => (
              <span key={item} className="ichip" style={{ fontSize: 14, padding: "9px 18px" }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Pricing Tiers</span>
            <h2 className="d2">Pricing that scales with your fleet.</h2>
            <p className="body-lg">All tiers include the same full service. Pricing per robot decreases with fleet size.</p>
          </div>
          <div className="ind-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {tiers.map((tier, i) => (
              <div key={tier.name} className={`raas-card${i === 1 ? " feat" : ""}`} style={{ borderRadius: 3 }}>
                <div className="raas-lbl">{tier.name}</div>
                <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-.02em", marginBottom: 6 }}>{tier.desc}</div>
                <div className="raas-note">{tier.note}</div>
                <Link href="/assessment" className="btn btn-p btn-sm" style={{ marginTop: 16 }}>Get Pricing</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Ready to talk numbers?</h2>
          <p className="body-lg">Get a custom RaaS quote based on your specific workflow, robot type, and fleet size.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Get a Quote</Link>
            <Link href="/#roi" className="btn btn-g">Try the ROI Calculator</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

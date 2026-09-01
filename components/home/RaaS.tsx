import Link from "next/link";

const traditional = [
  "Large upfront capital required",
  "Depreciation over 5–7 years",
  "Integration costs separate",
  "Maintenance contracts extra",
  "Upgrade cycles expensive",
  "Full ownership risk on buyer",
];

const raas = [
  "No upfront capital required",
  "Hardware included",
  "Software & platform included",
  "Deployment & integration included",
  "Maintenance & monitoring included",
  "Scale up or down as needed",
];

export default function RaaS() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 580 }}>
          <span className="lbl">Commercial Model</span>
          <h2 className="d2">Deploy robotics without buying robotics.</h2>
          <p className="body-lg">
            RBOT&apos;s Robotics-as-a-Service model bundles hardware, software, deployment, integration,
            maintenance, and support into a single recurring cost.
          </p>
        </div>
        <div className="raas-pair">
          <div className="raas-card">
            <div className="raas-lbl">Traditional Automation</div>
            <div className="raas-price mono">$250,000+</div>
            <div className="raas-note">Upfront capital expenditure</div>
            <ul className="raas-feats">
              {traditional.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="raas-card feat">
            <div className="raas-lbl">RBOT RaaS</div>
            <div className="raas-price mono">Predictable</div>
            <div className="raas-note">Monthly operating cost</div>
            <ul className="raas-feats">
              {raas.map(f => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/raas" className="btn btn-p">Explore RaaS Pricing</Link>
        </div>
      </div>
    </section>
  );
}

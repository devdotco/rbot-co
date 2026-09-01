import Link from "next/link";

const badges = [
  "Robotics Manufacturers",
  "System Integrators",
  "Field Technicians",
  "Automation Engineers",
  "Industrial Consultants",
];

export default function Partner() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="partner">
          <div>
            <span className="lbl" style={{ display: "block", marginBottom: 14 }}>RBOT Network</span>
            <h2 className="d2">Help deploy the next generation of physical AI.</h2>
            <div className="partner-badges">
              {badges.map(b => <span key={b} className="pbadge">{b}</span>)}
            </div>
          </div>
          <div>
            <p className="body-lg" style={{ marginBottom: 24 }}>
              RBOT connects deployment-ready partners with enterprise customers evaluating automation.
              Join the network to receive qualified leads, co-deploy with our team, and build a recurring
              service business around physical AI.
            </p>
            <Link href="/assessment" className="btn btn-p">Join the RBOT Network</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

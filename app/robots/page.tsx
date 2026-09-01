import type { Metadata } from "next";
import Link from "next/link";
import { manufacturers, robotCategories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Robot Marketplace",
  description: "Browse and compare robots from leading manufacturers. Filter by type, industry, payload, and availability.",
};

const types = [
  "Humanoid Robots", "Autonomous Mobile Robots", "Robotic Arms",
  "Cobots", "Warehouse Robots", "Inspection Robots", "Cleaning Robots", "Specialized Robots",
];

export default function RobotsPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Robot Marketplace</span>
        <h1 className="d1">Find the right robot for your operation.</h1>
        <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
          Browse robots from leading manufacturers, filtered by type, industry, payload, mobility, and availability.
        </p>
        <div className="btn-row">
          <Link href="/robot-finder" className="btn btn-p">Robot Finder →</Link>
          <Link href="/compare" className="btn btn-g">Compare Robots</Link>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">By Robot Type</span>
            <h2 className="d2">Browse by category</h2>
          </div>
          <div className="robot-grid">
            {robotCategories.map(cat => (
              <div key={cat.title} className="r-card">
                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <ul className="r-uses">
                  {cat.uses.map(u => <li key={u}>{u}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Manufacturers</span>
            <h2 className="d2">Browse by manufacturer</h2>
          </div>
          <div className="mfr-grid">
            {manufacturers.map(m => (
              <Link key={m.slug} href={`/manufacturers/${m.slug}`} className="mfr-card">
                <div className="mfr-name">{m.name}</div>
                <div className="mfr-cat">{m.category}</div>
                <div className="mfr-badge">View Robots →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Not sure where to start?</h2>
          <p className="body-lg">Answer a few questions and we&apos;ll identify the right robot for your workflow.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/robot-finder" className="btn btn-p">Use the Robot Finder</Link>
            <Link href="/assessment" className="btn btn-g">Talk to a Specialist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { manufacturers } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Robotics Manufacturer Directory",
  description: "Profiles of leading robotics manufacturers — humanoids, AMRs, industrial arms, cobots, and specialized systems.",
};

export default function ManufacturersPage() {
  const humanoids = manufacturers.filter(m => m.category.includes("Humanoid"));
  const industrial = manufacturers.filter(m => m.category.includes("Industrial") || m.category.includes("Cobot"));
  const mobile = manufacturers.filter(m => m.category.includes("AMR") || m.category.includes("Mobile") || m.category.includes("Quadruped"));

  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Manufacturer Directory</span>
        <h1 className="d1">The robotics ecosystem, organized.</h1>
        <p className="body-lg" style={{ maxWidth: 520 }}>
          Independent profiles of leading robotics manufacturers. RBOT works across all of them —
          we match your operation to the right hardware, not our inventory.
        </p>
      </div>

      {[
        { title: "Humanoid Robots", list: humanoids },
        { title: "Industrial Arms & Cobots", list: industrial },
        { title: "Mobile & Quadruped", list: mobile },
      ].map(group => (
        <section key={group.title} className="sec">
          <div className="wrap">
            <div className="sec-hd">
              <span className="lbl">Category</span>
              <h2 className="d3">{group.title}</h2>
            </div>
            <div className="mfr-grid">
              {group.list.map(m => (
                <Link key={m.slug} href={`/manufacturers/${m.slug}`} className="mfr-card">
                  <div className="mfr-name">{m.name}</div>
                  <div className="mfr-cat">{m.category}</div>
                  <div className="mfr-badge">Manufacturer Profile</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Want us to select the right manufacturer for you?</h2>
          <p className="body-lg">RBOT&apos;s assessment identifies which hardware best fits your specific workflow and environment.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
            <Link href="/compare" className="btn btn-g">Compare Platforms</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

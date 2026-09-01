import Link from "next/link";
import { manufacturers } from "@/lib/site-data";

export default function Manufacturers() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 580 }}>
          <span className="lbl">Manufacturer Network</span>
          <h2 className="d2">One robotics partner. Many manufacturers.</h2>
          <p className="body-lg">
            RBOT is vendor-neutral. We match the right hardware to your operation — not our inventory.
          </p>
        </div>
        <div className="mfr-grid">
          {manufacturers.map(m => (
            <Link key={m.slug} href={`/manufacturers/${m.slug}`} className="mfr-card">
              <div className="mfr-name">{m.name}</div>
              <div className="mfr-cat">{m.category}</div>
              <div className="mfr-badge">Manufacturer Profile</div>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/compare" className="btn btn-g">Compare Robotics Platforms</Link>
        </div>
      </div>
    </section>
  );
}

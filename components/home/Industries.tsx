import Link from "next/link";
import { industries } from "@/lib/site-data";

export default function Industries() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 580 }}>
          <span className="lbl">Industry Coverage</span>
          <h2 className="d2">Solutions for physical operations of every kind.</h2>
        </div>
        <div className="ind-grid">
          {industries.map(ind => (
            <Link key={ind.slug} href={`/solutions/${ind.slug}`} className="ind-card">
              <div className="ind-idx lbl">{ind.idx}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/solutions/manufacturing" className="btn btn-g">Explore All Industries</Link>
        </div>
      </div>
    </section>
  );
}

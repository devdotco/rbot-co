import Link from "next/link";
import { integrationRows } from "@/lib/site-data";

export default function Integrations() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 560 }}>
          <span className="lbl">Integrations</span>
          <h2 className="d2">Your robots should work with your existing systems.</h2>
        </div>
        <div className="int-rows">
          {integrationRows.map(row => (
            <div key={row.label}>
              <div className="int-row-lbl">{row.label}</div>
              <div className="chips">
                {row.items.map(item => (
                  <span key={item} className="ichip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/platform/integrations" className="btn btn-g">Explore Integrations</Link>
        </div>
      </div>
    </section>
  );
}

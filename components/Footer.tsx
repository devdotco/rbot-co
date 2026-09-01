import Link from "next/link";
import { footerCols } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">RBOT</div>
          <div className="footer-tag">Physical AI. Deployed.</div>
        </div>
        {footerCols.map(col => (
          <div key={col.title} className="footer-col">
            <h5>{col.title}</h5>
            <ul>
              {col.links.map(link => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bot">
        <span>© 2026 RBOT. All rights reserved.</span>
        <span className="mono" style={{ fontSize: "10.5px" }}>Physical AI Infrastructure</span>
      </div>
    </footer>
  );
}

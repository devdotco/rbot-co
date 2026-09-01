import Link from "next/link";
import { robotCategories } from "@/lib/site-data";

const icons = [
  // Humanoid
  <svg key="h" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <rect x="11" y="2" width="10" height="8" rx="1"/><line x1="16" y1="10" x2="16" y2="14"/>
    <rect x="9" y="14" width="14" height="12" rx="1"/><line x1="9" y1="20" x2="4" y2="18"/>
    <line x1="23" y1="20" x2="28" y2="18"/><line x1="12" y1="26" x2="10" y2="30"/>
    <line x1="20" y1="26" x2="22" y2="30"/>
  </svg>,
  // AMR
  <svg key="a" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <rect x="4" y="10" width="24" height="14" rx="2"/>
    <circle cx="10" cy="26" r="3"/><circle cx="22" cy="26" r="3"/>
    <line x1="10" y1="10" x2="10" y2="6"/><line x1="22" y1="10" x2="22" y2="6"/>
    <line x1="10" y1="6" x2="22" y2="6"/>
  </svg>,
  // Arm
  <svg key="arm" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <circle cx="8" cy="26" r="3"/><line x1="8" y1="23" x2="8" y2="18"/>
    <line x1="8" y1="18" x2="16" y2="12"/><line x1="16" y1="12" x2="22" y2="8"/>
    <circle cx="22" cy="6" r="3"/>
  </svg>,
  // Vision
  <svg key="v" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="4"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="16" y1="26" x2="16" y2="30"/>
    <line x1="2" y1="16" x2="6" y2="16"/><line x1="26" y1="16" x2="30" y2="16"/>
  </svg>,
  // Cobot
  <svg key="c" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <rect x="4" y="12" width="14" height="16" rx="1"/><rect x="14" y="4" width="14" height="16" rx="1"/>
    <line x1="14" y1="12" x2="18" y2="12"/>
  </svg>,
  // Specialized
  <svg key="s" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" opacity={0.55}>
    <circle cx="16" cy="16" r="10"/><path d="M16 6 L20 16 L16 26 L12 16 Z"/>
    <line x1="6" y1="16" x2="26" y2="16"/>
  </svg>,
];

export default function RobotGrid() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 580 }}>
          <span className="lbl">Capabilities</span>
          <h2 className="d2">Robots for Real Work</h2>
          <p className="body-lg">
            Every category of physical AI system, matched to the workflows that justify deployment.
          </p>
        </div>
        <div className="robot-grid">
          {robotCategories.map((cat, i) => (
            <div key={cat.title} className="r-card">
              <div className="r-icon">{icons[i]}</div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <ul className="r-uses">
                {cat.uses.map(u => <li key={u}>{u}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Link href="/robots" className="btn btn-g">Explore All Robots</Link>
        </div>
      </div>
    </section>
  );
}

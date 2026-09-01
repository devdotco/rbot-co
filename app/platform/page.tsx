import type { Metadata } from "next";
import Link from "next/link";
import Platform from "@/components/home/Platform";

export const metadata: Metadata = {
  title: "RBOT Platform",
  description: "The operating system for robotic workforces. Fleet management, task orchestration, analytics, and integrations — unified.",
};

const capabilities = [
  { title: "Fleet Management",     desc: "Monitor every robot across every facility in real time. Status, utilization, location, battery, and task state at a glance." },
  { title: "Task Orchestration",   desc: "Define, assign, and monitor tasks across your fleet. Set priorities, workflows, and escalation rules." },
  { title: "Performance Analytics", desc: "Track utilization, cost per task, throughput, downtime, and savings against labor baselines." },
  { title: "Integrations",         desc: "Native connectors for SAP, Oracle, NetSuite, Manhattan, Blue Yonder, and 40+ enterprise systems." },
  { title: "Maintenance",          desc: "Predictive maintenance alerts, service history, parts tracking, and field service coordination." },
  { title: "AI & Intelligence",    desc: "Computer vision integration, workflow automation, anomaly detection, and physical AI orchestration." },
];

export default function PlatformPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">RBOT Platform</span>
        <h1 className="d1">The operating system for robotic workforces.</h1>
        <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
          One control plane for your entire fleet — monitoring, tasks, analytics, integrations,
          and maintenance tracking, unified.
        </p>
        <div className="btn-row">
          <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
          <Link href="/platform/api" className="btn btn-g">View API Docs</Link>
        </div>
      </div>

      <Platform />

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">Capabilities</span>
            <h2 className="d2">Built for enterprise robotic operations.</h2>
          </div>
          <div className="ind-grid">
            {capabilities.map(c => (
              <div key={c.title} className="ind-card">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">See the platform in action.</h2>
          <p className="body-lg">We&apos;ll walk you through RBOT Platform with your fleet requirements in mind.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request a Demo</Link>
            <Link href="/platform/integrations" className="btn btn-g">View Integrations</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

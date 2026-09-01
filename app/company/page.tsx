import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RBOT Company",
  description: "About RBOT — the physical AI infrastructure company bridging robot manufacturers and enterprise operations.",
};

const sections = [
  {
    href: "/company/about",
    label: "About RBOT",
    desc: "Our story, mission, and the team building the infrastructure for the robot economy.",
  },
  {
    href: "/company/careers",
    label: "Careers",
    desc: "Join us. We're hiring engineers, operators, and field technicians across the country.",
  },
  {
    href: "/company/news",
    label: "News & Press",
    desc: "Press releases, media coverage, and announcements from RBOT.",
  },
  {
    href: "/company/contact",
    label: "Contact",
    desc: "Get in touch with our sales, service, or press teams.",
  },
];

export default function CompanyPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Company</span>
        <h1 className="d1">Building the infrastructure for the robot economy.</h1>
        <p className="body-lg" style={{ maxWidth: 520, marginBottom: 32 }}>
          RBOT is the vendor-neutral partner that enterprise operations teams trust
          to source, deploy, integrate, and manage robotic fleets at scale.
        </p>
        <div className="btn-row">
          <Link href="/company/about" className="btn btn-p">About RBOT</Link>
          <Link href="/company/contact" className="btn btn-g">Contact Us</Link>
        </div>
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="ind-grid">
            {sections.map(s => (
              <Link key={s.href} href={s.href} className="ind-card" style={{ textDecoration: "none" }}>
                <h3>{s.label}</h3>
                <p>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="fcta">
        <div className="fcta-inner">
          <h2 className="d2">Ready to deploy robots?</h2>
          <p className="body-lg">Start with a free assessment of your operation.</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

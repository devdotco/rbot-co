import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact RBOT — Talk to Our Robotics Team",
  description: "Reach out to RBOT for sales, field service, press inquiries, or general questions. We have offices in Chicago, Austin, Atlanta, Phoenix, Seattle, and Boston.",
};

const contacts = [
  {
    label: "General Inquiries",
    email: "hello@rbot.co",
    desc: "Questions about RBOT, our services, or how we work.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="4" width="16" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <path d="M2 6l8 5 8-5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "Sales",
    email: "sales@rbot.co",
    desc: "Ready to explore a deployment? Talk to a solutions engineer.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.2" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Field Service",
    email: "service@rbot.co",
    desc: "Existing customer? Open a service ticket or reach your regional tech.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 16l3-3m0 0l5-5m-5 5l2-2m3-3l3-3-2-2-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="14" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "Press",
    email: "press@rbot.co",
    desc: "Media inquiries, analyst briefings, and speaking requests.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
        <line x1="6" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.2" />
        <line x1="6" y1="11" x2="11" y2="11" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
];

const offices = [
  {
    city: "Chicago, IL",
    tag: "Headquarters",
    address: "320 W. Ohio Street, Suite 400\nChicago, IL 60654",
    hours: "Mon–Fri, 8am–6pm CT",
    phone: "+1 (312) 555-0191",
  },
  {
    city: "Austin, TX",
    tag: "Southwest Office",
    address: "701 Brazos Street, Suite 1600\nAustin, TX 78701",
    hours: "Mon–Fri, 8am–5pm CT",
    phone: "+1 (512) 555-0147",
  },
];

const faqs = [
  {
    q: "How long does a deployment take?",
    a: "Deployment timelines depend on scope and site complexity. A single-facility AMR deployment typically takes 8–12 weeks from assessment to go-live. Multi-facility or multi-robot-type programs run 16–24 weeks. Our structured six-phase methodology keeps every program on schedule by front-loading the integration and site prep work that most delays stem from.",
  },
  {
    q: "Do you work with our existing WMS?",
    a: "Yes. RBOT Platform has native connectors for the major warehouse management and ERP systems — Manhattan, Blue Yonder, SAP EWM, Oracle WMS, and NetSuite, among others. For systems outside our connector library, we support API-based integrations and have an experienced team that has worked with nearly every WMS in North American enterprise use. System integration is typically the longest lead-time item, which is why we begin integration discovery in phase one.",
  },
  {
    q: "What robot manufacturers do you work with?",
    a: "RBOT is vendor-neutral and maintains active partnerships with 12 manufacturers across categories including AMRs, collaborative robots, humanoid platforms, autonomous forklifts, inventory scanning robots, and specialized inspection systems. Our manufacturer selection is based on technical capability, serviceability, and long-term roadmap — not commercial arrangements. We will always recommend the robot that best fits your specific workflow, even if that means a manufacturer we have fewer integrations with.",
  },
  {
    q: "What is the difference between RaaS and buying robots?",
    a: "Robotics-as-a-Service (RaaS) is a subscription model where you pay a monthly fee per robot that covers hardware, software, maintenance, and field service. You avoid large upfront capital expenditure, get guaranteed uptime SLAs, and can scale your fleet up or down. Purchasing robots means lower long-term per-unit cost if you have the internal technical staff to maintain them, but significantly higher upfront investment and operational burden. We offer both models and will help you build the business case for each with your specific cost structure.",
  },
  {
    q: "How does field service work?",
    a: "RBOT maintains a national network of 200+ manufacturer-certified field technicians organized into regional pods. For managed operations customers, we guarantee 4-hour on-site response within business hours and 8-hour response 24/7. All robots in managed programs are monitored continuously by our operations center, which can detect anomalies before they become failures. Our technicians carry a standard parts kit covering the most common failure modes for the platforms in your fleet. Major repairs are coordinated with the manufacturer directly through our service management system.",
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>

      {/* Hero */}
      <div className="page-hero">
        <span className="lbl">Contact</span>
        <h1 className="d1">Let&apos;s talk robotics.</h1>
        <p className="body-lg" style={{ maxWidth: 500, marginTop: 20 }}>
          Whether you are exploring your first deployment or managing a fleet of hundreds, our
          team is ready to help. Tell us where you are, and we will meet you there.
        </p>
      </div>

      {/* US Map SVG */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Our Presence</span>
            <h2 className="d2">Six locations, national field coverage.</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <svg
              width="480"
              height="260"
              viewBox="0 0 480 260"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ minWidth: 360 }}
            >
              {/* Simplified US outline */}
              <path
                d="M60 60 L90 52 L140 48 L200 46 L260 48 L320 50 L380 55 L420 62 L435 80 L440 100 L432 118 L420 130 L410 145 L400 158 L380 165 L360 168 L340 165 L320 162 L300 168 L280 175 L260 178 L240 176 L220 172 L200 168 L180 164 L160 165 L140 168 L120 164 L100 155 L80 145 L65 130 L55 110 L52 88 L60 60Z"
                stroke="#2C2C2C"
                strokeWidth="1.5"
                fill="#0D0D0D"
              />
              {/* Great Lakes rough suggestion */}
              <path d="M260 70 L270 68 L275 72 L268 76 L260 70Z" fill="#1A1A1A" stroke="#222222" strokeWidth="0.5" />
              <path d="M240 72 L248 70 L250 74 L244 76 L240 72Z" fill="#1A1A1A" stroke="#222222" strokeWidth="0.5" />

              {/* Office dots and labels */}
              {/* Chicago HQ */}
              <circle cx="285" cy="95" r="7" fill="#0AAEFF" />
              <circle cx="285" cy="95" r="12" fill="none" stroke="#0AAEFF" strokeOpacity="0.25" strokeWidth="1" />
              <text x="285" y="80" textAnchor="middle" fill="#EDEAE5" fontSize="9" fontFamily="monospace" fontWeight="600">Chicago HQ</text>
              {/* Lines from Chicago */}
              <line x1="285" y1="95" x2="175" y2="145" stroke="#0AAEFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="285" y1="95" x2="210" y2="165" stroke="#0AAEFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="285" y1="95" x2="130" y2="100" stroke="#0AAEFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="285" y1="95" x2="390" y2="90" stroke="#0AAEFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4" />
              <line x1="285" y1="95" x2="360" y2="135" stroke="#0AAEFF" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4,4" />

              {/* Austin */}
              <circle cx="210" cy="165" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="210" y="180" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">Austin</text>

              {/* Atlanta */}
              <circle cx="340" cy="140" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="340" y="155" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">Atlanta</text>

              {/* Phoenix */}
              <circle cx="130" cy="140" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="130" y="155" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">Phoenix</text>

              {/* Seattle */}
              <circle cx="95" cy="78" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="95" y="68" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">Seattle</text>

              {/* Boston */}
              <circle cx="400" cy="82" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="400" y="72" textAnchor="middle" fill="#7A7875" fontSize="8" fontFamily="monospace">Boston</text>

              {/* Legend */}
              <circle cx="30" cy="220" r="5" fill="#0AAEFF" />
              <text x="42" y="224" fill="#7A7875" fontSize="8" fontFamily="monospace">Headquarters</text>
              <circle cx="130" cy="220" r="5" fill="#1A1A1A" stroke="#0AAEFF" strokeWidth="1.2" />
              <text x="142" y="224" fill="#7A7875" fontSize="8" fontFamily="monospace">Regional Office</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Contact form + cards */}
      <section className="sec">
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }}>
            {/* Form */}
            <div>
              <div className="sec-hd">
                <span className="lbl">Get in Touch</span>
                <h2 className="d2">Tell us about your operation.</h2>
              </div>
              <ContactForm />
            </div>

            {/* Contact cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, paddingTop: 8 }}>
              <span className="lbl" style={{ display: "block", marginBottom: 8 }}>Direct Contacts</span>
              {contacts.map(c => (
                <div key={c.label} style={{
                  border: "1px solid var(--bdr2)", borderRadius: 3, padding: "20px 24px",
                  background: "var(--bg1)", display: "flex", flexDirection: "column", gap: 8
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--acc)" }}>
                    {c.icon}
                    <span className="lbl" style={{ color: "var(--t3)" }}>{c.label}</span>
                  </div>
                  <a href={`mailto:${c.email}`} style={{ fontSize: 15, fontWeight: 600, color: "var(--acc)", letterSpacing: "-0.02em" }}>
                    {c.email}
                  </a>
                  <p className="body" style={{ fontSize: 12.5 }}>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd">
            <span className="lbl">Offices</span>
            <h2 className="d2">Find us in your region.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 760 }}>
            {offices.map(o => (
              <div key={o.city} style={{
                border: "1px solid var(--bdr2)", borderRadius: 3, padding: "32px",
                background: "var(--bg1)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span className="lbl" style={{ color: "var(--acc)" }}>{o.tag}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 14 }}>
                  {o.city}
                </h3>
                <p className="body" style={{ marginBottom: 8, whiteSpace: "pre-line" }}>{o.address}</p>
                <p className="body" style={{ marginBottom: 6 }}>{o.hours}</p>
                <a href={`tel:${o.phone}`} className="body" style={{ color: "var(--acc)" }}>{o.phone}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 620 }}>
            <span className="lbl">FAQ</span>
            <h2 className="d2">Common questions.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, maxWidth: 820, background: "var(--bdr)", border: "1px solid var(--bdr)" }}>
            {faqs.map(f => (
              <div key={f.q} style={{ background: "var(--bg)", padding: "28px 32px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.02em", marginBottom: 12, color: "var(--t1)" }}>
                  {f.q}
                </h3>
                <p className="body" style={{ lineHeight: 1.72 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fcta">
        <div className="fcta-inner">
          <span className="lbl">Next Step</span>
          <h2 className="d2">Start with a free automation assessment.</h2>
          <p className="body-lg">
            Our assessment takes 2–3 weeks and delivers a prioritized automation roadmap,
            robot selection recommendations, and a business case with projected ROI.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
            <Link href="/resources/guide" className="btn btn-g">Download Deployment Guide</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

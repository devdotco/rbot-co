import type { Metadata } from "next";
import Link from "next/link";
import AssessmentForm from "@/components/forms/AssessmentForm";

export const metadata: Metadata = {
  title: "Robotics Assessment",
  description: "Find the highest-ROI robotics opportunities inside your operation. RBOT conducts a structured analysis of your facilities, workflows, and automation candidates.",
};

const deliverables = [
  { label: "Labor Analysis",        desc: "Detailed review of current labor costs, headcount, and shift patterns." },
  { label: "Workflow Mapping",      desc: "Documentation of candidate workflows, cycle times, and task complexity." },
  { label: "Robot Selection",       desc: "Specific manufacturer and model recommendations matched to your use cases." },
  { label: "Integration Analysis",  desc: "Assessment of ERP, WMS, and system integration requirements." },
  { label: "ROI Model",             desc: "Financial model with labor savings, robot costs, payback period, and 5-year projection." },
  { label: "Deployment Plan",       desc: "Phased deployment timeline including site prep, integration, and go-live." },
];

const process = [
  { n: "01", title: "Intake Call",      desc: "30-minute call to understand your operation, team size, and automation goals." },
  { n: "02", title: "Facility Review",  desc: "We review facility layout, workflow documentation, and operational data you provide." },
  { n: "03", title: "Analysis",         desc: "Our team produces the full assessment document across all six deliverable categories." },
  { n: "04", title: "Readout",          desc: "60-minute session to walk through findings, answer questions, and define next steps." },
];

export default function AssessmentPage() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <div className="page-hero">
        <span className="lbl">Robotics Assessment</span>
        <h1 className="d1">Find the highest-ROI robotics opportunities inside your operation.</h1>
        <p className="body-lg" style={{ maxWidth: 540, marginBottom: 32 }}>
          A structured analysis of your facilities, workflows, labor costs, and automation candidates —
          delivered in 5 business days.
        </p>
        <Link href="#form" className="btn btn-p">Request Your Assessment</Link>
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">What You Get</span>
            <h2 className="d2">Six deliverables in one engagement.</h2>
          </div>
          <div className="ind-grid">
            {deliverables.map(d => (
              <div key={d.label} className="ind-card">
                <h3>{d.label}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-hd" style={{ maxWidth: 580 }}>
            <span className="lbl">The Process</span>
            <h2 className="d2">How the assessment works.</h2>
          </div>
          <div className="process">
            {process.map((step, i) => (
              <div key={step.n} className={`p-step${i === 0 ? " on" : ""}`}>
                <div className="p-dot" />
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="form">
        <div className="wrap">
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <div className="sec-hd" style={{ textAlign: "center" }}>
              <span className="lbl">Get Started</span>
              <h2 className="d2">Request your assessment.</h2>
              <p className="body-lg">We&apos;ll follow up within one business day to schedule your intake call.</p>
            </div>
            <AssessmentForm />
          </div>
        </div>
      </section>
    </div>
  );
}

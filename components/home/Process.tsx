import Link from "next/link";
import { processSteps } from "@/lib/site-data";

export default function Process() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="sec-hd" style={{ maxWidth: 620 }}>
          <span className="lbl">Deployment Process</span>
          <h2 className="d2">Buying the robot is the easy part.</h2>
          <p className="body-lg">
            Making robotics work inside an existing operation requires workflow design, software integration,
            deployment, training, monitoring, and ongoing support.
          </p>
        </div>
        <div className="process">
          {processSteps.map((step, i) => (
            <div key={step.label} className={`p-step${i === 0 ? " on" : ""}`}>
              <div className="p-dot" />
              <h4>{step.label}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48 }}>
          <Link href="/assessment" className="btn btn-p">Start a Robotics Assessment</Link>
        </div>
      </div>
    </section>
  );
}

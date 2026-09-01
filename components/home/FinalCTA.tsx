import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="fcta">
      <div className="fcta-inner">
        <h2 className="d2">Your next employee might be a robot.</h2>
        <p className="body-lg">
          RBOT can help determine where robotics actually makes economic sense inside your business —
          and then deploy it.
        </p>
        <div className="btn-row" style={{ justifyContent: "center" }}>
          <Link href="/assessment" className="btn btn-p">Request an Assessment</Link>
          <Link href="/robots" className="btn btn-g">Browse Robots</Link>
        </div>
      </div>
    </section>
  );
}

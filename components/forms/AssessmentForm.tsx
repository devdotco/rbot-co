"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function AssessmentForm() {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "assessment",
          data: {
            firstName: fd.get("firstName") as string,
            lastName:  fd.get("lastName")  as string,
            email:     fd.get("email")     as string,
            company:   fd.get("company")   as string,
            industry:  fd.get("industry")  as string,
            employees: fd.get("employees") as string,
          },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="calc-in" style={{ borderRadius: 3, border: "1px solid var(--bdr2)", textAlign: "center", padding: "40px 32px" }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
        <h3 style={{ marginBottom: 8 }}>Request received.</h3>
        <p className="body" style={{ color: "var(--t2)" }}>
          We&apos;ll follow up within one business day to schedule your intake call.
        </p>
      </div>
    );
  }

  return (
    <form className="calc-in" style={{ borderRadius: 3, border: "1px solid var(--bdr2)" }} onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label>First Name</label>
          <input name="firstName" type="text" placeholder="Jane" required />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input name="lastName" type="text" placeholder="Smith" required />
        </div>
      </div>
      <div className="field">
        <label>Work Email</label>
        <input name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label>Company</label>
        <input name="company" type="text" placeholder="Acme Corp" required />
      </div>
      <div className="field">
        <label>Industry</label>
        <input name="industry" type="text" placeholder="e.g. Warehousing, Manufacturing" />
      </div>
      <div className="field">
        <label>Number of employees in target workflow</label>
        <input name="employees" type="number" placeholder="e.g. 20" min={1} />
      </div>
      {state === "error" && (
        <p style={{ color: "#EF4444", fontSize: 13, margin: "0 0 8px" }}>
          Something went wrong — please try again or email us directly.
        </p>
      )}
      <div style={{ marginTop: 8 }}>
        <button
          className="btn btn-p"
          style={{ width: "100%", justifyContent: "center" }}
          type="submit"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sending…" : "Request Assessment"}
        </button>
      </div>
    </form>
  );
}

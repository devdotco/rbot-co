"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

const industries = [
  "Manufacturing",
  "Warehousing & Distribution",
  "Logistics",
  "Retail",
  "Healthcare",
  "Hospitality",
  "Construction",
  "Food & Beverage",
  "Other",
];

export default function ContactForm() {
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
          type: "contact",
          data: {
            name:     fd.get("name")     as string,
            email:    fd.get("email")    as string,
            company:  fd.get("company")  as string,
            phone:    fd.get("phone")    as string,
            industry: fd.get("industry") as string,
            message:  fd.get("message")  as string,
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
        <h3 style={{ marginBottom: 8 }}>Message sent.</h3>
        <p className="body" style={{ color: "var(--t2)" }}>
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form className="calc-in" style={{ borderRadius: 3, border: "1px solid var(--bdr2)" }} onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input name="name" type="text" placeholder="Jane Smith" required />
      </div>
      <div className="field-row">
        <div className="field">
          <label>Work Email</label>
          <input name="email" type="email" placeholder="jane@company.com" required />
        </div>
        <div className="field">
          <label>Phone</label>
          <input name="phone" type="tel" placeholder="+1 (555) 000-0000" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label>Company</label>
          <input name="company" type="text" placeholder="Acme Corp" required />
        </div>
        <div className="field">
          <label>Industry</label>
          <select name="industry" style={{ background: "var(--bg1)", color: "var(--t1)", border: "1px solid var(--bdr2)", borderRadius: 2, padding: "10px 12px", fontSize: 13, width: "100%" }}>
            <option value="">Select industry…</option>
            {industries.map(i => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>
      <div className="field">
        <label>What can we help with?</label>
        <textarea
          name="message"
          placeholder="Tell us about your operation and automation goals…"
          rows={5}
          required
          style={{ resize: "vertical" }}
        />
      </div>
      {state === "error" && (
        <p style={{ color: "#EF4444", fontSize: 13, margin: "0 0 8px" }}>
          Something went wrong — please email us at hello@rbot.co
        </p>
      )}
      <div style={{ marginTop: 8 }}>
        <button
          className="btn btn-p"
          style={{ width: "100%", justifyContent: "center" }}
          type="submit"
          disabled={state === "loading"}
        >
          {state === "loading" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}

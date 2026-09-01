"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function GuideForm() {
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
          type: "guide",
          data: {
            name:    fd.get("name")    as string,
            email:   fd.get("email")   as string,
            company: fd.get("company") as string,
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
      <div style={{ borderRadius: 3, border: "1px solid var(--bdr2)", textAlign: "center", padding: "32px 24px", background: "var(--bg1)" }}>
        <div style={{ fontSize: 28, marginBottom: 10 }}>✓</div>
        <h3 style={{ marginBottom: 6 }}>Check your inbox.</h3>
        <p className="body" style={{ color: "var(--t2)" }}>
          We&apos;ve sent the guide to your email.
        </p>
      </div>
    );
  }

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: 12 }} onSubmit={handleSubmit}>
      <div className="field">
        <label>Full Name</label>
        <input name="name" type="text" placeholder="Jane Smith" required />
      </div>
      <div className="field">
        <label>Work Email</label>
        <input name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label>Company</label>
        <input name="company" type="text" placeholder="Acme Corp" required />
      </div>
      {state === "error" && (
        <p style={{ color: "#EF4444", fontSize: 13 }}>Something went wrong — try again.</p>
      )}
      <button className="btn btn-p" type="submit" disabled={state === "loading"} style={{ justifyContent: "center" }}>
        {state === "loading" ? "Sending…" : "Download the Guide"}
      </button>
    </form>
  );
}

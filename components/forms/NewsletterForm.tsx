"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
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
          type: "newsletter",
          data: { email: fd.get("email") as string },
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return <p style={{ color: "var(--good)", fontSize: 14 }}>✓ You&apos;re subscribed.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <input
        name="email"
        type="email"
        placeholder="your@email.com"
        required
        style={{
          flex: 1, minWidth: 200,
          background: "var(--bg1)", color: "var(--t1)",
          border: "1px solid var(--bdr2)", borderRadius: 2,
          padding: "10px 14px", fontSize: 13,
        }}
      />
      {state === "error" && <span style={{ color: "#EF4444", fontSize: 12, width: "100%" }}>Try again.</span>}
      <button className="btn btn-p btn-sm" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "…" : "Subscribe"}
      </button>
    </form>
  );
}

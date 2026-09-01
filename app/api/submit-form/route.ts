import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, FormSubmission } from "@/lib/sendgrid";

export async function POST(req: NextRequest) {
  try {
    const body: FormSubmission = await req.json();

    if (!body.type || !body.data) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const email = body.data.email;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }

    await sendFormEmail(body);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Form submission error:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

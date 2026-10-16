import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clientIp, isRateLimited } from "@/lib/rateLimit";

const REQUIRED_ENV = ["GMAIL_USER", "GMAIL_APP_PASSWORD"] as const;
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function field(data: Record<string, unknown>, key: string, max: number): string | null {
  const value = data[key];
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  return trimmed;
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  try {
    const missingEnv = REQUIRED_ENV.filter((name) => !process.env[name]);
    if (missingEnv.length) {
      console.error("[api/contact] missing env vars:", missingEnv.join(", "));
      return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
    }

    if (isRateLimited(`contact:${ip}`, 5, 10 * 60 * 1000)) {
      return NextResponse.json(
        { error: "Too many messages. Please try again in 10 minutes or call 0478 965 828." },
        { status: 429, headers: { "Retry-After": "600" } }
      );
    }

    let data: Record<string, unknown>;
    try {
      const parsed = await request.json();
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("not an object");
      data = parsed as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Honeypot: real visitors never fill this hidden field.
    if (typeof data._honey === "string" && data._honey.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    const name = field(data, "name", 120);
    const email = field(data, "email", 200);
    const message = field(data, "message", 5000);
    if (!name || !email || !message || !EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const subject = "New Member Registration Enquiry – Lose Weight Today";

    await transporter.sendMail({
      from: `"Lose Weight Today" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject,
      html: `
        <h2>New Enquiry from Lose Weight Today</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Type:</strong> Member Registration Request</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from loseweighttoday.com.au contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/contact] sendMail failed", {
      ip,
      error: error instanceof Error ? error.message : String(error),
    });
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message, type, _subject } = data;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Send via Formsubmit (free email forwarding service)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", _subject || "New Enquiry – Lose Weight Today");
    formData.append("_captcha", "false");
    if (type) formData.append("type", type);

    const response = await fetch("https://formsubmit.co/ajax/leffleryd@gmail.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

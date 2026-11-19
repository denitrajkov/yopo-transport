import { NextResponse } from "next/server";
import { Resend } from "resend";
import { getClientIp, isRateLimited } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where chatbot leads are emailed (same inbox as driver applications).
const LEAD_INBOX = "safety@yopoexpedite.com";

function clean(value: unknown, maxLength: number) {
  return String(value ?? "").slice(0, maxLength).trim();
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] as string,
  );
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { success: false, error: "rate_limited" },
        { status: 429 },
      );
    }

    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json({ success: false }, { status: 400 });
    }

    // Honeypot: real visitors never fill this hidden field.
    if (clean(body.website, 200) !== "") {
      return NextResponse.json({ success: true });
    }

    const name = clean(body.name, 100);
    const phone = clean(body.phone, 40);
    const question = clean(body.question, 1000);
    const page = clean(body.page, 200);

    if (!name || phone.replace(/\D/g, "").length < 7) {
      return NextResponse.json(
        { success: false, error: "invalid" },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeQuestion = escapeHtml(question || "(no question — wants a call)");
    const safePage = escapeHtml(page || "unknown");

    const { error } = await resend.emails.send({
      from: "Yopo Expedite Chatbot <applications@yopoexpedite.com>",
      to: LEAD_INBOX,
      subject: `Chatbot lead: ${name.replace(/[\r\n]+/g, " ")} – ${phone.replace(/[\r\n]+/g, " ")}`,
      html: `
        <h2>New driver lead from the website chatbot</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Question:</strong><br/>${safeQuestion.replace(/\n/g, "<br/>")}</p>
        <p style="color:#666;font-size:12px">Sent from page: ${safePage}</p>
      `,
    });

    if (error) {
      console.error("Resend error (chatbot-lead):", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("chatbot-lead route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: FormDataEntryValue | null) {
  return String(value ?? "").replace(
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
    const formData = await request.formData();

    const name = escapeHtml(formData.get("name"));
    const company = escapeHtml(formData.get("company"));
    const email = escapeHtml(formData.get("email"));
    const phone = escapeHtml(formData.get("phone"));
    const pickupLocation = escapeHtml(formData.get("pickupLocation"));
    const deliveryLocation = escapeHtml(formData.get("deliveryLocation"));
    const service = escapeHtml(formData.get("service"));
    const message = escapeHtml(formData.get("message"));

    const { error } = await resend.emails.send({
      from: "Yopo Expedite <applications@yopotransport.com>",
      to: "safety@yopoexpedite.com",
      replyTo: String(formData.get("email") ?? ""),
      subject: `New Quote Request: ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "—"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pickup Location:</strong> ${pickupLocation || "—"}</p>
        <p><strong>Delivery Location:</strong> ${deliveryLocation || "—"}</p>
        <p><strong>Service Needed:</strong> ${service || "—"}</p>
        <p><strong>Message:</strong><br>${message ? message.replace(/\n/g, "<br>") : "—"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("quote-request route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

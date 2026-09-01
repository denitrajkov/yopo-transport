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

    const firstName = escapeHtml(formData.get("firstName"));
    const lastName = escapeHtml(formData.get("lastName"));
    const email = escapeHtml(formData.get("email"));
    const phone = escapeHtml(formData.get("phone"));
    const dateOfBirth = escapeHtml(formData.get("dateOfBirth"));
    const experience = escapeHtml(formData.get("experience"));

    const attachments = [];
    const cdl = formData.get("cdl");
    if (cdl instanceof File && cdl.size > 0) {
      const buffer = Buffer.from(await cdl.arrayBuffer());
      attachments.push({ filename: cdl.name, content: buffer });
    }

    const { error } = await resend.emails.send({
      from: "Yopo Transport <applications@yopotransport.com>",
      // TEMP: route to deni@yopoexpedite.com for testing; switch back to
      // siteConfig.careersEmail once verified.
      to: "deni@yopoexpedite.com",
      replyTo: String(formData.get("email") ?? ""),
      subject: `New Driver Application: ${firstName} ${lastName}`,
      html: `
        <h2>New Driver Application</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("driver-application route error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
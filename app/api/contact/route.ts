import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Ovweta Global Website <onboarding@resend.dev>",
      to: ["ovwetaglobal@gmail.com", "info@ovwetaglobal.com", "successowhoka@gmail.com"],
      reply_to: email,
      subject: `Website Enquiry — ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111118; color: #e4e4e7; padding: 32px; border-radius: 4px;">
          <div style="border-left: 4px solid #f59e0b; padding-left: 16px; margin-bottom: 28px;">
            <p style="color: #f59e0b; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px 0;">Ovweta Global Limited</p>
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">New Contact Enquiry</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 35%;">Subject</td>
              <td style="padding: 12px 16px; color: #ffffff; font-weight: bold;">${subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${name}</td>
            </tr>
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 16px;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${phone || "—"}</td>
            </tr>
          </table>

          <div style="background: #1a1a22; border: 1px solid #2a2a34; padding: 20px; margin-bottom: 24px; border-radius: 2px;">
            <p style="color: #9AAABE; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Message</p>
            <p style="color: #e4e4e7; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="background: #f59e0b; padding: 16px; text-align: center; border-radius: 2px;">
            <p style="margin: 0; color: #111118; font-weight: bold; font-size: 13px;">Reply directly to this email to respond to ${name}</p>
          </div>

          <p style="color: #545462; font-size: 11px; margin-top: 24px; text-align: center;">
            Sent from ovwetaglobal.com · Built by <a href="htttps://jasit.com.ng"> Jasit Technologies </a>
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { product, name, company, email, phone, duration, quantity, purpose, notes } = body;

    // Basic validation
    if (!name || !email || !phone || !duration || !purpose || !product) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "Ovweta Global Website <onboarding@resend.dev>", // change to your verified domain later
      to: ["jessicakorubo@gmail.com"],
      reply_to: email,
      subject: `New Hire Request — ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #111118; color: #e4e4e7; padding: 32px; border-radius: 4px;">
          <div style="border-left: 4px solid #f59e0b; padding-left: 16px; margin-bottom: 28px;">
            <p style="color: #f59e0b; font-size: 11px; letter-spacing: 3px; text-transform: uppercase; margin: 0 0 4px 0;">Ovweta Global Limited</p>
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">New Hire Request</h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Equipment</td>
              <td style="padding: 12px 16px; color: #ffffff; font-weight: bold; font-size: 15px;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${name}</td>
            </tr>
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${company || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 16px;"><a href="mailto:${email}" style="color: #f59e0b;">${email}</a></td>
            </tr>
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone / WhatsApp</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Hire Duration</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${duration}</td>
            </tr>
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Quantity</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${quantity}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Purpose</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${purpose}</td>
            </tr>
            ${notes ? `
            <tr style="background: #1a1a22;">
              <td style="padding: 12px 16px; color: #9AAABE; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Additional Notes</td>
              <td style="padding: 12px 16px; color: #e4e4e7;">${notes}</td>
            </tr>` : ""}
          </table>

          <div style="background: #f59e0b; padding: 16px; text-align: center; border-radius: 2px;">
            <p style="margin: 0; color: #111118; font-weight: bold; font-size: 13px;">Reply directly to this email to respond to ${name}</p>
          </div>

          <p style="color: #545462; font-size: 11px; margin-top: 24px; text-align: center;">
            Sent from ovwetaglobal.com · Built by Jasit Technologies
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

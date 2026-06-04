import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { getSmtpConfig, isSmtpConfigured } from "@/lib/smtp.server";

export const maxDuration = 60;

export async function GET() {
  return NextResponse.json({
    ok: true,
    smtp: isSmtpConfigured(),
  });
}

export async function POST(request: Request) {
  let body: Record<string, string | undefined>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { firstName, lastName, company, email, service, brief, subject } = body;

  if (!firstName?.trim() || !email?.trim() || !brief?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const smtp = getSmtpConfig();
  if (!isSmtpConfigured() || !smtp) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add SMTP_* variables to .env.local (see .env.example).",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  });

  const mailSubject = subject
    ? `${subject} — ${firstName} ${lastName ?? ""}`.trim()
    : `New Enquiry — ${service || "Web design"} from ${firstName} ${lastName ?? ""}`.trim();

  const mailOptions = {
    from: `Simfah Global <${smtp.from}>`,
    to: smtp.from,
    subject: mailSubject,
    text:
      `You have received a new message from the web design contact form.\n\n` +
      `Name:     ${firstName} ${lastName ?? ""}\n` +
      `Company:  ${company || "N/A"}\n` +
      `Email:    ${email}\n` +
      `Service:  ${service || "N/A"}\n` +
      (subject ? `Subject:  ${subject}\n` : "") +
      `\nMessage:\n${brief}`,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail send error:", error);
    const message =
      error instanceof Error ? error.message : "Failed to send email";
    return NextResponse.json({ error: "Failed to send email", details: message }, { status: 500 });
  }
}

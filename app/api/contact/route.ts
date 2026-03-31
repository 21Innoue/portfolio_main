import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactRecipient = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword || !contactRecipient) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please add GMAIL_USER, GMAIL_APP_PASSWORD, and CONTACT_RECEIVER_EMAIL.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: gmailUser,
      to: contactRecipient,
      replyTo: email.trim(),
      subject: `Portfolio Contact from ${name.trim()}`,
      text: `You received a new portfolio message.

Name: ${name.trim()}
Email: ${email.trim()}

Message:
${message.trim()}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-line;">${message.trim()}</p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form email error:", error);

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to receiver (you) - using EMAIL_FROM as the recipient
    const receiverEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: process.env.EMAIL_FROM || process.env.SMTP_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8A2387; border-bottom: 2px solid #E94057; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2387;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    // Email to sender (confirmation)
    const senderEmail = {
      from: process.env.EMAIL_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8A2387; border-bottom: 2px solid #E94057; padding-bottom: 10px;">
            Thank you for reaching out!
          </h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible.</p>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #8A2387;">
              ${message.replace(/\n/g, "<br>")}
            </p>
          </div>
          <p>Best regards,<br><strong>Bilal Ahmad</strong></p>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This is an automated confirmation email. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(receiverEmail),
      transporter.sendMail(senderEmail),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}


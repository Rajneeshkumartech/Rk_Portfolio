'use server';
import { Resend } from "resend";

// .env.local se humne secret key uthai
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData) {
  // Frontend se aaye hue data ko read karna
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const service = formData.get("service");
  const message = formData.get("message");

  // Simple validation check: Agar zaroori fields khali hain toh error return karo
  if (!firstName || !email || !message) {
    return { success: false, error: "Please fill in all required fields." };
  }

  try {
    // Resend ke zariye email bhejba
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "rajneeshkumar.tech@gmail.com",
      subject: `New Portfolio Message from ${firstName} ${lastName}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Requested:</strong> ${service || "Not selected"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
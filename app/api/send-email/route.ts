import { Resend } from "resend"

// This API route handles POST requests coming from the contact form.
// It expects the following fields either in x-www-form-urlencoded or multipart/form-data payloads:
//  - name  (string)
//  - email (string)
//  - phone (string | undefined)
//  - subject (string)
//  - message (string)
//
// Resend configuration via environment variables (create a `.env.local` file):
//  RESEND_API_KEY   – Your Resend API key (required)
//  CONTACT_EMAIL_TO – Destination address. If omitted, defaults to the domain's forwarding configuration.
//
// IMPORTANT: Never commit real credentials to version control.

export async function POST(req: Request) {
  try {
    // Parse form values. (Native FormData works for traditional HTML forms.)
    const form = await req.formData()

    const name = String(form.get("name") || "")
    const email = String(form.get("email") || "")
    const phone = String(form.get("phone") || "")
    const subject = String(form.get("subject") || "Website Contact Form")
    const message = String(form.get("message") || "")

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      )
    }

    // Initialize Resend client
    const resend = new Resend(process.env.RESEND_API_KEY as string)

    const htmlBody = `
      <h2>New message from Expert Engineering Solution website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    `

    // Check if we have a valid email address to send to
    const toEmail = process.env.CONTACT_EMAIL_TO || process.env.SMTP_USER
    if (!toEmail) {
      throw new Error("No recipient email address configured. Please set CONTACT_EMAIL_TO or SMTP_USER environment variable.")
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: toEmail,
      subject: `[Website] ${subject}`,
      html: htmlBody,
      replyTo: email, // This allows replies to go to the original sender
    })
    if (error) {
      throw error
    }

    // Return success JSON. The front-end can display a toast or redirect.
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error: any) {
    console.error("/api/send-email error", error)
    
    // Provide more specific error messages
    let errorMessage = "Failed to send message."
    if (error.message?.includes("No recipient email address configured")) {
      errorMessage = "Email service not configured. Please contact the administrator."
    } else if (error.message?.includes("Missing `to` field")) {
      errorMessage = "Email service configuration error. Please contact the administrator."
    } else if (error.statusCode === 422) {
      errorMessage = "Invalid email configuration. Please contact the administrator."
    } else if (error.message?.includes("domain is not verified")) {
      errorMessage = "Email service domain not verified. Please contact the administrator."
    } else if (error.statusCode === 403) {
      errorMessage = "Email service authentication failed. Please contact the administrator."
    }
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}

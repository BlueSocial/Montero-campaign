"use server"

interface EmailData {
  to: string
  subject: string
  body: string
}

export async function sendEmail({ to, subject, body }: EmailData) {
  try {
    console.log('SendGrid API Key exists:', !!process.env.SENDGRID_API_KEY)
    console.log('SendGrid from email:', "campaign@christenforriverside.com")
    
    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: "campaign@christenforriverside.com", name: "Christen Montero Campaign" },
        subject,
        content: [{ type: "text/plain", value: body }],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error("SendGrid API error:", errorData)
      throw new Error(`Failed to send email: ${response.status} ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

"use server"

import { sendEmail } from "../lib/email"

type FormType = "endorse" | "volunteer" | "host"

export async function submitForm(formType: FormType, formData: FormData) {
  try {
    // Extract form data
    const formEntries = Array.from(formData.entries()).reduce(
      (acc, [key, value]) => {
        acc[key] = value
        return acc
      },
      {} as Record<string, any>,
    )

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email"]
    for (const field of requiredFields) {
      if (!formEntries[field]) {
        return { success: false, message: `${field} is required` }
      }
    }

    // Format form type for email subject
    const formTypeFormatted = formType.charAt(0).toUpperCase() + formType.slice(1)

    // Prepare email content
    const subject = `New ${formTypeFormatted} Form Submission - Christen Montero Campaign`

    let emailBody = `New submission from the ${formTypeFormatted} form:\n\n`
    emailBody += `Form Type: ${formTypeFormatted}\n\n`

    // Add all form fields to email body with better formatting
    Object.entries(formEntries).forEach(([key, value]) => {
      // Format the key for better readability
      const formattedKey = key
        .replace(/([A-Z])/g, " $1") // Add space before capital letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter

      emailBody += `${formattedKey}: ${value}\n`
    })

    // Add timestamp
    emailBody += `\nSubmission Time: ${new Date().toLocaleString()}\n`

    await sendEmail({
      to: "jose@raincross.com",
      subject,
      body: emailBody,
    })

    return { success: true, message: "Form submitted successfully!" }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting the form. Please try again.",
    }
  }
}

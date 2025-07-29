"use server"

type FormType = "endorse" | "volunteer" | "host"

export async function submitForm(formType: FormType, formData: FormData) {
  console.log('Form submission started for type:', formType)
  
  try {
    // Extract form data
    const formEntries = Array.from(formData.entries()).reduce(
      (acc, [key, value]) => {
        acc[key] = value
        return acc
      },
      {} as Record<string, any>,
    )
    
    console.log('Extracted form data:', formEntries)

    // Validate required fields based on form type
    const requiredFields = ["firstName", "lastName", "email"]
    
    // Add additional required fields based on form type
    if (formType === "volunteer") {
      requiredFields.push("phone")
    } else if (formType === "host") {
      requiredFields.push("phone", "address")
    }

    for (const field of requiredFields) {
      if (!formEntries[field]) {
        return { success: false, message: `${field} is required` }
      }
    }

    // Add form type to entries
    formEntries.formType = formType

    // Send to Google Sheets
    try {
      console.log('Attempting to send to Google Sheets...')
      console.log('Webhook URL exists:', !!process.env.GOOGLE_SHEETS_WEBHOOK_URL)
      console.log('Webhook URL:', process.env.GOOGLE_SHEETS_WEBHOOK_URL)
      console.log('Form data:', formEntries)
      
      const sheetsResponse = await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formEntries),
      })

      console.log('Google Sheets response status:', sheetsResponse.status)
      console.log('Google Sheets response text:', await sheetsResponse.text())

      if (!sheetsResponse.ok) {
        console.error('Google Sheets submission failed:', sheetsResponse.statusText)
        return { success: false, message: "Failed to submit form. Please try again." }
      } else {
        console.log('Google Sheets submission successful!')
      }
    } catch (sheetsError) {
      console.error('Error sending to Google Sheets:', sheetsError)
      return { success: false, message: "Failed to submit form. Please try again." }
    }

    return { success: true, message: "Form submitted successfully!" }
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "There was an error submitting the form. Please try again.",
    }
  }
}

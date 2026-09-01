"use server"

// TODO: PHASE 6C.2 — IMPLEMENT SMS CONSENT ONLY AFTER CAMPAIGN SMS PROGRAM IS CONFIRMED

import {
  isCampaignFormType,
  parseCampaignForm,
  type CampaignFormType,
} from "@/lib/campaign-form"

const GENERIC_SUCCESS = {
  success: true as const,
  message: "Form submitted successfully!",
}

const GENERIC_VALIDATION = {
  success: false as const,
  message: "Please check the form and try again.",
}

const GENERIC_ERROR = {
  success: false as const,
  message: "Failed to submit form. Please try again.",
}

const WEBHOOK_TIMEOUT_MS = 10000

export async function submitForm(formType: CampaignFormType, formData: FormData) {
  if (!isCampaignFormType(formType)) {
    console.error("Campaign form submission failed", { formType: "unsupported" })
    return GENERIC_VALIDATION
  }

  const parsed = parseCampaignForm(formType, formData)
  if (!parsed.ok) {
    if (parsed.reason === "honeypot") {
      return GENERIC_SUCCESS
    }
    return GENERIC_VALIDATION
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL
  if (!webhookUrl) {
    console.error("Campaign form submission failed", {
      formType,
      reason: "missing-webhook-config",
    })
    return GENERIC_ERROR
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), WEBHOOK_TIMEOUT_MS)

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsed.payload),
      signal: controller.signal,
    })

    if (!response.ok) {
      console.error("Campaign form submission failed", {
        formType,
        status: response.status,
      })
      return GENERIC_ERROR
    }

    return GENERIC_SUCCESS
  } catch {
    console.error("Campaign form submission failed", { formType })
    return GENERIC_ERROR
  } finally {
    clearTimeout(timeoutId)
  }
}

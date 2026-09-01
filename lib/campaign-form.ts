export const FORM_TYPES = ["endorse", "volunteer", "host"] as const
export type CampaignFormType = (typeof FORM_TYPES)[number]

const ALLOWED_FIELDS = {
  endorse: ["firstName", "lastName", "title", "organization", "email", "phone", "message"],
  volunteer: ["firstName", "lastName", "email", "phone", "availability"],
  host: ["firstName", "lastName", "email", "phone", "address", "notes"],
} as const

const REQUIRED_FIELDS = {
  endorse: ["firstName", "lastName", "email", "phone"],
  volunteer: ["firstName", "lastName", "email", "phone"],
  host: ["firstName", "lastName", "email", "phone", "address"],
} as const

const FIELD_MAX_LENGTH = {
  firstName: 100,
  lastName: 100,
  title: 150,
  organization: 200,
  email: 254,
  phone: 50,
  availability: 500,
  address: 300,
  message: 2000,
  notes: 2000,
} as const

type AllowedField = keyof typeof FIELD_MAX_LENGTH

export type CampaignFormParseResult =
  | { ok: true; payload: Record<string, string> }
  | { ok: false; reason: "honeypot" | "invalid" }

export function isCampaignFormType(value: string): value is CampaignFormType {
  return (FORM_TYPES as readonly string[]).includes(value)
}

function readTrimmedString(formData: FormData, key: string): string | null {
  const value = formData.get(key)
  if (value === null) return ""
  if (typeof value !== "string") return null
  return value.trim()
}

function isBasicEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function hasEnoughPhoneDigits(value: string): boolean {
  return value.replace(/\D/g, "").length >= 7
}

export function parseCampaignForm(
  formType: CampaignFormType,
  formData: FormData,
): CampaignFormParseResult {
  const honeypot = formData.get("website")
  if (honeypot !== null && typeof honeypot !== "string") {
    return { ok: false, reason: "honeypot" }
  }
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: false, reason: "honeypot" }
  }

  const payload: Record<string, string> = { formType }

  for (const field of ALLOWED_FIELDS[formType]) {
    const value = readTrimmedString(formData, field)
    if (value === null) {
      return { ok: false, reason: "invalid" }
    }
    if (value.length > FIELD_MAX_LENGTH[field as AllowedField]) {
      return { ok: false, reason: "invalid" }
    }
    payload[field] = value
  }

  for (const field of REQUIRED_FIELDS[formType]) {
    if (!payload[field]) {
      return { ok: false, reason: "invalid" }
    }
  }

  if (!isBasicEmail(payload.email ?? "")) {
    return { ok: false, reason: "invalid" }
  }

  if (!hasEnoughPhoneDigits(payload.phone ?? "")) {
    return { ok: false, reason: "invalid" }
  }

  return { ok: true, payload }
}

import type { Metadata } from "next"
import { campaign } from "@/lib/campaign"

export const metadataBaseUrl = new URL(`https://${campaign.website}`)

export const sharePreviewImage = {
  url: "/SMS-preview-image-new.png",
  width: 1731,
  height: 909,
  alt: `${campaign.candidateName} for the Western Municipal Water District, ${campaign.division}. Affordable Water. Reliable Future.`,
  type: "image/png",
} as const

export const shareSocialMetadata = {
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${campaign.candidateName} for the Western Municipal Water District`,
    images: [sharePreviewImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [sharePreviewImage.url],
  },
} satisfies Pick<Metadata, "openGraph" | "twitter">

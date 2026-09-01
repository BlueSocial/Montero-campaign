export const impactBlocks = [
  {
    number: "01",
    eyebrow: "Your bill",
    title: "What You Pay",
    copy: [
      "Water Board decisions influence budgets, infrastructure spending, long-term investments, and the rates residents ultimately pay.",
      "Rate increases should never feel like a mystery. Ratepayers deserve transparency about where their money is going, why costs are changing, and what alternatives were considered.",
    ],
    bottomLine: "You deserve to understand your water bill.",
    icon: "dollar" as const,
    accent: "gold" as const,
    videoSrc: "/video/why-water-matters/01-your-bill.scrub.mp4",
    posterSrc: "/video/why-water-matters/01-your-bill.webp",
  },
  {
    number: "02",
    eyebrow: "Your water",
    title: "Where It Comes From",
    copy: [
      "Southern California depends on a mix of local and imported water. How much we invest in recycling, groundwater, conservation, storage, and other local resources affects our long-term reliability and costs.",
      "A stronger local water portfolio can help our communities become more prepared for drought and supply disruptions.",
    ],
    bottomLine: "Reliable water requires planning before there's a crisis.",
    icon: "droplets" as const,
    accent: "sky" as const,
    videoSrc: "/video/why-water-matters/02-your-water.scrub.mp4",
    posterSrc: "/video/why-water-matters/02-your-water.webp",
  },
  {
    number: "03",
    eyebrow: "Your neighborhood",
    title: "The Infrastructure You Rarely See",
    copy: [
      "Pipelines, pumps, treatment systems, storage facilities, and other infrastructure work behind the scenes every day.",
      "When those systems are properly maintained, most residents never think about them. When maintenance is delayed, small problems can become expensive emergencies.",
    ],
    bottomLine: "Responsible infrastructure protects service and ratepayers.",
    icon: "wrench" as const,
    accent: "navy" as const,
    videoSrc: "/video/why-water-matters/03-your-neighborhood.scrub.mp4",
    posterSrc: "/video/why-water-matters/03-your-neighborhood.webp",
  },
  {
    number: "04",
    eyebrow: "Your future",
    title: "How We Prepare for What's Ahead",
    copy: [
      "Drought, extreme heat, population growth, and changing water supplies make long-term planning increasingly important for Inland Southern California.",
      "The choices made today about conservation, local supply, storage, and infrastructure will shape how prepared our communities are tomorrow.",
    ],
    bottomLine: "Water planning is future planning.",
    icon: "leaf" as const,
    accent: "goldSky" as const,
    videoSrc: "/video/why-water-matters/04-your-future.scrub.mp4",
    posterSrc: "/video/why-water-matters/04-your-future.webp",
  },
] as const

export type ImpactBlock = (typeof impactBlocks)[number]

/** Dissolve length in seconds from chapter i → i+1 (and the reverse). */
export const impactCrossfadeSeconds = [0.38, 0.43, 0.58] as const

export function impactCrossfadeDuration(fromIndex: number, toIndex: number) {
  if (fromIndex < 0 || fromIndex === toIndex) return 0.32
  if (Math.abs(fromIndex - toIndex) !== 1) return 0.2
  return impactCrossfadeSeconds[Math.min(fromIndex, toIndex)]
}

export const boardFlow = {
  source: "Board Decisions",
  outcomes: ["Rates", "Supply", "Infrastructure", "Resilience"],
  result: "Your Household",
} as const

export const boardFaq = [
  {
    title: "Review Budgets & Rates",
    body: "Board members review district finances, rate proposals, spending priorities, and long-term financial planning.",
  },
  {
    title: "Plan for Water Reliability",
    body: "Board members help set priorities for water supply, conservation, storage, recycling, and future infrastructure.",
  },
  {
    title: "Oversee Infrastructure Investment",
    body: "Board members help determine how public resources are invested in pipelines, treatment systems, facilities, and other critical assets.",
  },
  {
    title: "Represent Ratepayers",
    body: "Board members are elected to bring community priorities, questions, and concerns into district decision-making.",
  },
] as const

export const christenApproach = [
  "protect ratepayers",
  "plan responsibly",
  "strengthen local reliability",
  "and make decisions with the long term in mind",
] as const

export const campaignPriorities = [
  {
    id: "affordability",
    title: "Protect Ratepayers & Keep Water Affordable",
    description:
      "Water is an essential public resource, and families deserve to understand what they are paying for. Christen will push for transparent rate decisions, responsible budgeting, expanded affordability programs, and aggressive pursuit of state and federal funding so the cost of major infrastructure improvements does not fall entirely on local ratepayers.",
    supportingLine: "Transparent rates. Responsible spending. Families first.",
    icon: "shield-check",
    featured: true,
  },
  {
    id: "local-supply",
    title: "Build a Reliable Local Water Supply",
    description:
      "Our region should be less dependent on increasingly expensive imported water. Christen supports investing in local water recycling, groundwater recharge, stormwater capture, conservation, and storage to strengthen long-term reliability and prepare our communities for drought and future growth.",
    supportingLine: "More local water. Greater reliability.",
    icon: "droplets",
    featured: false,
  },
  {
    id: "infrastructure",
    title: "Modernize & Protect Our Infrastructure",
    description:
      "Reliable water depends on reliable infrastructure. Christen will support responsible long-term investment in pipelines, treatment facilities, storage, and critical systems so maintenance happens before small problems become expensive emergencies.",
    supportingLine: "Plan ahead. Maintain responsibly. Prevent costly failures.",
    icon: "wrench",
    featured: false,
  },
  {
    id: "conservation",
    title: "Conserve Water Without Burdening Families",
    description:
      "Smart conservation should make life easier and more affordable—not simply ask families to do more with less. Christen supports practical rebates, efficient irrigation, recycled water, drought-resilient landscaping, and programs that help residents, businesses, and local agriculture use water more efficiently.",
    supportingLine: "Practical conservation that works.",
    icon: "leaf",
    featured: false,
  },
  {
    id: "local-jobs",
    title: "Create Good Local Jobs Through Public Investment",
    description:
      "Major water infrastructure investments should strengthen the communities paying for them. Christen supports high workforce and safety standards, local career pathways, skilled apprenticeships, and partnerships that create family-sustaining jobs here in the Inland Empire.",
    supportingLine: "Invest in water. Invest in local workers.",
    icon: "hard-hat",
    featured: false,
  },
] as const

export type CampaignPriority = (typeof campaignPriorities)[number]
export type PriorityIconName = CampaignPriority["icon"]

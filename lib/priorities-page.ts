import { campaignPriorities } from "@/lib/priorities"

export const priorityNav = [
  { href: "#affordability", label: "Affordability" },
  { href: "#reliability", label: "Supply" },
  { href: "#infrastructure", label: "Infrastructure" },
  { href: "#conservation", label: "Conservation" },
  { href: "#local-jobs", label: "Local Jobs" },
] as const

export const guidingPrinciples = [
  {
    label: "Affordability",
    question: "How will this affect ratepayers?",
  },
  {
    label: "Reliability",
    question: "Will this strengthen our water supply and infrastructure?",
  },
  {
    label: "Accountability",
    question: "Is the decision transparent, responsible, and focused on long-term value?",
  },
] as const

export const transparencyCommitments = [
  {
    title: "Plain-Language Information",
    body: "Make budgets, rate decisions, and major projects easier for the public to understand.",
  },
  {
    title: "Community Engagement",
    body: "Create meaningful opportunities for residents to weigh in before major decisions are made.",
  },
  {
    title: "Accessible Meetings",
    body: "Support modern tools that make public meetings and information easier to access.",
  },
  {
    title: "Clear Decision-Making",
    body: "Explain major votes and the reasoning behind them.",
  },
] as const

export const summaryLabels = [
  "Affordable",
  "Reliable",
  "Resilient",
  "Sustainable",
  "Accountable",
] as const

export const prioritySections = [
  {
    anchor: "affordability",
    priorityId: "affordability",
    number: "01",
    eyebrow: "Ratepayer protection",
    opening:
      "Water is an essential public resource, not a luxury. Rising utility costs place real pressure on working families, seniors, and small businesses, which is why affordability and transparency must be central to every major Water Board decision.",
    subsections: [
      {
        title: "Transparent Rate Decisions",
        body: "Ratepayers should clearly understand why rates are changing, where their money is going, and what alternatives were considered before increases are approved.",
      },
      {
        title: "Responsible Budgeting",
        body: "Major spending decisions should be evaluated for long-term value, operational necessity, and their impact on household budgets.",
      },
      {
        title: "Pursue Outside Funding",
        body: "The district should aggressively pursue available state and federal infrastructure funding so critical improvements do not fall entirely on local ratepayers.",
      },
      {
        title: "Affordability Programs",
        body: "Christen supports practical programs that help qualifying households manage essential water costs while maintaining a safe and reliable system.",
      },
    ],
    takeaway: "Safe, reliable water with transparent costs and fewer unnecessary burdens on families.",
  },
  {
    anchor: "reliability",
    priorityId: "local-supply",
    number: "02",
    eyebrow: "Water reliability",
    opening:
      "Southern California's water future depends on becoming more resilient and less vulnerable to expensive imported supplies. Christen supports a diversified strategy that develops more reliable local resources while planning for drought and future growth.",
    subsections: [
      {
        title: "Water Recycling",
        body: "Expand responsible use of recycled water for appropriate non-drinking purposes such as irrigation, landscaping, parks, and other compatible uses.",
      },
      {
        title: "Stormwater Capture",
        body: "Capture more rainfall when it arrives and use it to help replenish local groundwater rather than allowing valuable water to leave the region.",
      },
      {
        title: "Groundwater Recharge & Local Supply",
        body: "Support investments that strengthen local groundwater resources and improve the district's long-term supply portfolio.",
      },
      {
        title: "Storage & Drought Preparedness",
        body: "Plan ahead so the district has greater resilience during prolonged drought, extreme heat, and supply disruptions.",
      },
      {
        title: "Imported Water Dependence",
        body: "Reducing unnecessary dependence on increasingly expensive imported water can help strengthen local reliability and provide more control over long-term costs.",
      },
    ],
    takeaway: "More local water, greater reliability, and better preparation for the future.",
  },
  {
    anchor: "infrastructure",
    priorityId: "infrastructure",
    number: "03",
    eyebrow: "Responsible infrastructure",
    opening:
      "Reliable service depends on infrastructure most people rarely see—pipelines, pumps, treatment facilities, storage systems, and other critical assets. Waiting until systems fail is often the most expensive way to manage them.",
    subsections: [
      {
        title: "Preventative Maintenance",
        body: "Support long-term maintenance and rehabilitation planning before aging systems become emergencies.",
      },
      {
        title: "Smart Capital Planning",
        body: "Prioritize infrastructure investments based on safety, reliability, condition, and long-term value.",
      },
      {
        title: "Resilient Facilities",
        body: "Prepare critical water facilities for drought, extreme heat, power disruptions, wildfire conditions, and other emergencies.",
      },
      {
        title: "Transparency on Major Projects",
        body: "Ratepayers deserve clear information about major capital projects, timelines, costs, and why those investments are necessary.",
      },
    ],
    takeaway: "Maintain what we have, modernize what we need, and prevent expensive failures before they happen.",
  },
  {
    anchor: "conservation",
    priorityId: "conservation",
    number: "04",
    eyebrow: "Practical conservation",
    opening:
      "Conservation works best when people have practical tools and incentives—not when families are simply told to do more with less.",
    subsections: [
      {
        title: "Rebates & Incentives",
        body: "Support useful conservation programs that help households and businesses reduce water use and lower long-term costs.",
      },
      {
        title: "Efficient Irrigation",
        body: "Encourage technologies and practices that help landscaping, local agriculture, and other outdoor users apply water more efficiently.",
      },
      {
        title: "Drought-Resilient Landscaping",
        body: "Help residents transition toward landscapes suited to Inland Southern California's climate without treating conservation as one-size-fits-all.",
      },
      {
        title: "Recycled Water",
        body: "Expand recycled water where appropriate so high-quality drinking water is preserved for uses that truly require it.",
      },
      {
        title: "Agriculture",
        body: "Christen's work in local agriculture gives her firsthand appreciation for balancing conservation with the realities facing growers, small farms, and working families.",
      },
    ],
    takeaway: "Use water smarter while making conservation practical and accessible.",
  },
  {
    anchor: "local-jobs",
    priorityId: "local-jobs",
    number: "05",
    eyebrow: "Local economic opportunity",
    opening:
      "Christen advocates for strong workplace safety, local career pathways, and industry-certified apprenticeships that build a highly skilled workforce. Through strategic partnerships with local labor and business leaders, Christen is committed to protecting good-paying, family-sustaining jobs and driving economic growth right here in the Inland Empire.",
    subsections: [
      {
        title: "High Workforce Standards",
        body: "Support strong safety, training, and workforce standards on major public infrastructure projects.",
      },
      {
        title: "Local Career Pathways",
        body: "Build stronger connections between water infrastructure needs, local workers, apprenticeship programs, and regional educational institutions.",
      },
      {
        title: "Skilled Apprenticeships",
        body: "Support pathways that allow local residents to learn specialized trades while earning and building long-term careers.",
      },
      {
        title: "Responsible Public Investment",
        body: "Public dollars should deliver reliable infrastructure and real community benefit. Christen will work with local labor and business leaders on high safety and training standards, including Project Labor Agreements where they help keep skilled work and good jobs in the Inland Empire.",
      },
    ],
    takeaway: "Invest in our water system while creating opportunity here at home.",
  },
] as const

export function getPriorityTitle(priorityId: string) {
  return campaignPriorities.find((priority) => priority.id === priorityId)?.title ?? ""
}

import { Droplets, HardHat, Leaf, ShieldCheck, Wrench, type LucideIcon } from "lucide-react"
import { campaignPriorities, type PriorityIconName } from "@/lib/priorities"

const icons: Record<PriorityIconName, LucideIcon> = {
  "shield-check": ShieldCheck,
  droplets: Droplets,
  wrench: Wrench,
  leaf: Leaf,
  "hard-hat": HardHat,
}

export default function CampaignPriorities() {
  const featured = campaignPriorities.find((priority) => priority.featured) ?? campaignPriorities[0]
  const remaining = campaignPriorities.filter((priority) => priority.id !== featured.id)
  const [second, third, fourth, fifth] = remaining
  const FeaturedIcon = icons[featured.icon]

  return (
    <section id="priorities" className="scroll-mt-24 bg-sky-blue/[0.06] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
          Christen's Priorities
        </p>
        <h2 className="mb-6 text-center text-3xl font-bold text-navy-blue md:text-4xl">
          A Practical Plan for Our Water Future
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700 md:mb-16">
          Water policy should deliver real results for the people who depend on it every day. Christen's priorities focus on protecting ratepayers, strengthening our local water supply, investing responsibly in infrastructure, and preparing our communities for the future.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex h-full flex-col rounded-lg border border-golden-yellow/60 bg-[#fffaf0] p-7 md:p-8">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-blue">
              Top priority
            </p>
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-golden-yellow/25 text-navy-blue">
              <FeaturedIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mb-3 text-2xl font-semibold leading-snug text-navy-blue">
              {featured.title}
            </h3>
            <p className="mb-6 flex-1 leading-relaxed text-gray-700">{featured.description}</p>
            <p className="border-t border-golden-yellow/40 pt-4 text-sm font-medium text-navy-blue">
              {featured.supportingLine}
            </p>
          </article>

          <PriorityArticle priority={second} />
          <PriorityArticle priority={third} />
          <PriorityArticle priority={fourth} />
          <PriorityArticle priority={fifth} wide />
        </div>
      </div>
    </section>
  )
}

function PriorityArticle({
  priority,
  wide = false,
}: {
  priority: (typeof campaignPriorities)[number]
  wide?: boolean
}) {
  const Icon = icons[priority.icon]

  return (
    <article
      className={`flex h-full flex-col rounded-lg border border-gray-200 bg-white p-7 md:p-8 ${
        wide ? "md:col-span-2 md:max-w-none lg:flex-row lg:items-start lg:gap-10" : ""
      }`}
    >
      <div className={wide ? "lg:max-w-xl" : ""}>
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-blue/10 text-sky-blue">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mb-3 text-xl font-semibold leading-snug text-navy-blue md:text-2xl">
          {priority.title}
        </h3>
      </div>
      <div className="flex flex-1 flex-col">
        <p className="mb-6 flex-1 leading-relaxed text-gray-700">{priority.description}</p>
        <p className="border-t border-gray-200 pt-4 text-sm font-medium text-sky-blue">
          {priority.supportingLine}
        </p>
      </div>
    </article>
  )
}

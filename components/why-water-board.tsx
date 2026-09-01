import { DollarSign, Droplets, Wrench } from "lucide-react"

const cards = [
  {
    title: "Your Water Bill",
    description:
      "Responsible budgeting, transparent rate decisions, and outside funding can help protect families from unnecessary costs.",
    icon: DollarSign,
    accent: "border-sky-blue",
    iconWrap: "bg-sky-blue/10 text-sky-blue",
  },
  {
    title: "Our Water Supply",
    description:
      "Investing in reliable local water sources, recycling, conservation, and storage helps reduce our dependence on increasingly expensive imported water.",
    icon: Droplets,
    accent: "border-golden-yellow",
    iconWrap: "bg-golden-yellow/15 text-navy-blue",
  },
  {
    title: "Our Infrastructure",
    description:
      "Pipelines, treatment systems, and water facilities must be responsibly maintained and modernized before small problems become costly emergencies.",
    icon: Wrench,
    accent: "border-sky-blue",
    iconWrap: "bg-sky-blue/10 text-sky-blue",
  },
] as const

export default function WhyWaterBoard() {
  return (
    <section id="why-water-matters" className="relative scroll-mt-24 bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
          Why this race matters
        </p>
        <h2 className="mb-6 text-center text-3xl font-bold text-navy-blue md:text-4xl">
          Why Your Water Board Matters
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-700 md:mb-16">
          Western Municipal Water District makes decisions that directly affect one of our most essential resources. From the cost of your water bill to the reliability of our local supply, these decisions reach every household and community.
        </p>

        <div className="grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map(({ title, description, icon: Icon, accent, iconWrap }) => (
            <article
              key={title}
              className={`flex h-full flex-col rounded-lg border border-gray-200 border-t-4 ${accent} bg-white p-8 shadow-sm`}
            >
              <div className={`mb-5 inline-flex rounded-full p-3.5 ${iconWrap}`}>
                <Icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-navy-blue">{title}</h3>
              <p className="flex-1 leading-relaxed text-gray-700">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

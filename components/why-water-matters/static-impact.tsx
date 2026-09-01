import { impactBlocks } from "@/lib/why-water-matters"
import {
  DollarSign,
  Droplets,
  Leaf,
  Wrench,
  type LucideIcon,
} from "lucide-react"

const icons: Record<(typeof impactBlocks)[number]["icon"], LucideIcon> = {
  dollar: DollarSign,
  droplets: Droplets,
  wrench: Wrench,
  leaf: Leaf,
}

const blockSurfaces = ["bg-white", "bg-gray-50", "bg-white", "bg-sky-blue/[0.06]"] as const

const visualFields: Record<(typeof impactBlocks)[number]["accent"], string> = {
  gold: "bg-[#fff8e8]",
  sky: "bg-sky-blue/[0.14]",
  navy: "bg-navy-blue",
  goldSky: "bg-gradient-to-br from-sky-blue/20 to-[#fff8e8]",
}

function WaveMark({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 200 80" fill="none">
      <path d="M0 38 Q50 12 100 38 T200 38" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 54 Q50 28 100 54 T200 54" stroke="currentColor" strokeWidth="1.5" opacity="0.45" />
    </svg>
  )
}

function ImpactVisual({
  number,
  accent,
  Icon,
}: {
  number: string
  accent: (typeof impactBlocks)[number]["accent"]
  Icon: LucideIcon
}) {
  const onNavy = accent === "navy"
  return (
    <div
      className={`relative flex min-h-[16rem] items-center justify-center overflow-hidden rounded-lg md:min-h-[18rem] ${visualFields[accent]} ${
        onNavy ? "ring-1 ring-inset ring-white/10" : "ring-1 ring-inset ring-navy-blue/10"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 select-none font-serif text-[7.5rem] font-bold leading-none md:text-[9rem] ${
          onNavy ? "text-white/[0.08]" : "text-golden-yellow/20"
        }`}
      >
        {number}
      </span>
      <WaveMark
        className={`pointer-events-none absolute bottom-3 left-6 right-6 h-12 w-auto ${
          onNavy ? "text-golden-yellow/35" : "text-sky-blue/40"
        }`}
      />
      <div className="relative z-10 flex items-center gap-3 px-8 py-10 md:gap-4">
        <span
          className={`inline-flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full md:h-20 md:w-20 ${
            onNavy ? "bg-sky-blue/25 text-golden-yellow" : "bg-white text-navy-blue shadow-sm"
          }`}
        >
          <Icon className="h-9 w-9 md:h-10 md:w-10" aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className={`h-px w-7 md:w-10 ${onNavy ? "bg-golden-yellow/50" : "bg-navy-blue/25"}`}
        />
        <p className={`font-serif text-6xl font-bold leading-none md:text-7xl ${onNavy ? "text-golden-yellow" : "text-navy-blue"}`}>
          {number}
        </p>
      </div>
    </div>
  )
}

export function StaticImpactChapters() {
  return (
    <>
      {impactBlocks.map((block, index) => {
        const Icon = icons[block.icon]
        const visualLeft = index % 2 === 1
        return (
          <section key={block.number} className={`py-12 md:py-16 ${blockSurfaces[index]}`}>
            <div className="container mx-auto px-4">
              <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-14">
                <div className={visualLeft ? "md:order-2" : undefined}>
                  <p className="mb-2 font-serif text-3xl font-bold text-golden-yellow md:text-4xl">{block.number}</p>
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                    {block.eyebrow}
                  </p>
                  <h3 className="mb-4 font-serif text-2xl font-bold leading-tight text-navy-blue md:text-3xl">
                    {block.title}
                  </h3>
                  <div className="max-w-lg space-y-4 text-base leading-[1.7] text-gray-700 md:text-[17px]">
                    {block.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-6 mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-blue">
                    Bottom line
                  </p>
                  <p className="border-l-4 border-golden-yellow pl-4 font-serif text-lg leading-snug text-navy-blue md:text-xl">
                    {block.bottomLine}
                  </p>
                </div>
                <div className={visualLeft ? "md:order-1" : undefined}>
                  <ImpactVisual number={block.number} accent={block.accent} Icon={Icon} />
                </div>
              </div>
            </div>
          </section>
        )
      })}
    </>
  )
}

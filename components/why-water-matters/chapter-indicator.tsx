import type { ImpactBlock } from "@/lib/why-water-matters"
import { cn } from "@/lib/utils"

type ChapterIndicatorProps = {
  blocks: readonly ImpactBlock[]
  activeIndex: number | null
}

export function ChapterIndicator({ blocks, activeIndex }: ChapterIndicatorProps) {
  return (
    <nav aria-label="Everyday impact chapters" className="mt-3.5">
      <ol className="flex flex-col xl:flex-row xl:flex-wrap xl:items-center">
        {blocks.map((block, index) => {
          const active = activeIndex === index
          const isLast = index === blocks.length - 1
          return (
            <li key={block.number} className="flex xl:items-center">
              <div className="flex w-3 shrink-0 flex-col items-center xl:hidden">
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-1.5 h-2 w-2 rounded-full",
                    active ? "bg-golden-yellow" : "border border-navy-blue/35 bg-white",
                  )}
                />
                {!isLast ? <span aria-hidden="true" className="my-0.5 w-px flex-1 bg-navy-blue/20" /> : null}
              </div>
              <p
                className={cn(
                  "flex items-center gap-2 pb-2.5 text-[11px] leading-tight tracking-wide xl:pb-0 xl:text-[12px]",
                  isLast && "pb-0",
                  active ? "font-semibold text-navy-blue" : "font-medium text-navy-blue/55",
                )}
                aria-current={active ? "true" : undefined}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "hidden h-2 w-2 shrink-0 rounded-full xl:inline-block",
                    active ? "bg-golden-yellow" : "border border-navy-blue/35 bg-white",
                  )}
                />
                <span className={cn("tabular-nums", active ? "text-golden-yellow" : "text-navy-blue/50")}>
                  {block.number}
                </span>
                <span className="capitalize">{block.eyebrow}</span>
              </p>
              {!isLast ? (
                <span
                  aria-hidden="true"
                  className="mx-3 hidden h-px w-7 shrink-0 bg-navy-blue/20 xl:block"
                />
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

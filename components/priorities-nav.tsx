"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { priorityNav } from "@/lib/priorities-page"

const SECTION_IDS = [
  "affordability",
  "reliability",
  "infrastructure",
  "conservation",
  "local-jobs",
] as const

export const priorityRailItems = [
  { id: "affordability", number: "01", label: "Affordability" },
  { id: "reliability", number: "02", label: "Local Supply" },
  { id: "infrastructure", number: "03", label: "Infrastructure" },
  { id: "conservation", number: "04", label: "Conservation" },
  { id: "local-jobs", number: "05", label: "Local Jobs" },
] as const

type ActivePriorityContextValue = {
  activeId: string
  setActiveId: (id: string) => void
}

const ActivePriorityContext = createContext<ActivePriorityContextValue>({
  activeId: SECTION_IDS[0],
  setActiveId: () => {},
})

export function ActivePriorityProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0])

  useEffect(() => {
    const nodes = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (nodes.length === 0) return

    const ratios = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }

        let next = ""
        let best = 0
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0
          if (ratio > best) {
            best = ratio
            next = id
          }
        }
        if (next) setActiveId(next)
      },
      {
        root: null,
        rootMargin: "-28% 0px -52% 0px",
        threshold: [0, 0.08, 0.16, 0.3, 0.5, 0.75, 1],
      },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <ActivePriorityContext.Provider value={{ activeId, setActiveId }}>
      {children}
    </ActivePriorityContext.Provider>
  )
}

function useActivePriority() {
  return useContext(ActivePriorityContext)
}

export function PrioritiesHorizontalNav() {
  const { activeId, setActiveId } = useActivePriority()

  return (
    <nav
      aria-label="Priority sections"
      className="border-y border-gray-200 bg-gray-50 md:sticky md:top-[7rem] md:z-40 md:border-gray-200 md:bg-white/95 md:shadow-[0_1px_0_rgba(11,11,52,0.06)] md:backdrop-blur-sm xl:hidden"
    >
      <div className="container mx-auto px-4">
        <ul className="mx-auto flex w-max max-w-full snap-x snap-mandatory gap-1 overflow-x-auto py-3">
          {priorityNav.map((item) => {
            const id = item.href.slice(1)
            const isActive = activeId === id
            return (
              <li key={item.href} className="shrink-0 snap-start">
                <a
                  href={item.href}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveId(id)}
                  className={`inline-flex h-9 items-center rounded-full px-4 text-sm font-medium motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 ${
                    isActive
                      ? "bg-navy-blue text-white shadow-[inset_0_-2px_0_0_#f4c338]"
                      : "text-navy-blue/55 hover:bg-white hover:text-navy-blue"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export function PrioritiesRailNav() {
  const { activeId, setActiveId } = useActivePriority()

  return (
    <nav
      aria-label="Priority chapters"
      className="pointer-events-none absolute inset-y-0 left-[max(1rem,calc(50%-26rem-12.5rem))] z-30 hidden w-44 xl:block"
    >
      <div className="pointer-events-auto sticky top-32">
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
          Chapters
        </p>
        <ul className="space-y-0.5 border-l border-navy-blue/15">
          {priorityRailItems.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-label={`${item.number} ${item.label}`}
                  aria-current={isActive ? "location" : undefined}
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-baseline gap-2.5 border-l-2 py-2 pl-3 pr-2 text-[13px] leading-snug motion-safe:transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-blue focus-visible:ring-offset-2 ${
                    isActive
                      ? "-ml-px border-golden-yellow bg-sky-blue/10 font-semibold text-navy-blue"
                      : "border-transparent font-medium text-navy-blue/65 hover:text-navy-blue"
                  }`}
                >
                  <span
                    className={`font-serif text-sm font-bold ${
                      isActive ? "text-golden-yellow" : "text-navy-blue/40"
                    }`}
                  >
                    {item.number}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

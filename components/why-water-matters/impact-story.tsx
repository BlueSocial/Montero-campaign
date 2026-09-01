"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { impactBlocks } from "@/lib/why-water-matters"
import { cn } from "@/lib/utils"
import { CinematicPlayer } from "@/components/why-water-matters/cinematic-player"
import { ChapterIndicator } from "@/components/why-water-matters/chapter-indicator"

const CINEMATIC_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)"

function readChapterScrub(root: HTMLElement) {
  const chapters = Array.from(root.querySelectorAll<HTMLElement>("[data-chapter]"))
  if (chapters.length === 0) return { index: null as number | null, progress: 0 }

  const line = window.innerHeight * 0.5
  const firstTop = chapters[0].getBoundingClientRect().top
  const last = chapters[chapters.length - 1]
  const lastBottom = last.getBoundingClientRect().bottom

  if (line < firstTop) return { index: null, progress: 0 }
  if (line > lastBottom) return { index: null, progress: 1 }

  for (let index = 0; index < chapters.length; index++) {
    const top = chapters[index].getBoundingClientRect().top
    const nextTop = index < chapters.length - 1 ? chapters[index + 1].getBoundingClientRect().top : lastBottom
    if (line <= nextTop) {
      const span = Math.max(nextTop - top, 1)
      const progress = Math.min(1, Math.max(0, (line - top) / span))
      return { index, progress }
    }
  }

  return { index: chapters.length - 1, progress: 1 }
}

export function ImpactStory() {
  const rootRef = useRef<HTMLElement>(null)
  const progressRef = useRef([0, 0, 0, 0])
  const activeIndexRef = useRef<number | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const media = window.matchMedia(CINEMATIC_QUERY)
    const sync = () => setEnabled(media.matches)
    sync()
    media.addEventListener("change", sync)
    window.addEventListener("resize", sync)
    return () => {
      media.removeEventListener("change", sync)
      window.removeEventListener("resize", sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      setActiveIndex(null)
      activeIndexRef.current = null
      return
    }

    const root = rootRef.current
    if (!root) return

    gsap.registerPlugin(ScrollTrigger)

    const syncFromLayout = () => {
      const state = readChapterScrub(root)
      if (state.index === null) {
        if (activeIndexRef.current !== null) {
          activeIndexRef.current = null
          setActiveIndex(null)
        }
        return
      }
      progressRef.current[state.index] = state.progress
      if (activeIndexRef.current !== state.index) {
        activeIndexRef.current = state.index
        setActiveIndex(state.index)
      }
    }

    const kick = () => {
      syncFromLayout()
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        onUpdate: kick,
        onEnter: kick,
        onEnterBack: kick,
        onLeave: kick,
        onLeaveBack: kick,
      })
    }, root)

    ScrollTrigger.refresh()
    window.addEventListener("scroll", kick, { passive: true })
    window.addEventListener("resize", kick)
    syncFromLayout()

    return () => {
      window.removeEventListener("scroll", kick)
      window.removeEventListener("resize", kick)
      ctx.revert()
    }
  }, [enabled])

  return (
    <section ref={rootRef} className="bg-white py-4 lg:py-5">
      <div className="mx-auto w-full max-w-[92rem] px-4 lg:px-6 xl:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(17rem,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,1.55fr)_minmax(17rem,1fr)] xl:gap-10 2xl:grid-cols-[minmax(0,1.7fr)_minmax(18rem,1fr)]">
          <aside className="sticky top-28 z-10 self-start">
            <CinematicPlayer
              blocks={impactBlocks}
              activeIndex={activeIndex}
              enabled={enabled}
              progressRef={progressRef}
              activeIndexRef={activeIndexRef}
            />
            <ChapterIndicator blocks={impactBlocks} activeIndex={activeIndex} />
          </aside>

          <div>
            {impactBlocks.map((block, index) => {
              const active = activeIndex === index
              return (
                <article
                  key={block.number}
                  data-chapter={block.number}
                  className="flex min-h-[92vh] items-start pt-28 pb-16 xl:min-h-[100vh] xl:pb-24"
                >
                  <div
                    className={cn(
                      "border-l-4 pl-4 transition-opacity duration-300 xl:pl-5",
                      active ? "border-golden-yellow opacity-100" : "border-transparent opacity-[0.65]",
                    )}
                  >
                    <p
                      className={cn(
                        "mb-1.5 font-serif text-2xl font-bold xl:text-3xl",
                        active ? "text-golden-yellow" : "text-navy-blue/50",
                      )}
                    >
                      {block.number}
                    </p>
                    <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                      {block.eyebrow}
                    </p>
                    <h2 className="mb-3 font-serif text-[1.35rem] font-bold leading-tight text-navy-blue xl:text-2xl">
                      {block.title}
                    </h2>
                    <div className="space-y-3.5 text-[15px] leading-[1.65] text-gray-700 xl:text-base">
                      {block.copy.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <p className="mt-5 mb-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-blue">
                      Bottom line
                    </p>
                    <p className="border-l-4 border-golden-yellow pl-3.5 font-serif text-base leading-snug text-navy-blue xl:text-lg">
                      {block.bottomLine}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

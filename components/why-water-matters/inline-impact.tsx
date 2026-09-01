"use client"

import { useEffect, useRef, useState } from "react"
import { impactBlocks, type ImpactBlock } from "@/lib/why-water-matters"

const MOTION_OK = "(prefers-reduced-motion: no-preference)"
const PLAY_RATIO = 0.55
const KEEP_RATIO = 0.22
const SURFACES = ["bg-white", "bg-gray-50", "bg-white", "bg-sky-blue/[0.06]"] as const

function ChapterMedia({
  block,
  index,
  motionOk,
  attach,
}: {
  block: ImpactBlock
  index: number
  motionOk: boolean
  attach: (index: number, el: HTMLDivElement | null) => void
}) {
  return (
    <div
      ref={(el) => attach(index, el)}
      data-chapter-media={block.number}
      className="relative aspect-video w-full overflow-hidden rounded-md bg-navy-blue bg-cover bg-center shadow-[0_16px_36px_-18px_rgba(11,11,52,0.45)] ring-1 ring-navy-blue/15"
      style={{ backgroundImage: `url(${block.posterSrc})` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={block.posterSrc}
        alt=""
        width={1280}
        height={720}
        draggable={false}
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {motionOk ? (
        <video
          className="absolute inset-0 z-10 h-full w-full object-cover opacity-0"
          muted
          playsInline
          controls={false}
          loop={false}
          preload="none"
          tabIndex={-1}
          aria-hidden="true"
          onPlaying={(event) => {
            event.currentTarget.style.opacity = "1"
          }}
          onPause={(event) => {
            if (!event.currentTarget.ended) event.currentTarget.style.opacity = "0"
          }}
          onEnded={(event) => {
            event.currentTarget.pause()
            event.currentTarget.style.opacity = "1"
          }}
        />
      ) : null}
    </div>
  )
}

export function InlineImpactChapters() {
  const [motionOk, setMotionOk] = useState(false)
  const framesRef = useRef<(HTMLDivElement | null)[]>([])
  const loadedRef = useRef([false, false, false, false])
  const ratiosRef = useRef([0, 0, 0, 0])
  const activeRef = useRef<number | null>(null)

  const videoOf = (index: number) => framesRef.current[index]?.querySelector("video") ?? null

  const loadClip = (index: number) => {
    if (!motionOk || index < 0 || index >= impactBlocks.length) return
    const video = videoOf(index)
    if (!video || loadedRef.current[index]) return
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true
    video.preload = "auto"
    video.src = impactBlocks[index].videoPlaybackSrc
    video.load()
    loadedRef.current[index] = true
  }

  const pauseIndex = (index: number) => {
    const video = videoOf(index)
    if (!video) return
    video.pause()
    if (!video.ended) video.style.opacity = "0"
  }

  const unloadIndex = (index: number) => {
    if (index < 0 || index >= impactBlocks.length) return
    const video = videoOf(index)
    if (!video || !loadedRef.current[index]) return
    video.pause()
    video.style.opacity = "0"
    video.removeAttribute("src")
    video.load()
    loadedRef.current[index] = false
  }

  const activate = (index: number) => {
    const wasActive = activeRef.current === index
    activeRef.current = index

    impactBlocks.forEach((_, other) => {
      if (other !== index) pauseIndex(other)
      if (other !== index && other !== index + 1) unloadIndex(other)
    })

    loadClip(index)
    loadClip(index + 1)

    const video = videoOf(index)
    if (!video) return
    video.muted = true
    video.defaultMuted = true
    video.playsInline = true

    if (!wasActive && (video.ended || video.currentTime > 0.05)) {
      try {
        video.currentTime = 0
      } catch {
        /* metadata may not be ready yet */
      }
    } else if (wasActive && video.ended) {
      video.pause()
      video.style.opacity = "1"
      return
    }

    const play = () => {
      if (activeRef.current !== index || video.ended) return
      void video.play().catch(() => {})
    }
    if (video.readyState >= 2) {
      requestAnimationFrame(play)
    } else {
      video.addEventListener("loadeddata", play, { once: true })
    }
  }

  const pauseActive = () => {
    if (activeRef.current == null) return
    pauseIndex(activeRef.current)
    activeRef.current = null
  }

  const measureRatios = () => {
    const viewport = window.innerHeight
    framesRef.current.forEach((frame, index) => {
      if (!frame) {
        ratiosRef.current[index] = 0
        return
      }
      const box = frame.getBoundingClientRect()
      const visible = Math.max(0, Math.min(box.bottom, viewport) - Math.max(box.top, 0))
      ratiosRef.current[index] = box.height > 0 ? visible / box.height : 0
    })
  }

  const pickActive = () => {
    const ratios = ratiosRef.current
    let best = -1
    let bestRatio = 0
    ratios.forEach((ratio, index) => {
      if (ratio >= PLAY_RATIO && ratio > bestRatio) {
        best = index
        bestRatio = ratio
      }
    })

    const current = activeRef.current
    if (current != null && ratios[current] >= KEEP_RATIO) {
      if (best !== -1 && best !== current && bestRatio > ratios[current]) return best
      return current
    }
    return best === -1 ? null : best
  }

  const syncActive = () => {
    measureRatios()
    const next = pickActive()
    if (next == null) pauseActive()
    else activate(next)
  }

  useEffect(() => {
    const media = window.matchMedia(MOTION_OK)
    const sync = () => setMotionOk(media.matches)
    sync()
    media.addEventListener("change", sync)
    return () => media.removeEventListener("change", sync)
  }, [])

  useEffect(() => {
    if (!motionOk) {
      framesRef.current.forEach((_, index) => unloadIndex(index))
      activeRef.current = null
      return
    }

    const playObserver = new IntersectionObserver(
      () => {
        syncActive()
      },
      { threshold: [0, 0.2, 0.22, 0.35, 0.5, 0.55, 0.6, 0.75, 1] },
    )

    const nearObserver = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        loadClip(0)
      },
      { root: null, rootMargin: "0px 0px 80px 0px", threshold: 0 },
    )

    framesRef.current.forEach((frame, index) => {
      if (!frame) return
      frame.dataset.index = String(index)
      playObserver.observe(frame)
      if (index === 0) nearObserver.observe(frame)
    })

    const onScroll = () => syncActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    requestAnimationFrame(onScroll)

    return () => {
      playObserver.disconnect()
      nearObserver.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      pauseActive()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [motionOk])

  const attach = (index: number, el: HTMLDivElement | null) => {
    framesRef.current[index] = el
  }

  return (
    <>
      {impactBlocks.map((block, index) => (
        <section key={block.number} className={`py-10 md:py-14 ${SURFACES[index]}`}>
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <p className="mb-1.5 font-serif text-3xl font-bold text-golden-yellow md:text-4xl">{block.number}</p>
              <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-blue">
                {block.eyebrow}
              </p>
              <h3 className="mb-4 font-serif text-2xl font-bold leading-tight text-navy-blue md:mb-5 md:text-3xl">
                {block.title}
              </h3>
              <ChapterMedia block={block} index={index} motionOk={motionOk} attach={attach} />
              <div className="mt-6 max-w-lg space-y-3.5 text-base leading-[1.7] text-gray-700 md:space-y-4 md:text-[17px]">
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
          </div>
        </section>
      ))}
    </>
  )
}

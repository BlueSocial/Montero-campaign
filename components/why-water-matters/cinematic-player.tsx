"use client"

import { useEffect, useRef, useState, type MutableRefObject } from "react"
import gsap from "gsap"
import {
  impactCrossfadeDuration,
  type ImpactBlock,
} from "@/lib/why-water-matters"

type CinematicPlayerProps = {
  blocks: readonly ImpactBlock[]
  activeIndex: number | null
  enabled: boolean
  progressRef: MutableRefObject<number[]>
  activeIndexRef: MutableRefObject<number | null>
}

const HAVE_CURRENT_DATA = 2
const FRAME = 1 / 24

export function CinematicPlayer({
  blocks,
  activeIndex,
  enabled,
  progressRef,
  activeIndexRef,
}: CinematicPlayerProps) {
  const stageRef = useRef<HTMLDivElement>(null)
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)
  const visibleSlot = useRef<0 | 1>(0)
  const loadedIndex = useRef<[number | null, number | null]>([null, null])
  const loadingIndex = useRef<[number | null, number | null]>([null, null])
  const inflight = useRef<[Promise<HTMLVideoElement> | null, Promise<HTMLVideoElement> | null]>([null, null])
  const slotToken = useRef<[number, number]>([0, 0])
  const generation = useRef(0)
  const fadeTween = useRef<gsap.core.Timeline | null>(null)
  const lastShown = useRef<number | null>(null)
  const prevActive = useRef<number | null>(null)
  const preparedFirst = useRef(false)
  const lastAppliedTime = useRef<[number | null, number | null]>([null, null])
  const pendingTime = useRef<[number | null, number | null]>([null, null])
  const scrubRaf = useRef(0)
  const [posterIndex, setPosterIndex] = useState(0)

  const layerEl = (slot: 0 | 1) => (slot === 0 ? videoARef.current : videoBRef.current)

  const unloadAll = () => {
    generation.current += 1
    fadeTween.current?.kill()
    fadeTween.current = null
    lastShown.current = null
    prevActive.current = null
    preparedFirst.current = false
    lastAppliedTime.current = [null, null]
    pendingTime.current = [null, null]
    if (scrubRaf.current) {
      window.cancelAnimationFrame(scrubRaf.current)
      scrubRaf.current = 0
    }
    loadedIndex.current = [null, null]
    loadingIndex.current = [null, null]
    inflight.current = [null, null]
    visibleSlot.current = 0
    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue
      video.pause()
      video.removeAttribute("src")
      video.src = ""
      video.load()
      video.style.opacity = "0"
    }
  }

  const findSlot = (index: number): 0 | 1 | null => {
    if (loadedIndex.current[0] === index || loadingIndex.current[0] === index) return 0
    if (loadedIndex.current[1] === index || loadingIndex.current[1] === index) return 1
    return null
  }

  const loadClip = (slot: 0 | 1, index: number) => {
    const video = layerEl(slot)
    if (!video) return Promise.reject(new Error("missing video"))

    if (loadedIndex.current[slot] === index && video.readyState >= HAVE_CURRENT_DATA) {
      video.pause()
      return Promise.resolve(video)
    }
    const pending = inflight.current[slot]
    if (loadingIndex.current[slot] === index && pending) {
      return pending
    }

    const token = ++slotToken.current[slot]
    loadedIndex.current[slot] = null
    loadingIndex.current[slot] = index
    lastAppliedTime.current[slot] = null
    pendingTime.current[slot] = null

    const promise = new Promise<HTMLVideoElement>((resolve, reject) => {
      const onReady = () => {
        if (token !== slotToken.current[slot]) return
        if (video.readyState < HAVE_CURRENT_DATA) return
        video.pause()
        loadedIndex.current[slot] = index
        loadingIndex.current[slot] = null
        inflight.current[slot] = null
        video.removeEventListener("loadeddata", onReady)
        video.removeEventListener("canplay", onReady)
        video.removeEventListener("error", onError)
        resolve(video)
      }
      const onError = () => {
        if (token !== slotToken.current[slot]) return
        loadingIndex.current[slot] = null
        inflight.current[slot] = null
        video.removeEventListener("loadeddata", onReady)
        video.removeEventListener("canplay", onReady)
        video.removeEventListener("error", onError)
        reject(new Error("video error"))
      }

      video.addEventListener("loadeddata", onReady)
      video.addEventListener("canplay", onReady)
      video.addEventListener("error", onError)
      video.muted = true
      video.playsInline = true
      video.preload = "auto"
      video.src = blocks[index].videoScrubSrc
      video.load()
    })

    inflight.current[slot] = promise
    return promise
  }

  const prepareIndex = (index: number) => {
    if (!enabled || index < 0 || index >= blocks.length) return
    if (findSlot(index) !== null) return
    const hidden: 0 | 1 = visibleSlot.current === 0 ? 1 : 0
    void loadClip(hidden, index).catch(() => {})
  }

  const usableDuration = (video: HTMLVideoElement) => {
    const duration = video.duration
    if (!Number.isFinite(duration) || duration <= FRAME) return 8
    return Math.max(duration - FRAME, 0)
  }

  const clampTime = (video: HTMLVideoElement, time: number) => {
    const usable = usableDuration(video)
    return Math.min(Math.max(time, 0), usable)
  }

  const isTimeBuffered = (video: HTMLVideoElement, time: number) => {
    const { buffered } = video
    for (let i = 0; i < buffered.length; i++) {
      if (buffered.start(i) <= time + FRAME && buffered.end(i) >= time) return true
    }
    return video.readyState >= HAVE_CURRENT_DATA && Math.abs(video.currentTime - time) < FRAME
  }

  const targetTimeFor = (video: HTMLVideoElement, progress: number) =>
    clampTime(video, usableDuration(video) * Math.min(Math.max(progress, 0), 1))

  const applySeek = (video: HTMLVideoElement, time: number, slot: 0 | 1, force = false) => {
    if (!video.paused) video.pause()
    const target = clampTime(video, time)

    if (!force) {
      const last = lastAppliedTime.current[slot]
      if (last != null && Math.abs(last - target) < FRAME) return
      if (Math.abs(video.currentTime - target) < FRAME) {
        lastAppliedTime.current[slot] = target
        pendingTime.current[slot] = null
        return
      }
    }

    if (video.readyState < 1) {
      pendingTime.current[slot] = target
      return
    }

    // No decoded frame yet: keep the poster up and retry when data arrives.
    if (video.readyState < HAVE_CURRENT_DATA) {
      pendingTime.current[slot] = target
      lastAppliedTime.current[slot] = target
      try {
        video.currentTime = target
      } catch {
        /* ignore seek abort */
      }
      return
    }

    pendingTime.current[slot] = null
    lastAppliedTime.current[slot] = target
    try {
      video.currentTime = target
    } catch {
      /* ignore seek abort */
    }
  }

  const seekToward = (video: HTMLVideoElement, progress: number, slot: 0 | 1, force = false) => {
    applySeek(video, targetTimeFor(video, progress), slot, force)
  }

  const showChapter = (index: number) => {
    const gen = ++generation.current
    setPosterIndex(index)
    const fromIndex = lastShown.current

    const run = async () => {
      const existing = findSlot(index)
      const visible = visibleSlot.current
      const hidden: 0 | 1 = visible === 0 ? 1 : 0
      const incomingSlot: 0 | 1 = existing ?? hidden
      const outgoing = layerEl(visible)

      let incoming: HTMLVideoElement
      try {
        incoming = await loadClip(incomingSlot, index)
      } catch {
        return
      }
      if (gen !== generation.current) return

      incoming.pause()
      seekToward(incoming, progressRef.current[index] ?? 0, incomingSlot, true)

      fadeTween.current?.kill()
      visibleSlot.current = incomingSlot
      lastShown.current = index

      const instant = fromIndex == null || incoming === outgoing
      const duration = instant ? 0 : impactCrossfadeDuration(fromIndex ?? -1, index)

      if (instant) {
        incoming.style.opacity = "1"
        if (outgoing && outgoing !== incoming) outgoing.style.opacity = "0"
        if (outgoing && outgoing !== incoming) outgoing.pause()
        prepareIndex(index + 1)
        return
      }

      const timeline = gsap.timeline({
        defaults: { ease: "power1.inOut", overwrite: "auto" },
        onComplete: () => {
          if (gen !== generation.current) return
          incoming.style.opacity = "1"
          if (outgoing && outgoing !== incoming) {
            outgoing.style.opacity = "0"
            outgoing.pause()
          }
          prepareIndex(index + 1)
        },
      })
      fadeTween.current = timeline
      timeline.fromTo(incoming, { opacity: Number(incoming.style.opacity) || 0 }, { opacity: 1, duration }, 0)
      if (outgoing && outgoing !== incoming) {
        timeline.fromTo(
          outgoing,
          { opacity: Number(outgoing.style.opacity) || 1 },
          { opacity: 0, duration },
          0,
        )
      }
    }

    void run()
  }

  useEffect(() => {
    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue
      video.muted = true
      video.defaultMuted = true
      video.playsInline = true
      video.pause()
      video.style.opacity = "0"
    }
  }, [])

  useEffect(() => {
    if (!enabled) {
      unloadAll()
      setPosterIndex(0)
      return
    }

    const stage = stageRef.current
    if (!stage) return

    const prepareFirstIfNear = () => {
      if (preparedFirst.current) return
      const top = stage.getBoundingClientRect().top
      if (top < window.innerHeight * 2.3) {
        preparedFirst.current = true
        void loadClip(0, 0).catch(() => {})
      }
    }

    prepareFirstIfNear()

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        if (preparedFirst.current) return
        preparedFirst.current = true
        void loadClip(0, 0).catch(() => {})
      },
      { root: null, rootMargin: "0px 0px 130% 0px", threshold: 0 },
    )
    observer.observe(stage)
    window.addEventListener("scroll", prepareFirstIfNear, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", prepareFirstIfNear)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, blocks])

  useEffect(() => {
    if (!enabled) return

    if (activeIndex === prevActive.current) return
    prevActive.current = activeIndex

    if (activeIndex === null) {
      generation.current += 1
      fadeTween.current?.kill()
      videoARef.current?.pause()
      videoBRef.current?.pause()
      lastShown.current = null
      return
    }

    showChapter(activeIndex)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, enabled])

  useEffect(() => {
    if (!enabled) return
    let live = true

    const tick = () => {
      scrubRaf.current = 0
      if (!live) return
      const index = activeIndexRef.current
      if (index === null) return
      const slot = findSlot(index)
      if (slot === null) return
      if (loadedIndex.current[slot] !== index && loadingIndex.current[slot] !== index) return
      const video = layerEl(slot)
      if (!video) return
      if (!video.paused) video.pause()
      seekToward(video, progressRef.current[index] ?? 0, slot)
    }

    const kick = () => {
      if (!live || scrubRaf.current) return
      scrubRaf.current = window.requestAnimationFrame(tick)
    }

    const retryPending = (event: Event) => {
      if (!live) return
      const video = event.currentTarget as HTMLVideoElement
      const slot: 0 | 1 = video === videoARef.current ? 0 : 1
      const pending = pendingTime.current[slot]
      if (pending == null) return
      if (!isTimeBuffered(video, pending) && video.readyState < 3) return
      applySeek(video, pending, slot, true)
    }

    for (const video of [videoARef.current, videoBRef.current]) {
      if (!video) continue
      video.addEventListener("progress", retryPending)
      video.addEventListener("canplay", retryPending)
      video.addEventListener("seeked", retryPending)
    }
    window.addEventListener("scroll", kick, { passive: true })
    window.addEventListener("resize", kick)

    return () => {
      live = false
      if (scrubRaf.current) {
        window.cancelAnimationFrame(scrubRaf.current)
        scrubRaf.current = 0
      }
      window.removeEventListener("scroll", kick)
      window.removeEventListener("resize", kick)
      for (const video of [videoARef.current, videoBRef.current]) {
        if (!video) continue
        video.removeEventListener("progress", retryPending)
        video.removeEventListener("canplay", retryPending)
        video.removeEventListener("seeked", retryPending)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, progressRef, activeIndexRef])

  useEffect(() => () => unloadAll(), [])

  const poster = blocks[posterIndex] ?? blocks[0]
  const marker = blocks[activeIndex ?? posterIndex] ?? blocks[0]

  return (
    <figure className="m-0">
      <div
        ref={stageRef}
        className="relative aspect-video overflow-hidden rounded-md bg-navy-blue shadow-[0_22px_48px_-20px_rgba(11,11,52,0.55)] ring-1 ring-navy-blue/15"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={poster.posterSrc}
          alt=""
          width={1280}
          height={720}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoARef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop={false}
          preload="none"
          tabIndex={-1}
          aria-hidden="true"
          onEnded={(event) => event.currentTarget.pause()}
        />
        <video
          ref={videoBRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          playsInline
          loop={false}
          preload="none"
          tabIndex={-1}
          aria-hidden="true"
          onEnded={(event) => event.currentTarget.pause()}
        />
        <p
          aria-hidden="true"
          className="absolute right-3 top-3 font-serif text-[11px] font-bold tabular-nums tracking-[0.18em] text-white/90 drop-shadow"
        >
          {marker.number} / 04
        </p>
      </div>
      <figcaption className="sr-only">
        {marker.eyebrow}: {marker.title}
      </figcaption>
    </figure>
  )
}

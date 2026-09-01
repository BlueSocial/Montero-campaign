"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

function headerOffset() {
  const header = document.querySelector("header")
  if (header instanceof HTMLElement) {
    return header.getBoundingClientRect().height + 12
  }
  return 104
}

function scrollToHash(hash: string) {
  const id = decodeURIComponent(hash.replace(/^#/, ""))
  if (!id) return false
  const el = document.getElementById(id)
  if (!el) return false
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - headerOffset())
  window.scrollTo({ top, behavior: "auto" })
  return true
}

function applyLocationHash() {
  return scrollToHash(window.location.hash)
}

/**
 * Next.js Link scrolls to the top on route changes and often ignores the URL hash,
 * especially in Safari. Retry after layout/images settle.
 */
export default function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const run = () => {
      applyLocationHash()
    }

    run()
    const frame = window.requestAnimationFrame(run)
    const timeouts = [80, 250, 600, 1200].map((ms) => window.setTimeout(run, ms))

    return () => {
      window.cancelAnimationFrame(frame)
      timeouts.forEach((id) => window.clearTimeout(id))
    }
  }, [pathname])

  useEffect(() => {
    const onHashChange = () => {
      applyLocationHash()
    }

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as Element | null)?.closest("a")
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) return

      let url: URL
      try {
        url = new URL(href, window.location.href)
      } catch {
        return
      }
      if (url.origin !== window.location.origin || !url.hash) return
      if (url.pathname !== window.location.pathname) return

      event.preventDefault()
      if (window.location.hash !== url.hash) {
        window.location.hash = url.hash
      } else {
        scrollToHash(url.hash)
      }
      window.setTimeout(() => scrollToHash(url.hash), 80)
    }

    window.addEventListener("hashchange", onHashChange)
    document.addEventListener("click", onClick, true)
    return () => {
      window.removeEventListener("hashchange", onHashChange)
      document.removeEventListener("click", onClick, true)
    }
  }, [])

  return null
}

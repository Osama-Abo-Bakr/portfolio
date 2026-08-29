"use client"

import { useEffect, useRef } from "react"

/**
 * Reveals an element once, the first time it enters the viewport.
 * Elements marked `data-reveal-child` inside it stagger behind it.
 * Falls through to fully-visible when motion is reduced or the
 * observer is unavailable, so content never depends on the effect.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => {
      node.setAttribute("data-shown", "true")
      node.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach((child, i) => {
        child.style.transitionDelay = `${Math.min(i, 8) * 70}ms`
        child.setAttribute("data-shown", "true")
      })
    }

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduced || typeof IntersectionObserver === "undefined") {
      show()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show()
            observer.disconnect()
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}

"use client"

import { useEffect, useRef } from "react"

/**
 * Renders the real value on the server. On the client, if the number is
 * scrolled into view later, it counts up to the target from START_RATIO of
 * it — never from 0, and never visibly drops a number that is already on screen.
 */
const START_RATIO = 0.7
const DURATION = 1200

export function AnimatedStat({
  target,
  suffix,
  className,
}: {
  target: number
  suffix: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let raf = 0
    let first = true
    const render = (v: number) => {
      el.textContent = `${v}${suffix}`
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        // Already visible on load: keep the server-rendered value as is.
        if (first && entry.isIntersecting) return io.disconnect()
        if (first) {
          first = false
          render(Math.round(target * START_RATIO))
          return
        }
        if (!entry.isIntersecting) return
        io.disconnect()
        const from = target * START_RATIO
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / DURATION, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          render(Math.round(from + (target - from) * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [target, suffix])

  return (
    <span ref={ref} className={className}>
      {target}
      {suffix}
    </span>
  )
}

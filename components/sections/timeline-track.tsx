"use client"

import { useRef } from "react"
import { m, useReducedMotion, useScroll, useSpring } from "framer-motion"

/**
 * Wraps the process steps and draws the connecting line, which fills as the
 * section scrolls through the viewport (horizontal on desktop, vertical on mobile).
 */
export function TimelineTrack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const fill = reduce ? 1 : progress

  return (
    <div ref={ref} className="relative">
      {/* Desktop: runs through the centre of the number badges. */}
      <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-1 rounded-full bg-border lg:block">
        <m.div
          className="h-full origin-left rounded-full bg-gradient-to-r from-copper-600 to-copper-400"
          style={{ scaleX: fill }}
        />
      </div>
      {/* Mobile / tablet: vertical line on the left. */}
      <div aria-hidden className="absolute bottom-8 left-8 top-8 w-1 -translate-x-1/2 rounded-full bg-border lg:hidden">
        <m.div
          className="h-full w-full origin-top rounded-full bg-gradient-to-b from-copper-600 to-copper-400"
          style={{ scaleY: fill }}
        />
      </div>
      {children}
    </div>
  )
}

"use client"

import { LazyMotion, domAnimation } from "framer-motion"

/**
 * Loads only the animation features the site uses (no drag/layout), so
 * `m.*` components stay small. `strict` flags any full `motion.*` import.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  )
}

"use client"

import { motion, useReducedMotion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

const HIDDEN = "polygon(0 100%, 50% 100%, 100% 100%, 100% 100%, 0 100%)"
// Rises as a gable (roof peak in the middle), then levels off.
const GABLE = "polygon(0 55%, 50% 15%, 100% 55%, 100% 100%, 0 100%)"
const SHOWN = "polygon(0 0, 50% 0, 100% 0, 100% 100%, 0 100%)"

/**
 * Reveals an image block when it scrolls into view: a bottom-up wipe shaped
 * like a roof gable while the content settles from a slight zoom. Children are
 * laid out inside an absolutely positioned layer, so give the wrapper a size.
 *
 * The in-view check sits on the unclipped wrapper: Chrome treats a fully
 * clipped element as not intersecting, so it would never start otherwise.
 */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={cn("relative overflow-hidden", className)}>{children}</div>

  const clip: Variants = {
    hidden: { clipPath: HIDDEN },
    visible: {
      clipPath: [HIDDEN, GABLE, SHOWN],
      transition: { duration: 1.1, delay, ease: EASE, times: [0, 0.55, 1] },
    },
  }
  const zoom: Variants = {
    hidden: { scale: 1.18 },
    visible: { scale: 1, transition: { duration: 1.4, delay, ease: EASE } },
  }

  return (
    <motion.div
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="absolute inset-0 overflow-hidden" variants={clip}>
        <motion.div className="absolute inset-0" variants={zoom}>
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

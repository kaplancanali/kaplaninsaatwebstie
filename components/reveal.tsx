"use client"

import { m, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/** Fades and slides its content in once when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  /** Use "li" when the item sits directly inside a list. */
  as?: "div" | "li"
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  const Motion = as === "li" ? m.li : m.div
  return (
    <Motion
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Motion>
  )
}

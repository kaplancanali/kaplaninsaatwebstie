"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { useReducedMotion } from "framer-motion"

export function AnimatedStat({
  target,
  suffix,
  className,
}: {
  target: number
  suffix: string
  className?: string
}) {
  const [ref, inView] = useInView(0.4)
  const reduce = useReducedMotion()
  const [value, setValue] = useState(target)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current || reduce) return
    started.current = true
    const duration = 1400
    const startTime = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, reduce, target])

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  )
}

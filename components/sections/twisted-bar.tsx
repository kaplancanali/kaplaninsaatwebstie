"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import {
  animate,
  m,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { ZoomIn } from "lucide-react"

export type BarItem = { image: StaticImageData; alt: string }

const CARD_H = 200
const STEP = CARD_H + 16
const SPEED = 34 // px per second
const DEFAULT_VIEW_H = 520

const mod = (n: number, m: number) => ((n % m) + m) % m

/**
 * One card of the bar. Its position wraps around the strip, and it twists in
 * 3D the further it is from the centre, so the whole column reads as a slowly
 * turning, twisted bar.
 */
function TwistCard({
  item,
  index,
  total,
  offset,
  viewH,
  twist,
  label,
  onOpen,
  onFocusCard,
}: {
  item: BarItem
  index: number
  total: number
  offset: MotionValue<number>
  viewH: MotionValue<number>
  twist: number
  label: string
  onOpen: () => void
  onFocusCard: () => void
}) {
  const transform = useTransform([offset, viewH], ([o, h]: number[]) => {
    const y = mod(index * STEP + o, total) - STEP
    const t = (y + CARD_H / 2 - h / 2) / (h / 2) // -1 at the top, 1 at the bottom
    const clamped = Math.max(-1.4, Math.min(1.4, t))
    const rotY = clamped * 34 * twist
    const rotX = -clamped * 14
    const z = -Math.abs(clamped) * 110
    const scale = 1 - Math.abs(clamped) * 0.07
    return `translate3d(0, ${y}px, ${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`
  })

  return (
    <m.button
      type="button"
      onClick={onOpen}
      onFocus={onFocusCard}
      aria-label={`${item.alt} — ${label}`}
      style={{ transform, height: CARD_H }}
      className="group absolute inset-x-5 top-0 overflow-hidden rounded-2xl border border-white/10 bg-navy-800 shadow-lift [backface-visibility:hidden] will-change-transform"
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        placeholder="blur"
        sizes="(min-width: 1024px) 380px, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span
        aria-hidden
        className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        <span className="flex w-full items-center justify-between gap-2 text-left text-sm font-medium text-white">
          <span className="line-clamp-2">{item.alt}</span>
          <ZoomIn className="size-4 shrink-0" />
        </span>
      </span>
    </m.button>
  )
}

/** A vertical strip of photos that scrolls endlessly and twists in 3D. */
export function TwistedBar({
  items,
  direction = 1,
  twist = 1,
  label,
  onOpen,
}: {
  items: BarItem[]
  /** 1 = moves down, -1 = moves up. */
  direction?: 1 | -1
  /** Twist handedness, so neighbouring columns mirror each other. */
  twist?: 1 | -1
  label: string
  onOpen: (index: number) => void
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: "100px" })
  const offset = useMotionValue(0)
  const viewH = useMotionValue(DEFAULT_VIEW_H)
  const [paused, setPaused] = useState(false)
  const total = items.length * STEP

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => viewH.set(entry.contentRect.height))
    ro.observe(el)
    return () => ro.disconnect()
  }, [viewH])

  useAnimationFrame((_, delta) => {
    if (reduce || paused || !inView) return
    offset.set(offset.get() + (direction * SPEED * Math.min(delta, 64)) / 1000)
  })

  // Bring a keyboard-focused card to the centre of the strip.
  const centre = (index: number) => {
    const current = offset.get()
    const wanted = viewH.get() / 2 - CARD_H / 2 + STEP - index * STEP
    // Pick the equivalent target (mod total) closest to where the strip is now.
    const target = wanted + Math.round((current - wanted) / total) * total
    animate(offset, target, { duration: 0.6, ease: [0.16, 1, 0.3, 1] })
  }

  if (reduce) {
    return (
      <div className="h-[460px] space-y-4 overflow-y-auto rounded-3xl bg-navy-950 p-5 md:h-[520px]">
        {items.map((item, i) => (
          <button
            key={item.image.src}
            type="button"
            onClick={() => onOpen(i)}
            aria-label={`${item.alt} — ${label}`}
            className="relative block w-full overflow-hidden rounded-2xl"
            style={{ height: CARD_H }}
          >
            <Image src={item.image} alt={item.alt} fill placeholder="blur" sizes="(min-width: 1024px) 380px, 100vw" className="object-cover" />
          </button>
        ))}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
      }}
      className="relative h-[460px] overflow-hidden rounded-3xl bg-navy-950 [perspective:1100px] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[520px]"
    >
      <div aria-hidden className="pattern-truss absolute inset-0 text-white/[0.04]" />
      <div className="absolute inset-0 [transform-style:preserve-3d]">
        {items.map((item, i) => (
          <TwistCard
            key={item.image.src}
            item={item}
            index={i}
            total={total}
            offset={offset}
            viewH={viewH}
            twist={twist}
            label={label}
            onOpen={() => onOpen(i)}
            onFocusCard={() => centre(i)}
          />
        ))}
      </div>
    </div>
  )
}

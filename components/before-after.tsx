"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel,
  afterLabel,
  className,
}: {
  beforeSrc: string
  afterSrc: string
  beforeLabel: string
  afterLabel: string
  className?: string
}) {
  const [pos, setPos] = useState(50)

  const move = (clientX: number, rect: DOMRect) => {
    setPos(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)))
  }

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border cursor-ew-resize select-none bg-muted",
        className
      )}
      onMouseMove={(e) => move(e.clientX, e.currentTarget.getBoundingClientRect())}
      onTouchMove={(e) => move(e.touches[0].clientX, e.currentTarget.getBoundingClientRect())}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      aria-label={`${beforeLabel} / ${afterLabel}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4))
        if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4))
      }}
    >
      <img src={afterSrc} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={beforeSrc}
          alt={beforeLabel}
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: `${100 / (pos / 100)}%` }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-white shadow-lg"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white text-navy shadow-lg grid place-items-center text-xs font-bold">
          ↔
        </div>
      </div>
      <span className="absolute left-3 top-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white">
        {beforeLabel}
      </span>
      <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
        {afterLabel}
      </span>
    </div>
  )
}

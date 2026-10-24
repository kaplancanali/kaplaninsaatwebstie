"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { DEFAULT_AREA_ID, type ServiceArea } from "@/lib/data/areas"
import type { Lang } from "@/lib/translations"
import { cn } from "@/lib/utils"

/**
 * Illustrative (not to scale) shapes of Kocaeli's 12 districts around the
 * Gulf of İzmit. `small` districts get a smaller label so it fits.
 */
const SHAPES: { id: string; points: string; label: [number, number]; small?: boolean }[] = [
  { id: "kandira", points: "230,52 520,40 548,120 345,140 262,125", label: [395, 88] },
  { id: "gebze", points: "40,70 165,58 190,150 140,178 95,172 40,160", label: [108, 116] },
  { id: "cayirova", points: "40,160 95,172 100,205 40,200", label: [69, 186], small: true },
  { id: "darica", points: "40,200 100,205 120,228 40,233", label: [76, 218], small: true },
  { id: "dilovasi", points: "95,172 140,178 190,150 205,208 168,222 120,228 100,205", label: [152, 198], small: true },
  { id: "korfez", points: "165,58 230,52 262,125 282,138 282,214 205,208 190,150", label: [232, 165] },
  { id: "derince", points: "282,138 345,140 345,212 282,214", label: [313, 178], small: true },
  { id: "izmit", points: "345,140 548,120 505,226 430,240 345,212", label: [440, 182] },
  { id: "kartepe", points: "548,120 592,160 582,300 495,292 505,226", label: [545, 215] },
  { id: "karamursel", points: "40,269 140,265 160,263 172,352 40,352", label: [103, 310] },
  { id: "golcuk", points: "160,263 240,261 300,257 312,352 172,352", label: [238, 306] },
  { id: "basiskele", points: "300,257 340,257 430,266 470,263 495,292 482,358 312,352", label: [400, 310] },
]

const GULF = "40,233 120,228 168,222 205,208 282,214 345,212 430,240 470,262 430,266 340,257 240,261 140,265 40,269"

export function AreaExplorer({
  areas,
  lang,
  labels,
}: {
  areas: ServiceArea[]
  lang: Lang
  labels: { map: string; sea: string; gulf: string; hint: string }
}) {
  const [active, setActive] = useState(DEFAULT_AREA_ID)
  const current = areas.find((a) => a.id === active)!

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
      <figure className="relative overflow-hidden rounded-3xl bg-navy-950 p-4 text-white shadow-lift md:p-6">
        <div aria-hidden className="pattern-grid absolute inset-0 text-white/[0.04]" />
        <svg viewBox="0 0 610 372" role="img" aria-label={labels.map} className="relative h-auto w-full">
          <text x="320" y="24" textAnchor="middle" className="fill-sky-200/50 text-[14px] italic tracking-[0.3em] uppercase">
            {labels.sea}
          </text>
          <polygon points={GULF} className="fill-sky-400/15 stroke-sky-300/30" strokeWidth="1" />
          <text x="250" y="250" textAnchor="middle" className="fill-sky-200/60 text-[13px] italic">
            {labels.gulf}
          </text>

          {SHAPES.map((shape) => {
            const area = areas.find((a) => a.id === shape.id)
            if (!area) return null
            const isActive = area.id === active
            return (
              <g
                key={area.id}
                onMouseEnter={() => setActive(area.id)}
                onClick={() => setActive(area.id)}
                className="cursor-pointer"
              >
                <polygon
                  points={shape.points}
                  strokeWidth="3"
                  className={cn(
                    "stroke-navy-950 transition-[fill] duration-300",
                    isActive ? "fill-copper-600" : "fill-navy-700 hover:fill-navy-600"
                  )}
                />
                <text
                  x={shape.label[0]}
                  y={shape.label[1]}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    "pointer-events-none font-heading font-bold transition-[fill]",
                    shape.small ? "text-[12px]" : "text-[17px]",
                    isActive ? "fill-white" : "fill-white/80"
                  )}
                >
                  {area.name}
                </text>
              </g>
            )
          })}
        </svg>

        <figcaption className="relative mt-4 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4" aria-live="polite">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-copper-600">
            <MapPin className="size-5" aria-hidden />
          </span>
          <span>
            <span className="block font-heading text-lg font-bold">{current.name}</span>
            <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/75">
              {current.keywords[lang].map((k) => (
                <span key={k}>{k}</span>
              ))}
            </span>
          </span>
        </figcaption>
      </figure>

      <div>
        <p className="mb-4 text-sm text-muted-foreground">{labels.hint}</p>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          {areas.map((area) => {
            const isActive = area.id === active
            return (
              <li key={area.id}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(area.id)}
                  onFocus={() => setActive(area.id)}
                  onClick={() => setActive(area.id)}
                  className={cn(
                    "group h-full w-full rounded-2xl border p-4 text-left transition-[background-color,border-color,box-shadow] duration-300",
                    isActive ? "border-brand/50 bg-accent shadow-soft" : "bg-card hover:border-brand/30"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <MapPin
                      className={cn("size-4 transition-colors", isActive ? "text-brand" : "text-muted-foreground")}
                      aria-hidden
                    />
                    <span className="font-heading font-bold text-foreground">{area.name}</span>
                  </span>
                  <span className="mt-2 block space-y-0.5">
                    {area.keywords[lang].map((k) => (
                      <span key={k} className="block text-xs text-muted-foreground md:text-sm">
                        {k}
                      </span>
                    ))}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

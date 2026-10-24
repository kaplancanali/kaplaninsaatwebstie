"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Reveal } from "@/components/reveal"
import { TwistedBar, type BarItem } from "@/components/sections/twisted-bar"
import type { ServiceCategory } from "@/lib/data/services/types"
import type { Lang } from "@/lib/translations"

// The lightbox (and its CSS) only loads once a photo is opened.
const GalleryLightbox = dynamic(() => import("@/components/sections/gallery-lightbox"), { ssr: false })

type Column = { id: ServiceCategory; label: string; description: string; items: BarItem[] }

/** One twisted photo bar per category: side by side on desktop, stacked on phones. */
export function GalleryGrid({
  lang,
  columns,
  labels,
}: {
  lang: Lang
  columns: Column[]
  labels: { open: string; photos: string }
}) {
  const [open, setOpen] = useState<{ column: number; index: number } | null>(null)
  const slides = open
    ? columns[open.column].items.map((item) => ({
        src: item.image.src,
        width: item.image.width,
        height: item.image.height,
        alt: item.alt,
      }))
    : []

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:gap-6">
      {columns.map((column, c) => (
        <Reveal key={column.id} delay={c * 0.1}>
          <section aria-labelledby={`gallery-col-${column.id}`}>
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h3 id={`gallery-col-${column.id}`} className="text-xl font-extrabold text-foreground">
                  {column.label}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{column.description}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground tabular-nums">
                {column.items.length} {labels.photos}
              </span>
            </div>
            <TwistedBar
              items={column.items}
              direction={c % 2 === 0 ? -1 : 1}
              twist={c % 2 === 0 ? 1 : -1}
              label={labels.open}
              onOpen={(index) => setOpen({ column: c, index })}
            />
          </section>
        </Reveal>
      ))}

      {open && (
        <GalleryLightbox lang={lang} index={open.index} onClose={() => setOpen(null)} slides={slides} />
      )}
    </div>
  )
}

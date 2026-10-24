"use client"

import { useRef, useState } from "react"
import dynamic from "next/dynamic"
import Image, { type StaticImageData } from "next/image"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ZoomIn } from "lucide-react"
import type { ServiceCategory } from "@/lib/data/services/types"
import type { Lang } from "@/lib/translations"
import { cn } from "@/lib/utils"

// The lightbox (and its CSS) only loads once a photo is opened.
const GalleryLightbox = dynamic(() => import("@/components/sections/gallery-lightbox"), { ssr: false })

type Tab = { id: ServiceCategory; label: string; description: string }
type Item = { category: ServiceCategory; image: StaticImageData; alt: string }

export function GalleryGrid({
  lang,
  tabs,
  items,
  labels,
}: {
  lang: Lang
  tabs: Tab[]
  items: Item[]
  labels: { tabs: string; open: string }
}) {
  const reduce = useReducedMotion()
  const [active, setActive] = useState<ServiceCategory>(tabs[0].id)
  const [index, setIndex] = useState(-1)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const visible = items.filter((item) => item.category === active)
  const activeTab = tabs.find((t) => t.id === active)!

  // WAI-ARIA tabs: arrow keys move between tabs, Home/End jump to the ends.
  const onKeyDown = (e: React.KeyboardEvent, i: number) => {
    const next =
      e.key === "ArrowRight" ? (i + 1) % tabs.length
      : e.key === "ArrowLeft" ? (i - 1 + tabs.length) % tabs.length
      : e.key === "Home" ? 0
      : e.key === "End" ? tabs.length - 1
      : -1
    if (next < 0) return
    e.preventDefault()
    setActive(tabs[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label={labels.tabs}
        className="mx-auto grid max-w-md grid-cols-3 border-b md:flex md:w-fit md:max-w-none md:gap-6"
      >
        {tabs.map((tab, i) => {
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[i] = el
              }}
              id={`gallery-tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="gallery-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "relative rounded-t-lg px-2 pb-3.5 pt-2 text-center text-sm font-semibold leading-tight transition-colors md:whitespace-nowrap md:px-4 md:text-base",
                selected ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab.label}
              {selected && (
                <motion.span
                  layoutId="gallery-tab-underline"
                  aria-hidden
                  className="absolute inset-x-0 -bottom-px h-[3px] rounded-full bg-gradient-to-r from-copper-600 to-copper-400"
                  transition={reduce ? { duration: 0 } : { type: "spring", bounce: 0.18, duration: 0.5 }}
                />
              )}
            </button>
          )
        })}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-muted-foreground" aria-live="polite">
        {activeTab.description}
      </p>

      <AnimatePresence mode="wait" initial={false}>
        <motion.ul
          key={active}
          id="gallery-panel"
          role="tabpanel"
          aria-labelledby={`gallery-tab-${active}`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-10 columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4"
        >
          {visible.map((item, i) => (
            <li key={item.image.src} className="mb-3 break-inside-avoid md:mb-4">
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${item.alt} — ${labels.open}`}
                className="group relative block w-full overflow-hidden rounded-2xl border bg-muted"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  placeholder="blur"
                  sizes="(min-width: 1024px) 300px, (min-width: 768px) 33vw, 50vw"
                  className="h-auto w-full transition-transform duration-700 ease-out-expo group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-950/75 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <span className="flex w-full items-center justify-between gap-2 text-left text-xs font-medium text-white md:text-sm">
                    <span className="line-clamp-2">{item.alt}</span>
                    <ZoomIn className="size-4 shrink-0" />
                  </span>
                </span>
              </button>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>

      {index >= 0 && (
        <GalleryLightbox
          lang={lang}
          index={index}
          onClose={() => setIndex(-1)}
          slides={visible.map((item) => ({
            src: item.image.src,
            width: item.image.width,
            height: item.image.height,
            alt: item.alt,
          }))}
        />
      )}
    </div>
  )
}

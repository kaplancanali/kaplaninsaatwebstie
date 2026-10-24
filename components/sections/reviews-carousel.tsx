"use client"

import { useCallback, useSyncExternalStore } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, MapPin, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

type Review = { name: string; location: string; comment: string }
type Labels = { prev: string; next: string; goTo: string; rating: string; carousel: string; slide: string }

/** Accessible carousel: each review is rendered once; buttons, dots, arrow keys and swipe. */
export function ReviewsCarousel({ reviews, labels }: { reviews: Review[]; labels: Labels }) {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", slidesToScroll: "auto", containScroll: "trimSnaps" })

  // Read Embla's state through a store subscription instead of mirroring it in effects.
  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!api) return () => {}
      api.on("select", onChange).on("reInit", onChange)
      return () => {
        api.off("select", onChange).off("reInit", onChange)
      }
    },
    [api]
  )
  const selected = useSyncExternalStore(subscribe, () => api?.selectedScrollSnap() ?? 0, () => 0)
  const snapCount = useSyncExternalStore(subscribe, () => api?.scrollSnapList().length ?? 0, () => 0)

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      api?.scrollPrev()
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      api?.scrollNext()
    }
  }

  return (
    <div role="region" aria-roledescription="carousel" aria-label={labels.carousel} onKeyDown={onKeyDown}>
      <div ref={viewportRef} className="-mx-2 overflow-hidden px-2 py-2">
        <div className="-ml-5 flex touch-pan-y">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              role="group"
              aria-roledescription={labels.slide}
              aria-label={`${i + 1} / ${reviews.length}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-5 md:basis-1/2 lg:basis-1/3"
            >
              <figure className="flex h-full flex-col rounded-2xl border bg-card p-6 shadow-soft md:p-7">
                <div className="flex items-center justify-between">
                  <span className="flex gap-0.5" role="img" aria-label={labels.rating}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-4 fill-copper-500 text-copper-500" aria-hidden />
                    ))}
                  </span>
                  <Quote className="size-8 text-brand/20" aria-hidden />
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">“{review.comment}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                  <span aria-hidden className="flex size-10 items-center justify-center rounded-full bg-navy-900 font-heading font-bold text-white">
                    {review.name[0]}
                  </span>
                  <span>
                    <span className="block font-semibold text-foreground">{review.name}</span>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" aria-hidden />
                      {review.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`${labels.goTo} ${i + 1}`}
              aria-current={i === selected ? "true" : undefined}
              className={cn(
                "h-2.5 rounded-full transition-[width,background-color] duration-300",
                i === selected ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/40"
              )}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={selected === 0}
            aria-label={labels.prev}
            className="flex size-11 items-center justify-center rounded-xl border bg-card text-foreground transition-colors hover:border-brand/50 hover:text-brand disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronLeft className="size-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={snapCount > 0 && selected >= snapCount - 1}
            aria-label={labels.next}
            className="flex size-11 items-center justify-center rounded-xl border bg-card text-foreground transition-colors hover:border-brand/50 hover:text-brand disabled:pointer-events-none disabled:opacity-40"
          >
            <ChevronRight className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </div>
  )
}

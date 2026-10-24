"use client"

import { useState } from "react"
import Image from "next/image"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/before-after"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const categoryIds = ["cati", "oluk", "izolasyon"] as const

function slidesFor(id: (typeof categoryIds)[number]) {
  return [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    src: `/gallery/${id}/${n}.jpg`,
  }))
}

export function Projects() {
  const { t } = useLanguage()
  const g = t.gallery
  const [tab, setTab] = useState<(typeof categoryIds)[number]>("cati")
  const [index, setIndex] = useState(-1)
  const slides = slidesFor(tab)

  return (
    <section id="galeri" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{g.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">{g.title}</h2>
          <p className="text-muted-foreground text-lg">{g.subtitle}</p>
        </Reveal>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categoryIds.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                tab === id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {g.categories[i].label}
              {tab === id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          {g.categories[categoryIds.indexOf(tab)].description}
        </p>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {slides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-border break-inside-avoid"
            >
              <Image
                src={slide.src}
                alt=""
                width={600}
                height={i % 3 === 0 ? 760 : 480}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        <Reveal className="mt-14 max-w-3xl mx-auto">
          <h3 className="text-center font-heading font-bold text-xl mb-2">{g.beforeAfterTitle}</h3>
          <p className="text-center text-sm text-muted-foreground mb-5">{g.beforeAfterHint}</p>
          <BeforeAfterSlider
            beforeSrc="/placeholder.svg"
            afterSrc="/placeholder.svg"
            beforeLabel={g.before}
            afterLabel={g.after}
          />
        </Reveal>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-2xl px-8">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              {g.instagram}
            </a>
          </Button>
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const categoryIds = ["cati", "oluk", "izolasyon"] as const
type CatId = typeof categoryIds[number]

const images = (id: CatId) =>
  [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
    src: `/gallery/${id}/${n}.jpg`,
    alt: `${id} ${n}`,
  }))

export function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const { t } = useLanguage()
  const g = t.gallery

  return (
    <section id="galeri" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{g.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {g.title}
          </h2>
          <p className="text-muted-foreground text-lg">{g.subtitle}</p>
        </div>

        <Tabs defaultValue="cati" className="w-full gap-8">
          <TabsList className={cn("mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-2 rounded-2xl p-2 bg-muted/80")}>
            {categoryIds.map((id, i) => (
              <TabsTrigger key={id} value={id} className="rounded-xl px-4 py-2.5 text-sm data-[state=active]:shadow-md">
                {g.categories[i].label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categoryIds.map((id, i) => (
            <TabsContent key={id} value={id} className="mt-2">
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                {g.categories[i].description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {images(id).map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setLightbox(img)}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-2xl px-8">
            <a href="https://www.instagram.com/kaplaninsaat41/" target="_blank" rel="noopener noreferrer">
              {g.instagram}
            </a>
          </Button>
        </div>
      </div>

      <Dialog open={lightbox !== null} onOpenChange={(open) => { if (!open) setLightbox(null) }}>
        <DialogContent showCloseButton className="max-h-[92vh] max-w-[min(100vw-2rem,56rem)] gap-0 overflow-hidden p-2 sm:p-4 sm:max-w-[min(100vw-2rem,56rem)]">
          <DialogTitle className="sr-only">{lightbox?.alt ?? g.photoPreview}</DialogTitle>
          {lightbox && (
            <img src={lightbox.src} alt={lightbox.alt} className="max-h-[min(85vh,800px)] w-full rounded-lg object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

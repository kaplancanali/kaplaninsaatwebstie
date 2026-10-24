import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { GalleryGrid } from "@/components/sections/gallery-grid"
import { GALLERY } from "@/lib/data/gallery"
import { SERVICE_CATEGORIES } from "@/lib/data/services/nav"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

export function Gallery({ lang }: { lang: Lang }) {
  const g = getT(lang).gallery

  return (
    <section id="galeri" aria-labelledby="gallery-title" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div aria-hidden className="pattern-gutter absolute inset-x-0 top-0 h-40 text-brand/[0.07] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="site-container relative">
        <Reveal>
          <SectionHeading id="gallery-title" eyebrow={g.badge} title={g.title} description={g.subtitle} />
        </Reveal>

        <GalleryGrid
          lang={lang}
          tabs={SERVICE_CATEGORIES.map((id, i) => ({
            id,
            label: g.categories[i].label,
            description: g.categories[i].description,
          }))}
          items={GALLERY.map((item) => ({ category: item.category, image: item.image, alt: item.alt[lang] }))}
          labels={{ tabs: g.tabsLabel, open: g.openImage }}
        />

        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram aria-hidden />
              {g.instagram}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

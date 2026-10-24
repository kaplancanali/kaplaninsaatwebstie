import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { ReviewsCarousel } from "@/components/sections/reviews-carousel"
import { getT, type Lang } from "@/lib/translations"

export function Reviews({ lang }: { lang: Lang }) {
  const r = getT(lang).reviews

  return (
    <section id="yorumlar" aria-labelledby="reviews-title" className="bg-surface py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="reviews-title" eyebrow={r.badge} title={r.title} description={r.subtitle} />
        </Reveal>
        <Reveal className="mt-12" delay={0.05}>
          <ReviewsCarousel
            reviews={r.items}
            labels={{ prev: r.prev, next: r.next, goTo: r.goTo, rating: r.rating, carousel: r.carousel, slide: r.slide }}
          />
        </Reveal>
      </div>
    </section>
  )
}

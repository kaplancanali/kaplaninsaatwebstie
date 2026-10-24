import Image, { type StaticImageData } from "next/image"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RoofMark } from "@/components/ui/section-heading"
import { Breadcrumbs, type Crumb } from "@/components/service-pages/breadcrumbs"
import { sectionHref } from "@/lib/routes"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

type PageHeroProps = {
  lang: Lang
  crumbs: Crumb[]
  eyebrow: string
  title: string
  lead: string
  image?: StaticImageData
  imageAlt?: string
}

/** Dark, roof-cut page header used by the service guide pages. */
export function PageHero({ lang, crumbs, eyebrow, title, lead, image, imageAlt }: PageHeroProps) {
  const t = getT(lang)

  return (
    <section className="roof-cut-bottom relative isolate overflow-hidden bg-navy-950 text-white [--roof:min(5vw,64px)]">
      <div aria-hidden className="pattern-truss absolute inset-0 -z-10 text-white/[0.04]" />
      <div aria-hidden className="absolute -right-40 -top-40 -z-10 size-[520px] rounded-full bg-copper-600/15 blur-3xl" />

      <div className="site-container grid items-center gap-10 pt-28 pb-[calc(min(5vw,64px)+3rem)] md:pt-32 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <Breadcrumbs crumbs={crumbs} label={t.servicePages.breadcrumb} />
          <p className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-copper-400">
            <RoofMark />
            {eyebrow}
          </p>
          <h1 className="mt-3 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.08] text-balance">{title}</h1>
          <p data-speakable className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={sectionHref(lang, "iletisim", false)}>
                {t.nav.freeInspection}
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="inverse">
              <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                <Phone aria-hidden />
                {SITE.phones.primaryDisplay}
              </a>
            </Button>
          </div>
        </div>

        {image && (
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div aria-hidden className="absolute -inset-3 translate-x-3 translate-y-3 rounded-3xl border border-copper-500/40" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-lift">
              <Image
                src={image}
                alt={imageAlt ?? ""}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 576px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

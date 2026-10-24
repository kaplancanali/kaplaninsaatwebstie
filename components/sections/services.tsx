import Image, { type StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { GALLERY } from "@/lib/data/gallery"
import { SERVICE_CATEGORIES, servicesInCategory } from "@/lib/data/services/nav"
import { SERVICES_BASE, servicePath } from "@/lib/routes"
import { getT, type Lang } from "@/lib/translations"
import { cn } from "@/lib/utils"
import catiImage from "@/public/gallery/cati/metal-cati-trapez.jpg"
import olukImage from "@/public/gallery/oluk/eksiz-oluk-dekoratif-sacak.jpg"
import izolasyonImage from "@/public/gallery/izolasyon/arduvazli-membran-kirmizi.jpg"

/** Same order as SERVICE_CATEGORIES / t.services.items. */
const IMAGES: StaticImageData[] = [catiImage, olukImage, izolasyonImage]

export function Services({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const s = t.services
  const [before, after] = s.subtitle.split(s.subtitleBold)

  return (
    <section id="hizmetler" aria-labelledby="services-title" className="py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow={s.badge}
            title={s.title}
            description={
              <>
                {before}
                <strong className="font-semibold text-foreground">{s.subtitleBold}</strong>
                {after}
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {s.items.map((service, i) => {
            const featured = i === 0
            const category = SERVICE_CATEGORIES[i]
            const guides = servicesInCategory(category)

            return (
              <Reveal
                key={service.title}
                delay={i * 0.08}
                className={cn(featured && "lg:col-span-2")}
              >
                <article className={cn("group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift", featured && "lg:grid lg:grid-cols-2")}>
                  <div
                    className={cn(
                      "relative overflow-hidden",
                      featured ? "aspect-[16/10] lg:aspect-auto lg:min-h-[420px]" : "aspect-[16/8]"
                    )}
                  >
                    <Image
                      src={IMAGES[i]}
                      alt={GALLERY.find((g) => g.image === IMAGES[i])?.alt[lang] ?? service.title}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1280px) 616px, (min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
                    <span className="absolute bottom-4 left-5 font-heading text-5xl font-extrabold text-white/90 tabular-nums md:text-6xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className={cn("flex flex-col p-6 md:p-8", featured && "lg:p-10")}>
                    <h3 className="text-2xl font-extrabold text-foreground">{service.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>

                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{s.tipsTitle}</p>
                        <ul className="mt-3 space-y-2.5">
                          {service.tips.map((tip) => (
                            <li key={tip} className="flex gap-2.5 text-sm text-foreground">
                              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                                <Check className="size-3.5" aria-hidden />
                              </span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                          {t.servicePages.guideMenu}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {guides.map((g) => (
                            <li key={g.id}>
                              <Link
                                href={servicePath(lang, g.slug[lang])}
                                className="group/link -mx-2 flex items-center justify-between rounded-lg px-2 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                              >
                                {g.name[lang]}
                                <ArrowUpRight className="size-4 opacity-40 transition-opacity group-hover/link:opacity-100" aria-hidden />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2" aria-label={service.title}>
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <Badge variant="outline" size="sm">
                            {feature}
                          </Badge>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-7 border-t pt-6">
                      <Button asChild variant={featured ? "default" : "outline"} className="w-full sm:w-auto">
                        <a href="#iletisim">
                          {t.common.getQuote}
                          <ArrowRight aria-hidden />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="link" className="text-base">
            <Link href={SERVICES_BASE[lang]}>
              {t.servicePages.allServices}
              <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

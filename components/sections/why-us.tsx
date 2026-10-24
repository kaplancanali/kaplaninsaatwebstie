import Image from "next/image"
import { Award, CheckCircle2, Heart, Package, Zap } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { GALLERY } from "@/lib/data/gallery"
import { getT, type Lang } from "@/lib/translations"
import mainImage from "@/public/gallery/cati/kiremit-cati-mahya.jpg"
import detailImage from "@/public/gallery/oluk/eksiz-oluk-montaj.jpg"

const REASON_ICONS = [Award, Package, Zap, Heart]
const altFor = (image: typeof mainImage, lang: Lang) => GALLERY.find((g) => g.image === image)?.alt[lang] ?? ""

export function WhyUs({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const w = t.whyUs

  return (
    <section id="hakkimizda" aria-labelledby="about-title" className="relative overflow-hidden bg-surface py-20 md:py-28">
      <div className="site-container grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        {/* Photos + experience badge */}
        <Reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lift sm:aspect-[5/5] lg:mr-16">
            <Image
              src={mainImage}
              alt={altFor(mainImage, lang)}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 480px, (min-width: 640px) 576px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-0 hidden w-[42%] overflow-hidden rounded-2xl border-4 border-surface shadow-lift sm:block">
            <Image
              src={detailImage}
              alt={altFor(detailImage, lang)}
              placeholder="blur"
              sizes="240px"
              className="aspect-[3/4] h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -left-3 top-8 rounded-2xl bg-primary px-6 py-5 text-primary-foreground shadow-glow md:-left-6">
            <p className="font-heading text-5xl font-extrabold leading-none tabular-nums">15+</p>
            <p className="mt-1 text-sm font-medium text-white/85">{t.hero.statLabels[1]}</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <SectionHeading id="about-title" align="left" eyebrow={w.badge} title={w.title} description={w.description} />
          </Reveal>

          <Reveal delay={0.05}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {w.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-brand" aria-hidden />
                  {benefit}
                </li>
              ))}
            </ul>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {w.reasons.map((reason, i) => {
              const Icon = REASON_ICONS[i]
              return (
                <Reveal
                  as="li"
                  key={reason.title}
                  delay={0.1 + i * 0.06}
                  className="group h-full rounded-2xl border bg-card p-5 shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-4 font-bold text-foreground">{reason.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/language-context"

const images = ["/gallery/cati/2.jpg", "/gallery/oluk/3.jpg", "/gallery/izolasyon/2.jpg"]

export function Services() {
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="hizmetler" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{s.badge}</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4 text-balance">{s.title}</h2>
          <p className="text-muted-foreground text-lg">
            {s.subtitle.split(s.subtitleBold)[0]}
            <strong className="text-foreground">{s.subtitleBold}</strong>
            {s.subtitle.split(s.subtitleBold)[1]}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-6">
          {s.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm hover:shadow-xl hover:shadow-navy/10 transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={images[index]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
                </div>
                <div className="p-6 md:p-7 flex flex-col">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">{s.tipsTitle}</p>
                  <ul className="space-y-2 mb-5">
                    {service.tips.map((tip) => (
                      <li key={tip} className="flex gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#iletisim"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    {t.common.getQuote}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

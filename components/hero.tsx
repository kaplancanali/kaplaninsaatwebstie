"use client"

import Image from "next/image"
import { ChevronDown, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedStat } from "@/components/animated-stat"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"

const stats = [
  { target: 500, suffix: "+" },
  { target: 15, suffix: "+" },
  { target: 100, suffix: "%" },
]

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <Image
        src={SITE.heroImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/35" />
      <div className="absolute inset-0 roof-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-10 md:pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-white/90">{h.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.08] text-balance mb-6">
            {h.titleBefore}{" "}
            <span className="text-primary">{h.titleHighlight}</span>{" "}
            {h.titleAfter}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
            {h.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button asChild size="lg" className="rounded-2xl px-8 py-6 text-base shadow-lg shadow-primary/30">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {h.cta1}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-6 text-base border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
            >
              <a href={`tel:${SITE.phones.primary}`}>
                <Phone className="w-5 h-5" />
                {h.cta2}
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-5 text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white tabular-nums">
                <AnimatedStat target={s.target} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{h.statLabels[i]}</div>
            </div>
          ))}
          <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md px-4 py-5 text-center">
            <div className="text-3xl md:text-4xl font-heading font-bold text-white">{h.stat724}</div>
            <div className="text-xs md:text-sm text-white/70 mt-1">{h.stat724Label}</div>
          </div>
        </div>
      </div>

      <a
        href="#hizmetler"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-white/70 hover:text-white"
        aria-label={h.scrollLabel}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </a>
    </section>
  )
}

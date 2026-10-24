import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

/** Copper call-to-action band with a gable top and a sloped bottom edge. */
export function CTA({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const c = t.cta

  return (
    <section
      aria-labelledby="cta-title"
      className="roof-peak-top relative isolate overflow-hidden bg-gradient-to-br from-copper-600 via-copper-700 to-copper-800 text-white [--roof:min(6vw,72px)]"
    >
      <div aria-hidden className="pattern-truss absolute inset-0 -z-10 text-white/[0.08]" />
      <div aria-hidden className="absolute -right-32 -top-10 -z-10 size-[420px] rounded-full bg-copper-400/30 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-24 -z-10 size-[420px] rounded-full bg-navy-950/30 blur-3xl" />

      <div className="site-container grid items-center gap-10 pt-[calc(min(6vw,72px)+4rem)] pb-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <Reveal>
          <h2 id="cta-title" className="text-4xl font-extrabold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
            {c.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/85 md:text-xl">{c.subtitle}</p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-white/20 bg-navy-950/25 p-6 md:p-8">
          <div className="grid gap-3">
            <Button asChild size="xl" variant="light">
              <a href="#iletisim">
                {t.common.freeInspection}
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button asChild size="lg" variant="inverse" className="border-white/40">
                <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                  <Phone aria-hidden />
                  {c.cta1}
                </a>
              </Button>
              <Button asChild size="lg" variant="inverse" className="border-white/40">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden />
                  {c.cta2}
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-white/15 pt-4 text-sm text-white/80">
            <a href={`tel:${SITE.phones.primary}`} className="hover:text-white">
              {SITE.phones.primaryDisplay}
            </a>
            <span aria-hidden>•</span>
            <a href={`tel:${SITE.phones.secondary}`} className="hover:text-white">
              {SITE.phones.secondaryDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

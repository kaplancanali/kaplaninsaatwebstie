import { ArrowRight, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sectionHref } from "@/lib/routes"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

/** Copper call-to-action band with a roof-peak top edge. */
export function CtaBand({ lang }: { lang: Lang }) {
  const t = getT(lang)

  return (
    <section className="roof-peak-top relative isolate overflow-hidden bg-copper-700 text-white [--roof:min(5vw,56px)]">
      <div aria-hidden className="pattern-truss absolute inset-0 -z-10 text-white/[0.07]" />
      <div className="site-container flex flex-col items-start gap-8 pt-[calc(min(5vw,56px)+3.5rem)] pb-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-balance md:text-4xl">{t.servicePages.ctaTitle}</h2>
          <p className="mt-3 text-lg text-white/85">{t.servicePages.ctaText}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" variant="light">
            <a href={sectionHref(lang, "iletisim", false)}>
              {t.nav.freeInspection}
              <ArrowRight aria-hidden />
            </a>
          </Button>
          <Button asChild size="lg" variant="inverse" className="border-white/40">
            <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
              <Phone aria-hidden />
              {t.common.callNow}
            </a>
          </Button>
          <Button asChild size="lg" variant="inverse" className="border-white/40">
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle aria-hidden />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

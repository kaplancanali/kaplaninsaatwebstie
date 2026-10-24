import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaqList } from "@/components/ui/faq-list"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { JsonLdScript } from "@/components/json-ld-script"
import { faqJsonLd } from "@/lib/structured-data"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

export function FAQ({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const f = t.faq

  return (
    <section aria-labelledby="faq-title" className="py-20 md:py-28">
      <JsonLdScript data={faqJsonLd(f.items)} />
      <div className="site-container grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <SectionHeading id="faq-title" align="left" eyebrow={f.badge} title={f.title} description={f.subtitle} />
          </Reveal>

          <Reveal delay={0.05} className="mt-8 rounded-2xl bg-navy-950 p-6 text-white shadow-lift">
            <p className="font-heading text-lg font-bold">{f.bottomTitle}</p>
            <p className="mt-1.5 text-sm text-white/75">{f.bottomDesc}</p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild>
                <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                  <Phone aria-hidden />
                  {SITE.phones.primaryDisplay}
                </a>
              </Button>
              <Button asChild variant="inverse">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden />
                  {f.whatsappLink}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.05}>
          <FaqList items={f.items} />
        </Reveal>
      </div>
    </section>
  )
}

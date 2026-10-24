import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { AreaExplorer } from "@/components/sections/area-explorer"
import { SERVICE_AREAS } from "@/lib/data/areas"
import { SERVICES_BASE } from "@/lib/routes"
import { getT, type Lang } from "@/lib/translations"

export function ServiceAreas({ lang }: { lang: Lang }) {
  const t = getT(lang)
  const sa = t.serviceAreas

  return (
    <section aria-labelledby="areas-title" className="py-20 md:py-28">
      <div className="site-container">
        <Reveal>
          <SectionHeading id="areas-title" eyebrow={sa.badge} title={sa.title} description={sa.subtitle} />
        </Reveal>

        <Reveal className="mt-14" delay={0.05}>
          <AreaExplorer
            areas={SERVICE_AREAS}
            lang={lang}
            labels={{ map: sa.mapLabel, sea: sa.sea, gulf: sa.gulf, hint: sa.activeHint }}
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-4xl border-t pt-8 text-center">
          <p className="leading-relaxed text-muted-foreground">{sa.richText}</p>
          <Link
            href={SERVICES_BASE[lang]}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline underline-offset-4"
          >
            {sa.servicesLink}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

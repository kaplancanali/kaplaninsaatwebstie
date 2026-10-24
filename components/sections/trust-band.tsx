import { CalendarCheck, HardHat, SearchCheck, ShieldCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { getT, type Lang } from "@/lib/translations"

const ICONS = [ShieldCheck, CalendarCheck, SearchCheck, HardHat]

/** Four guarantees in a strip that overlaps the hero's sloped bottom edge. */
export function TrustBand({ lang }: { lang: Lang }) {
  const t = getT(lang)

  return (
    <section aria-label={t.trustLabel} className="relative z-10 -mt-12 md:-mt-16">
      <div className="site-container">
        <Reveal y={16}>
          <ul className="grid grid-cols-2 overflow-hidden rounded-2xl border bg-card shadow-lift lg:grid-cols-4">
            {t.trustBadges.map((badge, i) => {
              const Icon = ICONS[i]
              return (
                <li
                  key={badge.title}
                  className="group flex flex-col gap-3 border-border p-5 sm:flex-row sm:items-center sm:gap-4 md:p-6 [&:nth-child(odd)]:border-r max-lg:[&:nth-child(-n+2)]:border-b lg:[&:not(:last-child)]:border-r"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground md:size-12">
                    <Icon className="size-5 md:size-6" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-heading text-sm font-bold text-foreground md:text-base">{badge.title}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground md:text-sm">{badge.description}</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

import { ClipboardList, FileCheck2, HardHat, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/reveal"
import { TimelineTrack } from "@/components/sections/timeline-track"
import { getT, type Lang } from "@/lib/translations"

const STEP_ICONS = [ClipboardList, FileCheck2, HardHat, ShieldCheck]

export function Process({ lang }: { lang: Lang }) {
  const p = getT(lang).process
  const [noteBefore, noteAfter] = p.note.split(p.noteBold)

  return (
    <section aria-labelledby="process-title" className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-48 [mask-image:linear-gradient(to_top,black,transparent)]">
        <div className="pattern-truss size-full text-brand/[0.08]" />
      </div>
      <div className="site-container relative">
        <Reveal>
          <SectionHeading id="process-title" eyebrow={p.badge} title={p.title} description={p.subtitle} />
        </Reveal>

        <div className="mt-16">
          <TimelineTrack>
            <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
              {p.steps.map((step, i) => {
                const Icon = STEP_ICONS[i]
                return (
                  <Reveal as="li" key={step.number} delay={i * 0.1} className="relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center">
                    <span className="relative z-10 flex size-16 shrink-0 items-center justify-center rounded-2xl border-4 border-background bg-primary font-heading text-xl font-extrabold text-primary-foreground shadow-glow tabular-nums">
                      {step.number}
                    </span>
                    <div className="lg:mt-6">
                      <span aria-hidden className="mb-3 hidden size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground lg:mx-auto lg:flex">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </Reveal>
                )
              })}
            </ol>
          </TimelineTrack>
        </div>

        <p className="mx-auto mt-14 max-w-xl rounded-2xl border bg-card px-6 py-4 text-center text-sm text-muted-foreground shadow-soft">
          {noteBefore}
          <strong className="text-foreground">{p.noteBold}</strong>
          {noteAfter}
        </p>
      </div>
    </section>
  )
}

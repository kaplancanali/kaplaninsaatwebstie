"use client"

import { Search, FileText, Wrench, CheckCircle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const stepIcons = [Search, FileText, Wrench, CheckCircle]

export function Process() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()
  const p = t.process

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{p.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">{p.title}</h2>
          <p className="text-muted-foreground text-lg">{p.subtitle}</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {p.steps.map((step, index) => {
            const Icon = stepIcons[index]
            return (
              <div key={index} className={cn("reveal relative", inView && "in-view")} style={{ animationDelay: `${index * 130}ms` }}>
                {index < p.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] right-0 h-0.5 bg-gradient-to-r from-primary/30 to-border z-0" />
                )}
                <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group z-10 h-full flex flex-col">
                  <div className="relative inline-flex mb-5 self-start">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-10 max-w-xl mx-auto">
          {p.note.split(p.noteBold)[0]}
          <strong className="text-foreground">{p.noteBold}</strong>
          {p.note.split(p.noteBold)[1]}
        </p>
      </div>
    </section>
  )
}

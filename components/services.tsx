"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Droplets, Shield, ArrowRight, AlertTriangle } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const icons = [Home, Droplets, Shield]

export function Services() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()
  const s = t.services

  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{s.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            {s.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {s.subtitle.split(s.subtitleBold)[0]}
            <strong className="text-foreground">{s.subtitleBold}</strong>
            {s.subtitle.split(s.subtitleBold)[1]}
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {s.items.map((service, index) => {
            const Icon = icons[index]
            return (
              <Card
                key={index}
                className={cn(
                  "reveal group bg-card border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 rounded-2xl overflow-hidden",
                  inView && "in-view"
                )}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.description}</p>

                  <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 rounded-xl p-4 mb-5">
                    <div className="flex items-center gap-2 mb-2.5">
                      <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-none" />
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-400 uppercase tracking-wide">
                        {s.tipsTitle}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {service.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-amber-900 dark:text-amber-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 flex-none" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button asChild variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent w-fit">
                      <a href="#iletisim">
                        {t.common.getQuote}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

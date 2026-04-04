"use client"

import { Award, Package, Zap, Heart, CheckCircle2 } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const reasonIcons = [Award, Package, Zap, Heart]

export function WhyUs() {
  const [leftRef, leftInView] = useInView()
  const [rightRef, rightInView] = useInView()
  const { t } = useLanguage()
  const w = t.whyUs

  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={leftRef}>
            <span className={cn("reveal text-primary font-medium text-sm uppercase tracking-wider block", leftInView && "in-view")} style={{ animationDelay: "0ms" }}>
              {w.badge}
            </span>
            <h2 className={cn("reveal text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance", leftInView && "in-view")} style={{ animationDelay: "100ms" }}>
              {w.title}
            </h2>
            <p className={cn("reveal text-muted-foreground text-lg mb-8 leading-relaxed", leftInView && "in-view")} style={{ animationDelay: "200ms" }}>
              {w.description}
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {w.benefits.map((benefit, index) => (
                <div key={index} className={cn("reveal flex items-center gap-3", leftInView && "in-view")} style={{ animationDelay: `${300 + index * 70}ms` }}>
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightRef} className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {w.reasons.map((reason, index) => {
              const Icon = reasonIcons[index]
              return (
                <div
                  key={index}
                  className={cn("reveal group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300", rightInView && "in-view")}
                  style={{ animationDelay: `${index * 110}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

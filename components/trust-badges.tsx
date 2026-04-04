"use client"

import { Shield, Clock, Search, Users } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const icons = [Shield, Clock, Search, Users]

export function TrustBadges() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()

  return (
    <section className="py-12 bg-secondary/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {t.trustBadges.map((badge, index) => {
            const Icon = icons[index]
            return (
              <div
                key={index}
                className={cn("reveal flex flex-col items-center text-center gap-3 p-4 group", inView && "in-view")}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{badge.title}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

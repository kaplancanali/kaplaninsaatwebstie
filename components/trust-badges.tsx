"use client"

import { Clock, Search, Shield, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { useLanguage } from "@/lib/language-context"

const icons = [Shield, Clock, Search, Users]

export function TrustBadges() {
  const { t } = useLanguage()

  return (
    <section className="relative z-10 -mt-6 md:-mt-8">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-navy/10">
            {t.trustBadges.map((badge, index) => {
              const Icon = icons[index]
              return (
                <div
                  key={badge.title}
                  className="flex items-center gap-3 p-5 md:p-6 border-border md:border-r last:border-r-0 even:border-l md:even:border-l-0 border-b md:border-b-0 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm md:text-base text-foreground">{badge.title}</h3>
                    <p className="text-xs text-muted-foreground">{badge.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

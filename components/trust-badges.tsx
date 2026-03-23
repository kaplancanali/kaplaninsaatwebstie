"use client"

import { Shield, Clock, Search, Users } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Garantili İşçilik",
    description: "Tüm işlerimiz garantili"
  },
  {
    icon: Clock,
    title: "Zamanında Teslim",
    description: "Söz verilen tarihte teslimat"
  },
  {
    icon: Search,
    title: "Ücretsiz Keşif",
    description: "Ücretsiz yerinde inceleme"
  },
  {
    icon: Users,
    title: "Uzman Ekip",
    description: "Profesyonel ve deneyimli ekip"
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{badge.title}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

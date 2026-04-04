"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

function ReviewCard({ review }: { review: { name: string; location: string; comment: string } }) {
  return (
    <Card className="bg-card border-border rounded-2xl flex-none w-[320px] md:w-[360px] hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="w-8 h-8 text-primary/20 mb-3 flex-none" />
        <div className="flex gap-1 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed flex-1 text-sm">&ldquo;{review.comment}&rdquo;</p>
        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-none">
            <span className="text-primary font-semibold text-sm">{review.name[0]}</span>
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Reviews() {
  const { t } = useLanguage()
  const r = t.reviews
  const doubled = [...r.items, ...r.items]

  return (
    <section id="yorumlar" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{r.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">{r.title}</h2>
          <p className="text-muted-foreground text-lg">{r.subtitle}</p>
        </div>
      </div>
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, white 8%, white 92%, transparent)",
        }}
      >
        <div className="animate-marquee flex gap-5 w-max px-5">
          {doubled.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ChevronDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const statConfig = [
  { target: 500, suffix: "+" },
  { target: 15,  suffix: "+" },
  { target: 100, suffix: "%" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const duration = 1800
    let raf: number
    const timer = setTimeout(() => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const p = Math.min((now - startTime) / duration, 1)
        setValue(Math.round((1 - Math.pow(1 - p, 3)) * target))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, 700)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf) }
  }, [target])
  return <>{value}{suffix}</>
}

export function Hero() {
  const { t } = useLanguage()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`, backgroundSize: "60px 60px" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-item inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6" style={{ animationDelay: "0.05s" }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-primary font-medium">{h.badge}</span>
          </div>

          <h1 className="hero-item text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight text-balance" style={{ animationDelay: "0.18s" }}>
            {h.titleBefore}{" "}
            <span className="text-primary">{h.titleHighlight}</span>{" "}
            {h.titleAfter}
          </h1>

          <p className="hero-item text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty" style={{ animationDelay: "0.32s" }}>
            {h.description}
          </p>

          <div className="hero-item flex flex-col sm:flex-row items-center justify-center gap-4 mb-14" style={{ animationDelay: "0.46s" }}>
            <Button asChild size="lg" className="w-full sm:w-auto text-base px-8 py-6 gap-2 rounded-2xl shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.03] transition-all">
              <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {h.cta1}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-base px-8 py-6 gap-2 rounded-2xl hover:scale-[1.03] transition-all">
              <a href="tel:+905399130646">
                <Phone className="w-5 h-5" />
                {h.cta2}
              </a>
            </Button>
          </div>

          <div className="hero-item grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto" style={{ animationDelay: "0.6s" }}>
            {statConfig.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 tabular-nums">
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{h.statLabels[i]}</div>
              </div>
            ))}
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{h.stat724}</div>
              <div className="text-sm text-muted-foreground">{h.stat724Label}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-item absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ animationDelay: "1.2s" }}>
        <a href="#hizmetler" aria-label={h.scrollLabel}>
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </a>
      </div>
    </section>
  )
}

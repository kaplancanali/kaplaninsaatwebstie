"use client"

import { Search, FileText, Wrench, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Keşif",
    description: "Ücretsiz yerinde inceleme yapıyoruz ve ihtiyaçlarınızı belirliyoruz",
  },
  {
    icon: FileText,
    number: "02",
    title: "Teklif",
    description: "Detaylı ve şeffaf fiyat teklifi sunuyoruz",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Uygulama",
    description: "Uzman ekibimizle profesyonel uygulama gerçekleştiriyoruz",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Teslim",
    description: "Zamanında ve garantili olarak işi teslim ediyoruz",
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Çalışma Sürecimiz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="text-muted-foreground text-lg">
            Basit ve şeffaf iş sürecimiz ile projenizi sorunsuz tamamlıyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-9 h-9 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

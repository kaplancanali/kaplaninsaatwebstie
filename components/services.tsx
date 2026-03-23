"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Droplets, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Çatı Sistemleri",
    description: "Metal çatı, çatı kaplama, tamirat ve yenileme hizmetleri. Modern malzemeler ve uzman işçilikle çatınızı yeniliyoruz.",
    features: ["Metal Çatı", "Çatı Kaplama", "Tamirat", "Yenileme"],
  },
  {
    icon: Droplets,
    title: "Eksiz Oluk Sistemleri",
    description: "Özel üretim eksiz oluk sistemleri ile sızıntı ve damlama sorunlarına son. Uzun ömürlü ve estetik çözümler.",
    features: ["Özel Üretim", "Sızdırmaz", "Uzun Ömürlü", "Estetik"],
  },
  {
    icon: Shield,
    title: "İzolasyon & Membran",
    description: "Su yalıtımı ve çatı izolasyonu ile binanızı dış etkenlere karşı koruyoruz. Profesyonel membran uygulaması.",
    features: ["Su Yalıtımı", "Çatı İzolasyonu", "Membran", "Koruma"],
  },
]

export function Services() {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Hizmetlerimiz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Profesyonel Çatı Çözümleri
          </h2>
          <p className="text-muted-foreground text-lg">
            Kocaeli ve çevresinde çatı sistemleri, oluk ve izolasyon konusunda 
            uzman ekibimizle yanınızdayız.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent">
                  Detayları Gör
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

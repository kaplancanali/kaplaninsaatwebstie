"use client"

import { MapPin } from "lucide-react"

const areas = [
  { name: "İzmit", keywords: ["İzmit çatı ustası", "İzmit çatı tamiri"] },
  { name: "Gebze", keywords: ["Gebze çatı sistemleri", "Gebze oluk"] },
  { name: "Darıca", keywords: ["Darıca çatı izolasyon", "Darıca membran"] },
  { name: "Körfez", keywords: ["Körfez çatı kaplama", "Körfez çatı ustası"] },
  { name: "Başiskele", keywords: ["Başiskele çatı ustası", "Başiskele oluk sistemi"] },
  { name: "Gölcük", keywords: ["Gölcük oluk sistemi", "Gölcük çatı tamiri"] },
  { name: "Kartepe", keywords: ["Kartepe çatı izolasyon", "Kartepe metal çatı"] },
  { name: "Kandıra", keywords: ["Kandıra eksiz oluk", "Kandıra çatı sistemleri"] },
]

export function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Hizmet Bölgelerimiz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Kocaeli Genelinde Hizmet
          </h2>
          <p className="text-muted-foreground text-lg">
            İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra 
            ve çevresinde profesyonel çatı ve oluk hizmetleri sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{area.name}</h3>
              </div>
              <div className="space-y-1">
                {area.keywords.map((keyword, i) => (
                  <p key={i} className="text-sm text-muted-foreground">{keyword}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SEO Rich Text */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-secondary/50 rounded-2xl border border-border">
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Kocaeli çatı ustası</strong> olarak İzmit, Gebze, Darıca, Körfez, 
              Başiskele, Gölcük, Kartepe ve Kandıra bölgelerinde hizmet veriyoruz. 
              <strong className="text-foreground"> Başiskele çatı ustası</strong>, 
              <strong className="text-foreground"> Gölcük oluk sistemi</strong>, 
              <strong className="text-foreground"> Kartepe çatı izolasyon</strong> ve 
              <strong className="text-foreground"> Kandıra eksiz oluk</strong> konularında 
              uzman ekibimizle yanınızdayız. Kocaeli genelinde ücretsiz keşif hizmeti sunuyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Villa Çatı Yenileme",
    location: "Gebze",
    description: "Komple çatı yenileme ve izolasyon uygulaması",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
  },
  {
    title: "Eksiz Oluk Montajı",
    location: "İzmit",
    description: "50 metre eksiz oluk sistemi kurulumu",
    beforeImage: "https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    title: "Fabrika Çatı Onarımı",
    location: "Körfez",
    description: "Endüstriyel çatı tamiri ve membran uygulaması",
    beforeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    title: "Apartman Çatı İzolasyonu",
    location: "Başiskele",
    description: "5 katlı apartman çatı izolasyonu",
    beforeImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
]

function BeforeAfterSlider({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  return (
    <div 
      className="relative w-full aspect-[4/3] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        handleMove(e.clientX, rect)
      }}
      onTouchMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        handleMove(e.touches[0].clientX, rect)
      }}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Sonra"
        className="absolute inset-0 w-full h-full object-cover"
        crossOrigin="anonymous"
      />
      
      {/* Before Image (Clipped) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Önce"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: 'none' }}
          crossOrigin="anonymous"
        />
      </div>
      
      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-4 h-4 text-foreground absolute -left-0.5" />
          <ChevronRight className="w-4 h-4 text-foreground absolute -right-0.5" />
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
        Önce
      </div>
      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
        Sonra
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projeler" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Projelerimiz</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Tamamlanan İşlerimiz
          </h2>
          <p className="text-muted-foreground text-lg">
            Kocaeli genelinde gerçekleştirdiğimiz projelerden örnekler. 
            Önce-sonra karşılaştırmasını kaydırarak görebilirsiniz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <BeforeAfterSlider 
                  beforeImage={project.beforeImage} 
                  afterImage={project.afterImage} 
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="rounded-2xl px-8">
            <a href="https://www.instagram.com/kaplaninsaat41/" target="_blank" rel="noopener noreferrer">
              Daha Fazla Proje İçin Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

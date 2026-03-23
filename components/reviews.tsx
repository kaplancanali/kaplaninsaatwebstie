"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "Ahmet Yılmaz",
    location: "İzmit",
    rating: 5,
    comment: "Çatımızı tamamen yenilediler. İşçilikleri çok temiz ve profesyonel. Zamanında teslim ettiler. Kesinlikle tavsiye ederim.",
  },
  {
    name: "Fatma Demir",
    location: "Gebze",
    rating: 5,
    comment: "Eksiz oluk sistemi yaptırdık. Artık yağmur sularından hiç sorun yaşamıyoruz. Fiyatları da gayet uygun.",
  },
  {
    name: "Mehmet Kaya",
    location: "Başiskele",
    rating: 5,
    comment: "Fabrikamızın çatı izolasyonunu yaptılar. Çok memnun kaldık. Uzman ve güler yüzlü bir ekip.",
  },
  {
    name: "Ayşe Şahin",
    location: "Gölcük",
    rating: 5,
    comment: "Ücretsiz keşfe geldiler, detaylı bilgi verdiler. İşi söyledikleri tarihte bitirdiler. Teşekkürler Kaplan İnşaat!",
  },
  {
    name: "Mustafa Öztürk",
    location: "Kartepe",
    rating: 5,
    comment: "Yazlık evimizin çatısını yaptırdık. Kaliteli malzeme ve işçilik. Herşey için teşekkürler.",
  },
  {
    name: "Zeynep Arslan",
    location: "Darıca",
    rating: 5,
    comment: "Apartmanımızın çatı onarımını yaptılar. Komşularımız da çok memnun kaldı. Profesyonel bir firma.",
  },
]

export function Reviews() {
  return (
    <section id="yorumlar" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Müşteri Yorumları</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kocaeli genelinde yüzlerce mutlu müşterimizden bazılarının görüşleri
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border rounded-2xl">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  {'"'}{review.comment}{'"'}
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">{review.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

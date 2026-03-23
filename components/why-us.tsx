"use client"

import { Award, Package, Zap, Heart, CheckCircle2 } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Yılların Tecrübesi",
    description: "15 yılı aşkın sektör deneyimi ile kaliteli hizmet garantisi",
  },
  {
    icon: Package,
    title: "Kaliteli Malzeme",
    description: "Sadece birinci sınıf, garantili malzemeler kullanıyoruz",
  },
  {
    icon: Zap,
    title: "Hızlı ve Temiz İşçilik",
    description: "Profesyonel ekibimizle hızlı ve temiz iş teslimi",
  },
  {
    icon: Heart,
    title: "Müşteri Memnuniyeti",
    description: "Müşteri memnuniyeti odaklı çalışma prensibi",
  },
]

const benefits = [
  "Ücretsiz yerinde keşif",
  "Detaylı proje teklifi",
  "Garantili işçilik",
  "Zamanında teslim",
  "Uygun fiyat garantisi",
  "7/24 destek hattı",
]

export function WhyUs() {
  return (
    <section id="hakkimizda" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Neden Biz?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Güvenilir Çatı Çözüm Ortağınız
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Kaplan İnşaat olarak Kocaeli ve çevresinde yılların verdiği tecrübe 
              ile çatı sistemleri, eksiz oluk ve izolasyon konusunda profesyonel 
              hizmet sunuyoruz.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

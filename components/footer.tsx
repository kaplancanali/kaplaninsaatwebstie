"use client"

import Link from "next/link"
import { Phone, Instagram } from "lucide-react"

const services = [
  "Çatı Sistemleri",
  "Eksiz Oluk Sistemleri",
  "İzolasyon & Membran",
  "Çatı Tamiri",
  "Metal Çatı",
]

const areas = [
  "İzmit",
  "Gebze",
  "Darıca",
  "Körfez",
  "Başiskele",
  "Gölcük",
  "Kartepe",
  "Kandıra",
]

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Kaplan İnşaat
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk ve izolasyon hizmetleri. 
              Kaliteli işçilik ve garantili çözümler.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.instagram.com/kaplaninsaat41/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="tel:+905399130646"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label="Telefon"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#hizmetler" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Hizmet Bölgeleri</h3>
            <ul className="grid grid-cols-2 gap-2">
              {areas.map((area, index) => (
                <li key={index}>
                  <span className="text-muted-foreground text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+905399130646" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +90 539 913 06 46
                </a>
              </li>
              <li>
                <a 
                  href="tel:+905354176319" 
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +90 535 417 63 19
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/905399130646" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  WhatsApp İletişim
                </a>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">Kocaeli, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kaplan İnşaat. Tüm hakları saklıdır.
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">
              Kocaeli Çatı Ustası | İzmit Oluk Sistemleri | Gebze Çatı İzolasyonu
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

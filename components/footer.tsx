"use client"

import Link from "next/link"
import { Phone, Instagram } from "lucide-react"
import { SiteLogo } from "@/components/site-logo"
import { useLanguage } from "@/lib/language-context"
import { SERVICE_NAV } from "@/lib/data/services/nav"
import { SERVICES_BASE, servicePath } from "@/lib/routes"

const areas = ["İzmit", "Gebze", "Darıca", "Körfez", "Başiskele", "Gölcük", "Kartepe", "Kandıra"]

export function Footer() {
  const { t, lang } = useLanguage()
  const f = t.footer

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <SiteLogo />
            </div>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{f.brand}</p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/kaplaninsaat41/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="tel:+905399130646"
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors" aria-label="Telefon">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{f.servicesTitle}</h3>
            <ul className="space-y-3">
              {SERVICE_NAV.map((service) => (
                <li key={service.id}>
                  <Link href={servicePath(lang, service.slug[lang])} className="text-muted-foreground hover:text-brand transition-colors text-sm">
                    {service.name[lang]}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={SERVICES_BASE[lang]} className="text-brand font-medium hover:underline text-sm">
                  {t.servicePages.allServices}
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{f.areasTitle}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {areas.map((area, index) => (
                <li key={index}><span className="text-muted-foreground text-sm">{area}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">{f.contactTitle}</h3>
            <ul className="space-y-3">
              <li><a href="tel:+905399130646" className="text-muted-foreground hover:text-primary transition-colors text-sm">+90 539 913 06 46</a></li>
              <li><a href="tel:+905354176319" className="text-muted-foreground hover:text-primary transition-colors text-sm">+90 535 417 63 19</a></li>
              <li><a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">{f.whatsappLink}</a></li>
              <li><span className="text-muted-foreground text-sm">{f.location}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {new Date().getFullYear()} {f.copyright}
            </p>
            <p className="text-muted-foreground text-sm text-center md:text-right">{f.seoLine}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import Link from "next/link"
import { ArrowUp, Instagram, MapPin, MessageCircle, Phone } from "lucide-react"
import { SiteLogo } from "@/components/site-logo"
import { useLanguage } from "@/lib/language-context"
import { SERVICE_NAV } from "@/lib/data/services/nav"
import { SERVICE_AREAS } from "@/lib/data/areas"
import { SERVICES_BASE, servicePath } from "@/lib/routes"
import { SITE } from "@/lib/site"

export function Footer() {
  const { t, lang } = useLanguage()
  const f = t.footer

  const socials = [
    { label: "Instagram", href: SITE.instagram, icon: Instagram, external: true },
    { label: "WhatsApp", href: SITE.whatsapp, icon: MessageCircle, external: true },
    { label: t.contact.phoneCard, href: `tel:${SITE.phones.primary}`, icon: Phone },
  ]

  const heading = "mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-copper-400"
  const link = "text-sm text-white/70 transition-colors hover:text-white"

  return (
    <footer className="roof-cut-top relative isolate bg-navy-950 text-white [--roof:min(4vw,48px)]">
      <div aria-hidden className="pattern-truss absolute inset-0 -z-10 text-white/[0.03]" />

      <div className="site-container grid gap-12 pt-[calc(min(4vw,48px)+4rem)] pb-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-10">
        {/* Brand */}
        <div>
          <SiteLogo tone="inverse" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">{f.brand}</p>
          <ul aria-label={f.social} className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-copper-400 hover:bg-copper-600 hover:text-white"
                >
                  <s.icon className="size-5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <nav aria-labelledby="footer-services">
          <h2 id="footer-services" className={heading}>
            {f.servicesTitle}
          </h2>
          <ul className="space-y-3">
            {SERVICE_NAV.map((service) => (
              <li key={service.id}>
                <Link href={servicePath(lang, service.slug[lang])} className={link}>
                  {service.name[lang]}
                </Link>
              </li>
            ))}
            <li>
              <Link href={SERVICES_BASE[lang]} className="text-sm font-semibold text-copper-300 hover:underline underline-offset-4">
                {t.servicePages.allServices}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Areas */}
        <div>
          <h2 className={heading}>{f.areasTitle}</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
            {SERVICE_AREAS.map((area) => (
              <li key={area.id} className="flex items-center gap-1.5 text-sm text-white/70">
                <MapPin className="size-3.5 shrink-0 text-copper-400" aria-hidden />
                {area.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className={heading}>{f.contactTitle}</h2>
          <ul className="space-y-3">
            <li>
              <a href={`tel:${SITE.phones.primary}`} className={link}>
                {SITE.phones.primaryDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phones.secondary}`} className={link}>
                {SITE.phones.secondaryDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className={link}>
                {f.whatsappLink}
              </a>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={link}>
                {SITE.instagramHandle}
              </a>
            </li>
            <li className="text-sm text-white/70">{f.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col items-center justify-between gap-4 py-6 text-center text-sm text-white/55 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} {f.copyright}
          </p>
          <p>{f.seoLine}</p>
          <a href="#main" className="inline-flex items-center gap-1.5 font-medium text-white/70 hover:text-white">
            {f.backToTop}
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  )
}

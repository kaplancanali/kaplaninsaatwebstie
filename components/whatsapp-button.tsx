"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"

/** Floating WhatsApp button — desktop only; phones use the fixed bottom bar. */
export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.aria}
      className="group fixed bottom-6 right-6 z-50 hidden size-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-lift transition-transform duration-300 hover:scale-110 lg:flex"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 motion-safe:animate-ping" />
      <MessageCircle className="relative size-7" aria-hidden />
      <span
        aria-hidden
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg border bg-card px-3 py-2 text-sm text-foreground opacity-0 shadow-soft transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {t.whatsapp.tooltip}
      </span>
    </a>
  )
}

"use client"

import { MessageCircle, Phone } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"

/** Fixed call / WhatsApp bar on phones and tablets (the desktop gets the floating button). */
export function MobileCTA() {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(15_23_42/0.25)] backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={`tel:${SITE.phones.primary}`}
          aria-label={t.hero.callAria}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-navy-900 font-semibold text-white active:translate-y-px dark:bg-navy-800"
        >
          <Phone className="size-5" aria-hidden />
          {t.common.callNow}
        </a>
        <a
          href={SITE.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.whatsapp.aria}
          className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#15803d] font-semibold text-white active:translate-y-px"
        >
          <MessageCircle className="size-5" aria-hidden />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

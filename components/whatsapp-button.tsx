"use client"

import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhatsAppButton() {
  const { t } = useLanguage()

  return (
    <a
      href="https://wa.me/905399130646"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label={t.whatsapp.aria}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute right-full mr-3 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        {t.whatsapp.tooltip}
      </span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
    </a>
  )
}

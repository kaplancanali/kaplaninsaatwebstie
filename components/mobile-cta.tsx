"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function MobileCTA() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-inset-bottom">
      <div className="flex gap-3">
        <Button asChild variant="outline" className="flex-1 rounded-xl gap-2">
          <a href="tel:+905399130646">
            <Phone className="w-4 h-4" />
            {t.common.callNow}
          </a>
        </Button>
        <Button asChild className="flex-1 rounded-xl gap-2">
          <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  )
}

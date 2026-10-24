"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { useConsent } from "@/components/cookie-consent"
import { Button } from "@/components/ui/button"

/**
 * Google Maps embed that only loads after cookie consent (it can set Google
 * cookies), or when the visitor explicitly asks to see the map.
 */
export function ConsentMap({
  src,
  title,
  note,
  showLabel,
}: {
  src: string
  title: string
  note: string
  showLabel: string
}) {
  const consent = useConsent()
  const [show, setShow] = useState(false)
  const box = "block h-64 w-full border-0 border-t md:h-72"

  if (consent === "granted" || show) {
    return <iframe title={title} src={src} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={box} />
  }

  return (
    <div className={`${box} relative flex flex-col items-center justify-center gap-3 bg-navy-950 p-6 text-center text-white`}>
      <div aria-hidden className="pattern-grid absolute inset-0 text-white/[0.06]" />
      <MapPin className="relative size-7 text-copper-400" aria-hidden />
      <p className="relative max-w-xs text-sm text-white/70">{note}</p>
      <Button size="sm" variant="inverse" className="relative" onClick={() => setShow(true)}>
        {showLabel}
      </Button>
    </div>
  )
}

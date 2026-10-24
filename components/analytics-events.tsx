"use client"

import { useEffect } from "react"
import { track } from "@/lib/analytics"

/**
 * One delegated listener reports every phone and WhatsApp link click, wherever
 * the link sits (header, hero, sticky bar, footer…), with the section it was in.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null
      if (!link) return
      const href = link.getAttribute("href") ?? ""
      const where = link.closest("[id], header, footer")
      const location = where?.id || where?.tagName.toLowerCase() || "page"
      if (href.startsWith("tel:")) track("contact_call", { link_location: location, phone: href.slice(4) })
      else if (href.includes("wa.me/")) track("contact_whatsapp", { link_location: location })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}

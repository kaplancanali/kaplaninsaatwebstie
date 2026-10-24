"use client"

import { useEffect, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { CONSENT_EVENT, OPEN_CONSENT_EVENT, readConsent, saveConsent } from "@/lib/consent"
import { LEGAL_PATHS } from "@/lib/routes"

const subscribe = (onChange: () => void) => {
  window.addEventListener(CONSENT_EVENT, onChange)
  window.addEventListener("storage", onChange)
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange)
    window.removeEventListener("storage", onChange)
  }
}

/** Current consent choice; "unknown" on the server so nothing renders before hydration. */
export const useConsent = () => useSyncExternalStore(subscribe, () => readConsent() ?? "none", () => "unknown")

/**
 * Non-blocking cookie bar: shown until the visitor accepts or rejects, and
 * again whenever "Cookie settings" is clicked in the footer.
 */
export function CookieConsent() {
  const { t, lang } = useLanguage()
  const c = t.consent
  const consent = useConsent()
  const [reopened, setReopened] = useState(false)

  useEffect(() => {
    const open = () => setReopened(true)
    window.addEventListener(OPEN_CONSENT_EVENT, open)
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open)
  }, [])

  if (consent === "unknown" || (consent !== "none" && !reopened)) return null

  const choose = (choice: "granted" | "denied") => {
    saveConsent(choice)
    setReopened(false)
  }

  return (
    <section
      aria-label={c.label}
      className="fixed inset-x-3 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-[45] rounded-2xl border bg-card p-4 text-card-foreground shadow-lift sm:inset-x-auto sm:left-6 sm:max-w-md lg:bottom-6 md:p-5"
    >
      <div className="flex gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Cookie className="size-5" aria-hidden />
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {c.text}{" "}
          <Link href={LEGAL_PATHS.cookies[lang]} className="font-medium text-brand underline underline-offset-2">
            {t.legal.cookies}
          </Link>
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Button variant="outline" size="sm" onClick={() => choose("denied")}>
          {c.reject}
        </Button>
        <Button size="sm" onClick={() => choose("granted")}>
          {c.accept}
        </Button>
      </div>
    </section>
  )
}

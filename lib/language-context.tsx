"use client"

import { createContext, useContext } from "react"
import type { Lang } from "./i18n"
import type { ClientStrings } from "./translations"

interface LanguageContextValue {
  lang: Lang
  t: ClientStrings
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

/**
 * The language comes from the route (/ = TR, /en = EN). The server passes in
 * just the strings client components need, in that language only.
 */
export function LanguageProvider({ lang, t, children }: { lang: Lang; t: ClientStrings; children: React.ReactNode }) {
  return <LanguageContext.Provider value={{ lang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider")
  return value
}

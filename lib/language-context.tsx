"use client"

import { createContext, useContext } from "react"
import { translations, type Lang, type Translations } from "./translations"

interface LanguageContextValue {
  lang: Lang
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  t: translations.tr,
})

/** The language comes from the route (/ = TR, /en = EN), so it is known during SSR. */
export function LanguageProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

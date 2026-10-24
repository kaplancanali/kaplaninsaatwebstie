"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { translations, Lang } from "./translations"

type T = (typeof translations)["tr"]

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: T
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "tr",
  setLang: () => {},
  t: translations.tr,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null
    if (saved === "tr" || saved === "en") setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("lang", l)
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

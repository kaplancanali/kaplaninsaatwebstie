"use client"

import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className={cn(
        "flex items-center gap-0.5 rounded-xl border border-border bg-muted/60 p-0.5",
        className
      )}
    >
      {(["tr", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-label={l === "tr" ? "Türkçe" : "English"}
          className={cn(
            "rounded-[9px] px-2.5 py-1 text-xs font-semibold uppercase transition-all duration-200",
            lang === l
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

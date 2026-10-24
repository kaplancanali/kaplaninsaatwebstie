"use client"

import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/language-context"
import { isHomePath, translatePath } from "@/lib/routes"
import { LANGS, type Lang } from "@/lib/translations"
import { cn } from "@/lib/utils"

const LABELS: Record<Lang, string> = { tr: "Türkçe", en: "English" }

export function LanguageToggle({
  className,
  tone = "default",
}: {
  className?: string
  tone?: "default" | "inverse"
}) {
  const { lang, t } = useLanguage()
  const pathname = usePathname()
  const hrefFor = (l: Lang) => translatePath(pathname, lang, l)

  // Each language is its own route; on the home page keep the current section hash.
  const switchTo = (e: React.MouseEvent<HTMLAnchorElement>, l: Lang) => {
    e.preventDefault()
    if (l === lang) return
    window.location.assign(hrefFor(l) + (isHomePath(pathname) ? window.location.hash : ""))
  }

  return (
    <nav
      aria-label={t.nav.language}
      className={cn(
        "flex items-center gap-0.5 rounded-xl border p-0.5",
        tone === "inverse" ? "border-white/20 bg-white/5" : "border-border bg-muted/60",
        className
      )}
    >
      {LANGS.map((l) => (
        <a
          key={l}
          href={hrefFor(l)}
          hrefLang={l}
          lang={l}
          onClick={(e) => switchTo(e, l)}
          aria-label={LABELS[l]}
          aria-current={lang === l ? "true" : undefined}
          className={cn(
            "rounded-[9px] px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
            lang === l
              ? "bg-primary text-primary-foreground shadow-sm"
              : tone === "inverse"
                ? "text-white/75 hover:text-white"
                : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l}
        </a>
      ))}
    </nav>
  )
}

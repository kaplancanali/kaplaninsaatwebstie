"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { LANG_PATH } from "@/lib/i18n"
import { cn } from "@/lib/utils"
import logo from "@/public/logo.jpg"

type SiteLogoProps = {
  tone?: "default" | "inverse"
  className?: string
  /** Set to false to render without a link (e.g. inside another link). */
  linked?: boolean
}

export function SiteLogo({ tone = "default", className, linked = true }: SiteLogoProps) {
  const { lang, t } = useLanguage()

  const inner = (
    <>
      <Image
        src={logo}
        alt=""
        width={40}
        height={40}
        sizes="40px"
        className="h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-lg object-contain ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105"
      />
      <span
        className={cn(
          "font-heading text-lg md:text-xl font-extrabold tracking-tight transition-colors",
          tone === "inverse" ? "text-white" : "text-foreground"
        )}
      >
        MKaplan <span className={tone === "inverse" ? "text-copper-400" : "text-brand"}>İnşaat</span>
      </span>
    </>
  )

  if (!linked) return <span className={cn("flex items-center gap-2.5", className)}>{inner}</span>

  return (
    <a
      href={LANG_PATH[lang]}
      aria-label={t.nav.home}
      className={cn("group flex items-center gap-2.5 rounded-lg", className)}
    >
      {inner}
    </a>
  )
}

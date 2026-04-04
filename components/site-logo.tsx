"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type SiteLogoProps = {
  showWordmark?: boolean
  wordmarkClassName?: string
  className?: string
  href?: string
}

export function SiteLogo({
  showWordmark = true,
  wordmarkClassName,
  className,
  href = "/",
}: SiteLogoProps) {
  const img = (
    <img
      src="/logo.jpg"
      alt={
        showWordmark
          ? ""
          : "Kaplan İnşaat — kaplan maskotu ve çatı formunda çerçeve logosu"
      }
      width={40}
      height={40}
      className="h-9 w-9 md:h-10 md:w-10 shrink-0 rounded-lg object-contain ring-1 ring-border/50 group-hover:scale-105 transition-transform duration-200"
      decoding="async"
    />
  )

  const inner = (
    <>
      {img}
      {showWordmark && (
        <span
          className={cn(
            "font-bold text-lg md:text-xl text-foreground tracking-tight",
            wordmarkClassName
          )}
        >
          Kaplan İnşaat
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn("flex items-center gap-2.5 group", className)}>
        {inner}
      </Link>
    )
  }

  return <span className={cn("flex items-center gap-2.5", className)}>{inner}</span>
}

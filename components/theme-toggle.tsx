"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, Monitor } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

const subscribe = () => () => {}

/** false during SSR/hydration, true afterwards — the theme is only known on the client. */
const useMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )

const LABELS = {
  tr: { system: "Sistem teması", dark: "Koyu tema", light: "Açık tema" },
  en: { system: "System theme", dark: "Dark theme", light: "Light theme" },
}

export function ThemeToggle({
  className,
  tone = "default",
}: {
  className?: string
  tone?: "default" | "inverse"
}) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const { lang } = useLanguage()
  const mounted = useMounted()

  const base = cn(
    "relative w-9 h-9 rounded-xl flex items-center justify-center border transition-colors",
    tone === "inverse"
      ? "border-white/20 bg-white/5 text-white hover:bg-white/15"
      : "border-border bg-muted/60 text-foreground hover:border-brand/40 hover:text-brand",
    className
  )

  if (!mounted) return <div className={base} aria-hidden />

  const isDark = resolvedTheme === "dark"
  const mode = theme === "system" ? "system" : isDark ? "dark" : "light"
  const label = LABELS[lang][mode]

  // Dark is the default, so the first click goes to light: dark → light → system → dark.
  const cycle = () => {
    if (theme === "dark") setTheme("light")
    else if (theme === "light") setTheme("system")
    else setTheme("dark")
  }

  const Icon = mode === "system" ? Monitor : mode === "dark" ? Moon : Sun

  return (
    <button type="button" onClick={cycle} aria-label={label} title={label} className={base}>
      <Icon className="w-4 h-4" aria-hidden />
    </button>
  )
}

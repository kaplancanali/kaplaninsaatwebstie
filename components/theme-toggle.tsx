"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn("w-9 h-9 rounded-xl bg-muted animate-pulse", className)} />
    )
  }

  const isDark = resolvedTheme === "dark"

  const cycle = () => {
    if (theme === "light") setTheme("dark")
    else if (theme === "dark") setTheme("system")
    else setTheme("light")
  }

  const icon =
    theme === "system" ? (
      <Monitor className="w-4 h-4" />
    ) : isDark ? (
      <Moon className="w-4 h-4" />
    ) : (
      <Sun className="w-4 h-4" />
    )

  const label =
    theme === "system" ? "Sistem teması" : isDark ? "Koyu tema" : "Açık tema"

  return (
    <button
      onClick={cycle}
      aria-label={label}
      title={label}
      className={cn(
        "relative w-9 h-9 rounded-xl flex items-center justify-center",
        "border border-border bg-muted/60 hover:bg-muted text-foreground",
        "hover:border-primary/40 hover:text-primary transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {icon}
    </button>
  )
}

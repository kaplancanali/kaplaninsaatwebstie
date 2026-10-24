"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { SiteLogo } from "@/components/site-logo"
import { useLanguage } from "@/lib/language-context"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const navItems = [
    { href: "#hizmetler", label: t.nav.services },
    { href: "#galeri", label: t.nav.gallery },
    { href: "#hakkimizda", label: t.nav.about },
    { href: "#yorumlar", label: t.nav.reviews },
    { href: "#iletisim", label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setIsScrolled(scrollY > 24)
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
      let current = ""
      for (const item of navItems) {
        const id = item.href.replace("#", "")
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 110) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] bg-primary transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "h-16 bg-background/80 shadow-sm backdrop-blur-xl"
            : "h-16 md:h-20 bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-4">
          <SiteLogo
            wordmarkClassName={cn(
              "transition-colors",
              !isScrolled && "text-white drop-shadow-sm"
            )}
            className={!isScrolled ? "[&_span]:text-white" : undefined}
          />

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const id = item.href.replace("#", "")
              const isActive = activeSection === id
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium py-1 transition-colors",
                    isActive
                      ? "text-primary"
                      : isScrolled
                        ? "text-muted-foreground hover:text-foreground"
                        : "text-white/85 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="gap-2 rounded-xl">
              <a href={`tel:${SITE.phones.primary}`}>
                <Phone className="w-4 h-4" />
                {t.nav.call}
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-xl bg-primary shadow-md shadow-primary/25 hover:bg-primary/90">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                {t.nav.freeInspection}
              </a>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
            <button
              className={cn(
                "p-2 rounded-lg",
                isScrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Menüyü aç"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[70] bg-navy text-white flex flex-col"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.28 }}
          >
            <div className="flex items-center justify-between px-4 h-16">
              <SiteLogo wordmarkClassName="text-white" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Menüyü kapat"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-2 px-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 text-2xl font-heading font-semibold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="p-6 grid gap-3">
              <Button asChild size="lg" variant="outline" className="w-full border-white/30 text-white hover:bg-white/10">
                <a href={`tel:${SITE.phones.primary}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  {t.nav.call}
                </a>
              </Button>
              <Button asChild size="lg" className="w-full bg-primary">
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                  {t.nav.freeInspection}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

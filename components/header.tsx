"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { SiteLogo } from "@/components/site-logo"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function Header() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  const navItems = [
    { href: "#hizmetler", label: t.nav.services },
    { href: "#galeri",    label: t.nav.gallery },
    { href: "#hakkimizda",label: t.nav.about },
    { href: "#yorumlar",  label: t.nav.reviews },
    { href: "#iletisim",  label: t.nav.contact },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setIsScrolled(scrollY > 20)
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0)
      const sectionIds = navItems.map((n) => n.href.replace("#", ""))
      let current = ""
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) current = id
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  return (
    <>
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[60] transition-[width] duration-100"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <SiteLogo />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const id = item.href.replace("#", "")
                const isActive = activeSection === id
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200 py-1",
                      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 bg-primary rounded-full transition-all duration-300",
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </Link>
                )
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <Button asChild variant="outline" size="sm" className="gap-2 rounded-xl">
                <a href="tel:+905399130646">
                  <Phone className="w-4 h-4" />
                  {t.nav.call}
                </a>
              </Button>
              <Button asChild size="sm" className="rounded-xl shadow-sm shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.03] transition-all">
                <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer">
                  {t.nav.freeInspection}
                </a>
              </Button>
            </div>

            {/* Mobile: toggles + hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                className="p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Menüyü aç/kapat"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-b border-border transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "")
              const isActive = activeSection === id
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "py-3 px-4 rounded-xl transition-colors font-medium",
                    isActive ? "text-primary bg-primary/10" : "text-foreground hover:text-primary hover:bg-muted"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button asChild variant="outline" size="lg" className="w-full gap-2">
                <a href="tel:+905399130646">
                  <Phone className="w-4 h-4" />
                  {t.nav.call}
                </a>
              </Button>
              <Button asChild size="lg" className="w-full">
                <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer">
                  {t.nav.freeInspection}
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

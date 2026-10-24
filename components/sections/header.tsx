"use client"

import { useEffect, useId, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion"
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { SiteLogo } from "@/components/site-logo"
import { NAV_SECTIONS } from "@/lib/data/site-data"
import { SERVICE_CATEGORIES, SERVICE_NAV, servicesInCategory } from "@/lib/data/services/nav"
import { useLanguage } from "@/lib/language-context"
import { SERVICES_BASE, isHomePath, sectionHref, servicePath } from "@/lib/routes"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

const SCROLL_THRESHOLD = 24

/** Tracks which nav section is currently in the middle band of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    )
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return active
}

/** Desktop "Hizmetler" item: the label scrolls to the home section, the chevron opens the service guide menu. */
function ServicesMenu({
  href,
  label,
  isActive,
  scrolled,
}: {
  href: string
  label: string
  isActive: boolean
  scrolled: boolean
}) {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  // A mouse click on the chevron arrives right after hover opened the menu; don't let it close it again.
  const hoverOpenedAt = useRef(0)

  return (
    <li
      className="relative flex items-center"
      onMouseEnter={() => {
        hoverOpenedAt.current = performance.now()
        setOpen(true)
      }}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false)
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false)
      }}
    >
      <a
        href={href}
        aria-current={isActive ? "location" : undefined}
        className={cn(
          "relative block rounded-lg py-2 pl-3 pr-1 text-sm font-medium transition-colors",
          isActive
            ? scrolled
              ? "text-brand"
              : "text-white"
            : scrolled
              ? "text-muted-foreground hover:text-foreground"
              : "text-white/75 hover:text-white"
        )}
      >
        {label}
        <span
          aria-hidden
          className={cn(
            "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-copper-500 transition-transform duration-300",
            isActive ? "scale-x-100" : "scale-x-0"
          )}
        />
      </a>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={t.servicePages.guideMenu}
        onClick={() => setOpen((o) => (performance.now() - hoverOpenedAt.current < 400 ? true : !o))}
        className={cn(
          "flex size-7 items-center justify-center rounded-md transition-colors",
          scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/75 hover:text-white"
        )}
      >
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-3"
      >
        <div className="grid grid-cols-3 gap-6 rounded-2xl border bg-popover p-6 text-popover-foreground shadow-lift">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                {t.servicePages.categories[category]}
              </p>
              <ul className="space-y-0.5">
                {servicesInCategory(category).map((s) => (
                  <li key={s.id}>
                    <Link
                      href={servicePath(lang, s.slug[lang])}
                      onClick={() => setOpen(false)}
                      className="-mx-2 block rounded-lg px-2 py-1.5 text-sm text-foreground hover:bg-muted"
                    >
                      {s.name[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href={SERVICES_BASE[lang]}
            onClick={() => setOpen(false)}
            className="col-span-3 inline-flex items-center gap-1.5 border-t pt-4 text-sm font-semibold text-brand hover:gap-2.5 transition-[gap]"
          >
            {t.servicePages.allServices}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </li>
  )
}

export function Header() {
  const { t, lang } = useLanguage()
  const pathname = usePathname()
  const onHome = isHomePath(pathname)
  const onServicePage = pathname.startsWith(SERVICES_BASE[lang])
  const href = (id: string) => sectionHref(lang, id, onHome)
  const reduce = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const visibleSection = useActiveSection()
  const active = onServicePage ? "hizmetler" : onHome ? visibleSection : ""
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > SCROLL_THRESHOLD))

  // Mobile menu: lock scroll, close on Escape, keep focus inside, restore focus on close.
  useEffect(() => {
    if (!menuOpen) return
    const button = menuButtonRef.current
    document.body.style.overflow = "hidden"
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
      if (e.key !== "Tab" || !menuRef.current) return
      const focusables = menuRef.current.querySelectorAll<HTMLElement>("a, button")
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", onKey)
      button?.focus()
    }
  }, [menuOpen])

  const tone = scrolled ? "default" : "inverse"

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/80 shadow-soft backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div
          className={cn(
            "site-container flex items-center justify-between gap-4 transition-[height] duration-300",
            scrolled ? "h-16" : "h-16 md:h-20"
          )}
        >
          <SiteLogo tone={tone} />

          <nav aria-label={t.nav.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_SECTIONS.map((s) => {
                const isActive = active === s.id
                if (s.id === "hizmetler") {
                  return (
                    <ServicesMenu key={s.id} href={href(s.id)} label={s.label(t)} isActive={isActive} scrolled={scrolled} />
                  )
                }
                return (
                  <li key={s.id}>
                    <a
                      href={href(s.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={cn(
                        "relative block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? scrolled
                            ? "text-brand"
                            : "text-white"
                          : scrolled
                            ? "text-muted-foreground hover:text-foreground"
                            : "text-white/75 hover:text-white"
                      )}
                    >
                      {s.label(t)}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-copper-500 transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0"
                        )}
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <LanguageToggle tone={tone} />
            <ThemeToggle tone={tone} />
            <Button asChild variant={scrolled ? "ghost" : "inverse"} size="sm" className={scrolled ? "" : "border-transparent bg-transparent"}>
              <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                <Phone aria-hidden />
                {t.nav.call}
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={href("iletisim")}>
                {t.nav.freeInspection}
                <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <Button asChild size="icon-sm" variant={scrolled ? "outline" : "inverse"}>
              <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                <Phone aria-hidden />
              </a>
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "flex size-9 items-center justify-center rounded-lg border transition-colors",
                scrolled
                  ? "border-border text-foreground hover:bg-muted"
                  : "border-white/25 text-white hover:bg-white/10"
              )}
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>

        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-copper-600 to-copper-400"
          style={{ scaleX: scrollYProgress }}
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={t.nav.mainNav}
            className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-navy-950 text-white lg:hidden"
            initial={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 pattern-truss text-white/[0.04]" />

            <div className="site-container relative flex h-16 items-center justify-between">
              <SiteLogo tone="inverse" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label={t.nav.closeMenu}
                className="flex size-9 items-center justify-center rounded-lg border border-white/25 hover:bg-white/10"
              >
                <X className="size-5" aria-hidden />
              </button>
            </div>

            <nav aria-label={t.nav.mainNav} className="site-container relative flex-1 py-8">
              <ul className="space-y-1">
                {NAV_SECTIONS.map((s, i) => (
                  <motion.li
                    key={s.id}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <a
                      href={href(s.id)}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span className="font-heading text-sm font-bold text-copper-400 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-heading text-3xl font-bold transition-colors group-hover:text-copper-400">
                        {s.label(t)}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                {t.servicePages.guideMenu}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SERVICE_NAV.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={servicePath(lang, s.slug[lang])}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/85 hover:border-copper-400 hover:text-white"
                    >
                      {s.name[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="site-container relative grid gap-3 pb-8">
              <div className="flex items-center justify-between pb-2">
                <LanguageToggle tone="inverse" />
                <ThemeToggle tone="inverse" />
              </div>
              <Button asChild size="lg" variant="inverse" className="w-full">
                <a href={`tel:${SITE.phones.primary}`} aria-label={t.hero.callAria}>
                  <Phone aria-hidden />
                  {SITE.phones.primaryDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="w-full">
                <a href={href("iletisim")} onClick={() => setMenuOpen(false)}>
                  {t.nav.freeInspection}
                  <ArrowRight aria-hidden />
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

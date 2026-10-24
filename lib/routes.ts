import { LANG_PATH, type Lang } from "@/lib/i18n"
import { SERVICE_NAV } from "@/lib/data/services/nav"

/** Base path of the service guide pages per language. */
export const SERVICES_BASE: Record<Lang, string> = { tr: "/hizmetler", en: "/en/services" }

export const servicePath = (lang: Lang, slug: string) => `${SERVICES_BASE[lang]}/${slug}`

export const findServiceBySlug = (lang: Lang, slug: string) =>
  SERVICE_NAV.find((s) => s.slug[lang] === slug)

export const isHomePath = (pathname: string) =>
  pathname === "/" || pathname === LANG_PATH.en

/** Link to a section of the home page, as an in-page hash when already on it. */
export const sectionHref = (lang: Lang, id: string, onHome: boolean) =>
  onHome ? `#${id}` : `${LANG_PATH[lang] === "/" ? "/" : LANG_PATH[lang] + "/"}#${id}`

/** The same page in the other language (used by the language switcher). */
export function translatePath(pathname: string, from: Lang, to: Lang): string {
  if (isHomePath(pathname)) return LANG_PATH[to]
  const base = SERVICES_BASE[from]
  if (pathname === base) return SERVICES_BASE[to]
  if (pathname.startsWith(base + "/")) {
    const service = findServiceBySlug(from, pathname.slice(base.length + 1))
    if (service) return servicePath(to, service.slug[to])
  }
  return LANG_PATH[to]
}

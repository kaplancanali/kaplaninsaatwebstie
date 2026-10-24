import type { Metadata, Viewport } from "next"
import { getT, LANG_PATH, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"

const OG_LOCALE: Record<Lang, string> = { tr: "tr_TR", en: "en_US" }

type PageMetaOptions = {
  lang: Lang
  title: string
  description: string
  /** This page's path in each language — drives canonical and hreflang. */
  paths: Record<Lang, string>
  image?: { url: string; width: number; height: number; alt: string }
  ogDescription?: string
}

export function buildPageMetadata({ lang, title, description, paths, image, ogDescription }: PageMetaOptions): Metadata {
  const { meta } = getT(lang)
  const ogImage = image ?? { url: SITE.ogImage, width: 1200, height: 630, alt: meta.ogAlt }

  return {
    metadataBase: new URL(SITE.url),
    title,
    description,
    authors: [{ name: SITE.name }],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/manifest.webmanifest",
    // Let search engines and AI answer engines quote freely and show large previews.
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
    alternates: {
      canonical: paths[lang],
      languages: { tr: paths.tr, en: paths.en, "x-default": paths.tr },
    },
    openGraph: {
      title,
      description: ogDescription ?? description,
      locale: OG_LOCALE[lang],
      alternateLocale: [OG_LOCALE[lang === "tr" ? "en" : "tr"]],
      type: "website",
      url: paths[lang],
      siteName: SITE.name,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: ogDescription ?? description,
      images: [ogImage.url],
    },
  }
}

/** Metadata for the home page of each language. */
export function buildMetadata(lang: Lang): Metadata {
  const { meta } = getT(lang)
  return {
    ...buildPageMetadata({
      lang,
      title: meta.title,
      description: meta.description,
      ogDescription: meta.ogDescription,
      paths: LANG_PATH,
    }),
    keywords: meta.keywords,
  }
}

export const siteViewport: Viewport = {
  // Dark is the default theme, so the browser UI matches it.
  themeColor: "#0b1120",
  width: "device-width",
  initialScale: 1,
}

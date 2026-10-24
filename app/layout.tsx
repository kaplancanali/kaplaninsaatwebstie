import type { Metadata, Viewport } from "next"
import { Inter, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/language-context"
import { JsonLd } from "@/components/json-ld"
import { SITE } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri",
  description:
    "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra. Ücretsiz keşif, garantili işçilik.",
  keywords:
    "çatı sistemleri, eksiz oluk, izolasyon, membran, Kocaeli, İzmit, Gebze, Darıca, Körfez, Başiskele, Gölcük, Kartepe, Kandıra, çatı ustası, çatı tamiri",
  authors: [{ name: "Kaplan İnşaat" }],
  alternates: {
    canonical: SITE.url,
    languages: {
      tr: SITE.url,
      en: SITE.url,
      "x-default": SITE.url,
    },
  },
  openGraph: {
    title: "Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri",
    description:
      "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. Ücretsiz keşif, garantili işçilik.",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "Kaplan İnşaat çatı ve oluk uygulamaları",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaplan İnşaat | Kocaeli Çatı ve Oluk Sistemleri",
    description:
      "Kocaeli genelinde profesyonel çatı sistemleri, eksiz oluk sistemleri ve izolasyon hizmetleri. Ücretsiz keşif, garantili işçilik.",
    images: [SITE.ogImage],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <JsonLd />
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

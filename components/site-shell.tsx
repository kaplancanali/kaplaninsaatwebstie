import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from "@/components/json-ld"
import { GoogleAnalytics } from "@/components/google-analytics"
import { MotionProvider } from "@/components/motion-provider"
import { LanguageProvider } from "@/lib/language-context"
import { inter, manrope } from "@/lib/fonts"
import { clientStrings, getT, type Lang } from "@/lib/translations"
import "@/app/globals.css"

/** Shared <html>/<body> for both language root layouts. */
export function SiteShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          {getT(lang).common.skipToContent}
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider lang={lang} t={clientStrings(getT(lang))}>
            <JsonLd lang={lang} />
            <MotionProvider>{children}</MotionProvider>
            <Analytics />
            <GoogleAnalytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

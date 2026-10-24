import { Header } from "@/components/sections/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCTA } from "@/components/mobile-cta"
import { CookieConsent } from "@/components/cookie-consent"

/** Header, footer and floating contact actions shared by every page. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pb-20 lg:pb-0">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
      <CookieConsent />
    </>
  )
}

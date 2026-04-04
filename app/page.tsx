import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { ServiceAreas } from "@/components/service-areas"
import { WhyUs } from "@/components/why-us"
import { Reviews } from "@/components/reviews"
import { Process } from "@/components/process"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { MobileCTA } from "@/components/mobile-cta"

export default function Home() {
  return (
    <main className="min-h-screen pb-20 lg:pb-0">
      <Header />
      <Hero />
      <TrustBadges />
      <Services />
      <Projects />
      <ServiceAreas />
      <WhyUs />
      <Reviews />
      <Process />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </main>
  )
}

import { SiteChrome } from "@/components/site-chrome"
import { Hero } from "@/components/sections/hero"
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
import type { Lang } from "@/lib/translations"

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <SiteChrome>
      <Hero lang={lang} />
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
    </SiteChrome>
  )
}

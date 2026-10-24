import { SiteChrome } from "@/components/site-chrome"
import { Hero } from "@/components/sections/hero"
import { TrustBand } from "@/components/sections/trust-band"
import { Services } from "@/components/sections/services"
import { Gallery } from "@/components/sections/gallery"
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
      <TrustBand lang={lang} />
      <Services lang={lang} />
      <Gallery lang={lang} />
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

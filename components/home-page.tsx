import { SiteChrome } from "@/components/site-chrome"
import { Hero } from "@/components/sections/hero"
import { TrustBand } from "@/components/sections/trust-band"
import { Services } from "@/components/sections/services"
import { Gallery } from "@/components/sections/gallery"
import { ServiceAreas } from "@/components/sections/service-areas"
import { WhyUs } from "@/components/sections/why-us"
import { Reviews } from "@/components/sections/reviews"
import { Process } from "@/components/sections/process"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"
import { Contact } from "@/components/sections/contact"
import { HomeJsonLd } from "@/components/json-ld"
import type { Lang } from "@/lib/translations"

export function HomePage({ lang }: { lang: Lang }) {
  return (
    <SiteChrome>
      <HomeJsonLd lang={lang} />
      <Hero lang={lang} />
      <TrustBand lang={lang} />
      <Services lang={lang} />
      <Gallery lang={lang} />
      <ServiceAreas lang={lang} />
      <WhyUs lang={lang} />
      <Reviews lang={lang} />
      <Process lang={lang} />
      <FAQ lang={lang} />
      <CTA lang={lang} />
      <Contact lang={lang} />
    </SiteChrome>
  )
}

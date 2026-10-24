import Image from "next/image"
import { ArrowRight, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedStat } from "@/components/animated-stat"
import { HERO_STATS } from "@/lib/data/site-data"
import { getT, type Lang } from "@/lib/translations"
import { SITE } from "@/lib/site"
import heroImage from "@/public/gallery/cati/kiremit-cati-membran-uzeri.jpg"

/** Roof-ridge underline drawn beneath the highlighted words. */
function RidgeUnderline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 16"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-3 w-full text-copper-500"
    >
      <path d="M2 14 L150 3 L298 14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Hero({ lang }: { lang: Lang }) {
  const h = getT(lang).hero
  const stats = [
    ...HERO_STATS.map((s, i) => ({ value: <AnimatedStat target={s.value} suffix={s.suffix} />, label: h.statLabels[i] })),
    { value: h.stat724, label: h.stat724Label },
  ]

  return (
    <section
      aria-labelledby="hero-title"
      className="roof-cut-bottom relative isolate flex min-h-[100svh] items-end overflow-hidden bg-navy-950 [--roof:min(6vw,80px)]"
    >
      <Image
        src={heroImage}
        alt={h.imageAlt}
        fill
        priority
        placeholder="blur"
        quality={70}
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      {/* Readability overlays: dark on the text side and at the bottom. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/20 to-navy-950/50" />
      <div aria-hidden className="pattern-truss absolute inset-0 -z-10 text-white/[0.035]" />

      <div className="site-container w-full pt-28 pb-[calc(min(6vw,80px)+2.5rem)] md:pt-36">
        <div className="max-w-3xl">
          <Badge variant="inverse" className="animate-in fade-in slide-in-from-bottom-2 duration-700">
            <MapPin className="text-copper-400" aria-hidden />
            {h.badge}
          </Badge>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.5rem,6.5vw,4.75rem)] font-extrabold leading-[1.04] tracking-tight text-white text-balance animate-in slide-in-from-bottom-4 duration-700"
          >
            {h.titleBefore}{" "}
            <span className="relative inline-block text-copper-400">
              {h.titleHighlight}
              <RidgeUnderline />
            </span>{" "}
            {h.titleAfter}
          </h1>

          <p data-speakable className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:150ms] [animation-fill-mode:backwards]">
            {h.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 [animation-delay:300ms] [animation-fill-mode:backwards]">
            <Button asChild size="xl" className="shadow-glow">
              <a href="#iletisim">
                {h.cta1}
                <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="xl" variant="inverse">
              <a href={`tel:${SITE.phones.primary}`} aria-label={h.callAria}>
                <Phone aria-hidden />
                {h.cta2}
              </a>
            </Button>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 px-5 py-5 md:px-6 md:py-6"
            >
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-copper-500 to-transparent" />
              <dt className="text-xs font-medium text-white/65 md:text-sm">{s.label}</dt>
              <dd className="order-first mt-1 font-heading text-3xl font-extrabold tabular-nums text-white md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

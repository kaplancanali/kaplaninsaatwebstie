import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { ServicePage } from "@/lib/data/services"
import { servicePath } from "@/lib/routes"
import { getT, type Lang } from "@/lib/translations"

export function ServiceCard({
  service,
  lang,
  headingLevel: Heading = "h3",
}: {
  service: ServicePage
  lang: Lang
  headingLevel?: "h2" | "h3"
}) {
  const t = getT(lang).servicePages

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card shadow-soft transition-shadow duration-300 hover:shadow-lift has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-ring">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt[lang]}
          fill
          placeholder="blur"
          sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
        <Badge variant="inverse" size="sm" className="absolute left-4 top-4 bg-navy-950/70">
          {t.categories[service.category]}
        </Badge>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Heading className="text-xl font-bold text-foreground">
          <Link
            href={servicePath(lang, service.slug[lang])}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {service.name[lang]}
          </Link>
        </Heading>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {service.content[lang].summary}
        </p>
        <span aria-hidden className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-[gap] group-hover:gap-2.5">
          {t.readMore}
          <ArrowRight className="size-4" />
        </span>
      </div>
    </article>
  )
}

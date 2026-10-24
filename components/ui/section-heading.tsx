import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  /** id for the heading, so the section can use aria-labelledby. */
  id?: string
  align?: "center" | "left"
  tone?: "default" | "inverse"
  as?: "h2" | "h3"
  className?: string
}

/** Small roof-pitch mark used before section eyebrows. */
export function RoofMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" fill="none" aria-hidden className={cn("h-3 w-6", className)}>
      <path d="M1 11 L12 1.5 L23 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  tone = "default",
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  const inverse = tone === "inverse"

  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      <p
        className={cn(
          "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
          inverse ? "text-copper-400" : "text-brand"
        )}
      >
        <RoofMark />
        {eyebrow}
      </p>
      <Heading
        id={id}
        className={cn(
          "mt-3 text-3xl font-extrabold leading-[1.1] text-balance md:text-4xl lg:text-5xl",
          inverse ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            inverse ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

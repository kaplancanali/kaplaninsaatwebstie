import Link from "next/link"
import { ChevronRight } from "lucide-react"

export type Crumb = { name: string; path: string }

/** Visible breadcrumb trail; the last item is the current page. */
export function Breadcrumbs({ crumbs, label }: { crumbs: Crumb[]; label: string }) {
  return (
    <nav aria-label={label}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/65">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="text-white">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.path} className="rounded hover:text-white hover:underline underline-offset-4">
                    {c.name}
                  </Link>
                  <ChevronRight className="size-3.5 text-white/40" aria-hidden />
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

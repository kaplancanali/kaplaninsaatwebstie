import { Plus } from "lucide-react"

/**
 * Native <details> accordion: answers are always in the HTML (crawlable,
 * works without JS); only the open/close state is interactive.
 */
export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y overflow-hidden rounded-2xl border bg-card shadow-soft">
      {items.map((item) => (
        <details key={item.question} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold text-foreground transition-colors hover:text-brand">
            <h3 className="text-base">{item.question}</h3>
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color] duration-300 group-open:rotate-45 group-open:border-transparent group-open:bg-primary group-open:text-primary-foreground">
              <Plus className="size-4" aria-hidden />
            </span>
          </summary>
          <p className="px-6 pb-6 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  )
}

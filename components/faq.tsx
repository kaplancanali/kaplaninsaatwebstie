"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useInView } from "@/hooks/use-in-view"
import { useLanguage } from "@/lib/language-context"
import { cn } from "@/lib/utils"

export function FAQ() {
  const [ref, inView] = useInView()
  const { t } = useLanguage()
  const f = t.faq

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{f.badge}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4 text-balance">{f.title}</h2>
          <p className="text-muted-foreground text-lg">{f.subtitle}</p>
        </div>

        <div ref={ref} className={cn("reveal max-w-3xl mx-auto", inView && "in-view")}>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {f.items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-6 border-b-0 last:border-b-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border"
                >
                  <AccordionTrigger className="text-base font-semibold text-foreground py-5 hover:no-underline hover:text-primary transition-colors text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
            <p className="text-foreground font-medium mb-1">{f.bottomTitle}</p>
            <p className="text-muted-foreground text-sm mb-4">{f.bottomDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+905399130646" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                +90 539 913 06 46
              </a>
              <span className="hidden sm:inline text-muted-foreground">·</span>
              <a href="https://wa.me/905399130646" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                {f.whatsappLink}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

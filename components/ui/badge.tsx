import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border font-medium [&_svg]:size-3.5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-border bg-muted text-foreground",
        brand: "border-brand/25 bg-accent text-accent-foreground",
        outline: "border-border bg-transparent text-muted-foreground",
        /** For dark / photo backgrounds. */
        inverse: "border-white/20 bg-white/10 text-white",
      },
      size: {
        sm: "px-2.5 py-0.5 text-xs",
        default: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant, size }), className)} {...props} />
}

export { Badge, badgeVariants }

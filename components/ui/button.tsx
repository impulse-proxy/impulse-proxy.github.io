import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        inverted:
          "bg-white text-neutral-950 hover:bg-neutral-200 focus-visible:border-white focus-visible:ring-white/50",
        "inverted-outline":
          "border-white/15 bg-transparent text-white hover:bg-white/10 hover:text-white focus-visible:border-white focus-visible:ring-white/50",
      },
      size: {
        cta: "h-11 gap-2 px-5 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "cta",
    },
  }
)

export { buttonVariants }

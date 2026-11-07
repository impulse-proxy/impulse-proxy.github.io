export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative flex size-8 items-center justify-center overflow-hidden rounded-lg shadow-sm ${inverse ? "bg-white text-neutral-950" : "bg-foreground text-background"}`}
    >
      <span className={`absolute inset-x-1.5 h-px rotate-[-34deg] ${inverse ? "bg-neutral-950/90" : "bg-background/90"}`} />
      <span className={`absolute inset-x-1.5 h-px rotate-34 ${inverse ? "bg-neutral-950/40" : "bg-background/40"}`} />
      <span className={`size-1.5 rounded-full ${inverse ? "bg-neutral-950" : "bg-background"}`} />
    </span>
  );
}

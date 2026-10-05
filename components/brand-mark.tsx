export function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg bg-foreground text-background shadow-sm"
    >
      <span className="absolute inset-x-1.5 h-px rotate-[-34deg] bg-background/90" />
      <span className="absolute inset-x-1.5 h-px rotate-34 bg-background/40" />
      <span className="size-1.5 rounded-full bg-background" />
    </span>
  );
}

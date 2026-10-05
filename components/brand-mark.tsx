export function BrandMark() {
  return (
    <span
      aria-hidden="true"
      className="relative flex size-8 items-center justify-center overflow-hidden rounded-lg bg-neutral-950 text-white shadow-sm"
    >
      <span className="absolute inset-x-1.5 h-px rotate-[-34deg] bg-white/90" />
      <span className="absolute inset-x-1.5 h-px rotate-34 bg-white/40" />
      <span className="size-1.5 rounded-full bg-white" />
    </span>
  );
}

export function NewTabIndicator() {
  return (
    <>
      <span aria-hidden="true" className="ml-1">
        ↗
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </>
  );
}

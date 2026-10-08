"use client";

import { Moon, Sun } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const targetTheme = resolvedTheme === "dark" ? "light" : "dark";
  const label = `Switch to ${targetTheme} theme`;

  return (
    <button
      type="button"
      onClick={() => setTheme(targetTheme)}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
    >
      <Sun aria-hidden="true" className="hidden size-4 dark:block" weight="regular" />
      <Moon aria-hidden="true" className="size-4 dark:hidden" weight="regular" />
    </button>
  );
}

import { GithubLogo } from "@phosphor-icons/react/ssr";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BrandMark />
          <span className="text-[17px] font-semibold tracking-[-0.03em]">{siteConfig.name}</span>
          <span className="hidden rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:inline-flex">
            {siteConfig.maturity}
          </span>
        </Link>

        <nav className="flex items-center gap-2" aria-label="Project links">
          <Link
            href={siteConfig.links.architecture}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:inline-flex"
          >
            Architecture
          </Link>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Impulse on GitHub"
            className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <GithubLogo aria-hidden="true" className="size-4" weight="fill" />
          </Link>
          <Link
            href={siteConfig.links.quickstart}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex"
          >
            Quickstart
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

import { GithubLogo } from "@phosphor-icons/react/ssr";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { NewTabIndicator } from "@/components/new-tab-indicator";
import { siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <BrandMark />
          <span className="text-[17px] font-semibold tracking-[-0.03em]">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-5" aria-label="Project links">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Docs
            <NewTabIndicator />
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <GithubLogo aria-hidden="true" className="size-4" weight="fill" />
            GitHub
            <NewTabIndicator />
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

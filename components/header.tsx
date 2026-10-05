import { GithubLogo } from "@phosphor-icons/react/ssr";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  return (
    <header className="relative z-50 border-b border-black/[0.07] bg-[#fbfbfa]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
        >
          <BrandMark />
          <span className="text-[17px] font-semibold tracking-[-0.03em]">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center gap-5" aria-label="Project links">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            <GithubLogo aria-hidden="true" className="size-4" weight="fill" />
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}

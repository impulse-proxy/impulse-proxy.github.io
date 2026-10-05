import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-foreground">
          <BrandMark />
          <span className="font-semibold">{siteConfig.name}</span>
        </div>
        <div className="flex gap-5">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

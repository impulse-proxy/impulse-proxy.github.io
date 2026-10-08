import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

const footerLinks = [
  { label: "Documentation", href: siteConfig.links.docs },
  { label: "Status & limitations", href: siteConfig.links.status },
  { label: "Releases", href: siteConfig.links.releases },
  { label: "Security model", href: siteConfig.links.security },
  { label: "GPLv3 license", href: siteConfig.links.license },
  { label: "GitHub", href: siteConfig.links.github },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-muted-foreground sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5 text-foreground">
            <BrandMark />
            <span className="font-semibold">{siteConfig.name}</span>
          </div>
          <p className="mt-2 text-xs">
            Open source · {siteConfig.maturity} · Controlled production rollout
          </p>
        </div>
        <nav
          aria-label="Footer links"
          className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end"
        >
          {footerLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

const footerGroups = [
  {
    label: "Explore",
    links: [
      { label: "Documentation", href: siteConfig.links.docs },
      { label: "Architecture", href: siteConfig.links.architecture },
      { label: "Quickstart", href: siteConfig.links.quickstart },
      { label: "Production deployment", href: siteConfig.links.production },
    ],
  },
  {
    label: "Reference",
    links: [
      { label: "Feature matrix", href: siteConfig.links.status },
      { label: "Plugin build profiles", href: siteConfig.links.pluginBuilds },
      { label: "Security model", href: siteConfig.links.security },
    ],
  },
  {
    label: "Project",
    links: [
      { label: "GitHub", href: siteConfig.links.github },
      { label: "Releases", href: siteConfig.links.releases },
      { label: "Apache 2.0", href: siteConfig.links.license },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" aria-label={`${siteConfig.name} home`} className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <BrandMark inverse />
              <span className="text-lg font-semibold tracking-[-0.03em]">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              Open-source reverse proxy and edge runtime with production Pingora H1/H2 ingress and experimental HTTP/3.
            </p>
            <span className="mt-6 inline-flex rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">
              {siteConfig.maturity} · Controlled production rollout
            </span>
          </div>

          {footerGroups.map((group) => (
            <nav key={group.label} aria-label={`${group.label} links`}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/35">{group.label}</p>
              <ul className="mt-5 space-y-3">
                {group.links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} target="_blank" rel="noopener noreferrer" className="rounded-sm text-sm text-white/55 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Open source under the Apache License 2.0.</p>
          <p>Production H1/H2 · Experimental H3</p>
        </div>
      </div>
    </footer>
  );
}

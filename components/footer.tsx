import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-[#fbfbfa]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 text-sm text-neutral-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5 text-neutral-950">
          <BrandMark />
          <span className="font-semibold">{siteConfig.name}</span>
        </div>
        <div className="flex gap-5">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            Documentation
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-neutral-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

import {
  BookOpen,
  BracketsCurly,
  Check,
  Gauge,
  GearSix,
  GithubLogo,
  Globe,
  Graph,
  LockKey,
  Path,
  Pulse,
  ShieldCheck,
  Stack,
} from "@phosphor-icons/react/ssr";
import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";
import { SectionLabel } from "@/components/section-label";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const strategies = [
  "Round robin",
  "Random",
  "Consistent hash",
  "Least connections",
  "Latency aware",
  "Sticky CID",
] as const;

const pluginModel = [
  ["Build", "Full, minimal, or custom"],
  ["Generation", "Only configured plugins become active"],
  ["Guardrail", "Unavailable requirements are rejected"],
] as const;

const operatorSignals = [
  { icon: Graph, title: "Traffic", detail: "Rates, latency, outcomes" },
  { icon: Globe, title: "Backends", detail: "Health, load, membership" },
  { icon: LockKey, title: "Control", detail: "Generation and audit state" },
] as const;

const configSnippet = `version: 1

listen:
  protocol: http3
  port: 9889
  tls:
    cert: certs/proxy-cert.pem
    key: certs/proxy-key-pkcs8.pem

upstream:
  api_backend:
    route:
      path_prefix: /api
    backends:
      - id: api-1
        address: http://127.0.0.1:8001`;

function Arrow() {
  return <div aria-hidden="true" className="hidden items-center justify-center text-lg text-muted-foreground/40 lg:flex">→</div>;
}

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden focus:outline-none">
      <section className="relative border-b border-border">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(16,185,129,0.08),transparent_27%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))] dark:bg-[radial-gradient(circle_at_76%_20%,rgba(16,185,129,0.09),transparent_27%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:py-32">
          <div>
            <Link href={siteConfig.links.status} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring">
              <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              Open source · {siteConfig.maturity} · Controlled rollout
            </Link>
            <h1 className="mt-8 max-w-3xl text-balance text-5xl font-semibold leading-[0.96] tracking-[-0.065em] sm:text-6xl lg:text-[5rem]">
              Control traffic. Keep the backend simple.
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">{siteConfig.description}</p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              {siteConfig.maturity} software intended for controlled production rollout. Interfaces and operational boundaries may still change before general availability.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={siteConfig.links.quickstart} target="_blank" rel="noopener noreferrer" className={buttonVariants({ size: "cta", className: "shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:bg-primary/90" })}>
                <BookOpen aria-hidden="true" className="size-4" /> Start with the quickstart
              </Link>
              <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "cta", className: "bg-background/70 shadow-sm backdrop-blur" })}>
                <GithubLogo aria-hidden="true" className="size-4" weight="fill" /> View source
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["Production H1/H2", "Experimental H3", "Apache 2.0"].map((item) => (
                <span key={item} className="flex items-center gap-2"><Check aria-hidden="true" className="size-3.5 text-emerald-600 dark:text-emerald-400" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-5 rounded-[2rem] bg-foreground/[0.035] blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-[0_32px_90px_rgba(0,0,0,0.24)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex items-center gap-2.5"><BrandMark /><div><p className="text-sm font-semibold">Runtime view</p><p className="text-xs text-white/45">Illustrative, not live telemetry</p></div></div>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">serving</span>
              </div>
              <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                <div className="bg-neutral-950 p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">Ingress</p>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-white/10 bg-white/[0.045] p-4"><div className="flex items-center justify-between gap-3"><p className="text-sm font-medium">Pingora H1/H2</p><span className="text-xs text-emerald-300">production</span></div><p className="mt-1 text-xs text-white/45">TLS · TCP · ALPN</p></div>
                    <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.025] p-4"><div className="flex items-center justify-between gap-3"><p className="text-sm font-medium">HTTP/3</p><span className="text-xs text-white/50">experimental</span></div><p className="mt-1 text-xs text-white/45">QUIC · UDP · TLS 1.3</p></div>
                  </div>
                </div>
                <div className="bg-[#141513] p-5 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">Shared request service</p>
                  <div className="mt-5 space-y-2.5">
                    {["Resolve route", "Execute compiled policy", "Select ready backend", "Record one outcome"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5"><span className="font-mono text-[10px] text-white/35">0{index + 1}</span><span className="text-xs text-white/80">{item}</span></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3.5 text-xs text-white/45"><span>Immutable runtime generation</span><span>H1/H2 upstream transport</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Focused by design</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">The traffic controls you need, with clear ownership.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Routing, policy, backend selection, and operations meet in one runtime without turning Impulse into an application platform.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-12">
            <article className="overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8 lg:col-span-7">
              <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50"><Path aria-hidden="true" className="size-5" /></div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">Deterministic routing</h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Resolve exact or wildcard hosts, segment-aware path prefixes, and methods with predictable precedence.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                <div className="rounded-xl border border-border bg-muted/35 p-4 font-mono text-xs leading-6 text-muted-foreground"><span className="text-foreground">api.example.com</span><br />GET /v1/orders</div>
                <span aria-hidden="true" className="hidden text-muted-foreground/50 sm:block">→</span>
                <div className="rounded-xl border border-border bg-foreground p-4 font-mono text-xs leading-6 text-background">route: orders-api<br />upstream: orders</div>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-foreground p-7 text-background shadow-sm sm:p-8 lg:col-span-5">
              <div className="flex items-center justify-between"><div className="flex size-10 items-center justify-center rounded-xl border border-background/15 bg-background/10"><Gauge aria-hidden="true" className="size-5" /></div><span className="text-xs text-background/50">6 strategies</span></div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">Health-aware balancing</h3>
              <p className="mt-3 text-sm leading-6 text-background/60">Ready-backend selection combines active checks, passive feedback, retry exclusions, and generation-owned membership.</p>
              <div className="mt-7 flex flex-wrap gap-2">{strategies.map((strategy) => <span key={strategy} className="rounded-full border border-background/15 bg-background/[0.06] px-3 py-1.5 text-xs text-background/75">{strategy}</span>)}</div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8 lg:col-span-5">
              <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50"><ShieldCheck aria-hidden="true" className="size-5" /></div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">Compiled policy, explicit cost</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">Authentication, selected rate limits, quota, bounded memory caching, and gzip compression are compiled Rust plugins—not runtime-loaded scripts.</p>
              <div className="mt-7 divide-y divide-border rounded-xl border border-border bg-muted/25">
                {pluginModel.map(([label, value]) => <div key={label} className="grid grid-cols-[88px_1fr] gap-3 px-4 py-3 text-xs"><span className="font-medium text-foreground">{label}</span><span className="text-muted-foreground">{value}</span></div>)}
              </div>
              <Link href={siteConfig.links.pluginBuilds} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">Explore build profiles →</Link>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8 lg:col-span-7">
              <div aria-hidden="true" className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-500/[0.06] blur-3xl" />
              <div className="relative"><div className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50"><Stack aria-hidden="true" className="size-5" /></div>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">Safe runtime generations</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground">Prepare complete immutable generations before publication. Failed candidates leave active traffic unchanged; retained generations provide a bounded rollback path.</p>
                <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">{["Validate", "Preview", "Activate", "Rollback"].map((step, index) => <div key={step} className="rounded-xl border border-border bg-muted/30 p-4"><p className="font-mono text-[10px] text-muted-foreground">0{index + 1}</p><p className="mt-4 text-sm font-medium">{step}</p></div>)}</div>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-card p-7 shadow-sm sm:p-8 lg:col-span-12">
              <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
                <div><div className="flex size-10 items-center justify-center rounded-xl border border-border bg-muted/50"><Pulse aria-hidden="true" className="size-5" /></div><h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em]">Operational signals that agree</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Stable Prometheus metrics, logs, optional OTLP traces, audit events, and runtime status support deployment-owned dashboards and alerts.</p></div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {operatorSignals.map(({ icon: Icon, title, detail }) => <div key={title} className="rounded-2xl border border-border bg-muted/30 p-5"><Icon aria-hidden="true" className="size-4" /><p className="mt-8 text-sm font-medium">{title}</p><p className="mt-1 text-xs leading-5 text-muted-foreground">{detail}</p></div>)}
                </div>
              </div>
            </article>
          </div>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">WebSocket and CONNECT support is partial and protocol-dependent. Impulse does not provide runtime-loaded plugins, a WAF, browser login, or fleet management.{" "}<Link href={siteConfig.links.status} target="_blank" rel="noopener noreferrer" className="font-medium text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">Review the feature and limitation matrix</Link>.</p>
        </div>
      </section>

      <section className="border-y border-border bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><SectionLabel>One shared runtime</SectionLabel><h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Protocol adapters at the edge. One decision model within.</h2></div>
            <div className="lg:justify-self-end"><p className="max-w-xl text-lg leading-8 text-muted-foreground">Ingress handles protocol mechanics. The shared edge service owns routing, compiled policy, backend selection, upstream execution, and completion.</p><Link href={siteConfig.links.architecture} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">Read the canonical architecture →</Link></div>
          </div>
          <div className="mt-14 grid gap-3 lg:grid-cols-[1fr_32px_1.2fr_32px_1fr] lg:items-stretch">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Ingress adapters</p><div className="mt-6 space-y-3"><div className="rounded-xl border border-border bg-muted/30 p-4"><p className="text-sm font-medium">Pingora H1/H2</p><p className="mt-1 text-xs text-muted-foreground">Production · TCP/TLS</p></div><div className="rounded-xl border border-dashed border-border p-4"><p className="text-sm font-medium">HTTP/3</p><p className="mt-1 text-xs text-muted-foreground">Experimental · QUIC/UDP</p></div></div></div>
            <Arrow />
            <div className="rounded-3xl border border-border bg-foreground p-6 text-background shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-background/50">Shared edge service</p><p className="mt-6 text-xl font-semibold tracking-[-0.03em]">One pinned generation per request</p><p className="mt-3 text-sm leading-6 text-background/60">Protocol-neutral routing, policy, load balancing, transport coordination, response processing, and exactly-once completion.</p></div>
            <Arrow />
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Upstream transport</p><div className="mt-6 space-y-3"><div className="rounded-xl border border-border bg-muted/30 p-4"><p className="text-sm font-medium">HTTP/2 backend</p><p className="mt-1 text-xs text-muted-foreground">TLS · optional mTLS</p></div><div className="rounded-xl border border-border bg-muted/30 p-4"><p className="text-sm font-medium">HTTP/1.1 backend</p><p className="mt-1 text-xs text-muted-foreground">Cleartext · pooled</p></div></div></div>
          </div>
        </div>
      </section>

      <section className="bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="max-w-lg"><SectionLabel>Configuration you can reason about</SectionLabel><h2 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Start small. Activate deliberately.</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Validated YAML becomes an immutable runtime generation. Use production H1/H2 first, then evaluate HTTP/3 independently.</p>
              <div className="mt-8 rounded-2xl border border-border bg-card p-6"><GearSix aria-hidden="true" className="size-5" /><p className="mt-5 text-sm font-medium">Listener schema note</p><p className="mt-2 text-sm leading-6 text-muted-foreground"><code className="text-foreground">protocol: http3</code> is the current listener schema value. That listener group serves production Pingora H1/H2 and experimental H3.</p></div>
              <Link href={siteConfig.links.production} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">Review production deployment →</Link>
            </div>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-[0_28px_75px_rgba(0,0,0,0.2)]">
              <div className="flex h-12 items-center justify-between border-b border-white/10 px-5 text-white/50"><div className="flex items-center gap-2 text-xs"><BracketsCurly aria-hidden="true" className="size-3.5" /> config.yaml</div><span className="text-xs">YAML</span></div>
              <pre className="overflow-x-auto p-6 font-mono text-[12px] leading-6 text-white/70 sm:p-8 sm:text-[13px]"><code>{configSnippet}</code></pre>
              <div className="border-t border-white/10 p-5 sm:px-8"><p className="text-xs font-medium uppercase tracking-[0.15em] text-white/35">First request · production H1</p><code className="mt-3 block overflow-x-auto rounded-lg bg-white/[0.06] px-3 py-3 text-xs text-white/80">curl --http1.1 --insecure https://localhost:9889/api</code><p className="mt-3 text-xs leading-5 text-white/45">HTTP/3 remains an optional experimental path.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 text-white dark:bg-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Deploy with intent</p><h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">Put Impulse in front of a service you already run.</h2><p className="mt-4 max-w-xl text-base leading-7 text-white/55">Start with one backend and production H1/H2, then stage routing, policy, and resilience changes with monitoring and rollback readiness.</p></div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Link href={siteConfig.links.quickstart} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "inverted", size: "cta" })}>Read the quickstart</Link><Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "inverted-outline", size: "cta" })}><GithubLogo aria-hidden="true" className="size-4" weight="fill" /> View source</Link></div>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { NewTabIndicator } from "@/components/new-tab-indicator";
import { SectionLabel } from "@/components/section-label";
import { siteConfig } from "@/lib/site-config";
import {
  BookOpen, BracketsCurly, Check, Gauge, GearSix, GithubLogo, Globe, Graph, LockKey, Path, Pulse, ShieldCheck, Stack
} from "@phosphor-icons/react/ssr";

const capabilities = [
  {
    icon: Globe,
    title: "Modern ingress",
    description:
      "Terminate native HTTP/3 over QUIC, with HTTP/1.1 and HTTP/2 bootstrap ingress for broad client compatibility.",
  },
  {
    icon: Path,
    title: "Deterministic routing",
    description:
      "Route by host, wildcard host, path prefix, and method with explicit, predictable resolution semantics.",
  },
  {
    icon: Gauge,
    title: "Health-aware balancing",
    description:
      "Choose from six load-balancing strategies backed by active health checks, passive signals, and automatic recovery.",
  },
  {
    icon: ShieldCheck,
    title: "Explicit resilience controls",
    description:
      "Apply admission control, quotas, retries, hedging, circuit breakers, and bounded resource use where your traffic needs them.",
  },
  {
    icon: LockKey,
    title: "Explicit trust boundaries",
    description:
      "Secure upstreams with mutual TLS (mTLS), protect requests with JSON Web Tokens (JWTs) or API keys, and operate through role-aware administration.",
  },
  {
    icon: Pulse,
    title: "Operator-grade signals",
    description:
      "Correlate Prometheus metrics, structured logs, OpenTelemetry Protocol (OTLP) traces, audit events, and live runtime snapshots.",
  },
];

const operationalSignals = [
  ["Request traffic", "Rate + latency", "metrics"],
  ["Backend state", "Health + load", "runtime"],
  ["Policy outcomes", "Allow + reject", "audit"],
];

const operationalProblems = [
  {
    title: "Backend instability",
    description:
      "Retries and unchecked concurrency can turn an isolated backend failure into a wider outage.",
  },
  {
    title: "Unclear policy outcomes",
    description:
      "When authentication, quota, admission, and routing blur together, rejected requests become difficult to explain.",
  },
  {
    title: "Unsafe traffic changes",
    description:
      "Routing and resilience updates need validation, controlled activation, and a dependable rollback path.",
  },
  {
    title: "Fragmented operational signals",
    description:
      "Metrics, logs, traces, and audit events need a shared vocabulary to tell the same request story.",
  },
];

const configSnippet = `version: 1

listen:
  protocol: http3
  port: 9889
  tls:
    cert: certs/proxy-cert.pem
    key: certs/proxy-key-pkcs8.pem

upstream:
  api_backend:
    load_balancing:
      type: round-robin
    route:
      path_prefix: /api
    backends:
      - id: api-1
        address: http://127.0.0.1:8001`;

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="flex-1 overflow-hidden focus:outline-none">
      <section className="relative border-b border-border">
        <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-20 lg:py-36">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 text-xs font-medium text-foreground/80 shadow-sm backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" />
              Open source · {siteConfig.release}
            </div>

            <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-[4.75rem]">
              Modern HTTP/3 ingress for the APIs you already run.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              {siteConfig.description}
            </p>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground">
              {siteConfig.release} is intended for controlled production rollout.{" "}
              <Link
                href={siteConfig.links.status}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Review status, general-availability blockers, and limitations
                <NewTabIndicator />
              </Link>
              .
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={siteConfig.links.quickstart}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_rgba(0,0,0,0.16)] transition hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <BookOpen aria-hidden="true" className="size-4" />
                Read the quickstart
                <NewTabIndicator />
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-semibold shadow-sm transition hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <GithubLogo aria-hidden="true" className="size-4" weight="fill" />
                View on GitHub
                <NewTabIndicator />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["HTTP/1.1 and HTTP/2 backends", "Self-hosted Linux runtime", "Native HTTP/3 over QUIC"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check aria-hidden="true" className="size-3.5 text-foreground" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-8 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(0,0,0,0.08),transparent_66%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-[#111210] text-white shadow-[0_30px_80px_rgba(0,0,0,0.22)]">
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4">
                <div className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                  <span className="size-2.5 rounded-full bg-white/20" />
                </div>
                <span className="font-mono text-xs tracking-[0.16em] text-white/70">OPERATOR VIEW / EXAMPLE</span>
              </div>

              <div className="grid gap-px bg-white/10 sm:grid-cols-[1.08fr_0.92fr]">
                <div className="bg-[#111210] p-5 sm:p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/70">Example generation</p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight">Active</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">Illustrative</span>
                  </div>

                  <div className="space-y-4">
                    {operationalSignals.map(([label, value, status], index) => (
                      <div key={label}>
                        <div className="mb-2 flex items-end justify-between gap-3">
                          <span className="text-xs text-white/70">{label}</span>
                          <div className="text-right">
                            <span className="text-sm font-semibold">{value}</span>
                            <span className="ml-2 text-xs text-emerald-300">{status}</span>
                          </div>
                        </div>
                        <div aria-hidden="true" className="flex h-6 items-end gap-1 overflow-hidden">
                          {[42, 58, 48, 64, 72, 61, 78, 70, 84, 76, 89, 82].map((height, barIndex) => (
                            <span
                              key={barIndex}
                              className="flex-1 rounded-sm bg-white/[0.14]"
                              style={{ height: `${Math.max(18, height - index * 8)}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#171816] p-5 sm:p-6">
                  <div className="mb-6 flex items-center gap-2 text-xs text-white/70">
                    <Graph aria-hidden="true" className="size-3.5" />
                    Request path
                  </div>
                  <div className="space-y-2.5">
                    {[
                      ["HTTP/3 + QUIC", "Ingress", "text-sky-300"],
                      ["Route + Select", "Decision", "text-amber-300"],
                      ["Authentication + Admission", "Policy", "text-violet-300"],
                      ["HTTP/1.1 or HTTP/2", "Upstream", "text-emerald-300"],
                    ].map(([title, label, color], index) => (
                      <div key={title}>
                        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                          <p className={`text-xs font-semibold uppercase tracking-wider ${color}`}>{label}</p>
                          <p className="mt-1 text-sm font-medium">{title}</p>
                        </div>
                        {index < 3 && <div className="mx-auto h-2.5 w-px bg-white/15" />}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs text-white/70">
                <span>Metrics · logs · traces · audit</span>
                <span>Not live telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="border-b border-border bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>The operational problem</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
              The edge gets hardest when traffic stops being normal.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              Basic forwarding is only the beginning. Under pressure, platform teams need every traffic decision and failure outcome to remain explicit.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden border-y border-border bg-border sm:grid-cols-2">
            {operationalProblems.map(({ title, description }) => (
              <article key={title} className="bg-background px-1 py-7 sm:p-7 lg:p-8">
                <h3 className="text-base font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <SectionLabel>One runtime, explicit decisions</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
              Traffic control that stays understandable under pressure.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Every important edge decision is a first-class runtime concern—not an opaque side effect.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group bg-card p-7 transition-colors hover:bg-muted sm:p-8">
                <div className="text-foreground/75 transition-transform group-hover:-translate-y-0.5">
                  <Icon aria-hidden="true" className="size-5" weight="regular" />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-y border-border bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Adopt without rewriting</SectionLabel>
            <h2 className="text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
              Modern clients in. Existing services out.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
              {siteConfig.name} terminates modern traffic at the edge, converges both ingress paths on one
              policy pipeline, and dispatches to the backend protocol your services already use.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between border-b border-border bg-card px-5 py-3.5">
              <div className="flex items-center gap-2.5">
                <BrandMark />
                <div>
                  <p className="text-sm font-semibold">{siteConfig.name} runtime architecture</p>
                  <p className="text-xs text-muted-foreground">Data plane and control plane boundaries</p>
                </div>
              </div>
              <span className="hidden rounded-full border border-border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:block">
                Active runtime generation
              </span>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">Data plane</span>
                <span className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground">request → response</span>
              </div>

              <div className="grid gap-3 lg:grid-cols-[0.72fr_24px_2fr_24px_0.72fr] lg:items-stretch">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Downstream</p>
                  <div className="mt-4 space-y-2.5">
                    <div className="rounded-lg border border-sky-200 bg-sky-50 p-3 dark:border-sky-900 dark:bg-sky-950/35">
                      <p className="text-xs font-semibold text-sky-950 dark:text-sky-100">Native ingress</p>
                      <p className="mt-1 text-xs leading-4 text-sky-800/70 dark:text-sky-300/70">HTTP/3 · QUIC · UDP</p>
                    </div>
                    <div className="rounded-lg border border-violet-200 bg-violet-50 p-3 dark:border-violet-900 dark:bg-violet-950/35">
                      <p className="text-xs font-semibold text-violet-950 dark:text-violet-100">Bootstrap ingress</p>
                      <p className="mt-1 text-xs leading-4 text-violet-800/70 dark:text-violet-300/70">HTTP/1.1 or HTTP/2 · TCP/TLS</p>
                    </div>
                  </div>
                </div>

                <div className="hidden items-center justify-center text-lg text-muted-foreground/50 lg:flex">→</div>

                <div className="rounded-xl border border-border bg-card p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Shared request path</p>
                      <p className="mt-1 text-sm font-semibold">One policy model for both ingress paths</p>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">active</span>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {[
                      ["01", "Intake", "canonical context"],
                      ["02", "Route", "resolve upstream"],
                      ["03", "Select", "choose backend"],
                      ["04", "Pre-auth", "brownout + rate limits"],
                      ["05", "Local authentication", "API key + JWT"],
                      ["06", "External authorization", "provider decision"],
                      ["07", "Post-auth", "quota + protection"],
                      ["08", "Dispatch", "bridge + transport"],
                    ].map(([step, title, detail]) => (
                      <div key={step} className="min-h-24 rounded-lg border border-border bg-muted/40 p-3">
                        <p className="font-mono text-xs text-muted-foreground">{step}</p>
                        <p className="mt-3 text-xs font-semibold leading-4">{title}</p>
                        <p className="mt-1 text-xs leading-4 text-muted-foreground">{detail}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 rounded-lg border border-dashed border-border bg-muted/40 px-3 py-2.5 text-center text-xs text-muted-foreground">
                    Response normalization · streaming guardrails · outcome recording · backend feedback
                  </div>
                </div>

                <div className="hidden items-center justify-center text-lg text-muted-foreground/50 lg:flex">→</div>

                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Upstream</p>
                  <div className="mt-4 space-y-2.5">
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900 dark:bg-emerald-950/35">
                      <p className="text-xs font-semibold text-emerald-950 dark:text-emerald-100">HTTPS backend</p>
                      <p className="mt-1 text-xs leading-4 text-emerald-800/70 dark:text-emerald-300/70">HTTP/2 · TLS · optional mTLS</p>
                    </div>
                    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/35">
                      <p className="text-xs font-semibold text-amber-950 dark:text-amber-100">HTTP backend</p>
                      <p className="mt-1 text-xs leading-4 text-amber-800/70 dark:text-amber-300/70">HTTP/1.1 · connection pool</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-5 flex items-center gap-3">
                <span className="h-px flex-1 border-t border-dashed border-border" />
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">shared state and feedback</span>
                <span className="h-px flex-1 border-t border-dashed border-border" />
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Runtime control</p>
                  <p className="mt-2 text-sm font-semibold">Validated generations</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">Validate · preview · activate · history · rollback</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Backend lifecycle</p>
                  <p className="mt-2 text-sm font-semibold">Resolution, health, membership</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">Domain Name System (DNS) refresh · active checks · passive feedback · client rotation</p>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Operator surfaces</p>
                  <p className="mt-2 text-sm font-semibold">Explain every outcome</p>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">Control API · metrics · logs · traces · audit · watchdog</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="operations" className="bg-muted/20 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-end">
            <div>
              <SectionLabel>Configuration you can reason about</SectionLabel>
              <h2 className="max-w-xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
                Validate, preview, activate, and roll back.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
              {siteConfig.name} lowers validated YAML into an immutable runtime generation. Operators see the diff before activation and keep a bounded path back to a known-good state.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-2xl border border-border bg-[#111210] shadow-xl">
              <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 text-white/70">
                <div className="flex items-center gap-2 text-xs"><BracketsCurly aria-hidden="true" className="size-3.5" /> config.yaml</div>
                <span className="text-xs">YAML</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 text-white/75 sm:p-7 sm:text-[13px]">
                <code>{configSnippet}</code>
              </pre>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <GearSix aria-hidden="true" className="size-5" />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">Staged runtime changes</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Inspect per-domain changes, reject incompatible updates, and atomically swap accepted generations.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["validate", "preview", "activate", "rollback"].map((item) => (
                    <span key={item} className="rounded-md bg-muted px-2.5 py-1.5 font-mono text-xs text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <Stack aria-hidden="true" className="size-5" />
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em]">An observability bundle</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Start with shipped dashboards, recording rules, alerts, and service-level objective (SLO) definitions aligned to the runtime vocabulary.
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>Prometheus</span><span className="size-1 rounded-full bg-muted-foreground/40" />
                  <span>Grafana</span><span className="size-1 rounded-full bg-muted-foreground/40" />
                  <span>OTLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 text-white dark:bg-neutral-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Deploy with intent</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-semibold tracking-tighter sm:text-5xl">
              Put {siteConfig.name} in front of an existing service.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
              Follow the quickstart with an existing backend, then move toward a staged rollout with monitoring and rollback readiness.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href={siteConfig.links.quickstart}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Read the quickstart <NewTabIndicator />
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-white/15 px-5 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <GithubLogo aria-hidden="true" className="size-4" weight="fill" /> View source
              <NewTabIndicator />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

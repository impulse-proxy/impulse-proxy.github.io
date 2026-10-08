export const siteConfig = {
  name: "Impulse",
  url: "https://impulse-proxy.github.io",
  description:
    "Impulse is an open-source edge runtime that terminates HTTP/3 over QUIC, applies explicit traffic policy, and forwards requests to existing HTTP/1.1 or HTTP/2 services.",
  maturity: "Beta",
  links: {
    docs: "https://impulse-proxy.github.io/docs/",
    quickstart: "https://impulse-proxy.github.io/docs/getting-started/quickstart",
    status: "https://impulse-proxy.github.io/docs/reference/status-and-limitations",
    security: "https://impulse-proxy.github.io/docs/concepts/security-model",
    github: "https://github.com/impulse-proxy/impulse",
    releases: "https://github.com/impulse-proxy/impulse/releases",
    license: "https://github.com/impulse-proxy/impulse/blob/master/LICENSE.md",
  },
} as const;

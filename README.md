# Impulse Website

This repository contains the public product website for
[Impulse](https://github.com/impulse-proxy/impulse), an open-source HTTP/3 and
QUIC edge runtime. The site introduces the product, communicates its current
maturity, and directs readers to the documentation and source repository.

The canonical production origin is <https://impulse-proxy.github.io/>. Product
documentation is published separately at <https://impulse-proxy.github.io/docs/>.

## Repository Boundaries

The Impulse project is split across three repositories:

| Repository | Responsibility |
| --- | --- |
| [`impulse-proxy/website`](https://github.com/impulse-proxy/website) | Product homepage, positioning, navigation, and web metadata |
| [`impulse-proxy/docs`](https://github.com/impulse-proxy/docs) | Installation, configuration, architecture, operations, and reference documentation |
| [`impulse-proxy/impulse`](https://github.com/impulse-proxy/impulse) | Runtime source, tests, packaging, release notes, and contribution workflow |

Keep detailed configuration contracts, operational procedures, and protocol
support tables out of this repository. Summarize those topics here and link to
their canonical documentation instead.

## Content Authority

Website copy must remain consistent with the following sources:

| Subject | Authoritative source |
| --- | --- |
| Implemented runtime behavior | Current source and tests in `impulse-proxy/impulse` |
| Configuration, Control API, metrics, and operational behavior | The corresponding reference page in `impulse-proxy/docs` |
| Maturity, partial support, limitations, and GA blockers | [Status and Limitations](https://impulse-proxy.github.io/docs/reference/status-and-limitations) |
| Released changes | [GitHub releases](https://github.com/impulse-proxy/impulse/releases) and the runtime changelog |
| Website URLs, maturity label, and shared product description | [`lib/site-config.ts`](lib/site-config.ts) |

The website is not an independent source of product behavior. Before adding or
changing a technical claim, verify it against the runtime and its canonical
documentation. Prefer precise capability descriptions over absolute marketing
claims.

## Local Environment

The site uses Next.js, React, TypeScript, and Tailwind CSS. Development requires:

- Node.js 20.9 or newer, as required by the checked-in Next.js version
- npm, using the committed `package-lock.json`

No environment variables are currently required for local development or the
public page.

Install the locked dependencies:

```bash
npm ci
```

Start the local development server:

```bash
npm run dev
```

The default local URL is <http://localhost:3000>.

Available verification commands are:

```bash
npm run lint
npm run build
```

## Project Structure

| Path | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage content and product diagrams |
| `app/layout.tsx` | Root layout and canonical social metadata |
| `app/opengraph-image.tsx` | Generated social preview image |
| `app/robots.ts` | Search-crawler policy |
| `app/sitemap.ts` | Canonical sitemap entries |
| `components/` | Shared page components |
| `lib/site-config.ts` | Canonical website URL, maturity, description, and external links |

## Updating Links, Maturity, and Claims

Use these rules when product information changes:

1. Update shared URLs, the maturity label, or the canonical product description
   in `lib/site-config.ts`. This value also feeds page metadata, the sitemap,
   `robots.txt`, and the social preview.
2. Prefer version-neutral release and installation links. Link to the releases
   page instead of embedding a release number in a URL.
3. Update a maturity statement only after the canonical Status and Limitations
   page changes. Keep the homepage qualifier and social preview consistent.
4. Check every capability claim against the current runtime branch and the
   corresponding documentation reference. State partial-support boundaries or
   link directly to them.
5. When a documentation route changes, update `lib/site-config.ts` and search
   the whole repository for direct copies of the old route.
6. Keep sample configuration aligned with the current schema and use clearly
   local or placeholder values rather than production-looking credentials,
   addresses, or telemetry.

## Project Status and License

Impulse is beta software intended for controlled production rollouts. Review
[Status and Limitations](https://impulse-proxy.github.io/docs/reference/status-and-limitations)
before presenting it as suitable for a deployment.

The Impulse runtime is distributed under the
[GNU General Public License v3.0](https://github.com/impulse-proxy/impulse/blob/master/LICENSE.md).

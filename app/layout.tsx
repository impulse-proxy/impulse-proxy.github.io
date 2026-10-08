import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/lib/site-config";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const title = "Impulse — HTTP/3 and QUIC edge runtime";
const description = `${siteConfig.description} ${siteConfig.maturity} software for controlled production rollouts.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: "%s | Impulse",
  },
  description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${dmSans.variable} h-full font-sans antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-foreground focus:shadow-lg focus:outline-2 focus:outline-offset-2 focus:outline-ring focus:not-sr-only"
          >
            Skip to main content
          </a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import "./globals.css";

const barlow = localFont({ src: [{ path: "./fonts/barlow-400.ttf", weight: "400", style: "normal" }, { path: "./fonts/barlow-500.ttf", weight: "500", style: "normal" }, { path: "./fonts/barlow-600.ttf", weight: "600", style: "normal" }, { path: "./fonts/barlow-700.ttf", weight: "700", style: "normal" }], variable: "--font-barlow", display: "swap" });
const barlowCondensed = localFont({ src: [{ path: "./fonts/barlow-condensed-600.ttf", weight: "600" }, { path: "./fonts/barlow-condensed-700.ttf", weight: "700" }], variable: "--font-condensed", display: "swap" });
const leagueGothic = localFont({ src: "./fonts/league-gothic-400.ttf", variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://financialgroove.com"),
  title: { default: "Financial Groove | Accounting for Arts & Entertainment", template: "%s | Financial Groove" },
  description: "Bookkeeping, tax, payroll, and financial guidance built for artists, studios, and creative businesses.",
  openGraph: { title: "Financial Groove", description: "Accounting expertise for arts & entertainment.", url: "https://financialgroove.com", siteName: "Financial Groove", locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image", title: "Financial Groove", description: "Accounting expertise for arts & entertainment." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = { "@context": "https://schema.org", "@type": "AccountingService", name: "Financial Groove", url: "https://financialgroove.com", telephone: "+1-702-966-0127", email: "getintothegroove@financialgroove.com", address: { "@type": "PostalAddress", streetAddress: "241 W Charleston Blvd, Suite 135", addressLocality: "Las Vegas", addressRegion: "NV", postalCode: "89102", addressCountry: "US" } };
  return <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable} ${leagueGothic.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} /><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></body></html>;
}

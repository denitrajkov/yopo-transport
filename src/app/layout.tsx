import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig, socialLinks } from "@/lib/data";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Premium US Freight & Logistics`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "freight transportation",
    "full truckload",
    "less than truckload",
    "logistics solutions",
    "US trucking company",
    "dedicated transportation",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Premium US Freight & Logistics`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/for-brokers.png",
        width: 1672,
        height: 941,
        alt: `${siteConfig.name} freight truck on the highway`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium US Freight & Logistics`,
    description: siteConfig.description,
    images: ["/images/for-brokers.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}/images/yopo-logo.png`,
  image: `${siteConfig.siteUrl}/images/yopo-logo.png`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "15131 Kedzie Ave",
    addressLocality: "Markham",
    addressRegion: "IL",
    postalCode: "60428",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.604,
    longitude: -87.6942,
  },
  areaServed: "United States",
  // TODO(goran): add `openingHours` here once official business hours are
  // finalized for public display (e.g. ["Mo-Fr 07:00-19:00"]).
  sameAs: socialLinks
    .filter((link) => link.href.startsWith("http"))
    .map((link) => link.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-hidden bg-navy-950 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GoogleAnalytics />
        {children}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
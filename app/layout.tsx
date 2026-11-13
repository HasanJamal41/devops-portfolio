import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";

import { contact } from "./data";
import { siteDescription, siteTitle, siteUrl } from "./site";
import "./globals.css";

// Self-hosted variable fonts: preloaded, no network fetch at build time and
// metric-matched fallbacks so text does not jump when the font arrives.
const bricolage = localFont({
  src: "./fonts/bricolage.woff2",
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
  adjustFontFallback: "Arial",
});

const inter = localFont({
  src: "./fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  // "optional": use the font only if it is ready almost immediately, so body text never re-renders mid-view.
  display: "optional",
  adjustFontFallback: "Arial",
});

const jetbrains = localFont({
  src: "./fonts/jetbrains-mono.woff2",
  weight: "100 800",
  variable: "--font-jetbrains",
  display: "optional",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "Hasan Jamal",
    "DevOps Engineer",
    "DevSecOps Engineer",
    "Platform Engineer",
    "Site Reliability Engineer",
    "Cloud Engineer",
    "Kubernetes",
    "AKS",
    "EKS",
    "AWS",
    "Azure",
    "Terraform",
    "ArgoCD",
    "FluxCD",
    "GitOps",
    "CI/CD",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: "Hasan Jamal", url: siteUrl }],
  creator: "Hasan Jamal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Hasan Jamal",
    firstName: "Hasan",
    lastName: "Jamal",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05060A",
  colorScheme: "dark",
};

// Structured data so search engines can show Hasan as a person with a job title.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hasan Jamal",
  jobTitle: "DevOps Engineer",
  url: siteUrl,
  image: `${siteUrl}/assets/hasan-headshot.jpg`,
  email: `mailto:${contact.email}`,
  telephone: contact.phone,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "TEO International" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Agriculture, Faisalabad" },
  sameAs: [contact.linkedin],
  knowsAbout: ["Kubernetes", "AWS", "Azure", "Terraform", "GitOps", "ArgoCD", "CI/CD", "DevSecOps", "Observability", "Linux"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Mark JS as available before paint so scroll-reveal content never flashes. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

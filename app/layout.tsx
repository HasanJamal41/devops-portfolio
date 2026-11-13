import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";

// Fonts are bundled from npm so builds never depend on fetching Google Fonts.
import "@fontsource-variable/bricolage-grotesque/opsz.css";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasanjamal.dev"),
  title: "Hasan Jamal - DevOps Engineer | Cloud, Kubernetes & DevSecOps",
  description: "DevOps Engineer with 3.5+ years hardening multi-cloud platforms across AWS and Azure. GitOps, Kubernetes at scale, CI/CD automation, and a DevSecOps mindset baked into every pipeline.",
  keywords: [
    "Hasan Jamal",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Engineer",
    "DevSecOps Engineer",
    "Kubernetes",
    "AKS",
    "AWS",
    "Azure",
    "Terraform",
    "CI/CD",
    "GitOps",
    "ArgoCD",
    "Docker",
    "Linux Administration",
    "Portfolio",
  ],
  authors: [{ name: "Hasan Jamal" }],
  creator: "Hasan Jamal",
  publisher: "Hasan Jamal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hasanjamal.dev",
    title: "Hasan Jamal - DevOps Engineer | Cloud, Kubernetes & DevSecOps",
    description: "DevOps Engineer with 3.5+ years hardening multi-cloud platforms across AWS and Azure. GitOps, Kubernetes at scale, and a DevSecOps mindset baked into every pipeline.",
    siteName: "Hasan Jamal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Jamal - DevOps Engineer | Cloud, Kubernetes & DevSecOps",
    description: "DevOps Engineer with 3.5+ years hardening multi-cloud platforms across AWS and Azure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#05060A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before paint so scroll-reveal content never flashes. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

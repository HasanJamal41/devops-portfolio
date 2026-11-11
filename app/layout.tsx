import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hasanjamal.dev" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

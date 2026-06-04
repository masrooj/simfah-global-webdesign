import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import { siteConfig } from "@config/site";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: [...siteConfig.meta.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: siteUrl,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} — web design for local businesses`,
      },
      {
        url: "/simfah-logo.png",
        width: 512,
        height: 512,
        alt: siteConfig.brand.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
      </head>
      <body className="hero-load">
        <noscript>
          <style>{`
            .fade-in, .fade-in-left, .fade-in-right, .industry-card {
              opacity: 1 !important;
              transform: none !important;
            }
          `}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

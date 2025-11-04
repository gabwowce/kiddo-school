// app/layout.jsx  — SERVER component (no "use client")
import localFont from "next/font/local";
import "./globals.css";

import HeaderGate from "@/components/header/HeaderGate"; // client
import RevealProvider from "@/components/providers/RevealProvider"; // client

const Kiddo = localFont({
  src: [
    { path: "../asset/fonts/Gilroy-Medium.woff2", weight: "500", style: "normal" },
    { path: "../asset/fonts/Gilroy-Bold.woff2",   weight: "700", style: "normal" },
    { path: "../asset/fonts/Gilroy-Heavy.woff2",  weight: "900", style: "normal" },
  ],
  variable: "--font-kiddo",
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial"],
});

const siteUrl = "https://kidcan.lt";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kidcan – Fokusas klasėje, ne ekranuose",
    template: "%s – Kidcan",
  },
  description:
    "Išjunkite blaškančius app’sus pamokose – palikite tik tai, kas svarbu.",
  openGraph: {
    title: "Kidcan – Fokusas klasėje, ne ekranuose",
    description:
      "Išjunkite blaškančius app’sus pamokose – palikite tik tai, kas svarbu.",
    url: siteUrl,
    siteName: "Kidcan",
    images: [{ url: "/og-preview.png", width: 1200, height: 630, alt: "Kidcan peržiūra" }],
    locale: "lt_LT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kidcan – Fokusas klasėje, ne ekranuose",
    description:
      "Išjunkite blaškančius app’sus pamokose – palikite tik tai, kas svarbu.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  robots: { index: true, follow: true },
};


export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={Kiddo.variable}>
      <body className="font-sans font-medium">
        <HeaderGate />
        <RevealProvider />
        <main>{children}</main>

        {/* JSON-LD (server-safe) */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Kidcan",
              url: siteUrl,
              logo: `${siteUrl}/icon-512x512.png`,
            }),
          }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Kidcan",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

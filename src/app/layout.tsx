import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Senior friendly font: Inter (Sans Serif, legible)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cout-monte-escalier.fr'),
  title: "Prix Monte Escalier 2026 - Devis Gratuit & Comparatif",
  description: "Obtenez le prix exact de votre monte-escalier. Comparez 3 devis d'installateurs certifiés (Stannah, Thyssenkrupp, etc.) près de chez vous.",
  openGraph: {
    title: "Prix Monte Escalier 2026 - Devis Gratuit & Comparatif",
    description: "Obtenez le prix exact de votre monte-escalier. Comparez 3 devis d'installateurs certifiés.",
    url: 'https://www.cout-monte-escalier.fr',
    siteName: 'Cout-Monte-Escalier.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Prix Monte Escalier 2026 - Devis Gratuit & Comparatif",
    description: "Obtenez le prix exact de votre monte-escalier. Comparez 3 devis d'installateurs certifiés.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cout-Monte-Escalier.fr",
  "url": "https://www.cout-monte-escalier.fr",
  "logo": "https://www.cout-monte-escalier.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Cout-Monte-Escalier.fr",
  "url": "https://www.cout-monte-escalier.fr",
  "description": "Comparateur de prix et guide d'achat pour monte-escalier en France. Devis gratuits d'installateurs certifiés RGE.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.cout-monte-escalier.fr/annuaire?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="490067ef-024b-45c1-b8bd-dbce100285a1"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

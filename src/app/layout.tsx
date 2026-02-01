import type { Metadata } from "next";
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
  metadataBase: new URL('https://cout-monte-escalier.fr'),
  title: "Prix Monte Escalier 2026 - Devis Gratuit & Comparatif",
  description: "Obtenez le prix exact de votre monte-escalier. Comparez 3 devis d'installateurs certifiés (Stannah, Thyssenkrupp, etc.) près de chez vous.",
  openGraph: {
    title: "Prix Monte Escalier 2026 - Devis Gratuit & Comparatif",
    description: "Obtenez le prix exact de votre monte-escalier. Comparez 3 devis d'installateurs certifiés.",
    url: 'https://cout-monte-escalier.fr',
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
  "url": "https://cout-monte-escalier.fr",
  "logo": "https://cout-monte-escalier.fr/icon.png",
  "sameAs": [
    "https://twitter.com/coutmonteescalier"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-00-00-00-00",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { copy } from "@/data/copy";
import { SITE_URL, EMAIL, GITHUB, LINKEDIN } from "@/data/links";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: copy.meta.title,
  description: copy.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: copy.meta.title,
    description: copy.meta.description,
    url: SITE_URL,
    siteName: "alihasansheikh.com",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: copy.meta.title,
    description: copy.meta.description,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Ali Hasan Sheikh",
  jobTitle: "Software Developer",
  url: SITE_URL,
  email: EMAIL,
  image: `${SITE_URL}/ali.jpg`,
  sameAs: [GITHUB, LINKEDIN],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: ["Laravel", "PHP", "WordPress", "MySQL", "Java", "Spring Boot", "n8n", "REST API design"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Ali Hasan Sheikh · software development",
  url: SITE_URL,
  founder: { "@id": `${SITE_URL}/#person` },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  availableLanguage: "en",
  priceRange: "$49 - $999",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: copy.services.heading,
    itemListElement: copy.services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.what_i_do },
      priceCurrency: "USD",
      price: s.from_price.replace(/[^0-9.]/g, ""),
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${archivo.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, serviceSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}

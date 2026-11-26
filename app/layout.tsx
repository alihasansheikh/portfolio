import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { copy } from "@/data/copy";
import { SITE_URL, EMAIL, GITHUB, LINKEDIN } from "@/data/links";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
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
  jobTitle: "Software developer",
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
  name: "Ali Hasan Sheikh · custom systems and websites",
  url: SITE_URL,
  founder: { "@id": `${SITE_URL}/#person` },
  areaServed: [
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "Worldwide" },
  ],
  availableLanguage: "en",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: copy.services.heading.join(" "),
    itemListElement: copy.services.items.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text },
    })),
  },
};

// Runs before first paint: skip the greeting if it already played in this tab.
const introScript = `try{if(sessionStorage.getItem('intro-seen'))document.documentElement.setAttribute('data-intro-seen','')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <noscript>
          <style>{`[data-reveal]{transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={archivo.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, serviceSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}

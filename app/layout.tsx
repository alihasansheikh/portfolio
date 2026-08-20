import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

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

const SITE_URL = "https://alihasansheikh.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ali Hasan Sheikh — Backend Engineer · Spring Boot & Laravel",
  description:
    "Backend engineer in Karachi building production multi-tenant SaaS for UK clients. Java/Spring Boot & PHP/Laravel — 210+ REST endpoints shipped, sole engineer end to end.",
  openGraph: {
    title: "Ali Hasan Sheikh — Backend Engineer",
    description:
      "APIs, data models and infrastructure for production SaaS. Java/Spring Boot & PHP/Laravel.",
    url: SITE_URL,
    siteName: "alihasansheikh.com",
    type: "website",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ali Hasan Sheikh",
  jobTitle: "Backend Software Engineer",
  url: SITE_URL,
  email: "mailto:ali@alihasansheikh.com",
  sameAs: [
    "https://github.com/alihasansheikh",
    "https://www.linkedin.com/in/alihasansheikh1",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "PHP",
    "Laravel",
    "MySQL",
    "REST API design",
    "Multi-tenant SaaS architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${plexMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}

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
  title: { default: copy.meta.title, template: "%s · Ali Hasan Sheikh" },
  description: copy.meta.description,
  authors: [{ name: "Ali Hasan Sheikh", url: SITE_URL }],
  creator: "Ali Hasan Sheikh",
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
  image: `${SITE_URL}/ali-portrait.jpg`,
  sameAs: [GITHUB, LINKEDIN],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sir Syed University of Engineering and Technology",
  },
  knowsAbout: [
    "Custom CRM development",
    "Client portals",
    "Business process automation",
    "Laravel",
    "PHP",
    "Vue.js",
    "React",
    "MySQL",
    "Java",
    "Spring Boot",
    "n8n",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ali Hasan Sheikh",
  alternateName: "alihasansheikh.com",
  url: `${SITE_URL}/`,
  inLanguage: "en-GB",
  publisher: { "@id": `${SITE_URL}/#person` },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}

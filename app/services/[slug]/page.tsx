import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { copy } from "@/data/copy";
import { servicePages } from "@/data/services";
import { SITE_URL } from "@/data/links";
import MotionRoot from "@/components/MotionRoot";
import InnerHeader from "@/components/InnerHeader";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = servicePages.find((x) => x.slug === slug);
  if (!s) return {};
  const path = `/services/${s.slug}`;
  return {
    title: s.seo_title,
    description: s.seo_description,
    alternates: { canonical: path },
    openGraph: {
      title: s.seo_title,
      description: s.seo_description,
      url: `${SITE_URL}${path}`,
      siteName: "alihasansheikh.com",
      type: "website",
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title: s.seo_title, description: s.seo_description },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = servicePages.find((x) => x.slug === slug);
  if (!s) notFound();
  const url = `${SITE_URL}/services/${s.slug}`;
  const cases = s.work
    .map((w) => copy.work.cases.find((c) => c.slug === w))
    .filter((c): c is (typeof copy.work.cases)[number] => !!c);
  const others = servicePages.filter((x) => x.slug !== s.slug);
  const cta = copy.work.page.cta_button;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/#services` },
        { "@type": "ListItem", position: 3, name: s.nav_label, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.nav_label,
      description: s.seo_description,
      url,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Place", name: "Worldwide" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <MotionRoot>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InnerHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: s.nav_label }]}
      >
        <h1 className="mt-8 max-w-4xl text-[2.3rem] font-[450] leading-[1.08] tracking-[-0.025em] sm:text-[3.6rem]">
          {s.h1}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed">{s.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={`/?need=${s.need}#contact`}
            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-blue"
          >
            {cta}
            <ArrowRight aria-hidden className="size-4" strokeWidth={2.4} />
          </a>
          <p className="text-sm font-medium">{copy.hero.note}</p>
        </div>
      </InnerHeader>

      <main id="main">
        <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-14 sm:py-28">
          <section aria-labelledby="signs" className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <h2 id="signs" className="text-3xl tracking-[-0.02em] sm:text-4xl">{s.signs_heading}</h2>
            <ul className="border-t border-hair">
              {s.signs.map((t) => (
                <li key={t} className="border-b border-hair py-5 text-lg leading-relaxed sm:text-xl">
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="includes" className="mt-20 sm:mt-28">
            <h2 id="includes" className="text-3xl tracking-[-0.02em] sm:text-4xl">{s.includes_heading}</h2>
            <ul className="mt-10 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {s.includes.map((p) => (
                <li key={p.lead} className="border-t border-ink pt-5 text-base leading-relaxed text-soft">
                  <strong className="block text-lg font-semibold text-ink">{p.lead}</strong>
                  <span className="mt-1.5 block">{p.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-12 max-w-[62ch] text-[17px] leading-relaxed">{s.built_with}</p>
          </section>

          {(cases.length > 0 || s.work_note) && (
            <section aria-labelledby="related" className="mt-20 sm:mt-28">
              <h2 id="related" className="text-3xl tracking-[-0.02em] sm:text-4xl">
                {cases.length > 0 ? "Related work" : "A work sample"}
              </h2>
              {s.work_note && <p className="mt-4 max-w-[62ch] text-[17px] leading-relaxed text-soft">{s.work_note}</p>}
              {cases.length > 0 && (
                <ul className="mt-8 border-t border-hair">
                  {cases.map((c) => (
                    <li key={c.slug} className="border-b border-hair">
                      <a
                        href={`/work/${c.slug}`}
                        className="group flex flex-col gap-1 py-7 sm:flex-row sm:items-center sm:justify-between"
                      >
                        <span className="text-[1.6rem] leading-tight tracking-[-0.03em] group-hover:text-blue sm:text-[2.1rem]">
                          {c.plain_name}
                        </span>
                        <span className="text-[15px] text-soft sm:shrink-0 sm:pl-8 sm:text-right">
                          {c.label} · {c.status}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
        </div>

        <HowItWorks copy={copy.how_it_works} />
        <Faq copy={{ heading: ["Questions", "about this"], items: s.faq }} />

        <div className="mx-auto max-w-[1240px] px-5 pb-24 sm:px-14 sm:pb-32">
          <section
            aria-labelledby="cta"
            className="on-dark grid gap-6 rounded-[2rem] bg-ink p-8 text-white sm:p-12 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <h2 id="cta" className="text-3xl tracking-[-0.02em] sm:text-4xl">{copy.work.page.cta_heading}</h2>
              <p className="mt-3 max-w-[56ch] text-[17px] leading-relaxed text-[#d6d7da]">{copy.contact.intro}</p>
            </div>
            <a
              href={`/?need=${s.need}#contact`}
              className="inline-flex min-h-12 items-center gap-2 justify-self-start rounded-full bg-blue px-6 font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              {cta}
              <ArrowRight aria-hidden className="size-4" strokeWidth={2.4} />
            </a>
          </section>

          <nav aria-labelledby="other-services" className="mt-20 sm:mt-24">
            <h2 id="other-services" className="text-2xl font-semibold tracking-[-0.01em]">Other things I can help with</h2>
            <ul className="mt-6 border-t border-hair">
              {others.map((o) => (
                <li key={o.slug} className="border-b border-hair">
                  <a
                    href={`/services/${o.slug}`}
                    className="group flex items-center justify-between gap-4 py-6 text-xl tracking-[-0.02em] hover:text-blue sm:text-2xl"
                  >
                    {o.nav_label}
                    <ArrowRight aria-hidden className="size-5 shrink-0 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <SiteFooter copy={copy.footer} />
    </MotionRoot>
  );
}

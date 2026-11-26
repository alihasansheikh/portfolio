import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { copy } from "@/data/copy";
import { projects } from "@/data/projects";
import { SITE_URL } from "@/data/links";
import MotionRoot from "@/components/MotionRoot";
import SiteFooter from "@/components/SiteFooter";
import InnerHeader from "@/components/InnerHeader";

type Params = { slug: string };

const find = (slug: string) => {
  const c = copy.work.cases.find((x) => x.slug === slug);
  const p = projects.find((x) => x.slug === slug);
  return c && p ? { c, p } : null;
};

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return copy.work.cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = find(slug);
  if (!found) return {};
  const { c } = found;
  const path = `/work/${c.slug}`;
  return {
    title: c.seo_title,
    description: c.seo_description,
    alternates: { canonical: path },
    openGraph: {
      title: c.seo_title,
      description: c.seo_description,
      url: `${SITE_URL}${path}`,
      siteName: "alihasansheikh.com",
      type: "article",
      locale: "en_GB",
    },
    twitter: { card: "summary_large_image", title: c.seo_title, description: c.seo_description },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = find(slug);
  if (!found) notFound();
  const { c, p } = found;
  const labels = copy.work.labels;
  const page = copy.work.page;
  const others = copy.work.cases.filter((x) => x.slug !== c.slug);
  const url = `${SITE_URL}/work/${c.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${SITE_URL}/#work` },
        { "@type": "ListItem", position: 3, name: c.label, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.plain_name,
      description: c.seo_description,
      url,
      mainEntityOfPage: url,
      author: { "@id": `${SITE_URL}/#person` },
      publisher: { "@id": `${SITE_URL}/#person` },
      image: `${SITE_URL}/opengraph-image`,
      about: p.stack,
    },
  ];

  return (
    <MotionRoot>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <InnerHeader
        crumbs={[{ label: "Home", href: "/" }, { label: "Work", href: "/#work" }, { label: c.label }]}
      >
        <h1 className="mt-8 max-w-4xl text-[2.3rem] font-[450] leading-[1.08] tracking-[-0.025em] sm:text-[3.6rem]">
          {c.plain_name}
        </h1>
        <p className="mt-6 text-base font-medium">
          {c.label} · {c.status}
        </p>
      </InnerHeader>

      <main id="main">
        <article className="mx-auto max-w-[1240px] px-5 py-20 sm:px-14 sm:py-28">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <section aria-labelledby="problem">
              <h2 id="problem" className="text-2xl font-semibold tracking-[-0.01em]">{labels.problem}</h2>
              <p className="mt-4 text-lg leading-relaxed text-soft">{c.problem}</p>
              <p className="mt-4 text-lg leading-relaxed text-soft">{p.problem}</p>
            </section>
            <section aria-labelledby="now">
              <h2 id="now" className="text-2xl font-semibold tracking-[-0.01em]">{labels.now}</h2>
              <p className="mt-4 text-lg leading-relaxed text-soft">{c.what_it_does_now}</p>
            </section>
          </div>

          <section aria-labelledby="changed" className="mt-16 border-t border-hair pt-10 sm:mt-24">
            <h2 id="changed" className="text-2xl font-semibold tracking-[-0.01em]">{labels.changed}</h2>
            <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
              {c.outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-lg leading-relaxed text-soft">
                  <span aria-hidden className="mt-[0.65em] size-1.5 shrink-0 rounded-full bg-ink" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="built" className="mt-16 border-t border-hair pt-10 sm:mt-24">
            <h2 id="built" className="text-2xl font-semibold tracking-[-0.01em]">{page.built_label}</h2>
            <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <p className="text-base leading-relaxed text-soft">{p.role}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                  {p.stack.map((t) => (
                    <li key={t} className="rounded-full border border-hair px-3 py-1 text-sm">
                      {t}
                    </li>
                  ))}
                </ul>
                <dl className="mt-8 grid grid-cols-2 gap-6">
                  {p.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse">
                      <dt className="text-sm text-soft">{m.label}</dt>
                      <dd className="text-3xl font-bold tracking-[-0.02em]">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <ul className="space-y-4">
                  {p.approach.map((a) => (
                    <li key={a} className="flex gap-3 text-base leading-relaxed text-soft">
                      <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-blue" />
                      {a}
                    </li>
                  ))}
                </ul>
                {p.links?.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue hover:text-blue-hover"
                  >
                    {l.label}
                    <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section
            aria-labelledby="cta"
            className="on-dark mt-20 grid gap-6 rounded-[2rem] bg-ink p-8 text-white sm:mt-28 sm:p-12 md:grid-cols-[1fr_auto] md:items-center"
          >
            <div>
              <h2 id="cta" className="text-3xl tracking-[-0.02em] sm:text-4xl">{page.cta_heading}</h2>
              <p className="mt-3 max-w-[56ch] text-[17px] leading-relaxed text-[#d6d7da]">{c.ask_me_for}</p>
            </div>
            <a
              href={`/?need=${c.need}#contact`}
              className="inline-flex min-h-12 items-center gap-2 justify-self-start rounded-full bg-blue px-6 font-semibold text-white transition-colors hover:bg-blue-hover"
            >
              {page.cta_button}
              <ArrowRight aria-hidden className="size-4" strokeWidth={2.4} />
            </a>
          </section>

          <nav aria-labelledby="more" className="mt-20 sm:mt-28">
            <h2 id="more" className="text-2xl font-semibold tracking-[-0.01em]">{page.other_work}</h2>
            <ul className="mt-6 border-t border-hair">
              {others.map((o) => (
                <li key={o.slug} className="border-b border-hair">
                  <a
                    href={`/work/${o.slug}`}
                    className="group flex flex-col gap-1 py-7 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-[1.75rem] leading-tight tracking-[-0.03em] group-hover:text-blue sm:text-4xl">
                      {o.plain_name}
                    </span>
                    <span className="text-[15px] text-soft sm:pl-8">{o.label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href="/#work" className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-blue hover:text-blue-hover">
              <ArrowLeft aria-hidden className="size-4" strokeWidth={2.4} />
              {page.back}
            </a>
          </nav>
        </article>
      </main>
      <SiteFooter copy={copy.footer} />
    </MotionRoot>
  );
}

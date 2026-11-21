import { copy } from "@/data/copy";
import { projects } from "@/data/projects";
import SiteNav from "@/components/SiteNav";
import SectionHeading from "@/components/SectionHeading";
import Services from "@/components/Services";
import CaseStudy from "@/components/CaseStudy";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Engineers from "@/components/Engineers";
import Faq from "@/components/Faq";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  const { hero, work } = copy;

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:flex lg:gap-14">
      <SiteNav rail={copy.rail} nav={copy.nav} contactLabel="Contact" />

      {/* main and footer share the column; the footer sits outside main so it is
          exposed as the page's contentinfo landmark. */}
      <div className="flex-1 min-w-0">
        <main>
        {/* hero */}
        <section className="pt-6 lg:pt-24 pb-4">
          <h1 className="display text-[2.5rem] sm:text-[3.25rem] lg:text-[3.6rem] max-w-3xl">{hero.h1}</h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft max-w-2xl">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#contact">
              {hero.primary_cta}
            </a>
            <a className="btn btn-ghost" href="#work">
              {hero.secondary_cta}
            </a>
          </div>

          {/* facts strip: four true, owner-legible facts */}
          <dl className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-y border-rule py-6">
            {hero.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse max-w-[15rem]">
                <dt className="text-sm text-ink-soft mt-1 leading-snug">{f.label}</dt>
                <dd className="mono-data text-2xl font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <Services copy={copy.services} />

        {/* work */}
        <section id="work" className="scroll-mt-10 mt-24">
          <SectionHeading title={work.heading} path="/work" note="3 case studies" />
          <p className="max-w-xl text-base leading-relaxed text-ink-soft mb-8">{work.intro}</p>
          <div className="space-y-10">
            {projects.map((p) => {
              const surface = work.cases.find((c) => c.slug === p.slug);
              return surface ? <CaseStudy key={p.slug} project={p} surface={surface} /> : null;
            })}
          </div>
        </section>

        <HowItWorks copy={copy.how_it_works} />
        <About copy={copy.about} />
        <Engineers copy={copy.engineers} />
        <Faq copy={copy.faq} />
        <ContactSection copy={copy} />
        </main>

        <footer className="mt-20 pt-6 pb-24 border-t border-rule">
          <p className="mono-data text-xs text-ink-soft leading-relaxed">
            © {new Date().getFullYear()} Ali Hasan Sheikh · alihasansheikh.com · {copy.footer.colophon}
          </p>
        </footer>
      </div>
    </div>
  );
}

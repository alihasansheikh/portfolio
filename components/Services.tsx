import type { SiteCopy } from "@/data/copy";
import SectionHeading from "./SectionHeading";

export default function Services({ copy }: { copy: SiteCopy["services"] }) {
  return (
    <section id="services" className="scroll-mt-10 mt-20">
      <SectionHeading title={copy.heading} path="/services" />
      <p className="max-w-xl text-base leading-relaxed text-ink-soft mb-2">{copy.intro}</p>
      <ol className="row-list">
        {copy.items.map((s) => (
          <li key={s.id} className="grid sm:grid-cols-[1fr_auto] gap-x-8 gap-y-2 py-5">
            <div>
              <h3 className="text-lg font-medium leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink-soft max-w-xl">
                {s.what_i_do}
              </p>
            </div>
            <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 sm:text-right">
              <p className="mono-data text-lg font-medium whitespace-nowrap">{s.from_price}</p>
              <a href={`/?need=${s.id}#contact`} className="text-link">
                {s.cta_label} →
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

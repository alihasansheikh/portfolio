import { ArrowRight } from "lucide-react";
import TwoTone from "@/components/TwoTone";
import { servicePageFor } from "@/data/services";
import type { SiteCopy } from "@/data/copy";

// Big text rows. Hovering one fades the others (CSS in globals), slides the row in and
// shows the arrow. Each row opens that service's own page.
export default function Services({ copy }: { copy: SiteCopy["services"] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-6 outline-none" tabIndex={-1}>
      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-14 sm:pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <TwoTone id="services-title" lines={copy.heading} className="md:shrink-0" />
          <p className="max-w-[40ch] min-w-0 text-[17px] leading-relaxed text-soft">{copy.intro}</p>
        </div>

        <ul className="big-list mt-12 border-t border-hair sm:mt-16">
          {copy.items.map((s) => (
            <li key={s.id} className="big-row border-b border-hair transition-opacity duration-300">
              <a
                href={`/services/${servicePageFor(s.id)?.slug}`}
                className="group grid gap-3 py-8 transition-[padding] duration-500 ease-[var(--ease-out-expo)] sm:py-10 md:grid-cols-[1.25fr_1fr_auto] md:items-center md:gap-10 md:hover:pl-8 motion-reduce:transition-none"
              >
                <h3 className="text-[1.85rem] leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem] lg:text-5xl">{s.title}</h3>
                <p className="max-w-[46ch] text-base leading-relaxed text-soft">{s.text}</p>
                <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-blue md:text-soft md:group-hover:text-ink">
                  {copy.row_cta}
                  <ArrowRight
                    aria-hidden
                    className="size-5 transition-transform duration-300 md:-translate-x-1 md:group-hover:translate-x-1"
                    strokeWidth={2.4}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

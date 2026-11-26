import TwoTone from "@/components/TwoTone";
import type { SiteCopy } from "@/data/copy";

export default function HowItWorks({ copy }: { copy: SiteCopy["how_it_works"] }) {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-6 outline-none" tabIndex={-1}>
      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-14 sm:pb-32">
        <TwoTone id="process-title" lines={copy.heading} />
        <ol className="mt-12 grid gap-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-9">
          {copy.steps.map((s, i) => (
            <li key={s.title} className="border-t border-ink pt-6">
              <span aria-hidden className="text-sm font-semibold text-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-0.01em]">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-soft">{s.text}</p>
              <p className="mt-4 text-sm font-semibold text-blue">{s.when}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

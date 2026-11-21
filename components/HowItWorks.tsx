import type { SiteCopy } from "@/data/copy";
import SectionHeading from "./SectionHeading";

export default function HowItWorks({ copy }: { copy: SiteCopy["how_it_works"] }) {
  return (
    <section id="process" className="scroll-mt-10 mt-24">
      <SectionHeading title={copy.heading} path="/process" />
      <ol className="row-list">
        {copy.steps.map((s, i) => (
          <li key={s.title} className="grid sm:grid-cols-[4rem_1fr] gap-x-6 gap-y-1 py-5">
            <span className="mono-data text-sm text-cobalt pt-1">0{i + 1}</span>
            <div>
              <h3 className="text-lg font-medium leading-snug">{s.title}</h3>
              <p className="mt-1.5 text-base leading-relaxed text-ink-soft max-w-xl">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

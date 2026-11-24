import type { SiteCopy } from "@/data/copy";
import SectionHeading from "./SectionHeading";

export default function Faq({ copy }: { copy: SiteCopy["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-10 mt-24">
      <SectionHeading title={copy.heading} path="/faq" />
      <div className="border-b border-rule">
        {copy.items.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>
              <span>{item.q}</span>
              <span className="disclosure-marker" aria-hidden="true" />
            </summary>
            <p className="pb-5 pr-8 max-w-2xl text-base leading-relaxed text-ink-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

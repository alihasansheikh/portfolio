import TwoTone from "@/components/TwoTone";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { SiteCopy } from "@/data/copy";

export default function Faq({ copy }: { copy: SiteCopy["faq"] }) {
  return (
    <section aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 pb-32 pt-10 sm:px-14 sm:pb-44 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <TwoTone id="faq-title" lines={copy.heading} className="lg:sticky lg:top-10 lg:self-start" />
        <Accordion type="single" collapsible className="border-t border-hair">
          {copy.items.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="text-lg font-semibold sm:text-xl">{f.q}</AccordionTrigger>
              <AccordionContent className="max-w-[60ch] text-base leading-relaxed text-soft">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

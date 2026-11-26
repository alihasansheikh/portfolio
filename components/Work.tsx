import { ArrowRight, ArrowUpRight } from "lucide-react";
import TwoTone from "@/components/TwoTone";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { projects } from "@/data/projects";
import type { SiteCopy } from "@/data/copy";

// Each case is a big row that opens to the plain-English story, with the engineering
// detail one more click away for technical readers.
export default function Work({ copy }: { copy: SiteCopy["work"] }) {
  return (
    <section id="work" aria-labelledby="work-title" className="scroll-mt-6 outline-none" tabIndex={-1}>
      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-10 sm:px-14 sm:pb-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <TwoTone id="work-title" lines={copy.heading} className="md:shrink-0" />
          <p className="max-w-[40ch] min-w-0 text-[17px] leading-relaxed text-soft">{copy.intro}</p>
        </div>

        <Accordion type="multiple" className="mt-12 border-t border-hair sm:mt-16">
          {copy.cases.map((c) => {
            const p = projects.find((x) => x.slug === c.slug);
            return (
              <AccordionItem key={c.slug} value={c.slug}>
                <AccordionTrigger className="items-center py-8 sm:py-11">
                  <span className="grid flex-1 gap-2 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
                    <span className="text-[2rem] leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
                      {c.label}
                    </span>
                    <span className="text-[15px] font-normal text-soft">{c.status}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-12">
                  <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                    <div>
                      <h3 className="text-2xl font-semibold leading-snug tracking-[-0.01em] sm:text-[1.75rem]">
                        {c.plain_name}
                      </h3>
                      <p className="mt-5 text-base font-medium text-blue">{c.ask_me_for}</p>
                      <a
                        href={`/work/${c.slug}`}
                        className="group/link mt-6 inline-flex min-h-12 items-center gap-2 rounded-full border border-hair px-6 font-semibold transition-colors hover:border-ink"
                      >
                        {copy.read_more}
                        <span className="sr-only">: {c.label}</span>
                        <ArrowRight aria-hidden className="size-4 transition-transform group-hover/link:translate-x-1" strokeWidth={2.4} />
                      </a>
                    </div>
                    <dl className="grid gap-8 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm font-semibold">{copy.labels.problem}</dt>
                        <dd className="mt-2 text-base leading-relaxed text-soft">{c.problem}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold">{copy.labels.now}</dt>
                        <dd className="mt-2 text-base leading-relaxed text-soft">{c.what_it_does_now}</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-semibold">{copy.labels.changed}</dt>
                        <dd>
                          <ul className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                            {c.outcomes.map((o) => (
                              <li key={o} className="flex gap-3 text-base leading-relaxed text-soft">
                                <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-ink" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>

                  {p && (
                    <details className="disclosure mt-10 border-t border-hair pt-2">
                      <summary>
                        {c.details_label}
                        <span aria-hidden className="disclosure-marker" />
                      </summary>
                      <div className="grid gap-8 pb-4 pt-4 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                        <div>
                          <p className="text-base leading-relaxed text-soft">{p.role}</p>
                          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Stack">
                            {p.stack.map((t) => (
                              <li key={t} className="rounded-full border border-hair px-3 py-1 text-sm">
                                {t}
                              </li>
                            ))}
                          </ul>
                          <dl className="mt-6 grid grid-cols-2 gap-4">
                            {p.metrics.map((m) => (
                              <div key={m.label} className="flex flex-col-reverse justify-end">
                                <dt className="text-sm text-soft">{m.label}</dt>
                                <dd className="text-2xl font-bold tracking-[-0.02em]">{m.value}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                        <div>
                          <ul className="space-y-3">
                            {p.approach.map((a) => (
                              <li key={a} className="flex gap-3 text-[15px] leading-relaxed text-soft">
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
                    </details>
                  )}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

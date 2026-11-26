import { ArrowUpRight } from "lucide-react";
import TwoTone from "@/components/TwoTone";
import SystemDiagram from "@/components/SystemDiagram";
import { Marquee } from "@/components/ui/marquee";
import { stacks } from "@/data/projects";
import { GITHUB } from "@/data/links";
import type { SiteCopy } from "@/data/copy";

const MARQUEE_ITEMS = [
  "Laravel",
  "PHP 8",
  "Vue 3",
  "React",
  "TypeScript",
  "MySQL",
  "Redis",
  "Spring Boot",
  "Java 17",
  "n8n",
  "Make",
  "Stripe",
  "Playwright",
  "Nginx",
  "Linux",
  "GitHub Actions",
];

export default function Engineers({ copy }: { copy: SiteCopy["engineers"] }) {
  return (
    <section aria-labelledby="eng-title">
      <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-10 sm:px-14">
        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:items-end md:gap-10">
          <TwoTone id="eng-title" lines={copy.heading} className="text-[clamp(2.2rem,5vw,3.75rem)]" />
          <p className="max-w-[44ch] text-[17px] leading-relaxed text-soft">{copy.intro}</p>
        </div>

        <figure className="diagram-figure mt-12 rounded-[1.75rem] border border-hair px-4 py-6 sm:mt-16 sm:p-10">
          <div className="mx-auto max-w-[760px] overflow-x-auto" tabIndex={0} role="region" aria-label="System diagram, scrolls sideways on small screens">
            <SystemDiagram labels={copy.diagram_labels} />
          </div>
          <figcaption className="mt-6 flex flex-col gap-2 border-t border-hair pt-4 text-[15px] leading-relaxed text-soft sm:flex-row sm:items-center sm:justify-between">
            <span>{copy.diagram_caption}</span>
            <span className="motion-toggle">
              <label>
                <input id="pause-diagram" type="checkbox" className="mr-2" />
                {copy.diagram_pause}
              </label>
            </span>
          </figcaption>
        </figure>

        <p className="mt-12 max-w-[62ch] text-[17px] leading-relaxed">{copy.stack_sentence}</p>
      </div>

      <div aria-hidden className="border-y border-hair py-5">
        <Marquee pauseOnHover className="[--duration:45s] [--gap:3rem] p-0">
          {MARQUEE_ITEMS.map((t) => (
            <span key={t} className="flex items-center gap-12 text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
              {t}
              <span className="size-2 rounded-full bg-blue" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 pb-24 pt-8 sm:px-14 sm:pb-32">
        <details className="disclosure border-b border-hair">
          <summary>
            {copy.stack_details_label}
            <span aria-hidden className="disclosure-marker" />
          </summary>
          <div className="grid gap-8 pb-8 pt-4 sm:grid-cols-2 lg:grid-cols-4">
            {stacks.map((g) => (
              <div key={g.title}>
                <h3 className="text-sm font-semibold">{g.title}</h3>
                <ul className="mt-3 space-y-1.5 text-[15px] leading-snug text-soft">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
        <a
          href={GITHUB}
          className="mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue hover:text-blue-hover"
        >
          {copy.github_label}
          <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.4} />
        </a>
      </div>
    </section>
  );
}

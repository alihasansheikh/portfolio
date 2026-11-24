import type { SiteCopy } from "@/data/copy";
import { stacks } from "@/data/projects";
import { GITHUB } from "@/data/links";
import SectionHeading from "./SectionHeading";
import SystemDiagram from "./SystemDiagram";

export default function Engineers({ copy }: { copy: SiteCopy["engineers"] }) {
  return (
    <section id="engineering" className="scroll-mt-10 mt-24">
      <SectionHeading title={copy.heading} path="/engineering" />
      <p className="max-w-xl text-base leading-relaxed text-ink-soft">{copy.intro}</p>

      <figure className="spec-card diagram-figure mt-8 p-4 sm:p-6">
        {/* Focusable so a keyboard user can scroll the diagram sideways on a narrow screen. */}
        <div
          className="overflow-x-auto"
          tabIndex={0}
          role="region"
          aria-label="System diagram, scrolls sideways on narrow screens"
        >
          <SystemDiagram labels={copy.diagram_labels} />
        </div>
        <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
          <span className="mono-data text-xs text-ink-soft">{copy.diagram_caption}</span>
          <span className="motion-toggle">
            <input type="checkbox" id="pause-diagram" />
            <label htmlFor="pause-diagram">Pause the animation</label>
          </span>
        </figcaption>
      </figure>

      <p className="mt-8 max-w-2xl text-base leading-relaxed">{copy.stack_sentence}</p>

      <details className="disclosure spec-card mt-4">
        <summary>
          <span>{copy.stack_details_label}</span>
          <span className="disclosure-marker" aria-hidden="true" />
        </summary>
        <div className="grid sm:grid-cols-2 gap-px bg-rule border-t border-rule">
          {stacks.map((s) => (
            <div key={s.title} className="bg-paper-raised p-6">
              <h3 className="eyebrow mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((i) => (
                  <li key={i} className="text-sm leading-relaxed text-ink-soft">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </details>

      <div className="mt-4">
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-link">
          {copy.github_label} ↗
        </a>
      </div>
    </section>
  );
}

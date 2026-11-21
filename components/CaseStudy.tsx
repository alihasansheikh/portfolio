import type { Project } from "@/data/projects";
import type { SiteCopy } from "@/data/copy";

type Surface = SiteCopy["work"]["cases"][number];

// Two layers: a plain-English surface for owners, and the original engineering card inside a disclosure.
export default function CaseStudy({ project, surface }: { project: Project; surface: Surface }) {
  return (
    <article id={project.slug} className="spec-card">
      <header className="flex flex-wrap items-start gap-3 px-6 py-5 border-b border-rule">
        <div className="mr-auto">
          <h3 className="display text-xl sm:text-2xl">{surface.plain_name}</h3>
          <p className="mono-data text-xs text-ink-soft mt-1.5">{project.name}</p>
        </div>
        <span className={`status-chip ${project.statusTone === "prod" ? "status-prod" : "status-repo"}`}>
          {project.status}
        </span>
      </header>

      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 px-6 py-6 border-b border-rule">
        <div>
          <p className="eyebrow mb-2">The problem</p>
          <p className="text-base leading-relaxed text-ink-soft">{surface.problem}</p>
        </div>
        <div>
          <p className="eyebrow mb-2">What it does now</p>
          <p className="text-base leading-relaxed">{surface.what_it_does_now}</p>
        </div>
      </div>

      <div className="px-6 py-6">
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3">
          {surface.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-base leading-relaxed">
              <span aria-hidden className="mono-data text-cobalt shrink-0">
                →
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-sm text-ink-soft">{surface.ask_me_for}</p>
      </div>

      <details className="disclosure">
        <summary>
          <span>{surface.details_label}</span>
          <span className="disclosure-marker" aria-hidden="true" />
        </summary>
        <div>
          <div className="flex flex-wrap gap-2 px-6 py-4 border-b border-rule">
            {project.stack.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 px-6 py-6 border-b border-rule">
            <div>
              <p className="eyebrow mb-2">Problem</p>
              <p className="text-sm leading-relaxed text-ink-soft">{project.problem}</p>
            </div>
            <div>
              <p className="eyebrow mb-2">My role</p>
              <p className="text-sm leading-relaxed text-ink-soft">{project.role}</p>
            </div>
          </div>

          <div className="px-6 py-6">
            <p className="eyebrow mb-3">Approach</p>
            <ul className="space-y-3">
              {project.approach.map((a) => (
                <li key={a} className="flex gap-3 text-sm leading-relaxed">
                  <span aria-hidden className="mono-data text-cobalt shrink-0 mt-[1px]">
                    →
                  </span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="readout px-6 py-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="mono-data text-lg sm:text-xl font-medium">{m.value}</p>
                  <p className="readout-label mono-data uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            {project.links && (
              <div className="mt-4 pt-3 border-t border-white/15">
                {project.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link text-link-inverse"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </details>
    </article>
  );
}

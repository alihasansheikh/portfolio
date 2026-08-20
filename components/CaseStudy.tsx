import type { Project } from "@/data/projects";

export default function CaseStudy({ project }: { project: Project }) {
  return (
    <article id={project.slug} className="spec-card">
      {/* header row */}
      <header className="flex flex-wrap items-center gap-3 px-6 py-5 border-b border-rule">
        <h3 className="display text-xl sm:text-2xl mr-auto">{project.name}</h3>
        <span className={`status-chip ${project.statusTone === "prod" ? "status-prod" : "status-repo"}`}>
          {project.status}
        </span>
      </header>

      {/* stack chips */}
      <div className="flex flex-wrap gap-2 px-6 py-4 border-b border-rule">
        {project.stack.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>

      {/* problem / role */}
      <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6 px-6 py-6 border-b border-rule">
        <div>
          <p className="eyebrow mb-2">Problem</p>
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">{project.problem}</p>
        </div>
        <div>
          <p className="eyebrow mb-2">My role</p>
          <p className="text-[0.95rem] leading-relaxed text-ink-soft">{project.role}</p>
        </div>
      </div>

      {/* approach */}
      <div className="px-6 py-6">
        <p className="eyebrow mb-3">Approach</p>
        <ul className="space-y-3">
          {project.approach.map((a) => (
            <li key={a} className="flex gap-3 text-[0.95rem] leading-relaxed">
              <span aria-hidden className="mono-data text-cobalt text-sm shrink-0 mt-[1px]">
                →
              </span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* outcome readout — the one inversion per card */}
      <div className="readout px-6 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="mono-data text-lg sm:text-xl font-medium">{m.value}</p>
              <p className="readout-label mono-data text-[0.68rem] uppercase tracking-wider mt-1">
                {m.label}
              </p>
            </div>
          ))}
        </div>
        {project.links && (
          <div className="mt-5 pt-4 border-t border-white/15">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono-data text-sm underline underline-offset-4 decoration-white/40 hover:decoration-white"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

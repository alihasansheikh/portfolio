import type { SiteCopy } from "@/data/copy";

type Props = {
  rail: SiteCopy["rail"];
  nav: SiteCopy["nav"];
  contactLabel: string;
};

// Desktop: the spec sheet's sticky margin column.
// Mobile: a slim header (name, contact button, one scrolling row of links) so the headline starts high.
export default function SiteNav({ rail, nav, contactLabel }: Props) {
  return (
    <header className="lg:w-60 lg:shrink-0 lg:sticky lg:top-0 lg:self-start lg:h-screen py-3 lg:py-12 lg:flex lg:flex-col">
      <div className="flex items-center justify-between gap-4 lg:block">
        <p className="display text-lg leading-tight">
          <span className="lg:hidden">Ali Hasan Sheikh</span>
          <span className="hidden lg:inline">
            Ali Hasan
            <br />
            Sheikh
          </span>
        </p>
        <a href="#contact" className="btn btn-primary lg:hidden">
          {contactLabel}
        </a>
      </div>
      <p className="eyebrow mt-1.5 lg:mt-2 lg:mb-10 lg:max-w-[220px] leading-relaxed">{rail.role_label}</p>

      <nav
        aria-label="Sections"
        className="nav-row py-1.5 -mt-0.5 -mb-1.5 lg:py-0 lg:mt-0 lg:mb-10 flex gap-x-5 overflow-x-auto -mx-5 px-5 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0 lg:block lg:overflow-visible lg:w-full lg:max-w-[220px]"
      >
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="nav-link whitespace-nowrap">
            <span>{n.label}</span>
            <span className="path-caption hidden lg:inline" aria-hidden="true">
              {n.path}
            </span>
          </a>
        ))}
      </nav>

      <div className="hidden lg:block mt-auto space-y-1.5">
        <p className="mono-data text-xs text-ink-soft">{rail.location_line}</p>
        <p className="mono-data text-xs text-ink-soft">{rail.hours_line}</p>
        <p className="mono-data text-xs">
          <span className="inline-block w-2 h-2 rounded-full bg-[var(--post-green)] mr-1.5 align-middle" />
          {rail.availability_line}
        </p>
      </div>
    </header>
  );
}

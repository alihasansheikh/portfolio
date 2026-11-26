import { copy } from "@/data/copy";

// Grey header for inner pages: the mark, a short nav, a breadcrumb and the page title.
export default function InnerHeader({
  crumbs,
  children,
}: {
  crumbs: { label: string; href?: string }[];
  children: React.ReactNode;
}) {
  const links = [copy.nav[0], copy.nav[1], copy.nav[4]];
  return (
    <header className="on-stone bg-stone text-ink">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-5 py-6 text-base font-medium sm:px-14 sm:py-8">
        <a href="/" className="inline-flex min-h-11 shrink-0 items-center">
          {copy.header.mark}
        </a>
        <nav aria-label="Sections">
          <ul className="flex flex-wrap justify-end gap-x-1 sm:gap-x-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={`/${l.href}`} className="inline-flex min-h-11 items-center px-2 sm:px-3">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 pb-16 pt-6 sm:px-14 sm:pb-24 sm:pt-12">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                {c.href ? (
                  <a href={c.href} className="underline-offset-4 hover:underline">
                    {c.label}
                  </a>
                ) : (
                  <span aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </div>
    </header>
  );
}

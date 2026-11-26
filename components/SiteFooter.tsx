"use client";

import { useEffect, useState } from "react";
import { GITHUB, LINKEDIN } from "@/data/links";
import type { SiteCopy } from "@/data/copy";
import { servicePages } from "@/data/services";

function useClock(timeZone: string, zoneName?: string) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      ...(zoneName ? {} : { timeZoneName: "short" as const }),
    });
    const tick = () => setTime(zoneName ? `${fmt.format(new Date())} ${zoneName}` : fmt.format(new Date()));
    tick();
    const t = setInterval(tick, 15_000);
    return () => clearInterval(t);
  }, [timeZone, zoneName]);
  return time;
}

export default function SiteFooter({ copy }: { copy: SiteCopy["footer"] }) {
  const uk = useClock("Europe/London");
  const pk = useClock("Asia/Karachi", "PKT");
  const year = new Date().getFullYear();
  const label = "block text-xs font-medium uppercase tracking-[0.06em] text-[#8f9298]";

  return (
    <footer className="on-dark bg-ink text-white">
      <div className="mx-auto max-w-[1240px] px-5 pb-10 pt-24 sm:px-14 sm:pt-32">
        <div className="flex flex-col gap-10 border-t border-dark-line pt-8 text-[15px] md:flex-row md:justify-between">
          <dl className="flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <dt className={label}>{copy.year_label}</dt>
              <dd className="mt-2">{year} © Ali Hasan Sheikh</dd>
            </div>
            <div>
              <dt className={label}>{copy.uk_time_label}</dt>
              <dd className="mt-2 tabular-nums">{uk ?? "··:··"}</dd>
            </div>
            <div>
              <dt className={label}>{copy.karachi_time_label}</dt>
              <dd className="mt-2 tabular-nums">{pk ?? "··:··"}</dd>
            </div>
          </dl>
          <nav aria-labelledby="footer-services">
            <p id="footer-services" className={label}>Services</p>
            <ul className="mt-1">
              {servicePages.map((s) => (
                <li key={s.slug}>
                  <a className="inline-flex min-h-9 items-center hover:underline" href={`/services/${s.slug}`}>
                    {s.nav_label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className={label}>{copy.elsewhere_label}</p>
            <ul className="mt-1 flex gap-6">
              <li><a className="inline-flex min-h-11 items-center hover:underline" href={LINKEDIN}>LinkedIn</a></li>
              <li><a className="inline-flex min-h-11 items-center hover:underline" href={GITHUB}>GitHub</a></li>
              <li><a className="inline-flex min-h-11 items-center hover:underline" href="/cv.pdf">CV</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 max-w-xl text-sm leading-relaxed text-dark-soft">{copy.colophon}</p>
      </div>
    </footer>
  );
}

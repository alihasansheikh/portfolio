import TwoTone from "@/components/TwoTone";
import NeedLink from "@/components/NeedLink";
import { ArrowRight } from "lucide-react";
import type { SiteCopy } from "@/data/copy";

export default function WorkingWithMe({
  copy,
  agencies,
}: {
  copy: SiteCopy["working_with_me"];
  agencies: SiteCopy["agencies"];
}) {
  return (
    <section aria-labelledby="wwm-title" className="bg-[#f4f4f5]">
      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-14 sm:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <TwoTone id="wwm-title" lines={copy.heading} className="md:shrink-0" />
          <p className="max-w-[40ch] min-w-0 text-[17px] leading-relaxed text-soft">{copy.intro}</p>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {copy.points.map((p) => (
            <li key={p.lead} className="border-t border-[#d5d6d9] pt-5 text-base leading-relaxed text-soft">
              <strong className="block text-lg font-semibold text-ink">{p.lead}</strong>
              <span className="mt-1.5 block">{p.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid gap-6 rounded-[2rem] bg-ink p-8 text-white sm:mt-24 sm:p-12 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
          <h3 className="two-tone text-[2.4rem] sm:text-5xl">
            <span className="block">{agencies.heading[0]}</span>
            <span className="block text-dark-soft">{agencies.heading[1]}</span>
          </h3>
          <div className="on-dark">
            <p className="max-w-[60ch] text-[17px] leading-relaxed text-[#d6d7da]">{agencies.text}</p>
            <NeedLink
              need="agency"
              className="group mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
            >
              {agencies.link}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
            </NeedLink>
          </div>
        </div>
      </div>
    </section>
  );
}

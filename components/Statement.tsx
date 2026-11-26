import Magnet from "@/components/ui/magnet";
import type { SiteCopy } from "@/data/copy";

export default function Statement({ copy }: { copy: SiteCopy["statement"] }) {
  return (
    <section aria-label="In short" className="mx-auto max-w-[1240px] px-5 pb-20 pt-24 sm:px-14 sm:pb-28 sm:pt-36">
      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-20">
        <p className="text-[1.65rem] leading-[1.3] tracking-[-0.01em] sm:text-[2.35rem]">{copy.text}</p>
        <p className="text-lg leading-relaxed text-soft md:pt-3">{copy.side}</p>
      </div>

      <div className="mt-10 flex justify-end md:-mt-6 md:mr-[calc(38%-5.5rem)] md:justify-end">
        <Magnet padding={60} magnetStrength={3}>
          <a
            href="#contact"
            className="grid size-36 place-items-center rounded-full bg-ink px-6 text-center text-base font-medium leading-tight text-white transition-colors hover:bg-blue sm:size-44 sm:text-lg"
          >
            {copy.button}
          </a>
        </Magnet>
      </div>

      <dl className="mt-16 grid grid-cols-2 gap-y-10 border-t border-hair sm:mt-24 lg:grid-cols-4">
        {copy.facts.map((f) => (
          <div key={f.label} className="flex flex-col-reverse pr-6 pt-7">
            <dt className="mt-3 max-w-[22ch] text-[15px] leading-snug text-soft">{f.label}</dt>
            <dd className="text-[2rem] lg:whitespace-nowrap font-bold leading-none tracking-[-0.035em] sm:text-[2.6rem] lg:text-[2.4rem] xl:text-[2.6rem]">{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

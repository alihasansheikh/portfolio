import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import TwoTone from "@/components/TwoTone";
import { LINKEDIN } from "@/data/links";
import type { SiteCopy } from "@/data/copy";

export default function About({ copy }: { copy: SiteCopy["about"] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-6 outline-none" tabIndex={-1}>
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-24 sm:px-14 sm:py-32 md:grid-cols-[minmax(0,0.85fr)_1fr] md:gap-20">
        <div className="relative">
          <div className="overflow-hidden rounded-[1.75rem] bg-stone">
            <Image
              src="/ali-portrait.jpg"
              alt={copy.photo_alt}
              width={900}
              height={900}
              sizes="(min-width: 768px) 460px, 100vw"
              className="aspect-[4/5] h-auto w-full object-cover object-[50%_30%]"
            />
          </div>
        </div>
        <div>
          <TwoTone id="about-title" lines={copy.heading} />
          <p className="mt-10 text-[1.6rem] leading-snug tracking-[-0.01em] sm:text-3xl">{copy.lead}</p>
          <p className="mt-6 text-[17px] leading-relaxed text-soft">{copy.story}</p>
          <p className="mt-4 text-[17px] leading-relaxed text-soft">{copy.how_i_work}</p>
          <p className="mt-8 border-t border-hair pt-6 text-[15px] leading-relaxed">{copy.education_line}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-white transition-colors hover:bg-blue"
            >
              {copy.cv_label}
              <ArrowDown aria-hidden className="size-4" strokeWidth={2.4} />
            </a>
            <a
              href={LINKEDIN}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-hair px-6 font-semibold transition-colors hover:border-ink"
            >
              LinkedIn
              <ArrowUpRight aria-hidden className="size-4" strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

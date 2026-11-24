import Image from "next/image";
import type { SiteCopy } from "@/data/copy";
import SectionHeading from "./SectionHeading";

export default function About({ copy }: { copy: SiteCopy["about"] }) {
  return (
    <section id="about" className="scroll-mt-10 mt-24">
      <SectionHeading title={copy.heading} path="/about" />
      <div className="grid sm:grid-cols-[200px_1fr] gap-8 items-start">
        <Image
          src="/ali.jpg"
          alt={copy.photo_alt}
          width={200}
          height={200}
          unoptimized
          className="photo w-40 sm:w-full h-auto"
        />
        <div className="max-w-2xl space-y-5 text-base leading-relaxed">
          <p className="text-lg">{copy.lead}</p>
          <p>{copy.how_i_work}</p>
          <p>{copy.story}</p>
          <p className="mono-data text-xs text-ink-soft">{copy.education_line}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <a href="/cv.pdf" download className="text-link">
              {copy.cv_label} ↓
            </a>
            <span className="text-sm text-ink-soft">{copy.fulltime_line}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { EMAIL, WHATSAPP } from "@/data/links";
import type { SiteCopy } from "@/data/copy";

export default function ContactSection({ copy }: { copy: SiteCopy["contact"] }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      tabIndex={-1}
      className="on-dark relative -mt-16 scroll-mt-0 bg-ink pt-32 sm:-mt-[120px] text-white outline-none sm:pt-[220px]"
    >
      <div className="mx-auto max-w-[1240px] px-5 sm:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          <span className="block size-20 shrink-0 overflow-hidden rounded-full bg-stone sm:size-28">
            <Image src="/ali.jpg" alt="" width={224} height={224} className="size-full object-cover object-[50%_20%]" />
          </span>
          <h2 id="contact-title" className="text-[2.9rem] leading-none tracking-[-0.035em] sm:text-[clamp(3.5rem,7vw,5.75rem)]">
            {copy.heading[0]}
            <br />
            {copy.heading[1]}
          </h2>
        </div>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-dark-soft">{copy.intro}</p>

        <ContactForm copy={copy} needOptions={copy.need_options} />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <p className="text-[15px] text-dark-soft">{copy.alt_contact_line}</p>
          <ul className="flex flex-wrap gap-3">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-14 items-center rounded-full border border-dark-line px-6 text-base transition-colors hover:border-white sm:min-h-16 sm:px-8"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP}
                className="inline-flex min-h-14 items-center gap-2 rounded-full border border-dark-line px-6 text-base transition-colors hover:border-white sm:min-h-16 sm:px-8"
              >
                {copy.whatsapp_label}
                <ArrowUpRight aria-hidden className="size-4" />
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-dark-soft">{copy.privacy_note}</p>
      </div>
    </section>
  );
}

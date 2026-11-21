import type { SiteCopy } from "@/data/copy";
import { EMAIL, WHATSAPP, GITHUB, LINKEDIN } from "@/data/links";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";

export default function ContactSection({ copy }: { copy: SiteCopy }) {
  const c = copy.contact;
  // Dropdown values are the service ids so a service row can pre-select them; the last option is "other".
  const needOptions = c.need_options.map((label, i) => ({
    value: copy.services.items[i]?.id ?? "other",
    label,
  }));

  return (
    <section id="contact" className="scroll-mt-10 mt-24">
      <SectionHeading title={c.heading} path="/contact" method="POST" />
      <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 items-start">
        <ContactForm copy={c} needOptions={needOptions} />
        <div className="space-y-6 lg:pt-1">
          <p className="text-base leading-relaxed">{c.intro}</p>
          <div>
            <p className="eyebrow mb-3">{c.alt_contact_line}</p>
            <div className="flex flex-wrap gap-3">
              <a className="btn btn-ghost" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a className="btn btn-ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {[
              ["GitHub", GITHUB],
              ["LinkedIn", LINKEDIN],
              ["CV (PDF)", "/cv.pdf"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-link"
              >
                {label} ↗
              </a>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-ink-soft">{c.privacy_note}</p>
        </div>
      </div>
    </section>
  );
}

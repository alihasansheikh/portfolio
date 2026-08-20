import CaseStudy from "@/components/CaseStudy";
import SystemDiagram from "@/components/SystemDiagram";
import { projects, stacks } from "@/data/projects";

const EMAIL = "alihasansheikh01@gmail.com";
const WHATSAPP = "https://wa.me/923102022630";
const GITHUB = "https://github.com/alihasansheikh";
const LINKEDIN = "https://www.linkedin.com/in/alihasansheikh1";

const nav = [
  { method: "GET", path: "/work", href: "#work" },
  { method: "GET", path: "/stack", href: "#stack" },
  { method: "GET", path: "/about", href: "#about" },
  { method: "POST", path: "/contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:flex lg:gap-14">
      {/* ————— rail: the spec sheet's margin column ————— */}
      <aside className="lg:w-60 lg:shrink-0 lg:sticky lg:top-0 lg:self-start lg:h-screen lg:py-12 py-8 flex lg:flex-col flex-wrap items-start gap-6 lg:gap-0">
        <div className="lg:mb-10 mr-auto lg:mr-0">
          <p className="display text-lg leading-tight">
            Ali Hasan
            <br />
            Sheikh
          </p>
          <p className="eyebrow mt-2">Backend Engineer</p>
        </div>

        <nav aria-label="Sections" className="lg:mb-10 w-full max-w-[220px]">
          {nav.map((n) => (
            <a key={n.path} href={n.href} className="endpoint-link">
              <span className={`method ${n.method === "GET" ? "method-get" : "method-post"}`}>
                {n.method}
              </span>
              {n.path}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block mt-auto space-y-1.5">
          <p className="mono-data text-xs text-ink-soft">Karachi, PK · remote</p>
          <p className="mono-data text-xs text-ink-soft">UK-friendly hours</p>
          <p className="mono-data text-xs">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--post-green)] mr-1.5 align-middle" />
            Open to freelance &amp; full-time
          </p>
        </div>
      </aside>

      {/* ————— main column ————— */}
      <main className="flex-1 pb-24">
        {/* hero */}
        <section className="pt-4 lg:pt-24 pb-16">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <div>
              <h1 className="display text-[2.4rem] sm:text-[3.2rem] lg:text-[3.6rem]">
                The invisible half of software, built properly.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-ink-soft max-w-xl">
                I design and ship the APIs, data models and infrastructure that
                production apps run on — Java/Spring Boot and PHP/Laravel, as the
                sole engineer, end to end. Two multi-tenant SaaS platforms
                currently in production for UK clients.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="btn btn-primary" href="#contact">
                  POST /contact
                </a>
                <a className="btn btn-ghost" href="/cv.pdf" download>
                  Download CV ↓
                </a>
              </div>
            </div>
            <div aria-hidden className="hidden sm:block">
              <SystemDiagram />
            </div>
          </div>

          {/* proof strip */}
          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-rule py-6">
            {[
              ["210+", "REST endpoints shipped"],
              ["115+", "versioned migrations"],
              ["2", "production SaaS platforms"],
              ["100%", "of the SDLC owned solo"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="sr-only">{l}</dt>
                <dd className="mono-data text-2xl font-medium">{v}</dd>
                <dd className="mono-data text-[0.7rem] uppercase tracking-wider text-ink-soft mt-1">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* work */}
        <section id="work" className="scroll-mt-10">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="method method-get">GET</span>
            <h2 className="display text-2xl sm:text-3xl">/work</h2>
            <p className="mono-data text-xs text-ink-soft ml-auto hidden sm:block">
              3 case studies · problem → role → approach → outcome
            </p>
          </div>
          <div className="space-y-10">
            {projects.map((p) => (
              <CaseStudy key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* stack */}
        <section id="stack" className="scroll-mt-10 mt-24">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="method method-get">GET</span>
            <h2 className="display text-2xl sm:text-3xl">/stack</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-rule border border-rule rounded-md overflow-hidden">
            {stacks.map((s) => (
              <div key={s.title} className="bg-paper-raised p-6">
                <h3 className="eyebrow mb-4">{s.title}</h3>
                <ul className="space-y-2">
                  {s.items.map((i) => (
                    <li key={i} className="text-[0.92rem] leading-relaxed text-ink-soft">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* about */}
        <section id="about" className="scroll-mt-10 mt-24">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="method method-get">GET</span>
            <h2 className="display text-2xl sm:text-3xl">/about</h2>
          </div>
          <div className="max-w-2xl space-y-5 text-[1.02rem] leading-relaxed">
            <p>
              I&apos;m a software engineer in Karachi. Before finishing my BS in
              Software Engineering (Sir Syed University, CGPA 3.86/4.00, class of
              2026), I was already the sole engineer on two production SaaS
              platforms for UK clients at Touchperia Digital — owning
              requirements, data modelling, implementation, testing and
              deployment.
            </p>
            <p>
              The work I care about is the kind users never notice when it&apos;s
              done right: authorization that can&apos;t be escalated, payments
              that can&apos;t be double-recorded, pipelines that can&apos;t skip
              stages, and schemas that survive their 69th migration. If your
              product needs that kind of backend, we should talk.
            </p>
          </div>
        </section>

        {/* contact */}
        <section id="contact" className="scroll-mt-10 mt-24">
          <div className="flex items-baseline gap-3 mb-8">
            <span className="method method-post">POST</span>
            <h2 className="display text-2xl sm:text-3xl">/contact</h2>
          </div>
          <div className="spec-card p-6 sm:p-8">
            <p className="max-w-xl text-[1.02rem] leading-relaxed">
              Building a SaaS product, an API, or a system that has outgrown its
              spreadsheets? Tell me what it needs to do — I&apos;ll reply within
              a working day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a className="btn btn-primary" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
              <a
                className="btn btn-ghost"
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <div className="mt-7 pt-6 border-t border-rule flex flex-wrap gap-x-8 gap-y-2">
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
                  className="mono-data text-sm underline underline-offset-4 decoration-[var(--rule)] hover:decoration-[var(--cobalt)] hover:text-cobalt"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-20 pt-6 border-t border-rule">
          <p className="mono-data text-xs text-ink-soft">
            © {new Date().getFullYear()} Ali Hasan Sheikh · alihasansheikh.com ·
            Next.js + TypeScript, deployed on Vercel — this site is also a work
            sample.
          </p>
        </footer>
      </main>
    </div>
  );
}

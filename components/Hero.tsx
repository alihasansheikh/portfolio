"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight, Globe } from "lucide-react";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import Magnet from "@/components/ui/magnet";
import type { SiteCopy } from "@/data/copy";

// Grey hero: cut-out photo in the middle, the location pill on the left, the promise on
// the right, and the name running along the bottom faster as the page scrolls.
export default function Hero({
  hero,
  header,
  nav,
}: {
  hero: SiteCopy["hero"];
  header: SiteCopy["header"];
  nav: SiteCopy["nav"];
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-30%"]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="on-stone relative isolate flex flex-col overflow-hidden bg-stone text-ink md:h-svh md:min-h-[760px]"
    >
      {/* top bar */}
      <div className="relative z-20 flex items-center justify-between px-5 py-6 text-base font-medium sm:px-12 sm:py-8">
        <a href="#top" className="inline-flex min-h-11 items-center">
          {header.mark}
        </a>
        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative inline-flex min-h-11 items-center px-3"
                >
                  {item.label}
                  <span
                    aria-hidden
                    className="absolute bottom-1 left-1/2 size-1.5 -translate-x-1/2 scale-0 rounded-full bg-ink transition-transform duration-300 group-hover:scale-100"
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* location pill, desktop */}
      <motion.div
        style={{ y: textY }}
        className="absolute left-0 top-[44%] z-20 hidden items-center gap-6 rounded-r-full bg-ink py-5 pl-10 pr-4 text-[17px] leading-snug text-white lg:flex"
      >
        <p>
          {hero.location_line_1}
          <br />
          {hero.location_line_2}
        </p>
        <span aria-hidden className="grid size-16 place-items-center rounded-full bg-[#99a0a1] text-ink">
          <Globe className="size-8 motion-safe:animate-[spin_12s_linear_infinite]" strokeWidth={1.5} />
        </span>
      </motion.div>

      {/* promise */}
      <motion.div
        style={{ y: textY }}
        className="relative z-20 px-5 pt-6 sm:px-12 md:absolute md:right-12 md:top-[24%] md:max-w-[29rem] md:px-0 md:pt-0"
      >
        <p className="mb-4 text-sm font-medium lg:hidden">
          {hero.location_line_1} · {hero.location_line_2}
        </p>
        <ArrowDownRight aria-hidden className="mb-6 hidden size-8 md:block" strokeWidth={1.6} />
        <h1 id="hero-title" className="text-[2rem] font-[450] leading-[1.12] tracking-[-0.015em] sm:text-[2.4rem]">
          {hero.h1}
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed sm:text-[17px]">{hero.sub}</p>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
          <Magnet padding={30} magnetStrength={4}>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-base font-semibold text-white transition-colors hover:bg-blue"
            >
              {hero.cta}
            </a>
          </Magnet>
        </div>
        <p className="mt-4 text-sm font-medium">{hero.note}</p>
      </motion.div>

      {/* photo */}
      <motion.div
        style={{ y: photoY }}
        className="hero-photo pointer-events-none relative z-0 mx-auto mt-8 h-[25rem] md:absolute md:bottom-0 md:left-[46%] md:mt-0 md:h-[min(78%,640px)] md:-translate-x-1/2"
      >
        <Image
          src="/ali-cutout.webp"
          alt=""
          width={1242}
          height={1050}
          priority
          sizes="(min-width: 768px) 700px, 90vw"
          className="h-full w-auto max-w-none"
        />
      </motion.div>

      {/* running name; decorative, the h1 and the header already name the page */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-6 z-10 sm:bottom-10">
        <ScrollVelocity
          texts={[`${hero.marquee} —`]}
          velocity={-60}
          numCopies={4}
          className="pr-[0.35em] text-[7.5rem] font-light leading-none tracking-[-0.03em] text-white sm:text-[clamp(8rem,15.5vw,15rem)]"
        />
      </div>
    </section>
  );
}

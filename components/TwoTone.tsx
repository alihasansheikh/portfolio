"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const line = {
  hidden: { y: "110%" },
  shown: (i: number) => ({
    y: "0%",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
  }),
};

// Section heading in two tones: the first line in ink, the second in grey.
// Each line slides up from behind a clip as the heading enters the viewport. The heading
// itself is observed, because a line sitting below its clip never counts as visible.
// Only transform animates, so reduced-motion users (MotionConfig reducedMotion="user")
// see it at rest.
export default function TwoTone({
  lines,
  as = "h2",
  id,
  className,
  tone = "light",
}: {
  lines: [string, string];
  as?: "h2" | "h3";
  id?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const Tag = as === "h3" ? motion.h3 : motion.h2;
  return (
    <Tag
      id={id}
      className={cn("two-tone text-[clamp(2.6rem,6.4vw,4.75rem)]", className)}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0.5 }}
    >
      {lines.map((text, i) => (
        <span key={text} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            data-reveal
            custom={i}
            variants={line}
            className={cn("block", i === 1 && (tone === "dark" ? "text-dark-soft" : "text-muted"))}
          >
            {text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

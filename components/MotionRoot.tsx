"use client";

import { MotionConfig } from "motion/react";

// Honour the visitor's reduced-motion setting for every motion component on the page.
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

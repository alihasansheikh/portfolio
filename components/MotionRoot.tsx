"use client";

import { MotionConfig } from "motion/react";
import CustomCursor from "@/components/CustomCursor";

// Honour the visitor's reduced-motion setting for every motion component on the page,
// and add the custom cursor on every page.
export default function MotionRoot({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      {children}
      <CustomCursor />
    </MotionConfig>
  );
}

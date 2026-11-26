"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const INTERACTIVE = "a, button, summary, label, [role='button'], [data-cursor='grow']";
const TEXT_ENTRY = "input, textarea, select, [contenteditable='true']";

// A dot that sits on the pointer and a ring that trails it. Over links and buttons the
// ring grows and takes a light fill. It is ink on white and grey sections and white on
// dark ones, so it keeps its contrast everywhere.
// Only on devices with a precise pointer, and never for reduced-motion users. Form
// fields keep the normal text cursor.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [grow, setGrow] = useState(false);
  const [native, setNative] = useState(false);
  const [down, setDown] = useState(false);
  const [dark, setDark] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduce.matches);
    update();
    fine.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = e.target instanceof Element ? e.target : null;
      setNative(!!el?.closest(TEXT_ENTRY));
      setGrow(!!el?.closest(INTERACTIVE));
      setDark(!!el?.closest(".on-dark, .bg-ink, .preloader"));
    };
    const leave = () => setVisible(false);
    const press = () => setDown(true);
    const release = () => setDown(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    return () => {
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;
  const show = visible && !native;
  const rgb = dark ? "255,255,255" : "28,29,32";

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[300]">
      <motion.div
        className="absolute left-0 top-0 rounded-full border-[1.5px]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: grow ? 64 : 34,
          height: grow ? 64 : 34,
          borderColor: `rgba(${rgb},${grow ? 0.9 : 0.7})`,
          backgroundColor: `rgba(${rgb},${grow ? 0.12 : 0})`,
          opacity: show ? 1 : 0,
          scale: down ? 0.85 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      <motion.div
        className="absolute left-0 top-0 size-1.5 rounded-full"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: show && !grow ? 1 : 0, backgroundColor: `rgb(${rgb})` }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}

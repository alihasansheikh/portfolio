"use client";

import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "motion/react";
import Magnet from "@/components/ui/magnet";
import { cn } from "@/lib/utils";
import { EMAIL, WHATSAPP, LINKEDIN, GITHUB } from "@/data/links";
import type { SiteCopy } from "@/data/copy";

// Round menu button. On phones it is always there; on wider screens it appears once the
// hero's own navigation has scrolled away. It opens a dark side panel with the links.
export default function SiteMenu({ header, nav }: { header: SiteCopy["header"]; nav: SiteCopy["nav"] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const target = useRef<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div
        className={cn(
          "fixed right-4 top-4 z-[70] transition-[opacity,transform,visibility] duration-300 sm:right-8 sm:top-6 motion-reduce:transition-none",
          scrolled || open ? "opacity-100" : "md:invisible md:scale-75 md:opacity-0",
        )}
      >
        <Magnet padding={40} magnetStrength={3}>
          <Dialog.Trigger
            aria-label={open ? header.close_label : header.menu_label}
            className="relative z-[60] grid size-14 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-blue sm:size-16"
          >
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-current transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-full bg-current transition-transform duration-300",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
                )}
              />
            </span>
          </Dialog.Trigger>
        </Magnet>
      </div>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-40 bg-ink/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              asChild
              forceMount
              aria-describedby={undefined}
              onCloseAutoFocus={(e) => {
                const id = target.current;
                if (!id) return;
                e.preventDefault();
                target.current = null;
                const el = document.querySelector<HTMLElement>(id);
                if (el) {
                  el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
                  el.focus({ preventScroll: true });
                  history.pushState(null, "", id);
                }
              }}
            >
              <motion.div
                className="on-dark fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-[#141517] px-8 pb-10 pt-28 text-white sm:px-14"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              >
                <Dialog.Title className="border-b border-dark-line pb-6 text-sm text-dark-soft">
                  {header.nav_heading}
                </Dialog.Title>
                <nav aria-label={header.nav_heading}>
                  <ul className="mt-8 space-y-1">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            target.current = item.href;
                            setOpen(false);
                          }}
                          className="group flex items-center gap-4 py-2 text-[2.5rem] leading-tight tracking-tight sm:text-5xl"
                        >
                          <span
                            aria-hidden
                            className="size-2.5 scale-0 rounded-full bg-white transition-transform duration-300 group-hover:scale-100 group-focus-visible:scale-100"
                          />
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-auto">
                  <p className="text-sm text-dark-soft">Get in touch</p>
                  <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-base">
                    <li><a className="inline-flex min-h-11 items-center hover:underline" href={`mailto:${EMAIL}`}>Email</a></li>
                    <li><a className="inline-flex min-h-11 items-center hover:underline" href={WHATSAPP}>WhatsApp</a></li>
                    <li><a className="inline-flex min-h-11 items-center hover:underline" href={LINKEDIN}>LinkedIn</a></li>
                    <li><a className="inline-flex min-h-11 items-center hover:underline" href={GITHUB}>GitHub</a></li>
                  </ul>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

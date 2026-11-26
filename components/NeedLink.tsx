"use client";

import type { ComponentProps } from "react";

// Opens the contact form with one kind of work already chosen, without reloading the
// page. Without JavaScript the plain link still works: the form reads ?need= on load.
export default function NeedLink({ need, ...props }: { need: string } & ComponentProps<"a">) {
  return (
    <a
      {...props}
      href={`?need=${need}#contact`}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        history.replaceState(null, "", `?need=${need}#contact`);
        window.dispatchEvent(new CustomEvent("contact:need", { detail: need }));
        const el = document.getElementById("contact");
        if (!el) return;
        el.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        el.focus({ preventScroll: true });
      }}
    />
  );
}

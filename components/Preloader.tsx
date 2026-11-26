"use client";

import { useEffect, useState } from "react";

// The greeting shown once per visit. It covers the page for about three seconds, then
// slides away. The slide-away is CSS, so the page is never stuck behind it if this
// script fails; reduced-motion users and repeat visits in the same tab skip it.
export default function Preloader({ greetings }: { greetings: string[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    try {
      sessionStorage.setItem("intro-seen", "1");
    } catch {}
    const step = 2000 / greetings.length;
    const t = setInterval(() => setI((n) => Math.min(n + 1, greetings.length - 1)), step);
    return () => clearInterval(t);
  }, [greetings.length]);

  return (
    <div className="preloader" aria-hidden="true">
      <p className="preloader-word">{greetings[i]}</p>
    </div>
  );
}

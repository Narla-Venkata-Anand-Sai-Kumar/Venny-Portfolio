"use client";

import Link from "next/link";

export function FloatingMark() {
  return (
    <>
      {/* Bottom-left: signature mark, always dark, lime ring in dark mode */}
      <Link
        href="/"
        aria-label="Back to top"
        className="group fixed bottom-5 left-5 z-30 grid h-11 w-11 place-items-center rounded-full bg-neutral-950 font-serif text-white shadow-lg ring-1 ring-transparent transition-all hover:ring-iris/70 dark:ring-iris/70 dark:hover:ring-iris"
      >
        <span className="text-base leading-none">V</span>
      </Link>

      {/* Bottom-right: editorial caption tied to current work */}
      <p
        aria-hidden
        className="pointer-events-none fixed bottom-6 right-5 z-30 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500 sm:block"
      >
        Agentic AI · LLM Infrastructure
      </p>
    </>
  );
}

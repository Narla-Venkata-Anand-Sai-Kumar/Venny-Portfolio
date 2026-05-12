"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/info";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-page items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group flex items-end gap-2 text-ink-950 transition-colors hover:text-iris-deep dark:hover:text-iris"
          aria-label="Home"
        >
          {/* Calligraphic flourish — a hand-drawn pen swash */}
          <svg
            aria-hidden
            viewBox="0 0 40 28"
            className="h-6 w-9 stroke-current"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 22 Q 6 4, 14 14 Q 20 22, 26 10 Q 32 0, 38 18" />
            <circle cx="36" cy="22" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="font-script text-2xl leading-[0.9] tracking-tight">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-ink-950 text-paper dark:bg-transparent dark:border dark:border-iris dark:text-iris"
                    : "text-ink-700 hover:bg-ink-50 hover:text-ink-950 dark:hover:bg-paper-soft dark:hover:text-ink-950",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:grid" />
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full border border-ink-200 p-2 text-ink-700"
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink-100 bg-paper">
          <ul className="mx-auto flex max-w-page flex-col gap-1 px-6 py-3 sm:px-8">
            {nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-sm",
                      active
                        ? "bg-ink-950 text-paper dark:bg-transparent dark:border dark:border-iris dark:text-iris"
                        : "text-ink-700 hover:bg-ink-50 dark:hover:bg-paper-soft",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="flex items-center gap-3 pt-3">
              <ThemeToggle />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                Toggle theme
              </span>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

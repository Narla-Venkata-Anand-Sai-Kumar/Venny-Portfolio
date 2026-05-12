"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={
        "relative grid h-9 w-9 place-items-center rounded-full border border-ink-200 bg-paper-card text-ink-700 transition-colors hover:border-iris/60 hover:text-iris " +
        (className ?? "")
      }
    >
      {/* both icons rendered; opacity flips so swap is smooth and hydration-safe */}
      <Sun
        size={16}
        className={`absolute transition-all duration-300 ${
          mounted && !isDark ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-300 ${
          isDark ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

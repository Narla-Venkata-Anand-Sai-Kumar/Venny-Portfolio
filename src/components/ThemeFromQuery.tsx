"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function ThemeFromQuery() {
  const { setTheme } = useTheme();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const t = (params.get("theme") || "").toLowerCase();
    if (t === "dark" || t === "light") setTheme(t);
    else if (t === "system" || t === "auto") setTheme("system");
  }, [setTheme]);

  return null;
}

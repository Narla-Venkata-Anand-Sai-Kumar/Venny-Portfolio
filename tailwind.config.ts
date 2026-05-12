import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        // All colors resolve through CSS vars defined in globals.css
        // Light / dark variants flip automatically.
        paper: {
          DEFAULT: "rgb(var(--paper) / <alpha-value>)",
          soft: "rgb(var(--paper-soft) / <alpha-value>)",
          warm: "rgb(var(--paper-warm) / <alpha-value>)",
          card: "rgb(var(--paper-card) / <alpha-value>)",
        },
        ink: {
          950: "rgb(var(--ink-950) / <alpha-value>)",
          900: "rgb(var(--ink-900) / <alpha-value>)",
          700: "rgb(var(--ink-700) / <alpha-value>)",
          600: "rgb(var(--ink-600) / <alpha-value>)",
          500: "rgb(var(--ink-500) / <alpha-value>)",
          400: "rgb(var(--ink-400) / <alpha-value>)",
          300: "rgb(var(--ink-300) / <alpha-value>)",
          200: "rgb(var(--ink-200) / <alpha-value>)",
          100: "rgb(var(--ink-100) / <alpha-value>)",
          50: "rgb(var(--ink-50) / <alpha-value>)",
        },
        iris: {
          DEFAULT: "rgb(var(--iris) / <alpha-value>)",
          deep: "rgb(var(--iris-deep) / <alpha-value>)",
          soft: "rgb(var(--iris-soft) / <alpha-value>)",
          wash: "rgb(var(--iris-wash) / <alpha-value>)",
        },
      },
      fontSize: {
        display: ["clamp(2.75rem, 6vw, 5.25rem)", { lineHeight: "1.03", letterSpacing: "-0.025em" }],
        hero: ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.018em" }],
        h2: ["clamp(1.5rem, 2.5vw, 2.125rem)", { lineHeight: "1.2", letterSpacing: "-0.012em" }],
      },
      maxWidth: {
        prose: "68ch",
        page: "76rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;

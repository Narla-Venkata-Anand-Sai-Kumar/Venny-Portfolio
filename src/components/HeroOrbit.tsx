"use client";

import { Atom } from "lucide-react";

const innerSkills = [
  { name: "Python", slug: "python" },
  { name: "TypeScript", slug: "typescript" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Django", slug: "django" },
];

const outerSkills = [
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "LangChain", slug: "langchain" },
  { name: "PyTorch", slug: "pytorch" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Linux", slug: "linux" },
  { name: "TensorFlow", slug: "tensorflow" },
];

const INNER_RADIUS = 92;
const OUTER_RADIUS = 148;
const INNER_DURATION = 40; // seconds per rotation
const OUTER_DURATION = 70;

type Skill = { name: string; slug: string };

function OrbitRing({
  skills,
  radius,
  duration,
  reverse = false,
  tileSize = 40,
  iconSize = 18,
}: {
  skills: Skill[];
  radius: number;
  duration: number;
  reverse?: boolean;
  tileSize?: number;
  iconSize?: number;
}) {
  return (
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        animation: `${reverse ? "orbit-ccw" : "orbit-cw"} ${duration}s linear infinite`,
      }}
    >
      {skills.map((s, i) => {
        const angle = (i / skills.length) * 360;
        const isGreen = i % 2 === 0;
        const maskUrl = `url(https://cdn.simpleicons.org/${s.slug})`;
        return (
          <div
            key={s.name}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`,
              marginLeft: -tileSize / 2,
              marginTop: -tileSize / 2,
            }}
          >
            <div
              className={`pointer-events-auto grid place-items-center rounded-full border bg-paper-card shadow-[0_4px_14px_-6px_rgba(0,0,0,0.18)] transition-transform hover:scale-110 ${
                isGreen
                  ? "border-iris/40 ring-1 ring-iris/10"
                  : "border-ink-100"
              }`}
              style={{
                width: tileSize,
                height: tileSize,
                animation: `${reverse ? "orbit-cw" : "orbit-ccw"} ${duration}s linear infinite`,
              }}
              title={s.name}
            >
              {/* CSS-masked icon — color comes from bg, not URL */}
              <span
                aria-hidden
                className={`block ${
                  isGreen ? "bg-iris" : "bg-ink-950"
                }`}
                style={{
                  width: iconSize,
                  height: iconSize,
                  maskImage: maskUrl,
                  WebkitMaskImage: maskUrl,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function HeroOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      {/* Decorative orbit rings */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-iris/45"
        style={{ width: INNER_RADIUS * 2, height: INNER_RADIUS * 2 }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-iris/25"
        style={{ width: OUTER_RADIUS * 2, height: OUTER_RADIUS * 2 }}
      />
      {/* Subtle radial glow behind the brain */}
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-iris/15 blur-2xl"
        style={{ width: INNER_RADIUS, height: INNER_RADIUS }}
      />

      {/* Center core — pulsing brain on iris */}
      <div
        className="absolute left-1/2 top-1/2 grid h-20 w-20 place-items-center rounded-full bg-iris text-neutral-950 shadow-[0_12px_36px_-10px_rgba(132,204,22,0.6)] ring-2 ring-paper-card ring-offset-2 ring-offset-iris/30"
        style={{ animation: "core-pulse 4s ease-in-out infinite" }}
      >
        <Atom size={36} strokeWidth={1.75} />
      </div>

      {/* Inner orbit — rotates clockwise */}
      <OrbitRing
        skills={innerSkills}
        radius={INNER_RADIUS}
        duration={INNER_DURATION}
        tileSize={40}
        iconSize={18}
      />

      {/* Outer orbit — rotates counter-clockwise */}
      <OrbitRing
        skills={outerSkills}
        radius={OUTER_RADIUS}
        duration={OUTER_DURATION}
        tileSize={36}
        iconSize={16}
        reverse
      />
    </div>
  );
}

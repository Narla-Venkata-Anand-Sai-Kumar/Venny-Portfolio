import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  FlaskConical,
  Workflow,
  Activity,
  Sparkles,
  Layout,
  Database,
  Cloud,
  Eye,
} from "lucide-react";

const trackIcons = {
  eval: FlaskConical,
  orchestration: Workflow,
  telemetry: Activity,
} as const;

const techIcons = {
  ai: Sparkles,
  frontend: Layout,
  backend: Database,
  cloud: Cloud,
  vision: Eye,
} as const;
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow, SectionTitle, SectionLead } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { PhotoCard } from "@/components/PhotoCard";
import { Asterism } from "@/components/Asterism";
import { StatStrip } from "@/components/StatStrip";
import {
  profile,
  currentlyShipping,
  experiences,
  posts,
  heroStats,
  techStack,
} from "@/data/info";

export default function Home() {
  const everstage = experiences.find((e) => e.company === "Everstage")!;
  const currentRole = everstage.roles[0];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris" aria-hidden />
                  {profile.title} · {profile.company} · {profile.workLocation}
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-serif text-display text-ink-950">
                  Building{" "}
                  <span className="text-iris-deep dark:text-iris">
                    agentic
                    <br className="hidden sm:block" />
                    AI
                  </span>
                  <br className="hidden sm:block" /> and the
                  <br className="hidden sm:block" /> infrastructure
                  <br className="hidden sm:block" /> beneath it.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl text-lg text-ink-700 leading-relaxed">
                  I'm {profile.short} — an AI engineer at Everstage working on
                  LLM evaluation, RAG, MCP connectors, and the React surfaces
                  that make agent thinking legible to the humans relying on it.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:bg-iris dark:text-ink-950 dark:hover:bg-iris-deep"
                  >
                    See my work
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm text-ink-900 transition-colors hover:bg-ink-50 dark:border-ink-300/40 dark:hover:bg-paper-soft"
                  >
                    Get in touch
                  </Link>
                  {profile.openToWork && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris-wash px-4 py-2 text-xs font-medium text-iris-deep">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris animate-pulse" />
                      Open to new work
                    </span>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5">
              <Reveal delay={0.2}>
                <PhotoCard variant="hero" priority />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Stat strip — quick credibility row */}
      <section className="relative">
        <Container>
          <Asterism spacing="md" />
          <Reveal>
            <StatStrip stats={heroStats} />
          </Reveal>
          <Asterism spacing="md" />
        </Container>
      </section>

      {/* Featured experience teaser — moved above Currently shipping */}
      <Section tone="soft" id="experience-teaser">
        <Reveal>
          <Eyebrow>Selected experience</Eyebrow>
          <SectionTitle>
            Three roles, one company — the arc that brought me here.
          </SectionTitle>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="mt-12 overflow-hidden rounded-3xl border border-ink-100 bg-paper-card">
            {/* Company header */}
            <header className="grid gap-6 border-b border-ink-100 px-8 py-7 sm:grid-cols-12 sm:items-end sm:px-10">
              <div className="sm:col-span-7">
                <div className="flex items-center gap-4">
                  {everstage.logo && (
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-ink-100 bg-paper-soft p-2">
                      <Image
                        src={everstage.logo}
                        alt={`${everstage.company} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                        unoptimized
                      />
                    </span>
                  )}
                  <div>
                    <p className="font-serif text-3xl leading-none text-ink-950">
                      {everstage.company}
                    </p>
                    <p className="mt-2 text-sm text-ink-600">
                      {everstage.location} · {everstage.locationType}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-5 sm:text-right">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-iris">
                  Total tenure
                </p>
                <p className="mt-2 font-serif text-3xl leading-none text-ink-950">
                  {everstage.totalDuration}
                </p>
              </div>
            </header>

            {/* Three roles arranged as a progression ladder */}
            <div className="relative grid gap-px bg-ink-100 md:grid-cols-3">
              {[...everstage.roles].reverse().map((role, i, arr) => {
                const isCurrent = i === arr.length - 1;
                return (
                  <div
                    key={role.title}
                    className={`relative flex flex-col gap-3 bg-paper-card px-7 py-7 ${
                      isCurrent ? "bg-paper-soft" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                          isCurrent ? "text-iris-deep dark:text-iris" : "text-ink-400"
                        }`}
                      >
                        {`Step 0${i + 1}`}
                        {isCurrent && " · Now"}
                      </span>
                      <span
                        aria-hidden
                        className={`hidden md:inline-flex h-1.5 w-1.5 rounded-full ${
                          isCurrent ? "bg-iris ring-4 ring-iris-wash dark:ring-iris/20" : "bg-ink-300"
                        }`}
                      />
                    </div>
                    <h3 className="font-serif text-lg leading-snug text-ink-950">
                      {role.title}
                    </h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                      {role.dates}
                      <span className="mx-2 text-ink-300">·</span>
                      {role.duration}
                    </p>
                    <p className="mt-1 line-clamp-4 text-sm leading-relaxed text-ink-600">
                      {role.bullets[0]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Footer: stat + CTA */}
            <footer className="flex flex-col gap-3 border-t border-ink-100 px-8 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <p className="font-serif text-sm italic text-ink-500">
                Intern → SE&nbsp;I → SE&nbsp;II — promoted twice in 12 months.
              </p>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-sm text-iris-deep transition-colors hover:text-iris dark:text-iris dark:hover:text-iris-deep"
              >
                Read the full timeline
                <ArrowUpRight size={14} />
              </Link>
            </footer>
          </article>
        </Reveal>
      </Section>

      {/* Currently shipping */}
      <Section id="now">
        <Reveal>
          <Eyebrow>Currently shipping</Eyebrow>
          <SectionTitle>What I'm building at Everstage right now.</SectionTitle>
          <SectionLead>
            Three threads of work define this chapter of my craft — evaluation,
            orchestration, and the telemetry that pays for it all.
          </SectionLead>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {currentlyShipping.map((card, i) => {
            const Icon = trackIcons[card.iconKey as keyof typeof trackIcons];
            return (
              <Reveal key={card.title} delay={0.05 * i}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-paper-card p-7 transition-all hover:border-iris/40 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.5)]">
                  {/* Watermark numeral — contained */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-6 select-none font-serif text-[8rem] leading-none text-iris/[0.06] transition-colors group-hover:text-iris/[0.12] dark:text-iris/[0.1] dark:group-hover:text-iris/[0.18]"
                  >
                    0{i + 1}
                  </span>

                  {/* Top: icon only */}
                  <div className="relative">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-iris-wash text-iris-deep transition-all group-hover:-rotate-3 group-hover:bg-iris group-hover:text-ink-950">
                      {Icon && <Icon size={20} strokeWidth={1.75} />}
                    </span>
                  </div>

                  {/* Track label */}
                  <p className="relative mt-7 font-mono text-[10px] uppercase tracking-[0.22em] text-iris-deep dark:text-iris">
                    Track {String(i + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 className="relative mt-3 font-serif text-xl leading-snug text-ink-950">
                    {card.title}
                  </h3>

                  {/* Body */}
                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                    {card.body}
                  </p>

                  {/* Quote */}
                  <figure className="relative mt-6 pt-6">
                    <span
                      aria-hidden
                      className="absolute left-0 right-0 top-0 h-px bg-ink-100"
                    />
                    <span
                      aria-hidden
                      className="absolute -top-3 left-1 bg-paper-card px-2 font-serif text-3xl leading-none text-iris-deep dark:bg-paper-card dark:text-iris"
                    >
                      &ldquo;
                    </span>
                    <blockquote className="pl-3 font-serif text-sm italic leading-relaxed text-ink-700">
                      {card.quote}
                    </blockquote>
                    <figcaption className="mt-3 pl-3 font-script text-lg leading-none text-iris-deep dark:text-iris">
                      — {profile.short}
                    </figcaption>
                  </figure>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Tech stack — 3 panels: Frontend · AI · Backend */}
      <Section id="stack">
        <Reveal>
          <Eyebrow>Tech stack</Eyebrow>
        </Reveal>

        <Reveal delay={0.05}>
          {(() => {
            const get = (key: string) =>
              techStack.find((r) => r.iconKey === key)?.tools ?? [];
            const panels = [
              {
                label: "Frontend & UI",
                tools: get("frontend"),
              },
              {
                label: "AI & Vision",
                tools: [...get("ai"), ...get("vision")],
              },
              {
                label: "Backend & Cloud",
                tools: [...get("backend"), ...get("cloud")],
              },
            ];

            const shortFor = (name: string) => {
              const clean = name.replace(/[^a-zA-Z0-9 ]/g, "");
              const words = clean.split(/\s+/).filter(Boolean);
              if (clean.length <= 5 && words.length === 1)
                return clean.toUpperCase();
              if (words.length > 1)
                return words
                  .map((w) => w[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 4);
              return clean.slice(0, 4).toUpperCase();
            };

            const SLOTS = 20; // 5 cols × 4 rows — matrix shape

            return (
              <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 lg:grid-cols-3">
                {panels.map((p, i) => {
                  const visibleTools = p.tools.slice(0, SLOTS);
                  const ghostCount = Math.max(0, SLOTS - visibleTools.length);
                  return (
                    <article
                      key={p.label}
                      className="group/panel relative flex h-full flex-col bg-paper-card p-8 transition-colors duration-500 ease-out hover:bg-iris sm:p-10"
                    >
                      {/* Header */}
                      <header className="flex items-baseline justify-between">
                        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400 transition-colors duration-500 group-hover/panel:text-ink-950">
                          <span className="text-iris-deep dark:text-iris group-hover/panel:text-ink-950">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span aria-hidden className="mx-2 text-ink-300 group-hover/panel:text-ink-950/40">
                            /
                          </span>
                          <span>{p.label}</span>
                        </p>
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400 transition-colors duration-500 group-hover/panel:text-ink-950/70">
                          {p.tools.length} tools
                        </span>
                      </header>

                      {/* Big serif label — intuitive cue, grows on hover */}
                      <h3 className="mt-5 font-serif text-3xl leading-tight text-ink-300 transition-all duration-500 ease-out group-hover/panel:text-ink-950 sm:text-4xl">
                        {p.label}
                      </h3>

                      {/* 5×4 matrix — icon tile + name label per cell */}
                      <div className="mt-8 grid grid-cols-5 gap-x-2 gap-y-4 sm:gap-x-3">
                        {visibleTools.map((t) => (
                          <div
                            key={t.name + i}
                            className="flex flex-col items-center gap-1.5"
                          >
                            <span className="grid aspect-square w-full place-items-center rounded-lg bg-paper-soft transition-colors duration-300 group-hover/panel:bg-iris-deep/15 hover:!bg-ink-950/10">
                              {t.slug ? (
                                <Image
                                  src={`https://cdn.simpleicons.org/${t.slug}`}
                                  alt={t.name}
                                  width={22}
                                  height={22}
                                  className="h-5 w-5 brightness-0 dark:invert"
                                  unoptimized
                                />
                              ) : (
                                <span
                                  aria-hidden
                                  className="font-mono text-[9px] font-semibold uppercase tracking-wider text-ink-950"
                                >
                                  {shortFor(t.name)}
                                </span>
                              )}
                            </span>
                            <span className="line-clamp-2 text-center font-mono text-[8.5px] uppercase tracking-[0.06em] leading-tight text-ink-500 transition-colors duration-300 group-hover/panel:text-ink-950/80">
                              {t.name}
                            </span>
                          </div>
                        ))}
                        {/* Ghost cells — empty tile + invisible label spacer */}
                        {Array.from({ length: ghostCount }).map((_, idx) => (
                          <div
                            key={`ghost-${i}-${idx}`}
                            aria-hidden
                            className="flex flex-col items-center gap-1.5"
                          >
                            <span className="grid aspect-square w-full place-items-center rounded-lg bg-paper-soft/40 transition-colors duration-300 group-hover/panel:bg-iris-deep/8">
                              <span className="block h-1 w-1 rounded-full bg-ink-200 transition-colors duration-300 group-hover/panel:bg-ink-950/25" />
                            </span>
                            <span className="block h-[1.6em] text-[8.5px] leading-tight" />
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            );
          })()}
        </Reveal>
      </Section>

      {/* Writing card preview — in its own container */}
      {posts.length > 0 && (
        <Section>
          <Reveal delay={0.1}>
            <Link
              href="/posts"
              className="group grid gap-6 overflow-hidden rounded-2xl border border-ink-100 bg-paper-card p-8 transition-all hover:border-iris/30 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.08)] md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-1 hidden md:flex md:justify-center">
                <span
                  aria-hidden
                  className="grid h-12 w-12 place-items-center rounded-full bg-iris-wash text-iris-deep transition-colors group-hover:bg-iris group-hover:text-paper"
                >
                  <BookOpen size={20} />
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                  Latest writing · LinkedIn
                </p>
                <p className="mt-3 font-serif text-xl text-ink-950 leading-snug">
                  {posts[0].title}
                </p>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed line-clamp-2">
                  {posts[0].excerpt}
                </p>
              </div>
              <div className="md:col-span-3 flex items-baseline gap-6 md:flex-col md:items-end md:gap-2">
                <div className="text-right">
                  <p className="font-serif text-2xl text-ink-950 leading-none">
                    {posts[0].impressions.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-ink-500">
                    impressions
                  </p>
                </div>
                <p className="inline-flex items-center gap-1 text-sm text-iris-deep link-underline">
                  Read all posts
                  <ArrowUpRight size={14} />
                </p>
              </div>
            </Link>
          </Reveal>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-ink-100 bg-paper-card px-8 py-16 sm:px-16 sm:py-20">
            <p className="text-xs uppercase tracking-[0.18em] text-iris">
              Currently — {currentRole.title}
            </p>
            <h2 className="mt-4 font-serif text-hero text-ink-950 leading-tight max-w-3xl">
              If you're shipping agents into production and feeling the rough
              edges — <span className="text-iris">let's talk.</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Pill tone="ink">LLM Evaluation</Pill>
              <Pill tone="ink">RAG & MCP</Pill>
              <Pill tone="ink">Multi-tenant Telemetry</Pill>
              <Pill tone="ink">Agentic Orchestration</Pill>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:bg-iris dark:text-ink-950 dark:hover:bg-iris-deep"
            >
              Reach out
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

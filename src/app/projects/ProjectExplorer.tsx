"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/info";
import { repoOgImage } from "@/lib/github";

const KINDS = ["All", "Agentic AI", "GenAI App", "Tooling", "Research"] as const;
type FilterKind = (typeof KINDS)[number];

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterKind>("All");

  // Compute counts per kind for the chip labels
  const counts = projects.reduce<Record<string, number>>((acc, p) => {
    acc[p.kind] = (acc[p.kind] ?? 0) + 1;
    return acc;
  }, {});

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.kind === active);

  return (
    <section className="relative py-10 sm:py-14">
      <Container>
        {/* Filter chips */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
              Filter
            </span>
            {KINDS.map((kind) => {
              const isActive = active === kind;
              const count = kind === "All" ? projects.length : counts[kind] ?? 0;
              if (kind !== "All" && count === 0) return null;
              return (
                <button
                  key={kind}
                  type="button"
                  onClick={() => setActive(kind)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "border-iris bg-iris text-ink-950"
                      : "border-ink-100 bg-paper-card text-ink-700 hover:border-iris/40 hover:text-iris-deep dark:hover:text-iris"
                  }`}
                >
                  <span>{kind}</span>
                  <span
                    className={`font-mono text-[9px] ${
                      isActive ? "text-ink-950/70" : "text-ink-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-16 rounded-2xl border border-dashed border-ink-200 px-6 py-12 text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
              Nothing here yet
            </p>
            <p className="mt-3 font-serif text-lg italic text-ink-600">
              No projects in this category — try another filter.
            </p>
          </div>
        )}

        {/* Project grid */}
        {filtered.length > 0 && (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {filtered.map((p, i) => {
              const og = repoOgImage(p.repo);
              return (
                <Reveal key={p.name} delay={Math.min(0.04 * i, 0.2)}>
                  <article
                    className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-paper-card transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_50px_-25px_rgba(0,0,0,0.18)] ${
                      p.featured
                        ? "border-iris/40 ring-1 ring-iris/10"
                        : "border-ink-100 hover:border-iris/30"
                    }`}
                  >
                    {/* OG image */}
                    {og ? (
                      <Link
                        href={p.repo!}
                        target="_blank"
                        rel="noreferrer"
                        className="block overflow-hidden border-b border-ink-100 bg-paper-soft"
                      >
                        <Image
                          src={og}
                          alt={`${p.name} repository preview`}
                          width={1200}
                          height={630}
                          className="aspect-[1200/630] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                          unoptimized
                        />
                      </Link>
                    ) : (
                      <div className="grid aspect-[1200/630] place-items-center border-b border-ink-100 bg-iris-wash/40">
                        <span className="font-serif text-2xl italic text-ink-700">
                          {p.name}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-5 sm:p-7">
                      {/* Meta row */}
                      <div className="flex flex-wrap items-baseline justify-between gap-2 sm:gap-3">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
                          <span className="text-iris-deep dark:text-iris">
                            {p.kind}
                          </span>
                          <span aria-hidden className="mx-2 text-ink-300">
                            ·
                          </span>
                          <span className="text-ink-500">{p.year}</span>
                        </p>
                        {p.featured && (
                          <span className="inline-flex items-center rounded-full bg-iris/15 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em] text-iris-deep dark:text-iris">
                            ★ Featured
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="mt-3 font-serif text-xl sm:text-2xl leading-tight text-ink-950">
                        {p.name}
                      </h3>

                      {/* Summary */}
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                        {p.summary}
                      </p>

                      {/* Stack — wrapped pills on mobile, dot-separated on larger */}
                      <div className="mt-5 border-t border-ink-100 pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                        <span className="text-ink-400">Stack</span>
                        <span aria-hidden className="mx-2 text-ink-300">·</span>
                        <span className="inline-flex flex-wrap gap-x-1 gap-y-1">
                          {p.stack.map((s, idx) => (
                            <span key={s}>
                              {idx > 0 && (
                                <span aria-hidden className="mx-1 sm:mx-2 text-ink-300">
                                  ·
                                </span>
                              )}
                              <span className="text-ink-700">{s}</span>
                            </span>
                          ))}
                        </span>
                      </div>

                      {/* Footer — links */}
                      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                        {p.repo && (
                          <Link
                            href={p.repo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 transition-colors hover:text-iris-deep dark:hover:text-iris"
                          >
                            <Github size={12} />
                            View source
                          </Link>
                        )}
                        {p.demo && (
                          <Link
                            href={p.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-iris-deep transition-colors hover:text-iris dark:text-iris"
                          >
                            Live demo
                            <ArrowUpRight size={12} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}

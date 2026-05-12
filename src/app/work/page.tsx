import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { Asterism } from "@/components/Asterism";
import { experiences } from "@/data/info";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Full work history — from agentic AI infrastructure at Everstage to SLAM and sensor fusion research at MulticoreWare and IBM.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Work</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              The full timeline — from research interning to shipping{" "}
              <span className="text-iris">agent infrastructure</span> in
              production.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-ink-600 leading-relaxed">
              Four companies. Seven roles. One thread connecting them: getting
              models to behave in the real world — whether the model lives on a
              GPU cluster or an edge device.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-14 rounded-3xl border border-ink-100 bg-paper-card p-6 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                Career rail
              </p>
              <ol className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[...experiences].reverse().map((exp, i) => {
                  const types = Array.from(
                    new Set(exp.roles.map((r) => r.type)),
                  );
                  const typeLabel =
                    types.length > 1
                      ? types.slice().reverse().join(" → ")
                      : types[0];
                  return (
                    <li
                      key={exp.company}
                      className="relative flex items-center gap-4 sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:hidden sm:before:h-px sm:before:w-6 sm:before:-translate-x-full sm:before:bg-iris/40 lg:before:block"
                    >
                      {exp.logo && (
                        <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-2xl border border-ink-100 bg-paper-soft p-2">
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={40}
                            height={40}
                            className="h-full w-full object-contain"
                            unoptimized
                          />
                        </span>
                      )}
                      <div className="min-w-0">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                          {String(i + 1).padStart(2, "0")} ·{" "}
                          {exp.roles[exp.roles.length - 1].dates.split("—")[0].trim()}
                        </p>
                        <p className="mt-1 truncate font-serif text-lg text-ink-950">
                          {exp.company}
                        </p>
                        <p className="text-xs text-ink-500">
                          {exp.totalDuration}
                        </p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-iris-deep dark:text-iris">
                          {typeLabel}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </Reveal>

          <Asterism spacing="md" />
        </Container>
      </section>

      {experiences.map((exp, expIdx) => (
        <Section
          key={exp.company}
          tone={expIdx === 0 ? "soft" : expIdx % 2 === 1 ? "paper" : "warm"}
          id={exp.company.toLowerCase().replace(/\s+/g, "-")}
        >
          <Reveal>
            <div className="grid gap-6 md:grid-cols-12 md:items-baseline">
              <div className="md:col-span-4">
                <p className="text-xs uppercase tracking-[0.18em] text-iris">
                  0{expIdx + 1} · {exp.totalDuration}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  {exp.logo && (
                    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-ink-100 bg-paper-card p-2 shadow-sm">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                        unoptimized
                      />
                    </span>
                  )}
                  <h2 className="font-serif text-h2 text-ink-950">
                    {exp.href ? (
                      <Link
                        href={exp.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline inline-flex items-baseline gap-2"
                      >
                        {exp.company}
                        <ArrowUpRight size={18} className="text-iris" />
                      </Link>
                    ) : (
                      exp.company
                    )}
                  </h2>
                </div>
                <p className="mt-3 text-sm text-ink-600">
                  {exp.location} · {exp.locationType}
                </p>
              </div>

              <div className="md:col-span-8 md:border-l md:border-ink-100 md:pl-10">
                <div className="space-y-12">
                  {exp.roles.map((role, roleIdx) => (
                    <Reveal key={role.title} delay={0.05 * roleIdx}>
                      <article>
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-serif text-xl text-ink-950">
                            {role.title}
                          </h3>
                          <p className="text-xs text-ink-500">
                            {role.dates} · {role.duration}
                          </p>
                        </div>
                        <p className="mt-1 text-xs uppercase tracking-wider text-ink-400">
                          {role.type}
                        </p>
                        <ul className="mt-5 space-y-3">
                          {role.bullets.map((b) => (
                            <li
                              key={b}
                              className="grid grid-cols-[auto_1fr] gap-3 text-sm text-ink-700 leading-relaxed"
                            >
                              <span className="mt-2 inline-block h-1 w-1 rounded-full bg-iris" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {role.skills.map((s) => (
                            <Pill key={s}>{s}</Pill>
                          ))}
                        </div>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section>
        <Reveal>
          <div className="rounded-3xl border border-ink-100 bg-paper-card px-8 py-12 sm:px-12">
            <p className="text-xs uppercase tracking-[0.18em] text-iris">
              Where the curiosity comes from
            </p>
            <p className="mt-4 font-serif text-2xl text-ink-950 max-w-3xl leading-snug">
              I cut my teeth on SLAM, sensor fusion, and 3D reconstruction
              before LLMs took over my schedule. That earlier chapter still
              shapes how I reason about latency, drift, and ground truth.
            </p>
            <Link
              href="/research"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm text-ink-900 transition-colors hover:bg-ink-50"
            >
              See the research work
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

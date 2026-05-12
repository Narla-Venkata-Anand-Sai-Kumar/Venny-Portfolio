import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Award, Medal, Mic } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { PhotoCard } from "@/components/PhotoCard";
import { Asterism } from "@/components/Asterism";
import { HeroOrbit } from "@/components/HeroOrbit";
import {
  profile,
  education,
  certifications,
  leadership,
  techStack,
  awards,
} from "@/data/info";

const awardIcons = {
  trophy: Trophy,
  award: Award,
  medal: Medal,
  mic: Mic,
} as const;

export const metadata: Metadata = {
  title: "About",
  description: profile.about[0],
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-12 md:items-start">
            {/* Left column — eyebrow, title, lead, meta strip */}
            <div className="md:col-span-7">
              <Reveal>
                <Eyebrow>About</Eyebrow>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-serif text-hero text-ink-950 leading-tight">
                  I'm an AI engineer who likes the parts of the stack most
                  people skip past.
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl font-serif text-lg italic leading-relaxed text-ink-700">
                  Currently at Everstage in Coimbatore, building agentic AI and
                  the infrastructure beneath it. Before that — two years on the
                  computer-vision side: SLAM, sensor fusion, edge ML. I'm
                  always somewhere in the middle of those two stacks.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <dl className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
                  <div className="border-l-2 border-iris pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      Now
                    </dt>
                    <dd className="mt-2 font-serif text-base leading-tight text-ink-900">
                      {profile.title}
                      <span className="block text-sm text-ink-600">
                        {profile.company}
                      </span>
                    </dd>
                  </div>
                  <div className="border-l-2 border-iris/40 pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      Location
                    </dt>
                    <dd className="mt-2 font-serif text-base leading-tight text-ink-900">
                      {profile.location}
                      <span className="block text-sm text-ink-600">
                        works from {profile.workLocation}
                      </span>
                    </dd>
                  </div>
                  <div className="border-l-2 border-iris/40 pl-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-400">
                      Focus
                    </dt>
                    <dd className="mt-2 font-serif text-base leading-tight text-ink-900">
                      Agentic AI · LLM infra
                      <span className="block text-sm text-ink-600">
                        Eval · RAG · MCP · LangGraph
                      </span>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            {/* Right column — skills orbit animation */}
            <div className="md:col-span-5">
              <Reveal delay={0.2}>
                <HeroOrbit />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          <div className="md:col-span-7 space-y-6 font-serif text-lg text-ink-800 leading-relaxed">
            {profile.about.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <div className="md:col-span-5 md:sticky md:top-28">
            <Reveal delay={0.1}>
              <PhotoCard variant="portrait" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Tools of the trade — editorial categorized list */}
      <Section tone="soft" id="skills">
        <Reveal>
          <Eyebrow>Tools of the trade</Eyebrow>
          <SectionTitle>The stack I reach for first.</SectionTitle>
        </Reveal>

        <div className="mt-12 border-y border-ink-100">
          {techStack.map((row, i) => {
            const isPast = row.era === "Earlier";
            return (
              <Reveal key={row.category} delay={0.04 * i}>
                <article
                  className={`grid gap-6 py-9 md:grid-cols-12 md:items-baseline ${
                    i !== 0 ? "border-t border-ink-100" : ""
                  }`}
                >
                  {/* Category meta */}
                  <div className="md:col-span-4">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em]">
                      <span className="text-ink-400">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden className="mx-2 text-ink-300">/</span>
                      <span
                        className={
                          isPast
                            ? "text-ink-500"
                            : "text-iris-deep dark:text-iris"
                        }
                      >
                        {row.era}
                      </span>
                    </p>
                    <h3 className="mt-3 font-serif text-2xl leading-tight text-ink-950 sm:text-[1.75rem]">
                      {row.category}
                    </h3>
                    <p className="mt-2 max-w-xs font-serif text-xs italic text-ink-500">
                      {row.tagline}
                    </p>
                  </div>

                  {/* Tools as dot-separated serif text */}
                  <div className="md:col-span-8">
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-serif text-base leading-relaxed text-ink-800">
                      {row.tools.map((t, idx) => (
                        <span key={t.name + idx} className="inline-flex items-center gap-2">
                          {idx > 0 && (
                            <span aria-hidden className="text-ink-300">·</span>
                          )}
                          <span>{t.name}</span>
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Education — richer cards with specialization + highlights */}
      <Section id="education">
        <Reveal>
          <Eyebrow>Education</Eyebrow>
          <SectionTitle>Where I learned the fundamentals.</SectionTitle>
        </Reveal>

        <div className="mt-12 border-y border-ink-100">
          {education.map((e, i) => (
            <Reveal key={e.institution} delay={0.05 * i}>
              <article
                className={`grid gap-6 py-10 md:grid-cols-12 md:items-start ${
                  i !== 0 ? "border-t border-ink-100" : ""
                }`}
              >
                {/* Date + location */}
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-iris-deep dark:text-iris">
                    {e.dates}
                  </p>
                  <p className="mt-3 text-sm text-ink-600">{e.location}</p>
                </div>

                {/* Institution + details */}
                <div className="md:col-span-9">
                  <h3 className="font-serif text-2xl leading-tight text-ink-950 sm:text-[1.75rem]">
                    {e.institution}
                  </h3>
                  <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="font-serif text-base text-ink-700">
                      {e.degree}
                    </p>
                    {e.specialization && (
                      <p className="text-sm italic text-ink-500">
                        · {e.specialization}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 inline-flex items-center rounded-full border border-iris/30 bg-iris-wash px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-iris-deep dark:bg-iris/15 dark:text-iris">
                    {e.grade}
                  </p>

                  {/* Description */}
                  {"description" in e && e.description && (
                    <p className="mt-5 max-w-prose font-serif text-sm italic leading-relaxed text-ink-600">
                      {e.description}
                    </p>
                  )}

                  {/* Skills line */}
                  {"skills" in e && e.skills && e.skills.length > 0 && (
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
                      <span className="text-ink-400">Skills</span>
                      <span aria-hidden className="mx-2 text-ink-300">·</span>
                      {e.skills.map((s, idx) => (
                        <span key={s}>
                          {idx > 0 && (
                            <span aria-hidden className="mx-2 text-ink-300">
                              ·
                            </span>
                          )}
                          <span
                            className={
                              s.startsWith("+")
                                ? "text-ink-400"
                                : "text-ink-700"
                            }
                          >
                            {s}
                          </span>
                        </span>
                      ))}
                    </p>
                  )}

                  {/* Highlights */}
                  {e.highlights && e.highlights.length > 0 && (
                    <ul className="mt-6 grid max-w-prose gap-2.5">
                      {e.highlights.map((h) => (
                        <li
                          key={h}
                          className="grid grid-cols-[auto_1fr] items-baseline gap-3 text-sm leading-relaxed text-ink-700"
                        >
                          <span
                            aria-hidden
                            className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-iris"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section tone="warm" id="leadership">
        <Reveal>
          <Eyebrow>Community & leadership</Eyebrow>
          <SectionTitle>Building rooms, not just code.</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.org} delay={0.05 * i}>
              <article className="h-full rounded-2xl border border-ink-100 bg-paper-card p-7">
                <p className="text-xs uppercase tracking-wider text-iris">{l.role}</p>
                <h3 className="mt-2 font-serif text-lg text-ink-950">{l.org}</h3>
                <p className="mt-1 text-xs text-ink-500">{l.dates}</p>
                <p className="mt-4 text-sm text-ink-600 leading-relaxed">{l.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Recognition — editorial list */}
      <Section id="recognition">
        <Reveal>
          <Eyebrow>Recognition</Eyebrow>
          <SectionTitle>
            Hackathon wins, podium finishes, and the occasional speaker invite.
          </SectionTitle>
        </Reveal>

        <div className="mt-12 border-y border-ink-100">
          {awards.map((a, i) => {
            const Icon = awardIcons[a.iconKey as keyof typeof awardIcons];
            return (
              <Reveal key={a.title} delay={0.05 * i}>
                <article
                  className={`group grid gap-6 py-9 transition-colors sm:py-10 md:grid-cols-12 md:items-baseline ${
                    i !== 0 ? "border-t border-ink-100" : ""
                  }`}
                >
                  <div className="md:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-iris-deep dark:text-iris">
                      {a.date}
                    </p>
                    <p className="mt-2 text-sm text-ink-600">{a.org}</p>
                  </div>
                  <div className="md:col-span-7">
                    <h3 className="font-serif text-2xl leading-tight text-ink-950 sm:text-3xl">
                      {a.title}
                    </h3>
                    <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink-600">
                      {a.body}
                    </p>
                  </div>
                  <div className="md:col-span-2 md:text-right">
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-500 transition-colors group-hover:text-iris-deep dark:group-hover:text-iris">
                      {Icon && <Icon size={14} strokeWidth={1.75} />}
                      {a.placement}
                    </span>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Certifications */}
      <Section tone="soft" id="certifications">
        <Reveal>
          <Eyebrow>Certifications</Eyebrow>
          <SectionTitle>Verified credentials.</SectionTitle>
        </Reveal>
        <div className="mt-12 divide-y divide-ink-100 border-y border-ink-100">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i}>
              <article className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
                <div className="md:col-span-3 text-sm text-ink-500">{c.date}</div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-lg text-ink-950">{c.name}</h3>
                  <p className="mt-1 text-sm text-ink-600">{c.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-ink-400">
                    {c.credentialId}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12">
            <Link href="/contact" className="link-underline text-iris-deep text-sm">
              Want to chat? Get in touch →
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

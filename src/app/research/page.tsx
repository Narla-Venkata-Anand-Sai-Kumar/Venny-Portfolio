import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, FileText } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { Asterism } from "@/components/Asterism";
import { researchWork, publications } from "@/data/info";
import { repoOgImage } from "@/lib/github";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Earlier work in computer vision, SLAM, sensor fusion, and 3D reconstruction at MulticoreWare and IBM — plus IEEE publications.",
};

export default function ResearchPage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Earlier chapter</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              Before the LLMs — <span className="text-iris">SLAM,</span> sensor
              fusion, and getting models to behave on edge devices.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-prose space-y-5 font-serif text-lg text-ink-800 leading-relaxed">
              <p>
                For almost two years across MulticoreWare and IBM, my focus was
                computer vision under real-world constraints — SLAM pipelines
                with ORB-SLAM3, sensor fusion with IMU and GPS, point-cloud
                segmentation, and edge-deployed detectors running at 47+ FPS on
                a Flask API.
              </p>
              <p>
                Today I work on agentic AI infrastructure. But the lessons from
                that earlier chapter — drift, latency budgets, ground-truth
                discipline — still sit underneath every evaluation framework I
                design at Everstage.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Publications */}
      <Section tone="soft" id="publications">
        <Reveal>
          <Eyebrow>Publications</Eyebrow>
          <SectionTitle>Peer-reviewed work on IEEE Xplore.</SectionTitle>
        </Reveal>
        <div className="mt-12 divide-y divide-ink-100 border-y border-ink-100">
          {publications.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <article className="grid gap-3 py-8 md:grid-cols-12 md:items-start">
                <div className="md:col-span-3 text-sm text-ink-500">
                  <p>{p.venue}</p>
                  <p className="mt-1 text-xs text-ink-400">{p.date}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="font-serif text-xl text-ink-950 leading-snug">
                    {p.title}
                  </h3>
                  {"doi" in p && p.doi && (
                    <p className="mt-2 font-mono text-xs text-ink-400">
                      DOI: {p.doi}
                    </p>
                  )}
                  {"href" in p && p.href && (
                    <Link
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-iris-deep link-underline"
                    >
                      <FileText size={14} />
                      Read on IEEE Xplore
                      <ArrowUpRight size={14} />
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Container>
        <Asterism />
      </Container>

      {/* Research projects grid */}
      <Section id="projects">
        <Reveal>
          <Eyebrow>Research projects</Eyebrow>
          <SectionTitle>SLAM, 3D, and computer-vision work.</SectionTitle>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchWork.map((p, i) => {
            const og = repoOgImage(p.repo);
            return (
              <Reveal key={p.name} delay={0.04 * i}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-paper-card transition-colors hover:border-iris/30">
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
                      <span className="font-serif text-ink-700 italic">
                        {p.name}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline justify-between">
                      <p className="text-xs uppercase tracking-wider text-ink-500">
                        {p.year}
                      </p>
                      {p.repo && (
                        <Link
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-ink-400 hover:text-ink-900"
                          aria-label={`${p.name} repository`}
                        >
                          <Github size={14} />
                        </Link>
                      )}
                    </div>
                    <h3 className="mt-2 font-serif text-lg text-ink-950">{p.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-ink-600 leading-relaxed">
                      {p.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <Pill key={s}>{s}</Pill>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="warm">
        <Reveal>
          <div className="grid gap-6 rounded-3xl border border-ink-100 bg-paper-card px-8 py-12 sm:px-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="text-xs uppercase tracking-[0.18em] text-iris">
                Author profiles
              </p>
              <p className="mt-3 font-serif text-2xl text-ink-950 leading-snug max-w-2xl">
                Follow the citation trail across IEEE Xplore and Google
                Scholar.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap gap-3">
              <Link
                href="https://ieeexplore.ieee.org/author/37089692728"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-900 hover:bg-ink-50"
              >
                IEEE Xplore
                <ArrowUpRight size={14} />
              </Link>
              <Link
                href="https://scholar.google.com/citations?user=l0j-Ip0AAAAJ&hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-900 hover:bg-ink-50"
              >
                Google Scholar
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow } from "@/components/Section";
import { Asterism } from "@/components/Asterism";
import { StatStrip } from "@/components/StatStrip";
import { projects, profile } from "@/data/info";
import { ProjectExplorer } from "./ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected GenAI applications, agentic prototypes, and tooling.",
};

export default function ProjectsPage() {
  const total = projects.length;
  const featuredCount = projects.filter((p) => p.featured).length;
  const kinds = Array.from(new Set(projects.map((p) => p.kind)));
  // Reflects the full span of public GitHub activity, not just curated items
  const yearSpan = "2023 – 2026";

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Projects</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              Shipped, prototyped, and{" "}
              <span className="text-iris-deep dark:text-iris">
                occasionally archived.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-ink-600 leading-relaxed">
              A working catalogue of GenAI apps, agentic prototypes, and the
              tooling around them. Filter by category — every card links
              straight to its source on GitHub.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-12">
              <StatStrip
                stats={[
                  {
                    value: String(profile.githubRepoCount),
                    label: "Public repos",
                    hint: "github.com/Narla-Venkata-Anand-Sai-Kumar",
                  },
                  {
                    value: String(total),
                    label: "Featured here",
                    hint: "Curated for this page",
                  },
                  {
                    value: String(kinds.length),
                    label: "Categories",
                    hint: kinds.join(" · "),
                  },
                  {
                    value: yearSpan,
                    label: "Active years",
                    hint: `${featuredCount} marked as featured`,
                  },
                ]}
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Asterism />
      </Container>

      {/* Filterable project grid */}
      <ProjectExplorer projects={projects} />

      <Container>
        <Asterism />
      </Container>

      {/* CTA — more on GitHub */}
      <Section>
        <Reveal>
          <Link
            href="https://github.com/Narla-Venkata-Anand-Sai-Kumar"
            target="_blank"
            rel="noreferrer"
            className="group grid gap-6 overflow-hidden rounded-3xl border border-ink-100 bg-paper-card p-8 transition-all hover:border-iris/30 hover:shadow-[0_18px_50px_-20px_rgba(0,0,0,0.1)] sm:p-12 md:grid-cols-12 md:items-center"
          >
            <div className="md:col-span-1 hidden md:flex md:justify-center">
              <span
                aria-hidden
                className="grid h-14 w-14 place-items-center rounded-full bg-iris-wash text-iris-deep transition-colors group-hover:bg-iris group-hover:text-ink-950 dark:bg-iris/15 dark:text-iris dark:group-hover:bg-iris dark:group-hover:text-ink-950"
              >
                <Github size={22} />
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-iris-deep dark:text-iris">
                More on GitHub
              </p>
              <h2 className="mt-3 font-serif text-2xl leading-snug text-ink-950 sm:text-3xl">
                40+ repositories — SLAM forks, learning kits, and weekend
                experiments live alongside the work above.
              </h2>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-500">
                @ {profile.short.toLowerCase()} ·
                Narla-Venkata-Anand-Sai-Kumar
              </p>
            </div>
            <div className="md:col-span-3 md:justify-self-end">
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm text-paper transition-colors group-hover:bg-iris group-hover:text-ink-950 dark:bg-iris dark:text-ink-950 dark:group-hover:bg-iris-deep">
                Browse on GitHub
                <ArrowUpRight size={16} />
              </span>
            </div>
          </Link>
        </Reveal>
      </Section>
    </>
  );
}

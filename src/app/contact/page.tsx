import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow } from "@/components/Section";
import { Asterism } from "@/components/Asterism";
import { profile, socials } from "@/data/info";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about agentic AI, LLM infrastructure, or anything else.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-24 pb-12 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Contact</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              Say hello — about{" "}
              <span className="text-iris">agents, evaluation, or anything</span>{" "}
              you're shipping.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-ink-600 leading-relaxed">
              The fastest path is email. I read every note and reply within a
              day or two.
            </p>
          </Reveal>
        </Container>
      </section>

      <Section tone="soft">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7 rounded-3xl border border-ink-100 bg-paper-card p-10">
              {profile.openToWork && (
                <span className="inline-flex items-center gap-2 rounded-full border border-iris/30 bg-iris-wash px-4 py-2 text-xs font-medium text-iris-deep">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris animate-pulse" />
                  Currently open to new work
                </span>
              )}
              <p className="mt-6 font-serif text-2xl text-ink-950 leading-snug">
                Drop a note about agentic AI, LLM infrastructure, evaluation
                tooling, or a collaboration you have in mind.
              </p>
              <div className="mt-8 space-y-4">
                <Link
                  href={`mailto:${profile.emailPersonal}`}
                  className="flex items-center gap-3 text-base text-ink-900 link-underline"
                >
                  <Mail size={18} className="text-iris" />
                  {profile.emailPersonal}
                </Link>
                <p className="flex items-center gap-3 text-sm text-ink-600">
                  <MapPin size={18} className="text-iris" />
                  {profile.location} · {profile.workLocation}
                </p>
              </div>
              <Link
                href={`mailto:${profile.emailPersonal}`}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 dark:bg-iris dark:text-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:hover:bg-iris-deep"
              >
                Send an email
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <aside className="md:col-span-5 rounded-3xl border border-ink-100 bg-paper-card p-10">
              <p className="text-xs uppercase tracking-[0.18em] text-iris">
                Elsewhere
              </p>
              <ul className="mt-6 divide-y divide-ink-100">
                {socials.map((s) => (
                  <li key={s.label}>
                    <Link
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between gap-3 py-4 text-base text-ink-900 hover:text-iris"
                    >
                      <span>{s.label}</span>
                      <ArrowUpRight
                        size={16}
                        className="text-ink-400 group-hover:text-iris"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Reveal>
      </Section>

      <Container>
        <Asterism />
      </Container>

      <Section>
        <Reveal>
          <div className="rounded-3xl border border-dashed border-ink-200 bg-transparent px-8 py-12 sm:px-12">
            <p className="text-xs uppercase tracking-[0.18em] text-ink-500">
              Slow medium
            </p>
            <p className="mt-3 font-serif text-2xl text-ink-950 leading-snug max-w-2xl">
              I write occasionally on LinkedIn — recently about the real cost
              economics behind LLM infrastructure. If you'd rather follow than
              email, that's a good place to start.
            </p>
            <Link
              href="https://www.linkedin.com/in/narla-venkata-anand-sai-kumar"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm text-iris-deep link-underline"
            >
              Follow on LinkedIn
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

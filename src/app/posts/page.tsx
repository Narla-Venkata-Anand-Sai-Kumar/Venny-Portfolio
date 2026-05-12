import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Heart, Eye, Hash } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { Section, Eyebrow, SectionTitle } from "@/components/Section";
import { Pill } from "@/components/Pill";
import { Asterism } from "@/components/Asterism";
import { StatStrip } from "@/components/StatStrip";
import { posts, postsAggregate, postTopics, profile } from "@/data/info";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on agentic AI, LLM infrastructure, evaluation, and the day-to-day of building at Everstage.",
};

const linkedinFeed =
  "https://www.linkedin.com/in/narla-venkata-anand-sai-kumar/recent-activity/all/";

export default function PostsPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <>
      <section className="pt-24 pb-12 sm:pt-32">
        <Container>
          <Reveal>
            <Eyebrow>Writing</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-serif text-hero text-ink-950 max-w-3xl leading-tight">
              Working notes from inside the{" "}
              <span className="text-iris">agentic-AI build.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base text-ink-600 leading-relaxed">
              I publish on LinkedIn — short essays on what I'm learning as I
              build LLM infrastructure at Everstage. No newsletter, no Substack,
              no plan to start one. Just notes that occasionally land.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={linkedinFeed}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 dark:bg-iris dark:text-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:hover:bg-iris-deep"
              >
                Follow on LinkedIn
                <ArrowUpRight size={16} />
              </Link>
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                @ narla-venkata-anand-sai-kumar
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Asterism />
      </Container>

      {/* Featured post */}
      <Section tone="soft" id="featured">
        <Reveal>
          <Eyebrow>Featured</Eyebrow>
          <SectionTitle>The most-quoted piece from the past year.</SectionTitle>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="mt-12 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7 rounded-3xl border border-ink-100 bg-paper-card p-10 sm:p-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                Essay · {featured.date} · LinkedIn
              </p>
              <h2 className="mt-5 font-serif text-h2 text-ink-950 leading-tight">
                {featured.title}
              </h2>
              <p className="mt-6 font-serif text-lg italic text-ink-700 leading-relaxed">
                "{featured.excerpt}"
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.topics.map((t) => (
                  <Pill key={t} tone="iris">
                    <Hash size={11} className="-ml-0.5 mr-1" />
                    {t}
                  </Pill>
                ))}
              </div>
              <Link
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm text-ink-900 transition-colors hover:bg-ink-50"
              >
                Read on LinkedIn
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <aside className="md:col-span-5 space-y-6">
              <div className="rounded-3xl border border-ink-100 bg-paper-card p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                  Engagement
                </p>
                <div className="mt-6 space-y-5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-serif text-4xl leading-none text-ink-950">
                        {featured.impressions.toLocaleString()}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-500">
                        Impressions
                      </p>
                    </div>
                    <Eye size={28} className="text-iris/60" />
                  </div>
                  <div className="h-px bg-ink-100" />
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="font-serif text-4xl leading-none text-ink-950">
                        {featured.reactions}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-ink-500">
                        Reactions
                      </p>
                    </div>
                    <Heart size={28} className="text-iris/60" />
                  </div>
                </div>
                <p className="mt-8 font-serif text-xs italic text-ink-500">
                  Published {featured.relative} · still circulating in
                  agentic-AI circles.
                </p>
              </div>

              <div className="rounded-3xl border border-dashed border-ink-200 p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                  Quotable line
                </p>
                <p className="mt-4 font-serif text-lg italic text-ink-800 leading-snug">
                  "Cost is the quiet axis behind every LLM-infra decision."
                </p>
              </div>
            </aside>
          </article>
        </Reveal>
      </Section>

      <Container>
        <Asterism />
      </Container>

      {/* Topics */}
      <Section id="topics">
        <Reveal>
          <Eyebrow>What I write about</Eyebrow>
          <SectionTitle>
            Six recurring threads — pick whichever one made you click here.
          </SectionTitle>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {postTopics.map((t, i) => (
              <div
                key={t}
                className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-paper-card p-5 transition-colors hover:border-iris/30"
              >
                <span
                  aria-hidden
                  className="font-serif text-2xl text-iris/60 transition-colors group-hover:text-iris"
                >
                  ❋
                </span>
                <div>
                  <p className="font-serif text-base text-ink-950">{t}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-ink-400">
                    Thread {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Aggregate */}
      <Section tone="warm" id="aggregate">
        <Reveal>
          <Eyebrow>The numbers</Eyebrow>
          <SectionTitle>A quiet, compounding feed.</SectionTitle>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-14">
            <StatStrip
              stats={[
                {
                  value: String(postsAggregate.posts),
                  label: "Original posts",
                  hint: postsAggregate.spanLabel,
                },
                {
                  value: postsAggregate.totalImpressions,
                  label: "Total impressions",
                  hint: "across the feed",
                },
                {
                  value: postsAggregate.totalReactions,
                  label: "Reactions",
                  hint: "no buying followers",
                },
                {
                  value: postsAggregate.topPost.impressions,
                  label: "Top post",
                  hint: `${postsAggregate.topPost.reactions} reactions · ${postsAggregate.topPost.when}`,
                },
              ]}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-ink-100 bg-paper-card p-10">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              <div className="md:col-span-1 hidden md:flex md:justify-center">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-iris-wash text-iris-deep">
                  <BookOpen size={20} />
                </span>
              </div>
              <div className="md:col-span-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
                  Activity feed · LinkedIn
                </p>
                <p className="mt-3 font-serif text-xl text-ink-950 leading-snug">
                  Posts roll out on a slow cadence — the activity feed is the
                  best place to catch the latest thread.
                </p>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">
                  Reposts of {profile.short ? `${profile.short}'s` : ""} community
                  work (KARE Open Source Society, KARE IEEE Robotics & Automation
                  Society) also live there alongside the original essays.
                </p>
              </div>
              <div className="md:col-span-4 md:justify-self-end">
                <Link
                  href={linkedinFeed}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-950 dark:bg-iris dark:text-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:hover:bg-iris-deep"
                >
                  Open the feed
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Container>
        <Asterism />
      </Container>

      {/* CTA */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-ink-100 bg-paper-card px-8 py-16 sm:px-16 sm:py-20 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-iris">
              Have a topic you want me to write about?
            </p>
            <h2 className="mt-6 font-serif text-hero text-ink-950 leading-tight max-w-3xl mx-auto">
              Send the prompt. I keep a running list.
            </h2>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink-950 dark:bg-iris dark:text-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:hover:bg-iris-deep"
            >
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

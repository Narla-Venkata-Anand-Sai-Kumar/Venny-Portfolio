import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <Container>
        <p className="text-xs uppercase tracking-[0.18em] text-iris">404</p>
        <h1 className="mt-4 font-serif text-hero text-ink-950 max-w-3xl leading-tight">
          That page wandered off. Want to <span className="text-iris">start over?</span>
        </h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm text-paper transition-colors hover:bg-iris hover:text-ink-950 dark:bg-iris dark:text-ink-950 dark:hover:bg-iris-deep"
          >
            Back home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-5 py-3 text-sm text-ink-900 hover:bg-ink-50"
          >
            See my work
          </Link>
        </div>
      </Container>
    </section>
  );
}

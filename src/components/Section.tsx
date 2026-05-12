import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({
  children,
  className,
  containerWidth = "page",
  id,
  tone = "paper",
}: {
  children: React.ReactNode;
  className?: string;
  containerWidth?: "prose" | "page";
  id?: string;
  tone?: "paper" | "soft" | "warm";
}) {
  const bg =
    tone === "soft"
      ? "bg-paper-soft"
      : tone === "warm"
      ? "bg-paper-warm/40"
      : "bg-transparent";
  return (
    <section id={id} className={cn("relative py-10 sm:py-14", bg, className)}>
      <Container width={containerWidth}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-ink-500">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-iris" aria-hidden />
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-h2 text-ink-950 leading-tight max-w-2xl">{children}</h2>
  );
}

export function SectionLead({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-2xl text-base text-ink-600 leading-relaxed">{children}</p>;
}

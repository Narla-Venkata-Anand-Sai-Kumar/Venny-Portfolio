import { cn } from "@/lib/cn";

export function Pill({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: "muted" | "iris" | "ink";
  className?: string;
}) {
  const toneClasses =
    tone === "iris"
      ? "border-iris/30 bg-iris-wash text-iris-deep"
      : tone === "ink"
      ? "border-ink-200 bg-ink-50 text-ink-900"
      : "border-ink-100 bg-paper-card text-ink-700";
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        toneClasses,
        className,
      )}
    >
      {children}
    </span>
  );
}

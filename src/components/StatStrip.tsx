import { cn } from "@/lib/cn";

export type Stat = {
  value: string;
  unit?: string;
  label: string;
  hint?: string;
};

export function StatStrip({
  stats,
  className,
}: {
  stats: Stat[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-2 gap-y-10 sm:grid-cols-4",
        className,
      )}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={cn(
            "relative pl-6",
            i !== 0 && "sm:before:absolute sm:before:left-0 sm:before:top-1 sm:before:h-12 sm:before:w-px sm:before:bg-ink-100",
          )}
        >
          <p className="font-serif text-4xl leading-none text-ink-950">
            {s.value}
            {s.unit && (
              <span className="ml-1 font-serif text-base text-ink-500">
                {s.unit}
              </span>
            )}
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-ink-500">
            {s.label}
          </p>
          {s.hint && (
            <p className="mt-1.5 font-serif text-xs italic text-ink-400">
              {s.hint}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

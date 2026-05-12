import { cn } from "@/lib/cn";

export function Asterism({
  className,
  spacing = "lg",
}: {
  className?: string;
  spacing?: "sm" | "md" | "lg";
}) {
  const pad =
    spacing === "sm" ? "py-6" : spacing === "md" ? "py-10" : "py-14";
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center", pad, className)}
    >
      <svg
        viewBox="0 0 60 20"
        className="h-3 w-16 fill-iris/70"
        role="presentation"
      >
        <circle cx="6" cy="10" r="2.5" />
        <circle cx="30" cy="10" r="2.5" />
        <circle cx="54" cy="10" r="2.5" />
      </svg>
    </div>
  );
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 12"
      className={cn("h-3 w-20 stroke-iris/70", className)}
      fill="none"
    >
      <path
        d="M2 6 Q 10 1, 18 6 T 34 6 T 50 6 T 66 6 T 78 6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Bullet({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("inline-block h-1.5 w-1.5 rounded-full bg-iris", className)}
    />
  );
}

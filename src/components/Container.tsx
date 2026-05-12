import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
  width = "page",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "prose" | "page";
}) {
  return (
    <div
      className={cn(
        "mx-auto px-6 sm:px-8 lg:px-12",
        width === "prose" ? "max-w-prose" : "max-w-page",
        className,
      )}
    >
      {children}
    </div>
  );
}

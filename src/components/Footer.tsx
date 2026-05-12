import Link from "next/link";
import { socials, profile } from "@/data/info";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 mt-10 border-t border-ink-100 bg-paper-soft">
      <div className="mx-auto max-w-page px-6 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-serif text-2xl text-ink-950 leading-snug">
              Want to build something{" "}
              <span className="text-iris">in agentic AI?</span>
            </p>
            <p className="mt-2 text-sm text-ink-600">
              {profile.openToWork ? "Open to work · " : ""}
              <Link
                href={`mailto:${profile.emailPersonal}`}
                className="link-underline text-ink-900"
              >
                {profile.emailPersonal}
              </Link>
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline text-ink-700 hover:text-ink-950"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. Crafted in {profile.workLocation}.
          </p>
        </div>
      </div>
    </footer>
  );
}

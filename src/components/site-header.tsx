import Link from "next/link";

const nav = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/showcase/", label: "Student Work" },
  { href: "/give/", label: "Give" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_oklab,var(--color-cream)_85%,transparent)] border-b border-[var(--color-tan)]">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          aria-label="EDXR home"
          className="group flex items-center gap-2.5"
        >
          <Logo />
          <span className="font-display text-xl font-semibold tracking-tight">
            EDXR
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mt-1.5">
            ed&middot;x&middot;r
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-grow text-sm font-medium tracking-tight hover:text-[var(--color-terracotta-dark)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/give/"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-4 py-2 text-sm font-medium hover:bg-[var(--color-terracotta-dark)] transition-colors"
        >
          Support a student
          <span aria-hidden>→</span>
        </Link>

        {/* Mobile: simple link to give for now */}
        <Link
          href="/give/"
          className="md:hidden inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-3 py-1.5 text-xs font-medium"
        >
          Give
        </Link>
      </div>
    </header>
  );
}

function Logo() {
  // A tiny SVG mark — circle (community) intersected by a slanted bar (the "X" of XR).
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle
        cx="14"
        cy="14"
        r="11"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
      />
      <path
        d="M5 19 L23 9"
        stroke="var(--color-terracotta)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="14" cy="14" r="2.4" fill="var(--color-teal)" />
    </svg>
  );
}

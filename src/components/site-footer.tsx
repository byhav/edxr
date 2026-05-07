import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--color-tan)] bg-[var(--color-parchment)]">
      <div className="mx-auto max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl font-medium tracking-tight max-w-md">
            Educational experiences that <em className="font-display-italic">move people.</em>
          </p>
          <p className="mt-4 text-[var(--color-ink-soft)] max-w-md">
            EDXR is a 501(c)(3) nonprofit. Your gift directly funds student
            scholarships and community-facing learning experiences.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about/" className="underline-grow">About</Link></li>
            <li><Link href="/projects/" className="underline-grow">Projects</Link></li>
            <li><Link href="/showcase/" className="underline-grow">Student Work</Link></li>
            <li><Link href="/give/" className="underline-grow">Give</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-4">
            Connect
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hello@edxr.io"
                className="underline-grow"
              >
                hello@edxr.io
              </a>
            </li>
            <li className="text-[var(--color-ink-soft)]">
              EIN available on request
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-tan)]">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-ink-soft)]">
          <span>&copy; {new Date().getFullYear()} EDXR — A 501(c)(3) nonprofit</span>
          <span>edxr.io</span>
        </div>
      </div>
    </footer>
  );
}

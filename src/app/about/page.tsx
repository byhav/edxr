import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "EDXR is a faculty-and-student team designing educational experiences in VR/AR, video, AI, and making. We are a 501(c)(3) nonprofit.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <p className="sticker rise">About EDXR</p>
        <h1
          className="rise font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight mt-6"
          style={{ animationDelay: "120ms" }}
        >
          We design learning that{" "}
          <em className="font-display-italic">
            <span className="marker">sticks.</span>
          </em>
        </h1>
        <p
          className="rise mt-8 text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-2xl"
          style={{ animationDelay: "220ms" }}
        >
          EDXR — pronounced &ldquo;ed&middot;x&middot;r&rdquo; — is a team of faculty and
          students creating educational experiences and artifacts that enhance
          teaching and learning. We&rsquo;re an independent 501(c)(3) nonprofit, separate
          from any university.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 border-t border-[var(--color-tan)] pt-12">
          <ValueBlock
            label="Mission"
            title="Better learning, made together."
            body="We partner with educators and community organizations to make immersive, video, AI, and maker-driven experiences that work in real classrooms."
          />
          <ValueBlock
            label="Method"
            title="Faculty alongside students."
            body="Every project is co-built. Faculty bring discipline expertise; students bring fresh fluency and craft. Both leave better for it."
          />
          <ValueBlock
            label="Standards"
            title="ISTE-aligned by design."
            body="Curriculum assets we ship are built against ISTE standards so partners can adopt them with confidence."
          />
        </div>
      </section>

      <section className="bg-[var(--color-parchment)] border-y border-[var(--color-tan)] mt-12">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-6">
            How we work
          </h2>
          <div className="space-y-8">
            <Step
              n="01"
              title="Listen"
              body="Every project starts with a teaching problem. We sit with faculty or partners until we understand what students need to learn — and where the friction is."
            />
            <Step
              n="02"
              title="Prototype"
              body="We build small, fast. A 5-minute VR demo, a single AI workflow, a printable kit. Real students try it. We learn what to keep."
            />
            <Step
              n="03"
              title="Ship"
              body="Finished assets are documented, ISTE-aligned, and handed off so they keep teaching long after we're gone."
            />
            <Step
              n="04"
              title="Mentor"
              body="Through it all, students lead. They ship credited work, build portfolios, and graduate into careers they can point to and explain."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
          Independent, on{" "}
          <em className="font-display-italic">purpose.</em>
        </h2>
        <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-2xl">
          EDXR operates as a 501(c)(3) nonprofit, separate from the university.
          That structure lets us partner broadly — with K–12 districts, community
          organizations, and university faculty alike — and keeps gifts to students
          tax-deductible and direct.
        </p>
        <Link
          href="/give/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-terracotta-dark)] transition-colors"
        >
          Support a student
          <span aria-hidden>→</span>
        </Link>
      </section>
    </>
  );
}

function ValueBlock({
  label,
  title,
  body,
}: {
  label: string;
  title: string;
  body: string;
}) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-3">
        {label}
      </p>
      <h3 className="font-display text-2xl tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
        {body}
      </p>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-6 items-start">
      <span className="font-display text-5xl tracking-tight text-[var(--color-terracotta)] leading-none">
        {n}
      </span>
      <div className="pt-2">
        <h3 className="font-display text-2xl tracking-tight mb-2">{title}</h3>
        <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-2xl">
          {body}
        </p>
      </div>
    </div>
  );
}

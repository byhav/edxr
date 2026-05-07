import Link from "next/link";
import { PillarCard } from "@/components/pillar-card";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden">
        {/* Decorative annotation arrow */}
        <svg
          aria-hidden
          className="absolute right-[8%] top-32 hidden lg:block"
          width="140"
          height="100"
          viewBox="0 0 140 100"
          fill="none"
        >
          <path
            d="M5 60 C 35 10, 80 10, 125 38"
            stroke="var(--color-terracotta)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 5"
          />
          <path
            d="M118 31 L 127 38 L 118 47"
            stroke="var(--color-terracotta)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="20"
            y="80"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--color-ink-soft)"
            transform="rotate(-4 20 80)"
          >
            faculty + students
          </text>
        </svg>

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="rise sticker" style={{ animationDelay: "60ms" }}>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-teal)" }}
              aria-hidden
            />
            Educational XR · Video · AI · Making
          </p>

          <h1
            className="rise font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight mt-6 max-w-5xl"
            style={{ animationDelay: "140ms" }}
          >
            Educational experiences that{" "}
            <em className="font-display-italic">
              <span className="marker">move people.</span>
            </em>
          </h1>

          <p
            className="rise mt-8 text-lg md:text-xl text-[var(--color-ink-soft)] max-w-2xl leading-relaxed"
            style={{ animationDelay: "240ms" }}
          >
            EDXR is a faculty-and-student team building VR/AR experiences,
            video, AI integrations, and maker-driven curriculum — together with
            educators and community partners. We are a 501(c)(3) nonprofit.
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "340ms" }}
          >
            <Link
              href="/projects/"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-terracotta-dark)] transition-colors"
            >
              See what we&rsquo;re building
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/give/"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-ink)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
            >
              Support a student
            </Link>
          </div>

          {/* Statline — gives the page texture without a hero image */}
          <dl className="rise mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 max-w-4xl pt-10 border-t border-[var(--color-tan)]"
              style={{ animationDelay: "440ms" }}>
            <Stat n="4" label="Practice areas" />
            <Stat n="ISTE" label="Aligned curriculum" />
            <Stat n="501(c)(3)" label="Independent nonprofit" />
            <Stat n="100%" label="of gifts to students" />
          </dl>
        </div>
      </section>

      {/* ============================ PILLARS ============================ */}
      <section className="bg-[var(--color-parchment)] border-y border-[var(--color-tan)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-3">
                What we do
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight max-w-2xl">
                Four practices,{" "}
                <em className="font-display-italic">one mission.</em>
              </h2>
            </div>
            <p className="text-[var(--color-ink-soft)] max-w-md">
              Each practice exists to enhance teaching and learning — for K–12
              partners, university faculty, and the community.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <PillarCard
              number="01"
              title="VR & AR"
              description="Immersive experiences for classrooms, labs, and field study — built on consumer headsets and mobile devices."
              accent="teal"
            />
            <PillarCard
              number="02"
              title="Video Production"
              description="Documentary, instructional, and short-form video — produced and edited by EDXR students for real audiences."
              accent="terracotta"
            />
            <PillarCard
              number="03"
              title="AI Integration"
              description="Hands-on workshops and toolkits helping faculty and community partners use AI thoughtfully and well."
              accent="honey"
            />
            <PillarCard
              number="04"
              title="Making"
              description="3D printing, laser engraving, and CNC woven into ISTE-aligned curriculum assets."
              accent="ink"
            />
          </div>
        </div>
      </section>

      {/* ============================ FEATURED PROJECTS ============================ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-3">
              In the studio
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              What we&rsquo;re{" "}
              <em className="font-display-italic">
                <span className="marker-teal">building now</span>
              </em>
              .
            </h2>
          </div>
          <Link
            href="/projects/"
            className="underline-grow text-sm font-medium self-start md:self-end"
          >
            All projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ============================ GIVE STRIP ============================ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-ink)] text-[var(--color-cream)] p-10 md:p-16">
          {/* Decorative dotted grid */}
          <svg
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            width="100%"
            height="100%"
          >
            <pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="var(--color-cream)" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>

          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-honey)] mb-4">
                Scholarships
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-5">
                Give a student a{" "}
                <em className="font-display-italic" style={{ color: "var(--color-honey)" }}>
                  starting point.
                </em>
              </h2>
              <p className="text-[color-mix(in_oklab,var(--color-cream)_85%,transparent)] leading-relaxed">
                Your gift to EDXR is tax-deductible and goes directly to student
                scholarships — paying for hardware time, certifications, and
                project stipends so that talent, not budget, sets the ceiling.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link
                href="/give/"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] text-[var(--color-cream)] px-6 py-4 text-base font-medium hover:bg-[var(--color-honey)] hover:text-[var(--color-ink)] transition-colors"
              >
                Make a gift
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl md:text-4xl tracking-tight">{n}</dt>
      <dd className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-soft)] mt-1">
        {label}
      </dd>
    </div>
  );
}

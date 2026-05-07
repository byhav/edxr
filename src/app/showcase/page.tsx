import type { Metadata } from "next";
import { StudentCard } from "@/components/student-card";
import { studentWork } from "@/lib/students";

export const metadata: Metadata = {
  title: "Student Work",
  description:
    "EDXR students and graduates ship real work — VR experiences, video, AI tools, and physical artifacts. A showcase of recent contributions.",
};

export default function ShowcasePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="sticker rise">Student & alumni showcase</p>
        <h1
          className="rise font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight mt-6 max-w-4xl"
          style={{ animationDelay: "120ms" }}
        >
          Real work,{" "}
          <em className="font-display-italic">
            <span className="marker">credited and shipped.</span>
          </em>
        </h1>
        <p
          className="rise mt-6 text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-2xl"
          style={{ animationDelay: "220ms" }}
        >
          Every piece below was built by an EDXR student or recent graduate. We
          credit by name and role, because portfolios matter.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--color-tan)]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {studentWork.map((work) => (
            <StudentCard key={work.slug} work={work} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-4">
          Want to feature student work in your{" "}
          <em className="font-display-italic">classroom or program?</em>
        </h2>
        <p className="text-[var(--color-ink-soft)] leading-relaxed mb-8 max-w-2xl mx-auto">
          We&rsquo;re glad to share assets, build collaborations, or set up demos. Reach
          out and we&rsquo;ll find a fit.
        </p>
        <a
          href="mailto:hello@edxr.io"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-terracotta-dark)] transition-colors"
        >
          hello@edxr.io
          <span aria-hidden>→</span>
        </a>
      </section>
    </>
  );
}

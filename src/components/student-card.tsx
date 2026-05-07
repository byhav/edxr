import type { StudentWork } from "@/lib/students";

const categoryColor: Record<StudentWork["category"], string> = {
  "VR/AR": "var(--color-teal)",
  Video: "var(--color-terracotta)",
  AI: "var(--color-honey)",
  Making: "var(--color-ink)",
};

export function StudentCard({ work }: { work: StudentWork }) {
  const color = categoryColor[work.category];
  return (
    <article className="relative pt-3">
      {/* Tape strip — workshop / sketchbook feel */}
      <span className="tape left-6" aria-hidden />
      <div className="rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] p-6 card-shadow">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.2em]"
          style={{ color }}
        >
          {work.category}
        </span>
        <h3 className="font-display text-xl tracking-tight mt-2 mb-2">
          {work.title}
        </h3>
        <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-4">
          {work.blurb}
        </p>
        <div className="pt-3 border-t border-[var(--color-tan)] flex items-baseline justify-between gap-3 text-sm">
          <div>
            <p className="font-medium">{work.student}</p>
            <p className="text-xs text-[var(--color-ink-soft)]">{work.role}</p>
          </div>
          <p className="text-xs text-[var(--color-ink-soft)] text-right">
            {work.cohort}
          </p>
        </div>
      </div>
    </article>
  );
}

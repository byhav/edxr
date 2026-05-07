import type { Project } from "@/lib/projects";

const categoryColor: Record<Project["category"], string> = {
  "VR/AR": "var(--color-teal)",
  Video: "var(--color-terracotta)",
  AI: "var(--color-honey)",
  Making: "var(--color-ink)",
};

export function ProjectCard({ project }: { project: Project }) {
  const color = categoryColor[project.category];
  return (
    <article className="group relative rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] overflow-hidden card-shadow transition-transform hover:-translate-y-0.5">
      {/* Top color bar identifies the category — bold accent without an image dependency */}
      <div
        className="h-2 w-full"
        style={{ background: color }}
        aria-hidden
      />
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.18em] text-[var(--color-ink-soft)] mb-4">
          <span style={{ color }}>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 className="font-display text-2xl tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-5">
          {project.summary}
        </p>
        <div className="flex items-center justify-between text-xs">
          <span className="text-[var(--color-ink-soft)]">
            with <span className="text-[var(--color-ink)] font-medium">{project.partner}</span>
          </span>
          <span className="sticker">{project.status}</span>
        </div>
      </div>
    </article>
  );
}

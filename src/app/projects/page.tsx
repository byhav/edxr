import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Active and recent EDXR projects spanning VR/AR, video production, AI integration, and making.",
};

export default function ProjectsPage() {
  // Group by category for cleaner browsing
  const categories: Array<{ key: string; title: string }> = [
    { key: "VR/AR", title: "VR & AR" },
    { key: "Video", title: "Video Production" },
    { key: "AI", title: "AI Integration" },
    { key: "Making", title: "Making" },
  ];

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <p className="sticker rise">Projects</p>
        <h1
          className="rise font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight mt-6 max-w-4xl"
          style={{ animationDelay: "120ms" }}
        >
          What&rsquo;s on the{" "}
          <em className="font-display-italic">
            <span className="marker-teal">workbench</span>
          </em>
          .
        </h1>
        <p
          className="rise mt-6 text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-2xl"
          style={{ animationDelay: "220ms" }}
        >
          A snapshot of our active and recent work with faculty and community
          partners. Want to start something? <a href="mailto:hello@edxr.io" className="underline-grow">Get in touch.</a>
        </p>
      </section>

      {categories.map((cat) => {
        const items = projects.filter((p) => p.category === cat.key);
        if (items.length === 0) return null;
        return (
          <section
            key={cat.key}
            className="mx-auto max-w-6xl px-6 py-12 border-t border-[var(--color-tan)]"
          >
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">
                {cat.title}
              </h2>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)]">
                {items.length} {items.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

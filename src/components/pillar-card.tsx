interface PillarProps {
  number: string;
  title: string;
  description: string;
  accent: "terracotta" | "teal" | "honey" | "ink";
}

const accentMap = {
  terracotta: "var(--color-terracotta)",
  teal: "var(--color-teal)",
  honey: "var(--color-honey)",
  ink: "var(--color-ink)",
};

export function PillarCard({ number, title, description, accent }: PillarProps) {
  return (
    <article
      className="relative rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] p-6 card-shadow transition-transform hover:-translate-y-0.5"
      style={{ ["--accent" as string]: accentMap[accent] }}
    >
      <div className="flex items-start justify-between mb-6">
        <span
          className="font-display text-5xl font-medium leading-none"
          style={{ color: "var(--accent)" }}
        >
          {number}
        </span>
        <span
          aria-hidden
          className="block w-2 h-2 rounded-full mt-3"
          style={{ background: "var(--accent)" }}
        />
      </div>
      <h3 className="font-display text-2xl tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
        {description}
      </p>
    </article>
  );
}

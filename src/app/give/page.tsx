import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Give",
  description:
    "Support EDXR student scholarships. Tax-deductible gifts directly fund hardware time, certifications, and student stipends.",
};

const tiers = [
  {
    amount: "$50",
    name: "Materials",
    desc: "Filament, lumber, and laser materials for one student project.",
    accent: "var(--color-honey)",
  },
  {
    amount: "$250",
    name: "Hardware time",
    desc: "A semester of headset and lab access for an EDXR student.",
    accent: "var(--color-teal)",
  },
  {
    amount: "$1,000",
    name: "Project stipend",
    desc: "Funds a paid student lead position on a partner project.",
    accent: "var(--color-terracotta)",
  },
  {
    amount: "$5,000+",
    name: "Named scholarship",
    desc: "Establishes a named annual scholarship for an EDXR student.",
    accent: "var(--color-ink)",
  },
];

export default function GivePage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <p className="sticker rise">Give</p>
        <h1
          className="rise font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight mt-6"
          style={{ animationDelay: "120ms" }}
        >
          Help a student{" "}
          <em className="font-display-italic">
            <span className="marker">build something real.</span>
          </em>
        </h1>
        <p
          className="rise mt-6 text-lg text-[var(--color-ink-soft)] leading-relaxed max-w-2xl"
          style={{ animationDelay: "220ms" }}
        >
          EDXR is an independent 501(c)(3). Your gift is tax-deductible, and{" "}
          <strong className="text-[var(--color-ink)]">
            100% of every gift goes to student scholarships
          </strong>
          : hardware time, certifications, materials, and paid project roles.
        </p>
      </section>

      {/* Tiers */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ink-soft)] mb-6">
          Suggested giving levels
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => (
            <article
              key={tier.amount}
              className="relative rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] p-6 card-shadow"
            >
              <span
                aria-hidden
                className="absolute top-6 right-6 w-2 h-2 rounded-full"
                style={{ background: tier.accent }}
              />
              <p className="font-display text-3xl tracking-tight">
                {tier.amount}
              </p>
              <p
                className="font-mono text-[11px] uppercase tracking-[0.2em] mt-1"
                style={{ color: tier.accent }}
              >
                {tier.name}
              </p>
              <p className="mt-4 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                {tier.desc}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How to give */}
      <section className="bg-[var(--color-parchment)] border-y border-[var(--color-tan)] mt-8">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-8">
            How to give
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] p-7 card-shadow">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-terracotta)] mb-3">
                Online
              </p>
              <h3 className="font-display text-2xl tracking-tight mb-3">
                Make a gift online
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-6">
                One-time or recurring gifts in any amount, processed through our
                secure giving partner.
              </p>
              {/*
                Replace href below with your giving platform URL
                (e.g. Donorbox, Givebutter, Stripe) when ready.
              */}
              <a
                href="https://example.com/give"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] text-[var(--color-cream)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-terracotta-dark)] transition-colors"
              >
                Give now
                <span aria-hidden>→</span>
              </a>
            </article>

            <article className="rounded-[var(--radius-card)] bg-white border border-[var(--color-tan)] p-7 card-shadow">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-teal)] mb-3">
                Major gifts & matches
              </p>
              <h3 className="font-display text-2xl tracking-tight mb-3">
                Talk with us directly
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mb-6">
                For employer matches, donor-advised funds, named scholarships,
                or in-kind gifts of equipment — let&rsquo;s set up a quick call.
              </p>
              <a
                href="mailto:hello@edxr.io?subject=Major%20gift%20inquiry"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-ink)] px-5 py-3 text-sm font-medium hover:bg-[var(--color-ink)] hover:text-[var(--color-cream)] transition-colors"
              >
                hello@edxr.io
              </a>
            </article>
          </div>

          <p className="mt-10 text-xs text-[var(--color-ink-soft)] max-w-2xl leading-relaxed">
            EDXR is a 501(c)(3) nonprofit organization. Contributions are
            tax-deductible to the fullest extent allowed by law. EIN available on
            request. No goods or services are provided in exchange for your gift.
          </p>
        </div>
      </section>
    </>
  );
}

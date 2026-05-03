import { Check } from "lucide-react";
import { IMAGES, waLink } from "../../lib/constants";

const Block = ({ tag, title, desc, points, image, cta, reverse, testid }) => (
  <div
    data-testid={testid}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
      reverse ? "lg:[&>div:first-child]:order-2" : ""
    }`}
  >
    <div>
      <span className="overline">
        <span className="gold-rule" />
        {tag}
      </span>
      <h3 className="font-display mt-4 text-4xl md:text-5xl leading-[1.08] text-[var(--ink)]">
        {title}
      </h3>
      <p className="mt-5 text-[var(--ink-soft)] leading-relaxed">{desc}</p>
      <ul className="mt-7 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-[var(--ink)]">
            <Check size={16} className="text-[var(--gold)] mt-0.5 shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(cta.message)}
        target="_blank"
        rel="noopener noreferrer"
        data-testid={`${testid}-cta`}
        className="inline-flex mt-8 px-7 py-3.5 bg-[var(--emerald)] text-[var(--ivory)] text-sm font-medium hover:bg-[var(--emerald-deep)] transition-colors"
      >
        {cta.label}
      </a>
    </div>
    <div className="relative">
      <div className="absolute -inset-3 border border-[var(--gold)]/40 translate-x-4 translate-y-4" />
      <img
        src={image}
        alt={`${tag} — Luxe Caterer & Planners signature event`}
        loading="lazy"
        decoding="async"
        width="800"
        height="1000"
        className="relative w-full aspect-[4/5] object-cover"
      />
    </div>
  </div>
);

export const WeddingCorporate = () => {
  return (
    <section
      id="venues"
      data-testid="wedding-corporate-section"
      className="relative py-24 md:py-32 bg-[var(--ivory-soft)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-32">
        <Block
          testid="wedding-block"
          tag="Wedding Planning"
          title={
            <>
              The best <em className="italic text-[var(--emerald)]">wedding planner</em> in Delhi NCR.
            </>
          }
          desc="From intimate pheras to 1,500-guest extravaganzas — we're the wedding venue, caterer, and decor partner Delhi NCR's most discerning families return to."
          points={[
            "Full-service: venue, catering, decor, photography coordination",
            "Multi-day sangeet, haldi, mehendi, pheras, and reception",
            "Dedicated wedding planner + on-ground team of 40+",
            "Custom theming: royal, modern-minimal, garden, cocktail",
          ]}
          image={IMAGES.wedding}
          cta={{ label: "Plan My Wedding", message: "Hi, I'd like to plan my wedding with Luxe Events." }}
        />

        <Block
          reverse
          testid="corporate-block"
          tag="Corporate Events"
          title={
            <>
              Delhi NCR's trusted <em className="italic text-[var(--emerald)]">corporate event planner.</em>
            </>
          }
          desc="Offsites, product launches, gala dinners, and annual conferences — executed with the same precision our weddings are known for."
          points={[
            "End-to-end corporate event management",
            "Corporate catering — breakfast, hi-tea, buffet, live stations",
            "Award ceremonies, product launches & brand activations",
            "Ideal for teams of 30 to 2,000+",
          ]}
          image={IMAGES.corporate}
          cta={{ label: "Get a Corporate Quote", message: "Hi, I'd like a quote for a corporate event." }}
        />
      </div>
    </section>
  );
};

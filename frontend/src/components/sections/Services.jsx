import { ArrowUpRight } from "lucide-react";
import { IMAGES, waLink } from "../../lib/constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const SERVICES = [
  {
    title: "Farmhouse & Venues",
    blurb:
      "15-acre landscaped farmhouse in Noida Sector 135 — secluded, lush, and ready to host up to 1,500 guests.",
    image: IMAGES.servicesVenue,
    tags: ["Wedding Venue", "Outdoor Lawns", "Banquet"],
    message: "Hi, I'd like to book the farmhouse venue in Noida.",
  },
  {
    title: "Luxe Catering",
    blurb:
      "Multi-cuisine live stations, vegetarian specialities, and bespoke chef's tables curated by award-winning catering teams.",
    image: IMAGES.servicesCatering,
    tags: ["Indian", "Live Counters", "Bespoke Menus"],
    message: "Hi, I'd like to enquire about your catering menus.",
  },
  {
    title: "Decor & Planning",
    blurb:
      "From mandaps to minimalist reception sets — our in-house designers craft every petal, light, and detail.",
    image: IMAGES.servicesDecor,
    tags: ["Wedding Decor", "Florals", "Planning"],
    message: "Hi, I'd like to discuss decor & event planning.",
  },
];

export const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      data-testid="services-section"
      className="relative py-24 md:py-32 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 reveal-base ${isVisible ? "reveal-show" : ""}`}>
          <div className="max-w-2xl">
            <span className="overline">
              <span className="gold-rule" />
              Our One-Stop Solution
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--ink)]">
              Three expertises,<br />
              <em className="italic text-[var(--emerald)]">one seamless experience.</em>
            </h2>
          </div>
          <p className="md:max-w-sm text-[var(--ink-soft)] text-base leading-relaxed">
            Why juggle five vendors when one house does it all? From the venue to the
            last petal on the table, Luxe Events is the only partner you'll need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => (
            <a
              key={s.title}
              href={waLink(s.message)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`service-card-${i}`}
              className={`group relative block overflow-hidden bg-white border border-emerald-900/10 hover:border-[var(--gold)] transition-all duration-500 reveal-base ${isVisible ? `reveal-show reveal-delay-${i + 1}` : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.title} by Luxe Caterer & Planners — ${s.tags.join(", ")}`}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="1000"
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[var(--ivory)]/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight size={16} className="text-[var(--emerald)]" />
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-[0.14em] uppercase px-2.5 py-1 bg-[var(--ivory)]/90 text-[var(--emerald)] font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-2xl md:text-3xl text-[var(--ink)]">{s.title}</h3>
                <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{s.blurb}</p>
                <div className="mt-5 flex items-center gap-2 text-[var(--emerald)] text-sm font-medium">
                  <span>Enquire on WhatsApp</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

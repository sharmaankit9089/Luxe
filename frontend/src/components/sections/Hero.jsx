import { ArrowRight, Sparkles } from "lucide-react";
import { IMAGES, waLink } from "../../lib/constants";

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden flex items-end"
    >
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Luxury Indian wedding mandap with floral decor by Luxe Caterer & Planners in Noida"
          fetchpriority="high"
          decoding="async"
          width="1600"
          height="1067"
          className="w-full h-full object-cover animate-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/85" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(4,47,34,0.96) 0%, rgba(4,47,34,0.88) 40%, rgba(4,47,34,0.55) 70%, rgba(4,47,34,0.2) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-12 pb-20 md:pb-28 pt-36">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[var(--ivory)]/80 fade-up">
            <Sparkles size={14} className="text-[var(--gold)]" />
            <span className="overline !text-[var(--gold-soft)]">
              Luxe Farms · Caterer · Planner
            </span>
          </div>

          <h1 className="font-display text-[var(--ivory)] mt-5 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight fade-up delay-1">
            Farms, Catering &amp; <em className="italic text-[var(--gold-soft)]">Decor.</em>
          </h1>

          <p className="mt-6 text-base md:text-lg text-[var(--ivory)] max-w-xl leading-relaxed fade-up delay-2">
            Delhi NCR's premier one-stop luxury event house — curating farmhouse venues,
            bespoke catering, and cinematic decor for the moments you'll never forget.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 fade-up delay-3">
            <a
              href="#form"
              data-testid="hero-book-btn"
              className="scroll-mt-24 group inline-flex items-center gap-3 px-7 py-4 bg-[var(--gold)] text-[var(--emerald-deep)] text-sm font-semibold tracking-wide hover:bg-[var(--ivory)] transition-colors"
            >
              Book Your Date
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={waLink("Hi Luxe Caterer & Planners, I'd like to check availability and get a quick quote.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
              className="inline-flex items-center gap-3 px-7 py-4 border border-[var(--ivory)]/40 text-[var(--ivory)] text-sm font-semibold tracking-wide hover:bg-[var(--ivory)]/10 transition-colors backdrop-blur-sm"
            >
              WhatsApp Instantly
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-[var(--ivory)]/80 fade-up delay-4">
            {[
              ["500+", "Events Crafted"],
              ["15 Acres", "Luxe Farms · Noida"],
              ["5★", "Google Reviews"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col">
                <span className="font-display text-3xl md:text-4xl text-[var(--gold-soft)]">{n}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-[var(--gold-soft)] mt-1">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--ivory)]/60 text-xs tracking-[0.3em] uppercase hidden md:block">
        Scroll to Explore
      </div>
    </section>
  );
};

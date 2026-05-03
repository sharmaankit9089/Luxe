import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const REVIEWS = [
  {
    name: "Manish Upadhyay",
    role: "CEO, MGO Corp",
    body: "Organized our corporate event at Luxe Villa. Truly the best caterers in Noida — food, decor and coordination were faultless. Highly recommend the team for any premium event.",
  },
  {
    name: "Saloni Sharma",
    role: "Designer · Bride",
    body: "My wedding happened at the best location in Noida. The farmhouse easily accommodated 400+ guests. The food was phenomenal and the decor took my breath away.",
  },
  {
    name: "Vaibhav Aggarwal",
    role: "Groom",
    body: "Luxe Events planned everything at the last moment — farm, catering, decor. They're genuinely one of the best event planners in Noida. Zero stress, perfect night.",
  },
  {
    name: "Anjali & Rohan",
    role: "Married 2024",
    body: "Every single vendor in one contract made our wedding stress-free. The mandap was a dream and the multi-cuisine buffet had everyone asking for seconds.",
  },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });
  const next = () => setI((i + 1) % REVIEWS.length);
  const prev = () => setI((i - 1 + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section
      id="testimonials"
      ref={ref}
      data-testid="testimonials-section"
      className="relative py-24 md:py-32 bg-[var(--ivory-soft)]"
    >
      <div className={`max-w-5xl mx-auto px-6 md:px-12 text-center reveal-base ${isVisible ? "reveal-show" : ""}`}>
        <span className="overline">
          <span className="gold-rule" />
          Words From Our Couples & Clients
        </span>
        <Quote className="mx-auto mt-8 text-[var(--gold)]" size={36} />
        <blockquote
          key={i}
          data-testid="testimonial-quote"
          className="font-display mt-6 text-2xl md:text-4xl lg:text-[44px] leading-[1.25] text-[var(--ink)] italic fade-up"
        >
          "{r.body}"
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            data-testid="testimonial-prev"
            onClick={prev}
            className="w-11 h-11 rounded-full border border-emerald-900/20 flex items-center justify-center text-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-[var(--ivory)] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <div>
            <p className="text-sm font-semibold text-[var(--emerald)]">{r.name}</p>
            <p className="text-xs text-[var(--ink-soft)] uppercase tracking-[0.18em] mt-1">{r.role}</p>
          </div>
          <button
            data-testid="testimonial-next"
            onClick={next}
            className="w-11 h-11 rounded-full border border-emerald-900/20 flex items-center justify-center text-[var(--emerald)] hover:bg-[var(--emerald)] hover:text-[var(--ivory)] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              data-testid={`testimonial-dot-${k}`}
              aria-label={`Go to testimonial ${k + 1}`}
              className={`h-1 transition-all ${k === i ? "w-8 bg-[var(--emerald)]" : "w-4 bg-[var(--emerald)]/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

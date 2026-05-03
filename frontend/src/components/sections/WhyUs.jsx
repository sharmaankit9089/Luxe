import { Award, Users, Clock, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Award,
    title: "5+ Years of Excellence",
    body: "A decade of trust-building with families and Fortune 500 teams across Delhi NCR.",
  },
  {
    icon: Users,
    title: "One House, All Needs",
    body: "Venue, catering, decor, planning — everything handled under one roof, one contract.",
  },
  {
    icon: Heart,
    title: "500+ Celebrations",
    body: "Weddings, corporate galas, milestone birthdays — every one delivered without a glitch.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    body: "Our on-ground team of 40+ ensures every minute of your day flows seamlessly.",
  },
];

export const WhyUs = () => {
  return (
    <section
      id="why-us"
      data-testid="why-us-section"
      className="relative py-24 md:py-32 bg-[var(--emerald-deep)] text-[var(--ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[var(--gold)] blur-3xl opacity-30" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[var(--emerald)] blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          <span className="overline !text-[var(--gold-soft)]">
            <span className="gold-rule" />
            Why Luxe Caterer &amp; Planners
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-[var(--ivory)] leading-[1.05]">
            Not just an event house — <em className="italic text-[var(--gold-soft)]">a legacy of celebrations.</em>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              data-testid={`why-card-${i}`}
              className="relative p-6 border border-[var(--ivory)]/10 hover:border-[var(--gold)]/60 transition-colors group"
            >
              <f.icon className="text-[var(--gold)]" size={28} />
              <h3 className="font-display mt-5 text-xl md:text-2xl">{f.title}</h3>
              <p className="mt-3 text-sm text-[var(--ivory)]/70 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

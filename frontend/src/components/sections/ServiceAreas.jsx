import { MapPin } from "lucide-react";
import { BUSINESS } from "../../lib/constants";


export const ServiceAreas = () => {
  const items = [
    "Best Caterers in Noida",
    "Best Event Planner in Greater Noida",
    "Wedding Venue in Ghaziabad",
    "Corporate Event Planner in Delhi",
    "Farmhouse in Noida Sec 135",
    "Best Caterers in Gurgaon",
    "Wedding Planner in Faridabad",
    "Decor Specialist in Delhi NCR",
  ];
  const loop = [...items, ...items];

  return (
    <section
      id="service-areas"
      data-testid="service-areas-section"
      className="relative py-14 md:py-16 bg-[var(--champagne)] border-y border-[var(--gold)]/30 overflow-hidden "
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6 flex items-center gap-3 justify-center text-center">
        <MapPin size={16} className="text-[var(--emerald)]" />
        <span className="overline">
          Serving {BUSINESS.areas.join(" · ")}
        </span>
      </div>

      <div className="relative w-full overflow-hidden ">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {loop.map((t, i) =>(
            <a
              key={`${t}-${i}`}
              href="/form"
              className="font-display italic text-2xl md:text-4xl text-[var(--emerald)]/80 shrink-0 hover:text-[var(--gold)] transition-colors cursor-pointer"
            >
              {t} <span className="text-[var(--gold)] mx-6 ">✦</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

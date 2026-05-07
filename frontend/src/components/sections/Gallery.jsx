import { useState } from "react";
import { X } from "lucide-react";
import { IMAGES } from "../../lib/constants";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const ALTS = [
  "Luxe Caterer & Planners outdoor blue-themed corporate event setup with umbrella tables in Noida",
  "Marigold-string mehendi haldi decor with floral cushion seating at Luxe Farms Noida",
  "Intimate wedding ceremony with white floral hangings and pink cushion seating",
  "Premium Indian buffet catering with copper chafing dishes by Luxe Caterer & Planners",
  "Luxury gala-night reception decor with chandelier-tree centerpiece at Luxe Farms",
];

export const Gallery = () => {
  const imgs = IMAGES.gallery;
  const [activeImg, setActiveImg] = useState(null);
  const [ref, isVisible] = useIntersectionObserver({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="gallery"
      ref={ref}
      data-testid="gallery-section"
      className="relative py-24 md:py-32 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 reveal-base ${isVisible ? "reveal-show" : ""}`}>
          <div>
            <span className="overline">
              <span className="gold-rule" />
              A Portfolio of Love & Luxury
            </span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05]">
              Latest <em className="italic text-[var(--emerald)]">events.</em>
            </h2>
          </div>
          <p className="md:max-w-xs text-sm text-[var(--ink-soft)] leading-relaxed">
            Handpicked moments from weddings and corporate soirees hosted at our farmhouse and beyond.
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-[repeat(6,_minmax(120px,_1fr))] gap-3 md:gap-4">
          {[
            { span: "col-span-12 md:col-span-8 row-span-3", i: 0 },
            { span: "col-span-6 md:col-span-4 row-span-3", i: 1 },
            { span: "col-span-6 md:col-span-4 row-span-3", i: 2 },
            { span: "col-span-12 md:col-span-4 row-span-3", i: 3 },
            { span: "col-span-12 md:col-span-4 row-span-3", i: 4 },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`${item.span} overflow-hidden group cursor-zoom-in reveal-base ${isVisible ? `reveal-show reveal-delay-${idx + 1}` : ""}`}
              onClick={() => setActiveImg(imgs[item.i])}
            >
              <img
                src={imgs[item.i]}
                alt={ALTS[item.i]}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]"
              />
            </div>
          ))}
        </div>
      </div>

      {activeImg && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-6 md:p-12"
          onClick={() => setActiveImg(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/60 hover:text-white transition-colors"
            onClick={() => setActiveImg(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={activeImg} 
            alt="Gallery Preview" 
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

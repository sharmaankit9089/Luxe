import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { BUSINESS, telLink, waLink } from "../../lib/constants";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="relative bg-[var(--emerald-deep)] text-[var(--ivory)] pt-20 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl">Luxe</span>
            <span className="font-display italic text-lg text-[var(--gold)]">Caterer &amp; Planners</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--ivory)]/70 max-w-xs">
            Luxe Farms · Caterer · Planner. One-stop luxury farmhouse, catering & decor for weddings and corporate events across Delhi NCR.
          </p>
          <div className="flex items-center gap-3 mt-6">
            <a
              href={BUSINESS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="w-10 h-10 rounded-full border border-[var(--ivory)]/20 flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--emerald-deep)] transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-facebook"
              className="w-10 h-10 rounded-full border border-[var(--ivory)]/20 flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[var(--emerald-deep)] transition-colors"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="overline !text-[var(--gold)]">Services</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--ivory)]/80">
            <li><a href="#services" className="hover:text-[var(--gold)]">Farmhouse & Venues</a></li>
            <li><a href="#services" className="hover:text-[var(--gold)]">Wedding Catering</a></li>
            <li><a href="#services" className="hover:text-[var(--gold)]">Decor & Planning</a></li>
            <li><a href="#venues" className="hover:text-[var(--gold)]">Wedding Planning</a></li>
            <li><a href="#venues" className="hover:text-[var(--gold)]">Corporate Events</a></li>
          </ul>
        </div>

        <div>
          <h4 className="overline !text-[var(--gold)]">Service Areas</h4>
          <ul className="mt-5 space-y-3 text-sm text-[var(--ivory)]/80">
            {BUSINESS.areas.map((a) => (
              <li key={a}><a href="/form">Best Caterer in {a}</a></li>
            ))}
            <li>
              <Link to="/locations" className="text-[var(--gold)] hover:underline font-medium mt-2 inline-block">
                View All Locations & Services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="overline !text-[var(--gold)]">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm text-[var(--ivory)]/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 text-[var(--gold)] shrink-0" />
              <span>{BUSINESS.addresses[0]}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 text-[var(--gold)] shrink-0" />
              <div className="flex flex-col">
                {BUSINESS.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s|\+/g, "")}`} className="hover:text-[var(--gold)]">
                    {p}
                  </a>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 text-[var(--gold)] shrink-0" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-[var(--gold)]">{BUSINESS.email}</a>
            </li>
          </ul>
          <div className="flex gap-2 mt-6">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-whatsapp-btn"
              className="px-4 py-2 bg-[#25D366] text-white text-xs font-medium hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={telLink}
              data-testid="footer-call-btn"
              className="px-4 py-2 border border-[var(--gold)] text-[var(--gold)] text-xs font-medium hover:bg-[var(--gold)] hover:text-[var(--emerald-deep)]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-[var(--ivory)]/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--ivory)]/50">
        <p>© {new Date().getFullYear()} Luxe Event Planners</p>
        <p>Wedding Planner · Caterers · Event Planner · Noida · Delhi NCR</p>
      </div>
    </footer>
  );
};

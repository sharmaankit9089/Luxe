import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, telLink } from "../../lib/constants";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#venues", label: "Venues" },
  { href: "#gallery", label: "Gallery" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      // background effect
      setScrolled(currentScrollY > 30);

      // scroll down → hide, scroll up → show
      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 transform ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-[var(--ivory)]/95 backdrop-blur-xl shadow-sm border-b border-emerald-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          data-testid="nav-logo"
          className="flex items-baseline gap-2"
        >
          <span
            className={`font-display text-2xl md:text-3xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-[var(--ink)]" : "text-[var(--ivory)]"
            }`}
          >
            Luxe
          </span>
          <span className="font-display italic text-base md:text-lg text-[var(--gold)]">
            Caterer &amp; Planners
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              data-testid={`nav-link-${n.label.toLowerCase().replace(/\s/g, "-")}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-[var(--ink)] hover:text-[var(--emerald)]"
                  : "text-[var(--gold)] hover:text-[var(--ivory)]"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={telLink}
            data-testid="header-call-btn"
            className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
              scrolled
                ? "text-[var(--ink)] hover:text-[var(--emerald)]"
                : "text-[var(--ivory)] hover:text-[var(--gold)]"
            }`}
          >
            <Phone size={15} />
            {BUSINESS.phones[0]}
          </a>

          <a
            href="#contact"
            data-testid="header-enquire-btn"
            className="px-5 py-2.5 bg-[var(--emerald)] text-[var(--ivory)] text-sm font-medium hover:bg-[var(--emerald-deep)] transition-colors"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen(!open)}
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-[var(--ink)]" : "text-[var(--ivory)]"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden bg-[var(--ivory)] border-t border-emerald-900/10"
        >
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-base font-medium text-[var(--ink)] hover:text-[var(--emerald)]"
              >
                {n.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              data-testid="mobile-enquire-btn"
              className="mt-2 text-center px-5 py-3 bg-[var(--emerald)] text-[var(--ivory)] text-sm font-medium"
            >
              Enquire Now
            </a>
          </div>
        </div>
      )}
      {/* Mobile Sticky CTA */}
      <div 
        className={`lg:hidden fixed bottom-6 left-6 right-6 z-50 transition-all duration-500 transform ${
          scrolled && show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="#form"
          className="w-full py-4 bg-[var(--emerald)] text-[var(--ivory)] text-sm font-bold tracking-widest uppercase shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
        >
          Book Your Date
        </a>
      </div>
    </header>
  );
};
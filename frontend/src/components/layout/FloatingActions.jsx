import { Phone } from "lucide-react";
import { telLink, waLink } from "../../lib/constants";

export const FloatingActions = () => {
  return (
    <div
      data-testid="floating-actions"
      className="fixed z-50 right-4 md:right-6 bottom-8 md:bottom-8 flex flex-col gap-3"
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="float-whatsapp-btn"
        aria-label="Chat on WhatsApp"
        className="group relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366] shadow-xl shadow-emerald-900/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-60 animate-ping" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="relative w-5 h-5 md:w-6 md:h-6"
        >
          <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 0 5.37 0 12a11.94 11.94 0 001.64 6.06L0 24l6.1-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.92 9.92 0 01-5.06-1.39l-.36-.21-3.62.95.97-3.53-.24-.37A9.94 9.94 0 1122 12c0 5.51-4.49 10-10 10zm5.47-7.47c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.07 4.48.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
      <a
        href={telLink}
        data-testid="float-call-btn"
        aria-label="Call now"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[var(--emerald)] shadow-xl shadow-emerald-900/20 flex items-center justify-center hover:bg-[var(--emerald-deep)] hover:scale-110 transition-all duration-300"
      >
        <Phone className="text-[var(--ivory)]" size={18} />
      </a>
    </div>
  );
};

import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Users, ArrowLeft, Sparkles, MapPin, Phone } from "lucide-react";
import { BUSINESS, waLink, IMAGES } from "../../lib/constants";

export default function CateringForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    eventType: "",
    message: "",
  });

  const change = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    const enc = encodeURIComponent;
    const lines = [
      "Hi Luxe Caterer & Planners!",
      "",
      "I'd like to enquire about an event.",
      "",
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Event:* ${form.eventType}`,
      `*Date:* ${form.date || "Flexible"}`,
      `*Guests:* ${form.guests || "TBD"}`,
      `*Message:* ${form.message || "—"}`,
    ];
    const text = enc(lines.join("\n"));
    const url = `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp — we'll reply within minutes!");
  };

  return (
    <div className="h-screen w-full bg-[var(--ivory)] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
      {/* Left Side: Branding & Info */}
      <div className="relative w-full lg:w-[45%] lg:h-full bg-[var(--emerald-deep)] p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden shrink-0">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img 
            src={IMAGES.hero} 
            alt="Event Background" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--emerald-deep)]/80 to-[var(--emerald-deep)]" />

        <div className="relative z-10">
          

          <h1 className="font-display mt-0 lg:mt-40 text-5xl md:text-6xl lg:text-7xl text-[var(--ivory)] leading-[1.1]">
            Let's plan your <em className="italic text-[var(--gold)]">perfect</em> event.
          </h1>

          <div className="hidden lg:flex items-center mt-20 gap-2 text-[var(--gold-soft)] mb-6">
            <Sparkles size={20} />
            <span className="overline !text-[var(--ivory)]">Premium Event Services</span>
          </div>
         
        </div>

        <div className="hidden lg:block relative z-10 mt-12 pt-8 border-t border-[var(--ivory)]/10">
          <p className="text-[var(--ivory)]/40 text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {BUSINESS.name}
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full lg:w-[55%] lg:h-full p-8 md:p-12 lg:p-12 flex items-center justify-center bg-[var(--ivory)]" id="form">
        <div className="w-full max-w-xl">
          <form
            onSubmit={submit}
            data-testid="enquiry-form"
            className="relative bg-[var(--ivory-soft)] p-8 md:p-10 border border-emerald-900/10"
          >
            <div className="absolute -top-3 left-8 bg-[var(--gold)] text-[var(--emerald-deep)] text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
              Enquiry · Free Consultation
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-2">
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Full Name*</label>
                <input
                  data-testid="form-name"
                  value={form.name}
                  onChange={change("name")}
                  required
                  className="mt-2 w-full bg-transparent border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none text-[var(--ink)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Phone*</label>
                <input
                  data-testid="form-phone"
                  value={form.phone}
                  onChange={change("phone")}
                  required
                  type="tel"
                  className="mt-2 w-full bg-transparent border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none"
                  placeholder="+91 98XXXXXXXX"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Event Type</label>
                <select
                  data-testid="form-event-type"
                  value={form.eventType}
                  onChange={change("eventType")}
                  className={`mt-2 w-full border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none bg-[var(--ivory-soft)]
                  ${!form.eventType ? "text-gray-400" : "text-black"}`}
                >
                  <option value="" disabled hidden>Select Event Type</option>
                  <option className="text-gray-400">Wedding</option>
                  <option className="text-gray-400">Corporate Event</option>
                  <option className="text-gray-400">Birthday / Anniversary</option>
                  <option className="text-gray-400">Catering Only</option>
                  <option className="text-gray-400">Venue Booking</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)] flex items-center gap-2">
                  <Calendar size={12} />Date
                </label>
                <input
                  data-testid="form-date"
                  value={form.date}
                  onChange={change("date")}
                  type="date"
                  className="mt-2 w-full bg-transparent border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)] flex items-center gap-2">
                  <Users size={12} />Guests
                </label>
                <input
                  data-testid="form-guests"
                  value={form.guests}
                  onChange={change("guests")}
                  type="number"
                  min="1"
                  className="mt-2 w-full bg-transparent border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none"
                  placeholder="e.g. 300"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Message</label>
                <textarea
                  data-testid="form-message"
                  value={form.message}
                  onChange={change("message")}
                  rows="3"
                  className="mt-2 w-full bg-transparent border-b border-emerald-900/20 focus:border-[var(--emerald)] py-2 outline-none resize-none"
                  placeholder="Tell us about your dream event..."
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                data-testid="form-submit"
                className="flex-1 px-6 py-4 bg-[var(--emerald)] text-[var(--ivory)] text-sm font-semibold tracking-wide hover:bg-[var(--emerald-deep)] transition-colors"
              >
                Send Enquiry via WhatsApp
              </button>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="form-quick-wa"
                className="sm:w-auto px-6 py-4 border border-[var(--emerald)] text-[var(--emerald)] text-sm font-semibold tracking-wide hover:bg-[var(--emerald)] hover:text-[var(--ivory)] transition-colors text-center"
              >
                Quick Chat
              </a>
            </div>

            <p className="mt-5 text-xs text-[var(--ink-soft)]">
              By submitting, you'll be redirected to WhatsApp with your enquiry pre-filled.
              We typically reply within 10 minutes.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
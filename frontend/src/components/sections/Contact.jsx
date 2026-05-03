import { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Calendar, Users } from "lucide-react";
import { BUSINESS, waLink } from "../../lib/constants";

export const Contact = () => {
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
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 md:py-32 bg-[var(--ivory)]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <span className="overline">
            <span className="gold-rule" />
            Let's Create Something Unforgettable
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--ink)]">
            Book a <em className="italic text-[var(--emerald)]">private tour</em> of our farmhouse.
          </h2>
          <p className="mt-5 text-[var(--ink-soft)] leading-relaxed max-w-lg">
            Tell us a little about your event — we'll get back via WhatsApp within minutes
            with availability, a sample menu, and decor moodboards.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[var(--emerald)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Visit</p>
                <p className="mt-1 text-[var(--ink)]">{BUSINESS.addresses[0]}</p>
                <p className="text-[var(--ink-soft)] text-sm mt-0.5">{BUSINESS.addresses[1]}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                <Phone size={16} className="text-[var(--emerald)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Call</p>
                <div className="mt-1 flex flex-col">
                  {BUSINESS.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s|\+/g, "")}`}
                      data-testid={`contact-phone-${p}`}
                      className="text-[var(--ink)] hover:text-[var(--emerald)]"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 rounded-full border border-[var(--gold)]/40 flex items-center justify-center shrink-0">
                <Mail size={16} className="text-[var(--emerald)]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--ink-soft)]">Email</p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  data-testid="contact-email"
                  className="mt-1 block text-[var(--ink)] hover:text-[var(--emerald)]"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 relative aspect-[16/9] overflow-hidden border border-emerald-900/10">
            <iframe
              data-testid="contact-map"
              title="Luxe Caterer & Planners Location"
              src={BUSINESS.mapsEmbed}
              loading="lazy"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              allow="fullscreen"
              style={{ border: 0 }}
            />
          </div>
        </div>

        <div className="relative scroll-mt-8" id="form">
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
    </section>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { SEO_SERVICES, SEO_CITIES } from "../lib/seoContent";

export default function Locations() {
  window.scrollTo(0, 0);

  return (
    <main className="bg-[var(--emerald-deep)] min-h-screen text-[var(--ivory)] font-sans">
      <Helmet>
        <title>Areas We Serve | Luxe Caterer & Planners</title>
        <meta name="description" content="Discover our luxury catering and event planning services across Noida, Gurgaon, Delhi, and the entire NCR region." />
      </Helmet>
      
      <Header />
      
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--gold)] mb-6 text-center">
          Areas We Serve
        </h1>
        <p className="text-center text-lg text-[var(--ivory)]/70 max-w-2xl mx-auto mb-16">
          Luxe Caterer & Planners provides top-tier event services across the Delhi NCR region. Select your city and service below to learn more about how we can make your next event unforgettable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {SEO_CITIES.map(city => {
            const citySlug = city.toLowerCase().replace(/ /g, '-');
            return (
              <div key={city} className="bg-black/20 p-8 rounded-xl border border-[var(--gold)]/20">
                <h2 className="font-display text-2xl text-[var(--gold)] mb-6 pb-4 border-b border-[var(--ivory)]/10">
                  {city}
                </h2>
                <ul className="space-y-3">
                  {SEO_SERVICES.map(service => (
                    <li key={service.slug}>
                      <Link 
                        to={`/${service.slug}-in-${citySlug}`}
                        className="text-[var(--ivory)]/80 hover:text-[var(--gold)] transition-colors flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                        {service.name} in {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}

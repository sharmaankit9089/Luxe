import React, { useEffect, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingActions } from "../components/layout/FloatingActions";
import { Contact } from "../components/sections/Contact";
import { SEO_SERVICES, SEO_CITIES, getSEOContent } from "../lib/seoContent";
import { MapPin, CheckCircle2 } from "lucide-react";

export default function ServiceCityPage() {
  const { slug } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    // We expect the slug to be in the format: {service}-in-{city}
    if (!slug || !slug.includes("-in-")) {
      setContent(false);
      return;
    }
    
    const parts = slug.split("-in-");
    const city = parts.pop(); // The last part is the city
    const service = parts.join("-in-"); // Everything before the last -in- is the service
    
    // Validate that the slugs match our known services and cities
    const isValidService = SEO_SERVICES.some(s => s.slug === service);
    const isValidCity = SEO_CITIES.some(c => c.toLowerCase().replace(/ /g, '-') === city);
    
    if (isValidService && isValidCity) {
      setContent(getSEOContent(service, city));
    } else {
      setContent(false); // Indicates not found
    }
    
    window.scrollTo(0, 0);
  }, [slug]);

  if (content === false) {
    return <Navigate to="/" replace />;
  }

  if (!content) {
    return <div className="min-h-screen bg-black" />; // Loading state
  }

  return (
    <main className="bg-[var(--emerald-deep)] min-h-screen text-[var(--ivory)] font-sans">
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <script type="application/ld+json">
          {JSON.stringify(content.schemaData)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src={content.heroImage}
            alt={`${content.serviceName} in ${content.cityName}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm md:text-base text-[var(--gold)]/80 font-medium">
            <Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span className="mx-2 text-[var(--ivory)]/40">/</span>
            <Link to="/locations" className="hover:text-[var(--gold)] transition-colors">Locations</Link>
            <span className="mx-2 text-[var(--ivory)]/40">/</span>
            <span className="text-[var(--ivory)]">{content.serviceName} in {content.cityName}</span>
          </nav>

          <h1 className="font-display text-4xl md:text-6xl text-[var(--gold)] mb-6 leading-tight">
            {content.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-[var(--ivory)]/90 max-w-2xl mx-auto">
            {content.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Main Content & Why Us */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-2 text-[var(--gold)] mb-6">
            <MapPin size={24} />
            <span className="font-medium text-lg uppercase tracking-wider">{content.cityName}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-8">
            Expert {content.serviceName}
          </h2>
          <div className="space-y-6 text-[var(--ivory)]/80 leading-relaxed text-lg">
            {content.content.map((paragraph, idx) => (
              <p key={idx} dangerouslySetInnerHTML={{__html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[var(--gold)]">$1</strong>')}} />
            ))}
          </div>
        </div>
        
        <div className="bg-black/30 p-8 md:p-12 rounded-xl border border-[var(--gold)]/20">
          <h3 className="font-display text-2xl text-[var(--gold)] mb-8">Why Choose Us?</h3>
          <ul className="space-y-6">
            {content.whyUs.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckCircle2 className="text-[#25D366] shrink-0 mt-1" size={20} />
                <div>
                  <strong className="block text-[var(--ivory)] mb-1">{item.title}</strong>
                  <span className="text-[var(--ivory)]/70 text-sm">{item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 md:px-12 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-[var(--gold)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {content.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-[var(--emerald-deep)] border border-[var(--ivory)]/10 rounded-lg">
                <h4 className="font-medium text-lg mb-3">{faq.q}</h4>
                <p className="text-[var(--ivory)]/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl text-[var(--gold)] mb-12">
          Client Experiences in {content.cityName}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.testimonials.map((t, idx) => (
            <div key={idx} className="bg-black/30 p-8 rounded-xl border border-[var(--gold)]/20 italic">
              <p className="text-[var(--ivory)]/90 text-lg mb-6">"{t.text}"</p>
              <span className="text-[var(--gold)] font-medium block">- {t.author}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Areas */}
      <section className="py-20 px-6 md:px-12 bg-black/20 text-center">
        <h2 className="font-display text-3xl text-[var(--gold)] mb-8">
          Also looking for {content.serviceName} nearby?
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {content.relatedLinks.map((link, idx) => (
            <Link 
              key={idx} 
              to={link.url}
              className="bg-[var(--emerald-deep)] border border-[var(--ivory)]/20 text-[var(--ivory)] px-6 py-3 rounded-full hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

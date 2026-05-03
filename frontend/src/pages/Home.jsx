import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { FloatingActions } from "../components/layout/FloatingActions";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { ServiceAreas } from "../components/sections/ServiceAreas";
import { WeddingCorporate } from "../components/sections/WeddingCorporate";
import { Gallery } from "../components/sections/Gallery";
import { WhyUs } from "../components/sections/WhyUs";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Header />
      <Hero />
      <Services />
      <ServiceAreas />
      <WeddingCorporate />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}

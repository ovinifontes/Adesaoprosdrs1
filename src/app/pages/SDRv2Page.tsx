import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ContactFormSDRv2 } from '../components/ContactFormSDRv2';
import { Problem } from '../components/Problem';
import { HowItWorks } from '../components/HowItWorks';
import { ForWho } from '../components/ForWho';
import { Benefits } from '../components/Benefits';
import { WhatYouGet } from '../components/WhatYouGet';
import { Comparison } from '../components/Comparison';
import { Authority } from '../components/Authority';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { StickyCTA } from '../components/StickyCTA';

export function SDRv2Page() {
  return (
    <div className="min-h-screen bg-[#010101] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <ContactFormSDRv2 />
        <Problem />
        <HowItWorks />
        <ForWho />
        <Benefits />
        <WhatYouGet />
        <Comparison />
        <Authority />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

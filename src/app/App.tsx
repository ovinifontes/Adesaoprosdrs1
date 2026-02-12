import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { HowItWorks } from './components/HowItWorks';
import { ForWho } from './components/ForWho';
import { Benefits } from './components/Benefits';
import { WhatYouGet } from './components/WhatYouGet';
import { Comparison } from './components/Comparison';
import { Authority } from './components/Authority';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#010101] text-white">
      <Header />
      <main className="pt-16">
        <Hero />
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
        <ContactForm />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
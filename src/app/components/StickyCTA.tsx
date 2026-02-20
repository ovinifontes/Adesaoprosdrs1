import { useState, useEffect } from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5561995324617', '_blank');
  };

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-300 lg:hidden ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-[#010101]/95 backdrop-blur-lg border-t border-gray-800 px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToForm}
            className="flex-1 py-3 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-[#03c355]/20"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-sm">Agendar</span>
          </button>
          
          <button
            onClick={handleWhatsApp}
            className="px-4 py-3 bg-transparent border-2 border-[#03c355] text-[#03c355] font-semibold rounded-lg hover:bg-[#03c355]/10 transition-all active:scale-95 flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

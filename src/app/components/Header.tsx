import { Calendar, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#010101]/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 bg-[#010101]">
              <img
                src={`${import.meta.env.BASE_URL}logo-adesaopro.png`}
                alt="Adesão Pro"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">SDR da Adesão Pro</h1>
              <p className="text-[#03c355] text-xs">Qualificação Inteligente</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-300 hover:text-[#03c355] transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <button 
            onClick={scrollToForm}
            className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-all shadow-lg shadow-[#03c355]/20"
          >
            <Calendar className="w-5 h-5" />
            Agendar Reunião
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-[#03c355] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pt-4 border-t border-gray-800 space-y-3">
            <button 
              onClick={() => scrollToSection('como-funciona')}
              className="block w-full text-left py-2 text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Como Funciona
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="block w-full text-left py-2 text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="block w-full text-left py-2 text-gray-300 hover:text-[#03c355] transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left py-2 text-gray-300 hover:text-[#03c355] transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={scrollToForm}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-all mt-4"
            >
              <Calendar className="w-5 h-5" />
              Agendar Reunião
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

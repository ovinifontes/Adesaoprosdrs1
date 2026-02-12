import { Calendar, MessageCircle, ArrowRight, Shield } from 'lucide-react';

export function CTA() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5500000000000', '_blank');
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c6c34]/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#03c355]/30 bg-gradient-to-br from-[#03c355]/10 via-gray-900 to-gray-900/50 p-8 md:p-12 lg:p-16">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#03c355]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0c6c34]/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            {/* Mini summary */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                Pare de Perder Leads.
                <br />
                <span className="text-[#03c355]">Comece a Agendar Reuniões.</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Atendimento 24/7. Qualificação real. Relatórios objetivos. Follow-up automático.
                <br />
                <strong className="text-white">Você entra só na hora de fechar.</strong>
              </p>

              {/* Benefits recap */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="px-4 py-2 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] text-sm">
                  ✓ Resposta imediata
                </div>
                <div className="px-4 py-2 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] text-sm">
                  ✓ Lead pronto para fechar
                </div>
                <div className="px-4 py-2 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] text-sm">
                  ✓ Escala sem cansaço
                </div>
                <div className="px-4 py-2 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] text-sm">
                  ✓ Follow-up automático
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={scrollToForm}
                className="group relative px-10 py-5 bg-[#03c355] text-white text-lg font-semibold rounded-xl hover:bg-[#02a847] transition-all duration-300 shadow-2xl shadow-[#03c355]/30 hover:shadow-[#03c355]/50 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-3">
                  <Calendar className="w-6 h-6" />
                  Agendar Reunião
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button 
                onClick={handleWhatsApp}
                className="px-10 py-5 bg-transparent border-2 border-[#03c355] text-[#03c355] text-lg font-semibold rounded-xl hover:bg-[#03c355]/10 transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Falar no WhatsApp
                </span>
              </button>
            </div>

            {/* Trust elements */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-400">
                <Shield className="w-5 h-5 text-[#03c355]" />
                <p className="text-sm">Sem compromisso. Escolha um horário e pronto.</p>
              </div>
              <p className="text-sm text-gray-500">
                Após agendar, nosso time confirma e mostra como ativar. Simples e direto.
              </p>
            </div>

            {/* Visual calendar placeholder */}
            <div className="mt-12 p-6 rounded-xl bg-gray-900/50 border border-gray-800 max-w-md mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#03c355]" />
                <p className="text-white font-medium">O que acontece depois:</p>
              </div>
              <ol className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#03c355] font-semibold">1.</span>
                  <span>Você escolhe data e horário na agenda</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#03c355] font-semibold">2.</span>
                  <span>Time confirma por WhatsApp ou e-mail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#03c355] font-semibold">3.</span>
                  <span>Na reunião, mostramos como ativar o SDR</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#03c355] font-semibold">4.</span>
                  <span>Ativação rápida e você já começa a rodar</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

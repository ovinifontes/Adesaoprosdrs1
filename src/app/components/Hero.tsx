import { useLocation } from 'react-router';
import { Calendar, MessageCircle, CheckCircle, Clock, TrendingUp, Zap, Target } from 'lucide-react';

export function Hero() {
  const location = useLocation();
  const isSDRv2 = location.pathname.includes('/sdrv2');

  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5561995324617', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c6c34]/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355]">
                <Zap className="w-4 h-4" />
                Pré-qualificação automática 24/7
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight">
              Pare de Perder Leads.
              <br />
              <span className="text-[#03c355]">Agende Mais Reuniões.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              O <strong className="text-white">SDR da Adesão Pro foi feito para o CONSÓRCIO</strong> atende, qualifica e entrega leads prontos para você fechar. Você entra só na hora de vender.
            </p>

            {/* Bullets */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#03c355]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Resposta em Segundos</h3>
                  <p className="text-sm text-gray-400">24/7, sem demora, sem perder lead</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#03c355]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Qualificação Real</h3>
                  <p className="text-sm text-gray-400">Método de SDR especializado</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#03c355]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Relatório para Fechar</h3>
                  <p className="text-sm text-gray-400">Lead pronto, contexto claro</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-left">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-[#03c355]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">Escala sem Cansaço</h3>
                  <p className="text-sm text-gray-400">Muitos leads, qualidade constante</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={scrollToForm}
                className="group relative px-8 py-4 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-all duration-300 shadow-lg shadow-[#03c355]/20 hover:shadow-[#03c355]/40 hover:scale-105"
              >
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Agendar Reunião
                </span>
              </button>

              {!isSDRv2 && (
                <button 
                  onClick={handleWhatsApp}
                  className="px-8 py-4 bg-transparent border-2 border-[#03c355] text-[#03c355] font-semibold rounded-lg hover:bg-[#03c355]/10 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Falar no WhatsApp
                  </span>
                </button>
              )}
            </div>

            <p className="text-sm text-gray-400">
              Sem compromisso. Escolha um horário e pronto.
            </p>
          </div>

          {/* Right Column - Visual Flow */}
          <div className="relative">
            <div className="relative space-y-4">
              {/* Flow Steps */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#010101] to-[#0c6c34]/5 border border-gray-800 hover:border-[#03c355]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center text-[#03c355] font-bold">
                  1
                </div>
                <div>
                  <p className="text-white font-semibold">Lead chega</p>
                  <p className="text-sm text-gray-400">Anúncio ou pesquisa orgânica</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#010101] to-[#0c6c34]/5 border border-gray-800 hover:border-[#03c355]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center text-[#03c355] font-bold">
                  2
                </div>
                <div>
                  <p className="text-white font-semibold">IA atende em tempo real</p>
                  <p className="text-sm text-gray-400">Resposta imediata, 24/7</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#010101] to-[#0c6c34]/5 border border-gray-800 hover:border-[#03c355]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center text-[#03c355] font-bold">
                  3
                </div>
                <div>
                  <p className="text-white font-semibold">Qualifica com método SDR</p>
                  <p className="text-sm text-gray-400">Perguntas certas, qualificação real</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#010101] to-[#0c6c34]/5 border border-gray-800 hover:border-[#03c355]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center text-[#03c355] font-bold">
                  4
                </div>
                <div>
                  <p className="text-white font-semibold">Gera relatório objetivo</p>
                  <p className="text-sm text-gray-400">Interesse, faixa, objeções, contexto</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#010101] to-[#0c6c34]/5 border border-gray-800 hover:border-[#03c355]/30 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center text-[#03c355] font-bold">
                  5
                </div>
                <div>
                  <p className="text-white font-semibold">Sugere melhor horário</p>
                  <p className="text-sm text-gray-400">Lead pronto para reunião</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-[#03c355]/10 to-[#03c355]/5 border border-[#03c355]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#03c355] flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-white font-semibold">Você entra e fecha</p>
                  <p className="text-sm text-gray-400">Reunião com lead qualificado</p>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-1 h-4/5 bg-gradient-to-b from-transparent via-[#03c355] to-transparent opacity-50" />
            </div>

            <p className="text-center text-sm text-gray-400 mt-6 italic">
              "Você entra quando faz sentido. O resto é automático."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

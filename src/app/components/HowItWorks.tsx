import { ArrowRight, Sparkles, MessageSquare, Target, FileText, Calendar, Handshake } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: Sparkles,
      title: 'Lead chega',
      description: 'Vindo de anúncio, pesquisa ou qualquer canal. O SDR detecta e inicia o atendimento.',
      highlight: false
    },
    {
      number: 2,
      icon: MessageSquare,
      title: 'IA responde em tempo real',
      description: 'Atendimento imediato, 24/7. Sem espera. Sem demora. Sem perder oportunidade.',
      highlight: false
    },
    {
      number: 3,
      icon: Target,
      title: 'Faz perguntas certas e qualifica',
      description: 'Método de SDR especializado em consórcio. Descobre interesse, faixa, contexto e objeções.',
      highlight: false
    },
    {
      number: 4,
      icon: FileText,
      title: 'Gera relatório objetivo',
      description: 'Entrega tudo que você precisa saber: o que o lead quer, faixa de interesse, contexto, objeções.',
      highlight: false
    },
    {
      number: 5,
      icon: Calendar,
      title: 'Indica melhor horário e prepara lead',
      description: 'Sugere momento ideal para reunião e prepara o lead para a conversa com você.',
      highlight: false
    },
    {
      number: 6,
      icon: Handshake,
      title: 'Vendedor entra só na hora certa',
      description: 'Você recebe reunião agendada com lead qualificado e contexto completo. Só fechar.',
      highlight: true
    }
  ];

  return (
    <section id="como-funciona" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            PROCESSO COMPLETO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Como Funciona o <span className="text-[#03c355]">SDR da Adesão Pro</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Do primeiro contato até a reunião agendada. Automático, consistente e orientado para resultado.
          </p>
        </div>

        {/* Steps - Desktop Timeline */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
          {steps.slice(0, 3).map((step, index) => (
            <div key={step.number} className="relative">
              <div className={`p-6 rounded-2xl border ${step.highlight ? 'bg-gradient-to-br from-[#03c355]/20 to-[#03c355]/5 border-[#03c355]' : 'bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800 hover:border-[#03c355]/30'} transition-all group`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${step.highlight ? 'bg-[#03c355] text-white' : 'bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355]'} flex items-center justify-center font-bold text-xl`}>
                    {step.number}
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.highlight ? 'bg-white/10' : 'bg-[#03c355]/10'} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.highlight ? 'text-white' : 'text-[#03c355]'}`} />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#03c355]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {steps.slice(3, 6).map((step, index) => (
            <div key={step.number} className="relative">
              <div className={`p-6 rounded-2xl border ${step.highlight ? 'bg-gradient-to-br from-[#03c355]/20 to-[#03c355]/5 border-[#03c355]' : 'bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800 hover:border-[#03c355]/30'} transition-all group`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${step.highlight ? 'bg-[#03c355] text-white' : 'bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355]'} flex items-center justify-center font-bold text-xl`}>
                    {step.number}
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.highlight ? 'bg-white/10' : 'bg-[#03c355]/10'} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.highlight ? 'text-white' : 'text-[#03c355]'}`} />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#03c355]/40" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Steps - Mobile/Tablet Vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className={`p-6 rounded-2xl border ${step.highlight ? 'bg-gradient-to-br from-[#03c355]/20 to-[#03c355]/5 border-[#03c355]' : 'bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800'} transition-all`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${step.highlight ? 'bg-[#03c355] text-white' : 'bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355]'} flex items-center justify-center font-bold text-xl`}>
                    {step.number}
                  </div>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg ${step.highlight ? 'bg-white/10' : 'bg-[#03c355]/10'} flex items-center justify-center`}>
                    <step.icon className={`w-6 h-6 ${step.highlight ? 'text-white' : 'text-[#03c355]'}`} />
                  </div>
                </div>
                <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

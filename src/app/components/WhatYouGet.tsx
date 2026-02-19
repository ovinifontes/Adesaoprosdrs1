import { CheckCircle } from 'lucide-react';

export function WhatYouGet() {
  const deliverables = [
    'Atendimento em tempo real 24/7 (sem espera, sem demora)',
    'Qualificação completa com método de SDR especializado',
    'Relatórios instantâneos para o vendedor (interesse, faixa, contexto, objeções)',
    'Resumo dos leads desqualificados/finalizados (motivo e histórico)',
    'Relatório diário de performance (total de leads, atendidos, qualificados)',
    'Base de leads registrada e organizada (para prospecção ativa futura)',
    'Follow-up automático e estratégico (nunca esquece nenhum lead)',
    'Sugestão de melhor horário para reunião com cada lead qualificado',
    'Escala ilimitada (atende muitos leads simultaneamente)',
    'Consistência constante (sem cansaço, sem queda de qualidade)'
  ];

  return (
    <section className="py-20 px-4 relative" style={{ display: 'none' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c6c34]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            ENTREGÁVEIS CLAROS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            O Que Você <span className="text-[#03c355]">Recebe</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tudo detalhado. Produto pronto. Ativação rápida. Roda sem depender do seu tempo.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#03c355]/20 border border-[#03c355] flex items-center justify-center group-hover:bg-[#03c355] transition-all">
                  <CheckCircle className="w-4 h-4 text-[#03c355] group-hover:text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-xl bg-[#03c355]/5 border border-[#03c355]/20">
                <p className="text-2xl font-bold text-[#03c355] mb-2">Padronizado</p>
                <p className="text-sm text-gray-400">Para performance</p>
              </div>
              <div className="p-4 rounded-xl bg-[#03c355]/5 border border-[#03c355]/20">
                <p className="text-2xl font-bold text-[#03c355] mb-2">Ativação Rápida</p>
                <p className="text-sm text-gray-400">Ativou e rodou</p>
              </div>
              <div className="p-4 rounded-xl bg-[#03c355]/5 border border-[#03c355]/20">
                <p className="text-2xl font-bold text-[#03c355] mb-2">Plug-and-Play</p>
                <p className="text-sm text-gray-400">Produto pronto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

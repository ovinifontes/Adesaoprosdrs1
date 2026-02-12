import { Award, Brain, Zap, Target } from 'lucide-react';

export function Authority() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c6c34]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            DIFERENCIAL TÉCNICO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Por Que o SDR da Adesão Pro <span className="text-[#03c355]">É Diferente</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não é chatbot genérico. É especialização real em consórcio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-[#03c355]/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center mb-6 group-hover:bg-[#03c355]/20 group-hover:scale-110 transition-all">
              <Award className="w-8 h-8 text-[#03c355]" />
            </div>
            <h3 className="text-2xl mb-4 text-white">Treinado pelos Maiores</h3>
            <p className="text-gray-400 leading-relaxed">
              Base de conhecimento construída com os <strong className="text-white">maiores players do mercado de consórcio</strong>. Técnicas, objeções, contexto real.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-[#03c355]/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center mb-6 group-hover:bg-[#03c355]/20 group-hover:scale-110 transition-all">
              <Brain className="w-8 h-8 text-[#03c355]" />
            </div>
            <h3 className="text-2xl mb-4 text-white">Base Robusta de SDR</h3>
            <p className="text-gray-400 leading-relaxed">
              Metodologia de <strong className="text-white">SDR e conversão aplicada em tempo real</strong>. Não é script fixo. É inteligência adaptada ao lead.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-[#03c355]/30 transition-all group">
            <div className="w-16 h-16 rounded-xl bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center mb-6 group-hover:bg-[#03c355]/20 group-hover:scale-110 transition-all">
              <Zap className="w-8 h-8 text-[#03c355]" />
            </div>
            <h3 className="text-2xl mb-4 text-white">Aplicação em Tempo Real</h3>
            <p className="text-gray-400 leading-relaxed">
              Tudo que foi treinado é aplicado <strong className="text-white">com consistência absoluta</strong>. Sem variação. Sem falha humana.
            </p>
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-[#03c355]/10 to-transparent border border-[#03c355]/30">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-[#03c355] flex items-center justify-center">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-4 text-white">Foco em Processo, Velocidade e Qualidade</h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Não prometemos ganhos garantidos. <strong className="text-white">Prometemos processo padronizado, resposta imediata, qualificação consistente e follow-up automático.</strong>
              </p>
              <p className="text-gray-400 leading-relaxed">
                O SDR da Adesão Pro entrega o lead pronto. <strong className="text-white">Você entra na hora certa. Você fecha a venda.</strong> Simples assim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

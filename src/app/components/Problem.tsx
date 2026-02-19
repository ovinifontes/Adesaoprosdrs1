import { AlertCircle, Clock, Battery, UserX, XCircle } from 'lucide-react';

export function Problem() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c6c34]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Problem */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Você Sabe Exatamente o <span className="text-[#03c355]">Problema</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Todo vendedor de consórcio que roda tráfego enfrenta as mesmas perdas todos os dias:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="group p-6 rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-transparent hover:border-red-700/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-950/50 border border-red-900 flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Lead esfria em minutos</h3>
                <p className="text-gray-400">
                  Demora para responder e o interesse some. Quando você volta, já foi para a concorrência.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-transparent hover:border-red-700/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-950/50 border border-red-900 flex items-center justify-center">
                <UserX className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Horas com desqualificados</h3>
                <p className="text-gray-400">
                  Você perde tempo com curioso, sem dinheiro, "só vendo". Sua energia vai embora sem retorno.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-transparent hover:border-red-700/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-950/50 border border-red-900 flex items-center justify-center">
                <Battery className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Cansaço derruba o atendimento</h3>
                <p className="text-gray-400">
                  No começo do dia você é fera. No final, mal responde. Qualidade despenca.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-6 rounded-xl border border-red-900/30 bg-gradient-to-br from-red-950/20 to-transparent hover:border-red-700/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-red-950/50 border border-red-900 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl text-white mb-2">Follow-up some e a venda vai embora</h3>
                <p className="text-gray-400">
                  Você esquece de voltar. Lead esquece de você. Oportunidade perdida para sempre.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agitation */}
        <div className="text-center mb-16 p-8 rounded-2xl bg-gradient-to-br from-[#0c6c34]/10 to-transparent border border-gray-800">
          <AlertCircle className="w-12 h-12 text-[#03c355] mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Você investe em tráfego, gera leads, mas <span className="text-[#03c355] font-semibold">perde dinheiro</span> por não conseguir atender, qualificar e fazer follow-up com consistência. <span className="text-white">O lead chega certo. O problema está no processo.</span>
          </p>
        </div>

        {/* Solution */}
        <div className="text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            A SOLUÇÃO ESTÁ PRONTA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            O <span className="text-[#03c355]">SDR da Adesão Pro</span> assume o Pré-Atendimento
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Produto padronizado para performance. <strong className="text-white">Aumente sua conversão.</strong> E pare de perder tempo com leads desqualificados.
          </p>
        </div>
      </div>
    </section>
  );
}

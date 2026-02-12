import { CheckCircle, XCircle } from 'lucide-react';

export function ForWho() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c6c34]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Para Quem É (e Para Quem <span className="text-[#03c355]">Não É</span>)
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Clareza total antes de você decidir. Sem perder tempo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Para Quem É */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#03c355]/10 to-transparent border border-[#03c355]/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#03c355] flex items-center justify-center">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-[#03c355]">Para Quem É</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Vendedor que <strong className="text-white">roda tráfego e recebe volume de leads</strong> (Meta Ads, Google Ads, orgânico)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Quem quer <strong className="text-white">mais reuniões no calendário</strong> com leads qualificados
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Quem quer <strong className="text-white">parar de perder tempo</strong> com curioso e desqualificado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Quem quer <strong className="text-white">follow-up consistente</strong> sem depender de memória ou energia
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Quem valoriza <strong className="text-white">processo padronizado e performance</strong> comprovada
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Quem quer <strong className="text-white">escalar sem aumentar cansaço</strong> ou perder qualidade
                </span>
              </li>
            </ul>
          </div>

          {/* Para Quem NÃO É */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-red-950/20 to-transparent border border-red-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900 flex items-center justify-center">
                <XCircle className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl text-red-400">Para Quem Não É</h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem quer algo <strong className="text-gray-300">totalmente personalizado "do seu jeito"</strong> — isso é um produto padronizado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem <strong className="text-gray-300">não quer processo</strong> e prefere atender tudo manualmente
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem <strong className="text-gray-300">não agenda reuniões</strong> e não quer falar com lead qualificado
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem <strong className="text-gray-300">não pretende responder leads qualificados</strong> ou dar sequência ao processo
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem busca <strong className="text-gray-300">milagre sem consistência</strong> — isso exige que você converta reuniões
                </span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Quem não roda tráfego e <strong className="text-gray-300">não tem fluxo de leads</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12 p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800">
          <p className="text-lg text-gray-300">
            <strong className="text-white">Produto pronto. Padronizado. Performance.</strong> Se você busca isso, está no lugar certo.
          </p>
        </div>
      </div>
    </section>
  );
}

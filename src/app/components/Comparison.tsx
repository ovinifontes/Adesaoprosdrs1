import { Check, X } from 'lucide-react';

export function Comparison() {
  const comparisonItems = [
    {
      feature: 'Disponibilidade',
      human: '8-12h por dia',
      ai: '24/7 sem parar',
      aiWins: true
    },
    {
      feature: 'Tempo de resposta',
      human: 'Varia (minutos/horas)',
      ai: 'Imediato (segundos)',
      aiWins: true
    },
    {
      feature: 'Consistência e energia',
      human: 'Cai durante o dia',
      ai: 'Constante sempre',
      aiWins: true
    },
    {
      feature: 'Atendimento simultâneo',
      human: '1 lead por vez',
      ai: 'Ilimitado',
      aiWins: true
    },
    {
      feature: 'Follow-up',
      human: 'Depende de lembrar',
      ai: 'Automático (nunca esquece)',
      aiWins: true
    },
    {
      feature: 'Qualidade constante',
      human: 'Varia (humor, cansaço)',
      ai: 'Sempre igual',
      aiWins: true
    },
    {
      feature: 'Relatório estruturado',
      human: 'Manual (se fizer)',
      ai: 'Automático e completo',
      aiWins: true
    },
    {
      feature: 'Base de leads organizada',
      human: 'Difícil manter',
      ai: 'Registro automático',
      aiWins: true
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            SDR Humano vs <span className="text-[#03c355]">SDR da Adesão Pro</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comparação objetiva. Sem exagero. Só fatos.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left p-6 bg-gray-900/50 text-gray-400 font-semibold">Critério</th>
                <th className="text-center p-6 bg-gray-900/50 text-gray-400 font-semibold">SDR Humano</th>
                <th className="text-center p-6 bg-gradient-to-br from-[#03c355]/10 to-[#03c355]/5 text-[#03c355] font-semibold">SDR da Adesão Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-800 last:border-b-0 hover:bg-gray-900/30 transition-colors"
                >
                  <td className="p-6 text-white font-medium">{item.feature}</td>
                  <td className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-400">{item.human}</span>
                    </div>
                  </td>
                  <td className="p-6 text-center bg-gradient-to-br from-[#03c355]/5 to-transparent">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-5 h-5 text-[#03c355] flex-shrink-0" />
                      <span className="text-white font-medium">{item.ai}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {comparisonItems.map((item, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800"
            >
              <h3 className="text-white font-semibold mb-4 text-lg">{item.feature}</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-900/50">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-1">SDR Humano</p>
                    <p className="text-gray-400">{item.human}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-[#03c355]/5 border border-[#03c355]/20">
                  <Check className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#03c355]/70 mb-1">SDR da Adesão Pro</p>
                    <p className="text-white font-medium">{item.ai}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800">
          <p className="text-lg text-gray-300">
            <strong className="text-white">Objetivo.</strong> Sem "humilhar" humano. Apenas mostrando <span className="text-[#03c355]">onde a tecnologia ajuda você a escalar</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

import { 
  Zap, Target, CheckCircle, FileText, RefreshCw, TrendingUp, 
  Battery, Database, FileSearch, Award, Clock, Shield 
} from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: 'Resposta Imediata. Sem Perder Lead por Demora.',
      description: 'Atendimento em segundos, 24/7. Lead não esfria esperando você.'
    },
    {
      icon: Target,
      title: 'Qualificação com Método (SDR de Consórcio)',
      description: 'Perguntas certas, técnica de SDR, filtro real. Não é chatbot genérico.'
    },
    {
      icon: CheckCircle,
      title: 'Você Fala Só com Lead que Vale a Pena',
      description: 'Curioso, desqualificado e "só vendo" não chegam até você. Sua energia é preservada.'
    },
    {
      icon: FileText,
      title: 'Relatório Pronto para Fechar',
      description: 'Interesse, faixa, contexto, objeções, melhor horário. Tudo que você precisa para reunião.'
    },
    {
      icon: RefreshCw,
      title: 'Follow-up Automático e Estratégico',
      description: 'Nunca esquece de voltar. Lead não some. Oportunidade não se perde.'
    },
    {
      icon: TrendingUp,
      title: 'Escala sem Queda de Qualidade',
      description: 'Atende 1 ou 100 leads ao mesmo tempo. Qualidade constante, sem sobrecarga.'
    },
    {
      icon: Battery,
      title: 'Energia Constante, 24/7',
      description: 'Sem cansaço. Sem queda de performance. Primeiro lead do dia = último lead da noite.'
    },
    {
      icon: Database,
      title: 'Base de Leads Registrada para o Futuro',
      description: 'Todos os contatos ficam organizados. Prospecção ativa quando você quiser.'
    },
    {
      icon: FileSearch,
      title: 'Resumo até dos Finalizados (Nada se Perde)',
      description: 'Mesmo lead desqualificado gera relatório do motivo. Informação para futuras conversões.'
    },
    {
      icon: Award,
      title: 'Menos Desgaste. Mais Reuniões.',
      description: 'Você para de queimar energia com desqualificado e foca em fechar vendas.'
    },
    {
      icon: Clock,
      title: 'Seu Tempo Volta para o que Importa',
      description: 'Você não precisa ficar "on" 24/7. O SDR cuida do pré-atendimento.'
    },
    {
      icon: Shield,
      title: 'Consistência que Humano Não Consegue',
      description: 'Processo igual para todos. Sem variação de humor, cansaço ou esquecimento.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            RESULTADO DIRETO
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            O Que Você <span className="text-[#03c355]">Ganha de Verdade</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Benefícios práticos e mensuráveis. Sem enrolação.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-[#03c355]/50 hover:bg-gradient-to-br hover:from-[#03c355]/5 hover:to-transparent transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center mb-4 group-hover:bg-[#03c355]/20 group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-[#03c355]" />
              </div>
              <h3 className="text-lg mb-2 text-white group-hover:text-[#03c355] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

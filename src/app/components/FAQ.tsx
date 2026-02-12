import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Serve para qualquer vendedor de consórcio?',
      answer: 'Sim. Independente de você ser autônomo, ter equipe, corretora ou escritório. Se você vende consórcio e roda tráfego (ou recebe leads), o SDR funciona para você. É padronizado para performance no mercado de consórcio.'
    },
    {
      question: 'Ele atende em tempo real mesmo?',
      answer: 'Sim. Resposta em segundos, 24 horas por dia, 7 dias por semana. Lead não espera. Lead não esfria. O atendimento começa imediatamente quando o contato chega.'
    },
    {
      question: 'Atende vários leads ao mesmo tempo?',
      answer: 'Sim. Pode ser 1 lead ou 100 simultaneamente. Qualidade constante, sem sobrecarga, sem queda de performance. Você escala sem limites.'
    },
    {
      question: 'E se o lead não for bom?',
      answer: 'O SDR identifica, finaliza de forma educada e gera um resumo do motivo (curioso, sem perfil, etc.). Você recebe o relatório e pode usar essa informação no futuro. Nada se perde.'
    },
    {
      question: 'Como eu recebo o lead qualificado?',
      answer: 'Você recebe um relatório completo: nome, contato, o que ele quer, faixa de interesse, contexto da conversa, objeções levantadas e sugestão de melhor horário para reunião. Lead pronto para você entrar e fechar.'
    },
    {
      question: 'Ele faz follow-up automaticamente?',
      answer: 'Sim. Follow-up estratégico e automático. Nunca esquece de voltar. Lead não some. Oportunidade não se perde por falta de acompanhamento.'
    },
    {
      question: 'Preciso ficar configurando e alimentando?',
      answer: 'Não. É produto pronto. Padronizado. Você ativa e roda. Não precisa ficar ajustando, treinando ou alimentando. Já vem otimizado para consórcio.'
    },
    {
      question: 'É um produto pronto ou personalizado?',
      answer: 'Produto pronto e padronizado para performance. Não é consultoria. Não é sob medida. Se você quer processo comprovado, ativação rápida e resultado, é isso. Se quer algo 100% "do seu jeito", não é para você.'
    },
    {
      question: 'Como funciona a base de leads registrada?',
      answer: 'Todos os contatos ficam organizados em um painel simples. Você pode consultar histórico, fazer prospecção ativa e revisar interações. É um bônus de organização, mas o foco é: resposta imediata + qualificação + reunião.'
    },
    {
      question: 'Como começo depois de agendar?',
      answer: 'Você agenda uma reunião (sem compromisso). Nosso time confirma e mostra como ativar. Ativação rápida. Você não fica preso em processo longo. Simples e direto.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c6c34]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            PERGUNTAS FREQUENTES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Dúvidas que Você <span className="text-[#03c355]">Pode Ter</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Respostas diretas. Sem enrolação.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-900/50 overflow-hidden hover:border-[#03c355]/30 transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 group"
              >
                <span className="text-lg text-white font-medium group-hover:text-[#03c355] transition-colors">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#03c355] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

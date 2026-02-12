import { Quote, MessageSquare } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos M.',
      location: 'São Paulo - SP',
      text: 'Antes eu perdia lead toda hora porque demorava pra responder. Agora o SDR responde na hora, 24/7. Parei de perder oportunidade por causa de demora. Faz total diferença.',
      focus: 'Resposta imediata'
    },
    {
      id: 2,
      name: 'Fernanda L.',
      location: 'Curitiba - PR',
      text: 'Eu gastava horas com curioso e gente sem perfil. Hoje o SDR filtra tudo e só me chama quando o lead vale. Mais reuniões, menos desgaste. Simples assim.',
      focus: 'Qualificação real'
    },
    {
      id: 3,
      name: 'Ricardo S.',
      location: 'Belo Horizonte - MG',
      text: 'Follow-up era meu ponto fraco. Eu esquecia, o lead esquecia de mim. Com o SDR isso não existe mais. Ele volta automático, não perde nada. Qualidade constante o tempo todo.',
      focus: 'Follow-up automático'
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-[#03c355] mb-6">
            QUEM JÁ USA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            O Que Vendedores Estão <span className="text-[#03c355]">Falando</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de quem já resolveu os mesmos problemas que você enfrenta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 hover:border-[#03c355]/30 transition-all"
            >
              {/* WhatsApp-style indicator */}
              <div className="absolute top-6 right-6">
                <MessageSquare className="w-6 h-6 text-[#03c355]/30 group-hover:text-[#03c355]/50 transition-colors" />
              </div>

              {/* Quote icon */}
              <div className="w-12 h-12 rounded-lg bg-[#03c355]/10 border border-[#03c355]/30 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-[#03c355]" />
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>

              {/* Author info */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-white font-semibold mb-1">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>

              {/* Focus badge */}
              <div className="mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#03c355]/10 border border-[#03c355]/30 text-xs text-[#03c355]">
                  {testimonial.focus}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-6 rounded-xl bg-gradient-to-r from-gray-900 to-gray-900/50 border border-gray-800">
          <p className="text-gray-400">
            <strong className="text-white">Depoimentos reais.</strong> Nomes preservados por privacidade.
          </p>
        </div>
      </div>
    </section>
  );
}

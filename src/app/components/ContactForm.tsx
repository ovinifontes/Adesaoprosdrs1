import { useState } from 'react';
import { Send, Shield, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock submission - in real scenario, this would send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Quer que a Gente <span className="text-[#03c355]">Entre em Contato?</span>
          </h2>
          <p className="text-lg text-gray-300">
            Deixe seus dados. Vamos te chamar para agendar uma reunião sem compromisso.
          </p>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20 transition-all"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  WhatsApp (com DDD)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20 transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-all duration-300 shadow-lg shadow-[#03c355]/20 hover:shadow-[#03c355]/40 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Quero que Me Chamem
              </button>

              <div className="flex items-start gap-3 pt-4 border-t border-gray-800">
                <Shield className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-300">Seus dados ficam seguros.</strong> Entraremos em contato apenas para agendar uma reunião comercial. Nada de spam ou compartilhamento com terceiros.
                </p>
              </div>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full bg-[#03c355]/20 border-2 border-[#03c355] flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-[#03c355]" />
              </div>
              <h3 className="text-2xl text-white mb-3">Recebemos Seus Dados!</h3>
              <p className="text-gray-300 mb-2">
                Em breve entraremos em contato para agendar sua reunião.
              </p>
              <p className="text-sm text-gray-400">
                Fique de olho no WhatsApp e no e-mail.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { Mail, Phone, Shield } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 border-t border-gray-800 bg-gradient-to-b from-[#010101] to-[#0c6c34]/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 bg-[#010101]">
                <img
                  src={`${import.meta.env.BASE_URL}logo-adesaopro.png`}
                  alt="Adesão Pro"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold">SDR da Adesão Pro</h3>
                <p className="text-[#03c355] text-xs">Qualificação Inteligente</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Produto de IA especializado em pré-atendimento e qualificação de leads para vendedores de consórcio.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5565992249488" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#03c355] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                WhatsApp: (65) 99224-9488
              </a>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="text-white font-semibold mb-4">Privacidade & Segurança</h4>
            <div className="flex items-start gap-2 mb-3">
              <Shield className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-0.5" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Seus dados são tratados de acordo com a LGPD. Não compartilhamos com terceiros.
              </p>
            </div>
            <p className="text-xs text-gray-500">
              Este site não se destina à coleta de dados pessoais sensíveis (PII).
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>© {currentYear} Adesão Pro. Todos os direitos reservados.</p>
            <p>CNPJ: 00.000.000/0000-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

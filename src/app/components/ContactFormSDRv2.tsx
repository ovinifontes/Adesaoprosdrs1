import { useState, useRef, useEffect } from 'react';
import { Send, Shield, CheckCircle, AlertCircle, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const MAX_PHONE_DIGITS = 11;
const TOTAL_STEPS = 3;
const CAPTURA_TABLE_SDRV2 = 'captura_lp_adesaopro_sdrv2';
const WEBHOOK_SDRV2 = 'https://adesao-pro-n8n-web.rmidkm.easypanel.host/webhook/site_sdrv2_adesaopro_avigrup';

function formatPhoneDisplay(digits: string): string {
  const d = digits.slice(0, MAX_PHONE_DIGITS);
  if (d.length <= 2) return d.length ? `(${d}` : '';
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, '').slice(0, MAX_PHONE_DIGITS);
  if (digits.length >= 11) return '55' + digits.slice(-11);
  return '55' + digits;
}

const OPCOES_TIPO_BEM = ['Motos', 'Autos', 'Pesados', 'Imoveis', 'Serviço'] as const;
const OPCOES_COTAS = ['Menos de 5', 'Até 10', 'Até 15', 'Até 20', 'Acima de 30 cotas'] as const;
const OPCOES_MARKETING = ['Até 1.000', 'Até 3.000', 'Até 5.000', 'Acima de 7.500'] as const;
const OPCOES_LEADS = ['Até 100 Leads', 'Até 300', 'Até 500', 'Acima de 1.000'] as const;
const OPCOES_URGENCIA = ['Imediatamente', 'Ainda esse mês', 'Próximos 3 meses', 'Só estou pesquisando'] as const;

interface FormData {
  name: string;
  phone: string;
  tipo_bem: string;
  quantidade_cotas: string;
  marketing_investimento: string;
  quantidade_leads: string;
  urgencia: string;
  quanto_valor: string;
}

const initialFormData: FormData = {
  name: '',
  phone: '',
  tipo_bem: '',
  quantidade_cotas: '',
  marketing_investimento: '',
  quantidade_leads: '',
  urgencia: '',
  quanto_valor: ''
};

function SelectOpcoes({
  label,
  options,
  value,
  onChange,
  id
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  id: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [open]);

  const displayText = value || 'Selecionar...';

  return (
    <div className="mb-6 relative" ref={ref}>
      <p className="text-white font-medium mb-3">{label}</p>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-left transition-colors hover:border-[#03c355]/50 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20"
      >
        <span className={value ? 'text-white' : 'text-gray-500'}>{displayText}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 py-1 rounded-lg border border-gray-700 bg-gray-900 shadow-xl z-10 max-h-56 overflow-auto">
          {options.map((op) => (
            <button
              key={op}
              type="button"
              onClick={() => {
                onChange(op);
                setOpen(false);
              }}
              className={`w-full px-4 py-3 text-left transition-colors hover:bg-[#03c355]/10 ${
                value === op ? 'bg-[#03c355]/10 text-[#03c355]' : 'text-gray-300'
              }`}
            >
              {op}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Formulário em 3 passos para SDRv2: salva em captura_lp_adesaopro_sdrv2. */
export function ContactFormSDRv2() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step, submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const digits = value.replace(/\D/g, '').slice(0, MAX_PHONE_DIGITS);
      setFormData((prev) => ({ ...prev, phone: formatPhoneDisplay(digits) }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canGoStep2 = formData.name.trim().length >= 2 && formData.phone.replace(/\D/g, '').length >= 10;
  const canGoStep3 =
    formData.tipo_bem &&
    formData.quantidade_cotas &&
    formData.marketing_investimento &&
    formData.quantidade_leads;
  const canSubmit = formData.urgencia && formData.quanto_valor.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < TOTAL_STEPS) return;
    setError(null);
    if (!canSubmit) return;
    setLoading(true);

    const telefoneNormalizado = normalizePhone(formData.phone);

    const payload = {
      nome: formData.name.trim(),
      telefone: telefoneNormalizado,
      tipo_bem: formData.tipo_bem || null,
      quantidade_cotas: formData.quantidade_cotas || null,
      marketing_investimento: formData.marketing_investimento || null,
      quantidade_leads: formData.quantidade_leads || null,
      urgencia: formData.urgencia || null,
      quanto_valor: formData.quanto_valor.trim() || null
    };

    const { error: insertError } = await supabase.from(CAPTURA_TABLE_SDRV2).insert(payload);

    if (insertError) {
      setLoading(false);
      setError('Não foi possível enviar. Tente novamente ou entre em contato pelo WhatsApp.');
      return;
    }

    try {
      await fetch(WEBHOOK_SDRV2, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch {
      // Webhook em segundo plano; não bloqueia a tela de sucesso
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact-form" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 text-center">
            <div className="w-20 h-20 rounded-full bg-[#03c355]/20 border-2 border-[#03c355] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-[#03c355]" />
            </div>
            <h3 className="text-2xl text-white mb-3">Obrigado!</h3>
            <p className="text-gray-300 mb-2">
              Recebemos suas respostas. Em breve entraremos em contato para agendar sua reunião.
            </p>
            <p className="text-sm text-gray-400">
              Fique de olho no WhatsApp. Atualize a página quando quiser preencher novamente.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-[#010101] pointer-events-none" />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <p className="text-[#03c355] font-medium">
            Passo {step} de {TOTAL_STEPS}
          </p>
          <h2 className="text-3xl md:text-4xl mb-4 mt-2">
            Quer que a Gente <span className="text-[#03c355]">Entre em Contato?</span>
          </h2>
        </div>

        <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <div>
                  <label htmlFor="sdrv2-name" className="block text-white font-medium mb-2">
                    1. Qual é o seu nome completo?
                  </label>
                  <input
                    type="text"
                    id="sdrv2-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="sdrv2-phone" className="block text-white font-medium mb-2">
                    2. Qual é o seu WhatsApp para contato?
                  </label>
                  <input
                    type="tel"
                    id="sdrv2-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20"
                    placeholder="Digite seu whatsapp"
                  />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-white font-semibold mb-4">Dados do seu negócio</p>
                <SelectOpcoes
                  label="3. Qual tipo de Bem você mais Vende?"
                  id="sdrv2-tipo_bem"
                  options={[...OPCOES_TIPO_BEM]}
                  value={formData.tipo_bem}
                  onChange={(v) => setFormData((prev) => ({ ...prev, tipo_bem: v }))}
                />
                <SelectOpcoes
                  label="4. Quantas cotas em média você vende por mês?"
                  id="sdrv2-quantidade_cotas"
                  options={[...OPCOES_COTAS]}
                  value={formData.quantidade_cotas}
                  onChange={(v) => setFormData((prev) => ({ ...prev, quantidade_cotas: v }))}
                />
                <SelectOpcoes
                  label="5. Quanto você investe em marketing hoje?"
                  id="sdrv2-marketing_investimento"
                  options={[...OPCOES_MARKETING]}
                  value={formData.marketing_investimento}
                  onChange={(v) => setFormData((prev) => ({ ...prev, marketing_investimento: v }))}
                />
                <SelectOpcoes
                  label="6. Quantos leads você recebe por mês?"
                  id="sdrv2-quantidade_leads"
                  options={[...OPCOES_LEADS]}
                  value={formData.quantidade_leads}
                  onChange={(v) => setFormData((prev) => ({ ...prev, quantidade_leads: v }))}
                />
              </>
            )}

            {step === 3 && (
              <>
                <SelectOpcoes
                  label="7. Quão urgente você planeja resolver seu problema de atendimento?"
                  id="sdrv2-urgencia"
                  options={[...OPCOES_URGENCIA]}
                  value={formData.urgencia}
                  onChange={(v) => setFormData((prev) => ({ ...prev, urgencia: v }))}
                />
                <div>
                  <label htmlFor="sdrv2-quanto_valor" className="block text-white font-medium mb-2">
                    8. Quanto você está disposto a investir para resolver seu problema?
                  </label>
                  <input
                    type="text"
                    id="sdrv2-quanto_valor"
                    name="quanto_valor"
                    value={formData.quanto_valor}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-[#03c355] focus:outline-none focus:ring-2 focus:ring-[#03c355]/20"
                    placeholder="Valor do investimento"
                  />
                </div>
              </>
            )}

            {error && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {error}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="flex items-center justify-center gap-2 py-4 px-6 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Voltar
                </button>
              ) : null}
              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s + 1)}
                  disabled={
                    (step === 1 && !canGoStep2) || (step === 2 && !canGoStep3)
                  }
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Próximo
                  <ChevronRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading || !canSubmit}
                  className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#03c355] text-white font-semibold rounded-lg hover:bg-[#02a847] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-gray-800">
              <Shield className="w-5 h-5 text-[#03c355] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-gray-300">Seus dados ficam seguros.</strong> Entraremos em contato apenas para agendar uma reunião comercial.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

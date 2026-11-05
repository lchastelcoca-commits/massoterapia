import React from 'react';
import { CalendarDays, UserCheck, CreditCard, Sparkles } from 'lucide-react';

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: '01',
      icon: CalendarDays,
      title: 'Selecione o Serviço e Horário',
      description: 'Navegue pelos nossos procedimentos com preços transparentes, duração e benefícios. Escolha o dia e o horário que melhor se encaixam na sua rotina.',
    },
    {
      step: '02',
      icon: UserCheck,
      title: 'Preencha seus Dados (Sem Cartão)',
      description: 'Informe apenas seu nome, WhatsApp e e-mail para envio do comprovante. Não solicitamos dados de cartão de crédito e nenhuma cobrança é feita online.',
    },
    {
      step: '03',
      icon: Sparkles,
      title: 'Confirmação Imediata',
      description: 'Seu horário fica imediatamente reservado no estúdio. Você recebe os detalhes no WhatsApp e tem acesso ao agendamento pelo próprio site.',
    },
    {
      step: '04',
      icon: CreditCard,
      title: 'Compareça e Pague no Local',
      description: 'No dia agendado, venha desfrutar do seu atendimento. O pagamento é realizado apenas após a sessão: aceitamos PIX, cartões de débito/crédito e dinheiro.',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-3">
            Passo a Passo Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Como funciona o agendamento sem cobrança antecipada
          </h2>
          <p className="text-base text-[#5E564E] leading-relaxed">
            Criamos uma experiência sem atritos: você garante a sua vaga com antecedência e só paga quando for atendido no estúdio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white rounded-xl p-6 border border-[#EAE3D9] shadow-xs flex flex-col justify-between hover:border-[#D5C7B7] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-serif font-bold tracking-widest text-[#8F7C6B]">
                      PASSO {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#F5EFE6] flex items-center justify-center text-[#2A3B32]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-[#1F2421] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#665E55] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cancellation and Reschedule Callout */}
        <div className="mt-12 bg-[#F3EDE3] border border-[#E0D5C5] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-left">
            <h4 className="text-base font-semibold text-[#1F2421] mb-1">
              Imprevistos acontecem? Sem estresse e sem multas.
            </h4>
            <p className="text-sm text-[#5C534B] leading-relaxed">
              Você pode reagendar ou cancelar gratuitamente com até <strong>2 horas de antecedência</strong> direto pelo nosso site ou pelo WhatsApp. Sem burocracia.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full md:w-auto px-6 py-3 text-sm font-medium text-white bg-[#2A3B32] hover:bg-[#1C2822] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Escolher Horário Agora
          </button>
        </div>
      </div>
    </section>
  );
};

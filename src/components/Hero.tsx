import React from 'react';
import { HERO_IMAGE } from '../data/servicesData';
import { ShieldCheck, Clock, Sparkles, CreditCard, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Editorial Headline & Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Quiet text kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-4">
              <span>Studio de Bem-Estar</span>
              <span aria-hidden="true">·</span>
              <span>São Paulo</span>
              <span aria-hidden="true">·</span>
              <span>Sem cobrança antecipada</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-normal text-[#1F2421] leading-[1.12] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              O alívio profundo do seu corpo e a delicadeza no cuidado com a pele.
            </h1>

            <p className="text-base sm:text-lg text-[#5A544C] leading-relaxed mb-8 max-w-xl">
              Massoterapia clínica e relaxante, e epilação suave com cera morna hipoalergênica. 
              Consulte nossa tabela de preços e <strong>reserve seu horário sem pagar nada online</strong>: o pagamento é feito diretamente no estúdio no dia do seu atendimento.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 text-base font-medium text-white bg-[#2A3B32] hover:bg-[#1C2822] rounded-md transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Agendar Atendimento</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="px-6 py-3.5 text-base font-medium text-[#2A3B32] bg-[#FAF8F5] hover:bg-[#EDE6DC] border border-[#D5C9BA] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Ver Serviços & Preços
              </button>
            </div>

            {/* Assurance Note */}
            <div className="p-4 rounded-lg bg-[#F3EDE3] border border-[#E4DACB] flex items-start gap-3">
              <CreditCard className="w-5 h-5 text-[#705238] shrink-0 mt-0.5" />
              <div className="text-xs text-[#524941] leading-relaxed">
                <span className="font-semibold text-[#2F2924] block mb-0.5">
                  Reserva 100% sem cobrança no site
                </span>
                Você escolhe data e horário livres, preenche seus dados para contato e paga apenas no estúdio após a sessão via PIX, Débito, Crédito ou Dinheiro.
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#E2D8CA] aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={HERO_IMAGE}
                alt="Ambiente acolhedor e minimalista do studio de massoterapia e epilação"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

              {/* Quiet caption inside image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-white/40 shadow-xs flex items-center justify-between text-xs text-[#2A2621]">
                <div>
                  <p className="font-medium text-sm text-[#1F2421]">Ambiente Privativo & Acolhedor</p>
                  <p className="text-[#6D655E]">Lençóis descartáveis e aromaterapia botânica</p>
                </div>
                <div className="text-right pl-4 border-l border-[#E5DDD2] text-xs">
                  <span className="font-semibold text-[#2A3B32] block">Jardins, São Paulo</span>
                  <span className="text-[#786E64] text-[11px]">Cabines climatizadas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Strip below hero */}
        <div className="mt-14 pt-8 border-t border-[#EAE3D9] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-md bg-[#EBE3D7] flex items-center justify-center text-[#705238] shrink-0">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F2421]">Pagamento no Local</h4>
              <p className="text-xs text-[#6B6359] mt-0.5">Sem taxa prévia. PIX, cartões ou dinheiro.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-md bg-[#EBE3D7] flex items-center justify-center text-[#705238] shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F2421]">100% Descartável</h4>
              <p className="text-xs text-[#6B6359] mt-0.5">Ceras e materiais descartados por sessão.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-md bg-[#EBE3D7] flex items-center justify-center text-[#705238] shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F2421]">Pontualidade Rigorosa</h4>
              <p className="text-xs text-[#6B6359] mt-0.5">Sem atrasos e cabines com isolamento acústico.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-md bg-[#EBE3D7] flex items-center justify-center text-[#705238] shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#1F2421]">Chá & Ritual de Boas-Vindas</h4>
              <p className="text-xs text-[#6B6359] mt-0.5">Infusões botânicas quentes ou geladas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

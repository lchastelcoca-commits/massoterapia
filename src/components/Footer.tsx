import React from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { LOGO_IMAGE } from '../data/servicesData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenMyAppointments: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenBooking,
  onOpenMyAppointments,
}) => {
  return (
    <footer className="bg-[#1F2421] text-[#E5DDD2] pt-16 pb-12 border-t border-[#313A34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_IMAGE}
                alt="Alessandra Chastel"
                className="w-12 h-12 rounded-full object-cover border border-[#C5A880]/50 shrink-0"
              />
              <div>
                <span className="text-xl font-serif font-bold text-white tracking-tight block leading-tight">
                  Alessandra Chastel
                </span>
                <span className="text-[11px] text-[#C5A880] uppercase tracking-wider block font-medium">
                  Massoterapia & Epilação
                </span>
              </div>
            </div>
            <p className="text-xs text-[#C5A880] italic font-serif mb-3">
              Cuidado que relaxa | Beleza que transforma
            </p>
            <p className="text-xs text-[#A89F95] leading-relaxed mb-6">
              Atendimento personalizado com técnicas integrativas de massoterapia clínica e relaxante, e epilação suave com cera morna hipoalergênica.
            </p>
            <div className="text-xs text-[#C5BBAE] space-y-1">
              <span className="block font-medium text-white">CNPJ: 45.892.102/0001-44</span>
              <span>Alvará Sanitário Anvisa nº 2026/SP-4821</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Localização & Contato
            </h4>
            <ul className="space-y-3 text-xs text-[#B5ABA0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8FA89B] shrink-0 mt-0.5" />
                <span>
                  Alameda Lorena, 1420 - Jardins<br />
                  São Paulo - SP, CEP 01424-001<br />
                  <span className="text-[#8FA89B]">Estacionamento conveniado no local</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8FA89B] shrink-0" />
                <span>(11) 3288-4490</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#8FA89B] shrink-0" />
                <a
                  href="https://wa.me/5511999998888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline transition-colors"
                >
                  WhatsApp: (11) 99999-8888
                </a>
              </li>
            </ul>
          </div>

          {/* Hours of Operation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Horários de Atendimento
            </h4>
            <ul className="space-y-2 text-xs text-[#B5ABA0]">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#8FA89B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Segunda a Sexta</span>
                  <span>08:00 às 20:00 (último horário às 19:15)</span>
                </div>
              </li>
              <li className="flex items-start gap-2 pt-2 border-t border-[#2F3831]">
                <Clock className="w-4 h-4 text-[#8FA89B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-white block">Sábados</span>
                  <span>08:30 às 17:30</span>
                </div>
              </li>
              <li className="pt-2 text-[#8FA89B]">
                Domingos e Feriados: Fechado
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Agendamento Fácil
            </h4>
            <p className="text-xs text-[#A89F95] mb-4">
              Reserve seu horário online sem necessidade de cartão de crédito. Pague somente após seu procedimento.
            </p>
            <div className="space-y-2.5">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 px-4 bg-[#3B5446] hover:bg-[#476655] text-white text-xs font-semibold rounded-md transition-colors text-center cursor-pointer"
              >
                Agendar Novo Horário
              </button>
              <button
                onClick={onOpenMyAppointments}
                className="w-full py-2 px-4 bg-transparent hover:bg-white/5 border border-[#48534C] text-[#D1C7BA] hover:text-white text-xs font-medium rounded-md transition-colors text-center cursor-pointer"
              >
                Consultar Meus Agendamentos
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2F3831] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8379]">
          <p>© {new Date().getFullYear()} Alessandra Chastel · Massoterapia e Epilação. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#8FA89B]">Sem pagamento antecipado · Agendamento 100% gratuito</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

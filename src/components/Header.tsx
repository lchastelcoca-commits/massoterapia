import React, { useState } from 'react';
import { Calendar, Menu, X, Sparkles } from 'lucide-react';
import { LOGO_IMAGE } from '../data/servicesData';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenMyAppointments: () => void;
  appointmentsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onOpenMyAppointments,
  appointmentsCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand title wordmark with official logo */}
          <a
            href="#"
            className="group flex items-center gap-3 whitespace-nowrap shrink-0"
          >
            <img
              src={LOGO_IMAGE}
              alt="Alessandra Chastel - Massoterapia e Epilação"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shadow-xs border border-[#C5A880]/50 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1F2421] leading-tight">
                Alessandra Chastel
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A7968] font-medium leading-none">
                Massoterapia e Epilação
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#59534C]">
            <a
              href="#servicos"
              className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
            >
              Serviços & Preços
            </a>
            <a
              href="#como-funciona"
              className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
            >
              Como Funciona
            </a>
            <a
              href="#o-studio"
              className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
            >
              O Studio
            </a>
            <a
              href="#profissionais"
              className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
            >
              Especialistas
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#1F2421] transition-colors whitespace-nowrap shrink-0"
            >
              Dúvidas
            </a>
            <button
              onClick={onOpenMyAppointments}
              className="relative text-[#705238] hover:text-[#4F3621] transition-colors font-medium flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Meus Agendamentos</span>
              {appointmentsCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-[#705238] text-white text-[11px] font-semibold rounded-full">
                  {appointmentsCount}
                </span>
              )}
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-sm font-medium text-white bg-[#2A3B32] hover:bg-[#1E2B24] transition-all rounded-md shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
            >
              Agendar Horário
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenMyAppointments}
              aria-label="Ver Meus Agendamentos"
              className="p-2 text-[#705238] hover:bg-[#EFE9DF] rounded-md transition-colors relative"
            >
              <Calendar className="w-5 h-5" />
              {appointmentsCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#705238] rounded-full ring-2 ring-white"></span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu de navegação"
              className="p-2 text-[#423C36] hover:bg-[#EFE9DF] rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#EAE3D9] bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#4B443D]">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE3] transition-colors"
            >
              Serviços & Preços
            </a>
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE3] transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#o-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE3] transition-colors"
            >
              O Studio
            </a>
            <a
              href="#profissionais"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE3] transition-colors"
            >
              Especialistas
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-[#F2ECE3] transition-colors"
            >
              Dúvidas Frequentes
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMyAppointments();
              }}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-[#F2ECE3] text-[#705238] font-semibold flex items-center justify-between"
            >
              <span>Meus Agendamentos</span>
              {appointmentsCount > 0 && (
                <span className="px-2 py-0.5 bg-[#705238] text-white text-xs rounded-full">
                  {appointmentsCount}
                </span>
              )}
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-medium text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors"
            >
              Agendar Horário Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

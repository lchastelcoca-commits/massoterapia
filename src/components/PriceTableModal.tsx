import React from 'react';
import { SERVICES_DATA, LOGO_IMAGE } from '../data/servicesData';
import { Service } from '../types';
import { X, CreditCard, ChevronRight } from 'lucide-react';

interface PriceTableModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: Service) => void;
}

export const PriceTableModal: React.FC<PriceTableModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-[#DED4C5] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_IMAGE}
              alt="Alessandra Chastel"
              className="w-11 h-11 rounded-full object-cover border border-[#C5A880]/50 shrink-0"
            />
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D]">
                Alessandra Chastel · Tabela Completa de Preços
              </div>
              <h3 className="text-2xl font-serif font-semibold text-[#1F2421]">
                Investimento & Procedimentos
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6D655E] hover:text-[#1F2421] rounded-lg hover:bg-[#EFE9DF] transition-colors cursor-pointer"
            aria-label="Fechar tabela de preços"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list with Tabular figures */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="bg-[#F3EDE3] p-4 rounded-xl border border-[#E3DACD] flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-[#705238] shrink-0" />
            <p className="text-xs text-[#524941]">
              <strong>Transparência total:</strong> Nenhum valor é cobrado online. O pagamento é realizado diretamente no estúdio após a sessão via PIX, cartões de débito/crédito ou dinheiro.
            </p>
          </div>

          {/* Group 1: Massoterapia */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A3B32] pb-2 border-b border-[#DFD5C7] mb-3">
              Massoterapia & Terapias Manuais
            </h4>
            <div className="divide-y divide-[#EFE8DD]">
              {SERVICES_DATA.filter((s) => s.category === 'massoterapia').map((s) => (
                <div
                  key={s.id}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-white/60 px-2 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2421]">{s.name}</p>
                    <p className="text-xs text-[#73685C]">{s.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#8C8072] block">{s.durationFormatted}</span>
                    <span className="text-base font-serif font-bold text-[#1F2421] tabular-nums">
                      {s.priceFormatted}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(s);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Epilação */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A3B32] pb-2 border-b border-[#DFD5C7] mb-3">
              Epilação Suave & Estética Facial
            </h4>
            <div className="divide-y divide-[#EFE8DD]">
              {SERVICES_DATA.filter((s) => s.category === 'epilacao').map((s) => (
                <div
                  key={s.id}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-white/60 px-2 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2421]">{s.name}</p>
                    <p className="text-xs text-[#73685C]">{s.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#8C8072] block">{s.durationFormatted}</span>
                    <span className="text-base font-serif font-bold text-[#1F2421] tabular-nums">
                      {s.priceFormatted}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(s);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Group 3: Combos */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#2A3B32] pb-2 border-b border-[#DFD5C7] mb-3">
              Combos Especiais & Rituais
            </h4>
            <div className="divide-y divide-[#EFE8DD]">
              {SERVICES_DATA.filter((s) => s.category === 'combos').map((s) => (
                <div
                  key={s.id}
                  className="py-3 flex items-center justify-between gap-4 hover:bg-white/60 px-2 rounded-lg transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1F2421]">{s.name}</p>
                    <p className="text-xs text-[#73685C]">{s.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#8C8072] block">{s.durationFormatted}</span>
                    <span className="text-base font-serif font-bold text-[#1F2421] tabular-nums">
                      {s.priceFormatted}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(s);
                    }}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Agendar</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F2ECE3] border-t border-[#EAE3D9] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-[#4A423A] hover:text-[#1F2421] cursor-pointer"
          >
            Fechar Tabela
          </button>
        </div>
      </div>
    </div>
  );
};

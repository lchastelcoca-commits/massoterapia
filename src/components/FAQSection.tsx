import React, { useState } from 'react';
import { FAQ_DATA } from '../data/servicesData';
import { ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-[#F7F4EE] border-b border-[#EAE3D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-3">
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Tudo o que você precisa saber antes de agendar
          </h2>
          <p className="text-base text-[#5E564E] leading-relaxed">
            Esclarecemos as dúvidas mais comuns sobre pagamentos no local, preparo e biossegurança.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E7DFD4] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FDFBF7] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-[#1F2421]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7A6B5D] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#2A3B32]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#5C534B] leading-relaxed border-t border-[#F2ECE3]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { TESTIMONIALS_DATA } from '../data/servicesData';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-3">
            Experiências Reais
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            O que nossos clientes relatam sobre o atendimento
          </h2>
          <p className="text-sm sm:text-base text-[#665E54] leading-relaxed">
            Depoimentos espontâneos de quem encontrou alívio muscular e cuidados suaves com a pele em nosso estúdio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-[#E7DFD4] shadow-xs flex flex-col justify-between hover:border-[#CFBFA9] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#705238]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#8C8072] font-medium">{item.date}</span>
                </div>

                <p className="text-sm sm:text-[15px] text-[#4A423A] leading-relaxed mb-6 font-normal">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1F2421] flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2A3B32]" />
                    </h4>
                    <p className="text-xs text-[#7A6B5D] mt-0.5">{item.serviceUsed}</p>
                  </div>
                  <span className="text-[11px] text-[#8C8072]">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

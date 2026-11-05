import React from 'react';
import { PROFESSIONALS_DATA } from '../data/servicesData';
import { Professional } from '../types';
import { Award, Calendar, CheckCircle } from 'lucide-react';

interface TherapistsSectionProps {
  onSelectProfessionalToBook: (prof: Professional) => void;
}

export const TherapistsSection: React.FC<TherapistsSectionProps> = ({
  onSelectProfessionalToBook,
}) => {
  return (
    <section id="profissionais" className="py-16 sm:py-24 bg-[#F7F4EE] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-3">
            Corpo Clínico & Estético
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Profissionais dedicadas ao seu conforto e bem-estar
          </h2>
          <p className="text-base text-[#5E564E] leading-relaxed">
            Nossa equipe conta com formação técnica e clínica avançada para proporcionar toques precisos, alívio de dores e epilação minimamente desconfortável.
          </p>
        </div>

        {/* 3 Professionals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFESSIONALS_DATA.map((prof) => (
            <div
              key={prof.id}
              className="bg-white rounded-2xl border border-[#E7DFD4] p-7 shadow-xs flex flex-col justify-between hover:border-[#CFBFA9] hover:shadow-sm transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={prof.avatar}
                    alt={prof.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#E7DFD4] shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#1F2421]">
                      {prof.name}
                    </h3>
                    <p className="text-xs text-[#7A6B5D] font-medium leading-snug">
                      {prof.role}
                    </p>
                    <span className="text-[11px] text-[#2A3B32] font-medium flex items-center gap-1 mt-1">
                      <CheckCircle className="w-3 h-3 text-[#3A5A40]" />
                      <span>Atendimento individualizado</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#635B52] leading-relaxed mb-5">
                  {prof.bio}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7A6B5D]">
                    Especialidades Principais:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {prof.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-xs text-[#4F463D] bg-[#F5EFE6] px-2.5 py-1 rounded-md"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <span className="text-xs text-[#7A6B5D] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-[#2A3B32]" />
                  <span>{prof.experienceYears} anos de experiência</span>
                </span>

                <button
                  onClick={() => onSelectProfessionalToBook(prof)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar com ela</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

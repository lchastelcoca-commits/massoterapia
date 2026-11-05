import React from 'react';
import { STUDIO_IMAGE, MASSAGE_IMAGE, EPILATION_IMAGE } from '../data/servicesData';
import { Sparkles, Shield, Heart, Coffee } from 'lucide-react';

export const StudioExperience: React.FC = () => {
  return (
    <section id="o-studio" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-3">
            O Conceito & Estrutura
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Um refúgio sensorial preparado para o seu momento
          </h2>
          <p className="text-base text-[#5E564E] leading-relaxed">
            Cada detalhe do nosso studio foi desenhado para acalmar a mente, restaurar a musculatura e cuidar da sua pele com o mais alto rigor de higiene.
          </p>
        </div>

        {/* 3 Experience Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 border border-[#E7DFD4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EFE9DF] text-[#705238] flex items-center justify-center mb-5">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2421] mb-2.5">
                Ritual de Acolhimento
              </h3>
              <p className="text-sm text-[#635B52] leading-relaxed mb-4">
                Ao chegar, desfrute de uma infusão de camomila, alecrim ou maçã com canela servida em cerâmica artesanal, preparando seu corpo para relaxar antes mesmo de deitar na maca.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2ECE3] text-xs text-[#7A6B5D]">
              Sala de estar tranquila com aromas botânicos
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E7DFD4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EFE9DF] text-[#2A3B32] flex items-center justify-center mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2421] mb-2.5">
                Biossegurança Inegociável
              </h3>
              <p className="text-sm text-[#635B52] leading-relaxed mb-4">
                Epilação 100% descartável. As ceras são fracionadas para uso individual e imediatamente inutilizadas em lixo infectante na sua frente. Lençóis e espátulas de uso único.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2ECE3] text-xs text-[#7A6B5D]">
              Segurança sanitária e alívio do desconforto
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E7DFD4] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#EFE9DF] text-[#705238] flex items-center justify-center mb-5">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#1F2421] mb-2.5">
                Cabines Silenciosas & Climatizadas
              </h3>
              <p className="text-sm text-[#635B52] leading-relaxed mb-4">
                Isolamento acústico, controle fino de temperatura e iluminação indireta suave criam uma desconexão absoluta do barulho urbano para você relaxar por completo.
              </p>
            </div>
            <div className="pt-4 border-t border-[#F2ECE3] text-xs text-[#7A6B5D]">
              Música ambiente em frequências relaxantes
            </div>
          </div>
        </div>

        {/* Studio Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-sm relative group aspect-[16/10]">
            <img
              src={STUDIO_IMAGE}
              alt="Lounge de recepção do Studio Lumina & Toque"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
              <span className="font-semibold text-sm block">Recepção Acolhedora</span>
              <span>Infusões calmantes e poltronas macias de linho cru</span>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-sm relative group aspect-[16/9]">
              <img
                src={MASSAGE_IMAGE}
                alt="Detalhe de óleos aromáticos e pedras quentes de massoterapia"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs">
                <span className="font-semibold block">Óleos Puros & Pedras Basálticas</span>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#E5DDD2] shadow-sm relative group aspect-[16/9]">
              <img
                src={EPILATION_IMAGE}
                alt="Mesa de atendimento para epilação higienizada com toalhas macias"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-white text-xs">
                <span className="font-semibold block">Cabine de Epilação Suave</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

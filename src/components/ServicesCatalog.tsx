import React, { useState, useMemo } from 'react';
import { Service, ServiceCategory } from '../types';
import { SERVICES_DATA } from '../data/servicesData';
import { Clock, Check, Sparkles, Search, ChevronRight, Info } from 'lucide-react';

interface ServicesCatalogProps {
  onSelectServiceToBook: (service: Service) => void;
  onOpenPriceTable: () => void;
}

export const ServicesCatalog: React.FC<ServicesCatalogProps> = ({
  onSelectServiceToBook,
  onOpenPriceTable,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDetailService, setSelectedDetailService] = useState<Service | null>(null);

  const categories: { id: ServiceCategory; label: string }[] = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'massoterapia', label: 'Massoterapia' },
    { id: 'epilacao', label: 'Epilação' },
    { id: 'combos', label: 'Combos Especiais' },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service) => {
      const matchesCategory =
        activeCategory === 'all' || service.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === '' ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="servicos" className="py-16 sm:py-24 bg-[#F7F4EE] border-b border-[#EAE3D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-2">
              Menu de Procedimentos & Tabela de Preços
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1F2421] tracking-tight" style={{ textWrap: 'balance' }}>
              Tratamentos corporais com valores transparentes
            </h2>
            <p className="text-sm sm:text-base text-[#61584E] mt-3">
              Preços fixos e justos. Escolha o procedimento desejado para agendar o seu dia e horário.
              <span className="font-semibold text-[#1F2421]"> Pagamento realizado apenas no local.</span>
            </p>
          </div>

          <button
            onClick={onOpenPriceTable}
            className="self-start md:self-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2A3B32] border border-[#C5B8A8] bg-white rounded-md hover:bg-[#F2ECE3] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Ver Tabela Resumida
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E3DACD]">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE4D8] rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1F2421] shadow-xs font-semibold'
                    : 'text-[#61584E] hover:text-[#1F2421] hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#8C8072] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar procedimento..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#DDD3C5] rounded-lg text-[#1F2421] placeholder-[#9E9284] focus:outline-hidden focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C8072] hover:text-[#1F2421]"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E8DFD3]">
            <p className="text-base text-[#61584E]">
              Nenhum procedimento encontrado para &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 text-sm text-[#2A3B32] font-medium underline cursor-pointer"
            >
              Ver todos os serviços
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl border border-[#E7DFD4] shadow-xs flex flex-col justify-between overflow-hidden hover:border-[#CFBFA9] hover:shadow-sm transition-all duration-300"
              >
                {/* Card Top: Image thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EFE9DF]">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {service.popular && (
                    <div className="absolute top-3 left-3 bg-[#2A3B32] text-white text-[11px] font-medium px-2.5 py-1 rounded-sm tracking-wide">
                      Mais Procurado
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#1F2421] px-2.5 py-1 rounded text-xs font-semibold tabular-nums border border-white/60 shadow-xs flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#705238]" />
                    <span>{service.durationFormatted}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category and Title */}
                  <div className="text-xs uppercase tracking-wider text-[#8A7969] mb-1.5 font-medium">
                    {service.category === 'massoterapia'
                      ? 'Massoterapia'
                      : service.category === 'epilacao'
                      ? 'Epilação Suave'
                      : 'Combo Especial'}
                  </div>

                  <h3 className="text-2xl font-serif text-[#1F2421] font-medium leading-snug mb-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#6B6156] line-clamp-2 mb-4 leading-relaxed">
                    {service.tagline}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#524941] flex-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#3A5A40] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-[#EFE8DD] flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-[#8C8072] uppercase tracking-wider font-medium">
                        Valor no Local
                      </div>
                      <div className="text-[1.7rem] font-serif font-bold text-[#1F2421] tabular-nums leading-none mt-0.5">
                        {service.priceFormatted}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedDetailService(service)}
                        title="Ver detalhes"
                        className="p-2.5 text-[#63574A] hover:bg-[#F5EFE6] rounded-md transition-colors border border-transparent hover:border-[#DFD4C5] cursor-pointer"
                        aria-label={`Ver detalhes de ${service.name}`}
                      >
                        <Info className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onSelectServiceToBook(service)}
                        className="px-4 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-all shadow-xs cursor-pointer flex items-center gap-1 active:scale-[0.98]"
                      >
                        <span>Agendar</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal of Single Service Details */}
        {selectedDetailService && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedDetailService(null)}
          >
            <div
              className="bg-[#FAF8F5] rounded-2xl max-w-lg w-full overflow-hidden border border-[#DED4C5] shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#E8DDD1]">
                <img
                  src={selectedDetailService.image}
                  alt={selectedDetailService.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedDetailService(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-[#1F2421] flex items-center justify-center hover:bg-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="p-6">
                <div className="text-xs font-medium uppercase tracking-wider text-[#7A6B5D] mb-1">
                  {selectedDetailService.category} · {selectedDetailService.durationFormatted}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#1F2421] mb-2">
                  {selectedDetailService.name}
                </h3>
                <p className="text-sm text-[#5C534B] leading-relaxed mb-4">
                  {selectedDetailService.description}
                </p>

                <div className="space-y-3 mb-6 bg-white p-4 rounded-xl border border-[#E9E1D6]">
                  <div>
                    <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-wide mb-1">
                      Indicado para:
                    </h4>
                    <p className="text-xs text-[#665D54]">
                      {selectedDetailService.recommendedFor}
                    </p>
                  </div>
                  {selectedDetailService.preparationNote && (
                    <div>
                      <h4 className="text-xs font-bold text-[#1F2421] uppercase tracking-wide mb-1">
                        Preparo recomendado:
                      </h4>
                      <p className="text-xs text-[#665D54]">
                        {selectedDetailService.preparationNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#EAE2D5]">
                  <div>
                    <span className="text-xs text-[#7A6B5D] block">Preço (pago no local)</span>
                    <span className="text-2xl font-serif font-bold text-[#1F2421]">
                      {selectedDetailService.priceFormatted}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      const service = selectedDetailService;
                      setSelectedDetailService(null);
                      onSelectServiceToBook(service);
                    }}
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer"
                  >
                    Agendar este Serviço
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

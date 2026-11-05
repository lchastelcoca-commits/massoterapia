import React, { useState, useEffect } from 'react';
import { Service, Professional, Appointment } from '../types';
import { SERVICES_DATA, PROFESSIONALS_DATA, AVAILABLE_TIME_SLOTS, LOGO_IMAGE } from '../data/servicesData';
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  Check,
  Send,
  Download,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: Service | null;
  onAppointmentCreated: (appointment: Appointment) => void;
  onViewMyAppointments: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onAppointmentCreated,
  onViewMyAppointments,
}) => {
  // Steps: 1: Service, 2: Professional, 3: Date & Time, 4: Client Info, 5: Review, 6: Success
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProfessional, setSelectedProfessional] = useState<string>('any'); // 'any' or professional id
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Client details
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  
  // Confirmed appointment
  const [createdAppointment, setCreatedAppointment] = useState<Appointment | null>(null);
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  // Initialize or reset with initialService
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setSelectedService(initialService);
        setStep(2); // Jump straight to professional/date if service already chosen
      } else {
        setStep(1);
      }
      // Default to tomorrow's date if not chosen
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setSelectedDate(`${yyyy}-${mm}-${dd}`);
      setSelectedTime('10:45');
    } else {
      // Reset on close
      setCreatedAppointment(null);
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  // Generate next 14 days for date picker
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const isSunday = d.getDay() === 0;
      if (!isSunday) { // Studio closed on Sunday
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        const iso = `${yyyy}-${mm}-${dd}`;
        
        const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
        
        dates.push({
          iso,
          dayName: weekDays[d.getDay()],
          dayNumber: dd,
          monthName: months[d.getMonth()],
        });
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  const handlePhoneChange = (val: string) => {
    // Basic formatting for (XX) XXXXX-XXXX
    const cleaned = val.replace(/\D/g, '').slice(0, 11);
    let formatted = cleaned;
    if (cleaned.length > 2) {
      formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    }
    if (cleaned.length > 7) {
      formatted = `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
    }
    setClientPhone(formatted);
  };

  const validateStep4 = () => {
    const errors: { name?: string; phone?: string; email?: string } = {};
    if (!clientName.trim()) {
      errors.name = 'Por favor, informe seu nome completo.';
    }
    if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Informe um número de WhatsApp válido com DDD.';
    }
    if (!clientEmail.trim() || !clientEmail.includes('@')) {
      errors.email = 'Informe um e-mail válido para receber a confirmação.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getProfessionalName = (id: string) => {
    if (id === 'any') return 'Primeira profissional disponível';
    const prof = PROFESSIONALS_DATA.find((p) => p.id === id);
    return prof ? prof.name : 'Profissional especialista';
  };

  const handleConfirmAppointment = () => {
    if (!selectedService) return;

    const appointmentId = `LUM-${Math.floor(1000 + Math.random() * 9000)}`;
    const newAppointment: Appointment = {
      id: appointmentId,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      category: selectedService.category,
      price: selectedService.price,
      durationMinutes: selectedService.durationMinutes,
      professionalId: selectedProfessional,
      professionalName: getProfessionalName(selectedProfessional),
      date: selectedDate,
      timeSlot: selectedTime,
      clientName: clientName.trim(),
      clientPhone: clientPhone.trim(),
      clientEmail: clientEmail.trim(),
      notes: clientNotes.trim(),
      createdAt: new Date().toISOString(),
      status: 'confirmed',
    };

    // Save to parent state and localStorage
    onAppointmentCreated(newAppointment);
    setCreatedAppointment(newAppointment);
    setStep(6); // Success screen
  };

  // WhatsApp formatted link
  const generateWhatsAppLink = (app: Appointment) => {
    const formattedDate = app.date.split('-').reverse().join('/');
    const msg = `Olá! Gostaria de confirmar meu agendamento com Alessandra Chastel - Massoterapia e Epilação:\n\n*Código:* ${app.id}\n*Serviço:* ${app.serviceName}\n*Data:* ${formattedDate}\n*Horário:* ${app.timeSlot}\n*Profissional:* ${app.professionalName}\n*Cliente:* ${app.clientName}\n*Valor a pagar no local:* R$ ${app.price},00\n\nMuito obrigado(a)!`;
    return `https://wa.me/5511999998888?text=${encodeURIComponent(msg)}`;
  };

  // iCal download (.ics)
  const downloadIcsCalendar = (app: Appointment) => {
    const [year, month, day] = app.date.split('-');
    const [hour, minute] = app.timeSlot.split(':');
    const startDate = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    const endDate = new Date(startDate.getTime() + app.durationMinutes * 60000);

    const pad = (n: number) => String(n).padStart(2, '0');
    const toIcsDate = (d: Date) =>
      `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}T${pad(d.getHours())}${pad(d.getMinutes())}00`;

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Alessandra Chastel//Agendamento//PT',
      'BEGIN:VEVENT',
      `UID:${app.id}@alessandrachastel.com.br`,
      `DTSTAMP:${toIcsDate(new Date())}`,
      `DTSTART:${toIcsDate(startDate)}`,
      `DTEND:${toIcsDate(endDate)}`,
      `SUMMARY:${app.serviceName} - Alessandra Chastel`,
      `DESCRIPTION:Agendamento confirmado para ${app.clientName}. Profissional: ${app.professionalName}. Valor no local: R$ ${app.price}\\,00.`,
      'LOCATION:Alameda Lorena, 1420 - Jardins, São Paulo - SP',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Agendamento-${app.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full my-auto overflow-hidden border border-[#DED4C5] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-[#F4EFE6]">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_IMAGE}
              alt="Alessandra Chastel"
              className="w-11 h-11 rounded-full object-cover border border-[#C5A880]/50 shrink-0"
            />
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#7A6B5D]">
                <span>Alessandra Chastel</span>
                <span aria-hidden="true">·</span>
                <span>Agendamento Online</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F2421] mt-0.5">
                {step === 6 ? 'Reserva Realizada com Sucesso!' : 'Reserve seu Horário'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6D655E] hover:text-[#1F2421] rounded-lg hover:bg-[#EAE2D5] transition-colors cursor-pointer"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 5) */}
        {step < 6 && (
          <div className="px-6 py-3 bg-[#FAF8F5] border-b border-[#EAE3D9] flex items-center justify-between text-xs text-[#7A6B5D]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 1 ? 'bg-[#2A3B32] text-white' : 'bg-[#E5DCD0] text-[#7A6B5D]'}`}>
                1
              </span>
              <span className="hidden sm:inline font-medium text-[#1F2421]">Serviço</span>
            </div>
            <div className="w-6 h-px bg-[#E2D6C6]" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 2 ? 'bg-[#2A3B32] text-white' : 'bg-[#E5DCD0] text-[#7A6B5D]'}`}>
                2
              </span>
              <span className="hidden sm:inline font-medium text-[#1F2421]">Profissional</span>
            </div>
            <div className="w-6 h-px bg-[#E2D6C6]" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 3 ? 'bg-[#2A3B32] text-white' : 'bg-[#E5DCD0] text-[#7A6B5D]'}`}>
                3
              </span>
              <span className="hidden sm:inline font-medium text-[#1F2421]">Data & Hora</span>
            </div>
            <div className="w-6 h-px bg-[#E2D6C6]" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 4 ? 'bg-[#2A3B32] text-white' : 'bg-[#E5DCD0] text-[#7A6B5D]'}`}>
                4
              </span>
              <span className="hidden sm:inline font-medium text-[#1F2421]">Seus Dados</span>
            </div>
            <div className="w-6 h-px bg-[#E2D6C6]" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${step >= 5 ? 'bg-[#2A3B32] text-white' : 'bg-[#E5DCD0] text-[#7A6B5D]'}`}>
                5
              </span>
              <span className="hidden sm:inline font-medium text-[#1F2421]">Confirmar</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 max-h-[68vh] overflow-y-auto">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#1F2421] mb-2">
                Escolha o procedimento desejado:
              </div>
              <div className="space-y-2.5">
                {SERVICES_DATA.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      selectedService?.id === service.id
                        ? 'border-[#2A3B32] bg-[#F2EDE4] ring-1 ring-[#2A3B32]'
                        : 'border-[#E6DDD1] bg-white hover:border-[#D5C7B7]'
                    }`}
                  >
                    <div>
                      <div className="text-xs uppercase font-medium tracking-wide text-[#7A6B5D]">
                        {service.category === 'massoterapia'
                          ? 'Massoterapia'
                          : service.category === 'epilacao'
                          ? 'Epilação'
                          : 'Combo'}
                      </div>
                      <h4 className="text-base font-semibold text-[#1F2421]">
                        {service.name}
                      </h4>
                      <p className="text-xs text-[#6B6157] line-clamp-1 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs text-[#8C8072] block">{service.durationFormatted}</span>
                      <span className="text-base font-serif font-bold text-[#1F2421] tabular-nums">
                        {service.priceFormatted}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Select Professional */}
          {step === 2 && selectedService && (
            <div className="space-y-4">
              <div className="p-3 rounded-lg bg-[#F3EDE3] border border-[#E3DACD] flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#7A6B5D] block">Procedimento selecionado:</span>
                  <span className="font-semibold text-[#1F2421] text-sm">{selectedService.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#7A6B5D] block">{selectedService.durationFormatted}</span>
                  <span className="font-serif font-bold text-[#1F2421]">{selectedService.priceFormatted}</span>
                </div>
              </div>

              <div className="text-sm font-semibold text-[#1F2421] pt-2">
                Deseja escolher um profissional específico?
              </div>

              <div className="space-y-3">
                {/* Option: Any available */}
                <div
                  onClick={() => setSelectedProfessional('any')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                    selectedProfessional === 'any'
                      ? 'border-[#2A3B32] bg-[#F2EDE4] ring-1 ring-[#2A3B32]'
                      : 'border-[#E6DDD1] bg-white hover:border-[#D5C7B7]'
                  }`}
                >
                  <div className="w-11 h-11 rounded-full bg-[#E5DCD0] flex items-center justify-center text-[#2A3B32] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#1F2421]">
                      Qualquer Profissional Disponível
                    </h4>
                    <p className="text-xs text-[#6B6157]">
                      Recomendado para quem busca maior flexibilidade de horários.
                    </p>
                  </div>
                  {selectedProfessional === 'any' && (
                    <Check className="w-5 h-5 text-[#2A3B32]" />
                  )}
                </div>

                {/* Specific therapists */}
                {PROFESSIONALS_DATA.map((prof) => (
                  <div
                    key={prof.id}
                    onClick={() => setSelectedProfessional(prof.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                      selectedProfessional === prof.id
                        ? 'border-[#2A3B32] bg-[#F2EDE4] ring-1 ring-[#2A3B32]'
                        : 'border-[#E6DDD1] bg-white hover:border-[#D5C7B7]'
                    }`}
                  >
                    <img
                      src={prof.avatar}
                      alt={prof.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0 border border-[#DDD3C5]"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-[#1F2421]">{prof.name}</h4>
                      <p className="text-xs text-[#6B6157] line-clamp-1">{prof.role}</p>
                    </div>
                    {selectedProfessional === prof.id && (
                      <Check className="w-5 h-5 text-[#2A3B32]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Date & Time Picker */}
          {step === 3 && selectedService && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#1F2421] mb-2">
                  Escolha o dia do atendimento:
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((item) => {
                    const isSelected = selectedDate === item.iso;
                    return (
                      <button
                        key={item.iso}
                        type="button"
                        onClick={() => setSelectedDate(item.iso)}
                        className={`p-2.5 rounded-lg border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#2A3B32] bg-[#2A3B32] text-white shadow-xs'
                            : 'border-[#E6DDD1] bg-white text-[#1F2421] hover:border-[#CDBFAe]'
                        }`}
                      >
                        <span className={`block text-[11px] font-medium uppercase ${isSelected ? 'text-white/80' : 'text-[#85776B]'}`}>
                          {item.dayName}
                        </span>
                        <span className="block text-lg font-serif font-bold my-0.5">
                          {item.dayNumber}
                        </span>
                        <span className={`block text-[10px] ${isSelected ? 'text-white/80' : 'text-[#85776B]'}`}>
                          {item.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F2421] mb-2 flex items-center justify-between">
                  <span>Horários disponíveis:</span>
                  <span className="text-xs font-normal text-[#7A6B5D]">Duração: {selectedService.durationFormatted}</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {AVAILABLE_TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTime === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium tabular-nums transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'border-[#2A3B32] bg-[#2A3B32] text-white shadow-xs'
                            : 'border-[#E6DDD1] bg-white text-[#1F2421] hover:border-[#CDBFAe]'
                        }`}
                      >
                        <Clock className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-[#8A7969]'}`} />
                        <span>{slot}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-3 bg-[#F4EFE6] rounded-lg border border-[#E4D9C8] text-xs text-[#524941] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#705238] shrink-0" />
                <span>Horário mantido exclusivamente para você. Sem taxa de agendamento online.</span>
              </div>
            </div>
          )}

          {/* STEP 4: Client Information */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="text-sm font-semibold text-[#1F2421] mb-1">
                Seus dados para confirmação:
              </div>
              <p className="text-xs text-[#6B6157] mb-4">
                Utilizamos estes dados para enviar a confirmação do horário e local. Não solicitamos dados bancários nem cartão.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wide mb-1.5">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Ana Clara Silva"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className={`w-full px-4 py-2.5 rounded-lg border text-sm bg-white text-[#1F2421] focus:outline-hidden focus:ring-1 transition-colors ${
                    formErrors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-[#DDD3C5] focus:border-[#2A3B32] focus:ring-[#2A3B32]'
                  }`}
                />
                {formErrors.name && (
                  <p className="text-xs text-red-600 mt-1">{formErrors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wide mb-1.5">
                    WhatsApp / Celular *
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 98765-4321"
                    value={clientPhone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm bg-white text-[#1F2421] focus:outline-hidden focus:ring-1 transition-colors ${
                      formErrors.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#DDD3C5] focus:border-[#2A3B32] focus:ring-[#2A3B32]'
                    }`}
                  />
                  {formErrors.phone && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wide mb-1.5">
                    E-mail para confirmação *
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className={`w-full px-4 py-2.5 rounded-lg border text-sm bg-white text-[#1F2421] focus:outline-hidden focus:ring-1 transition-colors ${
                      formErrors.email
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-[#DDD3C5] focus:border-[#2A3B32] focus:ring-[#2A3B32]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="text-xs text-red-600 mt-1">{formErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1F2421] uppercase tracking-wide mb-1.5">
                  Observações ou Condições Especiais (Opcional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Pele muito sensível, gestante, dores crônicas na cervical, etc."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-[#DDD3C5] text-sm bg-white text-[#1F2421] focus:outline-hidden focus:border-[#2A3B32] focus:ring-1 focus:ring-[#2A3B32] transition-colors"
                />
              </div>
            </div>
          )}

          {/* STEP 5: Review & Confirm */}
          {step === 5 && selectedService && (
            <div className="space-y-5">
              <div className="text-sm font-semibold text-[#1F2421]">
                Confira os detalhes da sua reserva:
              </div>

              <div className="bg-white rounded-xl border border-[#E5DDD2] p-5 space-y-4 shadow-xs">
                <div className="flex items-start justify-between border-b border-[#F0E9DF] pb-4">
                  <div>
                    <span className="text-xs uppercase font-medium tracking-wide text-[#7A6B5D]">
                      Procedimento
                    </span>
                    <h4 className="text-lg font-serif font-bold text-[#1F2421]">
                      {selectedService.name}
                    </h4>
                    <p className="text-xs text-[#6B6157]">
                      {selectedService.tagline}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#8C8072] block">{selectedService.durationFormatted}</span>
                    <span className="text-lg font-serif font-bold text-[#1F2421] tabular-nums">
                      {selectedService.priceFormatted}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#524941]">
                  <div>
                    <span className="text-[#8C8072] block font-medium">Data & Horário:</span>
                    <span className="text-sm font-semibold text-[#1F2421]">
                      {selectedDate.split('-').reverse().join('/')} às {selectedTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8C8072] block font-medium">Profissional:</span>
                    <span className="text-sm font-semibold text-[#1F2421]">
                      {getProfessionalName(selectedProfessional)}
                    </span>
                  </div>

                  <div>
                    <span className="text-[#8C8072] block font-medium">Cliente:</span>
                    <span className="text-sm font-medium text-[#1F2421]">{clientName}</span>
                    <span className="text-[#7A6B5D] block">{clientPhone}</span>
                  </div>

                  <div>
                    <span className="text-[#8C8072] block font-medium">Local do Atendimento:</span>
                    <span className="text-sm font-medium text-[#1F2421]">Alameda Lorena, 1420 - Jardins</span>
                    <span className="text-[#7A6B5D] block">São Paulo - SP</span>
                  </div>
                </div>
              </div>

              {/* Crucial Zero Payment Policy Box */}
              <div className="bg-[#FAF0E6] border border-[#DFCBB7] rounded-xl p-4 flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#705238] shrink-0 mt-0.5" />
                <div className="text-xs text-[#4F433A] leading-relaxed">
                  <strong className="text-[#2F2720] block mb-0.5 text-sm">
                    Total devido no local: {selectedService.priceFormatted}
                  </strong>
                  Você não paga nada agora neste site. O valor será pago no estúdio após seu atendimento via PIX, Débito, Crédito ou Dinheiro.
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Success Voucher */}
          {step === 6 && createdAppointment && (
            <div className="text-center py-4 space-y-6">
              <div className="flex items-center justify-center gap-3">
                <img
                  src={LOGO_IMAGE}
                  alt="Alessandra Chastel"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#C5A880]/60 shadow-xs"
                />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#7A6B5D] font-semibold">
                  Alessandra Chastel · Código da Reserva
                </span>
                <div className="text-3xl font-serif font-bold text-[#1F2421] mt-1 tabular-nums">
                  #{createdAppointment.id}
                </div>
                <p className="text-sm text-[#5C534B] mt-2 max-w-md mx-auto">
                  Tudo pronto, <strong>{createdAppointment.clientName}</strong>! Seu horário está garantido em nossa agenda.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-xl border border-[#E5DDD2] p-5 text-left text-xs text-[#524941] space-y-2.5 max-w-md mx-auto">
                <div className="flex justify-between border-b border-[#F0E9DF] pb-2">
                  <span className="text-[#8C8072]">Procedimento:</span>
                  <span className="font-semibold text-[#1F2421]">{createdAppointment.serviceName}</span>
                </div>
                <div className="flex justify-between border-b border-[#F0E9DF] pb-2">
                  <span className="text-[#8C8072]">Data e Hora:</span>
                  <span className="font-semibold text-[#1F2421]">
                    {createdAppointment.date.split('-').reverse().join('/')} às {createdAppointment.timeSlot}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#F0E9DF] pb-2">
                  <span className="text-[#8C8072]">Profissional:</span>
                  <span className="font-semibold text-[#1F2421]">{createdAppointment.professionalName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#8C8072]">Pagamento no Local:</span>
                  <span className="font-bold text-[#2A3B32] text-sm tabular-nums">
                    R$ {createdAppointment.price},00
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 max-w-md mx-auto">
                <a
                  href={generateWhatsAppLink(createdAppointment)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Comprovante pelo WhatsApp</span>
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadIcsCalendar(createdAppointment)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-[#D5C7B7] bg-white hover:bg-[#F2ECE3] text-xs font-semibold text-[#3D352E] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Salvar no Calendário</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      onViewMyAppointments();
                    }}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-[#D5C7B7] bg-white hover:bg-[#F2ECE3] text-xs font-semibold text-[#3D352E] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>Meus Agendamentos</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer (Steps 1 to 5) */}
        {step < 6 && (
          <div className="p-4 sm:p-6 bg-[#F4EFE6] border-t border-[#EAE3D9] flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-medium text-[#524941] hover:text-[#1F2421] flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Voltar</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              {step === 1 && (
                <button
                  type="button"
                  disabled={!selectedService}
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1"
                >
                  <span>Continuar</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Escolher Data & Hora</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors disabled:opacity-50 cursor-pointer flex items-center gap-1"
                >
                  <span>Preencher Meus Dados</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {step === 4 && (
                <button
                  type="button"
                  onClick={() => {
                    if (validateStep4()) {
                      setStep(5);
                    }
                  }}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Revisar Agendamento</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}

              {step === 5 && (
                <button
                  type="button"
                  onClick={handleConfirmAppointment}
                  className="px-7 py-3 text-sm font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-all shadow-xs cursor-pointer flex items-center gap-2 active:scale-[0.98]"
                >
                  <span>Confirmar Agendamento</span>
                  <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

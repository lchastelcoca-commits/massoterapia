import React from 'react';
import { Appointment } from '../types';
import { X, Calendar, Clock, User, Trash2, Send, AlertCircle, Plus } from 'lucide-react';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onOpenNewBooking: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onOpenNewBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] rounded-2xl max-w-xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-[#DED4C5] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#EAE3D9] flex items-center justify-between bg-[#F4EFE6]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#7A6B5D]">
              Suas Reservas
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#1F2421]">
              Meus Agendamentos
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6D655E] hover:text-[#1F2421] rounded-lg hover:bg-[#EAE2D5] transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {appointments.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="w-12 h-12 rounded-full bg-[#EFE9DF] text-[#7A6B5D] mx-auto flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-semibold text-[#1F2421] mb-1">
                Nenhum agendamento ativo
              </h4>
              <p className="text-xs text-[#6B6157] max-w-sm mx-auto mb-6">
                Você ainda não realizou agendamentos neste navegador. Escolha um serviço e garanta seu horário sem custos prévios.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenNewBooking();
                }}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-[#2A3B32] hover:bg-[#1E2B24] rounded-md transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Agendar Horário Agora</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#7A6B5D] px-1">
                <span>{appointments.length} {appointments.length === 1 ? 'agendamento salvo' : 'agendamentos salvos'}</span>
                <span>Pagamento presencial no local</span>
              </div>

              {appointments.map((app) => (
                <div
                  key={app.id}
                  className={`p-5 rounded-xl border transition-all ${
                    app.status === 'cancelled'
                      ? 'bg-slate-100/60 border-slate-200 opacity-60'
                      : 'bg-white border-[#E6DDD1] shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-serif font-bold text-[#705238]">
                          #{app.id}
                        </span>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${
                            app.status === 'cancelled'
                              ? 'bg-gray-200 text-gray-700'
                              : 'bg-[#E5ECE7] text-[#2A3B32]'
                          }`}
                        >
                          {app.status === 'cancelled' ? 'Cancelado' : 'Confirmado'}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-[#1F2421]">
                        {app.serviceName}
                      </h4>
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-[#8C8072] block">Valor no local:</span>
                      <span className="text-base font-serif font-bold text-[#1F2421] tabular-nums">
                        R$ {app.price},00
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs text-[#524941] py-3 border-y border-[#F0E9DF] my-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#8A7969]" />
                      <span>{app.date.split('-').reverse().join('/')}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#8A7969]" />
                      <span>{app.timeSlot} ({app.durationMinutes} min)</span>
                    </div>

                    <div className="flex items-center gap-1.5 col-span-2">
                      <User className="w-3.5 h-3.5 text-[#8A7969]" />
                      <span>Especialista: {app.professionalName}</span>
                    </div>
                  </div>

                  {app.status !== 'cancelled' ? (
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <a
                        href={`https://wa.me/5511999998888?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20meu%20agendamento%20%23${app.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#2A3B32] hover:underline flex items-center gap-1 font-medium"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Falar no WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          if (confirm('Deseja realmente cancelar este agendamento?')) {
                            onCancelAppointment(app.id);
                          }
                        }}
                        className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancelar Reserva</span>
                      </button>
                    </div>
                  ) : (
                    <div className="text-xs text-[#7A6B5D] flex items-center gap-1.5 pt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Este horário foi liberado no estúdio.</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F2ECE3] border-t border-[#EAE3D9] flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onOpenNewBooking();
            }}
            className="text-xs font-semibold text-[#2A3B32] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Fazer novo agendamento</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-[#4A423A] hover:text-[#1F2421] cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

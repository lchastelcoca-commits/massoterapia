import React, { useState, useEffect } from 'react';
import { Service, Appointment } from './types';
import { SERVICES_DATA } from './data/servicesData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { ServicesCatalog } from './components/ServicesCatalog';
import { StudioExperience } from './components/StudioExperience';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PriceTableModal } from './components/PriceTableModal';
import { MyAppointmentsModal } from './components/MyAppointmentsModal';

const LOCAL_STORAGE_KEY = 'lumina_toque_appointments';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPriceTableOpen, setIsPriceTableOpen] = useState(false);
  const [isMyAppointmentsOpen, setIsMyAppointmentsOpen] = useState(false);
  const [serviceToBook, setServiceToBook] = useState<Service | null>(null);

  // Load appointments from localStorage
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // ignore
    }
    return [];
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(appointments));
    } catch {
      // ignore
    }
  }, [appointments]);

  const handleOpenBooking = (service?: Service) => {
    setServiceToBook(service || null);
    setIsBookingOpen(true);
  };

  const handleAppointmentCreated = (newApp: Appointment) => {
    setAppointments((prev) => [newApp, ...prev]);
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: 'cancelled' } : app))
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242424]">
      {/* Top Bar adhering to Top Bar Contract */}
      <Header
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
        appointmentsCount={appointments.filter((a) => a.status === 'confirmed').length}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={() => {
            const el = document.getElementById('servicos');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* How It Works (Sem pagamento online, pague no local) */}
        <HowItWorks onOpenBooking={() => handleOpenBooking()} />

        {/* Services & Pricing Catalog */}
        <ServicesCatalog
          onSelectServiceToBook={(service) => handleOpenBooking(service)}
          onOpenPriceTable={() => setIsPriceTableOpen(true)}
        />

        {/* Studio Ambiance & Hygiene Experience */}
        <StudioExperience />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenMyAppointments={() => setIsMyAppointmentsOpen(true)}
      />

      {/* Booking Modal Flow (100% free online reservation, zero payment on site) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={serviceToBook}
        onAppointmentCreated={handleAppointmentCreated}
        onViewMyAppointments={() => {
          setIsBookingOpen(false);
          setIsMyAppointmentsOpen(true);
        }}
      />

      {/* Price Table Quick Reference Modal */}
      <PriceTableModal
        isOpen={isPriceTableOpen}
        onClose={() => setIsPriceTableOpen(false)}
        onSelectService={(service) => {
          setIsPriceTableOpen(false);
          handleOpenBooking(service);
        }}
      />

      {/* My Booked Appointments Drawer / Modal */}
      <MyAppointmentsModal
        isOpen={isMyAppointmentsOpen}
        onClose={() => setIsMyAppointmentsOpen(false)}
        appointments={appointments}
        onCancelAppointment={handleCancelAppointment}
        onOpenNewBooking={() => {
          setIsMyAppointmentsOpen(false);
          handleOpenBooking();
        }}
      />
    </div>
  );
}

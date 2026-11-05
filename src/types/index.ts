export type ServiceCategory = 'all' | 'massoterapia' | 'epilacao' | 'combos';

export interface Service {
  id: string;
  name: string;
  category: 'massoterapia' | 'epilacao' | 'combos';
  tagline: string;
  price: number;
  priceFormatted: string;
  durationMinutes: number;
  durationFormatted: string;
  description: string;
  benefits: string[];
  recommendedFor: string;
  preparationNote?: string;
  image: string;
  popular?: boolean;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  bio: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  avatar: string;
}

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  category: 'massoterapia' | 'epilacao' | 'combos';
  price: number;
  durationMinutes: number;
  professionalId: string;
  professionalName: string;
  date: string; // YYYY-MM-DD
  timeSlot: string; // HH:mm
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes?: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
}

export interface Testimonial {
  id: string;
  name: string;
  serviceUsed: string;
  rating: number;
  date: string;
  comment: string;
  city: string;
}

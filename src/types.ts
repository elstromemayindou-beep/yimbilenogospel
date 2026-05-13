export interface SocialLinks {
  tiktok?: string;
  facebook?: string;
  youtube?: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  photoUrl: string;
  type: 'solo' | 'group';
  genre: string;
  featuredVideoUrl?: string;
  quote?: string;
  socialLinks: SocialLinks;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  category: 'medley' | 'adoration' | 'sermon' | 'generic';
  language: string;
  artistId: string;
  date: string;
}

export interface worshipEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  isOnline: boolean;
  type: string;
}

export interface Reservation {
  id?: string;
  eventId: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  type: 'online' | 'presential';
  createdAt: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  createdAt: string;
}

import { Artist, Video, worshipEvent, Reservation, ContactMessage } from '../types';

// Mock Data
const mockArtists: Artist[] = [
  {
    id: 'MEDY MEDLEY',
    name: 'MEDY medley',
    bio: 'Ma vie entiere est pour le services et l\'adoration  ',
    photoUrl: '/images/medy.png',
    type: 'solo',
    genre: 'Gospel Moderne',
    socialLinks: {
      youtube: 'https://youtube.com/@yimbileno',
      facebook: 'https://facebook.com/yimbileno'
    }
  },
  {
    id: 'artist-2',
    name: 'Nathan grace x ',
    bio: 'Chantre à voix .................. à l\'adoration intime.',
    photoUrl: '/images/nathan.png',
    type: 'solo',
    genre: 'Worshipop ',
    socialLinks: {
      tiktok: 'https://tiktok.com/@sarah'
    }
  }
];

const mockVideos: Video[] = [
  {
    id: 'v1',
    title: 'Yimbiléno Gospel - Medley Live',
    description: 'Une expérience spirituelle unique capturée en live.',
    url: 'https://youtu.be/kiEz1uM_P3w',
    thumbnailUrl: 'https://i.ytimg.com/vi/kiEz1uM_P3w/maxresdefault.jpg',
    category: 'medley',
    language: 'Français',
    artistId: 'yimbileno-core',
    date: '2024-03-20'
  },
  {
    id: 'v2',
    title: 'Session Adoration - Yimbiléno Live',
    description: 'Découvrez la profondeur de l\'adoration.',
    url: 'https://www.youtube.com/watch?v=R3n0jRh3G9c',
    thumbnailUrl: 'https://i.ytimg.com/vi/R3n0jRh3G9c/maxresdefault.jpg',
    category: 'adoration',
    language: 'Lingala',
    artistId: 'yimbileno-core',
    date: '2024-02-15'
  },
  {
    id: 'v3',
    title: 'Yimbiléno - Louange Explosive',
    description: 'Célébrons ensemble la grandeur de Dieu.',
    url: 'https://www.youtube.com/watch?v=Yw9-Y3mXJ9c',
    thumbnailUrl: 'https://i.ytimg.com/vi/Yw9-Y3mXJ9c/maxresdefault.jpg',
    category: 'generic',
    language: 'Français',
    artistId: 'yimbileno-core',
    date: '2024-01-10'
  },
  {
    id: 'v4',
    title: 'Yimbiléno Gospel - Live Session',
    description: 'Nouvelle session de louange.',
    url: 'https://youtu.be/fv9aF79omuw',
    thumbnailUrl: 'https://i.ytimg.com/vi/fv9aF79omuw/maxresdefault.jpg',
    category: 'adoration',
    language: 'Français',
    artistId: 'yimbileno-core',
    date: '2024-04-10'
  },
  {
    id: 'v5',
    title: 'Yimbiléno Gospel - Worship',
    description: 'Un moment d\'adoration profonde.',
    url: 'https://youtu.be/kUhr1Ig_mWU',
    thumbnailUrl: 'https://i.ytimg.com/vi/kUhr1Ig_mWU/maxresdefault.jpg',
    category: 'adoration',
    language: 'Français',
    artistId: 'yimbileno-core',
    date: '2024-04-12'
  },
  {
    id: 'v6',
    title: 'Yimbiléno Gospel - Celebration',
    description: 'Célébration en musique.',
    url: 'https://youtu.be/RHsvaF6I398',
    thumbnailUrl: 'https://i.ytimg.com/vi/RHsvaF6I398/maxresdefault.jpg',
    category: 'medley',
    language: 'Français',
    artistId: 'yimbileno-core',
    date: '2024-04-15'
  }
];

const mockEvents: worshipEvent[] = [
  {
    id: 'event-1',
    title: 'Grande Soirée d\'Adoration',
    description: 'Une nuit dédiée à la louange et à l\'adoration profonde.',
    date: '2024-06-15T19:00:00Z',
    location: 'Salle des Fêtes, Kinshasa',
    isOnline: false,
    type: 'Live Concert'
  },
  {
    id: 'event-2',
    title: 'Session Live Streaming',
    description: 'Rejoignez-nous en ligne pour un moment de partage.',
    date: '2024-07-02T20:00:00Z',
    location: 'Youtube Live',
    isOnline: true,
    type: 'Streaming'
  }
];

export const getArtists = async () => {
  return mockArtists;
};

export const getVideos = async (featured = false) => {
  if (featured) return mockVideos.slice(0, 3);
  return mockVideos;
};

export const getEvents = async () => {
  return mockEvents;
};

export const getEventById = async (id: string) => {
  return mockEvents.find(e => e.id === id) || null;
};

export const createReservation = async (data: Omit<Reservation, 'id' | 'createdAt'>) => {
  console.log('Simulated reservation created:', data);
  return 'mock-reservation-id';
};

export const createContact = async (data: Omit<ContactMessage, 'id' | 'createdAt'>) => {
  console.log('Simulated contact message sent:', data);
  return 'mock-contact-id';
};

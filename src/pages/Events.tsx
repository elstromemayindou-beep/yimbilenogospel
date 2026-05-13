import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Video, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getEvents } from '../services/db';
import { worshipEvent } from '../types';
import { useSearch } from '../lib/SearchContext';

export default function Events() {
  const [events, setEvents] = useState<worshipEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useSearch();

  useEffect(() => {
    getEvents().then(data => {
      setEvents(data);
      setLoading(false);
    });
  }, []);

  const filtered = events.filter(e => 
    e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    e.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    e.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/ev.png" 
          alt="Events background" 
          className="w-full h-full object-cover opacity-[0.80] dark:opacity-[0.35] grayscale"
        />
      </div>
      <div className="mb-24 text-center max-w-3xl mx-auto relative z-10">
        <div className="section-label">Moments de Grâce</div>
        <h1 className="display-title text-5xl md:text-7xl mb-10 italic text-brand-warm-grey">
          Agenda <span className="text-brand-gold italic">Spirituel</span>
        </h1>
        <p className="text-brand-warm-grey/60 text-lg md:text-xl font-light leading-relaxed">
          Découvrez nos prochains instants de communion. Que ce soit à Brazzaville 
          ou en direct, rejoignez la louange.
        </p>
      </div>

      {loading ? (
        <div className="space-y-8">
          {[1,2].map(i => <div key={i} className="h-48 bg-white rounded-[2rem] animate-pulse shadow-sm" />)}
        </div>
      ) : (
        <div className="space-y-12">
          {filtered.length > 0 ? (
            filtered.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col md:flex-row gap-8 p-10 bg-white dark:bg-black/20 rounded-[2.5rem] shadow-xl shadow-brand-gold/5 border border-white dark:border-white/5 hover:border-brand-gold/10 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Accent */}
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-brand-soft-gold/10 dark:bg-white/5 transform skew-x-12 translate-x-12 z-0" />
                <div className="absolute left-0 top-0 w-1.5 h-full bg-brand-gold z-10" />

                <div className="md:w-56 shrink-0 flex flex-col items-center justify-center text-center py-6 border-b md:border-b-0 md:border-r border-brand-gold/10 z-10 pr-0 md:pr-8">
                   <div className="text-brand-gold display-title text-5xl md:text-7xl leading-none mb-3 italic">
                     {new Date(event.date).getDate()}
                   </div>
                   <div className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-warm-grey/40 dark:text-brand-cream/40">
                     {new Date(event.date).toLocaleDateString('fr-FR', { month: 'long' })}
                   </div>
                   <div className="mt-4 px-4 py-2 bg-brand-soft-gold/20 dark:bg-brand-gold/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-gold">
                     {new Date(event.date).getFullYear()}
                   </div>
                </div>

                <div className="flex-grow z-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    {event.isOnline ? (
                      <span className="flex items-center gap-2 text-brand-gold font-bold uppercase text-[10px] tracking-widest bg-brand-soft-gold/10 dark:bg-brand-gold/5 px-3 py-1 rounded-full">
                         <Video size={14} /> En Ligne
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-brand-warm-grey/60 font-bold uppercase text-[10px] tracking-widest bg-brand-warm-grey/5 dark:bg-white/5 px-3 py-1 rounded-full transition-colors">
                         <Users size={14} /> Présentiel
                      </span>
                    )}
                    <span className="flex items-center gap-2 text-brand-warm-grey/50 font-bold uppercase text-[10px] tracking-widest transition-colors">
                       <Clock size={14} /> {new Date(event.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <h3 className="display-title text-2xl md:text-4xl mb-4 italic text-brand-warm-grey group-hover:text-brand-gold transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-brand-warm-grey/60 mb-8 max-w-2xl font-light leading-relaxed text-base md:text-lg transition-colors">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-3 text-brand-warm-grey/80 p-4 bg-brand-soft-gold/5 dark:bg-white/5 border border-brand-gold/5 dark:border-white/5 rounded-2xl w-fit transition-colors">
                    <MapPin className="text-brand-gold" size={18} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{event.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center md:justify-end z-10 w-full md:w-auto">
                   <Link 
                     to={`/reserve/${event.id}`}
                     className="btn-primary w-full md:w-auto text-center"
                   >
                     M'inscrire
                   </Link>
                </div>
              </motion.div>
            ))
          ) : (
             <div className="py-32 text-center bg-white dark:bg-white/5 rounded-[3rem] border-2 border-dashed border-brand-gold/10 shadow-inner shadow-brand-gold/5 transition-colors">
                <p className="text-brand-warm-grey/50 italic uppercase tracking-[0.3em] text-sm font-black">
                  {searchQuery ? `Aucun événement correspondant à "${searchQuery}"` : "Aucun événement prévu pour le moment."}
                </p>
             </div>
          )}
        </div>
      )}

      {/* banner */}
      <section className="mt-24 md:mt-32 p-10 md:p-20 bg-white dark:bg-black/20 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-brand-gold/10 relative overflow-hidden border border-white dark:border-white/5 transition-colors duration-500">
         <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-soft-gold/10 dark:bg-brand-gold/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
         <div className="relative z-10 max-w-2xl">
            <div className="section-label">Collaboration</div>
            <h2 className="display-title text-4xl md:text-6xl mb-8 italic text-brand-warm-grey transition-colors">
               Organise ton culte <br /> avec <span className="text-brand-gold italic">Yimbiléno</span>
            </h2>
            <p className="text-brand-warm-grey/60 mb-12 text-lg md:text-xl font-light leading-relaxed transition-colors">
               Vous êtes un groupe gospel ou un artiste ? Proposez une collaboration 
               pour une session spéciale de louange.
            </p>
            <Link to="/contact" className="btn-secondary">
               Entrer en contact
            </Link>
         </div>
      </section>
    </motion.div>
  );
}

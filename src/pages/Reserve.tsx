import { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, AlertCircle, Calendar, MapPin, Loader2 } from 'lucide-react';
import { createReservation, getEventById } from '../services/db';
import { worshipEvent } from '../types';

export default function Reserve() {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState<worshipEvent | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!eventId);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Brazzaville',
    type: 'online' as 'online' | 'presential',
  });

  useEffect(() => {
    if (eventId) {
      getEventById(eventId).then(data => {
        setEvent(data);
        setFetching(false);
      });
    }
  }, [eventId]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      await createReservation({
        ...formData,
        eventId: eventId || 'general',
      });
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', city: 'Brazzaville', type: 'online' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-24 px-6 max-w-7xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80" 
          alt="Reserve background" 
          className="w-full h-full object-cover opacity-[0.25] dark:opacity-[0.35] grayscale"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start relative z-10">
        <div className="lg:col-span-5">
          <div className="section-label">Inscription</div>
          <h1 className="display-title text-5xl md:text-7xl mb-10 italic leading-none text-brand-warm-grey transition-colors">
            Prends ta <span className="text-brand-gold italic">Place</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-warm-grey/60 mb-12 font-light leading-relaxed transition-colors">
            Rejoins la grande adoration Yimbiléno Gospel. Inscris-toi pour recevoir 
            les infos d'accès et garantir ta présence parmi nous.
          </p>

          <AnimatePresence mode="wait">
            {eventId && event ? (
              <motion.div
                key="event-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-10 bg-white dark:bg-black/20 border border-brand-gold/20 rounded-[2rem] shadow-xl shadow-brand-gold/5 relative overflow-hidden transition-colors"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                   <Calendar size={120} />
                </div>
                <div className="section-label mb-4">Événement</div>
                <h3 className="display-title text-2xl md:text-3xl mb-8 italic text-brand-warm-grey transition-colors">{event.title}</h3>
                <div className="space-y-6 relative z-10">
                   <div className="flex items-center gap-4 text-brand-warm-grey/70">
                      <Calendar size={20} className="text-brand-gold" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">{new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                   </div>
                   <div className="flex items-center gap-4 text-brand-warm-grey/70">
                      <MapPin size={20} className="text-brand-gold" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">{event.location}</span>
                   </div>
                </div>
                <button 
                   onClick={() => navigate('/events')}
                   className="mt-10 text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold border-b border-brand-gold/20 hover:border-brand-gold transition-all"
                >
                  Changer d'événement
                </button>
              </motion.div>
            ) : fetching ? (
               <div className="p-10 bg-white dark:bg-black/20 rounded-[2rem] animate-pulse flex flex-col gap-6">
                  <div className="h-6 w-24 bg-brand-soft-gold/30 rounded-full" />
                  <div className="h-10 w-full bg-brand-soft-gold/30 rounded-lg" />
                  <div className="h-4 w-48 bg-brand-soft-gold/30 rounded-lg" />
               </div>
            ) : (
              <motion.div
                key="no-event"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-10 bg-white dark:bg-black/20 border border-brand-gold/20 border-dashed rounded-[2rem] text-center transition-colors"
              >
                <p className="text-brand-warm-grey/50 italic font-light mb-8 text-lg">Inscris-toi pour être informé de nos prochains cultes et actualités.</p>
                <button 
                  onClick={() => navigate('/events')}
                  className="btn-secondary"
                >
                  Voir l'agenda
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-black/20 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-brand-gold/10 relative overflow-hidden border border-white dark:border-white/5 transition-colors">
           <h2 className="display-title text-2xl md:text-3xl mb-12 italic text-brand-warm-grey">Vos Coordonnées</h2>

           <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Nom Complet</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Jean Dupont"
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">WhatsApp / Tel</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+242..."
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Email</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="tonemail@domaine.com"
                  className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Ville</label>
                  <input 
                    required
                    type="text" 
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                  />
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Participation</label>
                  <select 
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value as any})}
                    className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light appearance-none text-brand-warm-grey"
                  >
                    <option value="online" className="bg-white dark:bg-brand-dark">En Ligne</option>
                    <option value="presential" className="bg-white dark:bg-brand-dark">En Présentiel</option>
                  </select>
                </div>
              </div>

              <div className="pt-8">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full btn-primary py-6 text-lg tracking-[0.2em]"
                >
                  {loading ? "Chargement..." : "Confirmer mon inscription"}
                </button>
              </div>

              <p className="text-[10px] text-brand-warm-grey/50 text-center uppercase tracking-widest leading-loose font-bold transition-colors">
                En réservant, vous acceptez de recevoir nos notifications 
                de paix et de grâce.
              </p>
           </form>

           <AnimatePresence>
             {status === 'success' && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="absolute inset-0 z-20 flex items-center justify-center p-10 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md"
               >
                 <div className="text-center">
                   <div className="w-24 h-24 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-brand-gold/20">
                     <CheckCircle2 size={48} />
                   </div>
                   <h3 className="display-title text-6xl mb-6 italic text-brand-warm-grey transition-colors">Gloire à Dieu !</h3>
                   <p className="text-brand-warm-grey/60 mb-12 text-lg font-light leading-relaxed max-w-sm mx-auto transition-colors">
                     Votre inscription a été enregistrée. Vérifiez vos messages pour les détails.
                   </p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="btn-secondary"
                   >
                     Fermer
                   </button>
                 </div>
               </motion.div>
             )}

             {status === 'error' && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="absolute inset-0 z-20 flex items-center justify-center p-10 bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md"
               >
                 <div className="text-center">
                   <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                     <AlertCircle size={40} />
                   </div>
                   <h3 className="display-title text-4xl mb-6 italic text-red-500">Oups !</h3>
                   <p className="text-brand-warm-grey/60 dark:text-brand-cream/60 mb-12 font-light leading-relaxed max-w-sm mx-auto transition-colors">
                     Une petite erreur s'est glissée. Veuillez vérifier votre connexion.
                   </p>
                   <button 
                     onClick={() => setStatus('idle')}
                     className="btn-secondary"
                   >
                     Réessayer
                   </button>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

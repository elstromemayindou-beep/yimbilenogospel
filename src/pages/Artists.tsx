import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, Youtube, Music as Tiktok, X, Quote, ArrowRight } from 'lucide-react';
import { getArtists } from '../services/db';
import { Artist } from '../types';
import { useSearch } from '../lib/SearchContext';

export default function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const { searchQuery } = useSearch();

  useEffect(() => {
    getArtists().then(data => {
      setArtists(data);
      setLoading(false);
    });
  }, []);

  const filtered = artists.filter(a => {
    const matchesFilter = filter === 'all' || a.type === filter;
    const matchesSearch = a.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          a.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getYTId = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 md:pt-48 pb-32 px-6 max-w-7xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/artiste.png" 
          alt="Music background" 
          className="w-full h-full object-cover opacity-[0.60] dark:opacity-[0.35] grayscale"
        />
      </div>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Ambassadeurs</div>
          <h1 className="display-title text-4xl md:text-[100px] mb-8 italic leading-[0.9] text-brand-warm-grey transition-colors duration-500">
            Les Voix du <br /> <span className="text-brand-gold italic">Salut</span>
          </h1>
          <p className="text-brand-warm-grey/60 max-w-xl font-light leading-relaxed text-base md:text-2xl transition-colors duration-500">
            Rencontrez les ministres et groupes qui transforment l'atmosphère 
            spirituelle de notre nation.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap md:flex-row justify-center bg-white/50 dark:bg-brand-dark/50 backdrop-blur-md p-2 rounded-3xl md:rounded-full border border-brand-gold/10 uppercase tracking-[0.2em] text-[9px] font-black shadow-premium w-full md:w-auto transition-colors duration-500"
        >
          {['all', 'solo', 'group'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 transition-all duration-500 rounded-2xl md:rounded-full ${
                filter === f ? 'bg-brand-gold text-white shadow-xl shadow-brand-gold/20' : 'text-brand-warm-grey/40 dark:text-brand-cream/40 hover:text-brand-gold dark:hover:text-brand-gold'
              }`}
            >
              {f === 'all' ? 'Tous' : f === 'solo' ? 'Solistes' : 'Chorales'}
            </button>
          ))}
        </motion.div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 animate-pulse">
          {[1,2,3,4].map(i => <div key={i} className="aspect-[3/4.5] bg-white dark:bg-white/5 rounded-[3rem]" />)}
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.length > 0 ? (
              filtered.map((artist, i) => (
                <motion.div
                  key={artist.id}
                  layout
                  layoutId={`artist-${artist.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="group relative aspect-[3/4.5] overflow-hidden rounded-[3.5rem] border border-white dark:border-white/5 shadow-premium cursor-pointer bg-white dark:bg-brand-dark transition-colors duration-500"
                  onClick={() => setSelectedArtist(artist)}
                >
                  <img 
                    src={artist.photoUrl || "/images/nathan.png"} 
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[1500ms] ease-out grayscale-[0.5] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-warm-grey/90 dark:from-black/90 via-brand-warm-grey/20 dark:via-black/20 to-transparent opacity-80 transition-colors" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">
                      {artist.genre}
                    </span>
                    <h4 className="display-title italic text-4xl text-white mb-4 leading-none">{artist.name}</h4>
                    <div className="flex items-center gap-3 text-white/50 text-[10px] uppercase font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                      Découvrir le profil <ArrowRight size={14} className="text-brand-gold" />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 text-center bg-white dark:bg-white/5 rounded-[3rem] border-2 border-dashed border-brand-gold/10 transition-colors"
              >
                <p className="text-brand-warm-grey/40 italic uppercase tracking-[0.3em] text-sm font-black">
                  {searchQuery ? `Aucun artiste pour "${searchQuery}"` : "Aucun talent répertorié."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Artist Profile Overlay */}
      <AnimatePresence>
        {selectedArtist && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArtist(null)}
              className="absolute inset-0 bg-brand-warm-grey/60 dark:bg-black/80 backdrop-blur-2xl transition-colors"
            />
            
            <motion.div
              layoutId={`artist-${selectedArtist.id}`}
              className="relative w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] bg-brand-cream dark:bg-[#0F0F0E] border border-white/40 dark:border-white/5 shadow-premium rounded-[2rem] md:rounded-[4rem] overflow-hidden transition-colors"
            >
              <button 
                onClick={() => setSelectedArtist(null)}
                className="absolute top-10 right-10 z-[110] w-14 h-14 bg-white/80 dark:bg-brand-warm-grey/80 backdrop-blur-md hover:bg-brand-gold hover:text-white transition-all flex items-center justify-center rounded-2xl text-brand-warm-grey dark:text-brand-cream shadow-xl shadow-black/10 active:scale-90"
              >
                <X size={24} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 h-full overflow-y-auto custom-scrollbar">
                {/* Photo Section */}
                <div className="lg:col-span-5 h-[500px] lg:h-auto relative overflow-hidden">
                  <img 
                    src={selectedArtist.photoUrl} 
                    alt={selectedArtist.name} 
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.2]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-cream dark:from-[#0F0F0E] lg:from-transparent via-transparent to-transparent transition-colors" />
                </div>

                {/* Content Section */}
                <div className="lg:col-span-7 p-8 md:p-24 bg-brand-cream transition-colors">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="section-label mb-10">{selectedArtist.genre} • {selectedArtist.type}</div>
                    <h2 className="display-title text-4xl md:text-8xl mb-12 italic text-brand-warm-grey transition-colors leading-tight">{selectedArtist.name}</h2>
                    
                    {selectedArtist.quote && (
                      <div className="mb-16 flex flex-col md:flex-row gap-6 items-start bg-white dark:bg-brand-dark/20 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-premium border border-white dark:border-white/5 transition-colors">
                        <Quote className="text-brand-gold shrink-0 mt-1" size={32} strokeWidth={1} />
                        <p className="text-lg md:text-2xl italic font-serif text-brand-warm-grey/70 leading-relaxed transition-colors">
                          {selectedArtist.quote}
                        </p>
                      </div>
                    )}

                    <div className="space-y-16 mb-20">
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-8">Parcours Spirituel</h4>
                        <p className="text-brand-warm-grey/60 font-light leading-relaxed text-lg md:text-2xl transition-colors">
                          {selectedArtist.bio}
                        </p>
                      </div>

                      {selectedArtist.featuredVideoUrl && getYTId(selectedArtist.featuredVideoUrl) && (
                        <div>
                          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-8">Dernière Session</h4>
                          <div className="aspect-video bg-white dark:bg-black/40 rounded-[3rem] overflow-hidden border-8 border-white dark:border-white/5 shadow-premium group transition-colors">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${getYTId(selectedArtist.featuredVideoUrl)}?autoplay=0&rel=0&modestbranding=1`}
                              title="YouTube video player"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-12 border-t border-brand-gold/10 pt-16">
                      <div className="flex items-center gap-12">
                        <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-brand-gold">Réseaux</h4>
                        <div className="flex gap-10">
                          {selectedArtist.socialLinks?.facebook && (
                            <a href={selectedArtist.socialLinks.facebook} target="_blank" rel="noreferrer" className="text-brand-warm-grey/30 hover:text-brand-gold transition-all hover:scale-110"><Facebook size={28} strokeWidth={1.5} /></a>
                          )}
                          {selectedArtist.socialLinks?.youtube && (
                            <a href={selectedArtist.socialLinks.youtube} target="_blank" rel="noreferrer" className="text-brand-warm-grey/30 hover:text-brand-gold transition-all hover:scale-110"><Youtube size={28} strokeWidth={1.5} /></a>
                          )}
                          {selectedArtist.socialLinks?.tiktok && (
                            <a href={selectedArtist.socialLinks.tiktok} target="_blank" rel="noreferrer" className="text-brand-warm-grey/30 hover:text-brand-gold transition-all hover:scale-110"><Tiktok size={28} strokeWidth={1.5} /></a>
                          )}
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedArtist(null)}
                        className="btn-primary"
                      >
                        Retour aux Talents
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

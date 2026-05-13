import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-8">
                <Logo size="sm" className="opacity-80" />
                <span className="section-label mb-0 relative overflow-hidden">
                  Brazzaville • Congo
                  <div className="absolute bottom-0 left-0 w-full h-[2px] flex">
                    <div className="h-full w-1/3 bg-congo-green" />
                    <div className="h-full w-1/3 bg-congo-yellow" />
                    <div className="h-full w-1/3 bg-congo-red" />
                  </div>
                </span>
                <div className="h-[1px] w-12 bg-brand-gold/30" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold/60">Gospel Experience</span>
              </div>
              
              <h1 className="display-title text-[32px] md:text-[110px] xl:text-[130px] mb-12 leading-[0.95] text-brand-warm-grey dark:text-brand-cream transition-colors duration-500">
                Élevez votre <span className="italic font-normal">cœur</span> <br />
                par la <span className="text-brand-gold italic">Louange</span>
              </h1>
              
              <div className="max-w-xl">
                <p className="text-sm md:text-2xl text-brand-warm-grey/60 dark:text-brand-cream/60 leading-relaxed mb-16 font-light transition-colors duration-500">
                  Une immersion spirituelle unique au cœur de Brazzaville. Rejoignez le mouvement 
                  <span className="text-brand-warm-grey dark:text-brand-cream font-medium"> Yimbiléno</span> pour célébrer la grâce en musique.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/reserve" className="bg-congo-green text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] shadow-lg shadow-congo-green/20 hover:scale-105 active:scale-95 transition-all inline-block text-center text-[10px]">
                      Réserver ma place
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/media" className="btn-secondary px-12 py-6 text-sm border-brand-gold/20 dark:text-brand-cream dark:hover:text-white transition-all">
                      Voir les sessions
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex items-center space-x-8"
            >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, zIndex: 10 }}
                      className="w-14 h-14 rounded-full border-4 border-white dark:border-brand-warm-grey bg-brand-soft-gold dark:bg-brand-warm-grey overflow-hidden shadow-premium cursor-pointer transition-colors"
                    >
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Yimbiléno Member" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-warm-grey/30 dark:text-brand-cream/20 transition-colors">
                  <span className="text-brand-gold text-lg block font-serif italic">+1,200</span>
                  Âmes nous accompagnent
                </div>
            </motion.div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 relative items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
                <div className="w-[480px] h-[640px] bg-brand-dark p-5 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(198,142,90,0.15)] relative z-10 border border-white dark:border-white/5 transition-colors">
                  <div className="w-full h-full rounded-[3.2rem] overflow-hidden relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80" 
                      alt="Worship Live" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out grayscale-[0.2]" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-warm-grey/80 via-transparent to-transparent opacity-60" />
                    
                    <div className="absolute bottom-16 left-12 right-12">
                      <div className="text-[10px] text-brand-gold font-black tracking-[0.4em] uppercase mb-4">Worship Session</div>
                      <h3 className="display-title italic text-4xl text-white mb-8">Unité & <br /> Adoration</h3>
                      <button className="flex items-center space-x-6 group/btn">
                        <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-2xl group-hover/btn:scale-110 transition-all">
                          <Play size={24} fill="currentColor" className="ml-1" />
                        </div>
                        <span className="text-xs font-black text-white uppercase tracking-[0.3em]">Lecture Live</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Floating Card Ornament */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -right-10 bg-brand-warm-grey p-10 rounded-[3rem] shadow-premium z-20"
                >
                  <div className="text-center text-white">
                    <div className="text-brand-gold font-serif italic text-6xl leading-none">15</div>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mt-4">Septembre</div>
                  </div>
                </motion.div>

                {/* Light reflection effect */}
                <div className="absolute -inset-20 bg-brand-gold/5 blur-[100px] rounded-full z-0 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-brand-warm-grey/30 dark:text-brand-cream/20 transition-colors vertical-text h-20">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold to-transparent" />
      </motion.div>
    </section>
  );
}

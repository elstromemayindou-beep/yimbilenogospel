import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-40 pb-32 px-6 max-w-7xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80" 
          alt="Worship background" 
          className="w-full h-full object-cover opacity-[0.25] dark:opacity-[0.35] grayscale"
        />
      </div>
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 lg:gap-32 items-center">
        <motion.div
           initial={{ opacity: 0, x: -40 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <span className="section-label">Notre Essence</span>
          <h1 className="display-title text-4xl md:text-[110px] italic mb-16 leading-[0.9] text-brand-warm-grey transition-colors duration-500">
            Au Service de la <br /> <span className="text-brand-gold italic">Louange</span>
          </h1>
          <div className="space-y-10 text-brand-warm-grey/60 text-base md:text-2xl font-light leading-relaxed transition-colors duration-500">
            <p>
              Yimbiléno Gospel est né d'une vision simple mais profonde : créer un sanctuaire digital 
              où le gospel congolais peut s'épanouir et toucher des vies par-delà les frontières 
              du fleuve Congo.
            </p>
            <p>
              Basée à Brazzaville, notre plateforme est un pont entre tradition et modernité. 
              Nous croyons que chaque mélodie est un témoignage vivant de la grâce divine.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 premium-card"
            >
               <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-gold mb-4 text-[11px]">Mission</h4>
               <p className="text-base text-brand-warm-grey/60 font-light leading-relaxed">Promouvoir l'excellence du gospel local et organiser des moments de communion authentiques.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 premium-card"
            >
               <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-gold mb-4 text-[11px]">Vision</h4>
               <p className="text-base text-brand-warm-grey/60 font-light leading-relaxed">Devenir le cœur battant de la louange en Afrique Centrale, inspirant une génération tournée vers l'essentiel.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-12 premium-card border-brand-gold/20"
            >
               <h4 className="font-display font-black uppercase tracking-[0.3em] text-brand-gold mb-4 text-[11px]">Évènementiel</h4>
               <p className="text-base text-brand-warm-grey/60 font-light leading-relaxed">Expertise en planification de concerts, séminaires et journées d'adoration, adaptée à chaque budget.</p>
            </motion.div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-white dark:border-brand-warm-grey shadow-[0_60px_100px_-20px_rgba(198,142,90,0.2)] aspect-[4/5.5] transition-colors duration-500"
          >
            <img 
              src="/images/performence.png"
              alt="Gospel Performance" 
              className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-brand-soft-gold/10 mix-blend-multiply pointer-events-none" />
          </motion.div>
          
          {/* Floating Accents */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -right-16 w-48 h-48 border border-brand-gold/10 rounded-full flex items-center justify-center pointer-events-none"
          >
             <div className="w-2 h-2 bg-brand-gold/20 rounded-full" />
          </motion.div>
        </div>
      </div>

      <section className="mt-24 md:mt-48 text-center bg-brand-warm-grey dark:bg-brand-dark rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 border border-white dark:border-white/10 relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&q=80" 
            alt="Foundations Background" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-brand-warm-grey/40 dark:bg-black/40" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="section-label mx-auto text-brand-gold border-brand-gold/20">Fondations</div>
          <h2 className="display-title text-6xl md:text-7xl italic text-white mb-24">Nos Piliers Spirituels</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[
              { val: 'Foi', icon: '🙏' },
              { val: 'Louange', icon: '🎵' },
              { val: 'Unité', icon: '🤝' },
              { val: 'Service', icon: '✨' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all">{item.icon}</div>
                <h3 className="display-title italic text-3xl text-white group-hover:text-brand-gold transition-colors">{item.val}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

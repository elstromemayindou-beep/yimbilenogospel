import { motion } from 'motion/react';
import { Play, Heart, Users, Music, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';

const features = [
  {
    icon: Heart,
    title: "Adoration Puissante",
    desc: "Des moments de cœur à cœur avec le créateur."
  },
  {
    icon: Users,
    title: "Communauté Solidaire",
    desc: "Une famille unie par la foi et l'amour du gospel."
  },
  {
    icon: Music,
    title: "Talents Mis en Avant",
    desc: "Promouvoir les voix qui inspirent Brazzaville."
  }
];

const testimonials = [
  {
    name: "Grâce M.",
    role: "Chantre",
    text: "Une expérience spirituelle unique. Yimbiléno a changé ma vision de la louange collective.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&fit=crop"
  },
  {
    name: "Jean-Pierre T.",
    role: "Direction de Chœur",
    text: "La qualité des médleys est époustouflante. L'onction est palpable dans chaque session.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20 relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" 
          alt="Spiritual background" 
          className="w-full h-full object-cover opacity-[0.25] dark:opacity-[0.4] transition-opacity duration-1000"
        />
      </div>
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 px-6 max-w-7xl mx-auto relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              className="premium-card p-10 md:p-16 flex flex-col items-center text-center group cursor-default bg-brand-dark transition-colors duration-500"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-[2rem] bg-brand-soft-gold/30 dark:bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-brand-gold/5">
                <feature.icon size={40} md:size={48} strokeWidth={1.5} />
              </div>
              <h3 className="display-title italic text-lg md:text-3xl text-brand-warm-grey mb-6">{feature.title}</h3>
              <p className="text-brand-warm-grey/60 leading-relaxed text-sm md:text-xl font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 50 VOIX, 50 COVERS - Featured Promotion */}
      <section className="py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-warm-grey dark:bg-black z-0 transition-colors duration-500" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 blur-3xl opacity-30 rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-16 text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <span className="section-label bg-white/10 text-brand-gold border-white/5 mx-auto lg:mx-0">Programme Spécial</span>
              <h2 className="display-title text-4xl md:text-[100px] mb-8 italic leading-[0.85] tracking-tighter text-white">
                50 <span className="text-brand-gold italic">VOIX</span> <br /> 
                <span className="text-white italic">50 COVERS</span>
              </h2>
              <p className="text-brand-gold text-lg md:text-2xl font-black uppercase tracking-[0.2em] mb-4">
                BY YIMBILÉNO GOSPEL
              </p>
              <p className="text-white/70 text-base md:text-xl font-light leading-relaxed max-w-2xl mb-12">
                50 Talents. 50 Covers. 1 Seule Mission : <br />
                <span className="text-white font-medium italic">Élever le gospel à un autre niveau.</span>
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-gold/10 backdrop-blur-xl border border-brand-gold/30 p-8 md:p-12 rounded-[3.5rem] text-center lg:text-left inline-block"
              >
                <h3 className="font-display font-black text-brand-gold text-xl uppercase tracking-widest mb-4">Inscriptions Ouvertes</h3>
                <p className="text-white text-3xl md:text-5xl font-black italic mb-8">Jusqu'au 15 MAI 2026</p>
                <Link to="/reserve" className="btn-primary w-full bg-brand-gold text-white hover:bg-white hover:text-brand-gold transition-all duration-500 py-6 text-xl">
                  Je m'inscris maintenant
                </Link>
                <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mt-6 text-center">Places Limitées ★★★</p>
              </motion.div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, delay: 0.2 }}
               className="lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-brand-gold/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl shadow-black/50">
                <img 
                  src="/images/50voix.png" 
                  alt="50 Voix 50 Covers Flyer" 
                  className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Program Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Concept",
                desc: "Interprétez un cover dans des conditions professionnelles (audio & vidéo) pour révéler votre talent."
              },
              {
                title: "Mission",
                desc: "Découvrir et propulser de nouvelles voix gospels en offrant une vitrine d'excellence artistique."
              },
              {
                title: "Avantages",
                desc: "Production de qualité, diffusion sur nos plateformes et opportunité d'élargir votre audience."
              }
            ].map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors group"
              >
                <h4 className="font-display font-black text-brand-gold uppercase tracking-widest text-lg mb-4">{pillar.title}</h4>
                <p className="text-white/60 font-light leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Event Organization Section */}
      <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2"
          >
            <span className="section-label mb-8">Production d'Évènements</span>
            <h2 className="display-title text-4xl md:text-8xl italic text-brand-warm-grey mb-10 leading-tight">
              Vos <span className="text-brand-gold italic">Évènements</span> <br /> 
              Clé en Main
            </h2>
            <div className="space-y-8 mb-12">
              <p className="text-lg md:text-2xl text-brand-warm-grey/70 font-light leading-relaxed italic">
                Nous donnons vie à vos visions spirituelles avec excellence et professionnalisme.
              </p>
              <div className="h-[1px] w-full bg-brand-gold/10" />
              <p className="text-brand-warm-grey/60 text-base md:text-lg leading-relaxed">
                Yimbiléno Gospel prend en charge l'organisation de vos grands évènements : 
                <span className="text-brand-warm-grey font-medium"> concerts, séminaires, journées de louange et d'adoration</span>. 
                De la planification à la réalisation finale, nous adaptons chaque détail selon votre vision et votre budget.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { title: "Planification", value: "Sur mesure" },
                { title: "Budget", value: "Flexible" },
                { title: "Type", value: "Tout évènement" },
                { title: "Expertise", value: "100% Gospel" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-brand-dark rounded-3xl border border-brand-gold/5">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gold mb-2">{stat.title}</p>
                  <p className="text-xl md:text-2xl text-brand-warm-grey font-black italic">{stat.value}</p>
                </div>
              ))}
            </motion.div>

            <Link to="/contact" className="btn-primary group inline-flex items-center gap-4 py-6 px-10">
              Discuter de votre projet <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-[4rem] overflow-hidden shadow-3xl shadow-black/20 group animate-float">
              <img 
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80" 
                alt="Concert stage organization" 
                className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center text-white shadow-xl shadow-brand-gold/20">
                    <Music size={32} />
                  </div>
                  <div>
                    <p className="text-white text-2xl font-black italic">Excellence Musicale</p>
                    <p className="text-white/60 text-sm font-medium">Réalisation technique et artistique</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Architectural accent */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border-r-8 border-b-8 border-brand-gold/20 rounded-br-[5rem] -z-10" />
            <div className="absolute -top-10 -left-10 w-32 h-32 border-l-8 border-t-8 border-brand-gold/10 rounded-tl-[3rem] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Testimonials Editorial */}
      <section className="py-24 md:py-48 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-24 lg:gap-32">
            <div className="md:w-1/3">
            <span className="section-label">Voices</span>
            <h2 className="display-title text-3xl md:text-8xl italic text-brand-warm-grey transition-colors duration-500 mb-12">
              Ce que dit <br /> la <span className="text-brand-gold italic">famille</span>
            </h2>
            <div className="h-[2px] w-24 bg-brand-gold/30 mb-8" />
            <p className="text-sm md:text-xl text-brand-warm-grey/60 font-light leading-relaxed transition-colors duration-500">
              La puissance de l'adoration ne se mesure pas en sons, mais en cœurs transformés.
            </p>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col md:flex-row gap-12 items-center md:items-start p-16 bg-brand-dark rounded-[4rem] shadow-premium border border-white dark:border-white/5 transition-colors duration-500"
              >
                <img src={t.image} alt={t.name} className="w-32 h-32 rounded-full object-cover border-8 border-brand-soft-gold shadow-xl" />
                <div className="flex-grow pt-4">
                  <p className="text-2xl italic text-brand-warm-grey/70 mb-10 font-serif leading-relaxed transition-colors duration-500">"{t.text}"</p>
                  <div className="flex flex-col">
                    <h5 className="font-display font-black uppercase tracking-[0.3em] text-brand-gold text-[12px]">{t.name}</h5>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-warm-grey/30 dark:text-brand-warm-grey/50 mt-2 transition-colors duration-500">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyper CTA */}
      <section className="py-32 md:py-64 px-6 relative overflow-hidden text-center bg-brand-warm-grey dark:bg-black border-t border-brand-gold/10 rounded-t-[5rem] md:rounded-t-[10rem] transition-colors duration-500">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80" 
            alt="Worship Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-warm-grey via-brand-warm-grey/60 to-brand-warm-grey" />
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="section-label mx-auto mb-16 text-brand-gold border-brand-gold/20">Engagement</span>
            <h2 className="display-title text-4xl md:text-[160px] mb-16 italic leading-[0.85] tracking-tighter text-white">
              Rejoins <br /> la <span className="text-brand-gold italic">Louange</span>
            </h2>
            <p className="text-base md:text-2xl font-light mb-24 text-white/50 max-w-2xl mx-auto uppercase tracking-[0.1em]">
              Une place t'attend au cœur de la prochaine adoration. Viens comme tu es.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/reserve" className="btn-primary px-12 md:px-24 py-6 md:py-8 text-sm md:text-xl shadow-premium hover:shadow-[0_45px_100px_-20px_rgba(198,142,90,0.3)] duration-700 bg-brand-cream text-brand-warm-grey hover:bg-brand-gold hover:text-white inline-block">
                S'inscrire gratuitement
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

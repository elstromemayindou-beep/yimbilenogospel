import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, MapPin, MessageCircle, Music2, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from '../ui/Logo';

export default function Footer() {
  return (
    <footer className="bg-[#2C2825] dark:bg-black text-white pt-24 md:pt-48 pb-16 px-6 md:px-10 rounded-t-[3rem] md:rounded-t-[5rem] relative overflow-hidden transition-colors duration-500">
      {/* National Color Strip */}
      <div className="absolute top-0 left-0 w-full h-[3px] flex z-20">
        <div className="h-full w-1/3 bg-congo-green" />
        <div className="h-full w-1/3 bg-congo-yellow" />
        <div className="h-full w-1/3 bg-congo-red" />
      </div>
      
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20 lg:gap-32 mb-20 md:mb-40">
          <div className="md:col-span-6">
            <Link to="/" className="inline-block mb-12 group">
              <Logo size="xl" className="shadow-none bg-transparent" />
            </Link>
            <p className="text-2xl text-white/60 max-w-md mb-16 leading-relaxed font-light font-serif italic transition-colors">
              Une plateforme dédiée à la gloire de Dieu et à l'excellence musicale. 
              Favoriser l'unité par la louange à Brazzaville.
            </p>
            <div className="flex space-x-10">
              {[
                { Icon: Facebook, url: 'https://www.facebook.com/share/r/1Cgr66FzD6/' },
                { Icon: Youtube, url: 'https://www.youtube.com/@yimbilenogospel.officiel' },
                { Icon: Music2, url: 'https://vt.tiktok.com/ZS9KprDGn/', label: 'TikTok' },
                { Icon: Instagram, url: 'https://instagram.com/yimbileno_gospel' },
                { Icon: MessageCircle, url: 'https://wa.me/242066621442' }
              ].map(({ Icon, url }, i) => (
                <motion.a 
                  key={i}
                  href={url} 
                  target={url !== '#' ? "_blank" : undefined}
                  rel={url !== '#' ? "noreferrer" : undefined}
                  whileHover={{ y: -5, color: '#C68E5A' }}
                  className="text-white/50 transition-colors"
                >
                  <Icon size={32} strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-12">Navigation</h4>
            <ul className="space-y-8 text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
              <li><Link to="/artists" className="hover:text-white transition-colors">Les Voix</Link></li>
              <li><Link to="/media" className="hover:text-white transition-colors">La Galerie</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">L'Agenda</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Notre Histoire</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-12">Contact</h4>
            <ul className="space-y-12 text-white/60 font-light text-lg transition-colors">
              <li className="flex items-start gap-6">
                <MapPin className="shrink-0 text-brand-gold/70 transition-colors" size={24} />
                <span className="text-sm leading-relaxed uppercase tracking-widest font-black">Brazzaville, <br /> Rép. du Congo</span>
              </li>
              <li className="flex items-start gap-6">
                <Mail className="shrink-0 text-brand-gold/70 transition-colors" size={24} />
                <span className="text-sm leading-relaxed uppercase tracking-widest font-black">louange@yimbileno.com</span>
              </li>
              <li className="flex items-start gap-6">
                <Phone className="shrink-0 text-brand-gold/70 transition-colors" size={24} />
                <span className="text-sm leading-relaxed uppercase tracking-widest font-black">+242 06 662 14 42</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-white/30 transition-colors">
          <div>© {new Date().getFullYear()} YIMBILÉNO GOSPEL. FAIT À BRAZZAVILLE.</div>
          <div className="flex space-x-16">
            <Link to="/privacy" className="hover:text-white transition-colors uppercase">Confidentialité</Link>
            <Link to="/terms" className="hover:text-white transition-colors uppercase">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

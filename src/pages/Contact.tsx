import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Download, Instagram, MessageCircle, Youtube, Facebook, Music2 } from 'lucide-react';
import { createContact } from '../services/db';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Général',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createContact(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: 'Général', message: '' });
    } catch (err) {
      console.error(err);
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
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80" 
          alt="Contact background" 
          className="w-full h-full object-cover opacity-[0.25] dark:opacity-[0.35] grayscale"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 relative z-10">
        <div className="lg:col-span-5">
          <div className="section-label">Contact</div>
          <h1 className="display-title text-5xl md:text-7xl mb-10 italic leading-[0.9] text-brand-warm-grey transition-colors">
            Parlons de <br /> <span className="text-brand-gold italic">votre projet</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-warm-grey/60 mb-12 font-light leading-relaxed transition-colors">
            Tu es un artiste gospel ? Une entreprise souhaitant soutenir la louange ? 
            Nous sommes à votre écoute.
          </p>

          <div className="space-y-12">
            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">Email</h4>
                <p className="text-xl font-medium text-brand-warm-grey transition-colors">mbanipalou2003@gmail.com</p>
              </div>
            </div>

            <a 
              href="https://wa.me/242066621442" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-[#25D366] group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <MessageCircle size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">WhatsApp</h4>
                <p className="text-xl font-medium text-brand-warm-grey group-hover:text-brand-gold transition-colors">+242 06 662 14 42</p>
                <span className="text-[9px] font-bold text-brand-gold/50 uppercase tracking-widest group-hover:text-brand-gold transition-colors">Réponse instantanée</span>
              </div>
            </a>

            <a 
              href="https://facebook.com/share/r/1Cgr66FzD6/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-[#1877F2] group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <Facebook size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">Facebook</h4>
                <p className="text-xl font-medium text-brand-warm-grey group-hover:text-brand-gold transition-colors">Yimbiléno Gospel Officiel</p>
                <span className="text-[9px] font-bold text-brand-gold/50 uppercase tracking-widest group-hover:text-brand-gold transition-colors">Suivez-nous sur Facebook</span>
              </div>
            </a>

            <a 
              href="https://www.youtube.com/@yimbilenogospel.officiel" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-[#FF0000] group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <Youtube size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">YouTube</h4>
                <p className="text-xl font-medium text-brand-warm-grey group-hover:text-brand-gold transition-colors">@yimbilenogospel.officiel</p>
                <span className="text-[9px] font-bold text-brand-gold/50 uppercase tracking-widest group-hover:text-brand-gold transition-colors">Nos vidéos & concerts</span>
              </div>
            </a>

            <a 
              href="https://vt.tiktok.com/ZS9KprDGn/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-[#000000] group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <Music2 size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">TikTok</h4>
                <p className="text-xl font-medium text-brand-warm-grey group-hover:text-brand-gold transition-colors">Yimbiléno Gospel</p>
                <span className="text-[9px] font-bold text-brand-gold/50 uppercase tracking-widest group-hover:text-brand-gold transition-colors">Vivez la louange en live</span>
              </div>
            </a>

            <a 
              href="https://instagram.com/yimbileno_gospel" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-start gap-8 group"
            >
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-gradient-to-tr group-hover:from-[#FCAF45] group-hover:to-[#E1306C] group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <Instagram size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">Instagram</h4>
                <p className="text-xl font-medium text-brand-warm-grey group-hover:text-brand-gold transition-colors">@yimbileno_gospel</p>
                <span className="text-[9px] font-bold text-brand-gold/50 uppercase tracking-widest group-hover:text-brand-gold transition-colors">Suivez notre actualité</span>
              </div>
            </a>

            <div className="flex items-start gap-8 group">
              <div className="w-16 h-16 bg-white dark:bg-brand-warm-grey/80 border border-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all shadow-lg shadow-brand-gold/5">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/50 mb-2 transition-colors">Lieu</h4>
                <p className="text-xl font-medium text-brand-warm-grey transition-colors">Brazzaville, République du Congo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
           <div className="bg-white dark:bg-black/20 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-brand-gold/10 relative overflow-hidden border border-white dark:border-white/5 transition-colors">
             <h2 className="display-title text-3xl mb-12 italic text-brand-warm-grey">Envoyer un message de paix</h2>
             
             <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Nom Complet</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="ex: Marco ezechiel"
                      className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="votre@email.com"
                      className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Téléphone</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+242..."
                      className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light text-brand-warm-grey"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Sujet</label>
                    <select 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none transition-colors text-lg font-light appearance-none text-brand-warm-grey cursor-pointer"
                    >
                      <option value="Général" className="bg-white dark:bg-brand-dark">Général</option>
                      <option value="Partenariat" className="bg-white dark:bg-brand-dark">Partenariat</option>
                      <option value="Artiste" className="bg-white dark:bg-brand-dark">Présentation Artiste</option>
                      <option value="Culte" className="bg-white dark:bg-brand-dark">Proposition de Culte</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                   <label className="block text-[10px] uppercase font-black tracking-[0.3em] text-brand-warm-grey/50 transition-colors">Message</label>
                   <textarea 
                     required
                     rows={5}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     placeholder="Votre message ici..."
                     className="w-full bg-brand-soft-gold/10 dark:bg-white/5 border border-brand-gold/10 dark:border-white/10 rounded-3xl p-8 focus:border-brand-gold outline-none transition-colors resize-none font-light text-brand-warm-grey"
                   />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full btn-primary py-6 text-lg tracking-[0.2em] flex justify-center items-center gap-4"
                >
                  {loading ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      Envoyer ma demande <Send size={20} />
                    </>
                  )}
                </button>
             </form>

             <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 z-20 flex items-center justify-center p-12 bg-white/95 backdrop-blur-md"
                  >
                    <div className="text-center">
                      <div className="w-24 h-24 bg-brand-gold text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl shadow-brand-gold/20">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="display-title text-6xl mb-6 italic text-brand-warm-grey">Merci</h3>
                      <p className="text-brand-warm-grey/60 mb-12 font-light leading-relaxed max-w-sm mx-auto text-lg">
                        Votre message a bien été transmis. Nous reviendrons vers vous dans la paix du Seigneur.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="btn-secondary"
                      >
                        Fermer le message
                      </button>
                    </div>
                  </motion.div>
                )}
             </AnimatePresence>
           </div>
        </div>
      </div>

      {/* Partnership Kit Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 md:p-20 bg-white dark:bg-black/20 rounded-[3.5rem] shadow-2xl shadow-brand-gold/10 border border-white dark:border-white/5 relative overflow-hidden transition-colors"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-soft-gold/30 dark:bg-brand-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="section-label">Partenariat</div>
            <h2 className="display-title text-5xl md:text-6xl mb-8 italic text-brand-warm-grey transition-colors">
              Collaborez avec <br /> <span className="text-brand-gold italic">Yimbiléno</span>
            </h2>
            <p className="text-xl text-brand-warm-grey/60 mb-10 font-light leading-relaxed transition-colors">
              Téléchargez notre kit média complet pour découvrir nos statistiques, 
              notre impact dans la communauté gospel et les différentes façons 
              de soutenir la louange au Congo.
            </p>
            <div className="flex flex-wrap gap-10 mb-12">
               <div className="flex flex-col">
                 <span className="text-brand-gold font-black text-3xl mb-1">15K+</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-grey/50 transition-colors">Audience Mensuelle</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-brand-gold font-black text-3xl mb-1">50+</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-grey/50 transition-colors">Artistes Soutenus</span>
               </div>
               <div className="flex flex-col">
                 <span className="text-brand-gold font-black text-3xl mb-1">100%</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-warm-grey/50 transition-colors">Gospel Local</span>
               </div>
            </div>
            <a 
              href="#" 
              className="btn-primary inline-flex items-center gap-4 px-10 py-5"
              onClick={(e) => {
                e.preventDefault();
                alert('Le kit de partenariat sera bientôt disponible au téléchargement. Contactez-nous pour le recevoir en avant-première.');
              }}
            >
              Télécharger le Kit PDF <Download size={20} />
            </a>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="bg-brand-cream dark:bg-brand-warm-grey rounded-[2.5rem] p-10 transform rotate-3 shadow-xl border border-brand-gold/10 transition-colors">
               <div className="aspect-[3/4] bg-white dark:bg-black/40 rounded-2xl overflow-hidden shadow-inner relative group transition-colors">
                  <div className="absolute inset-0 bg-brand-soft-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={64} className="text-brand-gold animate-bounce" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1626002166943-424b9104f6ed?w=600&h=800&fit=crop" 
                    alt="Partnership Kit Preview" 
                    className="w-full h-full object-cover grayscale-[0.5] opacity-50 transition-all duration-1000"
                  />
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-white dark:bg-brand-dark shadow-xl rounded-xl transition-colors">
                    <h3 className="display-title text-xl text-brand-warm-grey italic mb-2 transition-colors">Kit Média 2024</h3>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brand-warm-grey/50 transition-colors">Statistiques & Opportunités</p>
                  </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-xl z-20">
               <Download size={32} />
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

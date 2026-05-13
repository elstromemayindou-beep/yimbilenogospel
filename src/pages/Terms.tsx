import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80" 
          alt="Terms background" 
          className="w-full h-full object-cover opacity-[0.2] dark:opacity-[0.3] grayscale transition-opacity duration-1000"
        />
      </div>
      <div className="relative z-10">
        <h1 className="display-title italic text-4xl mb-8 text-brand-warm-grey">Mentions Légales</h1>
      <div className="max-w-none space-y-6 text-brand-warm-grey/60">
        <p>
          Le site Yimbiléno Gospel est une plateforme dédiée à la promotion du gospel à Brazzaville, Congo.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">Propriété et Droits</h2>
        <p>
          Tous les contenus (textes, logos, visuels) sont la propriété de Yimbiléno Gospel, sauf mention contraire 
          concernant les artistes et groupes présentés qui conservent leurs droits respectifs.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">Hébergement</h2>
        <p>
          Le site est hébergé via les services Cloud Run.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">Responsabilité</h2>
        <p>
          Yimbiléno Gospel s'efforce de fournir des informations exactes mais ne saurait être tenu responsable des 
          erreurs ou omissions dans le calendrier des événements.
        </p>
      </div>
      </div>
    </motion.div>
  );
}

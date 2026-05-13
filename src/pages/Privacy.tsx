import { motion } from 'motion/react';

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-6 max-w-4xl mx-auto relative min-h-screen"
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80" 
          alt="Privacy background" 
          className="w-full h-full object-cover opacity-[0.2] dark:opacity-[0.3] grayscale transition-opacity duration-1000"
        />
      </div>
      <div className="relative z-10">
        <h1 className="display-title italic text-4xl mb-8 text-brand-warm-grey">Politique de Confidentialité</h1>
      <div className="max-w-none space-y-6 text-brand-warm-grey/60">
        <p>
          Chez Yimbiléno Gospel, nous accordons une grande importance à la protection de vos données personnelles. 
          Cette politique détaille comment nous traitons les informations recueillies via nos formulaires.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">1. Collecte des données</h2>
        <p>
          Nous collectons votre nom, email, numéro de téléphone et ville uniquement lorsque vous remplissez 
          un formulaire de réservation ou de contact.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">2. Utilisation des données</h2>
        <p>
          Vos données sont utilisées exclusivement pour :
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmer vos réservations aux événements.</li>
          <li>Vous envoyer les liens d'accès aux cultes en ligne.</li>
          <li>Répondre à vos demandes de partenariat ou d'information.</li>
          <li>Vous informer des actualités majeures de la plateforme (si vous y avez consenti).</li>
        </ul>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">3. Conservation</h2>
        <p>
          Nous conservons vos données pour la durée nécessaire à la réalisation des objectifs cités ci-dessus. 
          Nous ne vendons ni ne partageons vos données avec des tiers à des fins commerciales.
        </p>
        <h2 className="text-xl font-bold text-brand-warm-grey uppercase mt-8">4. Vos droits</h2>
        <p>
          Conformément aux principes du RGPD, vous disposez d'un droit d'accès, de rectification et de suppression 
          de vos données. Pour toute demande, contactez-nous à privacy@yimbileno.com.
        </p>
      </div>
      </div>
    </motion.div>
  );
}

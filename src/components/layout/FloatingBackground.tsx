import { motion } from 'motion/react';

export default function FloatingBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Atmospheric Background Images */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 z-[-1]"
      >
        <img 
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80" 
          alt="" 
          className="w-full h-full object-cover grayscale opacity-10"
        />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
          className="absolute w-1 h-1 bg-brand-gold rounded-full blur-[1px]"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + i * 12}%`,
          }}
        />
      ))}

      {/* Soft warm blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-congo-green/5 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] -right-[15%] w-[60%] h-[60%] rounded-full bg-brand-soft-gold/30 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] left-[10%] w-[55%] h-[55%] rounded-full bg-congo-red/3 blur-[130px]"
      />
      
      {/* Subtle lines/patterns could go here if needed */}
    </div>
  );
}

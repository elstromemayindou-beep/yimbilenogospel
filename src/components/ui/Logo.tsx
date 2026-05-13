import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = "", size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-36 h-36',
    xl: 'w-56 h-56'
  };

  const logoUrl = "/images/logo1.png";

  return (
    <div className={`relative inline-flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <img 
        src={logoUrl} 
        alt="Yimbiléno Gospel Logo" 
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
}

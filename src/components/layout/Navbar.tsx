import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useSearch } from '../../lib/SearchContext';
import { useTheme } from '../../lib/ThemeContext';
import Logo from '../ui/Logo';

const navItems = [
  { label: 'Accueil', path: '/' },
  { label: 'À Propos', path: '/about' },
  { label: 'Artistes', path: '/artists' },
  { label: 'Médias', path: '/media' },
  { label: 'Événements', path: '/events' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search when route changes
  useEffect(() => {
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/70 dark:bg-brand-dark/70 backdrop-blur-2xl border-b border-brand-gold/10 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between relative z-20">
        <Link to="/" className="flex items-center group">
          <Logo size={scrolled ? 'sm' : 'md'} className="transition-all duration-700" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex items-center space-x-10">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`nav-link text-[10px] tracking-[0.3em] font-bold ${
                  location.pathname === item.path ? "text-brand-gold" : "text-brand-warm-grey/60 dark:text-brand-cream/60"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 w-full h-[1.5px] bg-brand-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-2 border-l border-brand-gold/10 pl-8">
            <button
              onClick={toggleTheme}
              className="p-3 text-brand-warm-grey/60 hover:text-brand-gold transition-colors"
              title={theme === 'light' ? 'Mode sombre' : 'Mode clair'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <div className="relative flex items-center pr-2">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Ta recherche..."
                      className="w-full bg-brand-soft-gold/20 dark:bg-white/5 backdrop-blur-md border border-brand-gold/20 rounded-full px-6 py-2 text-[10px] font-medium focus:outline-none focus:border-brand-gold/40 transition-all text-brand-warm-grey px-4"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-3 transition-colors ${isSearchOpen ? 'text-brand-gold' : 'text-brand-warm-grey/60 hover:text-brand-gold'}`}
              >
                {isSearchOpen ? <X size={18} /> : <Search size={18} />}
              </button>
            </div>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/reserve" className="btn-primary py-3 px-8 text-[10px]">
              S'inscrire
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex items-center bg-white/80 dark:bg-brand-warm-grey/80 backdrop-blur-md rounded-full p-1 shadow-premium border border-brand-gold/10">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full flex items-center justify-center text-brand-warm-grey dark:text-brand-cream hover:text-brand-gold transition-colors"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isSearchOpen ? 'text-brand-gold' : 'text-brand-warm-grey dark:text-brand-cream'}`}
            >
              <Search size={16} />
            </button>
          </div>
          <button 
            className="w-12 h-12 bg-congo-green text-white rounded-full flex items-center justify-center shadow-lg shadow-congo-green/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Input Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 dark:bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/10 p-6 md:hidden"
          >
            <div className="max-w-7xl mx-auto flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher..."
                className="flex-1 bg-brand-soft-gold/30 dark:bg-white/5 border-none rounded-2xl px-6 py-4 text-sm font-light focus:ring-1 focus:ring-brand-gold/30 outline-none text-brand-warm-grey dark:text-brand-cream"
                autoFocus
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[40] md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[50%] max-w-[200px] h-full bg-brand-cream dark:bg-brand-dark z-[50] md:hidden flex flex-col shadow-2xl border-l border-congo-green/10"
            >
              <div className="sticky top-0 bg-brand-cream/80 dark:bg-brand-dark/80 backdrop-blur-md z-10 p-6 flex justify-between items-center border-b border-brand-gold/5">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-congo-green" />
                  <div className="w-2 h-2 rounded-full bg-congo-yellow" />
                  <div className="w-2 h-2 rounded-full bg-congo-red" />
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 bg-white dark:bg-brand-warm-grey rounded-full flex items-center justify-center text-brand-warm-grey dark:text-brand-cream shadow-sm hover:text-congo-red transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                <div className="flex flex-col gap-6 py-4">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link 
                        to={item.path} 
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-serif italic text-brand-warm-grey dark:text-brand-cream hover:text-congo-green transition-colors block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-4"
                  >
                    <Link 
                      to="/reserve" 
                      onClick={() => setIsOpen(false)}
                      className="bg-congo-green text-white py-3 px-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] w-full block text-center shadow-lg shadow-congo-green/20"
                    >
                      S'inscrire
                    </Link>
                  </motion.div>
                </div>
              </div>

              <div className="p-6 border-t border-brand-gold/10 bg-brand-cream dark:bg-brand-dark">
                <p className="text-[8px] font-black uppercase tracking-[0.2em] text-brand-warm-grey/30 dark:text-white/20">
                  © 2026 YG
                </p>
              </div>

              {/* Decorative background for mobile nav sidebar */}
              <div className="absolute bottom-[-5%] right-[-5%] w-32 h-32 bg-congo-green/5 blur-3xl rounded-full pointer-events-none" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SearchProvider } from './lib/SearchContext';
import { ThemeProvider } from './lib/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Artists from './pages/Artists';
import Media from './pages/Media';
import Events from './pages/Events';
import Reserve from './pages/Reserve';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { motion, AnimatePresence } from 'motion/react';
import FloatingBackground from './components/layout/FloatingBackground';

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <SearchProvider>
          <div className="flex flex-col min-h-screen bg-brand-cream text-brand-warm-grey transition-colors duration-500 selection:bg-brand-gold selection:text-white relative overflow-hidden">
            <div className="grain-overlay" />
          <FloatingBackground />
          
          <Navbar />
          <main className="flex-grow relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/media" element={<Media />} />
                <Route path="/events" element={<Events />} />
                <Route path="/reserve/:eventId?" element={<Reserve />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </SearchProvider>
    </ThemeProvider>
    </Router>
  );
}

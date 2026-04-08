/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { Home } from '@/src/pages/Home';
import { Elements } from '@/src/pages/Elements';
import { Principles } from '@/src/pages/Principles';
import { Color } from '@/src/pages/Color';
import { Typography } from '@/src/pages/Typography';
import { About } from '@/src/pages/About';
import { Contact } from '@/src/pages/Contact';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'elements':
        return <Elements />;
      case 'principles':
        return <Principles />;
      case 'color':
        return <Color />;
      case 'typography':
        return <Typography />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
}


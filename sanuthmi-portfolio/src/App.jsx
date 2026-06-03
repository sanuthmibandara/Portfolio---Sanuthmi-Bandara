import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WhatIBring from './components/WhatIBring';
import Journey from './components/Journey';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import OpenToWork from './components/OpenToWork';

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const progressBar = document.getElementById('scroll-progress');
      if (progressBar) progressBar.style.width = `${scrolled}%`;
    };
    window.addEventListener('scroll', handleScroll);
    document.body.style.cursor = 'none';

    const timer = setTimeout(() => setPageLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.cursor = '';
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <OpenToWork />
      <div id="scroll-progress" />

      <AnimatePresence>
        {!pageLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#050505',
              zIndex: 99998,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '3px solid rgba(59,130,246,0.15)',
                borderTop: '3px solid #3b82f6',
              }}
            />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#3b82f6',
                fontWeight: 600,
              }}
            >
              Loading
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="app"
      >
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Education />
          <Skills />
          <WhatIBring />
          <Projects />
          <Journey />
          <Experience />
          <Contact />
        </main>
        <Footer />

        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: -10,
            overflow: 'hidden',
          }}
        >
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '40%',
              height: '40%',
              background: 'rgba(59,130,246,0.07)',
              filter: 'blur(120px)',
              borderRadius: '50%',
            }}
          />
          <motion.div
            animate={{ x: [0, -80, 0], y: [0, 120, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-10%',
              width: '50%',
              height: '50%',
              background: 'rgba(168,85,247,0.07)',
              filter: 'blur(120px)',
              borderRadius: '50%',
            }}
          />
        </div>
      </motion.div>
    </>
  );
}

export default App;

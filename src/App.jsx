import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Logo from './components/Logo';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import FloatingIcons from './components/FloatingIcons';
import Background3D from './components/Background3D';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative">
          <Background3D />
          <Logo className="transition-colors duration-300 hidden md:block" />
          
          {/* Section Indicators - Hidden on Mobile */}
          <div className="fixed left-4 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-50">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  currentSection === index 
                    ? 'bg-accent-600 w-4' 
                    : 'bg-primary-700/40 hover:bg-accent-400/60'
                }`}
                onClick={() => {
                  const sections = document.querySelectorAll('.section');
                  sections[index].scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
          
          <section className="section bg-primary-800/50 text-secondary-900 min-h-screen relative">
            <FloatingIcons className="opacity-50" />
            <LandingPage />
          </section>
          
          <section className="section bg-secondary-900/5 text-primary-800 min-h-screen relative">
            <FloatingIcons />
            <AboutMe />
          </section>
          
          <section className="section bg-primary-800/50 text-secondary-900 min-h-screen relative">
            <FloatingIcons className="opacity-50" />
            <Resume />
          </section>
          
          <section className="section bg-secondary-900/5 text-primary-800 min-h-screen relative">
            <FloatingIcons />
            <Projects />
          </section>
          
          <section className="section bg-primary-800/50 text-secondary-900 min-h-screen relative">
            <FloatingIcons className="opacity-50" />
            <Certifications />
          </section>
          
          <section className="section bg-secondary-900/5 text-primary-800 min-h-screen relative">
            <FloatingIcons />
            <Contact />
          </section>
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
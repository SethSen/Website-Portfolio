import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = ({ className = '', animated = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const logoRef = useRef();
  
  const initialSize = 48;
  const scrolledSize = 36;
  const [currentSize, setCurrentSize] = useState(initialSize);

  useEffect(() => {
    const checkBackground = () => {
      if (!logoRef.current) return;
      
      const logo = logoRef.current;
      const rect = logo.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const element = document.elementFromPoint(x, y);
      if (!element) return;
      
      const bgColor = window.getComputedStyle(element).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      
      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        setIsDark(luminance < 0.5);
      }

      const scrollPosition = window.scrollY;
      const newSize = scrollPosition > 100 ? scrolledSize : initialSize;
      setCurrentSize(newSize);
    };

    window.addEventListener('scroll', checkBackground);
    checkBackground();
    
    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  const sections = [
    { name: 'Home', id: 0 },
    { name: 'About', id: 1 },
    { name: 'Resume', id: 2 },
    { name: 'Projects', id: 3 },
    { name: 'Certifications', id: 4 },
    { name: 'Contact', id: 5 }
  ];

  const navigateToSection = (id) => {
    const sections = document.querySelectorAll('.section');
    sections[id].scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <div ref={logoRef} className="fixed top-8 right-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-50 p-2 rounded-full hover:bg-primary-700/10 transition-all duration-300`}
        aria-expanded={isOpen}
        aria-label="Navigation menu"
        animate={{ scale: currentSize / initialSize }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.svg
          width={initialSize}
          height={initialSize}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-colors duration-300 hover:text-accent-400 ${
            isDark ? 'text-secondary-900' : 'text-primary-900'
          }`}
          initial={animated ? "hidden" : "visible"}
          animate="visible"
          style={{ transform: 'scale(-1, 1)' }}
        >
          <motion.path
            d="M30 20C30 20 45 20 45 35C45 50 25 50 25 65C25 80 40 80 40 80"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0 },
              visible: {
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" }
              }
            }}
          />
          <motion.path
            d="M60 20C60 20 75 20 75 35C75 50 55 50 55 65C55 80 70 80 70 80"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            variants={{
              hidden: { pathLength: 0 },
              visible: {
                pathLength: 1,
                transition: { duration: 2, ease: "easeInOut" }
              }
            }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="4"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-4 w-48 bg-primary-800/95 backdrop-blur-sm rounded-lg shadow-lg border border-primary-700/20 overflow-hidden"
          >
            <nav className="py-2">
              {sections.map(({ name, id }) => (
                <motion.button
                  key={id}
                  onClick={() => navigateToSection(id)}
                  className="w-full px-4 py-2 text-left text-secondary-900 hover:bg-primary-700/50 focus:bg-primary-700/50 focus:outline-none transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  {name}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Logo;
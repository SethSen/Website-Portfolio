import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, Mail, Linkedin, FileText, Shield, Lock, Key, Binary } from 'lucide-react';

const CyberAnimation = () => {
  const gridSize = 12;
  const cells = Array.from({ length: gridSize * gridSize });
  
  return (
    <div className="relative w-full max-w-[24rem] aspect-square md:block hidden">
      <div className="absolute inset-0 grid grid-cols-12 gap-1">
        {cells.map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: (i % gridSize) * 0.1 + Math.floor(i / gridSize) * 0.1,
            }}
            className="bg-accent-400/20 rounded-sm"
          />
        ))}
      </div>
      
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-32 sm:w-48 h-32 sm:h-48">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          >
            <Lock className="w-6 h-6 sm:w-8 sm:h-8 text-accent-500" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Key className="w-6 h-6 sm:w-8 sm:h-8 text-accent-600" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
          >
            <Binary className="w-6 h-6 sm:w-8 sm:h-8 text-accent-400" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-12 py-12 gap-4 lg:gap-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/5 max-w-xl text-center lg:text-left"
        >
          <h2 className="font-serif text-xl sm:text-2xl mb-3 text-secondary-200">Welcome To My Page</h2>
          <h3 className="font-sans text-lg sm:text-xl mb-2 text-secondary-100">MY NAME IS</h3>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-accent-400 mb-4 tracking-wider">
            SETH SEN
          </h1>
          <p className="font-sans text-base sm:text-lg text-secondary-200 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Cybersecurity expert specializing in digital forensics and network security.
          </p>
          <p className="font-sans text-base sm:text-lg text-secondary-200 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Protecting digital assets through innovative solutions and proactive defense strategies.
          </p>
          
          <div className="flex gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center lg:justify-start">
            {[
              { Icon: Phone, href: "tel:your-phone", label: "Call" },
              { Icon: Mail, href: "mailto:your-email", label: "Email" },
              { Icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" }
            ].map(({ Icon, href, label }, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={href}
                className="flex flex-col items-center gap-1"
              >
                <div className="p-3 sm:p-4 glass-card rounded-full hover:bg-accent-400/20 transition-all duration-300 group">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-400 group-hover:text-secondary-900 transition-colors" />
                </div>
                <span className="text-xs sm:text-sm text-secondary-200">{label}</span>
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-accent-gradient rounded-lg text-secondary-900 font-semibold hover:opacity-90 transition-all duration-300 shadow-lg mx-auto lg:mx-0 mb-4 sm:mb-8"
          >
            <FileText className="w-5 h-5" />
            Download Resume
          </motion.button>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm sm:text-base text-accent-400/60 text-center lg:text-left block lg:hidden"
          >
            Scroll Down
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-3/5 flex justify-center lg:justify-end"
        >
          <CyberAnimation />
        </motion.div>
      </div>

      <div className="absolute bottom-4 sm:bottom-10 left-0 right-0 mx-auto text-center hidden lg:block">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-sm sm:text-base text-accent-400/60 inline-block"
        >
          Scroll Down
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
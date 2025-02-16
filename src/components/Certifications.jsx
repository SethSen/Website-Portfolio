import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const certificates = [
    {
      title: "Certificate 1",
      issuer: "Issuing Organization",
      date: "2023",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80"
    },
    {
      title: "Certificate 2",
      issuer: "Issuing Organization",
      date: "2023",
      image: "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&q=80"
    },
    {
      title: "Certificate 3",
      issuer: "Issuing Organization",
      date: "2023",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      title: "Certificate 4",
      issuer: "Issuing Organization",
      date: "2023",
      image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80"
    },
    {
      title: "Certificate 5",
      issuer: "Issuing Organization",
      date: "2023",
      image: "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, certificates.length]);

  const navigate = (direction) => {
    setCurrentIndex((prev) => {
      let newIndex = prev + direction;
      if (newIndex < 0) newIndex = certificates.length - 1;
      if (newIndex >= certificates.length) newIndex = 0;
      return newIndex;
    });
  };

  const getVisibleCertificates = () => {
    const visibleIndexes = [-1, 0, 1].map(offset => {
      let index = currentIndex + offset;
      if (index < 0) index = certificates.length - 1;
      if (index >= certificates.length) index = 0;
      return index;
    });
    return visibleIndexes.map(index => certificates[index]);
  };

  const getCardStyle = (position) => {
    const baseScale = 0.7;
    switch (position) {
      case 'left':
        return {
          transform: `perspective(1000px) rotateY(15deg) scale(${baseScale}) translateX(-50%)`,
          zIndex: 1,
          filter: 'brightness(0.7) blur(1px)'
        };
      case 'center':
        return {
          transform: 'perspective(1000px) rotateY(0deg) scale(1) translateX(0)',
          zIndex: 2,
          filter: 'brightness(1) blur(0px)'
        };
      case 'right':
        return {
          transform: `perspective(1000px) rotateY(-15deg) scale(${baseScale}) translateX(50%)`,
          zIndex: 1,
          filter: 'brightness(0.7) blur(1px)'
        };
      default:
        return {};
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Certifications
      </motion.h2>

      <div 
        className="relative w-full max-w-7xl h-[500px] perspective-1000"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {getVisibleCertificates().map((cert, index) => {
            const position = index === 0 ? 'left' : index === 1 ? 'center' : 'right';
            const style = getCardStyle(position);
            
            return (
              <motion.div
                key={`${position}-${cert.title}`}
                initial={false}
                animate={style}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute w-full max-w-xl"
              >
                <div className={`
                  relative bg-[#36343E]/90 backdrop-blur-lg rounded-2xl overflow-hidden
                  border border-purple-500/20 transition-all duration-300
                  ${position === 'center' ? 'shadow-lg ring-1 ring-purple-500/30' : 'shadow-md'}
                  hover:ring-2 hover:ring-purple-500/40
                `}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#36343E] to-transparent opacity-50" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {cert.title}
                    </h3>
                    <p className="text-purple-300 mb-2 text-lg">
                      {cert.issuer}
                    </p>
                    <p className="text-purple-200/80 text-sm">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-purple-900/80 p-3 rounded-full 
            shadow-md hover:shadow-lg ring-1 ring-purple-500/20 hover:ring-purple-500/40
            transition-all duration-300 hover:bg-purple-800 group"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={() => navigate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-purple-900/80 p-3 rounded-full 
            shadow-md hover:shadow-lg ring-1 ring-purple-500/20 hover:ring-purple-500/40
            transition-all duration-300 hover:bg-purple-800 group"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {certificates.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`
                transition-all duration-300 rounded-full
                ${currentIndex === index 
                  ? 'w-6 h-2 bg-purple-500 ring-1 ring-purple-400/50' 
                  : 'w-2 h-2 bg-purple-500/40 hover:bg-purple-500/60'
                }
              `}
              aria-label={`Go to certificate ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
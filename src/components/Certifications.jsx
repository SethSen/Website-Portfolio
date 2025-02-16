import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

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
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, certificates.length - itemsPerView);

  const navigate = (direction) => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return Math.max(0, prev - 1);
      } else {
        return Math.min(maxIndex, prev + 1);
      }
    });
  };

  const NavigationButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-10 ${
        direction === 'prev' ? 'left-4' : 'right-4'
      } ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      } bg-[#36343E] p-3 rounded-full shadow-lg group transition-colors`}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} certificate`}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-6 h-6 transition-colors group-hover:text-[#7B07E4]" />
      ) : (
        <ChevronRight className="w-6 h-6 transition-colors group-hover:text-[#7B07E4]" />
      )}
    </button>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Certifications
      </motion.h2>

      <div className="w-full max-w-7xl relative">
        <div className="overflow-hidden px-4">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `${-100 * currentIndex}%`
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20
            }}
          >
            <AnimatePresence mode="wait">
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 ${
                    itemsPerView === 1 
                      ? 'w-full' 
                      : itemsPerView === 2 
                        ? 'w-1/2' 
                        : 'w-1/3'
                  } px-3`}
                >
                  <div className="bg-[#36343E] rounded-lg overflow-hidden shadow-lg h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#36343E] to-transparent opacity-50" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-[#C3C1D0] mb-1">{cert.issuer}</p>
                      <p className="text-[#C3C1D0] opacity-75 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <NavigationButton
          direction="prev"
          onClick={() => navigate('prev')}
          disabled={currentIndex === 0}
        />
        <NavigationButton
          direction="next"
          onClick={() => navigate('next')}
          disabled={currentIndex === maxIndex}
        />
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index 
                ? 'bg-[#7B07E4] w-4' 
                : 'bg-[#C3C1D0]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
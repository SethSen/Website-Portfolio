import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Key, Binary, FileText, Code, Cpu } from 'lucide-react';

const FloatingIcons = ({ className = '' }) => {
  const icons = [Shield, Lock, Key, Binary, FileText, Code, Cpu];
  
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear",
          }}
          className="absolute"
          style={{
            left: `${(index * 15) % 85}%`,
            top: `${(index * 20) % 80}%`,
          }}
        >
          <Icon className="w-8 h-8 text-accent-400/10" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;
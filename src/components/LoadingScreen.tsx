import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo animated size={80} className="text-secondary-50" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-32 h-1 bg-neutral-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent-600"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1.2 }}
          />
        </div>
        <span className="text-secondary-200 text-sm font-medium">Loading...</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
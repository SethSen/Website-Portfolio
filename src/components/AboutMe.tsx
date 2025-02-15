import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="w-full max-w-[200px] sm:max-w-[240px] mx-auto aspect-square rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold mb-6">
            Hello, I'm Seth Sen currently from Vancouver, BC, Canada.
          </h2>
          <p className="text-lg text-secondary-200 leading-relaxed">
            [Your about me content will go here. This should include your background,
            ]
            interests, and what drives you in the field of cybersecurity and digital
            forensics. You can also mention any specific areas of expertise or what
            you're currently focusing on in your studies.]
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe
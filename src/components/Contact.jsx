import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  
  const containerY = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const containerOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [controls]);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      color: "from-purple-600/20 to-purple-500/10"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-8900",
      href: "tel:+12345678900",
      color: "from-purple-500/20 to-purple-400/10"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://linkedin.com/in/your-profile",
      color: "from-purple-400/20 to-purple-300/10"
    }
  ];

  return (
    <motion.div
      style={{ y: containerY, opacity: containerOpacity }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-center text-white"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          return (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              href={method.href}
              target={method.icon === Linkedin ? "_blank" : undefined}
              rel={method.icon === Linkedin ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className={`h-full p-8 rounded-xl bg-gradient-to-br ${method.color} backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-4 border-2 border-purple-500/20 rounded-full"
                    />
                    <Icon className="w-12 h-12 text-purple-500 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors">
                    {method.value}
                  </p>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Contact;
import React, { useEffect, useRef, Suspense, forwardRef } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Loader } from '@react-three/drei';

const NetworkModel = forwardRef((props, ref) => {
  const localRef = useRef();
  const groupRef = ref || localRef;
  const animationFrameRef = useRef();
  const isMounted = useRef(true);
  
  useEffect(() => {
    if (!groupRef.current) return;
    
    const animate = () => {
      if (!isMounted.current || !groupRef.current) return;
      
      groupRef.current.rotation.y += 0.001;
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      isMounted.current = false;
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#6D28D9" metalness={0.5} roughness={0.2} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[
          Math.cos(i * Math.PI / 4) * 2,
          Math.sin(i * Math.PI / 4) * 2,
          0
        ]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#A78BFA" metalness={0.5} roughness={0.2} />
        </mesh>
      ))}
    </group>
  );
});

NetworkModel.displayName = 'NetworkModel';

const Contact = () => {
  const controls = useAnimation();
  const { scrollYProgress } = useScroll();
  const modelRef = useRef();
  
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

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-1 gap-8 order-2 lg:order-1">
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
                <div className={`h-full p-8 rounded-xl bg-gradient-to-br ${method.color} backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 card-glow`}>
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

        <div className="h-[400px] w-full relative order-1 lg:order-2">
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <NetworkModel ref={modelRef} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
              <Environment preset="city" />
            </Suspense>
          </Canvas>
          <Loader />
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
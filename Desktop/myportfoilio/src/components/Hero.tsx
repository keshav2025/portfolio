import React, { useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Code, Briefcase } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900 px-4"
    >
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full border border-white/10 backdrop-blur-sm"
            initial={{ 
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: 1,
              y: [0, -100 + Math.random() * 200],
              x: [0, -100 + Math.random() * 200],
              rotate: [0, 360]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            style={{
              width: `${50 + Math.random() * 150}px`,
              height: `${50 + Math.random() * 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 py-20">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left Content - Text Section */}
          <div className="lg:w-1/2 text-white order-1 lg:order-none">
            {/* Name Section with 3D Text Effect */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                <span className="block text-cyan-300 mb-2 text-lg sm:text-xl md:text-2xl">
                  Hi, I'm
                </span>
                <span className="block leading-tight">
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur-md opacity-75"></span>
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      Keshav Kumar
                    </span>
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Title with Floating Badge */}
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-medium mb-6"
            >
              <motion.span 
                className="inline-block px-4 py-2 bg-gray-800/50 rounded-full border border-cyan-400/30 text-cyan-200"
                whileHover={{ y: -3 }}
              >
                Full Stack Developer
              </motion.span>
            </motion.h2>

            {/* Description with 3D Card Effect */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl mb-8 text-gray-300 leading-relaxed p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.1)"
              }}
            >
              Computer Science student at Polaris School of Technology, passionate about creating innovative web and mobile applications with modern technologies.
            </motion.p>

            {/* 3D Buttons with Depth Effect */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button 
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold group"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold border-2 border-cyan-400/50 text-white group"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 bg-cyan-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </motion.button>
            </motion.div>

            {/* 3D Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/keshav2025" 
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white hover:text-cyan-400 transition-colors shadow-lg"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a 
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/keshavkumar13/" 
                className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-white hover:text-cyan-400 transition-colors shadow-lg"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - 3D Profile Image */}
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center mb-12 lg:mb-0 order-0 lg:order-none"
          >
            <motion.div 
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.02 }}
            >
              {/* 3D Layered Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full shadow-2xl transform -rotate-3"></div>
              
              {/* Main Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 bg-gray-800/50 backdrop-blur-sm">
                <img 
                  src="/mydp.jpeg" 
                  alt="Keshav Kumar"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, -5, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Code size={20} />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white"
                animate={{
                  y: [0, 10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Briefcase size={18} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.button 
            className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-cyan-400 hover:text-white transition-colors shadow-lg"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
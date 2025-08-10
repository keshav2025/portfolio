import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: Home },
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Code },
    { href: '#projects', label: 'Projects', icon: Briefcase },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl py-2' : 'bg-transparent py-4'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Keshav Kumar
            </motion.span>
          </motion.div>
          
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2"
                >
                  <motion.span
                    className={`relative z-10 ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg"
                      transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-white rounded-lg hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 py-2 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 transition-all ${
                      isActive 
                        ? 'text-white bg-gray-800' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-cyan-400' : ''} />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div 
                        className="ml-auto w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
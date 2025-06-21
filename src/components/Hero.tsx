import React from 'react';
import { ArrowDown, Github, Linkedin, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block opacity-0 animate-fade-in-up">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent opacity-0 animate-fade-in-up animation-delay-300">
                Keshav Kumar
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light mb-8 text-cyan-100 opacity-0 animate-fade-in-up animation-delay-600">
              Full Stack Developer
            </h2>
            <p className="text-lg lg:text-xl mb-8 text-gray-200 leading-relaxed opacity-0 animate-fade-in-up animation-delay-900">
              Computer Science student at Polaris School of Technology, passionate about creating 
              innovative web and mobile applications with modern technologies.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-1200">
              <button 
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <a 
                href="#contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-center"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 opacity-0 animate-fade-in-up animation-delay-1500">
              <a 
                href="https://github.com/keshav2025" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-300 transition-colors duration-200 hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/keshavkumar13/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-cyan-300 transition-colors duration-200 hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-fade-in-right animation-delay-800">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative">
                <img 
                  src="/mydp.jpeg" 
                  alt="Keshav Kumar - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-80 animate-bounce animation-delay-2000"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-80 animate-pulse animation-delay-2500"></div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in animation-delay-2000">
          <button 
            onClick={scrollToAbout}
            className="text-white hover:text-cyan-300 transition-colors duration-200 animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
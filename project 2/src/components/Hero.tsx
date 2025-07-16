import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import ParticleSystem from './ParticleSystem';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800">
      {/* Particle System */}
      <ParticleSystem mousePosition={mousePosition} isTextHovered={isTextHovered} />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative" style={{ zIndex: 10 }}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title with LED Effects */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span 
              className={`interactive-text bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent transition-all duration-300 ${
                isTextHovered ? 'led-glow-active' : ''
              }`}
              onMouseEnter={() => setIsTextHovered(true)}
              onMouseLeave={() => setIsTextHovered(false)}
              style={{
                textShadow: isTextHovered 
                  ? '0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none',
                filter: isTextHovered ? 'brightness(1.3) saturate(1.5)' : 'none'
              }}
            >
              Innovazione etica
            </span>
            <br />
            <span className="text-white">per un futuro migliore</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-pink-300 to-teal-300 bg-clip-text text-transparent">
              Soluzioni digitali avanzate, sostenibili e inclusive.
            </span>
          </p>

          {/* SEO Snippet */}
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto">
            AGETHICS sviluppa software, applicazioni e ambienti immersivi per scuole, 
            aziende e pubbliche amministrazioni, unendo tecnologia ed etica.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('chi-siamo')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 btn-hover-effect"
            >
              Scopri di più
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              Contattaci
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ zIndex: 10 }}>
        <button
          onClick={() => scrollToSection('chi-siamo')}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
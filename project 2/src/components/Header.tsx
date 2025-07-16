import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
              AGETHICS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('chi-siamo')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              Chi Siamo
            </button>
            <button
              onClick={() => scrollToSection('servizi')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              Servizi
            </button>
            <button
              onClick={() => scrollToSection('mission')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection('progetti')}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              Progetti
            </button>
            <button
              onClick={() => scrollToSection('contatti')}
              className="bg-gradient-to-r from-pink-500 to-teal-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-teal-600 transition-all duration-200"
            >
              Contatti
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-pink-400 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-gray-800/95 backdrop-blur-sm rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('chi-siamo')}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Chi Siamo
              </button>
              <button
                onClick={() => scrollToSection('servizi')}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Servizi
              </button>
              <button
                onClick={() => scrollToSection('mission')}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection('progetti')}
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200 text-left"
              >
                Progetti
              </button>
              <button
                onClick={() => scrollToSection('contatti')}
                className="bg-gradient-to-r from-pink-500 to-teal-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-teal-600 transition-all duration-200 text-center"
              >
                Contatti
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
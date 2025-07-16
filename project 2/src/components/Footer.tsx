import React from 'react';
import { Linkedin, Instagram, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
              AGETHICS
            </div>
            <p className="text-gray-400 mb-6">
              Innovazione etica per un futuro digitale più umano e sostenibile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigazione</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('chi-siamo')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Chi siamo
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servizi')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('mission')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Mission
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Progetti</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('progetti')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Progetti
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contatti')}
                  className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
                >
                  Contatti
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Santa Marinella [RM]</li>
              <li>+39 0766809678</li>
              <li>info@agethics.it</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AGETHICS S.r.l.s. Unipersonale. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">Innoviamo con etica. Costruiamo insieme un futuro sostenibile.</span>
              <Heart size={16} className="text-pink-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Zap, ArrowRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="progetti" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
              I nostri progetti
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ogni progetto AGETHICS nasce per rispondere a un bisogno reale, 
            creando valore per la società.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Featured Project */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-pink-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mr-6">
                <Zap className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">VisionAI</h3>
                <p className="text-gray-400">Progetto di punta</p>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Una piattaforma di intelligenza artificiale etica che supporta la formazione 
              attraverso ambienti virtuali immersivi. VisionAI combina machine learning 
              responsabile con tecnologie VR/AR per creare esperienze educative 
              personalizzate e inclusive.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">AI Etica</h4>
                <p className="text-gray-400 text-sm">
                  Algoritmi trasparenti che rispettano la privacy e i diritti umani
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Realtà Virtuale</h4>
                <p className="text-gray-400 text-sm">
                  Ambienti immersivi per un apprendimento coinvolgente
                </p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Accessibilità</h4>
                <p className="text-gray-400 text-sm">
                  Soluzioni inclusive per tutti i tipi di apprendimento
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center gap-2">
                Scopri VisionAI
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-teal-400 text-teal-400 px-6 py-3 rounded-full font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-200">
                Scarica la brochure
              </button>
            </div>
          </div>
          {/* Coming Soon Projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
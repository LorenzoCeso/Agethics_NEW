import React from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
              Chi siamo
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            AGETHICS nasce per mettere la tecnologia al servizio delle persone. 
            Crediamo che l'innovazione debba essere etica, inclusiva e realmente 
            utile alla comunità.
          </p>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Progettiamo software, applicazioni e soluzioni immersive con l'obiettivo 
            di migliorare la formazione, il lavoro e la vita quotidiana. Collaboriamo 
            con scuole, università, enti pubblici e imprese per costruire un futuro 
            digitale più umano, sostenibile e responsabile.
          </p>

          <div className="bg-gradient-to-r from-pink-500 to-teal-500 p-1 rounded-lg inline-block mb-8">
            <div className="bg-gray-900 px-8 py-4 rounded-md">
              <p className="text-xl font-semibold bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
                Tecnologia etica, innovazione sostenibile.
              </p>
            </div>
          </div>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Etica</h3>
            <p className="text-gray-300">
              Ogni progetto è guidato da principi etici che mettono al centro 
              la dignità umana e il benessere collettivo.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Inclusività</h3>
            <p className="text-gray-300">
              Creiamo soluzioni accessibili a tutti, abbattendo barriere 
              tecnologiche e promuovendo l'uguaglianza digitale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Innovazione</h3>
            <p className="text-gray-300">
              Esploriamo le frontiere della tecnologia per sviluppare 
              soluzioni innovative che rispondano ai bisogni reali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
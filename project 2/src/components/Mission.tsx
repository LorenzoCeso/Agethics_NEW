import React from 'react';
import { Target, Eye, Handshake } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
              La nostra mission
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Vogliamo costruire un futuro dove la tecnologia migliori la vita delle persone 
            in modo etico, trasparente e sostenibile.
          </p>

          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            Lavoriamo per creare valore condiviso, favorire l'inclusione e generare 
            un impatto positivo sulla società.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Eye className="text-white" size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-xl text-gray-300">
              <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent font-semibold">
                Innovazione etica al servizio delle comunità.
              </span>
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-teal-500 p-1 rounded-2xl inline-block">
            <div className="bg-gray-900 px-12 py-8 rounded-xl">
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
                Insieme per un digitale più umano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
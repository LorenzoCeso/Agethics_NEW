import React from 'react';
import { Monitor, Globe, BookOpen, Microscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Sviluppo software e applicazioni',
      description: 'Creiamo software personalizzati, applicazioni web e mobile, piattaforme digitali e ambienti virtuali, con un forte focus su accessibilità, usabilità e sicurezza.',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'Eduverso & tecnologie immersive',
      description: 'Realizziamo mondi virtuali, avatar interattivi e simulazioni educative per apprendere in modo immersivo e coinvolgente, a scuola e in azienda.',
      gradient: 'from-teal-500 to-blue-500'
    },
    {
      icon: BookOpen,
      title: 'Consulenza e formazione digitale',
      description: 'Affianchiamo enti e imprese nella transizione digitale, con percorsi di formazione su misura per sviluppare competenze tecnologiche e strategiche.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Microscope,
      title: 'Ricerca e sviluppo etico',
      description: 'Investiamo in ricerca e sperimentazione nel campo dell\'AI, della realtà aumentata e delle soluzioni intelligenti, rispettando privacy e diritti umani.',
      gradient: 'from-blue-500 to-teal-500'
    }
  ];

  return (
    <section id="servizi" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
              I nostri servizi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <span className="bg-gradient-to-r from-pink-300 to-teal-300 bg-clip-text text-transparent">
              Progettiamo innovazione per la formazione, il business e la pubblica amministrazione.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl hover:transform hover:scale-105 transition-all duration-300 border border-gray-700/50 group overflow-hidden"
            >
              {/* LED Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-teal-400/20 blur-xl"></div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-teal-500/10 blur-2xl"></div>
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-teal-400/30 blur-3xl animate-pulse"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
              <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <service.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-pink-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105">
            Prenota una demo →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
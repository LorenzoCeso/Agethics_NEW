import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contatti"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
              Contattaci
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Scrivici per ricevere maggiori informazioni, proporre collaborazioni
            o sviluppare insieme un progetto innovativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">
                AGETHICS S.r.l.s. Unipersonale
              </h3>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Indirizzo</h4>
                    <p className="text-gray-300">
                      Via Virgilio n. 7<br />
                      CAP 00058, Santa Marinella [RM]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefono</h4>
                    <p className="text-gray-300">+39 0766809678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@agethics.it</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700/50 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6">
                Inizia subito
              </h3>

              <div className="space-y-4 flex-1 flex flex-col justify-center">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-200">
                  Unisciti a noi →
                </button>
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-200">
                  Prenota una demo →
                </button>
                <button className="w-full border-2 border-purple-400 text-purple-400 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-200">
                  Parla con un esperto →
                </button>
                <button className="w-full border-2 border-teal-400 text-teal-400 py-3 rounded-lg font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-200">
                  Scarica la brochure →
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-gradient-to-r from-pink-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:from-pink-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Invia un messaggio
            <Send size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

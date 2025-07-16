import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mission from './components/Mission';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Mission />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
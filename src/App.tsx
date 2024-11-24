import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <Skills />
      <Blog />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Schedule from "./components/Schedule.tsx";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <Skills />
      <Blog />
      <Projects />
        <Schedule />
      <Footer />
    </div>
  );
}

export default App;
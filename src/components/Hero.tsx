import React from 'react';
import { Github, Linkedin, BookOpen } from 'lucide-react';


import profilePic from './assets/laurentmesguen.jpg';

const Hero = () => {
  return (
    <header className="relative py-24 bg-gray-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#4F46E5_0,transparent_50%)] opacity-20"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <img
            src={profilePic}
            alt="Laurent Mesguen"
            className="rounded-full w-32 h-32 object-cover mb-6 ring-4 ring-indigo-500/50"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
            Laurent Mesguen
          </h1>
          <p className="text-xl text-gray-300 mb-3">Freelance C++/Python Developer</p>
          <p className="text-lg text-gray-400 mb-6">UI/UX Designer & Cross-Platform Expert</p>
          <div className="flex gap-6 relative z-50">
            <a
              href="https://www.linkedin.com/in/laurent-mesguen-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Linkedin className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="https://github.com/LaurentMesguen"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <Github className="w-6 h-6 group-hover:text-white" />
            </a>
            <a
              href="https://lmesguen.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-indigo-600 transition-all duration-300 hover:scale-110 cursor-pointer"
            >
              <BookOpen className="w-6 h-6 group-hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
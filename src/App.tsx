import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, MonitorSmartphone, Cpu, BookOpen } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import BlogCard from './components/BlogCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#4F46E5_0,transparent_50%)] opacity-20"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200"
              alt="Laurent Mesguen"
              className="rounded-full w-32 h-32 object-cover mb-6 ring-4 ring-indigo-500/50"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
              Laurent Mesguen
            </h1>
            <p className="text-xl text-gray-300 mb-3">Freelance C++/Python Qt QML Developer</p>
            <p className="text-lg text-gray-400 mb-6">UI/UX Designer & Cross-Platform Expert</p>
            <div className="flex gap-4 mb-8">
              <a href="https://www.linkedin.com/in/laurent-mesguen-developer/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/LaurentMesguen" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://lmesguen.hashnode.dev" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors">
                <BookOpen className="w-6 h-6" />
              </a>
            </div>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full font-semibold transition-colors"
            >
              Hire Me
            </button>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <Code2 className="w-12 h-12 mb-4 text-indigo-500" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>C++</SkillBadge>
                <SkillBadge>Python</SkillBadge>
                <SkillBadge>Qt</SkillBadge>
                <SkillBadge>QML</SkillBadge>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <Palette className="w-12 h-12 mb-4 text-purple-500" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>UI Design</SkillBadge>
                <SkillBadge>UX Design</SkillBadge>
                <SkillBadge>Figma</SkillBadge>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <MonitorSmartphone className="w-12 h-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Desktop</SkillBadge>
                <SkillBadge>Mobile</SkillBadge>
                <SkillBadge>Embedded</SkillBadge>
              </div>
            </div>
            <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
              <Cpu className="w-12 h-12 mb-4 text-green-500" />
              <h3 className="text-xl font-semibold mb-2">Systems</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge>Linux</SkillBadge>
                <SkillBadge>Windows</SkillBadge>
                <SkillBadge>macOS</SkillBadge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-12">
            <BookOpen className="w-8 h-8 text-indigo-500" />
            <h2 className="text-3xl font-bold text-center">Latest Articles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="Getting Started with Qt and QML"
              description="Learn how to build modern desktop applications using Qt and QML with this comprehensive guide."
              link="https://lmesguen.hashnode.dev"
              date="March 2024"
            />
            <BlogCard
              title="Python Tips for C++ Developers"
              description="Discover how to leverage your C++ knowledge when working with Python, including best practices and common pitfalls."
              link="https://lmesguen.hashnode.dev"
              date="March 2024"
            />
            <BlogCard
              title="UI/UX Design for Desktop Apps"
              description="Essential design principles and patterns for creating user-friendly desktop applications."
              link="https://lmesguen.hashnode.dev"
              date="March 2024"
            />
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://lmesguen.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              View all articles
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="GitHub Projects"
              description="Explore my open-source contributions and personal projects on GitHub."
              link="https://github.com/LaurentMesguen"
              tags={['C++', 'Python', 'Qt', 'QML']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
          <p className="text-gray-400 text-center mb-12">Available for freelance projects and consulting</p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Laurent Mesguen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
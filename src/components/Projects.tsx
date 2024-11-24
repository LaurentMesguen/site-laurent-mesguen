import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section className="py-20 bg-gray-900">
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
  );
};

export default Projects;
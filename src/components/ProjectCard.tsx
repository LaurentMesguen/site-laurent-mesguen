import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, tags }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
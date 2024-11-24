import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  date: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, link, date }) => {
  return (
    <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-all group">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">{title}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <time className="text-sm text-gray-400 mb-3 block">{date}</time>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default BlogCard;
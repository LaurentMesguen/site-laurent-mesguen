import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import BlogCard from './BlogCard';

const Blog = () => {
  return (
    <section className="py-20 bg-gray-900">
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
  );
};

export default Blog;
import React from 'react';
import {Code2, Palette, MonitorSmartphone, Cpu, Award, BookOpen} from 'lucide-react';
import SkillBadge from './SkillBadge';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Award className="w-8 h-8 text-indigo-500"/>
          <h2 className="text-3xl font-bold text-center">Expertise</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
            <Code2 className="w-12 h-12 mb-4 text-indigo-500"/>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>C++</SkillBadge>
              <SkillBadge>Python</SkillBadge>
              <SkillBadge>Qt</SkillBadge>
              <SkillBadge>QML</SkillBadge>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
            <Palette className="w-12 h-12 mb-4 text-purple-500"/>
            <h3 className="text-xl font-semibold mb-2">Design</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>UI Design</SkillBadge>
              <SkillBadge>UX Design</SkillBadge>
              <SkillBadge>Figma</SkillBadge>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
            <MonitorSmartphone className="w-12 h-12 mb-4 text-blue-500"/>
            <h3 className="text-xl font-semibold mb-2">Cross-Platform</h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge>Desktop</SkillBadge>
              <SkillBadge>Mobile</SkillBadge>
              <SkillBadge>Embedded</SkillBadge>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-gray-800 hover:bg-gray-750 transition-colors">
            <Cpu className="w-12 h-12 mb-4 text-green-500"/>
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
  );
};

export default Skills;
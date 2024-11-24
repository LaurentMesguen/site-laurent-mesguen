import React from 'react';

interface SkillBadgeProps {
  children: React.ReactNode;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ children }) => {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300">
      {children}
    </span>
  );
};

export default SkillBadge;
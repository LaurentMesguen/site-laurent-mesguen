import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Laurent Mesguen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
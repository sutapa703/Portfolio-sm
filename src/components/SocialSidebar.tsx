import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col space-y-4">
      <a
        href="#" // You can add your GitHub link here
        className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group"
      >
        <Github className="text-gray-400 group-hover:text-white" size={20} />
      </a>
      
      <a
        href="#" // You can add your LinkedIn link here
        className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group"
      >
        <Linkedin className="text-gray-400 group-hover:text-blue-400" size={20} />
      </a>
      
      <a
        href="#" // You can add your email link here
        className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group"
      >
        <Mail className="text-gray-400 group-hover:text-yellow-400" size={20} />
      </a>
      
      <a
        href="#" // You can add your Twitter link here
        className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all duration-300 group"
      >
        <Twitter className="text-gray-400 group-hover:text-sky-400" size={20} />
      </a>
    </div>
  );
};

export default SocialSidebar;
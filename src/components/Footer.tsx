import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 px-6 bg-black/50 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
            <span>© 2025 Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>by</span>
            <span className="text-white font-medium">Sutapa</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://github.com/sutapa703"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sutapa-maity"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:sutapa703@gmail.com"
              className="p-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://twitter.com/sutapa703"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-sky-400 transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
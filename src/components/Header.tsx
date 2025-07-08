import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/10 backdrop-blur-md border-b border-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <svg
                width="70"
                height="70"
                viewBox="0 0 100 100"
                className="text-yellow-400 hover:text-pink-400 transition-colors duration-300"
                fill="currentColor"
              >
                {/* Benzene ring */}
                <polygon
                  points="50,15 73,30 73,60 50,75 27,60 27,30"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  className="animate-pulse"
                />
                {/* Animated sparkle */}
                <circle cx="50" cy="22.5" r="2.5" className="animate-ping" opacity="0.7" />
                <circle cx="66" cy="37.5" r="2.5" className="animate-ping" style={{animationDelay: '0.5s'}} opacity="0.7" />
                <circle cx="66" cy="62.5" r="2.5" className="animate-ping" style={{animationDelay: '1s'}} opacity="0.7" />
                <circle cx="50" cy="77.5" r="2.5" className="animate-ping" style={{animationDelay: '1.5s'}} opacity="0.7" />
                <circle cx="34" cy="62.5" r="2.5" className="animate-ping" style={{animationDelay: '2s'}} opacity="0.7" />
                <circle cx="34" cy="37.5" r="2.5" className="animate-ping" style={{animationDelay: '2.5s'}} opacity="0.7" />
                {/* Letter S */}
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  className="text-2xl font-bold fill-current"
                >
                  S
                </text>
              </svg>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-green-400 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
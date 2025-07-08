import React from 'react';
import TypingAnimation from './TypingAnimation';

const Hero: React.FC = () => {
  const roles = [
    'Creative Developer',
    'App Builder',
    'Passionate Learner',
    'UI/UX Designer'
  ];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <div className="text-4xl md:text-6xl font-medium animate-fade-in">
            Hi! I'm{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold animate-pulse">
              Sutapa Maity
            </span>
          </div>
        </div>
        
        <div className="mb-8">
          <TypingAnimation texts={roles} />
        </div>
        
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-gray-300">
          Code with a Soul,
          <br />
          Design with a Purpose.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Turning ideas into delightful digital experiences with creativity, 
          passion, and a touch of magic.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-pink-400 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-yellow-400/25 inline-block"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-black transition-all duration-300 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
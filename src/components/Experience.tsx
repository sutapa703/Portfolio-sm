import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Full-stack Developer',
    company: 'CodeAlpha',
    type: 'Internship',
    duration: 'Jul 2025 – Present · 1 mo',
    location: 'Remote – India',
    description: 'Developing full-stack applications using modern technologies and frameworks.'
  },
  {
    title: 'Web Developer',
    company: 'InnoByte Services',
    type: 'Internship',
    duration: 'Jul 2025 – Present · 1 mo',
    location: 'Remote – India',
    description: 'Creating responsive web applications and implementing innovative solutions.'
  },
  {
    title: 'Full-stack Developer',
    company: 'Prodigy InfoTech',
    type: 'Internship',
    duration: 'Jul 2025 – Jul 2025 · 1 mo',
    location: 'Remote – India',
    description: 'Built end-to-end applications with focus on user experience and performance.'
  },
  {
    title: 'Web Development Intern',
    company: 'Codveda Technologies',
    type: 'Internship',
    duration: 'Jun 2025 – Jul 2025 · 2 mos',
    location: 'Remote – India',
    description: 'Collaborated on web development projects and learned industry best practices.'
  },
  {
    title: 'Web Development and Designing Intern',
    company: 'Oasis Infobyte',
    type: 'Internship',
    duration: 'May 2025 – Jun 2025 · 2 mos',
    location: 'Remote – India',
    description: 'Worked on web development and UI/UX design projects with modern frameworks.'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-pink-400 to-purple-400"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full flex-shrink-0 mt-6"></div>
                
                {/* Experience card */}
                <div className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-yellow-400 font-medium">
                        {exp.company} · {exp.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
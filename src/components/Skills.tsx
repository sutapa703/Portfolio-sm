import React from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Palette, 
  Cloud, 
  GitBranch,
  Monitor,
  Cpu,
  Globe,
  Layers
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Monitor size={32} />,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Sass', 'jQuery', 'Vue.js'],
    color: 'from-blue-400 to-cyan-400'
  },
  {
    name: 'Backend Development',
    icon: <Database size={32} />,
    skills: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'PHP', 'Laravel', 'Java', 'Spring Boot', 'C++'],
    color: 'from-green-400 to-emerald-400'
  },
  {
    name: 'Mobile Development',
    icon: <Smartphone size={32} />,
    skills: ['React Native', 'Flutter', 'Dart', 'Android Studio', 'iOS Development', 'Expo', 'Ionic', 'Xamarin'],
    color: 'from-purple-400 to-pink-400'
  },
  {
    name: 'Database & Cloud',
    icon: <Cloud size={32} />,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'AWS', 'Google Cloud', 'Azure', 'Redis', 'SQLite'],
    color: 'from-orange-400 to-red-400'
  },
  {
    name: 'Design & UI/UX',
    icon: <Palette size={32} />,
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Sketch', 'InVision', 'Canva', 'Framer'],
    color: 'from-pink-400 to-rose-400'
  },
  {
    name: 'DevOps & Tools',
    icon: <GitBranch size={32} />,
    skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'Jenkins', 'Vercel', 'Netlify', 'Heroku'],
    color: 'from-indigo-400 to-purple-400'
  },
  {
    name: 'Programming Languages',
    icon: <Code size={32} />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'PHP', 'Dart', 'Swift', 'Kotlin'],
    color: 'from-yellow-400 to-orange-400'
  },
  {
    name: 'Frameworks & Libraries',
    icon: <Layers size={32} />,
    skills: ['React', 'Next.js', 'Vue.js', 'Angular', 'Express.js', 'Django', 'Flask', 'Spring Boot', 'Laravel'],
    color: 'from-teal-400 to-blue-400'
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-black`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-gray-200 transition-colors">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-pink-400/20 rounded-full border border-yellow-400/30">
            <Cpu className="text-yellow-400" size={20} />
            <span className="text-gray-300">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
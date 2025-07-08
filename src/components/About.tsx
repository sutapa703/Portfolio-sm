import React, { useState, useEffect } from 'react';
import { Upload, User, Download } from 'lucide-react';

const About: React.FC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // Load saved image from localStorage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem('sutapa-profile-image');
    if (savedImage) {
      setProfileImage(savedImage);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setProfileImage(imageData);
        // Save to localStorage for persistence
        localStorage.setItem('sutapa-profile-image', imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadResume = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add your resume file to the public folder
    link.download = 'Sutapa_Maity_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-gray-700">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Sutapa Maity"
                  className="w-76 h-76 rounded-lg object-cover"
                />
              ) : (
                <User size={120} className="text-gray-400" />
              )}
            </div>
            
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            
            {/* Download Resume Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-400/25"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="text-xl md:text-2xl font-medium text-yellow-400">
              "Turning ideas into delightful digital experiences."
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a Creative Developer with a passion for crafting beautiful, 
                functional, and user-centric digital experiences. My journey in 
                the world of technology is driven by curiosity, creativity, and 
                the desire to solve real-world problems through code.
              </p>
              
              <p>
                With expertise spanning full-stack development, UI/UX design, 
                and app development, I believe in creating solutions that not 
                only work flawlessly but also bring joy to users. Every line 
                of code I write carries intention, every design choice serves 
                a purpose.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sketching out ideas 
                for the next big thing. I believe that the best products come 
                from the intersection of technology and human empathy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:sutapa703@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                passionate people. Whether you have a project in mind or just 
                want to say hello, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-gray-300">sutapa703@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <div className="text-white font-medium">Location</div>
                  <div className="text-gray-300">India</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sutapa703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sutapa-maity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a
                  href="https://twitter.com/sutapa703"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition-colors duration-300"
                >
                  <Twitter className="text-white" size={20} />
                </a>
                <a
                  href="mailto:sutapa703@gmail.com"
                  className="p-3 bg-yellow-500 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  <Mail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-400 text-black font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-blue-400/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="text-green-400 text-center">
                  Message sent successfully! Your email client should open.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="text-red-400 text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { ChevronRight, ExternalLink, Linkedin, Twitter, Github, Facebook, Instagram, MessageCircle } from 'lucide-react';

const ProjectView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'Java Script', category: 'frontend' },
    { name: 'MY SQL', category: 'azure' },
    { name: 'PHP(Laravel)', category: 'Backend' },
    { name: 'Database Interaction API', category: 'azure' },
    { name: 'RESTful APIs', category: 'azure' },
    { name: 'Google Maps API', category: 'azure' },
    { name: 'Authentication API', category: 'azure' },
   
   
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: 'rgba(147, 51, 234, 0.5)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Navigation with hover animations */}
      <nav className="fixed top-0 w-full p-5 flex justify-between items-center z-50 bg-black/50 backdrop-blur-sm">
        <div className="text-2xl font-bold text-purple-500 transform hover:scale-105 transition-transform"></div>
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Expertise', 'Experiences', 'My Work'].map((item) => (
            <a
              key={item}
              href={`/${item.replace(' ', '')}`}
              className="relative hover:text-purple-500 transition-colors duration-300 group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <button className="px-6 py-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-all duration-300 hover:scale-105 transform">
          <a href="https://wa.me/+94788824998">Contact</a>
        </button>
      </nav>

      {/* Social Links with hover animations */}
      <div className={`fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        {[
          { Icon: Linkedin, href: "https://www.linkedin.com/in/dushantha-majith-20b969243" },
          { Icon: Twitter, href: "#" },
          { Icon: Github, href: "https://github.com/dushantha2000" },
          { Icon: Facebook, href: "https://web.facebook.com/dushantha.majith" },
          { Icon: Instagram, href: "https://www.instagram.com/dushantha_majith" },
          { Icon: MessageCircle, href: "https://wa.me/+94788824998" }
        ].map(({ Icon, href }, index) => (
          <a
            key={index}
            href={href}
            className="text-white hover:text-purple-500 transition-all duration-300 transform hover:scale-125"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      {/* Main Content with fade-in animations */}
      <div className={`max-w-6xl mx-auto px-10 py-12 mt-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-sm text-gray-400 mb-4">
          <nav className="flex items-center space-x-2">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <ChevronRight size={16} />
            <a href="/Work" className="hover:text-white transition-colors">Projects</a>
            <ChevronRight size={16} />
            <span className="text-purple-400">Jayasiri motors (website)</span>
          </nav>
        </div>

        <h1 className="text-4xl font-bold mb-2 animate-fade-in">Jayasiri motors</h1>
        <p className="text-sm text-purple-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>Web Development</p>

        {/* Project Info Grid with staggered animations */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-gray-300 leading-relaxed">
            The Time Management System for Jayasiri Motors is a digital platform designed to 
            improve operational efficiency and customer satisfaction. It addresses issues like time 
            management and service delays by introducing features such as online appointment scheduling, 
            a centralized communication system, and a user-friendly interface. Customers can book services, 
            receive updates in real-time, and enjoy a seamless service experience, while service managers 
            can efficiently handle appointments, track customer interactions, and send timely notifications.
            </p>
            <a 
              href="/Work" 
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 transform"
            >
              View Other Projects <ExternalLink size={16} />
            </a>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Client</h2>
                <p className="text-gray-300">Jayasiri Motors</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">From</h2>
                <div className="flex items-center gap-2">
                <img 
                    src="/images/srilanka1.png" 
                    alt="Australian flag"
                    className="rounded"
                    style={{ width: '50px', height: 'auto' }} 
                  />
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack with staggered fade-in animations */}
        <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-purple-900/50 rounded-lg text-sm hover:bg-purple-900 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Screenshot with zoom animation on hover */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gray-900 rounded-lg p-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/1.1.1.PNG"
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-gray-900 rounded-lg p-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/1.1.6.PNG"
              className="w-full rounded-lg"
            />
          </div>
          
          <div className="bg-gray-900 rounded-lg p-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/1.1.5.PNG"
              className="w-full rounded-lg"
            />
          </div>
          <div className="bg-gray-900 rounded-lg p-2 transform transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/images/1.1.7.PNG"
              className=" rounded-lg"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
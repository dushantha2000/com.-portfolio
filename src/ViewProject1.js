import React, { useEffect, useState } from 'react';
import { ChevronRight, ExternalLink, Linkedin, Twitter, Github, Facebook, Instagram, MessageCircle } from 'lucide-react';

const ProjectView = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { name: 'Figma', category: 'frontend' },
    { name: 'Figma Prototyping', category: 'backend' },
    { name: 'Material Icons', category: 'azure' },
    { name: 'Material Design Guidelines', category: 'azure' },
    { name: 'Figma Inspect', category: 'azure' },
    { name: 'illustrator', category: 'azure' },
    
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
            <span className="text-purple-400">Quick Medi</span>
          </nav>
        </div>

        <h1 className="text-4xl font-bold mb-2 animate-fade-in">Quick Medi (Medical application)</h1>
        <p className="text-sm text-purple-400 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>Web Development</p>

        {/* Project Info Grid with staggered animations */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-gray-300 leading-relaxed">
            The QuickMedi App is a modern healthcare solution that connects patients with specialist doctors through a user-friendly digital platform. The app simplifies access to medical care by allowing users to find nearby doctors, view their profiles, and book appointments with ease. Features include real-time availability, detailed doctor profiles, appointment scheduling, and an integrated shopping cart for purchasing prescribed medicines. Patients can also securely manage payments using integrated payment gateways.

This project was designed with a focus on usability, convenience, and efficiency to bridge the gap between patients and healthcare providers. It promotes transparency and trust by allowing patients to select doctors based on ratings and reviews.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 transform"
            >
              View Project <ExternalLink size={16} />
            </a>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Client</h2>
                <p className="text-gray-300">-</p>
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
                  <span className="text-gray-300">Srilanka</span>
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
              src="/images/project2.png"
              alt="Visit Pearl website screenshot"
              className="w-full "
              
            />
            <img
              src="/images/1.png"
              alt="Visit Pearl website screenshot"
              className="w-full "
              
            />
            <img
              src="/images/2.png"
              alt="Visit Pearl website screenshot"
              className="w-full "
              
            />
            <img
              src="/images/3.png"
              alt="Visit Pearl website screenshot"
              className="w-full "
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
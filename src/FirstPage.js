import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Github, Facebook, Instagram, MessageCircle } from 'lucide-react';

const SpacePortfolio = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer"
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white relative overflow-hidden">
      {/* Animated Particles Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              background: 'rgba(147, 51, 234, 0.5)',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animation: `particle ${Math.random() * 20 + 10}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-500/20 rounded-full"
            style={{
              width: `${(i + 1) * 20}%`,
              height: `${(i + 1) * 20}%`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: `rotate ${(i + 1) * 20}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Glowing Lines */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
          style={{
            top: `${i * 25}%`,
            animation: `scanline ${(i + 1) * 3}s linear infinite`,
            transform: `translateY(${Math.sin(i) * 50}px)`
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full p-5 flex justify-between items-center z-50">
        <div className="text-2xl font-bold text-purple-500"></div>
        <div className="hidden md:flex space-x-8">
          <a href="/" className="hover:text-purple-500 transition-colors">Home</a>
          <a href="/About" className="hover:text-purple-500 transition-colors">About</a>
          <a href="/Expertise" className="hover:text-purple-500 transition-colors">Expertise</a>
          <a href="/ProfessionalEx" className="hover:text-purple-500 transition-colors">Experiences</a>
          <a href="/WorK" className="hover:text-purple-500 transition-colors">My Work</a>
          
        </div>
        <button className="px-6 py-2 border border-purple-500 rounded-full hover:bg-purple-500 transition-all">
          <a href="https://wa.me/+94788824998">Contact</a>
        </button>
      </nav>

      {/* Social Links */}
      <div className="fixed left-5 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <a href="https://www.linkedin.com/in/dushantha-majith-20b969243" className="text-white hover:text-purple-500 transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-white hover:text-purple-500 transition-colors">
          <Twitter size={20} />
        </a>
        <a href="https://github.com/dushantha2000" className="text-white hover:text-purple-500 transition-colors">
          <Github size={20} />
        </a>
        <a href="https://web.facebook.com/dushantha.majith" className="text-white hover:text-purple-500 transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/dushantha_majith" className="text-white hover:text-purple-500 transition-colors">
          <Instagram size={20} />
        </a>
        <a href="https://wa.me/+94788824998" className="text-white hover:text-purple-500 transition-colors">
          <MessageCircle size={20} />
        </a>
      </div>

      {/* Main Content */}
      <main className="h-screen flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-6xl font-bold mb-4">Dushantha majith</h1>
        <div className="h-8"> {/* Fixed height container for smooth transitions */}
          <p className="text-2xl opacity-80 animate-fade-in">
            {roles[currentRole]} |
          </p>
        </div>
      </main>

      <style jsx>{`
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-100vh) translateX(100vw);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SpacePortfolio;
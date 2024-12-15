import React, { useState, useEffect } from 'react';
import { Monitor, Server, Smartphone } from 'lucide-react';


const ExpertiseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const expertiseData = [
    {
      title: "UI/UX Development",
      icon: <Monitor className="w-8 h-8 text-purple-500" />,
      skills: ["Figma", "Adobe XD","Adobe illustrator"]
    },
    {
      title: "Frontend Development",
      icon: <Server className="w-8 h-8 text-purple-500" />,
      skills: ["HTML", "CSS", "JavaScript", "ReactJS","Bootstrap",]
    },
    {
      title: "Backend Development",
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      skills: ["Laravel","MongoDB", "MySQL", "Firebase"]
    }
  ];

  return (
    <section className="w-full bg-linear-gradien from-gray-900 to-gray-800 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`mb-12 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-500 inline-block animate-pulse">02.</span>
            <span className="relative">
              My Expertise
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-700 delay-300"
                
              ></div>
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {expertiseData.map((expertise, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg p-6 transform transition-all duration-700 hover:bg-gray-700 
                         hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer
                         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center gap-3 mb-6 group">
                <div className="transform transition-transform duration-300 group-hover:rotate-12">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {expertise.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {expertise.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-purple-500/20 text-gray-300 font-mono text-sm px-3 py-1 rounded-lg 
                             border border-purple-500/30 transition-all duration-300
                             hover:bg-purple-500/30 hover:border-purple-500/50 hover:scale-105"
                    style={{ 
                      transitionDelay: `${skillIndex * 100}ms`,
                      animation: `fadeIn 0.5s ease-out ${index * 200 + skillIndex * 100}ms both`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ExpertiseSection;
import React, { useState, useEffect } from 'react';
import { MapPin, Link, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const experiences = [
    {
      role: "STEMup Educational Foundation",
      duration: " 2023 - Present",
      location: "No:67/2, Wewalduwa, Kelaniya, 11600, Sri Lanka",
      company: "stemup.lk",
      description: "As a volunteer with STEMUp Educational Foundation, I actively contribute to projects aimed at promoting STEM education. I lead coding sessions for initiatives like (Hour of Code) and Code Club, guiding students in exploring technology and computer science.  helping inspire the next generation of tech enthusiasts.",
      skills: ["Coding and Programming", "Leadership", "Communication", "Collaboration", "Time Management", "Problem-Solving","Public Speaking"],
      highlights: [
        "Supporting the (Hour of Code) project, which introduces coding to students in 100 schools.",
        "Assisting in fostering early interest in technology and computer science among students.",
        "Involved in the Code Club project, promoting coding skills and digital literacy.",
        "Actively sharing knowledge and personal experiences to inspire and guide students in STEM education and technology fields."
      ]
    }
  ];

  return (
    <section className="w-full bg-linear-gradien from-gray-900 to-gray-800 py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className={`mb-12 transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-white flex items-center gap-2">
            <span className="text-purple-500 inline-block animate-pulse">03.</span>
            <span className="relative">
            Volunteering Experience
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-700"
                
              />
            </span>
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm border border-purple-500/20
                         transform transition-all duration-700 hover:shadow-lg hover:shadow-purple-500/10
                         ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Header */}
              <div className="bg-purple-900/50 p-4 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/10 transform origin-left transition-transform duration-300"
                     style={{ transform: `scaleX(${activeCard === index ? 1 : 0})` }} />
                <h3 className="text-xl font-semibold text-white relative z-10 flex items-center gap-2">
                  {exp.role}
                  <ChevronRight 
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      activeCard === index ? 'translate-x-1' : ''
                    }`}
                  />
                </h3>
                <span className="text-gray-300 text-sm relative z-10">{exp.duration}</span>
              </div>

              {/* Content */}
              <div className="p-6 relative group">
                {/* Location and Company */}
                <div className="flex items-center gap-6 mb-4 text-gray-300">
                  <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <MapPin className="w-4 h-4 text-purple-500" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                    <Link className="w-4 h-4 text-purple-500" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights */}
                <ul className="mb-6 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li 
                      key={i}
                      className={`flex items-center gap-2 text-gray-300 transform transition-all duration-300
                                ${activeCard === index ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-gray-300
                               hover:bg-purple-500/20 hover:scale-105 transition-all duration-300
                               border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Background Logo */}
                <div className="absolute top-6 right-6 opacity-5 transform transition-all duration-500 group-hover:scale-110 group-hover:opacity-10">
                  <svg className="w-32 h-32" viewBox="0 0 100 100">
                    <circle cx="30" cy="50" r="20" fill="#FF4B4B" />
                    <circle cx="70" cy="50" r="20" fill="#7C3AED" />
                    <path d="M40 20 L60 80" stroke="white" strokeWidth="8" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
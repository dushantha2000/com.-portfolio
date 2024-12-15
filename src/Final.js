import React from 'react';

const ContactSection = () => {
  return (
    <>
      {/* Contact Section */}
      <section className="w-full bg-gradient-to-br from-purple-900 to-purple-950 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-800/20 transform -rotate-45" />
          <div className="absolute top-10 left-40 w-4 h-4 rounded-full bg-blue-500" />
          
          {/* Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">
            Together, let's create something extraordinary!
            </h2>
            
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-white">
              <a href="tel:+94788 824 998" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +94788 824 998
              </a>
              
              <a href="https://wa.me/+94788824998" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                +94788 824 998
              </a>
              
              <a href="mailto:majithdushantha@gmail.com" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                majithdushantha@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-linear-gradien py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © 2024 MajithDushantha. All rights reserved.
            </p>
            
            {/* Logo */}
            <div className="text-purple-500 text-xl font-mono">
              Dushantha._
            </div>

            {/* Scroll to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
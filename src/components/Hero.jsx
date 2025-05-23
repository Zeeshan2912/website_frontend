import React, { useState } from 'react';
import { motion } from 'framer-motion';
import video from "/assets/sports-video.mp4";
import ProgramsCarousel from './ProgramsCarousel';

const Hero = () => {  
  const [showPrograms, setShowPrograms] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden pt-0 mt-0" // Removed padding, margin and rounded corners
    > 
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={video}
      />
      {/* Only a simple dark gradient overlay for readability, no lighting or drop-shadow effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/40 z-10"></div>
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white pt-16">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Elevate your game with <span className="text-orange-400">Klimb</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl mb-10 max-w-2xl text-white/90"
        >
          Unlock your potential with expert coaching, inspiring community, and the tools you need to reach new heights.
        </motion.p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">          <motion.a
            href="#about"
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(249, 115, 22, 0.3)"
            }}
            className="group relative bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-3 px-8 rounded-full text-lg hover:from-orange-500 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-5 h-5"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
                  />
                </svg>
              </motion.div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-orange-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Discover our training methodology
              <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 text-black/80" viewBox="0 0 100 100">
                <polygon points="50,100 0,0 100,0" fill="currentColor"/>
              </svg>
            </span>
          </motion.a>          <motion.a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              setShowPrograms(true);
            }}
            initial={{ scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
            className="group relative bg-white text-orange-600 font-semibold py-3 px-8 rounded-full text-lg border-2 border-orange-400 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Our Programs
            <svg 
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Explore our training programs
              <svg className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 text-black/80" viewBox="0 0 100 100">
                <polygon points="50,100 0,0 100,0" fill="currentColor"/>
              </svg>
            </span>
          </motion.a>
        </div>
      </div>

      <ProgramsCarousel 
        isOpen={showPrograms} 
        onClose={() => setShowPrograms(false)} 
      />
    </section>
  );
};

export default Hero;
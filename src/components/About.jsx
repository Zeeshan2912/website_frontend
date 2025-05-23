import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1000+", label: "Athletes Trained" },
    { number: "50+", label: "Expert Coaches" },
    { number: "95%", label: "Success Rate" }
  ];
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50 relative overflow-hidden">
      {/* Light animated grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="aboutGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="40" height="40" fill="none" stroke="#f97316" strokeWidth="0.5">
                  <animate
                    attributeName="opacity"
                    values="0.1;0.3;0.1"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </rect>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#aboutGrid)" />
          </svg>
        </div>        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-100/30 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-6">
            Our Mission
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-orange-400 to-orange-600 mb-12 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >              <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
                At Klimb, we empower athletes to unlock their full potential through cutting-edge technology, 
                personalized training, and a vision for the future. We are transforming talent into excellence across India.
              </p>
              <p className="text-gray-600 text-lg md:text-xl">
                Our expert-driven, youth-focused programs provide professional pathways 
                with long-term vision and strategic guidance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 blur-xl rounded-3xl"></div>
              <div className="relative bg-white/80 p-8 rounded-3xl border-2 border-orange-200 shadow-lg backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="bg-gradient-to-br from-orange-400 to-orange-600 p-8 rounded-full w-24 h-24 mx-auto mb-8 flex items-center justify-center shadow-lg"
                >
                  <TrendingUp size={40} className="text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300"></div>
                <div className="relative bg-white/80 backdrop-blur-sm border-2 border-orange-200 p-8 rounded-xl group-hover:border-orange-300 transition-all duration-300 shadow-lg">
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 mb-3">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      title: 'Tech-Driven Guidance',
      description: 'Leverage advanced analytics to optimize athletic performance.',
      image: '/assets/image1.jpeg',
      details: {
        process: [
          'Initial Performance Analysis using AI-powered motion tracking',
          'Real-time feedback through wearable technology',
          'Data-driven progress tracking and adjustments',
          'Video analysis with frame-by-frame breakdown'
        ],
        features: [
          'Smart fitness tracking integration',
          'Performance metrics dashboard',
          'AI-powered technique analysis',
          'Regular progress reports'
        ],
        benefits: [
          'Scientific approach to improvement',
          'Precise technique refinement',
          'Injury prevention through early detection',
          'Measurable performance gains'
        ]
      }
    },
    {
      title: 'Personalized Training',
      description: 'Customized programs to elevate your skills and achieve excellence.',
      image: '/assets/image2.jpeg',
      details: {
        process: [
          'Comprehensive skill assessment',
          'Custom training plan development',
          'One-on-one coaching sessions',
          'Regular progress evaluations'
        ],
        features: [
          'Individual goal setting',
          'Adaptive training schedules',
          'Sport-specific drills',
          'Nutrition and recovery plans'
        ],
        benefits: [
          'Focused skill development',
          'Rapid progress tracking',
          'Personalized attention',
          'Optimized performance outcomes'
        ]
      }
    },
    {
      title: 'Career Development',
      description: 'Build a sustainable career in sports with expert support.',
      image: '/assets/image3.jpeg',
      details: {
        process: [
          'Career pathway assessment',
          'Professional networking opportunities',
          'Competition exposure and preparation',
          'Media and personal branding training'
        ],
        features: [
          'Industry connections',
          'Tournament participation',
          'Scholarship guidance',
          'Professional portfolio development'
        ],
        benefits: [
          'Clear career progression',
          'Professional exposure',
          'Industry recognition',
          'Long-term success planning'
        ]
      }
    },
  ];

  const handleServiceClick = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6">
            Our Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-8"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help you excel in your chosen sport
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={() => handleServiceClick(index)}
              className="bg-white rounded-2xl overflow-hidden border border-orange-200 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-orange-600 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                
                <AnimatePresence>
                  {expandedService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-orange-200"
                    >
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-orange-600 mb-2">Process</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {service.details.process.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-orange-600 mb-2">Key Features</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {service.details.features.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-orange-600 mb-2">Benefits</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {service.details.benefits.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
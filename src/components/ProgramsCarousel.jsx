import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'games',
    name: 'Games',
    icon: '🎮',
    description: 'Competitive team and individual games'
  },
  {
    id: 'sports',
    name: 'Sports',
    icon: '🎾',
    description: 'Traditional and modern sports activities'
  },
  {
    id: 'athletics',
    name: 'Athletics',
    icon: '🏃‍♂️',
    description: 'Track and field events'
  }
];

const programsByCategory = {
  games: [
    {
      id: 1,
      name: 'Football',
      icon: '⚽',
      description: 'Expert coaching in football techniques, tactics, and game strategy',
      features: ['Professional coaches', 'Weekly matches', 'Physical conditioning']
    },
    {
      id: 2,
      name: 'Basketball',
      icon: '🏀',
      description: 'Complete basketball training from fundamentals to advanced plays',
      features: ['Skills development', 'Team tactics', 'Competition exposure']
    },
    {
      id: 3,
      name: 'Cricket',
      icon: '🏏',
      description: 'Develop your cricket skills with professional training',
      features: ['Batting technique', 'Bowling mastery', 'Match strategy']
    },
    {
      id: 4,
      name: 'Volleyball',
      icon: '🏐',
      description: 'Build volleyball skills with expert guidance',
      features: ['Core techniques', 'Team play', 'Game strategy']
    },
    {
      id: 5,
      name: 'Hockey',
      icon: '🏑',
      description: 'Learn hockey from experienced national-level coaches',
      features: ['Stick skills', 'Team coordination', 'Match practice']
    }
  ],
  sports: [
    {
      id: 1,
      name: 'Tennis',
      icon: '🎾',
      description: 'Excellence in tennis through structured training',
      features: ['Serve & return', 'Court movement', 'Tournament prep']
    },
    {
      id: 2,
      name: 'Badminton',
      icon: '🏸',
      description: 'Master badminton skills with our comprehensive program',
      features: ['Technique focus', 'Strategic gameplay', 'Regular tournaments']
    },
    {
      id: 3,
      name: 'Table Tennis',
      icon: '🏓',
      description: 'Master the art of table tennis',
      features: ['Spin control', 'Footwork', 'Match tactics']
    },
    {
      id: 4,
      name: 'Swimming',
      icon: '🏊‍♂️',
      description: 'Professional swimming training for all levels',
      features: ['Stroke perfection', 'Endurance building', 'Competition training']
    },
    {
      id: 5,
      name: 'Martial Arts',
      icon: '🥋',
      description: 'Learn self-defense and discipline',
      features: ['Multiple styles', 'Belt progression', 'Mental focus']
    }
  ],
  athletics: [
    {
      id: 1,
      name: 'Sprint Racing',
      icon: '🏃‍♂️',
      description: 'Master explosive speed and technique',
      features: ['Sprint mechanics', 'Start technique', 'Race strategy']
    },
    {
      id: 2,
      name: 'Long Distance',
      icon: '🏃‍♀️',
      description: 'Build endurance and stamina',
      features: ['Endurance training', 'Pace setting', 'Race preparation']
    },
    {
      id: 3,
      name: 'High Jump',
      icon: '🦘',
      description: 'Perfect your jumping technique',
      features: ['Jump technique', 'Core strength', 'Competition prep']
    },
    {
      id: 4,
      name: 'Shot Put',
      icon: '🏋️‍♂️',
      description: 'Develop power and technique',
      features: ['Throwing form', 'Strength training', 'Competition practice']
    },
    {
      id: 5,
      name: 'Javelin Throw',
      icon: '🎯',
      description: 'Master javelin throwing technique',
      features: ['Throwing mechanics', 'Run-up practice', 'Competition strategy']
    }
  ]
};

const ProgramsCarousel = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const resetCarousel = () => {
    setSelectedCategory(null);
    setCurrentIndex(0);
    setDirection(0);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (
      prevIndex + newDirection + programsByCategory[selectedCategory].length
    ) % programsByCategory[selectedCategory].length);
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-4 right-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>      <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-orange-500">Our Programs</h2>
          <p className="text-gray-600 mt-2">
            {selectedCategory ? `Explore our ${selectedCategory} programs` : 'Choose a category to get started'}
          </p>
          {selectedCategory && (
            <motion.button
              onClick={resetCarousel}
              className="mt-4 text-orange-500 hover:text-orange-600 flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Categories
            </motion.button>
          )}
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            {!selectedCategory ? (
              // Category Selection View
              <motion.div
                key="categories"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              >
                {categories.map((category) => (
                  <motion.div
                    key={category.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white p-6 rounded-xl shadow-lg cursor-pointer border-2 border-orange-200 hover:border-orange-400 transition-colors"
                  >
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Programs View
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="text-6xl mb-4">
                    {programsByCategory[selectedCategory][currentIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {programsByCategory[selectedCategory][currentIndex].name}
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    {programsByCategory[selectedCategory][currentIndex].description}
                  </p>
                  <div className="grid gap-3 w-full max-w-sm">
                    {programsByCategory[selectedCategory][currentIndex].features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center bg-orange-50 px-4 py-2 rounded-lg"
                      >
                        <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {selectedCategory && (
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <div className="flex gap-2">
              {programsByCategory[selectedCategory].map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-orange-500 w-4" : "bg-orange-200"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="p-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProgramsCarousel;

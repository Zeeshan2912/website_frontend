import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: "What type of physical activities do you enjoy most?",
    options: [
      { text: "Fast-paced, explosive movements", score: { athletics: 3, basketball: 2, football: 2 } },
      { text: "Endurance and stamina-based activities", score: { swimming: 3, cycling: 3, football: 2 } },
      { text: "Strategic and tactical movements", score: { cricket: 3, tennis: 2, badminton: 2 } },
      { text: "Team-based coordination", score: { basketball: 3, football: 3, volleyball: 3 } }
    ]
  },
  {
    id: 2,
    question: "How would you describe your body type?",
    options: [
      { text: "Tall and lean", score: { basketball: 3, volleyball: 3, swimming: 2 } },
      { text: "Strong and muscular", score: { athletics: 3, football: 2, wrestling: 3 } },
      { text: "Agile and flexible", score: { gymnastics: 3, martial_arts: 3, badminton: 2 } },
      { text: "Well-balanced and medium build", score: { cricket: 2, tennis: 2, table_tennis: 2 } }
    ]
  },
  {
    id: 3,
    question: "What's your preferred training environment?",
    options: [
      { text: "Indoor facilities", score: { badminton: 3, basketball: 2, table_tennis: 3 } },
      { text: "Outdoor fields", score: { football: 3, cricket: 3, athletics: 2 } },
      { text: "Both indoor and outdoor", score: { tennis: 3, volleyball: 2 } },
      { text: "Water-based facilities", score: { swimming: 3, water_polo: 3 } }
    ]
  },
  {
    id: 4,
    question: "What motivates you most in sports?",
    options: [
      { text: "Personal achievement and records", score: { athletics: 3, swimming: 3, gymnastics: 2 } },
      { text: "Team success and coordination", score: { football: 3, basketball: 3, cricket: 2 } },
      { text: "Strategic competition", score: { tennis: 3, badminton: 3, table_tennis: 2 } },
      { text: "Physical contact and power", score: { wrestling: 3, martial_arts: 3, rugby: 3 } }
    ]
  },
  {
    id: 5,
    question: "How much time can you dedicate to training?",
    options: [
      { text: "1-2 hours daily", score: { badminton: 2, table_tennis: 2, volleyball: 2 } },
      { text: "2-4 hours daily", score: { tennis: 3, basketball: 3, cricket: 3 } },
      { text: "More than 4 hours daily", score: { swimming: 3, athletics: 3, gymnastics: 3 } },
      { text: "Weekends only", score: { football: 2, martial_arts: 2 } }
    ]
  },
  {
    id: 6,
    question: "What's your preferred pace of learning?",
    options: [
      { text: "Quick learning with immediate challenges", score: { table_tennis: 3, badminton: 3, volleyball: 2 } },
      { text: "Gradual progression with technical focus", score: { tennis: 3, cricket: 3, gymnastics: 3 } },
      { text: "Balanced learning with regular milestones", score: { swimming: 2, athletics: 2, basketball: 2 } },
      { text: "Intensive training with complex techniques", score: { martial_arts: 3, wrestling: 3, gymnastics: 3 } }
    ]
  },
  {
    id: 7,
    question: "How do you handle pressure situations?",
    options: [
      { text: "Thrive under pressure and spotlight", score: { tennis: 3, cricket: 3, basketball: 3 } },
      { text: "Prefer steady, consistent performance", score: { swimming: 3, athletics: 2, cycling: 3 } },
      { text: "Excel in quick decision-making moments", score: { football: 3, hockey: 3, basketball: 2 } },
      { text: "Enjoy strategic planning under pressure", score: { chess: 3, cricket: 2, table_tennis: 2 } }
    ]
  },
  {
    id: 8,
    question: "What's your ideal competitive environment?",
    options: [
      { text: "One-on-one competition", score: { tennis: 3, martial_arts: 3, wrestling: 3 } },
      { text: "Team vs team", score: { football: 3, basketball: 3, volleyball: 3 } },
      { text: "Individual performance in group setting", score: { swimming: 3, athletics: 3, gymnastics: 3 } },
      { text: "Mixed format competitions", score: { badminton: 2, table_tennis: 2, tennis: 2 } }
    ]
  },
  {
    id: 9,
    question: "What's your primary fitness goal?",
    options: [
      { text: "Building strength and power", score: { wrestling: 3, weightlifting: 3, rugby: 3 } },
      { text: "Improving agility and reflexes", score: { badminton: 3, table_tennis: 3, martial_arts: 2 } },
      { text: "Enhancing endurance and stamina", score: { swimming: 3, cycling: 3, running: 3 } },
      { text: "Overall fitness and flexibility", score: { gymnastics: 3, yoga: 3, martial_arts: 2 } }
    ]
  },
  {
    id: 10,
    question: "How important is social interaction in your sport?",
    options: [
      { text: "Highly important - team dynamics", score: { football: 3, basketball: 3, volleyball: 3 } },
      { text: "Moderate - individual with team elements", score: { cricket: 2, tennis: 2, badminton: 2 } },
      { text: "Minimal - focused on personal performance", score: { swimming: 3, athletics: 3, gymnastics: 3 } },
      { text: "Balanced - mix of individual and team", score: { martial_arts: 2, tennis: 2, table_tennis: 2 } }
    ]
  }
];

const SportsAssessment = ({ isOpen, onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendedSports, setRecommendedSports] = useState([]);

  const calculateResults = () => {
    const scores = {};
    
    // Calculate scores for each sport
    Object.values(answers).forEach(answer => {
      Object.entries(answer.score).forEach(([sport, score]) => {
        scores[sport] = (scores[sport] || 0) + score;
      });
    });

    // Sort sports by score and get top 3
    const sortedSports = Object.entries(scores)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 3)
      .map(([sport]) => sport);

    setRecommendedSports(sortedSports);
    setShowResults(true);
  };

  const handleAnswer = (option) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: option
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendedSports([]);
  };

  const getSportEmoji = (sport) => {
    const emojiMap = {
      football: '⚽',
      basketball: '🏀',
      cricket: '🏏',
      tennis: '🎾',
      swimming: '🏊‍♂️',
      athletics: '🏃‍♂️',
      badminton: '🏸',
      volleyball: '🏐',
      table_tennis: '🏓',
      gymnastics: '🤸‍♂️',
      martial_arts: '🥋',
      wrestling: '🤼‍♂️',
      cycling: '🚴‍♂️',
      rugby: '🏉',
      water_polo: '🤽‍♂️'
    };
    return emojiMap[sport] || '🎯';
  };

  const formatSportName = (sport) => {
    return sport
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-2xl w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-orange-500 mb-2">
                Sports Assessment
              </h2>
              <p className="text-gray-600">
                {showResults 
                  ? "Based on your answers, here are your recommended sports!"
                  : "Let's find the perfect sport for you!"}
              </p>
            </div>

            {!showResults ? (
              <div className="space-y-6">
                <div className="mb-8">
                  <div className="flex justify-between mb-2 text-sm text-gray-600">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all duration-200"
                    >
                      {option.text}
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-4">
                  {recommendedSports.map((sport, index) => (
                    <motion.div
                      key={sport}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-orange-50"
                    >
                      <span className="text-4xl">{getSportEmoji(sport)}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {formatSportName(sport)}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Great match for your profile!
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center space-x-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetAssessment}
                    className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Take Assessment Again
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="px-6 py-3 bg-gray-500 text-white rounded-full font-semibold hover:bg-gray-600 transition-colors"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SportsAssessment;

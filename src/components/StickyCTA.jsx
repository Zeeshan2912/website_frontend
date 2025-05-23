import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m the Klimb assistant. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputMessage }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Thanks for reaching out! Our team will get back to you shortly. Meanwhile, feel free to explore our programs and services.'
      }]);
    }, 1000);

    setInputMessage('');
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button
          onClick={() => setIsChatOpen(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-24 h-24 md:w-32 md:h-32 p-0 bg-transparent border-none outline-none transition-transform duration-300 hover:scale-105 flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with us"
          style={{
            filter: 'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.2))',
          }}
        >
          <motion.div 
            className="w-full h-full relative"
            style={{
              background: 'transparent'
            }}
          >
            <motion.img 
              src="/assets/mascot.png" 
              alt="Klimb Assistant" 
              className="w-full h-full absolute inset-0 mix-blend-multiply"
              style={{ 
                objectFit: 'contain',
                background: 'transparent'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
        </motion.button>
        
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-black text-white text-sm rounded-md shadow-lg whitespace-nowrap">
            Chat with us!
            <div className="absolute right-3 -bottom-1 w-2 h-2 bg-black transform rotate-45"></div>
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 right-8 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-[60] overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-transparent">
                  <div className="w-full h-full relative">
                    <img 
                      src="/assets/mascot.png" 
                      alt="Klimb Assistant" 
                      className="w-full h-full absolute inset-0 object-contain mix-blend-multiply"
                      style={{
                        background: 'transparent'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Klimb Assistant</h3>
                  <p className="text-white/80 text-sm">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-black/10 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="h-[calc(100%-8rem)] overflow-y-auto p-4 bg-gray-50">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.type === 'user' 
                      ? 'bg-orange-500 text-white' 
                      : 'bg-white border border-gray-200'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-orange-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyCTA;
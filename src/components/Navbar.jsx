import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '/assets/Klimb_logo.png';
import SportsAssessment from './SportsAssessment';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Our Mission', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 bg-transparent text-white py-2 md:py-4"
      >
        <div className="container mx-auto px-6 md:px-12 max-w-7xl flex justify-between items-center">
          {/* Brand */}
          <a href="#home" className="flex items-center -my-12">
            <img
              src={logo}
              alt="Klimb Logo"
              className="h-20 md:h-28 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-orange-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            {/* Desktop Get Started */}
            <motion.button
              onClick={() => setShowAssessment(true)}
              className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 px-6 rounded-full"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              GET STARTED
            </motion.button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/80 backdrop-blur-md absolute top-full left-0 w-full py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-orange-400 transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
              <motion.button
                onClick={() => {
                  setShowAssessment(true);
                  setIsOpen(false);
                }}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold py-2 px-6 rounded-full w-full text-center"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                GET STARTED
              </motion.button>
            </div>
          </div>
        )}
      </motion.nav>

      <SportsAssessment 
        isOpen={showAssessment} 
        onClose={() => setShowAssessment(false)} 
      />
    </>
  );
};

export default Navbar;

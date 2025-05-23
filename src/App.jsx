import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import './App.css';

const App = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Newsletter />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
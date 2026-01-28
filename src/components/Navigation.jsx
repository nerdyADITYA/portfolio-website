import React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { motion } from 'framer-motion';

export default function Navigation({ isFreelance = false }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePortfolioToggle = () => {
    if (isFreelance) {
      setLocation('/');
    } else {
      setLocation('/freelance');
    }
  };

  const devNavItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const freelanceNavItems = [
    { label: 'Home', id: 'freelance-home' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'freelance-projects' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'freelance-contact' }
  ];

  const navItems = isFreelance ? freelanceNavItems : devNavItems;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'nav-blur' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-space font-bold gradient-text">
            ADITYA KADIA
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-portfolio-accent transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            
            <motion.button
              onClick={handlePortfolioToggle}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isFreelance 
                  ? 'bg-portfolio-accent text-white' 
                  : 'bg-transparent border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <i className={`fas ${isFreelance ? 'fa-code' : 'fa-briefcase'} text-xs`}></i>
                {isFreelance ? 'Developer Portfolio' : 'Freelance Portfolio'}
              </span>
            </motion.button>
          </div>
          
          <button 
            className="md:hidden text-portfolio-text-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 pb-4 border-t border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-portfolio-accent transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              
              <button
                onClick={handlePortfolioToggle}
                className={`text-left flex items-center gap-2 py-2 px-3 rounded-lg ${
                  isFreelance 
                    ? 'bg-portfolio-accent text-white' 
                    : 'border border-portfolio-accent text-portfolio-accent'
                }`}
              >
                <i className={`fas ${isFreelance ? 'fa-code' : 'fa-briefcase'}`}></i>
                {isFreelance ? 'Switch to Developer' : 'Switch to Freelance'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

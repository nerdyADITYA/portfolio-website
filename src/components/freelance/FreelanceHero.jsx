import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function FreelanceHero() {
  const { hero, stats } = freelanceData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="freelance-home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-portfolio-accent/20 text-portfolio-accent text-sm font-medium mb-6">
            Open for Freelance Work
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">{hero.headline}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-portfolio-accent mb-4">
            {hero.subheadline}
          </p>
          
          <p className="text-lg text-portfolio-text-muted max-w-2xl mx-auto mb-10">
            {hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              onClick={() => scrollToSection('freelance-contact')}
              className="px-8 py-4 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-portfolio-accent/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 border border-portfolio-accent rounded-lg font-semibold text-portfolio-accent hover:bg-portfolio-accent/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-lg bg-portfolio-secondary/30 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-portfolio-text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

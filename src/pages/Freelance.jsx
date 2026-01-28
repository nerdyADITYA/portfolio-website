import React from "react";
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import ThreeBackground from '../components/ThreeBackground';
import FreelanceHero from '../components/freelance/FreelanceHero';
import ServicesSection from '../components/freelance/ServicesSection';
import FreelanceProjects from '../components/freelance/FreelanceProjects';
import TestimonialsSection from '../components/freelance/TestimonialsSection';
import WhyWorkWithMe from '../components/freelance/WhyWorkWithMe';
import FreelanceContact from '../components/freelance/FreelanceContact';

export default function Freelance() {
  useEffect(() => {
    document.title = "Aditya Kadia - Freelance Developer | Hire Me";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Hire Aditya Kadia - Freelance Full Stack Developer. Web apps, mobile development, backend APIs, and technical consulting. Based in Gujarat, India.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Hire Aditya Kadia - Freelance Full Stack Developer. Web apps, mobile development, backend APIs, and technical consulting. Based in Gujarat, India.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-portfolio-primary text-portfolio-text-light overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ThreeBackground />
      <Navigation isFreelance={true} />
      <main>
        <FreelanceHero />
        <ServicesSection />
        <FreelanceProjects />
        <TestimonialsSection />
        <WhyWorkWithMe />
        <FreelanceContact />
      </main>
      <footer className="py-8 border-t border-gray-700 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-portfolio-text-muted">
            © 2024 Aditya Kadia. Available for freelance work.
          </p>
        </div>
      </footer>
    </motion.div>
  );
}

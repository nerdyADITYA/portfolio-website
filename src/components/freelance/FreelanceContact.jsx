import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function FreelanceContact() {
  const { contactCTA } = freelanceData;

  return (
    <section id="freelance-contact" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-br from-portfolio-accent/10 to-portfolio-accent-purple/10 border border-portfolio-accent/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{contactCTA.headline}</span>
          </h2>
          
          <p className="text-portfolio-text-muted mb-6 max-w-xl mx-auto">
            {contactCTA.description}
          </p>
          
          <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm mb-8">
            <i className="fas fa-calendar-check mr-2"></i>
            {contactCTA.availability}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={`mailto:${contactCTA.email}?subject=Freelance Project Inquiry`}
              className="px-8 py-4 bg-gradient-to-r from-portfolio-accent to-portfolio-accent-purple rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-portfolio-accent/25 transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-envelope"></i>
              Get In Touch
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/aditya-kadia-253b77233"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-portfolio-accent rounded-lg font-semibold text-portfolio-accent hover:bg-portfolio-accent/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-linkedin"></i>
              Connect on LinkedIn
            </motion.a>
          </div>
          
          <p className="mt-8 text-portfolio-text-muted text-sm">
            <i className="fas fa-clock mr-2"></i>
            Typically respond within 24 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

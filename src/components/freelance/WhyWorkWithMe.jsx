import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function WhyWorkWithMe() {
  const { whyWorkWithMe } = freelanceData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="why-me" className="py-20 relative z-10 bg-portfolio-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Why Work With Me</span>
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Beyond technical skills, here's what sets my freelance services apart.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyWorkWithMe.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl bg-portfolio-secondary/40 backdrop-blur-sm border border-gray-700 text-center hover:border-portfolio-accent/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-purple/20 flex items-center justify-center mx-auto mb-4">
                <i className={`${item.icon} text-2xl text-portfolio-accent`}></i>
              </div>
              
              <h3 className="text-lg font-semibold mb-3 text-portfolio-text-light">
                {item.title}
              </h3>
              
              <p className="text-portfolio-text-muted text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

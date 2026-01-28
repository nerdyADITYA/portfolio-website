import React from "react";
import { motion } from 'framer-motion';
import { freelanceData } from '../../lib/freelanceData';

export default function FreelanceProjects() {
  const { projects } = freelanceData;

  return (
    <section id="freelance-projects" className="py-20 relative z-10 bg-portfolio-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Freelance Projects</span>
          </h2>
          <p className="text-portfolio-text-muted max-w-2xl mx-auto">
            Real solutions built for real businesses. Here are some projects that made a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-xl overflow-hidden bg-portfolio-secondary/40 backdrop-blur-sm border border-gray-700 hover:border-portfolio-accent/50 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-purple/20 flex items-center justify-center">
                <i className="fas fa-laptop-code text-6xl text-portfolio-accent/50"></i>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-portfolio-text-light">
                    {project.title}
                  </h3>
                  <span className="text-sm text-portfolio-accent">
                    {project.client}
                  </span>
                </div>
                
                <p className="text-portfolio-text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-portfolio-primary/50 text-portfolio-text-muted border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-green-400 text-sm">
                  <i className="fas fa-chart-line"></i>
                  <span>{project.result}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { useRef, useEffect } from 'react';
import { portfolioData } from '../lib/portfolioData';

export default function ProjectsSection() {
  console.log('ProjectsSection rendering...', portfolioData.projects);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate all project cards
          const projectCards = entry.target.querySelectorAll('.project-card-animate');
          projectCards.forEach((card, index) => {
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, index * 150);
          });
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            A collection of projects showcasing my development journey and technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card-animate project-card p-8 rounded-xl card-hover opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-space font-bold">{project.title}</h3>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-accent hover:text-portfolio-accent-purple transition-colors"
                >
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
              <p className="text-portfolio-text-muted mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-portfolio-accent/20 text-portfolio-accent px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-portfolio-accent hover:text-portfolio-accent-purple transition-colors font-medium"
                >
                  View Code <i className="fas fa-external-link-alt ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

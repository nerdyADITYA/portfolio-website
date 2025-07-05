import React from "react";
import { useRef, useEffect } from 'react';
import { portfolioData } from '../lib/portfolioData';

export default function SkillsSection() {
  console.log('SkillsSection rendering...', portfolioData.skills);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate all skill categories
          const skillCategories = entry.target.querySelectorAll('.skill-category');
          skillCategories.forEach((category, index) => {
            setTimeout(() => {
              category.style.opacity = '1';
              category.style.transform = 'translateY(0)';
            }, index * 200);
          });
          
          // Animate certifications
          const certSection = entry.target.querySelector('.cert-section');
          if (certSection) {
            setTimeout(() => {
              certSection.style.opacity = '1';
              certSection.style.transform = 'translateY(0)';
            }, 600);
          }
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
    <section id="skills" className="py-20 relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <div key={index} className="skill-category opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
              <h3 className="text-xl font-space font-semibold mb-6 text-center">{category.category}</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.items.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge px-4 py-2 rounded-full text-sm font-medium">
                    <i className={`${skill.icon} text-portfolio-accent mr-2`}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-space font-semibold mb-8 text-center">Certifications</h3>
          <div className="cert-section grid md:grid-cols-2 gap-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
            {portfolioData.certifications.map((cert, index) => (
              <div key={index} className="project-card p-6 rounded-lg text-center card-hover">
                <i className={`${cert.icon} text-4xl text-portfolio-accent mb-4`}></i>
                <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                <p className="text-portfolio-text-muted text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

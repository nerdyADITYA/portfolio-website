import { useRef } from 'react';
import { portfolioData } from '../lib/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SkillsSection() {
  const skillsRefs = useRef([]);
  const certificationsRef = useRef(null);

  useScrollAnimation([...skillsRefs.current, certificationsRef]);

  const addToRefs = (el) => {
    if (el && !skillsRefs.current.includes(el)) {
      skillsRefs.current.push(el);
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <div key={index} ref={addToRefs} className="opacity-0 transform translate-y-8">
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
        <div className="mt-16" ref={certificationsRef}>
          <h3 className="text-2xl font-space font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6 opacity-0 transform translate-y-8">
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

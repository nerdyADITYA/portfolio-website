import { useRef } from 'react';
import { portfolioData } from '../lib/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const sectionRef = useRef(null);
  const personalInfoRef = useRef(null);
  const educationRef = useRef(null);

  useScrollAnimation([personalInfoRef, educationRef]);

  return (
    <section id="about" className="py-20 relative z-10" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-portfolio-text-muted max-w-3xl mx-auto">
            Passionate developer with a strong foundation in both frontend and backend technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div ref={personalInfoRef} className="opacity-0 transform translate-y-8">
            <h3 className="text-2xl font-space font-semibold mb-6">Get to know me</h3>
            <p className="text-portfolio-text-muted mb-6 leading-relaxed">
              {portfolioData.about.description}
            </p>
            <div className="space-y-4">
              {portfolioData.about.contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <i className={`${info.icon} text-portfolio-accent`}></i>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent transition-colors">
                      {info.text}
                    </a>
                  ) : (
                    <span>{info.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div ref={educationRef} className="opacity-0 transform translate-y-8">
            <h3 className="text-2xl font-space font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className={`relative pl-8 border-l-2 ${index === 0 ? 'border-portfolio-accent' : 'border-gray-600'}`}>
                  <div className={`absolute -left-2 top-0 w-4 h-4 ${index === 0 ? 'bg-portfolio-accent' : 'bg-gray-600'} rounded-full`}></div>
                  <div className={`${index === 0 ? 'bg-portfolio-secondary/50' : 'bg-portfolio-secondary/30'} p-6 rounded-lg`}>
                    <h4 className={`text-xl font-semibold ${index === 0 ? 'text-portfolio-accent' : 'text-portfolio-text-light'}`}>
                      {edu.degree}
                    </h4>
                    <p className="text-portfolio-text-muted mb-2">{edu.institution}</p>
                    <p className="text-sm text-portfolio-text-muted">{edu.period}</p>
                    {edu.cgpa && (
                      <p className="text-sm text-portfolio-text-muted">CGPA: {edu.cgpa}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

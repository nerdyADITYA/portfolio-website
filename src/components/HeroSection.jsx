import React from "react";
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // CSS-based animations with delays
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 600);

    setTimeout(() => {
      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = '1';
        buttonsRef.current.style.transform = 'translateY(0)';
      }
    }, 900);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10" ref={heroRef}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div>
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-space font-bold mb-6 opacity-0 transform translate-y-12 transition-all duration-700 ease-out">
            Hi, I'm <span className="gradient-text">Aditya</span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300">
            Full Stack Developer & Computer Engineering Student passionate about creating innovative digital experiences
          </p>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 transform translate-y-6 transition-all duration-700 ease-out delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-portfolio-accent to-portfolio-accent-purple px-8 py-3 rounded-full text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="/Aditya_Kadia_CV.pdf"
              download="Aditya_Kadia_CV.pdf"
              className="border border-portfolio-accent px-8 py-3 rounded-full text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-all duration-300 inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-4 h-4 bg-portfolio-accent rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-6 h-6 bg-portfolio-accent-purple rounded-full opacity-40"></div>
        </div>
        <div className="absolute bottom-20 left-1/4 floating-element">
          <div className="w-3 h-3 bg-portfolio-accent rounded-full opacity-50"></div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import ThreeBackground from '../components/ThreeBackground';

export default function Home() {
  useEffect(() => {
    // Set page title and meta description
    document.title = "Aditya Kadia - Full Stack Developer Portfolio";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Aditya Kadia - Computer Engineering Student & Full Stack Developer from Ahmedabad, Gujarat. Specializing in React, Node.js, Python, and Android development.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Aditya Kadia - Computer Engineering Student & Full Stack Developer from Ahmedabad, Gujarat. Specializing in React, Node.js, Python, and Android development.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-portfolio-primary text-portfolio-text-light overflow-x-hidden">
      <ThreeBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="py-8 border-t border-gray-700 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-portfolio-text-muted">
            © 2024 Aditya Kadia. Built with React.js, Node.js, Three.js & Anime.js
          </p>
        </div>
      </footer>
    </div>
  );
}

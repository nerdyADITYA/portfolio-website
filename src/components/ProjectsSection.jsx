import React from "react";
import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const hasImages = Array.isArray(project.images) && project.images.length > 0;

  function goPrev() {
    setCurrent((c) => (c - 1 + project.images.length) % project.images.length);
  }

  function goNext() {
    setCurrent((c) => (c + 1) % project.images.length);
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }

  function onTouchEnd() {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (diff > threshold) {
      goNext();
    } else if (diff < -threshold) {
      goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }

  return (
    <div className="project-card-animate project-card p-8 rounded-xl card-hover opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
      {hasImages ? (
        <div className="mb-6">
          <div className="relative overflow-hidden rounded-md">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {project.images.map((src, i) => (
                <div key={i} className="w-full flex-shrink-0 flex items-center justify-center">
                  <img
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="w-auto object-contain rounded-md cursor-zoom-in"
                    style={{ maxHeight: '12rem' }}
                    onClick={() => { setModalIndex(i); setModalOpen(true); }}
                  />
                </div>
              ))}
            </div>

            {project.images.length > 1 && (
              <>
                <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}

            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 flex gap-2">
              {project.images.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
          </div>
        </div>
      ) : null}

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
      {/* Portal modal so overlay is rendered at document.body (avoids stacking context issues) */}
      <ImageModal
        open={modalOpen}
        images={project.images}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
        onPrev={() => setModalIndex((i) => (i - 1 + project.images.length) % project.images.length)}
        onNext={() => setModalIndex((i) => (i + 1) % project.images.length)}
        setIndex={setModalIndex}
      />
    </div>
  );
}

function ImageModal({ open, images = [], index = 0, onClose, onPrev, onNext, setIndex }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKey);
    // prevent background scroll when modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        className="absolute top-6 right-6 text-white text-2xl p-2 bg-black/30 rounded-full"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        ‹
      </button>

      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={images[index]}
          alt={`image ${index + 1}`}
          className="w-full h-full object-contain rounded-md shadow-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl p-2 bg-black/30 rounded-full"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        ›
      </button>
    </div>,
    document.body
  );
}

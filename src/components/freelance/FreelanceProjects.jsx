import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { createPortal } from 'react-dom';
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
            <FreelanceProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FreelanceProjectCard({ project, index }) {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden bg-portfolio-secondary/40 backdrop-blur-sm border border-gray-700 hover:border-portfolio-accent/50 transition-all duration-300"
    >
      {/* Image Carousel or Default Header */}
      <div className="h-48 bg-gradient-to-br from-portfolio-accent/20 to-portfolio-accent-purple/20 flex items-center justify-center overflow-hidden relative">
        {hasImages ? (
          <div className="w-full h-full relative group/carousel">
            <div
              className="flex h-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {project.images.map((src, i) => (
                <div key={i} className="w-full h-full flex-shrink-0 flex items-center justify-center bg-black/20">
                  <img
                    src={src}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover cursor-zoom-in hover:opacity-90 transition-opacity"
                    onClick={() => { setModalIndex(i); setModalOpen(true); }}
                  />
                </div>
              ))}
            </div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>

                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-2 flex gap-2">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                      className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <i className="fas fa-laptop-code text-6xl text-portfolio-accent/50"></i>
        )}
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

        {project.liveUrl && (
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-portfolio-accent hover:text-portfolio-accent/80 transition-colors text-sm font-medium"
            >
              <span>Visit Live Site</span>
              <i className="fas fa-external-link-alt text-xs"></i>
            </a>
          </div>
        )}
      </div>

      <ImageModal
        open={modalOpen}
        images={project.images}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
        onPrev={() => setModalIndex((i) => (i - 1 + project.images.length) % project.images.length)}
        onNext={() => setModalIndex((i) => (i + 1) % project.images.length)}
      />
    </motion.div>
  );
}

function ImageModal({ open, images = [], index = 0, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    document.addEventListener('keydown', onKey);
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button
        className="absolute top-6 right-6 text-white text-2xl p-2 bg-black/30 rounded-full hover:bg-portfolio-accent/50 transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>

      {images.length > 1 && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-portfolio-accent/50 transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <div className="w-full h-full flex items-center justify-center p-4">
        <img
          src={images[index]}
          alt={`image ${index + 1}`}
          className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {images.length > 1 && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-3xl p-3 bg-black/30 rounded-full hover:bg-portfolio-accent/50 transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-3 py-1 rounded-full">
        {index + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
}

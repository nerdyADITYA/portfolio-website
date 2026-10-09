import React, { useLayoutEffect, useRef, useState } from "react";
import { portfolioData } from "../lib/portfolioData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import ImageModal from "./ImageModal";

const cardColors = ["#ffffff", "#fff0f4", "#eaf4ff", "#eafff1", "#fff4e3"];
const tagColors = ["var(--bk-yellow)", "var(--bk-green)", "var(--bk-blue)", "var(--bk-pink)"];

export default function ProjectsSection() {
  const gridRef = useRef(null);

  // Keep the two cards in a row the same height while collapsed, but let an opened card
  // grow on its own: each card's min-height = tallest *collapsed* card in its row.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const twoCols = window.matchMedia("(min-width: 768px)");
    let lastWidth = -1;

    const measure = () => {
      const cards = [...grid.querySelectorAll("article")];
      cards.forEach((c) => { c.style.minHeight = ""; });
      if (!twoCols.matches) return;
      const collapsed = cards.map(
        (c) => c.offsetHeight - (c.querySelector("[data-details]")?.offsetHeight || 0)
      );
      for (let i = 0; i < cards.length; i += 2) {
        const h = Math.max(collapsed[i], collapsed[i + 1] || 0);
        cards[i].style.minHeight = `${h}px`;
        if (cards[i + 1]) cards[i + 1].style.minHeight = `${h}px`;
      }
    };

    const ro = new ResizeObserver(() => {
      const w = grid.offsetWidth;
      if (w !== lastWidth) { lastWidth = w; measure(); }   // only re-measure when the width changes
    });
    ro.observe(grid);
    measure();
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionTitle>Projects</SectionTitle>
      <div ref={gridRef} className="grid md:grid-cols-2 gap-8 items-start">
        {portfolioData.projects.map((project, index) => (
          <Reveal key={project.title} delay={(index % 2) * 0.1}>
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const detailsId = `project-details-${index}`;
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = project.images;
  const hasImages = images.length > 0;
  const goPrev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const goNext = () => setCurrent((c) => (c + 1) % images.length);

  const onTouchEnd = () => {
    if (touchStartX.current == null || touchEndX.current == null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) goNext();
    else if (diff < -50) goPrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <article className="bk-box relative p-6 h-full flex flex-col" style={{ background: cardColors[index % cardColors.length] }}>
      <span className="bk-num">{String(index + 1).padStart(2, "0")}</span>

      {hasImages && (
        <div className="relative overflow-hidden rounded-lg border-[3px] border-[var(--bk-ink)] mb-5 bg-white">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
            onTouchMove={(e) => { touchEndX.current = e.touches[0].clientX; }}
            onTouchEnd={onTouchEnd}
          >
            {images.map((src, i) => (
              <div key={src} className="w-full flex-shrink-0 flex items-center justify-center">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading="lazy"
                  className="object-contain cursor-zoom-in"
                  style={{ height: "13rem", width: "100%" }}
                  onClick={() => setModalOpen(true)}
                />
              </div>
            ))}
          </div>
          {images.length > 1 && (
            <>
              <button onClick={goPrev} aria-label="Previous screenshot" className="absolute left-2 top-1/2 -translate-y-1/2 bk-btn !px-3 !py-1 !shadow-none bg-white">‹</button>
              <button onClick={goNext} aria-label="Next screenshot" className="absolute right-2 top-1/2 -translate-y-1/2 bk-btn !px-3 !py-1 !shadow-none bg-white">›</button>
              <span className="absolute bottom-2 right-2 mono text-xs font-bold bg-[var(--bk-ink)] text-[var(--bk-yellow)] px-2 py-0.5 rounded">
                {current + 1}/{images.length}
              </span>
            </>
          )}
        </div>
      )}

      <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
      <span className="mono text-xs block mt-1 mb-3">{project.subtitle} · {project.category}</span>
      <p className="text-[15px]">{project.description}</p>

      {/* grid-rows 0fr -> 1fr animates height smoothly without measuring it */}
      <div
        id={detailsId}
        data-details
        aria-hidden={!expanded}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none ${
          expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc pl-5 pt-4 space-y-2 text-[15px]">
            {project.highlights.map((h) => <li key={h}>{h}</li>)}
          </ul>
        </div>
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mono text-sm font-bold underline underline-offset-4 text-left mt-3 w-fit"
        aria-expanded={expanded}
        aria-controls={detailsId}
      >
        {expanded ? "− Hide details" : "+ How it works"}
      </button>

      <div className="mt-2">
        {project.technologies.map((t, i) => (
          <span key={t} className="bk-tag" style={{ background: tagColors[(i + t.length) % 4] }}>{t}</span>
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className="flex flex-wrap gap-3 mt-auto pt-6">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bk-btn white !py-2 !text-sm">Code ↗</a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bk-btn !py-2 !text-sm">Live demo ↗</a>
          )}
        </div>
      )}

      <ImageModal
        open={modalOpen}
        images={images}
        index={current}
        onClose={() => setModalOpen(false)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </article>
  );
}

import React, { useState } from "react";
import { portfolioData as d } from "../lib/portfolioData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import ImageModal from "./ImageModal";

const palette = ["var(--bk-pink)", "var(--bk-green)", "var(--bk-blue)", "var(--bk-orange)"];

export default function SkillsSection() {
  const withImage = d.certifications.filter((c) => c.image);
  const [viewing, setViewing] = useState(null); // index into withImage

  const open = (cert) => setViewing(withImage.indexOf(cert));
  const step = (dir) => setViewing((i) => (i + dir + withImage.length) % withImage.length);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionTitle>Stack</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {d.skills.map((g, i) => (
          <Reveal key={g.category} delay={(i % 3) * 0.08}>
            <div className="bk-box p-5 h-full" style={{ background: palette[i % 4] }}>
              <h4 className="mono font-bold uppercase mb-2">{g.category}</h4>
              <p>{g.items.join(" · ")}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <SectionTitle className="mt-16 mb-8">Certs</SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {d.certifications.map((c, i) => (
          <Reveal key={c.name} delay={(i % 3) * 0.08}>
            <div className="bk-box p-4 h-full flex flex-col">
              {c.image && (
                <button
                  onClick={() => open(c)}
                  className="block mb-4 border-[3px] border-[var(--bk-ink)] rounded-lg overflow-hidden bg-white cursor-zoom-in"
                  aria-label={`View ${c.name} certificate`}
                >
                  <img src={c.image} alt={`${c.name} certificate`} loading="lazy" className="w-full h-auto block" />
                </button>
              )}
              <span className="mono text-xs block mb-1">{[c.date, c.issuer].filter(Boolean).join(" · ")}</span>
              <b className="leading-snug">{c.name}</b>
              {(c.file || c.verifyUrl) && (
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {c.file && (
                    <a href={c.file} target="_blank" rel="noopener noreferrer" className="bk-btn white !py-1.5 !px-3 !text-xs">PDF ↗</a>
                  )}
                  {c.verifyUrl && (
                    <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="bk-btn !py-1.5 !px-3 !text-xs">Verify ↗</a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <ImageModal
        open={viewing !== null}
        images={withImage.map((c) => c.image)}
        index={viewing ?? 0}
        onClose={() => setViewing(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </section>
  );
}

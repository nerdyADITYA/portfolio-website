import React from "react";
import { portfolioData as d } from "../lib/portfolioData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionTitle>About</SectionTitle>
      <Reveal>
        <div className="bk-box bk-static p-7 text-lg leading-relaxed" style={{ background: "var(--bk-yellow)" }}>
          {d.about.description}
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {d.education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.1}>
            <div className="bk-box p-6 h-full" style={{ background: i === 0 ? "var(--bk-blue)" : "var(--bk-green)" }}>
              <h3 className="text-2xl font-bold leading-tight">{e.institution}</h3>
              <span className="mono text-xs block my-2">{e.period} · {e.place}</span>
              <p>{e.degree}</p>
              {e.cgpa && <p className="mono text-sm mt-2 font-bold">CGPA: {e.cgpa}</p>}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-6 text-sm">
          <b className="mono">Relevant coursework:</b> {d.coursework.join(" · ")}
        </p>
      </Reveal>
    </section>
  );
}

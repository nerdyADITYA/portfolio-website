import React from "react";
import { portfolioData as d } from "../lib/portfolioData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 pt-24 scroll-mt-20">
      <SectionTitle>Experience</SectionTitle>
      {d.experience.map((x) => (
        <Reveal key={x.company}>
          <div className="bk-box bk-static relative p-7">
            <span className="bk-num">{x.period}</span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight pt-2 md:pt-0">{x.role} @ {x.company}</h3>
            <span className="mono text-xs block my-2">{x.place}</span>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              {x.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}

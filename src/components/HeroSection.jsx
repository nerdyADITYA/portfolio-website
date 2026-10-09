import React from "react";
import { motion } from "framer-motion";
import { portfolioData as d } from "../lib/portfolioData";

const statColors = ["var(--bk-yellow)", "var(--bk-green)", "var(--bk-blue)", "var(--bk-pink)"];

export default function HeroSection() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const marquee = d.skills.flatMap((g) => g.items).join(" ✦ ") + " ✦ ";

  return (
    <>
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16 pb-6 grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-bold leading-[0.95] tracking-tight text-[clamp(44px,8vw,92px)]">
            Hi, I'm{" "}
            <mark
              className="inline-block px-3 border-[3px] border-[var(--bk-ink)] rounded-xl -rotate-2"
              style={{ background: "var(--bk-pink)", boxShadow: "5px 5px 0 var(--bk-ink)" }}
            >
              Aditya
            </mark>{" "}
            — I build AI &amp; backend things that{" "}
            <u className="decoration-[6px] underline-offset-4" style={{ textDecorationColor: "var(--bk-green)" }}>actually ship.</u>
          </h1>
          <p className="text-xl my-6 max-w-xl">{d.tagline} From biometric terminals to local LLMs.</p>
          <div className="flex flex-wrap gap-3">
            <button className="bk-btn" onClick={() => go("projects")}>See my work →</button>
            <a className="bk-btn white" href="/Aditya Resume.pdf" download="Aditya Resume.pdf">Résumé ↓</a>
            <a className="bk-btn white" href={d.socialLinks[0].url} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </motion.div>

        <motion.div
          className="bk-box bk-static p-6 rotate-2"
          style={{ background: "var(--bk-blue)" }}
          initial={{ opacity: 0, rotate: 8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4 className="mono text-xs font-bold uppercase tracking-widest">● Status</h4>
          <p className="mt-2"><b>B.E. Computer Eng (AI &amp; ML)</b><br />LJ Institute · exp. 2027</p>
          <hr className="border-0 border-t-[3px] border-dashed border-[var(--bk-ink)] my-4" />
          <h4 className="mono text-xs font-bold uppercase tracking-widest">● Looking for</h4>
          <p className="mt-2">Master's in CS / AI — LLM systems, retrieval &amp; applied ML</p>
          <hr className="border-0 border-t-[3px] border-dashed border-[var(--bk-ink)] my-4" />
          <h4 className="mono text-xs font-bold uppercase tracking-widest">● Based in</h4>
          <p className="mt-2">Vadodara, Gujarat, India</p>
        </motion.div>
      </section>

      <div className="overflow-hidden whitespace-nowrap border-y-[3px] border-[var(--bk-ink)] bg-[var(--bk-ink)] text-[var(--bk-yellow)] my-12" aria-hidden="true">
        <div className="bk-marquee-track py-3 mono font-bold text-xl">{marquee.repeat(2)}</div>
      </div>

      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-5">
        {d.stats.map((s, i) => (
          <div key={s.label} className="bk-box p-5" style={{ background: statColors[i] }}>
            <b className="block text-2xl lg:text-3xl">{s.value}</b>
            <span className="mono text-xs">{s.label}</span>
          </div>
        ))}
      </section>
    </>
  );
}

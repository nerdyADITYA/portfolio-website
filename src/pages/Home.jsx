import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HomeNav from "../components/HomeNav";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const DESCRIPTION =
  "Aditya Kadia - Computer Engineering (AI & ML) undergraduate from Ahmedabad, India. Applied AI, local RAG systems, machine learning and full-stack development with Python, FastAPI, Node.js and React.";

export default function Home() {
  useEffect(() => {
    document.title = "Aditya Kadia - AI & Software Engineer Portfolio";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", DESCRIPTION);
  }, []);

  return (
    <motion.div
      className="bk min-h-screen overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HomeNav />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t-[3px] border-[var(--bk-ink)] py-8 text-center mono text-sm">
        © 2026 Aditya Kadia · Built with React, Tailwind &amp; Framer Motion
      </footer>
    </motion.div>
  );
}

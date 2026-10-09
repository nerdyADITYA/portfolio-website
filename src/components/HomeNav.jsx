import React, { useState } from "react";
import logo from "../attached_assets/logo.png";

const items = [
  { label: "about", id: "about" },
  { label: "experience", id: "experience" },
  { label: "work", id: "projects" },
  { label: "stack", id: "skills" },
  { label: "hi!", id: "contact" }
];

export default function HomeNav() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className="sticky top-3 z-40 mx-auto max-w-6xl px-4 pt-3">
      <div className="bk-box bk-static flex items-center justify-between px-4 py-1.5" style={{ background: "var(--bk-yellow)" }}>
        <button onClick={() => go("home")} className="shrink-0" aria-label="Aditya Kadia - back to top">
          <img src={logo} alt="Aditya Kadia" width="60" height="60" className="h-[60px] w-[60px]" />
        </button>
        <div className="hidden md:flex gap-2">
          {items.map((i) => (
            <button
              key={i.id}
              onClick={() => go(i.id)}
              className="mono text-sm font-bold px-3 py-1.5 rounded-lg border-2 border-transparent hover:border-[var(--bk-ink)] hover:bg-white transition-colors"
            >
              {i.label}
            </button>
          ))}
        </div>
        <button className="md:hidden mono font-bold text-lg px-2" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="bk-box bk-static md:hidden mt-3 p-3 flex flex-col gap-1 bg-white">
          {items.map((i) => (
            <button key={i.id} onClick={() => go(i.id)} className="mono font-bold text-left px-3 py-2 rounded-lg hover:bg-[var(--bk-yellow)]">
              {i.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

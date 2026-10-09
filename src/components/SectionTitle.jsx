import React from "react";

export default function SectionTitle({ children, className = "mb-8" }) {
  return (
    <h2 className={`bk-title text-[clamp(32px,5vw,54px)] font-bold tracking-tight ${className}`}>
      <span>{children}</span>
    </h2>
  );
}

import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function ImageModal({ open, images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <button className="bk-btn absolute top-5 right-5 !px-4 !py-2" onClick={onClose} aria-label="Close">✕</button>
      {images.length > 1 && (
        <button className="bk-btn white absolute left-5 top-1/2 -translate-y-1/2 !px-4 !py-2 text-2xl" onClick={onPrev} aria-label="Previous">‹</button>
      )}
      <img src={images[index]} alt={`Screenshot ${index + 1}`} className="max-w-[88vw] max-h-[88vh] object-contain rounded-lg border-4 border-white bg-white" />
      {images.length > 1 && (
        <button className="bk-btn white absolute right-5 top-1/2 -translate-y-1/2 !px-4 !py-2 text-2xl" onClick={onNext} aria-label="Next">›</button>
      )}
    </div>,
    document.body
  );
}

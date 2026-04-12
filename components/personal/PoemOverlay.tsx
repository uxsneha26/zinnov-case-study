"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { bodySerif, instrumentSerif } from "@/lib/fonts";

export type PoemOverlayProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  poemText: string;
};

export function PoemOverlay({
  open,
  onClose,
  title,
  poemText,
}: PoemOverlayProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);



  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      data-cursor="overlay"
      className="fixed inset-0 z-50 flex items-center justify-center px-6"
      onClick={onClose}
      role="presentation"
    >
      {/* Soft background tint */}
      <div
        className="absolute inset-0 bg-[#faf8f6]/30 backdrop-blur-[2px]"
        aria-hidden
      />

      {/* Paper container */}
      <div
  role="dialog"
  aria-modal="true"
  aria-labelledby="poem-overlay-title"
  className="relative z-10 w-full max-w-[640px] px-6 md:px-10"
  onClick={(e) => e.stopPropagation()}
>
  {/* Soft paper container */}
  <div className="relative rounded-xl overflow-hidden shadow-lg">

  {/* Background image (you will replace this) */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    
  />

  {/* Soft overlay for readability */}
  <div className="absolute inset-0 bg-[#faf8f6]/100 backdrop-blur-[2px]" />

  {/* Content */}
  <div className="relative z-10 px-8 py-10">
    

    <h2
      id="poem-overlay-title"
      className={`${instrumentSerif.className} mb-6 text-center text-2xl text-[#412F2F] md:text-3xl`}
    >
      {title}
    </h2>

    {/* SCROLL AREA */}
    <div className="relative max-h-[60vh] overflow-y-auto soft-scrollbar">
      
    <div
  className={`${bodySerif.className} text-center text-lg leading-[1.9] text-[#412F2F]/90 md:text-xl pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
  style={{ whiteSpace: "pre-line" }}
>
        {poemText}
      </div>
      
    </div>

    {/* subtle fade */}
    <div className="pointer-events-none absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#faf8f6] to-transparent" />
    <div className="pointer-events-none absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-[#faf8f6] to-transparent" />
    </div>
</div>
</div>
    </div>,
    document.body
  );
}
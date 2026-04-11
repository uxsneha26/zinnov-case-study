"use client";

import { useRef, useState } from "react";
import { caveat, instrumentSerif, labelSans } from "@/lib/fonts";

export type MusicCardProps = {
  /** Song / piece title (back face) */
  title: string;
  /** Eyebrow — artist or context */
  artist: string;
  coverImage: string;
  coverAlt?: string;
  audioSrc: string;
  backImage?: string;
  className?: string;
};

/**
 * Flip tile: front shows cover + quiet space; back shows artist + title.
 * Hover: 3D flip, ambient glow, subtle cover motion, audio (no visible controls).
 */
export function MusicCard({
  title,
  artist,
  coverImage,
  backImage = "",
  coverAlt = "",
  audioSrc,
  className = "",
}: MusicCardProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    const el = audioRef.current;
    if (!el) return;
    void el.play().catch(() => {});
  };

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
const [hovering, setHovering] = useState(false);

  const stop = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
  };

  const thumb = (
    <div className="h-[92px] w-[92px] shrink-0 overflow-hidden rounded-lg bg-neutral-100/90 shadow-inner transition-transform duration-700 ease-out [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-hover:rotate-[1.5deg] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-hover:rotate-0">
      <img
        src={coverImage}
        alt={coverAlt || `${artist} — cover`}
        className="h-full w-full object-contain"
      />
    </div>
  );

  return (
    <div
  className={`group relative cursor-none ${className}`}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }}
  onMouseEnter={() => setHovering(true)}
  onMouseLeave={() => setHovering(false)}
>
  {/* Audio */}
  <audio ref={audioRef} src={audioSrc} preload="metadata" className="hidden" />
      <div className="relative z-[1] h-full min-h-[7.5rem] w-full">
        <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:rotateY(0deg)]">
          
      {/* Front */}
<div className="absolute inset-0 flex flex-row items-center gap-5 rounded-xl border border-neutral-200/70 bg-[#faf8f6]/70 p-6 shadow-sm backdrop-blur-sm [backface-visibility:hidden]">

{/* Thumbnail */}
<div className="h-40 w-40 shrink-0 overflow-hidden rounded-lg">
  <img
    src={coverImage}
    alt={coverAlt || "music cover"}
    className="h-full w-full object-contain"
  />
</div>

{/* Title */}
<p className={`${caveat.className} text-4xl text-[#412F2F]/80`}>
  vibes lately..
</p>

</div>
{/* Back */}
<div className="absolute inset-0 rounded-xl border border-neutral-200/70 bg-[#f7f4f0]/80 shadow-md backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">

  {/* Glow layer (FINAL) */}
  <div className="pointer-events-none absolute -inset-6 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-95">
    <div
      className="absolute -inset-10 rounded-[2rem] bg-gradient-to-br from-[#E5B7E6]/90 via-[#FFFADE]/70 to-[#BEE4EA]/90 blur-xl"
      style={{
        animation: "music-card-ambient-glow 6.5s ease-in-out infinite",
      }}
    />
  </div>

  {/* Content */}
  <div className="relative z-[1] flex h-full flex-row items-center gap-5 p-4">
    
    {/* Thumbnail */}
    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg">
      <img
        src={backImage || coverImage}
        alt="music back"
        className="h-full w-full object-contain"
      />
    </div>

    {/* Text */}
    <div className="min-w-0 flex-1 text-left">
      <p className={`${labelSans.className} text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-500/90`}>
        {artist}
      </p>
      <p className={`${instrumentSerif.className} mt-2 text-balance text-lg leading-snug text-neutral-700 md:text-xl`}>
        {title}
      </p>
    </div>

  </div>
</div>
      
    </div>
    {hovering && (
  <div
  className="pointer-events-none absolute z-[999] [transform:translateZ(0)]"
  style={{
    left: cursorPos.x,
    top: cursorPos.y,
    transform: "translate(-50%, -50%)",
  }}
>
  <div className="h-3 w-3 rounded-full bg-[#C49C9C]/80 border-[2px] border-[#E8DFDA] shadow-[0_20px_60px_rgba(152,125,125,0.18)]" />
</div>
)}
    </div>
    </div>
  );
}

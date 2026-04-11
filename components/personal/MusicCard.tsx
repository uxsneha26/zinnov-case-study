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
  className={`group relative ${className}`}
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
      <audio ref={audioRef} src={audioSrc} preload="metadata" className="hidden" />

      <div
        className="pointer-events-none absolute -inset-4 z-0 rounded-[1.35rem] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 motion-reduce:transition-none motion-reduce:group-hover:opacity-0"
        aria-hidden
      >
        <div
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-100/45 via-rose-100/35 to-sky-100/30"
          style={{
            animation: "music-card-ambient-glow 7.5s ease-in-out infinite",
          }}
        />
      </div>

      <div className="relative z-[1] h-full min-h-[7.5rem] w-full">
        <div className="relative h-full w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:rotateY(0deg)]">
          {/* Front */}
          {/* Front */}
<div className="absolute inset-0 flex flex-col items-center justify-start gap-6 rounded-xl border border-neutral-200/70 bg-[#faf8f6]/70 p-4 pt-10 shadow-sm backdrop-blur-sm [backface-visibility:hidden]">

{/* Title (like painting / musings) */}

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

</div>

          {/* Back */}
          <div className="absolute inset-0 flex flex-row items-center gap-5 rounded-xl border border-neutral-200/70 bg-[#f7f4f0]/92 p-4 shadow-md backdrop-blur-md [backface-visibility:hidden] [transform:rotateY(180deg)]">
            {thumb}
            <div className="min-w-0 flex-1 text-left">
              <p
                className={`${labelSans.className} text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-500/90`}
              >
                {artist}
              </p>
              <p
                className={`${instrumentSerif.className} mt-2 text-balance text-lg leading-snug text-neutral-700 md:text-xl`}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
      </div>
      {hovering && (
  <div
    className="pointer-events-none absolute z-[999]"
    style={{
      left: cursorPos.x,
      top: cursorPos.y,
      transform: "translate(-50%, -50%)",
    }}
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#987D7D] bg-[#815555]/70 text-white text-xs backdrop-blur-md">
      Play
    </div>
  </div>
)}
    </div>
  );
}

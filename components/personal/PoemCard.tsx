"use client";

import { useState } from "react";
import { instrumentSerif, bodySerif, caveat } from "@/lib/fonts";
import { PoemOverlay } from "./PoemOverlay";


const DEFAULT_TEASER = [
  "Light through the curtain, thin as paper—",
  "I write your name where the dust gathers,",
  "and the room pretends not to watch.",
] as const;

const DEFAULT_POEM = `Spring, in another time

Light through the curtain, thin as paper—
I write your name where the dust gathers,
and the room pretends not to watch.

The kettle hums its small allegiance.
Somewhere a door forgets to close.

What we called forever
was only weather, passing through glass.

Still I leave the window cracked—
not for air, but for the sound of you
walking back through an ordinary afternoon.`;

export type PoemCardProps = {
  className?: string;
  title?: string;
  teaserLines?: readonly string[];
  poemText?: string;
};

/**
 * Flip card for bento tiles: front = label + illustration placeholder;
 * hover = poem preview; click back = full poem overlay.
 */
export function PoemCard({
  className = "",
  title = "Spring, in another time",
  teaserLines = DEFAULT_TEASER,
  poemText = DEFAULT_POEM,
}: PoemCardProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
const [hovering, setHovering] = useState(false);


  return (
    <>
      <div
        className={`group h-full w-full min-h-0 [perspective:1000px] ${className}`}
      >
        <div className="relative h-full min-h-[12rem] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:rotateY(0deg)]">
          {/* Front */}
          <div className="absolute inset-0 flex flex-col justify-between rounded-xl border border-neutral-200/70 bg-[#faf8f6]/80 backdrop-blur-sm p-4 shadow-sm [backface-visibility:hidden]"><div>
          <p
  className={`${caveat.className} mt-6 text-center text-4xl text-[#412F2F]/80`}
>
  musings
</p>
            </div>
            <div
              className="mx-auto mt-4 h-14 w-24 rounded-md bg-gradient-to-br from-neutral-200 to-neutral-300/90"
              aria-hidden
            />
          </div>

          {/* Back — click opens overlay */}
          <button
  type="button"
  aria-label={`Read full poem: ${title}`}
  onClick={() => setOverlayOpen(true)}
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }}
  onMouseEnter={() => setHovering(true)}
  onMouseLeave={() => setHovering(false)}
  className="absolute inset-0 rounded-xl border border-neutral-300/60 shadow-sm cursor-none [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden"
>

  {/* Background image */}
  <div
  className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/images/poem-card-bg.png')",
  }}
>
  {/* warm readability layer */}
  <div className="absolute inset-0 rounded-xl bg-[#faf8f6]/30" />
</div>

  {/* Soft overlay for readability */}
  <div className="absolute inset-0 bg-[#F8F3E0]/60" />

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">

    <div>
    <p
      className={`${instrumentSerif.className} text-2xl md:text-3xl text-[#2F2323]`}
    >
      {title}
    </p>

    <div
      className={`${bodySerif.className} mt-4 space-y-2 text-base md:text-lg leading-relaxed text-[#2F2323]/90`}
    >
      {teaserLines.slice(0, 3).map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </div>
    </div>
  </div>
  {/* CUSTOM CURSOR */}
  {hovering && (
  <div
    className="pointer-events-none absolute z-[999] transition-transform duration-50 ease-out"
    style={{
      left: cursorPos.x,
      top: cursorPos.y,
      transform: "translate(-50%, -50%)",
    }}
  >
    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#987D7D] text-xs font-medium text-[#FFFFFF] bg-[#987D7D]">
      Read poem
    </div>
  </div>
)}
</button>
        </div>
      </div>

      <PoemOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        title={title}
        poemText={poemText}
      />
    </>
  );
}

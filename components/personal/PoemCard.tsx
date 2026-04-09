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

const DEFAULT_BACK_BG = "/images/poem-card-bg.png";

const frontImageWrapBase =
  "mx-auto mt-6 overflow-hidden rounded-lg";

export type PoemCardProps = {
  className?: string;
  frontTitle: string;
  /** Front illustration src */
  frontImage: string;
  frontImageAlt?: string;
  /** Wraps the image; use for size (e.g. painting slightly larger than musings) */
  frontImageClassName?: string;
  backTitle: string;
  /** Back face background (same layered system as before) */
  
  teaserLines: readonly string[];
  backBackgroundImage?: string | null;
  cursorLabel: string;
  /** Full body for the read overlay */
  poemText?: string;
  /** Overlay heading; defaults to backTitle */
  overlayTitle?: string;
};

/**
 * Flip bento tile: shared 3D hover flip, custom front/back copy and assets.
 * Click back → full-screen overlay (poem / long-form body).
 */
export function PoemCard({
  className = "",
  frontTitle,
  frontImage,
  frontImageAlt = "",
  frontImageClassName = `${frontImageWrapBase} h-80 w-40`,
  backTitle,
  backBackgroundImage,
  teaserLines,
  cursorLabel,
  poemText = DEFAULT_POEM,
  overlayTitle,
}: PoemCardProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const overlayHeading = overlayTitle ?? backTitle;

  return (
    <>
      <div
        className={`group h-full w-full min-h-0 [perspective:1000px] ${className}`}
      >
        <div className="relative h-full min-h-[12rem] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:rotateY(0deg)]">
          {/* Front */}
          <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 gap-8 rounded-xl border border-neutral-200/70 bg-[#faf8f6]/70 backdrop-blur-sm p-4 shadow-sm [backface-visibility:hidden]">
            <div>
              <p
                className={`${caveat.className} mt-6 text-center text-4xl text-[#412F2F]/80`}
              >
                {frontTitle}
              </p>
            </div>
            <div className={frontImageClassName}>
              <img
                src={frontImage}
                alt={frontImageAlt || `${frontTitle} illustration`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Back */}
          <button
            type="button"
            aria-label={`${cursorLabel}: ${backTitle}`}
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
            className="absolute inset-0 cursor-none overflow-hidden rounded-xl border border-neutral-300/60 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >

            {backBackgroundImage ? (
  <div
    className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${backBackgroundImage})` }}
  >
    <div className="absolute inset-0 rounded-xl bg-[#faf8f6]/30" />
  </div>
) : (
  <div className="absolute inset-0 rounded-xl bg-[#faf8f6]" />
)}

            <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
              <div>
                <p
                  className={`${instrumentSerif.className} text-2xl text-[#2F2323] md:text-3xl`}
                >
                  {backTitle}
                </p>
                <div
                  className={`${bodySerif.className} mt-4 space-y-2 text-base leading-relaxed text-[#2F2323]/90 md:text-lg`}
                >
                  {teaserLines.slice(0, 3).map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>

            {hovering && (
              <div
                className="pointer-events-none absolute z-[999] transition-transform duration-50 ease-out"
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#987D7D] bg-[#987D7D] text-sm font-medium text-[#FFFFFF] shadow-[0_10px_30px_rgba(152,125,125,0.25)]">
                  {cursorLabel}
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      <PoemOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        title={overlayHeading}
        poemText={poemText}
      />
    </>
  );
}

/** Musings / poem — default copy and assets */
export const musingsCardProps = {
  frontTitle: "musings",
  frontImage: "/images/musings-icon.png",
  frontImageAlt: "Musings illustration",
  frontImageClassName: `${frontImageWrapBase} h-80 w-40`,
  backTitle: "Spring, in another time",
  backBackgroundImage: null,
  teaserLines: DEFAULT_TEASER,
  cursorLabel: "Read poem",
  poemText: DEFAULT_POEM,
} as const satisfies PoemCardProps;

/** Painting — slightly larger front illustration */
export const paintingCardProps = {
  frontTitle: "painting",
  frontImage: "/images/paint-palette.png",
  frontImageAlt: "Paint palette and brush",
  frontImageClassName: `${frontImageWrapBase} h-96 w-48`,
  backTitle: "Making art",
  backBackgroundImage: null,
  teaserLines: [
    "Layers of color where silence used to sit—",
    "each stroke a small argument with the blank page,",
    "until the canvas forgets who started first.",
  ],
  cursorLabel: "View work",
  poemText: `Making art

Layers of color where silence used to sit—
each stroke a small argument with the blank page,
until the canvas forgets who started first.

This is placeholder body text for the painting overlay.
Replace with your artist statement or gallery notes.`,
} as const satisfies PoemCardProps;

/** Art / creative explorations */
export const artCardProps = {
  frontTitle: "art",
  frontImage: "/images/art-abstract.png",
  frontImageAlt: "Abstract creative illustration",
  frontImageClassName: `${frontImageWrapBase} h-80 w-44`,
  backTitle: "Creative explorations",
  backBackgroundImage: null,
  teaserLines: [
    "Shapes lean toward each other like a quiet conversation,",
    "texture as punctuation, negative space as breath—",
    "nothing finished, everything invited.",
  ],
  cursorLabel: "Explore",
  poemText: `Creative explorations

Shapes lean toward each other like a quiet conversation,
texture as punctuation, negative space as breath—
nothing finished, everything invited.

Placeholder for a longer piece about process, play, and curiosity.`,
} as const satisfies PoemCardProps;

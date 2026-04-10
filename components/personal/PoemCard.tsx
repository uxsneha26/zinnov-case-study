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
  /** Back face background (poem variant only; gallery uses flat bg) */
  backBackgroundImage?: string | null;
  teaserLines: readonly string[];
  cursorLabel: string;
  /** Full body for the read overlay */
  poemText?: string;
  /** Overlay heading; defaults to backTitle */
  overlayTitle?: string;
  variant?: "poem" | "gallery";
  /** Gallery back carousel image URLs */
  images?: string[];
  /** Enable image overlay for gallery variant */
  enableImageOverlay?: boolean;
  /** Disable overlay click for gallery variant */
  disableOverlayClick?: boolean;
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
  disableOverlayClick = false,
  variant = "poem",
  
  enableImageOverlay = false,
  images,
}: PoemCardProps) {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [imageOverlayOpen, setImageOverlayOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const overlayHeading = overlayTitle ?? backTitle;
  const isPoem = variant === "poem";
  const isGallery = variant === "gallery";
  const showCarousel =
    isGallery && images && images.length > 0;

  const next = () => {
    if (!images?.length) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    if (!images?.length) return;
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const bgSrc = backBackgroundImage ?? DEFAULT_BACK_BG;

  return (
    <>
      <div
        className={`group h-full w-full min-h-0 [perspective:1000px] ${className}`}
      >
        <div className="relative h-full min-h-[12rem] w-full transition-transform duration-700 ease-out [transform-style:preserve-3d] motion-reduce:transition-none group-hover:[transform:rotateY(180deg)] motion-reduce:group-hover:[transform:rotateY(0deg)]">
          {/* Front */}
          <div className="absolute inset-0 flex flex-col items-center justify-start gap-8 rounded-xl border border-neutral-200/70 bg-[#faf8f6]/70 p-4 pt-12 shadow-sm backdrop-blur-sm [backface-visibility:hidden]">
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

          {/* Back — div wrapper so carousel chevrons can be real <button>s (no nesting) */}
          <div
            role="button"
            tabIndex={0}
            aria-label={`${cursorLabel}: ${backTitle}`}
            onClick={() => {
              if (enableImageOverlay) {
                setImageOverlayOpen(true);
              } else if (!disableOverlayClick) {
                setOverlayOpen(true);
              }
            }}

            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
            
                if (enableImageOverlay) {
                  setImageOverlayOpen(true);
                } else if (!disableOverlayClick) {
                  setOverlayOpen(true);
                }
              }
            }}
            onMouseMove={(e) => {
              if (!isPoem && !isGallery) return;
              const rect = e.currentTarget.getBoundingClientRect();
              setCursorPos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
              });
            }}
            onMouseEnter={() => {
              if (isPoem || isGallery) setHovering(true);
            }}
            onMouseLeave={() => {
              setHovering(false);
            }}
            className={`absolute inset-0 overflow-hidden rounded-xl shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)] ${
              (isPoem || isGallery) ? "cursor-none" : "cursor-default"
            }`}
          >
            {isGallery ? (
              <div className="absolute inset-0 rounded-xl bg-[#faf8f6]" />
            ) : (
              <div
                className="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${bgSrc}')` }}
              >
                <div className="absolute inset-0 rounded-xl bg-[#faf8f6]/30" />
              </div>
            )}

            {!isGallery && (
              <div className="absolute inset-0 bg-[#F8F3E0]/60" />
            )}

            <div className="relative z-10 flex h-full flex-col justify-start p-5 text-white">
              
                {showCarousel && (
                  <div
                    className="relative flex-1 w-full shadow-[inset_0_-40px_60px_rgba(0,0,0,0.12),inset_0_20px_40px_rgba(0,0,0,0.01)] overflow-hidden rounded-lg"
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
                    <img
                      src={images[currentIndex]}
                      alt=""
                      className="h-full w-full object-cover"
                    />
{/* Previous image button */}
<button
  onMouseEnter={() => setHovering(false)}
  onMouseLeave={() => setHovering(true)}
                      type="button"
                      aria-label="Previous image"
                      onClick={(e) => {
                        e.stopPropagation();
                        prev();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow-sm hover:bg-white"
                    >
                      ‹
                    </button>

                    {/* Next image button */}
                    <button
  onMouseEnter={() => setHovering(false)}
  onMouseLeave={() => setHovering(true)}
                      type="button"
                      aria-label="Next image"
                      onClick={(e) => {
                        e.stopPropagation();
                        next();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/60 p-2 shadow-sm hover:bg-white"
                    >
                      ›

                      
                    </button>

                    
                  </div>
                )}

<div className="pt-4">
  {isPoem && (
    <p className="text-2xl md:text-3xl text-[#2F2323]">
      {backTitle}
    </p>
  )}

  <div className="mt-3 space-y-2">
                <div
                  className={`${bodySerif.className} mt-4 space-y-1 text-base leading-snug text-[#2F2323]/90 md:text-md`}
                >
                  {teaserLines.slice(0, 3).map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
                </div>
                </div>

                {/* GALLERY CURSOR (painting + art) */}
    {isGallery && (
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

            {hovering && (
  <>
    {/* POEM CURSOR */}
    {(isPoem || (isGallery && enableImageOverlay)) && (
      <div
        className="pointer-events-none absolute z-[999] transition-transform duration-50 ease-out"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#987D7D] bg-[#815555]/70 text-white text-xs backdrop-blur-md">
          {cursorLabel}
        </div>
      </div>
    )}

    
  </>
)}
              
                
              </div>
            
          </div>
        </div>
      
        {!disableOverlayClick && (
      <PoemOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        title={overlayHeading}
        poemText={poemText}
      />
      )}

{enableImageOverlay && imageOverlayOpen && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-[#faf8f6]/30 backdrop-blur-[2px]"
    onClick={() => setImageOverlayOpen(false)}
  >
    <div
  className="relative h-[80vh] aspect-square rounded-xl bg-white/10 backdrop-blur-md shadow-2xl p-4 flex items-center justify-center"
  onClick={(e) => e.stopPropagation()}
>
<img
  src={images?.[currentIndex] || ""}
  alt=""
  className="max-h-full max-w-full object-contain rounded-md"
/>
</div>
  </div>
)}
    </>
  );
}

/** Musings / poem — default copy and assets */
export const musingsCardProps = {
  variant: "poem" as const,
  frontTitle: "musings",
  frontImage: "/images/musings-icon.png",
  frontImageAlt: "Musings illustration",
  frontImageClassName: `${frontImageWrapBase} h-80 w-40`,
  backTitle: "Spring, in another time",
  backBackgroundImage: DEFAULT_BACK_BG,
  teaserLines: DEFAULT_TEASER,
  cursorLabel: "Read poem",
  poemText: DEFAULT_POEM,
} as const satisfies PoemCardProps;

/** Painting — slightly larger front illustration */
export const paintingCardProps = {
  variant: "gallery" as const,
  images: [
    "/images/gallery/painting-1.png",
    "/images/gallery/painting-2.png",
    "/images/gallery/painting-3.png",
  ],
  frontTitle: "painting",
  frontImage: "/images/paint-palette.png",
  frontImageAlt: "Paint palette and brush",
  frontImageClassName: `${frontImageWrapBase} h-96 w-48`,
  backTitle: "Making art",
  disableOverlayClick: true,
  enableImageOverlay: false,
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
  variant: "gallery" as const,
  images: [
    "/images/gallery/art-1.png",
    "/images/gallery/art-2.png",
    "/images/gallery/art-3.png",
  ],
  frontTitle: "art",
  frontImage: "/images/art-abstract.png",
  frontImageAlt: "Abstract creative illustration",
  frontImageClassName: `${frontImageWrapBase} h-80 w-44`,
  backTitle: "Creative explorations",
  teaserLines: [
    "Shapes lean toward each other like a quiet conversation,",
    "texture as punctuation, negative space as breath—",
    "nothing finished, everything invited.",
  ],
  cursorLabel: "Explore",
  enableImageOverlay: true,
  disableOverlayClick: false,
  poemText: `Creative explorations

Shapes lean toward each other like a quiet conversation,
texture as punctuation, negative space as breath—
nothing finished, everything invited.

Placeholder for a longer piece about process, play, and curiosity.`,
} as const satisfies PoemCardProps;

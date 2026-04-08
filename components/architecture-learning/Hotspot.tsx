"use client";

import { useCallback } from "react";
import { Instrument_Serif, Crimson_Text } from "next/font/google";
import type { HotspotData } from "./hotspots";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const editorialSerif = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type HotspotProps = {
  hotspot: HotspotData;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export function Hotspot({ hotspot, isOpen, onOpen, onClose }: HotspotProps) {
  const { id, topPct, leftPct, header, body, label } = hotspot;

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.stopPropagation();
      if (isOpen) onClose();
      else onOpen(id);
    },
    [id, isOpen, onOpen, onClose]
  );

  return (
    <div
      className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${topPct}%`, left: `${leftPct}%` }}
    >
      <div className="group relative z-10 flex items-center justify-center">
      <button
  type="button"
  aria-label={label}
  aria-expanded={isOpen}
  onPointerDown={handlePointerDown}
  className="
    relative z-5 flex items-center justify-center
    w-5 h-5 rounded-full
    cursor-pointer touch-manipulation
    outline-none transition-all duration-300 ease-out
    group
  "
>
  {/* Core dot */}
  <span
    className="
      w-2 h-2 rounded-full
      bg-[#2f3e46]
      transition-transform duration-300
      group-hover:scale-110
    "
  />

  {/* Soft beige glow */}
  <span
    className="
      absolute inset-0 rounded-full
      shadow-[0_0_0_8px_rgba(232,221,206,0.6)]
      opacity-80
      transition-all duration-300
      group-hover:shadow-[0_0_0_12px_rgba(232,221,206,0.8)]
    "
  />

  {/* Focus ring (accessible) */}
  <span className="sr-only">Interactive hotspot</span>
</button>

        <div
          role="tooltip"
          className={[
            "pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 w-[min(280px,calc(100vw-2rem))] min-w-[240px] max-w-[280px] -translate-x-1/2 rounded-xl border border-[#e8dfd2] bg-[#f6f1e8] px-5 py-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-[opacity,transform] duration-[230ms] ease-out",
            "md:translate-y-1.5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100",
            isOpen
              ? "max-md:translate-y-0 max-md:opacity-100"
              : "max-md:translate-y-1.5 max-md:opacity-0 max-md:scale-[0.98]",
          ].join(" ")}
        >
          <p
            className={`${instrumentSerif.className} mb-2 text-lg md:text-xl leading-tight font-medium tracking-tight text-[#2f2b25]`}
          >
            {header}
          </p>
          <p
            className={`${editorialSerif.className} text-sm leading-relaxed text-[#6b655c]`}
          >
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

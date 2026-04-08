"use client";

import { Instrument_Serif, Crimson_Text } from "next/font/google";
import type { HotspotData } from "./hotspots";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

type HotspotProps = {
  hotspot: HotspotData;
  isOpen: boolean;
};

export function Hotspot({ hotspot, isOpen }: HotspotProps) {
  const { topPct, leftPct, header, body, offsetX = 0, offsetY = 0 } = hotspot;

  return (
    <div
      className="absolute z-50"
      style={{
        top: `${topPct}%`,
        left: `${leftPct}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* DOT */}
      <div className="relative flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-[#354249] shadow-[0_0_0_8px_rgba(215,204,188,0.6)]" />
      </div>

      {/* CARD */}
      <div
        className={`
          pointer-events-none absolute left-1/2 bottom-full mb-4
          w-[260px] rounded-xl border border-[#e6ded2]
          bg-[#f2ebe3] p-4 shadow-md
          -translate-x-1/2 transition-all duration-500 ease-out
          ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }
        `}
        style={{
          transform: `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`
        }}
      >
        <p
  className={`${instrumentSerif.className} text-[24px] md:text-xl font-medium text-[#2f2b25]`}
>
  {header}
</p>

<p
  className={`${bodyFont.className} mt-2 text-base md:text-[14px] text-[#5c564c]`}
>
  {body}
</p>
      </div>
    </div>
  );
}
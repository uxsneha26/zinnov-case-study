"use client";

import { useCallback, useEffect, useState } from "react";
import { caveat, instrumentSerif } from "@/lib/fonts";
import { Hotspot } from "./Hotspot";
import { ARCHITECTURE_HOTSPOTS } from "./hotspots";

/** Transparent 1000×600 SVG so layout + % hotspots match until you swap in a real asset */
const IMAGE_PLACEHOLDER =
  "/architecture-plan.png";

export function ArchitectureLearningSection() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const onOpen = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const onClose = useCallback(() => setActiveId(null), []);

  useEffect(() => {
    if (activeId === null) return;
    const handle = () => setActiveId(null);
    document.addEventListener("pointerdown", handle);
    return () => document.removeEventListener("pointerdown", handle);
  }, [activeId]);

  return (
    <section
      aria-labelledby="architecture-learning-title"
      className="relative z-20 w-full"
    >
      {/* Scroll height drives how long the sticky panel “sits” on top of prior content */}
      <div className="relative min-h-[200vh] w-full">
      <div
  className="sticky top-0 flex h-screen w-full max-w-[100vw] flex-col overflow-hidden"
  style={{
    backgroundImage: "url('/your-background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden px-6 pb-8 pt-10 md:px-10 md:pb-12 md:pt-14">
            <header className="relative z-10 mx-auto w-full max-w-4xl shrink-0 text-center">
              <h2
                id="architecture-learning-title"
                className={`${instrumentSerif.className} text-balance text-3xl font-normal leading-tight tracking-tight text-[#2f2b25] md:text-4xl lg:text-[2.75rem]`}
              >
                what i learnt from architecture
              </h2>
              <p
                className={`${caveat.className} mt-3 text-xl text-[#5c564c] md:text-2xl`}
              >
                which helps me everyday design experiences
              </p>
            </header>

            <div className="relative mx-auto mt-12 w-full max-w-[75vw] md:max-w-[850px] lg:max-w-[780px]">
              <div className="relative w-full">
                {/* eslint-disable-next-line @next/next/no-img-element -- user will replace with transparent PNG */}
                <img
                  src={IMAGE_PLACEHOLDER}
                  alt=""
                  className="h-auto w-full object-contain"
                />

                {ARCHITECTURE_HOTSPOTS.map((h) => (
                  <Hotspot
                    key={h.id}
                    hotspot={h}
                    isOpen={activeId === h.id}
                    onOpen={onOpen}
                    onClose={onClose}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

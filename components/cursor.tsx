"use client";

import { useEffect, useState } from "react";

export function GlobalCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#C49C9C");
  const [visible, setVisible] = useState(true); // 👈 NEW

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setPos({ x, y });

      const el = document.elementFromPoint(x, y);

      // 🔥 1. HIDE inside special cursor zones
      const hideZone = el?.closest('[data-cursor="hidden"]');
      if (hideZone) {
        setVisible(false);
        return;
      } else {
        setVisible(true);
      }

      // 🎨 2. COLOR switching
      const section = el?.closest("[data-cursor]") as HTMLElement | null;
      if (section?.dataset.cursorColor) {
        setColor(section.dataset.cursorColor);
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-150"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        opacity: visible ? 1 : 0, // 👈 fades out
      }}
    >
      <div
        className="h-3 w-3 rounded-full border-[2px] transition-all duration-200 ease-out"
        style={{
          backgroundColor: color,
          borderColor: "rgba(255,255,255,0.6)",
          boxShadow: `0 10px 30px ${color}30`,
        }}
      />
    </div>
  );
}
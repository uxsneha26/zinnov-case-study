"use client";

import { useEffect, useState } from "react";

export function GlobalCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#C49C9C");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      setPos({ x, y });

      const el = document.elementFromPoint(x, y);

      // ✅ SAFE hide detection (no flicker)
      let hideZone = false;

      if (el) {
        const path = (e.composedPath?.() || []) as HTMLElement[];

        hideZone = path.some(
          (node) =>
            node instanceof HTMLElement &&
            node.dataset?.cursor === "hidden"
        );
      }

      setVisible(!hideZone);

      // 🎨 color detection
      const section = el?.closest("[data-cursor]") as HTMLElement | null;
      const newColor = section?.dataset.cursorColor;

      if (newColor) {
        setColor((prev) => (prev !== newColor ? newColor : prev));
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
        opacity: visible ? 1 : 0,
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
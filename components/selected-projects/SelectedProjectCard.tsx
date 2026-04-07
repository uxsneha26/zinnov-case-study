"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SelectedProject } from "@/data/selectedProjects";
import { bodySerif, instrumentSerif, labelSans } from "@/lib/fonts";

type Props = {
  project: SelectedProject;
};

const CTA_LABEL = "View case study";

export function SelectedProjectCard({ project }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);

  const stop = useCallback(() => {
    if (frameRef.current != null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!active) {
      stop();
      return;
    }
    const loop = () => {
      smooth.current.x += (target.current.x - smooth.current.x) * 0.18;
      smooth.current.y += (target.current.y - smooth.current.y) * 0.18;
      setPointer({ x: smooth.current.x, y: smooth.current.y });
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
    return stop;
  }, [active, stop]);

  const handleMove = useCallback((e: React.MouseEvent) => {
    target.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleEnter = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    target.current = { x: cx, y: cy };
    smooth.current = { x: cx, y: cy };
    setPointer({ x: cx, y: cy });
    setActive(true);
  }, []);

  const handleLeave = useCallback(() => {
    setActive(false);
  }, []);

  return (
    <div
      ref={rootRef}
      role="article"
      className="group relative mx-auto h-[520px] w-full max-w-[520px] cursor-none overflow-hidden rounded-2xl border border-[#e5dfd6]"
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Full-bleed thumbnail — fixed in card; text panel overlaps upward on hover */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text block: grows upward over image; card outer size never changes */}
      <div
        className="absolute bottom-0 left-0 z-10 w-full overflow-hidden rounded-t-xl border-t border-[#ebe4dc]/90 bg-[#faf8f5] px-4 pb-4 pt-4 shadow-[0_-6px_28px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out h-[120px] group-hover:h-[240px] group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.09)] md:px-5 md:pt-5 md:pb-5"
      >
        <div className="mx-auto flex max-w-[90%] flex-col space-y-2 transition-all duration-300 ease-out group-hover:space-y-3">
          <p
            className={`${labelSans.className} text-[0.62rem] font-medium uppercase tracking-[0.2em] text-[#7a726a]`}
          >
            {project.eyebrow}
          </p>
          <h3
            className={`${instrumentSerif.className} line-clamp-2 text-balance text-lg font-normal leading-relaxed tracking-tight text-[#3d3832] group-hover:line-clamp-none md:text-xl`}
          >
            {project.title}
          </h3>

          {/* Reveal on hover: expand max-height + opacity (no scrollbars) */}
          {project.layout === "two-column" && (
  <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 max-w-[520px]">

    {/* ROLE */}
    <div>
      <p
        className={`${labelSans.className} mb-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#8a8278]`}
      >
        My role
      </p>

      <div className="space-y-1">
        {project.role.map((line) => (
          <p
            key={line}
            className={`${bodySerif.className} text-[0.8125rem] leading-relaxed text-[#5c564c]`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>

    {/* IMPACT */}
    <div>
      <p
        className={`${labelSans.className} mb-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#8a8278]`}
      >
        Impact
      </p>

      <p
        className={`${bodySerif.className} text-[0.8125rem] leading-relaxed text-[#5c564c]`}
      >
        {project.impact}
      </p>
    </div>

  </div>
)}
        </div>
      </div>

      <div
        className={`pointer-events-none fixed z-[200] transition-opacity duration-200 ease-out ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: pointer.x,
          top: pointer.y,
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden
      >
        <div className="pointer-events-none flex items-center justify-center rounded-full bg-[#F3E8DF] px-4 py-2 text-[16px] tracking-[0.04em] text-[#3d372f] shadow-sm whitespace-nowrap">
  {CTA_LABEL}
</div>
      </div>
    </div>
  );
}

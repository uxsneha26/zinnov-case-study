"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SelectedProject } from "@/data/selectedProjects";
import { bodySerif, instrumentSerif, labelSans } from "@/lib/fonts";
import { useRouter } from "next/navigation";

type Props = {
  project: SelectedProject;
};

const CTA_LABEL = "View Case Study";

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
      smooth.current.x += (target.current.x - smooth.current.x) * 0.25;
      smooth.current.y += (target.current.y - smooth.current.y) * 0.25;
      setPointer({ x: smooth.current.x, y: smooth.current.y });
      frameRef.current = requestAnimationFrame(loop);
    };
    frameRef.current = requestAnimationFrame(loop);
    return stop;
  }, [active, stop]);

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = rootRef.current;
    if (!el) return;
  
    const rect = el.getBoundingClientRect();

target.current = {
  x: e.clientX - rect.left,
  y: e.clientY - rect.top,
};
  }, []);

  const handleEnter = useCallback((e: React.MouseEvent) => {
    const el = rootRef.current;
    if (!el) return;
  
    const rect = el.getBoundingClientRect();
  
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    target.current = { x, y };
    smooth.current = { x, y };
    setPointer({ x, y });
  
    setActive(true);
  }, []);



  const handleLeave = useCallback(() => {
    setActive(false);
  }, []);

  const router = useRouter();



  return (
    <div
    ref={rootRef}
      data-cursor="hidden"
      className="group relative mx-auto h-[520px] w-full max-w-[520px] cursor-none overflow-hidden rounded-2xl border border-[#e5dfd6] transition-transform duration-300 hover:scale-[1.01]"
      onMouseEnter={(e) => handleEnter(e)}
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
        className="absolute bottom-0 left-0 z-10 w-full overflow-hidden rounded-t-xl border-t border-[#ebe4dc]/90 bg-[#faf8f5] px-4 pb-4 pt-4 shadow-[0_-6px_28px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out h-[120px] group-hover:h-[280px] group-hover:shadow-[0_-12px_40px_rgba(0,0,0,0.09)] md:px-5 md:pt-5 md:pb-5"
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

      <div className="space-y-1.5 list-none">
  {project.role.map((line) => (
    <div key={line} className="flex items-start gap-2">
      
      {/* bullet */}
      <span className="mt-[6px] h-[4px] w-[4px] min-h-[4px] min-w-[4px] rounded-full bg-[#a89f94] flex-shrink-0" />

      {/* text */}
      <p
        className={`${bodySerif.className} text-[0.8125rem] leading-relaxed text-[#5c564c]`}
      >
        {line}
      </p>

    </div>
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

      {/* CURSOR LAYER */}
<div
  className={`pointer-events-none absolute inset-0 z-[30] ${
    active ? "opacity-100" : "opacity-0"
  }`}
>
  <div
    style={{
      position: "absolute",
      left: pointer.x,
      top: pointer.y,
      transform: "translate(-50%, -50%)",
    }}
  >
    <div className={`${instrumentSerif.className} flex items-center justify-center rounded-full bg-[#F3E8DF] px-4 py-2 text-[16px] tracking-[0.04em] text-[#3d372f] shadow-sm whitespace-nowrap`}>
      {CTA_LABEL}
    </div>
  </div>
      
      </div>
      {/* CLICK LAYER */}
      <div
        className="absolute inset-0 z-20 cursor-none"
        onClick={(e) => {
          e.stopPropagation();

          if (project.id === "zinnov") {
            router.push("/zinnov");
          } else if (project.id === "jk-cement") {
            router.push("/JKC");
          }
        }}
      />
    </div>
  );
}

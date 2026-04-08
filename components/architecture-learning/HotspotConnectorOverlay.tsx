"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export type HotspotAnchorPair = {
  dot: HTMLElement | null;
  card: HTMLElement | null;
};

type PathGeom = {
  id: string;
  d: string;
};

function buildQuadraticPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  curveStrength: number = 0.25,   // 👈 normalized (0 → 1 feel)
  direction: 1 | -1 = 1           // 👈 flip curve if needed
): string {
  const dx = x2 - x1;
  const dy = y2 - y1;

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  // 👇 perpendicular vector (normalized)
  const len = Math.hypot(dx, dy) || 1;
  const nx = (-dy / len) * direction;
  const ny = (dx / len) * direction;

  // 👇 scale curve by distance (but controlled)
  const curveOffset = len * curveStrength;

  const cx = mx + nx * curveOffset;
  const cy = my + ny * curveOffset;

  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function useConnectorPaths(
  containerEl: HTMLElement | null,
  anchors: Record<string, HotspotAnchorPair>,
  activeIds: string[]
): { width: number; height: number; paths: PathGeom[] } {
  const [box, setBox] = useState({
    width: 0,
    height: 0,
    paths: [] as PathGeom[],
  });

  const measure = useCallback(() => {
    if (!containerEl) {
      setBox({ width: 0, height: 0, paths: [] });
      return;
    }

    const cr = containerEl.getBoundingClientRect();
    const w = cr.width;
    const h = cr.height;
    if (w <= 0 || h <= 0) {
      setBox({ width: 0, height: 0, paths: [] });
      return;
    }

    const paths: PathGeom[] = [];

    for (const id of activeIds) {
      const pair = anchors[id];
      if (!pair?.dot || !pair?.card) continue;

      const dr = pair.dot.getBoundingClientRect();
      const tr = pair.card.getBoundingClientRect();

      const x1 = dr.left + dr.width / 2 - cr.left;
      const y1 = dr.top + dr.height / 2 - cr.top;
      const x2 = tr.left + tr.width / 2 - cr.left;
      const y2 = tr.top + tr.height / 2 - cr.top;

      const curveStrength = 0.25;
const direction = 1;

      paths.push({
        id,
        d: buildQuadraticPath(x1, y1, x2, y2, curveStrength, direction),
      });
    }

    setBox({ width: w, height: h, paths });
  }, [containerEl, anchors, activeIds]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (containerEl) ro.observe(containerEl);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure, containerEl]);

  // Remeasure after card visibility transitions (~500ms in Hotspot)
  useEffect(() => {
    const t = window.setTimeout(measure, 520);
    return () => clearTimeout(t);
  }, [activeIds, measure]);

  return useMemo(
    () => ({ width: box.width, height: box.height, paths: box.paths }),
    [box]
  );
}

function AnimatedConnectorPath({
  d,
  visible,
  filterId,
}: {
  d: string;
  visible: boolean;
  filterId: string;
}) {
  const pathRef = useRef<SVGPathElement>(null);
  const [length, setLength] = useState(0);
  const [draw, setDraw] = useState(false);

  useLayoutEffect(() => {
    const el = pathRef.current;
    if (!el) return;
    try {
      setLength(el.getTotalLength());
    } catch {
      setLength(0);
    }
    setDraw(false);
  }, [d]);

  useEffect(() => {
    if (!visible || !length) {
      setDraw(false);
      return;
    }
    const id = requestAnimationFrame(() => setDraw(true));
    return () => cancelAnimationFrame(id);
  }, [visible, length, d]);

  const dashOffset = draw && visible ? 0 : length;

  return (
    <path
      ref={pathRef}
      d={d}
      fill="none"
      stroke="#AA9D8B"
      strokeWidth={1.0}
      strokeLinecap="round"
      opacity={0.65}
      strokeDasharray= "2 4"
      strokeDashoffset={dashOffset}
      filter={`url(#${filterId})`}
      style={{
        transition: "stroke-dashoffset 0.6s ease-out",
      }}
    />
  );
}

type HotspotConnectorOverlayProps = {
  container: HTMLElement | null;
  anchors: Record<string, HotspotAnchorPair>;
  activeIds: string[];
};

export function HotspotConnectorOverlay({
  container,
  anchors,
  activeIds,
}: HotspotConnectorOverlayProps) {
  const filterId = `connector-${useId().replace(/:/g, "")}`;
  const { width, height, paths } = useConnectorPaths(
    container,
    anchors,
    activeIds
  );

  const defs = (
    <defs>
      <filter
        id={filterId}
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        colorInterpolationFilters="sRGB"
      >
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.45 0"
          result="soft"
        />
        <feMerge>
          <feMergeNode in="soft" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );

  if (width <= 0 || height <= 0) {
    return null;
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[25] h-full w-full overflow-visible"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden
    >
      {defs}
      {paths.map((p) => (
        <AnimatedConnectorPath
          key={p.id}
          d={p.d}
          visible={activeIds.includes(p.id)}
          filterId={filterId}
        />
      ))}
    </svg>
  );
}

"use client";

import { motion } from "framer-motion";

type SimplePaginationDotsProps = {
  total: number;
  activeIndex: number;
  onDotClick?: (index: number) => void;
};

/**
 * Minimal dot strip: active index is a soft pill; others are small circles.
 */
export function SimplePaginationDots({
  total,
  activeIndex,
  onDotClick,
}: SimplePaginationDotsProps) {
  if (total < 1) return null;

  return (
    <div
      className="flex items-center justify-center gap-2"
      role="tablist"
      aria-label="Testimonial pages"
    >
      {Array.from({ length: total }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <motion.button
            key={i}
            type="button"
            role="tab"
            aria-selected={active}
            aria-current={active ? "true" : undefined}
            aria-label={`Go to testimonial ${i + 1}`}
            disabled={!onDotClick}
            onClick={() => onDotClick?.(i)}
            className="h-2 shrink-0 rounded-full border-0 bg-[#BEA3A0] p-0 outline-none focus-visible:ring-2 focus-visible:ring-[#BEA3A0]/50 focus-visible:ring-offset-2 disabled:cursor-default enabled:cursor-pointer"
            initial={false}
            animate={{
              width: active ? 28 : 8,
              opacity: active ? 1 : 0.42,
              scale: active ? 1 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 32,
              mass: 0.6,
            }}
          />
        );
      })}
    </div>
  );
}

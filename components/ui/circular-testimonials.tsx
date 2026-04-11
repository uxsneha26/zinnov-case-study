"use client";
import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { instrumentSerif } from "@/lib/fonts";
import { SimplePaginationDots } from "@/components/ui/simple-pagination-dots";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

const bgColors = [
  "#ECD8CD",
  "#E0EDC2",
  "#DAEAED",
  "#F5ECD0",
  "#D2E4DB",
  "#EBE4EB",
  "#D9E3DA",
  "#E2E4EE",
];

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
}: CircularTestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const length = testimonials.length;
  const active = testimonials[activeIndex];

  useEffect(() => {
    if (!autoplay) return;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, length]);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + length) % length);
  }, [length]);

  function getStyle(index: number): React.CSSProperties {
    if (index === activeIndex) {
      return {
        transform: "translateX(0) scale(1)",
        zIndex: 3,
        opacity: 1,
      };
    }

    if ((activeIndex + 1) % length === index) {
      return {
        transform: "translateX(110px) scale(0.8)",
        zIndex: 2,
        opacity: 1,
      };
    }

    if ((activeIndex - 1 + length) % length === index) {
      return {
        transform: "translateX(-110px) scale(0.8)",
        zIndex: 2,
        opacity: 1,
      };
    }

    return {
      opacity: 0,
      pointerEvents: "none",
    };
  }

  return (
    <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-24 items-center">

      {/* LEFT: PROFILE CARDS */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-[320px]" ref={containerRef}>
  {testimonials.map((t, i) => (
    <div
      key={t.name}
      style={getStyle(i)}
      className="absolute w-[320px] h-[320px] rounded-2xl p-4 transition-all duration-500 ease-out
 shadow-none"
    >
      <div
        className="w-full h-full rounded-xl flex flex-col items-center justify-center text-center p-6"
        style={{
          backgroundColor: bgColors[i % bgColors.length],
          opacity: 1,
        }}
      >
        {/* Avatar */}
        <img
          src={t.src}
          alt=""
          className="h-20 w-20 rounded-full object-cover mb-4 shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
        />

        {/* Name */}
<span className="text-[1.15rem] leading-[1.5] font-medium text-[#2f2b25]">
  {t.name}
</span>

{/* Designation */}
<span className="text-[0.92rem] leading-[1.6] text-[#6f6a62] mt-2">
  {t.designation}
</span>
      </div>
    </div>
  ))}
        </div>
        <SimplePaginationDots
          total={testimonials.length}
          activeIndex={activeIndex}
          onDotClick={setActiveIndex}
        />
      </div>

      {/* RIGHT: TEXT */}
      <div className="flex flex-col justify-between h-[280px] max-w-[560px]">

  <AnimatePresence mode="wait">
    <motion.div
      key={activeIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <p className={`${instrumentSerif.className} text-[1.15rem] leading-[1.9] text-[#4a443d]`}>
  {active.quote}
</p>
    </motion.div>
  </AnimatePresence>

  {/* NAV */}
  <div className="flex gap-4 mt-6">
    <button
      type="button"
      onClick={prev}
      aria-label="Previous testimonial"
      className="h-10 w-10 rounded-full bg-[#BEA3A0] text-white flex items-center justify-center"
    >
      <FaArrowLeft size={14} />
    </button>
    <button
      type="button"
      onClick={next}
      aria-label="Next testimonial"
      className="h-10 w-10 rounded-full bg-[#BEA3A0] text-white flex items-center justify-center"
    >
      <FaArrowRight size={14} />
    </button>
  </div>

</div>

    </div>
  );
};

export default CircularTestimonials;

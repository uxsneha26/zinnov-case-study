"use client";

import { useMemo } from "react";
import CircularTestimonials from "@/components/ui/circular-testimonials";
import { testimonials } from "@/data/testimonials";
import { instrumentSerif } from "@/lib/fonts";

export function TestimonialsSection() {
  const items = useMemo(
    () =>
      testimonials.map((t) => ({
        quote: t.text,
        name: t.name,
        designation: t.company
          ? `${t.designation} · ${t.company}`
          : t.designation,
        src: t.image,
      })),
    []
  );

  return (
    <section
      className="w-full bg-transparent px-6 py-24 md:py-32"
      aria-label="Testimonials"
    >
      <div className="mx-auto flex max-w-6xl flex-col">
        
        <h2
          className={`${instrumentSerif.className} text-center text-5xl md:text-[2.2rem] font-normal tracking-tight text-[#3d3832]`}
        >
          Kind words from collaborators
        </h2>
  
        <div className="relative mt-16 md:mt-20">
          <CircularTestimonials testimonials={items} autoplay={false} />
        </div>
  
      </div>
    </section>
  );
}

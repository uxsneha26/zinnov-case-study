import type { Testimonial } from "@/data/testimonials";
import { bodySerif, instrumentSerif, labelSans } from "@/lib/fonts";

const colorBg: Record<Testimonial["color"], string> = {
  green: "#DDE8C8",
  blue: "#D6E2EE",
  beige: "#F3EDE4",
  peach: "#F1DDD6",
};

type Props = {
  testimonial: Testimonial;
  index: number;
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function TestimonialCard({ testimonial, index }: Props) {
  const tilt = index % 2 === 0 ? "-rotate-2" : "rotate-2";
  const bg = colorBg[testimonial.color];

  return (
    <article
      className={`min-w-[320px] max-w-[320px] shrink-0 rounded-2xl p-6 shadow-sm transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-md ${tilt}`}
      style={{ backgroundColor: bg }}
    >
      <div className="flex h-full flex-col">
        <blockquote
          className={`${bodySerif.className} mb-6 text-[0.95rem] leading-relaxed text-[#5c564c] md:text-base`}
        >
          {testimonial.text}
        </blockquote>

        <div className="mt-auto flex items-center gap-3">
          <img
            src={testimonial.image}
            alt=""
            className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-black/5"
          />
          <div className="min-w-0 flex-1">
            <p
              className={`${instrumentSerif.className} text-base font-medium leading-snug text-[#3d3832] md:text-[1.05rem]`}
            >
              {testimonial.name}
            </p>
            <p
              className={`${labelSans.className} mt-0.5 text-[0.7rem] leading-snug text-[#7a726a] md:text-xs`}
            >
              {testimonial.designation}
              {testimonial.company ? ` · ${testimonial.company}` : ""}
            </p>
          </div>
          <a
            href={testimonial.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-[#5c564c] opacity-80 transition-opacity hover:opacity-100"
            aria-label={`${testimonial.name} on LinkedIn`}
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </article>
  );
}

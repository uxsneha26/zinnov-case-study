import { Jost } from "next/font/google";
import { bodySerif, labelSans } from "@/lib/fonts";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export type TriangulationCardProps = {
  title: string;
  subtitle: string;
  bullets: readonly string[];
  tags: readonly string[];
  outcome: readonly string[];
  bgColor: string;
};

export function TriangulationCard({
  title,
  subtitle,
  bullets,
  tags,
  outcome,
  bgColor,
}: TriangulationCardProps) {
  return (
    <article
      className={`${bgColor} rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-stretch border border-[#dfe6d5]/40`}
    >
      <div className="flex-1 min-w-0 space-y-5">
        <h3
          className={`${headingFont.className} text-xl md:text-2xl font-semibold text-gray-900 leading-tight`}
        >
          {title}
        </h3>

        <p
          className={`inline-block rounded-full border border-[#dfe6d5]/60 bg-white/45 px-4 py-2 ${bodySerif.className} text-base md:text-lg text-gray-700 leading-snug`}
        >
          {subtitle}
        </p>

        <div className="space-y-3">
          <p
            className={`${labelSans.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-gray-600`}
          >
            What we did?
          </p>
          <ul
            className={`${bodySerif.className} space-y-2 text-base md:text-lg text-gray-700 leading-relaxed list-disc list-inside marker:text-gray-400`}
          >
            {bullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`${labelSans.className} rounded-full border border-[#dfe6d5]/50 bg-white/50 px-3 py-1 text-[11px] md:text-xs font-medium text-gray-700`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <aside className="rounded-xl border border-[#dfe6d5]/45 bg-white/40 p-5 lg:max-w-[min(100%,280px)] lg:shrink-0 flex flex-col">
        <p
          className={`${labelSans.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-gray-600 mb-3`}
        >
          Outcome
        </p>
        <ul
          className={`${bodySerif.className} space-y-2.5 text-base text-gray-700 leading-relaxed`}
        >
          {outcome.map((line) => (
            <li key={line} className="flex gap-2">
              <span className="text-gray-400 shrink-0" aria-hidden>
                ·
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </aside>
    </article>
  );
}

import { Jost, Caveat } from "next/font/google";
import { bodySerif, labelSans } from "@/lib/fonts";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const quoteFont = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

export type TriangulationCardProps = {
  title: string;
  subtitle: string;
  bullets: readonly string[];
  tags: readonly string[];
  outcome: readonly string[];
  bgColor: string;
};

const bulletsListClass = `${bodySerif.className} text-[0.95rem] md:text-[1rem] text-gray-700 leading-relaxed list-disc list-inside marker:text-gray-400 space-y-1`;

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
      className={`${bgColor} rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-[#dfe6d5]/40 flex flex-col gap-5 md:gap-6`}
    >
      <header className="space-y-3">
        <h3
          className={`${headingFont.className} text-xl md:text-2xl font-semibold text-gray-900 leading-tight`}
        >
          {title}
        </h3>
        <p
          className={`inline-block rounded-full border border-[#dfe6d5]/60 bg-white/45 px-4 py-2 ${quoteFont.className} text-base md:text-lg text-gray-700 leading-snug`}
        >
          {subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-6 md:gap-4 items-start">
        <div className="min-w-0">
          <p
            className={`${labelSans.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-gray-600`}
          >
            What we did?
          </p>
          <ul
  className={`${bodySerif.className} mt-3 space-y-2.5 text-base text-gray-700 leading-relaxed`}
>
  {bullets.map((line) => (
    <li key={line} className="flex gap-2">
      <span className="text-gray-400 shrink-0" aria-hidden>
        ·
      </span>
      <span>{line}</span>
    </li>
  ))}
</ul>
        </div>

        <div className="min-w-0">
          <p
            className={`${labelSans.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] text-gray-600`}
          >
            Outcome
          </p>
          <ul
            className={`${bodySerif.className} mt-3 space-y-2.5 text-base text-gray-700 leading-relaxed`}
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
          <div className="mt-6 flex flex-wrap gap-2">
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
      </div>
    </article>
  );
}

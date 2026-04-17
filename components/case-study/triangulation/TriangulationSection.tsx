import { bodySerif } from "@/lib/fonts";
import { TriangulationCard } from "./TriangulationCard";
import { Jost } from "next/font/google";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const DEFAULT_CARDS = [
  {
    title: "Business Understanding",
    subtitle: "Defined what the system was supposed to do",
    bullets: [
      "8 detailed documents (~80 pages each)",
      "Feature definitions across applications",
    ],
    tags: ["Feature Lists", "KPI"],
    outcome: [
      "KPI structures and measurement logic",
      "Role-based responsibilities and workflows",
    ],
    bgColor: "bg-[#E9EEDD]",
  },
  {
    title: "User Reality",
    subtitle: "Revealed how work actually happens on ground",
    bullets: [
      "Discovery workshops with stakeholders",
      "Structured discussion guides",
      "Understanding daily workflows",
    ],
    tags: ["Workshops", "Personas"],
    outcome: [
      "Pain points across roles",
      "Motivators and behavioral patterns",
    ],
    bgColor: "bg-[#EAF3F3]",
  },
  {
    title: "System Design",
    subtitle: "Translated complexity into usable systems",
    bullets: [
      "Information architecture across applications",
      "End-to-end user flows",
      "Role-based access structuring",
    ],
    tags: ["IA", "User Flows"],
    outcome: [
      "Screen-level clarity",
      "Consistent cross-platform experience",
    ],
    bgColor: "bg-[#F3EAF0]",
  },
] as const;

export type TriangulationSectionProps = {
  sectionTitle?: string;
  sectionDescription?: string;
};

export function TriangulationSection({
  sectionTitle = "From Complexity to Clarity",
  sectionDescription = "Before defining the problem, we triangulated insights across business intent, user reality, and system design.",
}: TriangulationSectionProps) {
  const [top, left, right] = DEFAULT_CARDS;

  return (
    <section className="w-full px-6 py-16 md:py-24 border-t border-[#dfe6d5]/50">
      <div className="max-w-5xl mx-auto">
        <header className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2
            className={`${headingFont.className} text-4xl md:text-4xl font-semibold text-gray-900 leading-tight mb-5`}
          >
            {sectionTitle}
          </h2>
          <p
            className={`${bodySerif.className} text-lg md:text-xl text-left text-gray-700 leading-relaxed`}
          >
            {sectionDescription}
          </p>
        </header>

        <div className="relative isolate z-0">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible md:block"
            aria-hidden
            preserveAspectRatio="none"
          >
            <line
              x1="50%"
              y1="27%"
              x2="25%"
              y2="73%"
              className="stroke-gray-400"
              
              strokeDasharray="4 4"
              strokeWidth={1.4}
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="50%"
              y1="27%"
              x2="75%"
              y2="73%"
              className="stroke-gray-400"
              
              strokeDasharray="4 4"
              strokeWidth={1.4}
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1="25%"
              y1="73%"
              x2="75%"
              y2="73%"
              className="stroke-gray-400"
              
              strokeDasharray="4 4"
              strokeWidth={1.4}
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                <TriangulationCard {...top} />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <TriangulationCard {...left} />
              <TriangulationCard {...right} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

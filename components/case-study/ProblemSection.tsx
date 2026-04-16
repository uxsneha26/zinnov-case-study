import { instrumentSerif, bodySerif } from "@/lib/fonts";

export type ProblemSectionProps = {
  title?: string;
  body?: string;
  supportingPoints?: string[];
};

const DEFAULT_TITLE = "Bridging Operational Gaps Across Stakeholders";
const DEFAULT_BODY =
  "How might we create a unified digital ecosystem that enables seamless lead-to-order conversion, efficient dealer-driven supply management, better engagement with external stakeholders, and real-time visibility across the pipeline?";

const DEFAULT_POINTS = [
  "Disconnected systems led to delays in lead conversion",
  "Poor coordination between stakeholders",
  "Lack of actionable insights for decision-making",
];

/**
 * Problem statement — same section spacing as Zinnov narrative blocks.
 */
export function ProblemSection({
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
  supportingPoints = DEFAULT_POINTS,
}: ProblemSectionProps) {
  return (
    <section
      className="w-full border-t border-[#dfe6d5]/60 px-6 py-16 md:px-10 md:py-24"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-left">
          <h2
            id="problem-heading"
            className={`${instrumentSerif.className} text-3xl font-normal leading-tight text-gray-900 md:text-4xl`}
          >
            {title}
          </h2>
          <p
            className={`${bodySerif.className} mt-8 text-lg font-medium leading-relaxed text-gray-800 md:text-xl`}
          >
            {body}
          </p>
          <ul
            className={`${bodySerif.className} mt-10 list-disc space-y-3 pl-6 text-lg leading-relaxed text-gray-700 marker:text-gray-400 md:text-xl`}
          >
            {supportingPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

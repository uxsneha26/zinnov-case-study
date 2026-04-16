import { instrumentSerif, bodySerif } from "@/lib/fonts";

export type ContextSectionProps = {
  title?: string;
  body?: string;
};

const DEFAULT_TITLE = "A Complex, Fragmented Ecosystem";
const DEFAULT_BODY = `The cement supply chain operates across a highly distributed ecosystem — involving internal sales teams, dealers managing inventory and logistics, and external stakeholders like contractors, retailers, and influencers.

Each stakeholder operates with different priorities, tools, and levels of digital maturity. This resulted in fragmented workflows, limited visibility, and inefficiencies across the supply chain.

The opportunity was not just to design an interface — but to create a connected system that aligns business goals with real-world execution.`;

/**
 * Context / introduction — border-t + max-w-5xl / max-w-3xl text column (Zinnov section rhythm).
 */
export function ContextSection({
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
}: ContextSectionProps) {
  return (
    <section
      className="w-full border-t border-[#dfe6d5]/60 px-6 py-16 md:px-10 md:py-24"
      aria-labelledby="context-heading"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-left">
          <h2
            id="context-heading"
            className={`${instrumentSerif.className} text-3xl font-normal leading-tight text-gray-900 md:text-4xl`}
          >
            {title}
          </h2>
          <div
            className={`${bodySerif.className} mt-8 space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl`}
          >
            {body.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

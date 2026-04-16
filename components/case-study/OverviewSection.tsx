import { bodySerif, labelSans } from "@/lib/fonts";

export type OverviewField = {
  label: string;
  value: string;
};

export type OverviewSectionProps = {
  items?: OverviewField[];
};

const DEFAULT_ITEMS: OverviewField[] = [
  { label: "Client", value: "Leading Cement Manufacturing & Supply Brand" },
  {
    label: "Scope",
    value: "End-to-end UX Design for 7 role-based applications",
  },
  { label: "Timeline", value: "16 Weeks" },
  { label: "Platforms", value: "Mobile + Web" },
  {
    label: "My Role",
    value: "Experience Design, Strategy, System Thinking",
  },
];

/**
 * Project overview strip — card grid pattern from Zinnov PROJECT OVERVIEW section.
 */
export function OverviewSection({ items = DEFAULT_ITEMS }: OverviewSectionProps) {
  return (
    <section
      className="w-full px-6 py-12 md:py-16"
      aria-label="Project overview"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[#dfe6d5]/70 bg-[#faf9f5] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.05)] md:p-10 lg:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
            {items.map((item) => (
              <div key={item.label} className="space-y-3">
                <div className="flex items-stretch gap-3">
                  <div
                    className="w-[2px] shrink-0 rounded-full bg-[#9CC22A]"
                    aria-hidden
                  />
                  <h2
                    className={`${labelSans.className} text-sm font-semibold uppercase tracking-[0.12em] text-gray-600`}
                  >
                    {item.label}
                  </h2>
                </div>
                <p
                  className={`${bodySerif.className} text-lg leading-relaxed text-gray-800 md:text-xl`}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

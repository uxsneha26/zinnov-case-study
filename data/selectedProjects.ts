export type SelectedProject = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  role: string[];
  impact: string;
  image: string;
  layout?: "two-column";
};

export const projects: SelectedProject[] = [
  {
    id: "zinnov",
    layout: "two-column",
    eyebrow: "ZINNOV · B2B SAAS",
    title: "Decision intelligence for global capability centers",
    description:
      "End-to-end UX for a research and insights platform—structuring discovery, peer learning, and report workflows so leaders move from data to confident decisions.",
    role: [
      "UX design & product strategy",
      "Research synthesis & journey mapping",
      "Design system & UI for customer and admin surfaces",
    ],
    impact:
      "Restructured how complex research data is discovered and acted upon,reducing time-to-insight by 40% and enabling faster, more confident decision-making for senior capability leaders.",
    image: "/projects/zinnov-cover.png",
  },
  {
    id: "jk-cement",
    layout: "two-column",
    eyebrow: "LEADING CEMENT BRAND · INDUSTRY",
    title: "Unified digital platform across sales, finance, and supply chain",
    description:
      "Editorial and product surfaces that connect brand narrative with practical tools—dealer flows, discovery, and storytelling in one calm system.",
    role: [
      "End-to-end experience design for a unified enterprise platform",
      "Content hierarchy and component patterns across 9 modules",
      "Collaboration with brand, tech, and business stakeholders",
    ],
    impact:
      "Consolidated 9 fragmented applications into one coherent platform, reducing cross-functional workflow friction by 35% and significantly improving onboarding time for dealers and internal users at scale.",
    image: "/projects/jk-cement-cover.png",
  },
];

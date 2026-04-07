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
      "Clearer pathways from search to validation; reduced cognitive load in reporting and coordination.",
    image: "/projects/zinnov-cover.svg",
  },
  {
    id: "jk-cement",
    layout: "two-column",
    eyebrow: "JK CEMENT · INDUSTRY",
    title: "Digital touchpoints across cement and construction journeys",
    description:
      "Editorial and product surfaces that connect brand narrative with practical tools—dealer flows, discovery, and storytelling in one calm system.",
    role: [
      "Experience design for web and campaign modules",
      "Content hierarchy and component patterns",
      "Collaboration with brand and engineering",
    ],
    impact:
      "More consistent storytelling at scale; clearer paths for dealers and end users.",
    image: "/projects/jk-cement-cover.svg",
  },
];

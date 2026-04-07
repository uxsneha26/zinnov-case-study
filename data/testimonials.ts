export type Testimonial = {
  id: string;
  name: string;
  designation: string;
  company: string;
  text: string;
  image: string;
  linkedin: string;
  color: "green" | "blue" | "beige" | "peach";
};

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Menon",
    designation: "Director, Product",
    company: "Global Insights Co.",
    text: "Sneha brought clarity where we had noise—structured journeys and calm UI that our leadership team actually uses.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "green",
  },
  {
    id: "t2",
    name: "James Okonkwo",
    designation: "Head of Design",
    company: "Northwind Labs",
    text: "Rare mix of systems thinking and craft. Workshops were focused, and the outcomes shipped without endless rework.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "blue",
  },
  {
    id: "t3",
    name: "Ananya Desai",
    designation: "VP, Customer Experience",
    company: "Meridian Partners",
    text: "She translated research into something the team could build—patterns we still extend across new surfaces.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "beige",
  },
  {
    id: "t4",
    name: "Lucas Weber",
    designation: "Product Lead",
    company: "Catalyst Ventures",
    text: "Editorial tone without fluff. Stakeholders trusted the flows because the rationale was always visible.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "peach",
  },
  {
    id: "t5",
    name: "Meera Krishnan",
    designation: "Program Manager",
    company: "Zinnov (collaborator)",
    text: "Collaboration was steady under pressure—clear artifacts, honest trade-offs, and respect for engineering constraints.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "green",
  },
  {
    id: "t6",
    name: "Daniel Foster",
    designation: "Engineering Manager",
    company: "Brightline Systems",
    text: "Specs were precise enough to estimate, flexible enough to iterate. That balance saved us weeks.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "blue",
  },
  {
    id: "t7",
    name: "Sofia Alvarez",
    designation: "Brand & Comms",
    company: "JK Cement (partner team)",
    text: "She connected narrative to UI without over-designing—our campaigns and product finally felt like one story.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "beige",
  },
  {
    id: "t8",
    name: "Arjun Mehta",
    designation: "Founder",
    company: "Studio Lattice",
    text: "Quiet confidence in the work. I’d partner again on anything that needs both strategy and sensitivity to users.",
    image: "/persona-placeholder.svg",
    linkedin: "https://www.linkedin.com/",
    color: "peach",
  },
];

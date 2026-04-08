export type HotspotData = {
  id: string;
  step: number;
  topPct: number;
  leftPct: number;
  label: string;
  header: string;
  body: string;
};

export const ARCHITECTURE_HOTSPOTS: HotspotData[] = [
  {
    id: "entry",
    step: 1,
    topPct: 75,
    leftPct: 75,
    label: "Entry / Threshold",
    header: "Entry / Threshold",
    body: "Good design begins by helping people arrive - gently, clearly, without hesitation.",
  },
  {
    id: "living",
    step: 2,
    topPct: 25,
    leftPct: 50,
    label: "Living Space",
    header: "Living Space",
    body: "I’ve learned to design for shared moments, where interaction feels natural, not forced.",
  },
  {
    id: "courtyard",
    step: 3,
    topPct: 50,
    leftPct: 50,
    label: "Courtyard",
    header: "Courtyard",
    body: "Not everything needs to move forward, I design for pauses, where people can simply be.",
  },
  {
    id: "garden",
    step: 4,
    topPct: 80,
    leftPct: 60,
    label: "Garden / Flow",
    header: "Garden / Flow",
    body: "When something is truly intuitive, it doesn’t feel designed at all — it just feels right.",
  },
  {
    id: "structure",
    step: 5,
    topPct: 10,
    leftPct: 65,
    label: "Structure / Arches",
    header: "Structure / Arches",
    body: "Constraints aren’t limitations — they quietly shape clarity and direction.",
  },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Designer shaped by spatial thinking and quiet intent — experience, education, and selected work.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

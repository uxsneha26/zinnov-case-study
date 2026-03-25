import type { Metadata } from "next";
import { Jost, Crimson_Text } from "next/font/google";
import "./globals.css";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Zinnov Case Study",
  description: "Designing Decision Intelligence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} bg-[#eef2e6] antialiased`}>
        {children}
      </body>
    </html>
  );
}
"use client";

import { motion } from "framer-motion";

export function Highlight({
  children,
  color = "#FFFAB8",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-middle">

      {/* Background animation */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{ backgroundColor: color }}
        className="absolute inset-0 origin-left rounded"
      />

      {/* Text */}
      <span className="relative z-10 px-1">
        {children}
      </span>

    </span>
  );
}
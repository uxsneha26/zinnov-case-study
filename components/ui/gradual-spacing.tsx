"use client";

import { motion } from "framer-motion";

interface GradualSpacingProps {
  text: string;
  className?: string;
}

export function GradualSpacing({ text, className }: GradualSpacingProps) {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap justify-center text-center ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: i * 0.12,
          }}
          className="mr-2 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

interface GradualSpacingProps {
  text: string;
  className?: string;
}

export function GradualSpacing({ text, className }: GradualSpacingProps) {
  return (
    <div className="text-center leading-tight">

      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-3">

          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (wordIndex * 0.1) + (i * 0.02),
              }}
              className={className}
            >
              {char}
            </motion.span>
          ))}

        </span>
      ))}

    </div>
  );
}
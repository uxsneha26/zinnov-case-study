import type { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  /** Merged onto the outer card container */
  className?: string;
};

const cardBase =
  "relative overflow-hidden rounded-2xl bg-neutral-100/80 shadow-md backdrop-blur-sm";

/**
 * Visual shell for bento grid tiles. Interaction logic lives in parent / slot content.
 */
export function BentoCard({ children, className }: BentoCardProps) {
  return (
    <div className={className ? `${cardBase} ${className}` : cardBase}>
      <div className="p-5">{children}</div>
    </div>
  );
}

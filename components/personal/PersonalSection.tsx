import { instrumentSerif } from "@/lib/fonts";
import { BentoCard } from "@/components/ui/BentoCard";
import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

/**
 * Stacked-scroll “takeover” after Architecture:
 * negative margin pulls this block up so it overlaps the previous sticky section,
 * while the tall inner track keeps one viewport pinned until scroll completes.
 */
export function PersonalSection() {
  return (
    <section
      id="personal-section"
      className="relative z-40 -mt-[100vh] w-full"
      aria-labelledby="personal-section-heading"
    >
      {/*
        Scroll runway: sticky child stays fixed for this distance, so the panel
        appears to slide over the section below without shifting prior layout
        (overlap is handled by margin + paint order, not by changing flow above).
      */}
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/BG2.png" // replace with your file
          alt="Background"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
      </div>
      <div className="relative z-30 -mt-[80vh] md:-mt-[80vh] lg:-mt-[90vh] w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Full-viewport panel: sits above Architecture (z-30) while user scrolls this track */}
          <div className="relative h-full w-full">
            {/* Background layer — placeholder until real photography/texture */}
            <div className="absolute inset-0 backdrop-blur-sm" />
            {/* replace with image later */}
            <div
              className="absolute inset-0 z-0"
              aria-hidden
            />

            {/* Readability tint over placeholder (or future photo) */}
            

            {/* Foreground: heading in flow with bento row (shared top baseline) */}
            <div className="relative z-10 flex h-full w-full flex-col items-start justify-start px-8 pb-10 pt-16 md:px-16 md:pb-14 md:pt-20 lg:px-24">
              <div className="flex w-full min-w-0 items-start gap-6">
                {/* A: intro copy + Card 1 */}
                <div className="flex min-w-0 flex-[1.2] flex-col gap-6">
                  <div>
                    <h2
                      id="personal-section-heading"
                      className={`${instrumentSerif.className} max-w-3xl text-balance text-4xl font-normal leading-[1.15] tracking-tight text-[#412F2F] md:text-5xl lg:text-6xl`}
                    >
                      Some personal stuff
                    </h2>
                    <p
                      className={`${caveat.className} mt-3 text-2xl text-[#412F2F] md:text-4xl`}
                    >
                      that shapes who I am
                    </p>
                  </div>
                  <BentoCard className="h-[260px] border border-red-500">
                    Card 1
                  </BentoCard>
                </div>

                {/* Center: Card 2 */}
                <BentoCard className="h-[320px] min-w-0 flex-[1] border border-blue-500">
                  Card 2
                </BentoCard>

                {/* B: Cards 3 & 4 */}
                <div className="flex min-w-0 flex-[0.8] flex-col gap-6">
                  <BentoCard className="h-[140px] border border-green-500">
                    Card 3
                  </BentoCard>
                  <BentoCard className="h-[180px] border border-amber-500">
                    Card 4
                  </BentoCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

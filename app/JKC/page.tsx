"use client";
import { Jost, Instrument_Serif, Crimson_Text, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Highlight } from "@/components/ui/highlight";
import { TriangulationSection } from "@/components/case-study/triangulation/TriangulationSection";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const bodyFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const quoteFont = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

// insight cards
const insightCards = [
    {
      title: "Fragmented Workflows",
      text: "Processes exist, but don’t connect across stakeholders.",
      bg: "bg-[#FDF1F1]",
    },
    {
      title: "Lack of Context",
      text: "Decisions are made without knowing the full picture.",
      bg: "bg-[#FFFBE6]",
    },
    {
      title: "No Real-Time Visibility",
      text: "Critical operations rely on calls instead of live tracking.",
      bg: "bg-[#EAF7F6]",
    },
    {
      title: "Manual Dependencies",
      text: "Key actions require manual intervention at multiple stages.",
      bg: "bg-[#FDF1F1]",
    },
    {
      title: "Limited Performance Insights",
      text: "Stakeholders cannot measure what’s working and what’s not.",
      bg: "bg-[#FFFBE6]",
    },
    {
      title: "Low User Trust",
      text: "When systems don’t support users, they look for alternatives.",
      bg: "bg-[#EAF7F6]",
    },
  ];
  

/*main section startes here*/ 
export default function JKCCaseStudyPage() {
  return (
    <main className="bg-[#F6F5EC]">

      {/* HERO */}
      <div className="min-h-screen flex flex-col justify-center px-6 pt-20 md:pt-28">
        
        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >

          <GradualSpacing
            text="Digital Ecosystem of Cement Supply Chain"
            className={`${headingFont.className} text-5xl md:text-6xl font-semibold mb-8 leading-tight text-gray-900`}
          />

<p className={`${bodyFont.className} mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto`}>
  Think of the complex network behind cement supply - internal sales teams tracking targets, dealers managing inventory, and on-ground stakeholders driving demand.

  Now imagine a{" "} <Highlight color="#F0D3D3"> unified digital ecosystem
  </Highlight>{" "}
  where they don’t operate in silos, but{" "}
  <Highlight color="#FFFAB8">
    coordinate seamlessly
  </Highlight>{" "}
  from lead generation to final delivery. A system designed not just to manage operations, but to enable{" "}
  <Highlight color="#FFFAB8">
    faster decisions, better visibility, and scalable growth
  </Highlight>.
</p>

        </motion.div>

        {/* ✨ IMAGE WITH GLOW (SEPARATE BLOCK) */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 relative flex justify-center items-center"
        >
          {/* Glow */}
          

          {/* Image */}
          <img
            src="/jkc/preview.png"
            alt="Zinnov Platform"
            className="relative z-10 rounded-xl shadow-2xl shadow-[#D5C2D6] w-full max-w-3xl transition duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

      </div>

      {/* PROJECT OVERVIEW */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full px-6 py-12 md:py-30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-[#dfe6d5]/70 bg-[#faf9f5] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 md:p-10 lg:p-12">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <div className="flex gap-3 items-stretch">
                  <div
                    className="w-[2px] shrink-0 rounded-full bg-[#9CC22A]"
                    aria-hidden
                  />
                  <h3
                    className={`${headingFont.className} text-base md:text-lg font-semibold text-gray-900 leading-tight`}
                  >
                    Timeline
                  </h3>
                </div>
                <p
                  className={`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}
                >
                  May 2024 - November 2024
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-stretch">
                  <div
                    className="w-[3px] shrink-0 rounded-full bg-[#9CC22A]"
                    aria-hidden
                  />
                  <h3
                    className={`${headingFont.className} text-base md:text-lg font-semibold text-gray-900 leading-tight`}
                  >
                    Role
                  </h3>
                </div>
                <p
                  className={`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}
                >
                  UX Designer + Strategist
                </p>
                <p
                  className={`${bodyFont.className} text-sm md:text-base text-gray-700 leading-relaxed`}
                >
                  Led the design of a multi-application ecosystem, translating complex supply workflows into structured, role-based digital experiences.

Worked across business, product, and engineering teams to align operational goals with intuitive user journeys.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-stretch">
                  <div
                    className="w-[3px] shrink-0 rounded-full bg-[#9CC22A]"
                    aria-hidden
                  />
                  <h3
                    className={`${headingFont.className} text-base md:text-lg font-semibold text-gray-900 leading-tight`}
                  >
                    Product Impact
                  </h3>
                </div>
                <div
                  className={`${bodyFont.className} text-sm md:text-lg text-gray-700 leading-relaxed`}
                >
                  <p>
                  Designed a unified platform ecosystem connecting internal teams, 
                  dealers, and external stakeholders — transforming fragmented supply 
                  operations into a streamlined, insight-driven system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CONTEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 py-20 text-left"
      >
        
        <GradualSpacing
          text="A Complex, Fragmented Ecosystem"
          className={`${headingFont.className} text-3xl md:text-4xl font-semibold mb-6 text-gray-900`}
        />

        <p className= {`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}>

        The cement supply chain operates across a highly distributed ecosystem 
        involving multiple stakeholders like contractors, retailers, and industry influencers. Each 
        stakeholder functions with 
        <Highlight color="#FFFAB8">different priorities, disconnected tools, and varying 
        levels of digital adoption.</Highlight>{" "}
        <br />
        <br />
        This leads to <Highlight color="#F0D3D3">fragmented workflows, delayed communication, 
        and limited visibility</Highlight>{" "} across the supply pipeline.
        </p>

      </motion.div>
      {/* ✨ QUOTE */}
      <div className="max-w-md mx-auto px-6 py-12 border-l-2 border-[#d6dccb] pl-6">
        
        <p
          className={`${quoteFont.className} text-2xl md:text-xl leading-snug text-gray-800`}
        >
          The challenge was not just to design interfaces, but to create a connected system that{" "}
          
          <Highlight color="#E6F0AA">
          aligns business operations
          </Highlight>{" "}
          
          with{" "}
          
          <Highlight color="#C7F2F0">
          real-world execution.
          </Highlight>{" "}
        </p>

      </div>

      {/* PROBLEM SCENARIO with comic strip */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-left"
      >
        {/* SECTION 1: CONTEXT INTRO */}
        <h2
          className={`${headingFont.className} text-3xl md:text-4xl font-semibold mb-6 leading-tight text-gray-900`}
        >
          Before designing a system, it was critical to understand how the ecosystem currently operates....
        </h2>

        <p className= {`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}>
        While each stakeholder performs their role efficiently, the lack of a connected system leads 
        to gaps in communication, visibility, and decision-making.
        </p>

        {/* SECTION 2: COMIC STRIP */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            "/jkc/comic/1.png",
            "/jkc/comic/2.png",
            "/jkc/comic/3.png",
            "/jkc/comic/4.png",
            "/jkc/comic/5.png",
            "/jkc/comic/6.png",
          ].map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt={`Scenario panel ${index + 1}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="w-full rounded-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out hover:scale-[1.015]"
            />
          ))}
        </div>

        {/* SECTION 3: INSIGHT AFTER SCENARIO */}
        <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {insightCards.map((card) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className={`${card.bg} rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] p-6 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_12px_24px_rgba(0,0,0,0.09)] text-left`}
              >
                <h3
                  className={`${bodyFont.className} text-2xl leading-snug text-gray-900 mb-3`}
                >
                  {card.title}
                </h3>
                <p
                  className={`${quoteFont.className} text-lg md:text-xl leading-snug text-gray-700`}
                >
                  "{card.text}"
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <TriangulationSection/>


    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-16 md:py-24 px-6 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-left mb-10 md:mb-14">
          <h2
            className={`${headingFont.className} text-3xl md:text-4xl font-semibold mb-5 leading-tight text-gray-900`}
          >
            Structuring the System at Scale
          </h2>
          <p
            className={`${headingFont.className} text-lg md:text-xl text-gray-800 font-medium mb-6 leading-snug`}
          >
            Designing for this ecosystem meant going beyond screens and features.
          </p>
          <p
            className={`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}
          >
            

We mapped end-to-end user flows across stakeholders — tracing how leads are generated, orders are processed, and decisions are made across the system.

This revealed critical gaps and overlaps, allowing us to restructure workflows into a cohesive, scalable experience that supports real-world operations.
          </p>
        </div>

        <div className="relative w-full rounded-2xl overflow-hidden border border-[#dfe6d5] shadow-[0_18px_44px_rgba(0,0,0,0.08)] bg-[#eef0e8]">
          <img
            src="/jkc/design/information-architecture.png"
            alt="all applications information architecture"
            className="w-full h-[650px] object-cover rounded-2xl"
          />
        </div>
        </div>
      </motion.section>

  

{/* main wrapper ends here */}
    </main>
  );
}
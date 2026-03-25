"use client";
import { useState } from "react";
import { Jost, Caveat, Crimson_Text } from "next/font/google";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Highlight } from "@/components/ui/highlight";
import { motion, AnimatePresence } from "framer-motion";

const headingFont = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const quoteFont = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});

const bodyFont = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const insightCards = [
  {
    title: "Fragmented Knowledge",
    text: "Information exists, but rarely connects into a complete picture.",
    bg: "bg-[#FDF1F1]",
  },
  {
    title: "Outdated Signals",
    text: "Available insights often fail to reflect current market realities.",
    bg: "bg-[#FFFBE6]",
  },
  {
    title: "Lack of Context",
    text: "Data is presented without the ‘why’ needed for confident decisions.",
    bg: "bg-[#EAF7F6]",
  },
  {
    title: "Manual Synthesis",
    text: "Leaders spend time stitching insights instead of making decisions.",
    bg: "bg-[#FDF1F1]",
  },
  {
    title: "Validation Burden",
    text: "Every insight needs independent verification before it can be trusted.",
    bg: "bg-[#FFFBE6]",
  },
  {
    title: "Decision Uncertainty",
    text: "Even after effort, clarity remains low and risk stays high.",
    bg: "bg-[#EAF7F6]",
  },
];

const serviceFlowNodes = [
  {
    id: "entry",
    title: "Entry Point",
    text: "GCC users are notified of new research or enter the platform to explore insights based on a business need",
    bg: "bg-[#FFFBE6]",
  },
  {
    id: "exploration",
    title: "Exploration Layer",
    text: "Users search and browse reports, insights, and benchmarks relevant to their context\n• Existing research acts as the primary resolution layer\n• Search and discovery determine next steps",
    bg: "bg-[#EEF7EC]",
  },
  {
    id: "split",
    title: "Decision Path Split",
    levels: [
      "Resolved through existing research and insights on the platform",
      "Requires additional analysis and synthesis on top of existing research",
      "Escalates into a custom engagement for bespoke research",
    ],
    bg: "bg-[#EAF7F6]",
  },
  {
    id: "intervention",
    title: "Internal Intervention",
    text: "Internal teams intervene selectively:\n• Analysts support report augmentation\n• Customer Relations and Business Development engage for deeper needs",
    bg: "bg-[#FFFBE6]",
  },
  {
    id: "consumption",
    title: "Consumption",
    text: "Users consume insights, validate them externally, and contextualise findings for internal decision-making",
    bg: "bg-[#EEF7EC]",
  },
  {
    id: "loop",
    title: "Loop Back",
    text: "Insights are shared upward for leadership consumption while the platform remains a touchpoint for ongoing exploration",
    bg: "bg-[#FFFBE6]",
  },
];

const painPointNotes: Record<string, string> = {
  exploration: "Too many sources, no clear starting point",
  split: "Unclear which path applies to my context",
  intervention: "Heavy reliance on manual support",
  consumption: "Validation happens outside the platform",
  loop: "No clear continuity of insights over time",
};

export default function Home() {
  const [view, setView] = useState<"flow" | "pain">("flow");
  const renderServiceFlow = (withPainPoints: boolean) => (
    <div className="mt-8 rounded-2xl border border-[#dfe6d5] p-4 md:p-6 bg-[#f8faf4]">
      <div className="flex flex-col items-center gap-12">
        <div className="relative w-full">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10 hidden md:block" />
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {serviceFlowNodes.slice(0, 3).map((node, index) => (
              <div key={node.id} className="w-full md:flex-1">
                {index > 0 && (
                  <div className="hidden md:flex items-center justify-center mb-4">
                    <div className="h-px w-12 bg-gray-300" />
                    <div className="text-gray-400 text-2xl mx-2">→</div>
                  </div>
                )}
                <motion.article
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  viewport={{ once: true }}
                  className={`relative ${node.bg} rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.07)] p-5 md:p-6 transition hover:shadow-md hover:-translate-y-1 w-full`}
                >
                  <h3
                    className={`${headingFont.className} text-lg md:text-xl font-medium text-gray-900 mb-3`}
                  >
                    {node.title}
                  </h3>
                  {Array.isArray(node.levels) ? (
                    <div className="space-y-3 border-l-2 border-dashed border-gray-300 pl-4">
                      {node.levels.map((level, levelIndex) => (
                        <div
                          key={level}
                          className="bg-white/70 border border-white/60 rounded-lg p-3"
                        >
                          <p
                            className={`${bodyFont.className} text-base md:text-lg text-gray-700 leading-snug`}
                          >
                            <span className="font-semibold">
                              Level {levelIndex + 1}:
                            </span>{" "}
                            {level}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p
                      className={`${bodyFont.className} whitespace-pre-line text-base md:text-lg text-gray-700 leading-relaxed`}
                    >
                      {node.text}
                    </p>
                  )}
                  {withPainPoints && painPointNotes[node.id] && (
                    <div className="mt-4 md:mt-0 md:absolute md:-top-4 md:-right-3 rotate-[-2deg] md:rotate-1 bg-[#FDECEC] border border-dashed border-[#e4b9b9] rounded-lg px-3 py-2 shadow-sm max-w-[220px]">
                      <p
                        className={`${quoteFont.className} text-lg leading-snug text-gray-700`}
                      >
                        {painPointNotes[node.id]}
                      </p>
                    </div>
                  )}
                </motion.article>
              </div>
            ))}
          </div>
        </div>

        <div className="text-gray-400 text-2xl">↓</div>

        <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {serviceFlowNodes.slice(3, 5).map((node, index) => (
            <div key={node.id} className="w-full md:flex-1">
              {index > 0 && (
                <div className="hidden md:flex items-center justify-center mb-4">
                  <div className="h-px w-12 bg-gray-300" />
                  <div className="text-gray-400 text-2xl mx-2">→</div>
                </div>
              )}
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                viewport={{ once: true }}
                className={`relative ${node.bg} rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.07)] p-5 md:p-6 transition hover:shadow-md hover:-translate-y-1 w-full`}
              >
                <h3
                  className={`${headingFont.className} text-lg md:text-xl font-medium text-gray-900 mb-3`}
                >
                  {node.title}
                </h3>
                <p
                  className={`${bodyFont.className} whitespace-pre-line text-base md:text-lg text-gray-700 leading-relaxed`}
                >
                  {node.text}
                </p>
                {withPainPoints && painPointNotes[node.id] && (
                  <div className="mt-4 md:mt-0 md:absolute md:-top-4 md:-right-3 rotate-[-2deg] md:rotate-1 bg-[#FDECEC] border border-dashed border-[#e4b9b9] rounded-lg px-3 py-2 shadow-sm max-w-[220px]">
                    <p
                      className={`${quoteFont.className} text-lg leading-snug text-gray-700`}
                    >
                      {painPointNotes[node.id]}
                    </p>
                  </div>
                )}
              </motion.article>
            </div>
          ))}
        </div>

        <div className="text-gray-400 text-2xl">↓</div>

        <div className="w-full md:max-w-md">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className={`relative ${serviceFlowNodes[5].bg} rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.07)] p-5 md:p-6 transition hover:shadow-md hover:-translate-y-1 w-full`}
          >
            <h3
              className={`${headingFont.className} text-lg md:text-xl font-medium text-gray-900 mb-3`}
            >
              {serviceFlowNodes[5].title}
            </h3>
            <p
              className={`${bodyFont.className} whitespace-pre-line text-base md:text-lg text-gray-700 leading-relaxed`}
            >
              {serviceFlowNodes[5].text}
            </p>
            {withPainPoints && painPointNotes[serviceFlowNodes[5].id] && (
              <div className="mt-4 md:mt-0 md:absolute md:-top-4 md:-right-3 rotate-[-2deg] md:rotate-1 bg-[#FDECEC] border border-dashed border-[#e4b9b9] rounded-lg px-3 py-2 shadow-sm max-w-[220px]">
                <p
                  className={`${quoteFont.className} text-lg leading-snug text-gray-700`}
                >
                  {painPointNotes[serviceFlowNodes[5].id]}
                </p>
              </div>
            )}
          </motion.article>
        </div>
      </div>
    </div>
  );
  const Card = ({ title, children, color }: any) => (
    <div
      className="relative rounded-xl px-4 py-4 w-[160px] shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: color }}
    >
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-snug">{children}</p>
    </div>
  );
  
  const Arrow = () => (
    <div className="flex items-center justify-center text-gray-400 text-xl">
      →
    </div>
  );
  
  const PainWrapper = ({ children, note }: any) => (
    <div className="relative">
      {children}
  
      <div className="absolute -top-6 left-6 rotate-[-6deg] bg-[#FDECEC] border border-[#F5B5B5] text-[#B23A3A] text-xs px-3 py-1 rounded-md shadow-sm whitespace-nowrap">
        {note}
      </div>
    </div>
  );
  return (
    <main className="bg-[#eef2e6]">

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
            text="Designing Decision Intelligence"
            className={`${headingFont.className} text-5xl md:text-6xl font-semibold mb-8 leading-tight text-gray-900`}
          />

          <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Think of the leaders who run{" "}
            
            <Highlight color="#F0D3D3">
              offshore strategy and innovation
            </Highlight>{" "}
            
            centres for global companies. Now imagine a platform where they don’t just read research, they{" "}
            
            <Highlight color="#FFFAB8">discuss</Highlight>{" "}
            <Highlight color="#FFFAB8">benchmark</Highlight>{" "}
            <Highlight color="#FFFAB8">and use</Highlight>{" "}
            
            it to make decisions.
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
          <div className="absolute w-[600px] h-[600px] bg-[#E6F0AA] rounded-full blur-[140px] opacity-40 z-0"></div>

          {/* Image */}
          <img
            src="/platform-preview.png"
            alt="Zinnov Platform"
            className="relative z-10 rounded-xl shadow-2xl w-full max-w-3xl transition duration-500 ease-out hover:scale-[1.015] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

      </div>

      {/* CONTEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 py-24 text-left"
      >
        
        <GradualSpacing
          text="Who is Zinnov?"
          className={`${headingFont.className} text-3xl md:text-4xl font-semibold mb-6 text-gray-900`}
        />

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Zinnov works closely with teams of global companies that run their strategy, innovation, and technology centers out of India. These teams, often called{" "}
          
          <Highlight color="#F0D3D3">
            Global Capability Centers
          </Highlight>{" "}
          
          play a critical role in driving{" "}
          
          <Highlight color="#FFFAB8">
            growth decisions, market expansion
          </Highlight>{" "}
          
          and long-term planning.
        </p>

      </motion.div>
      {/* ✨ QUOTE */}
      <div className="max-w-md mx-auto px-6 py-12 border-l-2 border-[#d6dccb] pl-6">
        
        <p
          className={`${quoteFont.className} text-2xl md:text-xl leading-snug text-gray-800`}
        >
          “Thus, the project explores how that{" "}
          
          <Highlight color="#E6F0AA">
            knowledge ecosystem
          </Highlight>{" "}
          
          could take shape as a{" "}
          
          <Highlight color="#C7F2F0">
            digital product
          </Highlight>{" "}
          
          built for leaders who think globally and act decisively.”
        </p>

      </div>

      {/* PROBLEM SCENARIO */}
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
          Let me explain by laying down a scenario...
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Imagine you are a strategy leader at a Global Capability Center, tasked
          with evaluating expansion opportunities and making high-stakes business
          decisions.
          <br />
          <br />
          You turn to available research, reports, and benchmarking tools to
          guide your thinking.
        </p>

        {/* SECTION 2: COMIC STRIP */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {[
            "/scenario-1.png",
            "/scenario-2.png",
            "/scenario-3.png",
            "/scenario-4.png",
            "/scenario-5.png",
            "/scenario-6.png",
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

      {/* CURRENT SERVICE FLOW */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full py-16 md:py-20"
>

  {/* TEXT */}
  <div className="max-w-3xl mx-auto px-6 text-left">

    <p className={`${headingFont.className} text-sm tracking-[0.14em] uppercase text-gray-600 mb-3`}>
      Discover
    </p>

    <h2 className={`${headingFont.className} text-3xl md:text-4xl font-semibold mb-6 leading-tight text-gray-900`}>
      What Zinnov&apos;s service flow looks like
    </h2>

    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
      Before reimagining the experience, we mapped how Zinnov&apos;s service
      currently operates across user journeys, research layers, and internal
      interventions.
      <br /><br />
      While the system is robust, it relies heavily on user interpretation,
      manual validation, and fragmented pathways to arrive at meaningful
      decisions.
    </p>
  </div>

  {/* TOGGLE + FLOW */}
  <div className="max-w-7xl mx-auto px-6 mt-12">

    {/* Toggle */}
    <div className="flex justify-center mb-10">
      <div className="bg-white/60 backdrop-blur rounded-full p-1 flex gap-1 shadow-sm">
        <button
          onClick={() => setView("flow")}
          className={`px-4 py-2 rounded-full text-sm transition ${
            view === "flow" ? "bg-black text-white" : "text-gray-600"
          }`}
        >
          Service Flow
        </button>
        <button
          onClick={() => setView("pain")}
          className={`px-4 py-2 rounded-full text-sm transition ${
            view === "pain" ? "bg-black text-white" : "text-gray-600"
          }`}
        >
          Pain Points
        </button>
      </div>
    </div>

    <AnimatePresence mode="wait">

      {/* NORMAL FLOW */}
      {(view === "flow" || view === "pain") && (
        <motion.div
        key={view}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="w-full flex justify-center">
          <div className="flex items-center justify-center gap-4">

    {/* Entry Point */}
    {view === "pain" ? (
      <PainWrapper note="Unclear entry point">
        <Card color="#F6F1DE" title="Entry Point">
          GCC users enter or are notified of new research
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#F6F1DE" title="Entry Point">
        GCC users enter or are notified of new research
      </Card>
    )}

    <Arrow />

    {/* Exploration */}
    {view === "pain" ? (
      <PainWrapper note="Fragmented + scattered sources">
        <Card color="#EAF4EC" title="Exploration Layer">
          Users browse reports, insights, and benchmarks
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#EAF4EC" title="Exploration Layer">
        Users browse reports, insights, and benchmarks
      </Card>
    )}

    <Arrow />

    {/* Decision Split */}
    {view === "pain" ? (
      <PainWrapper note="No clear decision pathway">
        <Card color="#EAF0F6" title="Decision Split">
          Level 1 → Existing insights <br />
          Level 2 → Additional analysis <br />
          Level 3 → Custom engagement
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#EAF0F6" title="Decision Split">
        Level 1 → Existing insights <br />
        Level 2 → Additional analysis <br />
        Level 3 → Custom engagement
      </Card>
    )}

    <Arrow />

    {/* Internal Intervention */}
    {view === "pain" ? (
      <PainWrapper note="Heavy dependency on manual support">
        <Card color="#F6F1DE" title="Internal Intervention">
          Analysts + business teams support deeper needs
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#F6F1DE" title="Internal Intervention">
        Analysts + business teams support deeper needs
      </Card>
    )}

    <Arrow />

    {/* Consumption */}
    {view === "pain" ? (
      <PainWrapper note="Validation happens outside system">
        <Card color="#EAF4EC" title="Consumption">
          Users validate + contextualise insights
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#EAF4EC" title="Consumption">
        Users validate + contextualise insights
      </Card>
    )}

    <Arrow />

    {/* Loop Back */}
    {view === "pain" ? (
      <PainWrapper note="No continuous feedback loop">
        <Card color="#F6F1DE" title="Loop Back">
          Insights feed back into ongoing exploration
        </Card>
      </PainWrapper>
    ) : (
      <Card color="#F6F1DE" title="Loop Back">
        Insights feed back into ongoing exploration
      </Card>
    )}

  </div>
</div>
        </motion.div>
      )}

      {/* PAIN FLOW */}
      

    </AnimatePresence>

  </div>

</motion.section>


    </main>
  );
}
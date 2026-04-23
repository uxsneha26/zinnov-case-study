"use client";
import { Jost, Instrument_Serif, Crimson_Text, Caveat } from "next/font/google";
import { motion } from "framer-motion";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Highlight } from "@/components/ui/highlight";
import { TriangulationSection } from "@/components/case-study/triangulation/TriangulationSection";
import { ReactNode } from "react";

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

const structuredAnnotationPalette = [
    { bg: "bg-[#F6E8B1]/40", circle: "bg-[#EEDB9A]/70" },
    { bg: "bg-[#EAF7EF]/50", circle: "bg-[#c8e9d8]/70" },
    { bg: "bg-[#EAF0FF]/50", circle: "bg-[#d4dcfa]/70" },
    { bg: "bg-[#FDECEC]/50", circle: "bg-[#f5c8c8]/70" },
  ];

const editorialHighlightClass = "bg-[#E6EDC8] px-1.5 py-0.5 rounded-sm";

const impactCardGlassShellClass =
  "relative rounded-2xl p-7 bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.10)] overflow-hidden transition-all duration-300 ease-out hover:shadow-[0_18px_60px_rgba(0,0,0,0.15)] hover:-translate-y-1 isolate";

const impactCardTintLayerClasses = [
  "absolute inset-0 rounded-2xl bg-[rgba(244,222,229,0.25)] pointer-events-none",
  "absolute inset-0 rounded-2xl bg-[rgba(234,244,236,0.25)] pointer-events-none",
  "absolute inset-0 rounded-2xl bg-[rgba(234,240,255,0.25)] pointer-events-none",
] as const;

const impactMetricBaseClass = `${headingFont.className} text-5xl md:text-6xl leading-none tracking-tight`;

const impactMetricToneClasses = [
  "text-[#9C7A73]",
  "text-[#5F807A]",
  "text-[#6E7F99]",
] as const;

const cards = [
  {
    title: "35%",
    text: "reduction in manual coordination across tools",
  },
  {
    title: "2x",
    text: "faster response time to client queries",
  },
  {
    title: "50%",
    text: "improvement in visibility across workflows and requests",
  },
];

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

  
type EditorialPageBreakerSectionProps = {
    label: string;
    heading: string;
    body: ReactNode;
    quote: string;
  };
  
type DesignDirectionBlockProps = {
    sectionLabel: string;
    title: string;
    description: string;
    userFlowSrc: string;
    userFlowAlt: string;
    imageSrc: string;
    imageAlt: string;
    annotations: DesignAnnotationData[];
  };

  type DesignAnnotationData = {
    n: number;
    title: string;
    body: string;
  };


  const designDirectionSections: DesignDirectionBlockProps[] = [
    // CTS section
    {
      sectionLabel: "Customer Engagement & Technical Services",
      title: "Staying on Top of Lead Lifecycle",
      description:
        "CTS officers operate at the very start of the supply chain, where speed and clarity directly impact conversion. The experience was designed to help them capture, track, and act on leads without losing momentum — ensuring that no opportunity falls through gaps between systems or stakeholders.",
      userFlowSrc: "/jkc/theme/cts.png",
      userFlowAlt: "Home experience design direction",
      imageSrc: "/jkc/design/cts.png",
      imageAlt: "Home experience design direction",
      annotations: [
        {
          n: 1,
          title: "Structured lead capture",
          body: "Standardized inputs for site details, requirements, and location to reduce ambiguity.",
        },
        {
          n: 2,
          title: "Clear assignment visibility",
          body: "Real-time status of dealer allocation and ownership of each lead.",
        },
        {
          n: 3,
          title: "Conversion-focused tracking",
          body: "Lead stages mapped clearly from creation to fulfillment.",
        },
        {
          n: 4,
          title: "Actionable next steps",
          body: "Prompts and nudges to move leads forward instead of passive tracking.",
        },
      ],
    },
    // SFA section
    {
      sectionLabel: "Sales Operation Management",
      title: "Enabling the System Behind the Scenes",
      description:
        "SFA acts as the backbone of the ecosystem — configuring how different stakeholders interact with the system. The focus was to simplify complex administrative workflows like onboarding, role management, and incentive structuring, ensuring that the system remains scalable and adaptable.",
      userFlowSrc: "/jkc/theme/sfa.png",
      userFlowAlt: "Community experience design direction",
      imageSrc: "/jkc/design/sfa.png",
      imageAlt: "Community experience design direction",
      annotations: [
        {
          n: 1,
          title: "Role-based access control",
          body: "Clear mapping of permissions across CTS, dealers, and retailers.",
        },
        {
          n: 2,
          title: "Streamlined onboarding flows",
          body: "Faster setup for new users with guided configurations.",
        },
        {
          n: 3,
          title: "Incentive configuration made flexible",
          body: "Easy creation and management of schemes across regions and roles.",
        },
        {
          n: 4,
          title: "Centralized system governance",
          body: "A single source to manage users, rules, and performance structures.",
        },
      ],
    },

    // Dealer section
    {
      sectionLabel: "Orders and Business Management",
      title: "Managing Orders, Performance & Relationships",
      description:
        "Dealers sit at the center of execution — balancing incoming demand with supply, logistics, and relationships. The experience was designed to give them better control and visibility across orders, retailer activity, and performance metrics.",
      userFlowSrc: "/jkc/theme/dealer.png",
      userFlowAlt: "Reports experience design direction",
      imageSrc: "/jkc/design/dealer.png",
      imageAlt: "Reports experience design direction",
      annotations: [
        {
          n: 1,
          title: "Unified order management",
          body: "All incoming requests consolidated into a single actionable view.",
        },
        {
          n: 2,
          title: "Retailer activity visibility",
          body: "Insights into who is ordering, how frequently, and at what scale.",
        },
        {
          n: 3,
          title: "Performance tracking",
          body: "Clear metrics on fulfillment, volume, and growth over time.",
        },
        {
          n: 4,
          title: "Relationship strengthening tools",
          body: "Better visibility enables proactive engagement with retailers and contractors.",
        },
      ],
    },

    // Dealer section
    {
      sectionLabel: "",
      title: "",
      description:
        "",
      userFlowSrc: "",
      userFlowAlt: "",
      imageSrc: "/jkc/design/dealer1.png",
      imageAlt: "Reports experience design direction",
      annotations: [
        {
          n: 1,
          title: "Unified order management",
          body: "All incoming requests consolidated into a single actionable view.",
        },
        {
          n: 2,
          title: "Retailer activity visibility",
          body: "Insights into who is ordering, how frequently, and at what scale.",
        },
        {
          n: 3,
          title: "Performance tracking",
          body: "Clear metrics on fulfillment, volume, and growth over time.",
        },
        {
          n: 4,
          title: "Relationship strengthening tools",
          body: "Better visibility enables proactive engagement with retailers and contractors.",
        },
      ],
    },

    // Retailer section
    {
        sectionLabel: "Retails Sales Management",
        title: "Simplifying Ordering & Incentive Awareness",
        description:
          "Retailers operate in high-frequency, low-margin environments where ease and speed matter most. The experience focused on making ordering seamless while ensuring they clearly understand the benefits and incentives tied to their actions.",
        userFlowSrc: "/jkc/theme/retailer.png",
        userFlowAlt: "Reports experience design direction",
        imageSrc: "/jkc/design/retailer.png",
        imageAlt: "Reports experience design direction",
        annotations: [
          {
            n: 1,
            title: "Quick order placement",
            body: "Reduced friction in placing and repeating orders.",
          },
          {
            n: 2,
            title: "Transparent delivery expectations",
            body: "Better clarity on timelines and fulfillment status.",
          },
          {
            n: 3,
            title: "Incentive visibility",
            body: "Clear understanding of schemes, rewards, and earnings.",
          },
          {
            n: 5,
            title: "Decision confidence",
            body: "Improved experience reduces dependency on external follow-ups or guesswork.",
          },
        ],
      },
  ];

  function DesignDirectionBlock({
    sectionLabel,
    title,
    description,
    userFlowSrc,
    userFlowAlt,
    imageSrc,
    imageAlt,
    annotations,
  }: DesignDirectionBlockProps) {
  
    const hasHeader = sectionLabel || title || description;
    const hasUserFlow = userFlowSrc;
  
    return (
      <div className="max-w-5xl mx-auto">
  
        {/* ✅ HEADER */}
        {hasHeader && (
          <div className="max-w-3xl mx-auto text-left">
            {sectionLabel && (
              <p className={`${headingFont.className} text-sm tracking-[0.14em] uppercase text-gray-600 mb-3`}>
                {sectionLabel}
              </p>
            )}
  
            {title && (
              <h3 className={`${headingFont.className} text-2xl md:text-3xl font-semibold mb-5 leading-tight text-gray-900`}>
                {title}
              </h3>
            )}
  
            {description && (
              <p className={`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed`}>
                {description}
              </p>
            )}
          </div>
        )}
  
        {/* ✅ USER FLOW */}
        {hasUserFlow && (
          <div className="mt-16 md:mt-20 relative w-full rounded-2xl overflow-hidden border border-[#dfe6d5] shadow-[0_18px_44px_rgba(0,0,0,0.08)] bg-[#eef0e8]">
            <img
              src={userFlowSrc}
              alt={userFlowAlt}
              className="w-full min-h-[650px] object-cover opacity-90 rounded-2xl"
            />
          </div>
        )}
  
        {/* ✅ ANNOTATION BLOCK (always visible) */}
        <div className="mt-10 md:mt-12 rounded-2xl border border-[#dfe6d5] bg-[#f8faf4] p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-[2.4fr_1fr] gap-12 items-start">
  
            <div className="min-w-0 w-full rounded-2xl overflow-hidden border border-[#e7e5df] shadow-md bg-[#f8f7f4]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
  
            <div className="flex flex-col gap-6 items-start">
              {annotations.map((a, index) => {
                const palette =
                  structuredAnnotationPalette[
                    index % structuredAnnotationPalette.length
                  ];
  
                return (
                  <div
                    key={a.n}
                    className={[
                      palette.bg,
                      "w-[260px] shrink-0 border border-[#dfe6d5] rounded-md shadow-sm p-3 flex gap-2 items-start",
                      "hover:scale-[1.02] transition-transform duration-200 ease-out",
                    ].join(" ")}
                  >
                    <div
                      className={`h-5 w-5 shrink-0 rounded-full ${palette.circle} flex items-center justify-center text-[10px] font-medium text-gray-900`}
                    >
                      {a.n}
                    </div>
  
                    <div className="min-w-0">
                      <p className={`${headingFont.className} font-semibold text-sm text-gray-900`}>
                        {a.title}
                      </p>
                      <p className={`${bodyFont.className} text-xs text-gray-600 mt-1 leading-snug`}>
                        {a.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
  
          </div>
        </div>
  
      </div>
    );
  }
  
  function EditorialPageBreakerSection({
  label,
  heading,
  body,
  quote,
}: EditorialPageBreakerSectionProps) {
  return (
    <section className="py-20 md:py-20 bg-[#f6f5ef]">
      <div className="max-w-3xl mx-auto text-center px-6 md:px-0 space-y-12 md:space-y-20">
        <p
          className={`${headingFont.className} text-xs uppercase tracking-[0.2em] text-gray-500`}
        >
          
        </p>
        <h2
          className={`${headingFont.className} text-3xl md:text-4xl font-semibold text-gray-900 leading-tight`}
        >
          {heading}
        </h2>
        <p
          className={`${bodyFont.className} text-lg md:text-xl leading-relaxed text-gray-700`}
        >
          {body}
        </p>

        <div className="relative max-w-2xl mx-auto pt-2 pb-10 md:pb-12 px-2">
          <span
            aria-hidden
            className={`${bodyFont.className} absolute top-1 -left-0 md:left-0 text-[120px] leading-none text-[#9CC22A] opacity-70 select-none pointer-events-none`}
          >
            &ldquo;
          </span>
          <blockquote
            className={`${bodyFont.className} relative z-10 mx-auto text-4xl text-[#9CC22A] text-center px-8 md:px-10 leading-snug font-normal`}
          >
            {quote}
          </blockquote>
          <span
            aria-hidden
            className={`${bodyFont.className} absolute top-32 -right-1 md:right-1 text-[120px] leading-none text-[#9CC22A] opacity-70 select-none pointer-events-none`}
          >
            &rdquo;
          </span>
        </div>
      </div>
    </section>
  );
}

function AdminImpactSection() {
  return (
    <section className="w-full py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-left">
        <div className="max-w-3xl mb-12">
          <h2
            className={`${headingFont.className} text-3xl md:text-4xl font-semibold text-gray-900 mb-4`}
          >
            <p
              className={`${headingFont.className} text-sm tracking-[0.14em] font-normal uppercase text-gray-600 mb-3`}
            >
              IMPACT
            </p>
            Strengthening Business and Operational Efficiency
          </h2>
          <p
            className={`${bodyFont.className} text-lg text-gray-700 leading-relaxed`}
          >
            The internal platform equips teams with better visibility, reduced
            coordination overhead, and faster execution across workflows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={card.title} className={impactCardGlassShellClass}>
              <div
                className={
                  impactCardTintLayerClasses[
                    index % impactCardTintLayerClasses.length
                  ]
                }
              />
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_60%)] pointer-events-none" />
              <div className="relative z-10">
                <h3
                  className={`${impactMetricBaseClass} ${
                    impactMetricToneClasses[
                      index % impactMetricToneClasses.length
                    ]
                  }`}
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255,255,255,0.4), 0 2px 6px rgba(0,0,0,0.08)",
                  }}
                >
                  {card.title}
                </h3>
                <div className="w-8 h-[1.5px] bg-black/10 my-3 rounded-full backdrop-blur-sm" />
                <p
                  className={`${bodyFont.className} text-base text-gray-800/80 leading-relaxed mt-3 max-w-[85%]`}
                >
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

{/* Information Architecture */}
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
            We mapped end-to-end user flows across stakeholders — tracing how leads are generated, 
            orders are processed, and decisions are made across the system.
            This revealed critical gaps and overlaps, allowing us to restructure workflows into a 
            <Highlight color="#FFFAB8">cohesive, scalable experience</Highlight> that supports real-world operations.
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

  {/* DESIGN DIRECTIONS */}
  <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full border-t border-[#dfe6d5]/60"
      >
        <EditorialPageBreakerSection
          label="PRODUCT SYNTHESIS"
          heading="Design Directions"
          body={
            <>
              Bringing structure to a fragmented ecosystem required more than interface 
              improvements - it demanded clarity in how information flows, decisions are made, 
              and stakeholders interact.
              We focused on simplifying complexity at every touchpoint: 
              <span className={editorialHighlightClass}>making actions more intuitive,</span>{" "} 
              surfacing the right information at the right time, and ensuring that each role operates 
              with confidence, not guesswork.
            </>
          }
          quote="Design is not about creating one solution for all, but about shaping the right experience for each role within a shared system."
        />

        <div className="max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-8 md:pt-12 space-y-20 md:space-y-28">
          {designDirectionSections.map((section) => (
            <DesignDirectionBlock key={section.title} {...section} />
          ))}
        </div>
      </motion.section>

      {/* Impact Metrics */}
      <AdminImpactSection />

      {/* End Note */}

      <section className="w-full mt-24 md:mt-32 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto px-6">
        <div
          className="mt-20 md:mt-28 max-w-3xl mx-auto rounded-2xl p-8 md:p-10 bg-white/40 backdrop-blur-md border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.06)] text-center"
        >
          <h2
            className={`${headingFont.className} text-3xl md:text-4xl font-semibold text-gray-900 mb-6 md:mb-8`}
          >
            End note
          </h2>
          <div
            className={`${bodyFont.className} text-lg md:text-xl text-gray-700 leading-relaxed space-y-5`}
          >
            <p>
              Working on this project shifted how I think about design, from{" "}
              <span className="bg-[] px-1.5 py-0.5 rounded">
                assembling screens
              </span>{" "}
              to{" "}
              <span className="bg-[#E6F0AA] px-1.5 py-0.5 rounded">
                shaping systems that support real decisions
              </span>.
            </p>
            <p>
              It made me more conscious of{" "}
              <span className="bg-[] px-1.5 py-0.5 rounded">
                clarity, structure
              </span>, and the role of{" "}
              <span className="bg-[] px-1.5 py-0.5 rounded">
                context in reducing effort
              </span>{" "}
              for users. More importantly, it reinforced that{" "}
              <span className="bg-[#F0D3D3] px-1.5 py-0.5 rounded">
                good design isn&apos;t about adding more
              </span>, but about{" "}
              <span className="bg-[rgba(219, 238, 192, 0.8)] px-1.5 py-0.5 rounded">
                making the right things easier to see, understand, and act on
              </span>.
            </p>
            <p>
              These are{" "}
              <span className="bg-[#C7F2F0] px-1.5 py-0.5 rounded">
                principles I now carry into every problem I approach
              </span>.
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
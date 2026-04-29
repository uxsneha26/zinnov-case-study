"use client";

import { useEffect } from "react";
import { bodySerif, caveat, instrumentSerif, labelSans } from "@/lib/fonts";

const pageBg =
  "bg-[#f2ebe3] bg-[radial-gradient(ellipse_85%_65%_at_15%_10%,rgba(232,223,212,0.55)_0%,transparent_52%),radial-gradient(ellipse_70%_50%_at_90%_85%,rgba(221,212,200,0.35)_0%,transparent_48%)]";

const h1Class = `${instrumentSerif.className} tracking-[0.06em] text-neutral-800`;
const h2Class = `${instrumentSerif.className} tracking-[0.08em] text-neutral-800`;
const h3Class = `${instrumentSerif.className} tracking-[0.04em] text-neutral-800`;
const metaClass = `${labelSans.className} text-xs font-medium uppercase tracking-[0.14em] text-neutral-500`;
const bodyClass = `${bodySerif.className} text-neutral-700`;
const labelClass = `${labelSans.className} text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500`;

const ctaClass = `${instrumentSerif.className} no-print inline-flex items-center justify-center rounded-full border border-neutral-300/80 bg-white/70 px-8 py-3 text-base text-neutral-800 shadow-sm backdrop-blur-sm transition duration-300 ease-out hover:scale-[1.02] hover:border-[#BEA3A0]/50 hover:bg-[#EADCD4]/45`;

function DownloadResumeButton() {
  return (
    <button type="button" className={ctaClass} onClick={() => window.print()}>
      Download Resume
    </button>
  );
}

const projectCardClass =
  "rounded-2xl border border-neutral-200/50 bg-[#e8dfd6]/55 p-4 md:p-5 transition-all duration-300 ease-out hover:scale-[1.015] hover:border-[#BEA3A0]/40 hover:shadow-lg";

function ExperienceProjectCard({
  title,
  tags,
  description,
  revealClassName = "about-reveal about-delay-2",
}: {
  title: string;
  tags: string[];
  description: string;
  revealClassName?: string;
}) {
  return (
    <div className={`${projectCardClass} ${revealClassName}`}>
      <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <h4
          className={`${instrumentSerif.className} text-lg font-semibold tracking-[0.04em] text-neutral-800 md:text-xl`}
        >
          {title}
        </h4>
        <ul className="flex flex-wrap gap-1.5 sm:max-w-[58%] sm:justify-end">
          {tags.map((t) => (
            <li
              key={t}
              className={`${labelSans.className} rounded-full bg-white/60 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500`}
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
      <p className={`${bodyClass} text-[0.95rem] leading-relaxed text-neutral-700 md:text-base`}>
        {description}
      </p>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".about-reveal");
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main
      className={`${pageBg} min-h-screen px-6 py-20 pb-32 md:px-10 md:py-28`}
      data-cursor
      data-cursor-color="#8C6A6A"
    >
      <div className="about-reveal-parent mx-auto flex max-w-5xl flex-col">
        {/* SECTION 1 — HERO (unchanged) */}
        <section className="about-reveal about-delay-0 mb-8 md:mb-10">
          <h1 className={`${h1Class} mb-6 text-4xl font-normal text-center leading-tight md:text-5xl`}>About me</h1>
          <p
            className={`${caveat.className} mx-auto mb-10 max-w-lg text-2xl leading-snug text-neutral-600 md:text-3xl`}
          >
            A designer shaped by spatial thinking and quiet intent.
          </p>
          <div className="flex justify-center">
            <DownloadResumeButton />
          </div>
        </section>

        {/* SECTION 2 — STORY (web only, editorial 2-col + pull quote) */}
        <section
          className="no-print about-reveal about-delay-1 mb-20 md:mb-28"
          aria-label="Story"
        >
          <div className="mx-auto max-w-5xl border-b border-neutral-300/35 pb-20 md:pb-28">
            <div className="grid gap-12 md:grid-cols-2 md:gap-x-14 md:gap-y-14">
              <div
                className={`${bodyClass} space-y-10 text-lg leading-loose md:text-[1.05rem] md:leading-loose [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:-mt-0.5 [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:font-serif [&>p:first-child]:first-letter:text-[2.85rem] [&>p:first-child]:first-letter:leading-[0.85] [&>p:first-child]:first-letter:text-[#5c534c]`}
              >
                <p>
                I spent my childhood in the colourful (mostly Pink) city of Jaipur. 
                As the city would seem on the outside, so it was from within - it drew me
                toward a need to express myself without saying a lot and inadvertently opened
                doors of creative aspirations in my over imaginative mind. 
                Thus, brushes and quills became my constant companions.
                </p>
                <p>
                Every sight of the city was a frame etched in my memory which I believe got me 
                to pursue a career path that may land me a role where I could contribute to 
                eventually designing cities myself - Architecture.
                </p>
                <p>
                Throughout my journey of a 5 year Degree course and 4 years of field experience,
                I realised two things - one - I am too sensitive in my design approach that was
                looked down upon by most people I worked with who didn’t value sustainable building
                practices (mud bricks, living roofs and such), two - I was too organised in my
                execution to have anyone appreciate my obsession with it.
                </p>
                <p>
                Well ... off to bigger and scarier adventures! I now empathize with my sensitivity
                and strategize due to my OCD. My paintings and poems too have taken a profound turn
                as now I am less stressed about the above traits becoming a liability (pun intended) ;)
                </p>
              </div>

              <div className={`${bodyClass} space-y-10 text-lg leading-loose md:pt-16 md:text-[1.05rem] md:leading-loose`}>
              <blockquote
                className={`${instrumentSerif.className} relative z-10 -my-4 text-center md:col-span-2 md:-my-10`}
              >
                <p className="mx-auto max-w-[22rem] text-balance text-3xl font-light italic leading-snug text-[#6b5f56] md:max-w-[26rem] md:text-4xl md:leading-snug">
                  &ldquo;I am a designer skilled at creating meaningful experiences in digital as well
                  as real world.&rdquo;
                </p>
              </blockquote>
              <div className={`${bodyClass} space-y-10 text-lg leading-loose md:pt-16 md:text-[1.05rem] md:leading-loose`}></div>
                <p>
                My work involves problem solving for the larger part which I go about by having design
                thinking included in every step of the journey, not because it’s supposed to be a standard
                practice but also because that is how I have taught myself to look for creative solutions
                that tell a story people can relate to.
                </p>
                <p>
                I ask myself - “How can I contribute to making this person’s lives easier?” or “How can 
                I make them realise they need this but might not know it?” - while I ideate.
                </p>
                <p>
                From clear communication during Steer Co presentations, to thoroughly organised design
                process, I believe I have figured all (or enough) out to move to a new milestone in my career.
                </p>
                <p>
                My art has evolved to more tactile mediums of clay and resin, as I am more confident
                to allow myself to explore and express freely. My poems are now written mostly in Hindi
                as it makes me be more aware.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resume (excludes story; section 1 remains on screen before this block) */}
        <div
          id="resume"
          className="resume-page about-reveal about-delay-2 mx-auto w-full max-w-3xl"
        >
          {/* SECTION 3 — IDENTITY */}
<section className="about-reveal about-delay-3 mb-16 md:mb-20">
  <div className="relative flex flex-col md:flex-row items-start gap-6 md:gap-7">

    {/* TEXT BLOCK */}
    <div className="min-w-0 flex-1 text-left space-y-2">
      <p className={`${metaClass} mb-3`}>Profile</p>

      <h2 className={`${h2Class} mb-2 text-3xl font-normal tracking-[0.05em] md:text-4xl`}>
        Sneha Sharma
      </h2>

      <p className={`${labelSans.className} mb-6 text-sm font-medium tracking-wide text-neutral-600`}>
        Product Designer
      </p>

      <p className={`${labelClass} mb-6 text-neutral-500`}>
        Currently at Lollypop Design Studio
      </p>

      <p className={`${bodyClass} max-w-xl text-lg leading-loose text-neutral-700`}>
        I design systems and experiences shaped by spatial thinking, structure and human
        behavior.
      </p>
    </div>

    {/* IMAGE */}
<div
  className="mx-auto md:mx-0
  h-28 w-28 md:h-44 md:w-44
  rounded-full border border-neutral-200/80
  bg-gradient-to-br from-[#e8dfd6] to-[#d4c4b8] shadow-inner"
  aria-hidden
/>
  </div>
</section>

          {/* SECTION 4 — EXPERIENCE (project-oriented) */}
          <section className="about-reveal about-delay-4 mb-20 md:mb-24">
          <h2 className={`${h2Class} mb-8 text-2xl font-normal md:text-3xl`}>
            Experience
          </h2>
            <article className="mb-20 md:mb-24">
              <header>
                <h3 className={`${h3Class} text-xl font-normal md:text-2xl`}>Lollypop Design Studio</h3>
                <p className={`${labelSans.className} mt-2 text-sm font-medium text-neutral-600`}>
                  User Experience Designer
                </p>
                <p className={`${labelSans.className} mt-1 text-xs tracking-wide text-neutral-500`}>
                  Aug 2023 – Present
                </p>
              </header>
              <div className="my-8 h-px w-full bg-neutral-300/40" aria-hidden />
              <p className={`${metaClass} mb-6 text-left`}>Selected Work within Experience</p>
              <div className="flex flex-col gap-6 md:gap-8">
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-2"
                  title="JK Cement Platform"
                  tags={["UX Strategy", "Design Systems", "B2B Platform"]}
                  description="Led experience design for a unified platform consolidating 9 applications into a single system. Structured workflows to align business processes and improve usability across stakeholders."
                />
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-3"
                  title="Mordor Intelligence"
                  tags={["E-commerce", "Personalization", "Dashboard Design"]}
                  description="Designed an insights-driven platform with custom report generation and personalized dashboards to support decision-making."
                />
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-4"
                  title="Peak XV / Banglalink / Surya Lighting"
                  tags={["Concept Design", "Research", "UX Strategy"]}
                  description="Developed proof-of-concepts and pitch experiences focused on user engagement, learning flows and behavioral insights."
                />
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-5"
                  title="Green SM"
                  tags={["User Research", "Interviews"]}
                  description="Conducted interviews with 30+ users across Bangalore and Chennai. Mapped user insights from ride-hailing competitors into actionable design directions."
                />
              </div>
            </article>

            <article>
              <header>
                <h3 className={`${h3Class} text-xl font-normal md:text-2xl`}>Studio Ardete</h3>
                <p className={`${labelSans.className} mt-2 text-sm font-medium text-neutral-600`}>
                  Architect
                </p>
                <p className={`${labelSans.className} mt-1 text-xs tracking-wide text-neutral-500`}>
                  Nov 2021 – Jul 2023
                </p>
              </header>
              <div className="my-8 h-px w-full bg-neutral-300/40" aria-hidden />
              <p className={`${metaClass} mb-6 text-left`}>Selected Work within Experience</p>
              <div className="flex flex-col gap-6 md:gap-8">
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-2"
                  title="Purwa Village"
                  tags={["Spatial Design", "Sustainability", "Research"]}
                  description="Worked on a community development project focusing on biodiversity, organic farming and natural building practices. Managed on-ground execution and stakeholder coordination."
                />
                <ExperienceProjectCard
                  revealClassName="about-reveal about-delay-3"
                  title="Design Communication & Publications"
                  tags={["Graphic Design", "Content Writing"]}
                  description="Created architectural representations and published work across platforms like ArchDaily. Contributed to in-house design manuals and storytelling."
                />
              </div>
            </article>
          </section>

          {/* SECTION 5 — EDUCATION */}
          <section className="about-reveal about-delay-5 mb-16 md:mb-20">
            <h2 className={`${h2Class} mb-12 text-2xl font-normal md:text-3xl`}>Education</h2>
            <dl className="space-y-3">
              {[
                ["Interaction Design Certification", "IISc Bangalore"],
                ["UX Design Certification", "Carvaan"],
                ["B.Arch", "Aayojan School of Architecture, Jaipur"],
              ].map(([title, place]) => (
                <div key={title}>
                  <dt className={`${bodySerif.className} text-lg font-semibold text-neutral-800`}>
                    {title}
                  </dt>
                  <dd className={`${labelSans.className} mt-1 text-sm text-neutral-500`}>{place}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* SECTION 6 — CORE CAPABILITIES */}
          <section className="about-reveal about-delay-6 mb-20 md:mb-24">
            <h2 className={`${h2Class} mb-10 text-2xl font-normal md:text-3xl`}>Core Capabilities</h2>
            <ul
              className={`${labelSans.className} flex flex-wrap gap-x-2 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-neutral-600`}
            >
              {[
                "UX Strategy",
                "Research & Synthesis",
                "Design Systems",
                "Business Strategy",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-neutral-300/60 bg-white/50 px-3 py-2 text-[11px] tracking-[0.14em] text-neutral-600 backdrop-blur-sm"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </section>

          {/* Bottom CTA */}
          <section className="about-reveal about-delay-7 border-t border-neutral-300/30 pt-12 text-center md:pt-16">
            <p
              className={`${instrumentSerif.className} mx-auto mb-10 max-w-md text-lg leading-loose text-neutral-700 md:text-xl`}
            >
              If something here resonated, take a closer look.
            </p>
            <DownloadResumeButton />
          </section>
        </div>
      </div>
    </main>
  );
}

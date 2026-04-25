"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { bodySerif, caveat } from "@/lib/fonts";

const DEFAULT_RESUME_HREF =
  "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing";

  const linkBase =
  "text-[15px] md:text-[20px] tracking-wide text-[#3d3832] transition-colors duration-300 hover:text-[#a8a29e]";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar({ resumeHref = DEFAULT_RESUME_HREF }: { resumeHref?: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const lastY = useRef(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 8) setVisible(true);
      else if (delta > 4) setVisible(false);
      else if (delta < -4) setVisible(true);
      lastY.current = y;
    };
    lastY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const run = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => scrollToSection(hash));
      });
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, [isHome, pathname]);

  return (
    <nav
    className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-out ${
      visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    }`}
      aria-label="Primary"
    >
      {/* FULL WIDTH BLUR BACKGROUND */}
<div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
  <div className="absolute inset-0 bg-gradient-to-b from-[#f2ebe3]/80 via-[#f2ebe3]/40 to-transparent" />
  <div className="absolute inset-0 backdrop-blur-lg [mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.65)_45%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,rgba(0,0,0,0.65)_45%,transparent_100%)]" />
</div>

{/* CONTENT CONTAINER */}
<div className="relative mx-auto max-w-6xl px-6 py-5 md:py-6">
  <div className="relative flex h-full items-center justify-center gap-x-8">

        
          <Link
            href="/#projects"
            scroll={false}
            className={`${bodySerif.className} ${linkBase}`}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("projects");
              }
            }}
          >
            Works
          </Link>
          <Link
            href="/#personal"
            scroll={false}
            className={`${bodySerif.className} ${linkBase}`}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("personal");
              }
            }}
          >
            Gallery
          </Link>
          <Link
            href="/#hero"
            scroll={false}
            className={`${caveat.className} text-[18px] md:text-[28px] leading-none text-[#3d3832] transition-colors duration-300 hover:text-[#a8a29e]`}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("hero");
              }
            }}
          >
            SS
          </Link>
          <Link
            href="/#contact"
            scroll={false}
            className={`${bodySerif.className} ${linkBase}`}
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                scrollToSection("contact");
              }
            }}
          >
            Contact
          </Link>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${bodySerif.className} ${linkBase}`}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

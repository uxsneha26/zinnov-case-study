"use client";

import { useCallback, useState } from "react";
import { instrumentSerif } from "@/lib/fonts";
import { FaLinkedin } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const CONTACT_EMAIL = "hello@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-profile";
const PDF_URL =
  "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing";

const heroBg =
  "bg-[#f2ebe3] bg-[radial-gradient(ellipse_85%_65%_at_15%_10%,rgba(232,223,212,0.55)_0%,transparent_52%),radial-gradient(ellipse_70%_50%_at_90%_85%,rgba(221,212,200,0.35)_0%,transparent_48%)]";

/**
 * Wrapper mirrors PersonalSection: outer -mt-[100vh] + inner -mt-[80vh]/lg:-mt-[90vh], then sticky h-screen.
 */
export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <section
      id="contact-section"
      className="relative z-30 -mt-[100vh] w-full"
      aria-labelledby="contact-heading"
      data-cursor
      data-cursor-color="#C49C9C"
    >
      <div className="relative z-30 -mt-[80vh] md:-mt-[80vh] lg:-mt-[90vh] w-full h-[200vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="relative h-screen w-full">
            <div
        className={`relative flex min-h-0 flex-1 flex-col ${heroBg} px-8 pb-10 pt-16 md:px-16 md:pb-14 md:pt-20 lg:px-24`}
      >
        <div className="mx-auto grid w-full max-w-6xl flex-1 grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          
          <div className="flex min-w-0 flex-col">
            <h2 id="contact-heading" className="text-[#412F2F]">
              <span
                className={`${instrumentSerif.className} block text-lg font-normal tracking-tight text-neutral-600 md:text-xl`}
              >
                if you saw something you liked
              </span>
              <span
                className={`${instrumentSerif.className} mt-3 block text-4xl font-normal leading-[1.15] tracking-tight md:text-5xl lg:text-6xl`}
              >
                Let&apos;s Talk
              </span>
            </h2>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`${instrumentSerif.className} group inline-flex items-center gap-2 text-left text-base text-neutral-600 transition-colors duration-200 hover:text-[#BEA3A0] md:text-lg`}
                  >
                    <span>{CONTACT_EMAIL}</span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-300/80 bg-white/60 text-neutral-600 transition-colors duration-200 group-hover:border-[#BEA3A0]/50 group-hover:text-[#BEA3A0]">
                      <FiCopy className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="sr-only">Copy email</span>
                  </button>
                  {copied && (
                    <span
                      className={`${instrumentSerif.className} text-sm text-[#BEA3A0]`}
                      role="status"
                    >
                      Copied!
                    </span>
                  )}
                </div>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-neutral-600 transition-colors duration-200 hover:text-[#BEA3A0]"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin className="h-6 w-6" aria-hidden />
                </a>
              </div>

              <div className="flex min-w-0 justify-center md:justify-end">
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/40 shadow-sm backdrop-blur-sm transition duration-300 ease-out hover:scale-[1.02] hover:opacity-[0.98]"
                >
                  <div className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-neutral-100/90 to-[#EADCD4]/40 p-8 text-center">
                    <span
                      className={`${instrumentSerif.className} text-lg text-neutral-700 md:text-xl`}
                    >
                      View PDF
                    </span>
                    <span className="text-xs text-neutral-500">
                      Résumé / portfolio
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <p
              className={`${instrumentSerif.className} mx-auto mt-auto max-w-6xl pt-10 text-center text-xs text-neutral-500 md:text-left`}
            >
              Vibe coded with love using Cursor and ChatGPT.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
